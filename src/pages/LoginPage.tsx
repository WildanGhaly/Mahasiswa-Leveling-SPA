import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import './../styles/AuthBox.css';

const LoginPage = () => {
    const nav = useNavigate();
    const { login } = useAuth(); // The login function should accept an access token

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleApiLogin = async (username: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            });
            const { accessToken } = response.data;
            Cookies.set('accessToken', accessToken, { expires: 1 / 24 / 60 * 5 }); // 5 minutes expiry
            login();

            console.log('Logged in!', response.data);
            nav('/dashboard');
        } catch (error) {
            setError('Login failed. Please try again.');
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        handleApiLogin(username, password);
    };

    return (
        <div className='auth-container'>
            <h1>Login</h1>
            <form className='auth-box' onSubmit={handleLogin}>
                <div className='input-box-label'>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='input-box-label'>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="error">{error}</div>}
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
