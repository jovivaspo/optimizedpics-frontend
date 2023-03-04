import React from "react";
import "../styles/gallery.css";
import Card from "./Card";

const Gallery = ({ imagesDefault, url }) => {
  return (
    <div className="gallery-container">
      <h2>Análisis Completado</h2>
      <div className="result-description">
        <p>
          Url analizada:{" "}
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
      </div>
      <div className="gallery">
        {imagesDefault.map((img, index) => {
          return <Card imageDefault={img} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
