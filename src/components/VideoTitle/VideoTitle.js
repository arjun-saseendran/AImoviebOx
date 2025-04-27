import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video p-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white mt-2 md:mt-0 text-black py-1 md:py-4 px-3 md:px-12 md:text-xl hover:opacity-80 rounded-lg">▶ Play</button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl hover:opacity-80 bg-opacity-50 rounded-lg mx-2">More Info</button>
      </div>
    </div>
  );
};
