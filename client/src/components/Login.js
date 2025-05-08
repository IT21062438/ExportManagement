import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { handleError, handleSuccess } from "../Utils";
import bgImage from "../assets/background.jpg";
import "./login.css";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:8000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, role, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("email", email); 
        localStorage.setItem("role", role);

        setTimeout(() => {
          if (role === "admin") {
            history.push("/admin");
          } else {
            history.push("/profile");
          }
        }, 1500);
      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details);
      } else {
        handleError(message);
      }

      console.log(result);
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login-content">
        <div className="about-section">
          <div className="about-content">
            <h2>Welcome to Ceylon Exports</h2>
            <p className="tagline">Your Trusted Partner in Global Trade</p>

            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-box-open"></i>
                <h3>Export Management</h3>
                <p>Comprehensive export solutions for your business needs</p>
              </div>

              <div className="service-card">
                <i className="fas fa-chart-line"></i>
                <h3>Quality Control</h3>
                <p>Rigorous quality checks ensuring international standards</p>
              </div>

              <div className="service-card">
                <i className="fas fa-truck"></i>
                <h3>Logistics</h3>
                <p>Efficient transportation and delivery services</p>
              </div>

              <div className="service-card">
                <i className="fas fa-handshake"></i>
                <h3>Customer Support</h3>
                <p>24/7 dedicated support for all your queries</p>
              </div>
              <div className="service-card">
                <i className="fas fa-warehouse"></i>
                <h3>Inventory Management</h3>
                <p>
                  Streamlined stock tracking and inventory control processes
                </p>
              </div>

              <div className="service-card">
                <i className="fas fa-cogs"></i>
                <h3>Production Oversight</h3>
                <p>Monitor and manage production workflows with precision</p>
              </div>
            </div>

            <div className="signup-container">
              <div className="logo-container">
                <img
                  src="%PUBLIC_URL%../../logo.png"
                  alt="Ceylon Exports Logo"
                  className="login-logo"
                />
              </div>
              <h4>Welcome Back</h4>
              <h6>Log in to manage exports and streamline your workflow</h6>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={loginInfo.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={loginInfo.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="signup-button">
                  Login
                </button>

                <span>
                  Don't have an account? <Link to="/signup">Signup</Link>
                </span>
              </form>
            </div>
            <div className="company-info">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>10+ Years of Industry Experience</li>
                <li>Global Network of Partners</li>
                <li>Certified Quality Standards</li>
                <li>Dedicated Customer Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
