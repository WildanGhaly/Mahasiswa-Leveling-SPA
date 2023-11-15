// src/pages/DashboardPage.tsx

import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Container,
  Input,
  Flex,
  SimpleGrid,
  Select,
  Icon,
  Box,
  Button,
  HStack,
  
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import ProductCard from "../components/cards/ProductCard";
import ReusableHeader from "../components/layout/ReusableHeader";
import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";
import { Product } from "../types/product";


const DashboardPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get('page') || '1', 10)
  );
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams({ page: newPage.toString() });
  };
  

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      getProducts().then((data) => {
        setProducts(data);
      });
    }
  }, [isLoggedIn, navigate, searchParams]);

  return (
    <Container maxW="container.lg">
      <ReusableHeader headingName="Dashboard" />
      <Flex align="center" justify="space-between" py={4}>
        <Flex mr={4} align="center" w="70%">
          <Icon as={SearchIcon} mr={2} />
          <Input placeholder="Search products" />
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
      <Box py={4}>
        <HStack justify="center">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon />
          </Button>
          {[...Array(totalPages).keys()].slice(Math.max(0, currentPage - 5), Math.min(currentPage + 4, totalPages)).map(page => (
            <Button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              variant={page + 1 === currentPage ? "solid" : "ghost"}
            >
              {page + 1}
            </Button>
          ))}
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon />
          </Button>
        </HStack>
      </Box>

    </Container>
  );
};

export default DashboardPage;
