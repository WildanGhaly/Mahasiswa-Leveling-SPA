import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, SimpleGrid } from "@chakra-ui/react";
import TopUpOption from "./../components/TopUpOption";
import CustomAmountTopUp from "./../components/CustomAmountTopUp";
import ReusableHeader from "../components/ReusableHeader";

const TopUpPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <Container maxW="container.lg">
      <ReusableHeader headingName="Top Up" />
      <CustomAmountTopUp />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={7}>
        {/* Render 6 top-up options */}
        <TopUpOption imageSrc="public/image/1.jpg" amount={10} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={20} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={30} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={50} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={100} />
        <TopUpOption imageSrc="public/image/1.jpg" amount={200} />
      </SimpleGrid>
      {/* Render the custom amount top-up component */}
    </Container>
  );
};

export default TopUpPage;
