import React, { useEffect, useState } from "react";
import "../styles/card.css";
import { useSelector } from "react-redux";
import { useWebStore } from "../hooks/useWebStore";
import CardOptimizing from "./CardOptimizing";
import CardDefault from "./CardDefault";
import CardOptimized from "./CardOptimized";

const Card = ({ imageDefault }) => {
  const [optimized, setOptimized] = useState(null);
  const [optimizing, setOptimizing] = useState(false);

  const { imagesOptimizing, imagesOptimized } = useSelector(
    (state) => state.web
  );

  const { startOptimizing } = useWebStore();

  const preOptimized = imageDefault.image.includes(
    "https://res.cloudinary.com"
  );

  useEffect(() => {
    setOptimizing(imagesOptimizing.includes(imageDefault));
  }, [imagesOptimizing]);

  useEffect(() => {
    if (optimized) {
      const optimizedImage = imagesOptimized.find(
        (image) => image["new-image"] === optimized[["new-image"]]
      );
      return setOptimized(optimizedImage);
    }
    const optimizedImage = imagesOptimized.find(
      (image) => image.image === imageDefault.image
    );
    if (optimizedImage === undefined) return;
    setOptimized(optimizedImage);
  }, [imagesOptimized]);

  const handlerOptimizeOne = () => {
    startOptimizing({ images: [imageDefault] });
  };

  return (
    <div
      className={`item-gallery card ${preOptimized ? "card-preoptimized" : ""}`}
    >
      {<CardOptimizing visible={optimizing} />}

      {!optimized ? (
        <CardDefault
          imageDefault={imageDefault}
          handlerOptimizeOne={handlerOptimizeOne}
          preOptimized={preOptimized}
          optimized={optimized}
        />
      ) : (
        <CardOptimized imageOptimized={optimized} />
      )}
    </div>
  );
};

export default Card;
