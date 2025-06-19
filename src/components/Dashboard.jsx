import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">VipraCo Dashboard</h1>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </header>
      <main className="dashboard-main">
        <div className="welcome-banner">
          <h2>Welcome, User!</h2>
          <p>Here's a quick overview of your HR-related information.</p>
        </div>
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>My Leave Balance</h3>
            <p className="widget-data">12 Days</p>
          </div>
          <div className="widget">
            <h3>Upcoming Holidays</h3>
            <p className="widget-data">July 4th - Independence Day</p>
          </div>
          <div className="widget">
            <h3>Team Directory</h3>
            <p className="widget-data">5 Members</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
