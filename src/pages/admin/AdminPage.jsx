import React, { useState, useEffect } from 'react';
import AdminLoginPage from './AdminLoginPage';
import AdminDashboard from './AdminDashboard';
import { getToken, getUsername } from './adminApi';

// Verify token is still valid on load
function isLoggedIn() {
  const token = getToken();
  if (!token) return false;
  try {
    const [payload] = token.split('.');
    const data = JSON.parse(atob(payload));
    return data.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleLogin = (username) => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <AdminLoginPage onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}
