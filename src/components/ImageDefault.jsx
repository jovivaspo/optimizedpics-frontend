import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onTimeLoad } from "../store/web/webSlice";

const ImageDefault = ({ imageDefault }) => {
  const [start, setStart] = useState(0);
  const [timeLoad, setTimeLoad] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setStart(performance.now());
  }, []);

  function handleTimeLoad() {
    const time = ((performance.now() - start) / 1000).toFixed(3);
    setTimeLoad(time);
    dispatch(
      onTimeLoad({
        imageDefault: imageDefault.image,
        timeLoad: time,
      })
    );
  }
  return (
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
  );
};

export default ImageDefault;
