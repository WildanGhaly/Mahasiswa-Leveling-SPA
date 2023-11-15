// src/components/modals/TopUpPage.tsx

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, SimpleGrid } from "@chakra-ui/react";
import TopUpOption from "../components/cards/TopUpCard";
import CustomAmountTopUp from "../components/modals/CustomAmountTopUpModal";
import ReusableHeader from "../components/layout/ReusableHeader";

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
        <TopUpOption imageSrc="public/image/money/1.png" amount={10} />
        <TopUpOption imageSrc="public/image/money/2.png" amount={20} />
        <TopUpOption imageSrc="public/image/money/3.png" amount={30} />
        <TopUpOption imageSrc="public/image/money/4.png" amount={50} />
        <TopUpOption imageSrc="public/image/money/5.png" amount={100} />
        <TopUpOption imageSrc="public/image/money/6.png" amount={200} />
      </SimpleGrid>
      {/* Render the custom amount top-up component */}
    </Container>
  );
};

export default TopUpPage;
