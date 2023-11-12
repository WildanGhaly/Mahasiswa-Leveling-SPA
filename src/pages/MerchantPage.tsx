import { SearchIcon } from "@chakra-ui/icons";
import { Container, Flex, Icon, Input, Select, SimpleGrid } from "@chakra-ui/react";
import MerchCard from "../components/MerchCard";
import ReusableHeader from "../components/ReusableHeader";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MerchantPage = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }

    return (
        <Container maxW="container.lg">
          <ReusableHeader headingName="My Merchant" />
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
            {/* Product Card Component */}
            <MerchCard
              name="Product 1"
              imageSrc="public/image/1.jpg"
            />
            <MerchCard
              name="Product 2"
              imageSrc="public/image/2.jpg"
            />
            <MerchCard
              name="Product 3"
              imageSrc="public/image/3.jpg"
            />
            <MerchCard
              name="Product 4"
              imageSrc="public/image/4.jpg"
            />
            <MerchCard
              name="Product 5"
              imageSrc="public/image/5.jpg"
            />
            <MerchCard
              name="Product 6"
              imageSrc="public/image/6.jpg"
            />
            {/* Add more product cards */}
          </SimpleGrid>
        </Container>
    );
};

export default MerchantPage