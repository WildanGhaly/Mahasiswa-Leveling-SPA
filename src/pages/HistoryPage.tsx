import { SearchIcon } from "@chakra-ui/icons";
import { Container, Flex, Icon, Input, Select, SimpleGrid } from "@chakra-ui/react";
import HistoryCard from "../components/HistoryCard";
import ReusableHeader from "../components/ReusableHeader";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HistoryPage = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }

    return (
        <Container maxW="container.lg">
          <ReusableHeader headingName="History" />
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
            <HistoryCard
                name="Product 1"
                imageSrc="public/image/1.jpg"
                date="2023-11-01"
            />
            <HistoryCard
                name="Product 2"
                imageSrc="public/image/2.jpg"
                date="2023-11-02"
            />
            <HistoryCard
                name="Product 3"
                imageSrc="public/image/3.jpg"
                date="2023-11-03"
            />
            <HistoryCard
                name="Product 4"
                imageSrc="public/image/4.jpg"
                date="2023-11-04"
            />
            <HistoryCard
                name="Product 5"
                imageSrc="public/image/5.jpg"
                date="2023-11-05"
            />
            <HistoryCard
                name="Product 6"
                imageSrc="public/image/6.jpg"
                date="2023-11-06"
            />
            {/* Add more product cards */}
          </SimpleGrid>
        </Container>
      );
    
}

export default HistoryPage