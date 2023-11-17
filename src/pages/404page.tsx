import { Box, Heading, Text, Button, Image, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // asumsikan Anda menggunakan react-router untuk navigasi

const NotFoundPage = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'white');

    return (
        <Box textAlign="center" py={10} px={6} bg={bgColor} minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Image src="/image/error.png" alt="404 - Not Found" boxSize="300px" mx="auto" mb={8} />
            <Heading display="inline-block" as="h1" size="2xl" bgGradient="linear(to-r, teal.400, blue.500)" backgroundClip="text" padding="20px">
                404 - Page Not Found
            </Heading>
            <Text fontSize="18px" mt={3} mb={2} color={textColor}>
                Sorry, we can't find the page you are looking for.
            </Text>
            <Text color={'gray.500'} mb={6}>
                Please check the URL in the address bar and try again.
            </Text>

            <Button colorScheme="teal" variant="solid" as={Link} to="/">
                Back to Home
            </Button>
        </Box>
    );
};

export default NotFoundPage;
