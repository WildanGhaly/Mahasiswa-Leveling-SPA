import { SearchIcon } from "@chakra-ui/icons";
import { Container, Flex, Icon, Input, Select, SimpleGrid } from "@chakra-ui/react";
import MerchCard from "../components/MerchCard";
import ReusableHeader from "../components/ReusableHeader";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMerchant } from "../services/merchantService";
import { Merchant } from "../types/merchant";

const MerchantPage = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [merchants, setMerchants] = useState<Merchant[]>([]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            getMerchant().then(data => {
                setMerchants(data);
            });
        }
    }, [isLoggedIn, navigate]);

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
          {/* Merch Listings */}
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>
          {merchants.map(merchants => (
          <MerchCard
              id={merchants.MerchantID}
              quantity={merchants.MerchantQuantity}
              name={merchants.MerchantName}
              imageSrc={merchants.MerchantImagePath}
          />
          ))}
          </SimpleGrid>
        </Container>
    );
};

export default MerchantPage