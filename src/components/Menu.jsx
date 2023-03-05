import React from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";

const munuItems = ["demo", "contacto"];

const Menu = React.forwardRef((props, ref) => {
  const { isActive } = props;

  React.useEffect(() => {
    isActive
      ? ref.current.classList.add("active")
      : ref.current.classList.remove("active");
  }, [isActive]);

  return (
    <div className="menu-container" ref={ref}>
      <ul>
        <li>
          <Link className="menu-link" to="/">
            HOME
          </Link>
        </li>
        {munuItems.map((el, index) => {
          return (
            <li key={index}>
              <Link className="menu-link" to={el === "home" ? "/" : `/${el}`}>
                {el}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Menu;
