import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import AboutUs from "./pages/AboutUs"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

    </>
  );
}

export default App;
