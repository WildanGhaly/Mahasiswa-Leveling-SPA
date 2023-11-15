// src/components/layout/ReusableHeader.tsx

import React from "react";
import { Flex, Heading, Badge, Spacer } from "@chakra-ui/react";

interface ReusableHeaderProps {
  headingName: string;
}

const ReusableHeader: React.FC<ReusableHeaderProps> = ({ headingName }) => {
  return (
    <Flex align="center" justify="space-between" py={4}>
      <Heading>{headingName}</Heading>
      <Flex align="center">
        <Spacer />
        <Badge colorScheme="green" mr={2}>
          My Points: 500
        </Badge>
        <Badge colorScheme="purple">
          My Money: $100
        </Badge>
      </Flex>
    </Flex>
  );
};

export default ReusableHeader;
