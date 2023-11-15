import React, { useState, useEffect } from 'react';
import { Container } from "@chakra-ui/react";
import PerformanceCard from "../components/PerformanceCard";
import UserCard from "../components/UserCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReusableHeader from "../components/ReusableHeader";
import API from '../api/api';

const SettingsPage: React.FC = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        points: 0,
    });

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            API.get('/user/data', { withCredentials: true })
                .then(response => {
                    setUserData(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the user data', error);
                });
        }
    }, [isLoggedIn, navigate]);

    // Remaining data and handlers
    const performanceData = {
        totalAchievement: 5,
        totalQuest: 10,
        level: 3,
        experience: 200,
    };

    const handleToggleEmailNotify = () => {
        // Handle toggle logic
    };

    return (
        <Container maxW="container.lg">
            <ReusableHeader headingName="Settings" />
            <UserCard
                {...userData}
                onToggleEmailNotify={handleToggleEmailNotify}
            />
            <PerformanceCard {...performanceData} />
        </Container>
    );
};

export default SettingsPage;
