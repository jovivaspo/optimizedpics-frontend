import React, { useState } from "react";

const Card = ({ imageDefault }) => {
  const start = performance.now();

  const [timeLoad, setTimeLoad] = useState(0);

  const handleTimeLoad = () => {
    setTimeLoad(performance.now() - start - 0.015);
  };

  return (
    <div className="item-gallery card">
      <div className="card-head">
        <img
          src={imageDefault.image}
          onLoad={handleTimeLoad}
          style={{
            objectFit:
              (imageDefault.width / imageDefault.height < 1.2 &&
                imageDefault.width / imageDefault.height > 0.8) ||
              imageDefault.width / imageDefault.height > 1.8 ||
              imageDefault.width / imageDefault.height < 0.2
                ? "contain"
                : "fill",
          }}
        />
      </div>
      <div className="image-stats">
        <button className="btn-optimize">Optimizar</button>
        <h3>ESTADÍSTICAS</h3>
        <p>Tiempo de carga</p>
        <span>{(timeLoad / 1000).toFixed(3)} s</span>
        <p>Peso</p>
        <span>{imageDefault.size} KB</span>
        <p>Formato</p>
        <span>{imageDefault.format}</span>
        <p>Dimensiones</p>
        <div>
          <span>Ancho: {imageDefault.width}px</span>
          <span>Alto: {imageDefault.height}px</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
