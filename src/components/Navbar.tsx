// src/components/Navbar.tsx

import { Link } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import './../styles/Navbar.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

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
          <button className='navbar-signout' onClick={logout}>Sign Out</button>
        ) : (
        <Link className='navbar-signin' to="/login">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
