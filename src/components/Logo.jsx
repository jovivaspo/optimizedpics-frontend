import React from "react";
import { Link } from "react-router-dom";
import "../styles/logo.css";
import logo from "../assets/Logo.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
