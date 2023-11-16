import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
} from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../../services/logoutService';
import { useNavigate } from 'react-router';

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/login');
  };

  return (
    <>
        <Button 
            onClick={() => setIsOpen(true)} 
            leftIcon={<Icon as={FaSignOutAlt} />}
            colorScheme='red'
            w="100%"
            marginTop="2.5vh"
        >
            Logout
        </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Apakah Anda yakin ingin logout?</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleLogout}>
              Ya
            </Button>
            <Button variant="ghost" onClick={handleClose}>
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogoutButton;
