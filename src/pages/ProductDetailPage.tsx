// src/pages/ProductDetailPage.tsx
import { useParams } from 'react-router-dom';
import {
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import ReusableHeader from '../components/ReusableHeader';

const ProductDetailPage = () => {
  const { id } = useParams();

  const dummyProduct = {
    ProductID: id,
    ProductName: 'Dummy Product',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    StockQuantity: 10,
    Price: 100,
    ImagePath: '/public/image/1.jpg',
  };

  const [quantity, setQuantity] = useState(1);

  const handleBuyClick = () => {
    console.log(`Beli ${quantity} produk dengan ID ${id}`);
  };

    const handleDecrease = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    }

    const handleIncrease = () => {
        setQuantity((prev) => Math.min(1000000, prev + 1));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(e.target.value) || 1;
        const limitedValue = Math.min(1000000, Math.max(1, inputValue));
        setQuantity(limitedValue);
    };


  return (
    <Container maxW="container.lg" mt={8}>
        <ReusableHeader headingName={dummyProduct.ProductName}/>
      <Flex direction="column" alignItems="center" marginTop="2.5vh">
        <Box
          h="350px"
          bg="gray.200"
          overflow="hidden"
          position="relative"
          boxShadow="base"
          borderRadius="md"
        >
          <Image
            src={dummyProduct.ImagePath}
            alt={dummyProduct.ProductName}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
        <Heading mt={4}>{dummyProduct.ProductName}</Heading>
        <Text mt={2}>{dummyProduct.Description}</Text>
        <Text mt={2}>Stock: {dummyProduct.StockQuantity}</Text>
        <Text mt={2}>Price: ${dummyProduct.Price}</Text>
        <Box mt={4} boxShadow="md" p={4} borderRadius="md" bg="white">
          <Text>Amount:</Text>
          <Flex alignItems="center">
            <Button onClick={handleDecrease} colorScheme="teal" disabled={quantity === 1}>
              <FaMinus />
            </Button>
            <Input
                type="number"
                min={1}
                max={1000000}  
                value={quantity}
                onChange={handleInputChange}
                mx={2}
                w="150px"
                textAlign="center"
                />
            <Button onClick={handleIncrease} colorScheme="teal" ml={2}>
              <FaPlus />
            </Button>
            <Button ml={4} colorScheme="teal" onClick={handleBuyClick} leftIcon={<FaShoppingCart />}>
              Buy
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProductDetailPage;