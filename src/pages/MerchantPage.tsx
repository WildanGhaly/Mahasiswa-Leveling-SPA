// src/components/modals/MenuPage.tsx

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import MerchCard from "../components/cards/MerchCard";
import ReusableHeader from "../components/layout/ReusableHeader";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Merchant } from "../types/merchant";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
import { getTotalMerchants, getMerchantByPage } from "../services/merchantService";

const MerchantPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(18);
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParams({ search: value });
    setSearchValue(value);
    console.log(value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString(), search: searchValue });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      console.log('searchValue', searchValue);
      getTotalMerchants(searchValue, filter).then((data) => {
        setTotalPages(Math.ceil(data[0].TotalMerchants / limit));
      });

      getMerchantByPage(currentPage, limit, searchValue, filter).then((data) => {
        setMerchants(data);
      });
    }
  }, [currentPage, filter, isLoggedIn, limit, navigate, searchValue]);

  return (
    <Container maxW="container.lg">
      <ReusableHeader headingName="My Merchant" />
      <Flex align="center" justify="space-between" py={4}>
        <Flex mr={4} align="center" w="70%">
          <Icon as={SearchIcon} mr={2} />
          <Input 
            placeholder="Search products" 
            value={searchParams.get('search') || ''}
            onChange={handleSearchChange}/>
        </Flex>
        <Select 
          placeholder="Select filter" 
          w="20%"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="Sort Asc">Sort Ascending</option>
          <option value="Sort Desc">Sort Descending</option>
        </Select>
      </Flex>
      {/* Merch Listings */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>
        {merchants.map((merchants) => (
          <MerchCard
            key={merchants.MerchantID}
            id={merchants.MerchantID}
            quantity={merchants.MerchantQuantity}
            name={merchants.MerchantName}
            imageSrc={merchants.MerchantImagePath}
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

export default MerchantPage;
