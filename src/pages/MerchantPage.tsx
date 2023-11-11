import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MerchantPage = () => {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
    }

    return (
        <div>
            <h1>Merchant Page</h1>
            <p>Welcome to the Merchant Page!</p>
        </div>
    );
}

export default MerchantPage