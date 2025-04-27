import { MainContainer } from "../Containers/MainContainer";
import { SecondaryContainer } from "../Containers/SecondaryContainer";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import { Header } from "../Header/Header";
import { SmartSearch } from "../SmartSearch/SmartSearch";
import { useSelector } from "react-redux";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import { useTopRatedMovies } from "../../hooks/usetTopRatedMovies";

export const Browse = () => {
  const smartSearch = useSelector((state) => state.smartSearch.showSmartSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {smartSearch ? (
        <SmartSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};
