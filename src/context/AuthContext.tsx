// src/components/context/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import API from '../api/api';

interface AuthContextType {
    isLoggedIn: boolean;
    login: (username: string) => Promise<void>;
    logout: () => void;
    username: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Cek apakah user sudah login dengan mengirim request ke backend
        const checkLoginStatus = async () => {
            try {
                const response = await API.get('/user/check-status', { withCredentials: true });
                console.log('Login status', response);
                setIsLoggedIn(response.data.isLoggedIn);
                setUsername(response.data.username);

            } catch (error) {
                console.error('Error when checking login status', error);
            }
        };

        checkLoginStatus();
    }, []);

    const login = async (username: string) => {
        try {
            setIsLoggedIn(true);
            setUsername(username);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const logout = async () => {
        try {
            console.log('Logging out...');
            const response = await API.delete('/auth/logout', { withCredentials: true });
            if (response.status === 204) {
                setIsLoggedIn(false);
                setUsername('');
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    );
};
