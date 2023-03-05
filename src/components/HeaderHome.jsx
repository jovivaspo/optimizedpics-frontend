import React from "react";
import { Pattern } from "./pattern";
import { ImageHome } from "./ImageHome";
import { useResize } from "../hooks/useResize";
import "../styles/headerHome.css";

const HeaderHome = ({ title }) => {
  const width = useResize();

  return (
    <header className="home-header">
      <Pattern width={width} />
      <div className="home-header-content">
        <section className="home-description">
          <h1 className="home-title">Bienvenido a {title} !</h1>
          <h2 className="home-subtitle">
            {" "}
            ¿Te preocupa el tiempo de carga de tus imágenes y cómo afecta a la
            experiencia de tus usuarios?
            <br />
            OptimizedPics es la solución que necesitas.
          </h2>
        </section>
        <ImageHome width={300} height={500} />
      </div>
    </header>
  );
};

export default HeaderHome;
