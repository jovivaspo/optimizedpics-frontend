import React, { useState } from "react";
import { connectionApi } from "../api/connectionApi";

const Form = () => {
  const [url, setUrl] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const urlRegex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    try {
      if (!url || !urlRegex.test(url)) {
        throw new Error("Introduzca url válida");
      }
      const data = await connectionApi.post("/analyse", {
        body: {
          url,
        },
      });
      console.log(data);
      setUrl("");
    } catch (error) {
      alert(error);
      setUrl("");
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Analyse</button>
      </form>
    </div>
  );
};

export default Form;
