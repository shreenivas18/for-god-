import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const API_BASE_URL = 'http://localhost:5000';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/verify`, {
          credentials: 'include', // This is crucial for sending cookies
        });
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
        }
      } catch (error) {
        console.error('Session verification failed:', error);
        setIsAuthenticated(false);
      }
    };

    verifySession();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Tell the browser to send cookies
      });

      if (response.ok) {
        // Assuming the backend sends back a token or success message
        console.log('Login successful');
        setIsAuthenticated(true);
      } else {
        // Handle login failure
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || 'Please check your credentials.'}`);
      }
    } catch (error) {
      console.error('There was an error logging in:', error);
      alert(`An error occurred during login: ${error.message}`);
    }
  };

  const handleSignup = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include', // Tell the browser to send cookies
      });

      if (response.ok) {
        // Assuming the backend sends back a token or success message
        console.log('Signup successful');
        setIsAuthenticated(true);
      } else {
        // Handle signup failure
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('There was an error signing up:', error);
      alert(`An error occurred during signup: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        credentials: 'include', // Crucial for sending the cookie to be cleared
      });
      setIsAuthenticated(false);
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
          />
          <Route 
            path="/signup" 
            element={!isAuthenticated ? <Signup onSignup={handleSignup} /> : <Navigate to="/dashboard" />}
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route 
            path="*" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
