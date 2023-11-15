// src/components/MerchCard.tsx
import {
    Box,
    Image,
    Badge,
    Text,
    Flex,
  } from '@chakra-ui/react';
  
  interface MerchCardProps {
    id: string;
    name: string;
    quantity: string;
    imageSrc: string;
  }
  
  const MerchCard: React.FC<MerchCardProps> = ({
    id,
    name,
    quantity,
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
            {id} {name}
          </Text>
          <Flex align="center" justify="flex-end">
            <Badge colorScheme="green">Obtained {quantity}</Badge>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default MerchCard;
  