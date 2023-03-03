import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { evaluationSize, evaluationformat } from "../helpers/evaluationCriteria";
import { onTimeLoad } from "../store/web/webSlice";

const Card = ({ imageDefault }) => {
  const [start, setStart] = useState(0);
  const [timeLoad, setTimeLoad] = useState(0);

  useEffect(() => {
    setStart(performance.now());
  }, []);

  const dispatch = useDispatch();

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
    <div className="item-gallery card">
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
        <button className="btn-optimize">Optimizar</button>
        <h3>Estadísticas</h3>
        <p>Tiempo de carga</p>
        <span>{(timeLoad / 1000).toFixed(3)} s</span>
        <p>Peso</p>
        <span>{imageDefault.size} KB  <strong className="evaluation">{evaluationSize([parseInt(imageDefault.size)]) }</strong></span>
        <p>Formato</p>
        <span>{imageDefault.format} <strong className="evaluation">{evaluationformat[imageDefault.format.toLowerCase()]}</strong></span>
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
