// src/components/pages/AboutPage.tsx
import { Box, Heading, Text, Image, VStack, Divider } from '@chakra-ui/react';

const AboutPage = () => {
    return (
      <Box p={3}>
        <VStack spacing={2} align="stretch" >
          <Box  textAlign="center" py={10} px={6}>
            <Heading 
              display="inline-block"
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, teal.400, teal.600)"
              backgroundClip="text"
              marginBottom="10px"
              padding="20px">
              About Page
            </Heading>
            <Divider />
            <Text fontSize="lg" mt={3} w="60%" textAlign="center" mx="auto">
              At our website, you have the opportunity to turn your points earned from Mahasiswa Leveling into fantastic merchandise. It's a seamless process - simply register by entering the token provided in your Mahasiswa Leveling user profile. Once registered, you can top up your account, explore our wide range of merchandise, and even track your purchase history.
              We're here to make your online shopping experience both rewarding and enjoyable. Feel free to explore our selection of merchandise and discover the convenience of converting your hard-earned points into tangible items.
            </Text>
          </Box>
          <Box>
            <Image 
              borderRadius='full'
              boxSize='150px'
              src='/image/logo.png' 
              alt='Company Logo'
              m='auto'
            />
          </Box>
        </VStack>
      </Box>
    );
  };
  
export default AboutPage;
