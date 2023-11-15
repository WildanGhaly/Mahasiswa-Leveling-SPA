// src/components/ProductConfirmationModal.tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { buyProduct } from '../services/buyProductService';

interface ProductConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
  productid: string;
  productName: string;
  quantity: number;
  price: number;
}

const ProductConfirmationModal: React.FC<ProductConfirmationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onError,
  productid,
  productName,
  quantity,
  price,
}) => {
  const { isOpen: isSuccessModalOpen, onOpen: openSuccessModal, onClose: closeSuccessModal } = useDisclosure();
  const { isOpen: isErrorModalOpen, onOpen: openErrorModal, onClose: closeErrorModal } = useDisclosure();

  const handleBuyConfirmation = async () => {

    const response = buyProduct(productid, price, quantity);

    const isBuySuccessful = response;

    if (await isBuySuccessful) {
      openSuccessModal();
      onSuccess();
    } else {
      openErrorModal();
      onError();
    }

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{`Are you sure you want to buy ${quantity} ${productName}(s) for $${quantity * price}?`}</Text>
            <Button colorScheme="teal" mt={4} mr={2} onClick={handleBuyConfirmation}>
              Confirm
            </Button>
            <Button onClick={onClose} mt={4} mr={2}>Cancel</Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Success Modal */}
      <Modal isOpen={isSuccessModalOpen} onClose={closeSuccessModal} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            <FaCheckCircle size={40} color="green" style={{ marginBottom: '1rem' }} />
              Purchase successful!
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Error Modal */}
      <Modal isOpen={isErrorModalOpen} onClose={closeErrorModal} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Error</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            <FaTimesCircle size={40} color="red" style={{ marginBottom: '1rem' }} />
              Purchase failed. Please try again.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductConfirmationModal;
