import React from "react";
import {
  evaluationSize,
  evaluationformat,
} from "../helpers/evaluationCriteria";

const StatsDefault = ({ imageDefault }) => {
  return (
    <>
      <p>Tiempo de carga</p>
      <span>{imageDefault?.timeLoad} s</span>
      <p>Peso</p>
      <span>
        {imageDefault.size} kB{" "}
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
