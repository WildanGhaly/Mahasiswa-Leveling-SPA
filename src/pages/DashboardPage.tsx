// src/pages/DashboardPage.tsx
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Input,
  Flex,
  SimpleGrid,
  Select,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ProductCard from '../components/ProductCard'; // Create this component separately
import ReusableHeader from '../components/ReusableHeader';

const DashboardPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
  }

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
        {/* Product Card Component */}
        <ProductCard
          id="1"
          name="Product 1"
          price="$20"
          imageSrc="public/image/1.jpg"
        />
        <ProductCard
          id="2"
          name="Product 2"
          price="$30"
          imageSrc="public/image/2.jpg"
        />
        <ProductCard
          id="3"
          name="Product 3"
          price="$100"
          imageSrc="public/image/3.jpg"
        />
        <ProductCard
          id="4"
          name="Product 4"
          price="$20"
          imageSrc="public/image/4.jpg"
        />
        <ProductCard
          id="5"
          name="Product 5"
          price="$30"
          imageSrc="public/image/5.jpg"
        />
        <ProductCard
          id="6"
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
