import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ConfirmationModal from "./ConfirmationModal"; // Import the ConfirmationModal component
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";
import API from "../api/api";

const CustomAmountTopUp: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState<number | string>("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCustomTopUp = () => {
    // Handle custom top-up here

    console.log(`Custom top-up amount: ${amount}`);
    setIsConfirmationModalOpen(true); // Open the confirmation modal
  };

  const confirmCustomTopUp = async () => {
    // Handle the confirmation and complete the custom top-up
    // Close the confirmation modal
    
    try {
      // Make an asynchronous Axios request to your backend (assuming it's running on port 8080)
      console.log("HSAdhjawda", amount);
      const response = await API.post("/topup", { amount }, { withCredentials: true});

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
      setErrorMessage("An error occurred while processing your top-up request.");
    }
    
    setIsConfirmationModalOpen(false);
    onClose();
  };

  return (
    <Box>
      <Button onClick={onOpen} w="100%" colorScheme="green" margin="10px 0 15px 0">
        Type the Amount
      </Button>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={confirmCustomTopUp}
        title="Confirm Custom Top-Up"
        message={`Are you sure you want to top up $${amount}?`}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Custom Amount Top-Up</ModalHeader>
          <ModalBody>
            <p>Enter the amount you want to top up:</p>
            <Input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handleCustomTopUp}>
              Top Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)} errorMessage={errorMessage} />
    </Box>
  );
};

export default CustomAmountTopUp;
