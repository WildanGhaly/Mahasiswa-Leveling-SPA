import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Input, Flex, SimpleGrid, Select, Icon, Box, Button, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ProductCard from "../components/cards/ProductCard";
import ReusableHeader from "../components/layout/ReusableHeader";
import { getTotalProducts, getProductByPage } from "../services/productService";
import { Product } from "../types/product";
import { useAuth } from "../context/AuthContext";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const DashboardPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const [products, setProducts] = useState<Product[]>([]);
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(18);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParams({ search: value });
    setSearchValue(value);
    console.log(value);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {

      getTotalProducts().then((data) => {
        setTotalPages(Math.ceil(data[0].TotalProducts / limit));
      });

      getProductByPage(currentPage, limit, searchValue).then((data) => {
        setProducts(data);
      });
    }
  }, [currentPage, isLoggedIn, limit, navigate, searchValue]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  return (
    <Container maxW="container.lg">
      <ReusableHeader headingName="Dashboard" />
      <Flex align="center" justify="space-between" py={4}>
        <Flex mr={4} align="center" w="70%">
        <Icon as={SearchIcon} mr={2} />
        <Input
          placeholder="Search products"
          value={searchParams.get('search') || ''}
          onChange={handleSearchChange}
        />
      </Flex>
        <Select placeholder="Select filter" w="20%">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
      </Flex>
      {/* Product Listings */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>
        {products.map((product) => (
          <ProductCard
            key={product.ProductID}
            id={product.ProductID}
            stock={product.StockQuantity}
            name={product.ProductName}
            price={product.Price}
            imageSrc={product.ImagePath}
          />
        ))}
      </SimpleGrid>

      <Box py={4} margin={10}>
        <HStack justify="center">
          {/* Tombol Halaman Pertama */}
          <Button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            boxShadow={"none"}
            variant={"ghost"}
          >
            <FaAngleDoubleLeft />
          </Button>

          {/* Tombol Sebelumnya */}
          <Button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            fontWeight="bold"
            boxShadow={"none"}
            variant={"ghost"}
          >
            <FaAngleLeft />
          </Button>

          {/* Tombol Nomor Halaman */}
          {[...Array(totalPages).keys()].slice(Math.max(0, currentPage - 5), Math.min(currentPage + 4, totalPages)).map(page => (
            <Button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              variant={page + 1 === currentPage ? "solid" : "ghost"}
              boxShadow={page + 1 === currentPage ? "md" : "none"}
              fontWeight={"bold"}
              borderBlock={page + 1 === currentPage ? "1px" : "none"}
              borderColor={"gray.400"}
            >
              {page + 1}
            </Button>
          ))}

          {/* Tombol Selanjutnya */}
          <Button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            fontWeight="bold"
            boxShadow={"none"}
            variant={"ghost"}
          >
            <FaAngleRight />
          </Button>

          {/* Tombol Halaman Terakhir */}
          <Button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            boxShadow={"none"}
            variant={"ghost"}
          >
            <FaAngleDoubleRight />
          </Button>
        </HStack>
      </Box>

    </Container>
  );
};

export default DashboardPage;
