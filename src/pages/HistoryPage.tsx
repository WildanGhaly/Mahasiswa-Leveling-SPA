// src/components/modals/HistoryPage.tsx

import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Icon,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import HistoryCard from "../components/cards/HistoryCard";
import ReusableHeader from "../components/layout/ReusableHeader";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../services/historyService";
import { History } from "../types/history";

const HistoryPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [historys, setHistorys] = useState<History[]>([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      getHistory().then((data) => {
        setHistorys(data);
      });
    }
  }, [isLoggedIn, navigate]);

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
        {historys.map((history) => (
          <HistoryCard
            key={history.HistoryID}
            id={history.HistoryID}
            quantity={history.HistoryQuantity}
            name={history.HistoryProductName}
            date={history.HistoryDate}
            imageSrc={history.HistoryImagePath}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default HistoryPage;
