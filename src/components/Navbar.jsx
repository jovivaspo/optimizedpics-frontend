import React, { useEffect } from "react";
import Logo from "./logo";
import Menu from "./menu";
import MenuIcon from "./MenuIcon";
import { useMenu } from "../hooks/useMenu";
import "../styles/navbar.css";

const Navbar = () => {
  const { isActive, handlerActive } = useMenu();
  const menuRef = React.useRef(null);
  const iconRef = React.useRef(null);

  useEffect(() => {
    const handlerMenu = (e) => {
      if (isActive && !iconRef.current.contains(e.target)) {
        handlerActive();
      }
    };

    document.addEventListener("mousedown", handlerMenu);

    return () => {
      document.removeEventListener("mousedown", handlerMenu);
    };
  }, [isActive]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo />
        <Menu isActive={isActive} ref={menuRef} />
        <MenuIcon
          ref={iconRef}
          handlerActive={handlerActive}
          isActive={isActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
