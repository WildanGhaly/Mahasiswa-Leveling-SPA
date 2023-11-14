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

const CustomAmountTopUp: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customAmount, setCustomAmount] = useState<number | string>("");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handleCustomTopUp = () => {
    // Handle custom top-up here

    console.log(`Custom top-up amount: ${customAmount}`);
    setIsConfirmationModalOpen(true); // Open the confirmation modal
  };

  const confirmCustomTopUp = () => {
    // Handle the confirmation and complete the custom top-up
    // Close the confirmation modal
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
        message={`Are you sure you want to top up $${customAmount}?`}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Custom Amount Top-Up</ModalHeader>
          <ModalBody>
            <p>Enter the amount you want to top up:</p>
            <Input
              type="number"
              value={customAmount}
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
    </Box>
  );
};

export default CustomAmountTopUp;
