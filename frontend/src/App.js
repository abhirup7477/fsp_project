import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./Main/Home"
import Login from "./Main/Login"
import AboutUs from "./Main/AboutUs"
import "./home.css";
import "./aboutus.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
      
    </>
  );
}

export default App;
