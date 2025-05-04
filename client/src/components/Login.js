import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { handleError, handleSuccess } from "../Utils";
import bgImage from '../assets/background.jpg';
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
    
      <div className="signup-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoFocus
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
    </div>
  );
}

export default Login;
