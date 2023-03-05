import React from "react";
import "../styles/contentHome.css";
import { Link } from "react-router-dom";

const ContentHome = () => {
  return (
    <div className="content-home">
      <h2 className="home-subtitle">
        ¿Quieres optimizar tus imágenes para que se carguen más rápido y sean
        más eficientes?
      </h2>
      <div className="block-container">
        <div className="block">
          <h3>Analiza tu web</h3>
          <p>
            Simplemente introduce la URL de la web que quieras analizar y te
            proporcionaremos estadísticas detalladas sobre su peso, formato y
            tiempo de carga de tus imágenes
          </p>
        </div>
        <div className="block">
          <h3>Optimiza tus imágenes</h3>
          <p>
            Utilizamos Cloudinary para garantizar una optimización de alta
            calidad, lo que significa que tus imágenes serán más ligeras y se
            cargarán más rápido sin perder calidad.
          </p>
        </div>
        <div className="block">
          <h3>Implementa</h3>
          <p>
            Podrás descargar tus imágenes en varios formatos, como WebP, AVIF
            JPEG, y recibirás una nueva URL que podrás usar para reemplazar la
            imagen original en tu sitio web. ¡Así de fácil!{" "}
            <Link to={"/demo"} className="link-demo">
              Pruebalo ya
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
