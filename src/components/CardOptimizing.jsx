import React from "react";
import logo from "../assets/cloudinary.svg";
import "../styles/cardOptimizing.css";

const CardOptimizing = ({ visible }) => {
  return (
    <div className={`card-optimizing ${visible ? "visible" : ""}`}>
      <div className="logo-optimizing-container">
        <img
          src={logo}
          alt="Optimizando con cloudinary"
          className="logo-optimizing"
        />
        <div className="dots-container">
          <span class="dots">.</span>
          <span class="dots">.</span>
          <span class="dots">.</span>
        </div>
      </div>
    </div>
  );
};

export default CardOptimizing;
