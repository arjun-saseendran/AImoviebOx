import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "../MovieList/MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0  lg:-mt-44 relative z-20 md:pl-12">

        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
        </div>
    )
  );
};
