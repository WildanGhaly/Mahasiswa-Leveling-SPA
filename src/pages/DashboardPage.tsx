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
import { getProducts } from '../services/productService';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';

const DashboardPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      getProducts().then(data => {
        setProducts(data);
      });
    }
  }, [isLoggedIn, navigate]);
  
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
        {products.map(product => (
          <ProductCard
            id={product.ProductID}
            stock={product.StockQuantity}
            name={product.ProductName}
            price={product.Price}
            imageSrc={product.ImagePath}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default DashboardPage;
