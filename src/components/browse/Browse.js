import { MainContainer } from "../Containers/MainContainer";
import { SecondaryContainer } from "../Containers/SecondaryContainer";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import { Header } from "../Header/Header";

export const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
