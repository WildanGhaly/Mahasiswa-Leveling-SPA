import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import './../styles/AuthBox.css';
import axios from 'axios';
import { useState } from 'react';

const RegisterPage = () => {
    const nav = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleApiRegister = async (username: string, email: string, password: string) => {
        try {
            console.log('Registering...');
            const response = await axios.post('http://localhost:8080/register', {
                username,
                email,
                password
            }, { withCredentials: true });

            if (response.status !== 200) {
                throw new Error('Register failed');
            }

            login();

            console.log('Registered!', response.data);
            nav('/dashboard');
        } catch (error) {
            console.error('Register failed', error);
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering...FE');
        handleApiRegister(username, email, password);
    };
    
    return (
        <div className='auth-container'>
            <h1>Register</h1>
            <form className='auth-box' onSubmit={handleRegister}>
                <div className='input-box-label'>
                    <label htmlFor="username">Username</label>
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
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-box-label'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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
