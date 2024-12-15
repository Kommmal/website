import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-right">
        <img src="/images/login image.png" alt="" />
      </div>
      <div className="login-left">
        <h1>Log In</h1>
        <p>Enter Your Details Here</p>
        <div className="input">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="email"></label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="buttons">
          <button className="btn1">Log In</button>
          <button className="btn2">Forget Password</button>
        </div>
        <div className="signup">
          <p>
            Don't have an account? <a href="/signup">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
