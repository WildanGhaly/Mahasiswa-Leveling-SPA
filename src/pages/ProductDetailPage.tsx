// src/pages/ProductDetailPage.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import ReusableHeader from "../components/layout/ReusableHeader";
import ProductConfirmationModal from "../components/modals/ProductConfirmationModal";
import { getProductByID } from "../services/productService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Product {
  ProductName: string;
  Description: string;
  StockQuantity: string;
  Price: number;
  ImagePath: string;
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (id) {
      getProductByID(id).then((data) => {
        setProduct(data);
      });
    } else {
      console.error("Product ID is undefined");
    }
  }, [id]);

  const handleBuyClick = () => {
    onOpen();
  };

  const handleSuccess = () => {
    setIsPurchaseSuccessful(true);
  };

  const handleError = () => {
    setIsPurchaseSuccessful(false);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => Math.min(1000000, prev + 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value) || 1;
    const limitedValue = Math.min(1000000, Math.max(1, inputValue));
    setQuantity(limitedValue);
  };

  return (
    <Container maxW="container.lg" mt={8}>
      {product[0] && (
        <>
          <ReusableHeader headingName={product[0].ProductName} />
          <Flex direction="column" alignItems="center" marginTop="2.5vh">
            <Box
              h="350px"
              bg="gray.200"
              overflow="hidden"
              position="relative"
              boxShadow="base"
              borderRadius="md"
            >
              <Image
                src={`/${product[0].ImagePath}`}
                alt={product[0].ProductName}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
            <Heading mt={4}>{product[0].ProductName}</Heading>
            <Text mt={2}>{product[0].Description}</Text>
            <Text mt={2}>Stock: {product[0].StockQuantity}</Text>
            <Text mt={2}>Price: ${product[0].Price}</Text>
            <Box mt={4} boxShadow="md" p={4} borderRadius="md" bg="white">
              <Text>Amount:</Text>
              <Flex alignItems="center">
                <Button
                  onClick={handleDecrease}
                  colorScheme="teal"
                  disabled={quantity === 1}
                >
                  <FaMinus />
                </Button>
                <Input
                  type="number"
                  min={1}
                  max={1000000}
                  value={quantity}
                  onChange={handleInputChange}
                  mx={2}
                  w="150px"
                  textAlign="center"
                />
                <Button onClick={handleIncrease} colorScheme="teal" ml={2}>
                  <FaPlus />
                </Button>
                <Button
                  ml={4}
                  colorScheme="teal"
                  onClick={handleBuyClick}
                  leftIcon={<FaShoppingCart />}
                >
                  Buy
                </Button>
              </Flex>
            </Box>
          </Flex>

          <ProductConfirmationModal
            isOpen={isOpen}
            onClose={onClose}
            onSuccess={handleSuccess}
            onError={handleError}
            productid={id == undefined ? "" : id}
            productName={product[0].ProductName}
            quantity={quantity}
            price={product[0].Price}
          />
        </>
      )}
    </Container>
  );
};

export default ProductDetailPage;
