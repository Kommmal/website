import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-right">
        <img src="/images/login image.png" alt="" />
      </div>
      <div className="signup-left">
        <h1>Create An Account</h1>
        <p>Enter Your Details Here</p>
        <div className="input">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Name" />
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" />
          <label htmlFor="password"></label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="buttons">
          <button className="btn1">Create Account</button>
          <button className="btn2">SignUp with Google</button>
        </div>
        <div className="signup">
          <p>
            Already have an account? <a href="/login">LogIn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
