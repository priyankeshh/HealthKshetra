import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./logos/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavbarOnPages = ["/login", "/register"];

  if (hideNavbarOnPages.includes(location.pathname)) {
    return null;
  }

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="nav">
      <div className="health-kshetra">
        <div className="logo">
          <img src={logo} alt="Health Kshetra image" />
        </div>
        <Link to="/" className="site-title">
          Health Kshetra
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aid-assistant" className="nav-link">
            Aid Assistant
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
      <button onClick={navigateToRegister}>Book an Appointment</button>
    </nav>
  );
};

export default Navbar;
