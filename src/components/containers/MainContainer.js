import React from "react";
import { VideoTitle } from "../VideoTitle/VideoTitle";
import { VideoBackground } from "../VideoBackground/VideoBackground";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(!movies) return;
  const mainMove = movies[0];
  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};
