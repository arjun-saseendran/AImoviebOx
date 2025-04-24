import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import { MainContainer } from "../containers/MainContainer";
import { SecondaryContainer } from "../containers/SecondaryContainer";
import { Header } from "../header/Header";

export const Browse = () => {
  // useNowPlayingMovies
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};
