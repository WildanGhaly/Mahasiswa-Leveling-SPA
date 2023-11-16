// src/components/layout/ReusableHeader.tsx
import React, { useEffect, useState } from "react";
import { Flex, Heading, Badge, Spacer, Button, Icon } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getMoney } from "../../services/moneyService";
import { FiRefreshCw } from "react-icons/fi";

interface ReusableHeaderProps {
  headingName: string;
}

const ReusableHeader: React.FC<ReusableHeaderProps> = ({ headingName }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [moneyData, setMoneyData] = useState({ points: 0, money: 0 });

  useEffect(() => {
    if (isLoggedIn) {
      // loadMoneyData();
      getMoney().then((data) => {
        setMoneyData(data[0]);
      });
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const loadMoneyData = async () => {
    try {
      const data = await getMoney();
      setMoneyData(data[0]);
    } catch (error) {
      console.error("Failed to fetch money data:", error);
    }
  };

  return (
    <Flex align="center" justify="space-between" py={4}>
      <Heading>{headingName}</Heading>
      <Flex align="center">
        <Spacer />
        <Badge colorScheme="green" mr={2}>
          My Points: {moneyData.points}
        </Badge>
        <Badge colorScheme="purple" mr={2}>
          My Money: ${moneyData.money}
        </Badge>
        <Button onClick={loadMoneyData} size="sm" leftIcon={<Icon as={FiRefreshCw} />}>
          Reload
        </Button>
      </Flex>
    </Flex>
  );
};

export default ReusableHeader;
