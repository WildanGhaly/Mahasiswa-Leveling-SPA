import React, { useState } from "react";
import { Box, Image, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa"; // Import the dollar sign icon
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessModal from "../modals/SuccessModal"; // Import the SuccessModal component
import ErrorModal from "../modals/ErrorModal"; // Import the ErrorModal component
import API from "../../api/api";

interface TopUpOptionProps {
  imageSrc: string;
  amount: number;
}

const TopUpOption: React.FC<TopUpOptionProps> = ({ imageSrc, amount }) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTopUp = async () => {
    // Handle top-up action here
    setIsConfirmationModalOpen(true); // Open the confirmation modal
  };

  const confirmTopUp = async () => {
    // Handle the confirmation and complete the top-up
    // Close the confirmation modal
    try {
      // Make an asynchronous Axios request to your backend (assuming it's running on port 8080)
      const response = await API.post(
        "/topup",
        { amount },
        { withCredentials: true }
      );

      // Check if the top-up was successful
      if (response.data.success) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
        setErrorMessage("Top-up failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsErrorModalOpen(true);
      setErrorMessage(
        "An error occurred while processing your top-up request."
      );
    }

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
            <Text fontSize="2xl" fontWeight="semibold" padding="5px">
              {amount}
            </Text>
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

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        errorMessage={errorMessage}
      />
    </Box>
  );
};

export default TopUpOption;
