import React, { useEffect, useRef } from "react";
import "../styles/alert.css";

const Alert = ({ errorMessage }) => {
  const alertRef = useRef();

  useEffect(() => {
    errorMessage
      ? alertRef.current.classList.add("active")
      : alertRef.current.classList.remove("active");
  }, [errorMessage]);
  return (
    <div className="alert" ref={alertRef}>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Alert;
