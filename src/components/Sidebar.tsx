import { Link } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import './../styles/Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    logout();
  }

  return (
    <div className='sidebar-container'>
      <Link to="/home">Home</Link>
      <Link to="/topup">Top Up</Link>
      <Link to="/merchant">Merchant</Link>
      <Link to="/history">History</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Sidebar;
