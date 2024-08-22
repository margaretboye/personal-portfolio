import React from "react";
import BBVideo from "../assets/videos/bb.mp4";

const Bloom = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="relative w-full max-w-4xl">
          <video
            src={BBVideo}
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
    </div>
  );
};

export default Bloom;
