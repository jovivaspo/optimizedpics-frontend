import React, { useState, useEffect, useRef } from "react";
import "../styles/formContact.css";

const initForm = {
  email: "",
  message: "",
};
const initialError = { show: false, error: "" };
const Form = () => {
  const [form, setForm] = useState(initForm);
  const [errorVisible, setErrorVisible] = useState(initialError);
  const errorRef = useRef();

  useEffect(() => {
    errorVisible.show
      ? errorRef.current.classList.add("visible")
      : errorRef.current.classList.remove("visible");
  }, [errorVisible]);

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      return setErrorVisible({
        show: true,
        error: "Complete todos los campos",
      });
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      return setErrorVisible({
        show: true,
        error: "Email no válido",
      });
    }

    fetch("https://formsubmit.co/ajax/96b6a49b5ff2df46a221861c8b85529e", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        message: form.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => alert("Mensaje enviado con éxito"))
      .catch((error) => alert("Lo siento, algo fue mal..."))
      .finally(setForm(initForm));
  };

  return (
    <div className="form-container">
      <h1>Contacto</h1>
      <p>
        Para cualquier consulta, por favor envíenos un correo electrónico a
        través de este formulario.
      </p>
      <form className="form-contact">
        <div className="container-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handlerChange(e);
              setErrorVisible({ ...errorVisible, show: false });
            }}
            value={form.email}
            autoComplete="off"
          />
        </div>
        <span className="contact-error" ref={errorRef}>
          {errorVisible.error}
        </span>
        <div className="container-textarea">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={(e) => {
              handlerChange(e);
              setErrorVisible({ ...errorVisible, show: false });
            }}
            value={form.message}
          ></textarea>
          <button onClick={handlerSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
