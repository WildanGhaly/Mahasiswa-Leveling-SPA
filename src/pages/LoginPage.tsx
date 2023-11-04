import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext'; // Import the useAuth hook
import './../styles/AuthBox.css';

const LoginPage = () => {
    const nav = useNavigate();
    const { login } = useAuth(); // Destructure the login function from the auth context

    const handleLogin = () => {
        login(); // Set the isLoggedIn state to true using the login function
        fetch('/set-cookie', {
            method: 'GET',
            credentials: 'include' // Penting untuk mengizinkan pengiriman cookie dengan request
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
        nav('/dashboard');
    };
    
    return (
        <div className='auth-container'>
            <h1>Login</h1>
            <form className='auth-box' onSubmit={(e) => {
                e.preventDefault(); // Menghentikan form dari melakukan reload
                handleLogin();
            }}>
                <div className='input-box-label'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className='input-box-label'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className='input-box-submit'>
                    <button type="submit">Login</button>
                    <div>Don't have an account?</div>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
  );
};

export default LoginPage;
