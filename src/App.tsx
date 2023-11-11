import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';
import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode; 
}

// Update AppContainer to accept the correct props
const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const auth = useAuth(); 
  const containerClass = auth.isLoggedIn ? "container-ack" : "container-nack";
  return <div className={containerClass}>{children}</div>;
};

function App() {
return (
  <AuthProvider>
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </AppContainer>
    </BrowserRouter>
  </AuthProvider>
);
}

export default App;