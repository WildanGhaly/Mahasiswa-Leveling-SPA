import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Flex, Heading, Text } from "@chakra-ui/react";
import TopUpOption from "./../components/TopUpOption";
import CustomAmountTopUp from "./../components/CustomAmountTopUp";

const TopUpPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <Flex direction="column" align="center" mt={4}>
      <Heading as="h1" mb={4}>
        Top Up Page
      </Heading>
      <Text>Welcome to the Top Up Page!</Text>
      <Flex justify="space-between" mt={4}>
        {/* Render 6 top-up options */}
        <TopUpOption imageSrc="public/image/1.jpg" amount={10} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={20} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={30} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={50} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={100} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={200} />
      </Flex>
      {/* Render the custom amount top-up component */}
      <CustomAmountTopUp />
    </Flex>
  );
};

export default TopUpPage;
