import React from "react";
import {Link} from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="signup-body">
        <div className="signup-form-container">
          <h2 className="signup-h2">Sign up</h2>
          <form action="" className="signup-form">
            <input type="email" placeholder="Enter your email" className="signup-input" />
            <input type="text" placeholder="Enter user id" className="signup-input" />
            <input type="password" placeholder="Enter password" className="signup-input" />
            <button className="signup-btn">Sign Up</button>
          </form>
          <p className="signup-p">Already have an account?
            <span className="signup-span"><Link to="/login" className="signup-link">Sign in</Link></span>
          </p>
        </div>
      </div>
    </>
  );
}
