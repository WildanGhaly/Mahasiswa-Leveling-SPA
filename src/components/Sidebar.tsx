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
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Sidebar;
