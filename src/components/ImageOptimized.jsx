import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onTimeLoad } from "../store/web/webSlice";

const ImageOptimized = ({ imageOptimized, selected }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    setStart(performance.now());
  }, [selected]);

  const dispatch = useDispatch();

  function handleTimeLoad() {
    if (imageOptimized[`time-${selected}`]) return;
    const time = ((performance.now() - start) / 1000).toFixed(3);

    dispatch(
      onTimeLoad({
        imageOptimized,
        timeLoad: time,
        selected,
      })
    );
  }

  return (
    <>
      <img
        src={
          imageOptimized["new-image"].find((el) => el[selected])[selected].url
        }
        alt="Error al optimizar la imagen"
        onLoad={handleTimeLoad}
        style={{
          objectFit:
            (imageOptimized.width / imageOptimized.height < 1.2 &&
              imageOptimized.width / imageOptimized.height > 0.8) ||
            imageOptimized.width / imageOptimized.height > 2 ||
            imageOptimized.width / imageOptimized.height < 0.2
              ? "contain"
              : "fill",
        }}
      />
    </>
  );
};

export default ImageOptimized;
