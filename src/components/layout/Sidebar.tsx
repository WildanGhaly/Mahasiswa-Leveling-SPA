// src/components/layout/Sidebar.tsx

import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiPlusCircle,
  FiShoppingBag,
  FiClock,
  FiSettings,
} from "react-icons/fi";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import "../../styles/sidebar.css";
import { useAuth } from "../../context/AuthContext";

const Sidebar: React.FC = () => {
  const [navSize, changeNavSize] = useState<"small" | "large">("large");
  const [activeItem, setActiveItem] = useState<string>("dashboard");
  const navigate = useNavigate();
  const { username } = useAuth();

  const handleItemClick = (name: string) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };

  return (
    <Flex
      pos="sticky"
      left="2.5"
      h="95vh"
      margin="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "5vw" : "20vw"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => changeNavSize(navSize === "small" ? "large" : "small")}
          aria-label={""}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          active={activeItem === "dashboard"}
          onClick={() => handleItemClick("dashboard")}
        />
        <NavItem
          navSize={navSize}
          icon={FiPlusCircle}
          title="Top Up"
          active={activeItem === "topup"}
          onClick={() => handleItemClick("topup")}
        />
        <NavItem
          navSize={navSize}
          icon={FiShoppingBag}
          title="My Merchant"
          active={activeItem === "merchant"}
          onClick={() => handleItemClick("merchant")}
        />
        <NavItem
          navSize={navSize}
          icon={FiClock}
          title="History"
          active={activeItem === "history"}
          onClick={() => handleItemClick("history")}
        />
        <NavItem
          navSize={navSize}
          icon={FiSettings}
          title="Settings"
          active={activeItem === "settings"}
          onClick={() => handleItemClick("settings")}
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              {username}
            </Heading>
            <Text color="gray">User</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
