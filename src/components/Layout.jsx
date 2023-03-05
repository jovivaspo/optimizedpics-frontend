import React from "react";
import Navbar from "./Navbar";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
