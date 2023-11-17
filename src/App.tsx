import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import TopUpPage from "./pages/TopUpPage";
import MerchantPage from "./pages/MerchantPage";
import SettingsPage from "./pages/SettingsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { ReactNode } from "react";
import { MoneyProvider } from "./context/MoneyContext";
import NotFoundPage from "./pages/404page";

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
    <ChakraProvider>
      <AuthProvider>
      <MoneyProvider>
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
                <Route
                  path="/dashboard/product/:id"
                  element={<ProductDetailPage />}
                />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/topup" element={<TopUpPage />} />
                <Route path="/merchant" element={<MerchantPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </AppContainer>
        </BrowserRouter>
      </MoneyProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
