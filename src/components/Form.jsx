import React, { useState } from "react";

const Form = () => {
  const [url, setUrl] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const urlRegex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

    if (!url || !urlRegex.test(url)) {
      return alert("Introduce url válida");
    }
    setUrl("");
  };

  console.log(url);

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
