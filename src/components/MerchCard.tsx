// src/components/MerchCard.tsx
import {
    Box,
    Image,
    Badge,
    Text,
    Flex,
  } from '@chakra-ui/react';
  
  interface MerchCardProps {
    name: string;
    imageSrc: string;
  }
  
  const MerchCard: React.FC<MerchCardProps> = ({
    name,
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
            {name}
          </Text>
          <Flex align="center" justify="flex-end">
            <Badge colorScheme="green">Obtained</Badge>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default MerchCard;
  