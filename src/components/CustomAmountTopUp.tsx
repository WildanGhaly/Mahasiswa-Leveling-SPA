import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const CustomAmountTopUp: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customAmount, setCustomAmount] = useState<number | string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handleCustomTopUp = () => {
    // Handle custom top-up here
    // You can perform validation and initiate the payment process
    // Example: call an API to process the custom top-up
    console.log(`Custom top-up amount: ${customAmount}`);
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
