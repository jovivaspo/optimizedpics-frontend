import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/improveStat.css";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

const ImproveStat = ({ imageOptimized, selected }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const improve = (
      ((parseFloat(imageOptimized.size) -
        parseFloat(
          imageOptimized["new-image"].find((el) => el[selected])[selected].size
        )) /
        parseFloat(imageOptimized.size)) *
      100
    ).toFixed(2);

    setPercentage(improve);
  }, [selected]);

  return (
    <ProgressProvider
      valueStart={0}
      valueEnd={percentage > 0 ? percentage : percentage * -1}
    >
      {(value) => (
        <div className="progress-container">
          <CircularProgressbar
            value={value ? value : 0}
            text={`${value || value === 0 ? value + "%" : "Error"}`}
            styles={buildStyles({
              textColor: percentage > 0 ? "green" : "red",
              pathColor: percentage > 0 ? "green" : "red",
            })}
          />
        </div>
      )}
    </ProgressProvider>
  );
};

export default ImproveStat;
