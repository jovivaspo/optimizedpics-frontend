import React from "react";
import ImageOptimized from "./ImageOptimized";
import StatsOptimized from "./StatsOptimized";
import ListTags from "./ListTags";
import { useControlImage } from "../hooks/useControlmage";
import ButtonUrl from "./ButtonUrl";
import ImproveStat from "./ImproveStat";

const CardOptimized = ({ imageOptimized }) => {
  const { formats, selected, handlerChangeFormat } = useControlImage({
    imageOptimized,
  });

  return (
    <>
      {selected && (
        <>
          <div className="card-head">
            <ImageOptimized
              imageOptimized={imageOptimized}
              selected={selected}
              formats={formats}
            />
          </div>
          <div className="image-stats">
            <h3>Estadísticas</h3>
            <StatsOptimized
              imageOptimized={imageOptimized}
              selected={selected}
            />
          </div>
          {formats.length > 0 && (
            <ListTags
              formats={formats}
              selected={selected}
              handlerChangeFormat={handlerChangeFormat}
            />
          )}
          {
            <ButtonUrl
              imageOptimized={imageOptimized}
              selected={selected}
              formats={formats}
            />
          }
          {<ImproveStat imageOptimized={imageOptimized} selected={selected} />}
        </>
      )}
    </>
  );
};

export default CardOptimized;
