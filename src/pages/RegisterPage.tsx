import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import './../styles/AuthBox.css';

const RegisterPage = () => {
    const nav = useNavigate();
    const { login } = useAuth();

    const handleRegister = () => {
        login();
        nav('/dashboard');
    };
    
    return (
        <div className='auth-container'>
            <h1>Register</h1>
            <form className='auth-box' onSubmit={(e) => {
                e.preventDefault(); // Menghentikan form dari melakukan reload
                handleRegister();
            }}>
                <div className='input-box-label'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className='input-box-label'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className='input-box-label'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className='input-box-submit'>
                    <button type="submit">Register</button>
                    <div>Already have an account?</div>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
