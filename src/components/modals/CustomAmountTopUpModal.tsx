// src/components/modals/CustomAmountTopUpModal.tsx

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
import ConfirmationModal from "./ConfirmationModal"; 
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";
import API from "../../api/api";

const CustomAmountTopUp: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState<number | string>("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseFloat(inputValue);
  
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 1000000) {
      setAmount(numericValue);
    } else if (numericValue > 1000000) {
      setAmount(1000000);
    } else {
      setAmount("");
    }
  };

  const handleCustomTopUp = () => {
    console.log(`Custom top-up amount: ${amount}`);
    setIsConfirmationModalOpen(true); 
  };

  const confirmCustomTopUp = async () => {
    try {
      const response = await API.post(
        "/topup",
        { amount },
        { withCredentials: true }
      );

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
    onClose();
  };

  return (
    <Box>
      <Button
        onClick={onOpen}
        w="100%"
        colorScheme="green"
        margin="10px 0 15px 0"
      >
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

export default CustomAmountTopUp;
