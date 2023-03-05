import React from "react";
import ImageDefault from "./ImageDefault";
import cloudinary from "../assets/cloudinary.svg";
import StatsDefault from "./StatsDefault";

const CardDefault = ({
  imageDefault,
  handlerOptimizeOne,
  preOptimized,
  optimized,
}) => {
  return (
    <>
      <div className="card-head">
        <ImageDefault imageDefault={imageDefault} />
      </div>
      <div className="image-stats">
        <button
          className="btn-optimize"
          onClick={handlerOptimizeOne}
          disabled={preOptimized || optimized}
        >
          Optimizar
        </button>
        {preOptimized && (
          <img src={cloudinary} alt="cloudinary" className="logo-cloudinary" />
        )}
        <h3>Estadísticas</h3>
        <StatsDefault imageDefault={imageDefault} />
      </div>
    </>
  );
};

export default CardDefault;
