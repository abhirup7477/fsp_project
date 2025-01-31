import { Routes, Route } from "react-router-dom";
import './App.css';
import "./signup.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import AboutUs from "./pages/AboutUs"
import Signup from "./pages/Signup";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  );
}

export default App;
