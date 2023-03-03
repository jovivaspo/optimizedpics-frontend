import React, { useEffect, useState } from "react";
import "../styles/card.css";
import cloudinary from "../assets/cloudinary.svg";

import { useDispatch } from "react-redux";
import {
  evaluationSize,
  evaluationformat,
} from "../helpers/evaluationCriteria";
import { onTimeLoad } from "../store/web/webSlice";
import { useWebStore } from "../hooks/useWebStore";

const Card = ({ imageDefault }) => {
  const [start, setStart] = useState(0);
  const [timeLoad, setTimeLoad] = useState(0);
  const { startOptimizing } = useWebStore();

  const optimized = imageDefault.image.includes("https://res.cloudinary.com");

  useEffect(() => {
    setStart(performance.now());
  }, []);

  const dispatch = useDispatch();

  const handlerOptimizeOne = () => {
    startOptimizing({ images: [imageDefault] });
  };

  function handleTimeLoad() {
    setTimeLoad(performance.now() - start);
    dispatch(
      onTimeLoad({
        image: imageDefault.image,
        timeLoad: performance.now() - start,
      })
    );
  }

  return (
    <div className={`item-gallery card ${optimized && "card-optimized"}`}>
      <div className="card-head">
        <img
          src={imageDefault.image}
          onLoad={handleTimeLoad}
          style={{
            objectFit:
              (imageDefault.width / imageDefault.height < 1.2 &&
                imageDefault.width / imageDefault.height > 0.8) ||
              imageDefault.width / imageDefault.height > 2 ||
              imageDefault.width / imageDefault.height < 0.2
                ? "contain"
                : "fill",
          }}
        />
      </div>
      <div className="image-stats">
        <button
          className="btn-optimize"
          onClick={handlerOptimizeOne}
          disabled={optimized}
        >
          Optimizar
        </button>
        {optimized && (
          <img src={cloudinary} alt="cloudinary" className="logo-cloudinary" />
        )}
        <h3>Estadísticas</h3>
        <p>Tiempo de carga</p>
        <span>{(timeLoad / 1000).toFixed(3)} s</span>
        <p>Peso</p>
        <span>
          {imageDefault.size} KB{" "}
          <img
            className="icon-evaluation"
            src={evaluationSize([parseInt(imageDefault.size)])}
          />
        </span>
        <p>Formato</p>
        <span>
          {imageDefault.format}{" "}
          <img
            className="icon-evaluation"
            src={evaluationformat[imageDefault.format.toLowerCase()]}
          />
        </span>
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
