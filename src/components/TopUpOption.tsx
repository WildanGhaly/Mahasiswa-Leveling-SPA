import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa"; // Import the dollar sign icon
import ConfirmationModal from "./ConfirmationModal";

interface TopUpOptionProps {
  imageSrc: string;
  amount: number;
}

const TopUpOption: React.FC<TopUpOptionProps> = ({ imageSrc, amount }) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(false);

  const handleTopUp = () => {
    // Handle top-up action here
    setIsConfirmationModalOpen(true); // Open the confirmation modal
  };

  const confirmTopUp = () => {
    // Handle the confirmation and complete the top-up
    // Close the confirmation modal
    setIsConfirmationModalOpen(false);
  };

  return (
    <Box borderRadius="lg" overflow="hidden">
      <Button
        onClick={handleTopUp}
        h="350px"
        bg="gray.200"
        overflow="hidden"
        position="relative"
      >

        <Flex direction="column" alignItems="center" maxW="275px">
            <Image 
                src={imageSrc} 
                alt={`Top up ${amount}`} 
                objectFit="cover"
                w="100%" 
                h="100%" 
                margin="10px 0"
            />
          <Flex alignItems="center">
            <Icon as={FaDollarSign} fontSize="2xl" color="green.500" />
            <Text
                fontSize="2xl"
                fontWeight="semibold"
                padding="5px"
            >{amount}</Text>
          </Flex>
        </Flex>
      </Button>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={confirmTopUp}
        title="Confirm Payment"
        message={`Are you sure you want to top up $${amount}?`}
      />
    </Box>
  );
};

export default TopUpOption;
