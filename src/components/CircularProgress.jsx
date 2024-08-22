import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ value, text }) => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={value} // Percentage value for progress
        text={text}
        styles={buildStyles({
          pathColor: "#ff8267", // Color of the progress bar
          textColor: "#fff", // Color of the text
          trailColor: "#4c613e", // Color of the trail
          pathTransitionDuration: 0.6, // Duration of the animation
        })}
      />
    </div>
  );
};

export default CircularProgress;
