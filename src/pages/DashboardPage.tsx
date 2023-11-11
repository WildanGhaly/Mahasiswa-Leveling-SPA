// import React from 'react';

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
      {/* Konten dashboard akan di sini */}
    </div>
  );
};

export default DashboardPage;
