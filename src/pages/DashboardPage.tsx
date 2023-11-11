// src/pages/DashboardPage.tsx
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Input,
  Flex,
  Spacer,
  IconButton,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ProductCard from '../components/ProductCard'; // Create this component separately

const DashboardPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
  }

  return (
    <Container maxW="container.lg">
      <Flex align="center" justify="space-between" py={4}>
        <Heading>Dashboard</Heading>
        <Flex align="center">
          <Input placeholder="Search products" mr={4} />
          <IconButton
            aria-label="Filter"
            icon={<AddIcon />}
            variant="ghost"
          />
          <Spacer />
          <Badge colorScheme="green" mr={2}>
            My Points: 500
          </Badge>
          <Badge colorScheme="purple">
            My Money: $100
          </Badge>
        </Flex>
      </Flex>
      {/* Sliding Content Here */}
      <Box h="200px" bg="gray.200" mb={4}>
        {/* Sliding content goes here */}
        {/* You can use a library like react-slick for sliding content */}
      </Box>
      {/* Product Listings */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>
        {/* Product Card Component */}
        <ProductCard
          name="Product 1"
          price="$20"
          imageSrc="public/image/1.jpg"
        />
        <ProductCard
          name="Product 2"
          price="$30"
          imageSrc="public/image/2.jpg"
        />
        <ProductCard
          name="Product 3"
          price="$100"
          imageSrc="public/image/3.jpg"
        />
        <ProductCard
          name="Product 4"
          price="$20"
          imageSrc="public/image/4.jpg"
        />
        <ProductCard
          name="Product 5"
          price="$30"
          imageSrc="public/image/5.jpg"
        />
        <ProductCard
          name="Product 6"
          price="$100"
          imageSrc="public/image/6.jpg"
        />
        {/* Add more product cards */}
      </SimpleGrid>
    </Container>
  );
};

export default DashboardPage;
