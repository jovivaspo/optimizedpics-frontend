import React, { useEffect } from "react";
import Card from "./Card";

const Gallery = ({ imagesDefault }) => {
  return (
    <>
      <h2>Análisis Completado</h2>
      <div className="gallery">
        {imagesDefault.map((img, index) => {
          return <Card imageDefault={img} key={index} />;
        })}
      </div>
    </>
  );
};

export default Gallery;
