import { Link } from 'react-router-dom';
import './../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-left'>
        <div className='navbar-component'>Mahasiswa Leveling</div>
        <Link className='navbar-component' to="/">Home</Link>
        <Link className='navbar-component' to="/about">About</Link>
      </div>
      <div className='navbar-right'>
        <Link className='navbar-signin' to="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
