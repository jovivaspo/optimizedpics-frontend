import React from "react";
import {
  evaluationSize,
  evaluationformat,
} from "../helpers/evaluationCriteria";

const StatsDefault = ({ timeLoad, imageDefault }) => {
  return (
    <>
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
    </>
  );
};

export default StatsDefault;
