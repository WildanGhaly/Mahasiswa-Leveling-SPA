import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TopUpPage = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }

    return (
        <div>
            <h1>Top Up Page</h1>
            <p>Welcome to the Top Up Page!</p>
        </div>
    );
}

export default TopUpPage