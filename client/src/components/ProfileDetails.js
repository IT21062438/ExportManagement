import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProfileImg from "../assets/profile.jpg";
import "./styles/ProfileDetails.css";

function ProfileDetails() {
  const [userData, setUserData] = useState({
    name: "User",
    email: "user@example.com",
    role: "Customer",
    phone: "+94 77 123 4567",
    address: "123 Main Street, Colombo, Sri Lanka",
    joinDate: "January 2024",
  });
  const history = useHistory();

  useEffect(() => {
    // Retrieve real user data from localStorage
    const storedName = localStorage.getItem("loggedInUser");
    const storedEmail = localStorage.getItem("email");
    const storedRole = localStorage.getItem("role");

    if (storedName && storedEmail && storedRole) {
      setUserData((prev) => ({
        ...prev,
        name: storedName,
        email: storedEmail,
        role: storedRole,
      }));
    }
  }, []);

  const handleBack = () => {
    history.push("/profile");
  };

  return (
    <div className="profile-details-wrapper">
      <div className="profile-details-container">
        <button className="back-btn" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i> Back to Dashboard
        </button>

        <div className="profile-details-content">
          <div className="profile-image-section">
            <div className="profile-image">
              <img src={ProfileImg} alt="Profile" />
            </div>
            <button className="change-photo-btn">
              <i className="fas fa-camera"></i> Change Photo
            </button>
          </div>

          <div className="profile-info-section">
            <h1>Profile Information</h1>

            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>{userData.name}</p>
              </div>

              <div className="info-item">
                <label>Email Address</label>
                <p>{userData.email}</p>
              </div>

              <div className="info-item">
                <label>Role</label>
                <p>{userData.role}</p>
              </div>

              <div className="info-item">
                <label>Phone Number</label>
                <p>{userData.phone}</p>
              </div>

              <div className="info-item full-width">
                <label>Address</label>
                <p>{userData.address}</p>
              </div>

              <div className="info-item">
                <label>Member Since</label>
                <p>{userData.joinDate}</p>
              </div>
            </div>

            <button className="edit-profile-btn">
              <i className="fas fa-edit"></i> Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
