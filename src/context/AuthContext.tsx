import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
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

    useEffect(() => {
        // Cek apakah user sudah login dengan mengirim request ke backend
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('http://localhost:8080/check-status', { withCredentials: true });
                console.log('Login status', response);
                setIsLoggedIn(response.data.isLoggedIn);
            } catch (error) {
                console.error('Error when checking login status', error);
            }
        };

        checkLoginStatus();
    }, []);

    const login = async () => {
        try {
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const logout = async () => {
        try {
            console.log('Logging out...');
            const response = await axios.delete('http://localhost:8080/logout', { withCredentials: true });
            if (response.status === 204) {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
