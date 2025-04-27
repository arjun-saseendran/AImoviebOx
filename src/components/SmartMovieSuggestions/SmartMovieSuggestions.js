import { useSelector } from "react-redux";
import { MovieList } from "../MovieList/MovieList";

export const SmartMovieSuggestions = () => {
  const { movieResult, movieNames } = useSelector((state) => state.smartSearch);
  if (!movieNames) return;
  return (
    <div className="m-4 p-4 bg-black opacity-90 text-white">
     {movieNames.map((movieName, index)=>(
       <MovieList key={movieName} title={movieName} movies={movieResult[index]} />
     ))}
      
    </div>
  );
};
