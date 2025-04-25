import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "../MovieList/MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-44 relative z-20 pl-12">

        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
        </div>
    )
  );
};
