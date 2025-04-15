// src/pages/login.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // For demo purposes, used localStorage for db
    localStorage.setItem('authToken', 'dummy-token');
    localStorage.setItem('userRoles', JSON.stringify(['user'])); // Or ['admin'] for admin users
    
    // Redirect to home or previous page
    window.location.href = '/';
  };

  return (
    <Layout>
      <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;