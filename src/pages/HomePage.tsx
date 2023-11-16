// src/components/modals/HomePage.tsx

import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
        marginBottom="10px"
        padding="20px">
        Home Page
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Welcome to the home page!
      </Text>
      <Text color={'gray.500'}>
        Discover our amazing application with lots of features and capabilities.
      </Text>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        mt={3}
        mb={3}
        _hover={{
          bgGradient: "linear(to-r, teal.600, teal.700, teal.800)",
        }}
        onClick={handleGetStarted}
        >
        Get Started
      </Button>
    </Box>
  );
};

export default HomePage;
