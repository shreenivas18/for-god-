import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Pass credentials to the parent component for validation.
    onLogin(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-branding">
        <div className="branding-content">
          <h1 className="brand-title">VipraCo</h1>
          <p className="brand-subtitle">Intelligent HR Assistant</p>
          <p className="brand-description">
            Empowering employees with instant, personalized HR answers. We replace friction and free up your HR team to focus on strategic initiatives.
          </p>
        </div>
      </div>
      <div className="login-form-section">
        <div className="login-form-wrapper">
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Sign in to access your dashboard.</p>
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-button">Sign In</button>
          </form>
           <div className="signup-prompt">
              <p>Don't have an account? <Link to="/signup" className="nav-button">Sign up</Link></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
