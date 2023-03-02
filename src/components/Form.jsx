import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { connectionApi } from "../api/connectionApi";
import { useWebStore } from "../hooks/useWebStore";
import { onError } from "../store/web/webSlice";

const Form = () => {
  const [url, setUrl] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const { startAnalyse } = useWebStore();

  const errorRef = useRef();

  useEffect(() => {
    errorVisible
      ? errorRef.current.classList.add("visible")
      : errorRef.current.classList.remove("visible");
  }, [errorVisible]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const urlRegex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (!url || !urlRegex.test(url)) {
      return setErrorVisible(true);
    }
    startAnalyse({ url });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className="input-container">
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setErrorVisible(false);
          }}
          placeholder="Introduce una url"
          autoComplete="off"
        />
        <span className="form-error" ref={errorRef}>
          Introduce url válida
        </span>
      </div>

      <button type="submit">Analizar</button>
    </form>
  );
};

export default Form;
