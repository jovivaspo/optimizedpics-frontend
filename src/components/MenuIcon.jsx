import React, { useEffect } from "react";
import "../styles/menuIcon.css";

const MenuIcon = React.forwardRef((props, ref) => {
  const { isActive, handlerActive } = props;
  const barRef = React.useRef();
  const XRef = React.useRef();

  useEffect(() => {
    if (isActive) {
      barRef.current.classList.add("hidden");
      XRef.current.classList.remove("hidden");
    } else {
      barRef.current.classList.remove("hidden");
      XRef.current.classList.add("hidden");
    }
  }, [isActive]);

  return (
    <button ref={ref} className="menu-btn" onClick={handlerActive}>
      <svg
        ref={barRef}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2 menu-icon bars"
        width={42}
        height={42}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        ref={XRef}
        rotate="90deg"
        className="menu-icon X hidden"
        width="42"
        height="42"
        stroke="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#fff"
            d="M10.858 12.272l15.87 15.87.756.756 1.414-1.414-.756-.756-15.87-15.87-.756-.756-1.414 1.414z"
          ></path>
          <path
            fill="#fff"
            d="M28.142 12.272l-15.87 15.87-.756.756-1.414-1.414.756-.756 15.87-15.87.756-.756 1.414 1.414z"
          ></path>
        </g>
      </svg>
    </button>
  );
});

export default MenuIcon;
