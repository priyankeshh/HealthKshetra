import React from "react";
import { Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Navbar from "./Navbar.js";
import ContactUs from "./pages/ContactUs.js";
import AboutUs from "./pages/AboutUs.js";
import AidAssistant from "./pages/AidAssistant.js";

function App() {
  const location = useLocation();
  const hideNavbarOnPages = ["/login", "/register"];

  return (
    <>
      {!hideNavbarOnPages.includes(location.pathname) && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/aid-assistant" element={<AidAssistant />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
