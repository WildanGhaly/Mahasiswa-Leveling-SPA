import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import axios from 'axios';
import './../styles/AuthBox.css';

const LoginPage = () => {
    const nav = useNavigate();
    const { login } = useAuth(); // The login function should accept an access token

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleApiLogin = async (username: string, password: string) => {
        try {
            console.log('Logging in...');
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            }, { withCredentials: true });
  
            if (response.status !== 200) {
                throw new Error('Login failed');
            }

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
