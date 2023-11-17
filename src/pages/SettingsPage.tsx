// src/components/modals/SettingsPage.tsx

import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import PerformanceCard from "../components/cards/PerformanceCard";
import UserCard from "../components/cards/UserCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReusableHeader from "../components/layout/ReusableHeader";
import API from "../api/api";
import LogoutButton from "../components/modals/Logout";

const SettingsPage: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      API.get("/user/data", { withCredentials: true })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the user data", error);
        });
    }
  }, [isLoggedIn, navigate]);

  // Remaining data and handlers
  const performanceData = {
    totalAchievement: "???",
    totalQuest: "???",
    level: "???",
    experience: "???",
  };

  const handleToggleEmailNotify = () => {
    // Handle toggle logic
  };

  return (
    <Container maxW="container.lg">
      <ReusableHeader headingName="Settings" />
      <UserCard {...userData} onToggleEmailNotify={handleToggleEmailNotify} />
      <PerformanceCard {...performanceData} />
      <LogoutButton />
    </Container>
  );
};

export default SettingsPage;
