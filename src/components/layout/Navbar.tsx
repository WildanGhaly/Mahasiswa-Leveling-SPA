// src/components/layout/Navbar.tsx

import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar"; 
import "./../../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import API from "../../api/api";

const Navbar = () => {
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await API.get('/user/check-status', { withCredentials: true });
        console.log('Login status', response);
        if (response.data.isLoggedIn) {
          auth.login(response.data.username);
        } else {
          auth.logout();
        }
      } catch (error) {
        console.error('Error when checking login status', error);
      }
    };

    checkLoginStatus();
    console.log("Current URL", location.pathname);
  }, [auth, location.pathname]);

  if (auth.isLoggedIn) {
    return <Sidebar />;
  }


  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-component">Mahasiswa Leveling</div>
        <Link className="navbar-component" to="/">
          Home
        </Link>
        <Link className="navbar-component" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-signin" to="/login">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
