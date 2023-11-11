// src/components/ProductCard.tsx
import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

interface ProductCardProps {
  name: string;
  price: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageSrc,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box
        h="200px" // Set the desired square height
        bg="gray.200"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={imageSrc}
          alt={name}
          objectFit="cover" // Maintain aspect ratio and cover the entire square
          w="100%" // Make the image take the full width of the square
          h="100%" // Make the image take the full height of the square
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
          <IconButton
            aria-label="Add to Cart"
            icon={<AddIcon />}
            variant="ghost"
          />
          <Badge colorScheme="green">In Stock</Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
