import { useEffect, useState } from "react";

export const useControlImage = ({ imageOptimized }) => {
  const [formats, setFormts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setFormts(
      imageOptimized["new-image"].map((image) => {
        let [key] = Object.keys(image);
        return key;
      })
    );
  }, []);

  useEffect(() => {
    if (formats.length > 0) {
      setSelected(formats[0]);
    }
  }, [formats]);

  const handlerChangeFormat = (e) => {
    setSelected(e.target.textContent);
  };

  return { formats, selected, handlerChangeFormat };
};
