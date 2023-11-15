// src/components/modals/SuccessModal.tsx

import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, Button } from "@chakra-ui/react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <p>Top-up successful!</p>
          <Button colorScheme="green" onClick={onClose}>
            Close
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
