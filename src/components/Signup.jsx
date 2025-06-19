import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [organizationId, setOrganizationId] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Pass the user's details to the parent component.
    onSignup({ firstName, lastName, email, password, role, organizationId });
  };

  return (
    <div className="signup-container">
      <div className="signup-branding">
        <div className="branding-content">
          <h1 className="brand-title">VipraCo</h1>
          <p className="brand-subtitle">Create Your Account</p>
          <p className="brand-description">
            Join us to streamline HR processes and enhance your employee experience.
          </p>
        </div>
      </div>
      <div className="signup-form-section">
        <div className="signup-form-wrapper">
          <h2 className="form-title">Get Started</h2>
          <p className="form-subtitle">Create an account to continue.</p>
          <form onSubmit={handleSignup} className="signup-form">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
              />
            </div>
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
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="role">Role</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="organizationId">Organization ID</label>
              <input
                type="text"
                id="organizationId"
                value={organizationId}
                onChange={(e) => setOrganizationId(e.target.value)}
                placeholder="Your Organization ID"
                required
              />
            </div>
            <button type="submit" className="signup-button">Create Account</button>
          </form>
          <div className="login-prompt">
            <p>Already have an account? <Link to="/login" className="nav-button">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
