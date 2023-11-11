import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SettingsPage: React.FC = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }

    return (
        <div>
            <h1>Settings Page</h1>
            <p>Welcome to the Settings Page!</p>
        </div>
    );
}

export default SettingsPage