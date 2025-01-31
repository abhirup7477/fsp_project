import React, { useState } from "react";
import { auth, provider } from '../firebase';  // Import Firebase functions
import "../styles/login.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithGoogle();
      const userCredential = res.user;
      const email = userCredential.email;
      console.log(email);

      const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, provider: "google" });

      localStorage.setItem("token", data.data.accessToken)

      alert("Logged in with Google!");
      navigate("/aboutus")
      // Redirect or handle post-login actions here
    } catch (error) {
      console.error(error);
      alert("Error logging in with Google");
    } finally {
      setLoading(false);
    }
  };

  // Handle Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);
    setError("");  // Reset any previous errors

    try {
      await signInWithEmailAndPassword(email, password);
      const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password, provider: "email" });
      localStorage.setItem("token", data.data.accessToken)
      alert("Logged in successfully!");
      // Redirect or handle post-login actions here
    } catch (error) {
      console.error(error);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login">
      <div id="login_body">
        <nav>
          <img src="logo.svg" alt="logo" />
        </nav>
        <div className="form_wrapper">
          <h2>Sign In</h2>
          <form onSubmit={handleEmailLogin}>
            <div className="form_control">
              <input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form_control">
              <input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div id="submit">
              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <p>OR</p>
            <div id="google-login">
              <button id="google-login-btn"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="google-btn"
              >
                {loading ? "Logging in..." : "Login with Google"}
              </button>
            </div>
          </form>
          <p>
            New to StreamHaven? <a href="#">Sign up now</a>
          </p>
          <div id="foot">
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <a href="#">Learn More</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
