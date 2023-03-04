import React, { useEffect, useState, useRef } from "react";
import "../styles/card.css";
import cloudinary from "../assets/cloudinary.svg";
import { useDispatch, useSelector } from "react-redux";
import { onTimeLoad } from "../store/web/webSlice";
import { useWebStore } from "../hooks/useWebStore";
import StatsDefault from "./StatsDefault";
import StatsOptimized from "./StatsOptimized";
import CardOptimizing from "./CardOptimizing";

const Card = ({ imageDefault }) => {
  const [start, setStart] = useState(0);
  const [timeLoad, setTimeLoad] = useState(0);
  const [optimized, setOptimized] = useState(false);
  const [optimizing, setOptimizing] = useState(false);

  const { imagesOptimizing, imagesOptimized } = useSelector(
    (state) => state.web
  );

  const { startOptimizing } = useWebStore();
  const dispatch = useDispatch();

  const preOptimized = imageDefault.image.includes(
    "https://res.cloudinary.com"
  );

  useEffect(() => {
    setStart(performance.now());
  }, []);

  useEffect(() => {
    setOptimizing(imagesOptimizing.includes(imageDefault));
  }, [imagesOptimizing]);

  useEffect(() => {
    const check = imagesOptimized.some(
      (image) => image.image === imageDefault.image
    );
    setOptimized(check);
  }, [imagesOptimized]);

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
    <div
      className={`item-gallery card ${preOptimized ? "card-preoptimized" : ""}`}
    >
      {<CardOptimizing visible={optimizing} />}

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
          disabled={preOptimized}
        >
          Optimizar
        </button>
        {preOptimized && (
          <img src={cloudinary} alt="cloudinary" className="logo-cloudinary" />
        )}
        <h3>Estadísticas</h3>
        {!optimized ? (
          <StatsDefault timeLoad={timeLoad} imageDefault={imageDefault} />
        ) : (
          <StatsOptimized />
        )}
      </div>
    </div>
  );
};

export default Card;
