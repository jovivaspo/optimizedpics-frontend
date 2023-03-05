import React, { useEffect } from "react";
import { useState, useRef } from "react";

const ButtonUrl = ({ selected, imageOptimized, formats }) => {
  const [url, setUrl] = useState("");
  const btnRef = useRef();
  const index = formats.findIndex((el) => el === selected);

  useEffect(() => {
    if (selected) {
      setUrl(
        imageOptimized["new-image"].find((el) => el[selected])[selected].url
      );
    }
  }, [selected]);

  const handlerCopy = () => {
    navigator.clipboard.writeText(url);
    btnRef.current.classList.add("copied");
    setTimeout(() => {
      btnRef.current.classList.remove("copied");
    }, 3000);
  };

  return (
    <>
      <button
        onClick={handlerCopy}
        className="btn-url"
        ref={btnRef}
        title={
          imageOptimized["new-image"][index][selected].size === "Error"
            ? ""
            : `copiar url ${selected}`
        }
        disabled={
          imageOptimized["new-image"][index][selected].size === "Error"
            ? true
            : false
        }
      >
        Copiar
      </button>
    </>
  );
};

export default ButtonUrl;
