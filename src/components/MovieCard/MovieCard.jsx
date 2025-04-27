import { IMG_CDN } from "../../utils/constants";

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;

  return (
    <div className=" w-36 md:w-48 pr-4">
      <img src={IMG_CDN + posterPath} alt="movie card" />
    </div>
  );
};
