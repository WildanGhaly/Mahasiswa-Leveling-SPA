import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa"; // Import the dollar sign icon

interface TopUpOptionProps {
  imageSrc: string;
  amount: number;
}

const TopUpOption: React.FC<TopUpOptionProps> = ({ imageSrc, amount }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen}>
        <Flex direction="column" alignItems="center" maxW="150px">
          <Image src={imageSrc} alt={`Top up ${amount}`} />
          <Flex alignItems="center">
            <Icon as={FaDollarSign} fontSize="2xl" color="green.500" />
            <Text>{amount}</Text>
          </Flex>
        </Flex>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Payment</ModalHeader>
          <ModalBody>
            {/* Payment confirmation content */}
            <p>Are you sure you want to top up ${amount}?</p>
            {/* Add payment confirmation UI here */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={onClose}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TopUpOption;
