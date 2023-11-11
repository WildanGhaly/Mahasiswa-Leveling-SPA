import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HistoryPage = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }

    return (
        <div>
            <h1>HistoryPage</h1>
            <p>Welcome to the HistoryPage!</p>
        </div>
    );
}

export default HistoryPage