import React from "react";
import CrepusVideo from "../assets/videos/crepus-et-belle.mp4";

const Crepus = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-full max-w-4xl">
        <video
          src={CrepusVideo}
          controls
          loop
          muted
          className="w-full h-auto rounded-lg shadow-lg"
          poster="path-to-your-poster-image.jpg" // Optional: add a poster image
        >
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => document.querySelector("video").requestFullscreen()}
          className="absolute bottom-4 right-4 p-2 bg-white text-black rounded-md"
        >
          Full Screen
        </button>
      </div>
    </div>
  );
};

export default Crepus;
