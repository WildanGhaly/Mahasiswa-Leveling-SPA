import { Container } from "@chakra-ui/react";
import PerformanceCard from "../components/PerformanceCard";
import UserCard from "../components/UserCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReusableHeader from "../components/ReusableHeader";

const SettingsPage: React.FC = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }
      // Dummy data
      const userData = {
        username: 'willy',
        name: 'wildan ghaly',
        email: 'willy@example.com',
        points: 120,
      };
    
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
    
    
export default SettingsPage