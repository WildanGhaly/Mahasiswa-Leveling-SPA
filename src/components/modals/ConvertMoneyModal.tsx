// src/components/modals/CustomAmountConvertModal.tsx

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

const CustomAmountConvert: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState<number | string>("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCustomConvert = () => {
    console.log(`Custom Convert amount: ${amount}`);
    setIsConfirmationModalOpen(true); 
  };

  const confirmCustomConvert = async () => {
    try {
      const response = await API.patch(
        "/money",
        { amount },
        { withCredentials: true }
      );

      if (response.data.success) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
        setErrorMessage("Convert failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsErrorModalOpen(true);
      setErrorMessage(
        "An error occurred while processing your convert request."
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
        colorScheme="blue"
        margin="10px 0 0 0"
      >
        Convert Money to Points
      </Button>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={confirmCustomConvert}
        title="Confirm Custom Conver"
        message={`Are you sure you want to Convert $${amount}?`}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Custom Amount Convert</ModalHeader>
          <ModalBody>
            <p>Enter the amount you want to convert to points:</p>
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
            <Button colorScheme="green" onClick={handleCustomConvert}>
              Convert money to points
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

export default CustomAmountConvert;
