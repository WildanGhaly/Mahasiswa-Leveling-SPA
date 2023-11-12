// src/components/HistoryCard.tsx
import {
    Box,
    Image,
    Badge,
    Text,
    Flex,
    IconButton,
  } from '@chakra-ui/react';
  import { CalendarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
  
  interface HistoryCardProps {
    name: string;
    date: string;
    imageSrc: string;
    id: string;
  }
  
  const HistoryCard: React.FC<HistoryCardProps> = ({
    name,
    date,
    imageSrc,
    id,
  }) => {
    return (
        <Link to={`/History/${id}`}>
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
            <IconButton
              aria-label="Add to Cart"
              icon={<CalendarIcon />}
              variant="ghost"
            />
            <Badge colorScheme="green">{date}</Badge>
          </Flex>
        </Box>
      </Box>
      </Link>
    );
  };
  
  export default HistoryCard;
  