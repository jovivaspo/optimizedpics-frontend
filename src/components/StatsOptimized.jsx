import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  evaluationSize,
  evaluationformat,
} from "../helpers/evaluationCriteria";

const StatsOptimized = ({ imageOptimized, selected }) => {
  return (
    <>
      <p>Tiempo de carga</p>
      <span>
        Antes:<span>{imageOptimized?.timeLoad}s</span>
      </span>
      <span>
        Ahora:
        <span
          style={{
            color:
              parseFloat(imageOptimized[`time-${selected}`]) <
              parseFloat(imageOptimized.timeLoad)
                ? "green"
                : "black",
          }}
        >
          {imageOptimized[`time-${selected}`]
            ? imageOptimized[`time-${selected}`] + "s"
            : "calculando..."}
        </span>
      </span>
      <p>Peso</p>
      <span>
        Antes:<span>{imageOptimized?.size} kB</span>
      </span>
      <span>
        Ahora:
        <span
          style={{
            color:
              parseFloat(
                imageOptimized["new-image"].find((el) => el[selected])[selected]
                  .size
              ) < imageOptimized?.size
                ? "green"
                : "black",
          }}
        >
          {" "}
          {
            imageOptimized["new-image"].find((el) => el[selected])[selected]
              .size
          }{" "}
          kB{" "}
          <img
            className="icon-evaluation"
            src={evaluationSize([
              parseInt(
                imageOptimized["new-image"].find((el) => el[selected])[selected]
                  .size
              ),
            ])}
          />
        </span>
      </span>
      <p>Nuevo Formato</p>
      <span>
        {selected}{" "}
        <img
          className="icon-evaluation"
          src={evaluationformat[selected.toLowerCase()]}
        />
      </span>
    </>
  );
};

export default StatsOptimized;
