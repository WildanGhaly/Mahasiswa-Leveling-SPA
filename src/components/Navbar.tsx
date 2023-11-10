// src/components/Navbar.tsx

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import './../styles/Navbar.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const nav = useNavigate();

  // handle logout
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    logout();
    nav('/');
  }

  return (
    <nav className='navbar-container'>
      <div className='navbar-left'>
        <div className='navbar-component'>Mahasiswa Leveling</div>
        <Link className='navbar-component' to="/">Home</Link>
        {isLoggedIn && <Link className='navbar-component' to="/dashboard">Dashboard</Link>}
        <Link className='navbar-component' to="/about">About</Link>
      </div>
      <div className='navbar-right'>
        {isLoggedIn ? (
          <button className='navbar-signout' onClick={handleLogout}>Sign Out</button>
        ) : (
        <Link className='navbar-signin' to="/login">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
