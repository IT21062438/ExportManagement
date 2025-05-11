import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles/Profile.css";

function Profile() {
  const [userName, setUserName] = useState("User");
  const history = useHistory();

  useEffect(() => {
    const storedName = localStorage.getItem("loggedInUser");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleProfileClick = () => {
    history.push("/profiledetails");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="welcome-section">
          <h1>Welcome To Ceylon Exports, {userName}!</h1>
          <p>Here's your dashboard overview</p>
        </div>
        <div className="header-buttons">
          <button className="profile-btn" onClick={handleProfileClick}>
            <i className="fas fa-user"></i> My Profile
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>

      <div className="dashboard-stats">
        {/* <div className="stat-card">
          <i className="fas fa-box"></i>
          <h3>Total Orders</h3>
          <p>150</p>
        </div> */}
        <div
          className="stat-card"
          onClick={() => history.push("/requests")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-hand-holding-medical"></i>
          <h3>Add Request</h3>
        </div>
        <div
          className="stat-card"
          onClick={() => history.push("/inquiries")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-question-circle"></i>
          <h3>Add Inquiry</h3>
        </div>
        <div
          className="stat-card"
          onClick={() => history.push("/chatbot")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-check-circle"></i>
          <h3>Completed Orders</h3>
          <p>138</p>
        </div>
        <div className="stat-card">
          <i className="fas fa-clock"></i>
          <h3>Pending Orders</h3>
          
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-cards">
          <div className="action-card">
            <i className="fas fa-file-alt"></i>
            <h3>New Order</h3>
            <p>Create a new export order</p>
          </div>
          <div className="action-card">
            <i className="fas fa-search"></i>
            <h3>Track Order</h3>
            <p>Check order status</p>
          </div>
          <div className="action-card">
            <i className="fas fa-history"></i>
            <h3>Order History</h3>
            <p>View past orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
