// src/components/ProductCard.tsx
import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  stock: string;
  name: string;
  price: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  stock,
  name,
  price,
  imageSrc,
}) => {
  return (
    <Link to={`/Product/${id}`}>
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box
        h="200px" 
        bg="gray.200"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={imageSrc}
          alt={name}
          objectFit="cover"
          w="100%" 
          h="100%" 
        />
      </Box>
      <Box p={4}>
        <Text fontWeight="semibold" fontSize="lg">
          {name}
        </Text>
        <Text color="gray.600" fontSize="sm">
          Price: {price}
        </Text>
        <Flex align="center" justify="flex-end">
          <Badge colorScheme="green">Stock: {stock}</Badge>
        </Flex>
      </Box>
    </Box>
  </Link>
  );
};

export default ProductCard;
