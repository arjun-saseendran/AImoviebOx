import { useRef } from "react";
import { lang } from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { ai } from "../../utils/googleGenAi";
import { API_OPTIONS } from "../../utils/constants";
import { addSmartSearchResult } from "../../utils/smartSlice";
export const SmartSearchBar = () => {
  const selectedLanguage = useSelector(
    (state) => state.language?.languageOption
  );
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSmartSearch = async () => {
    const smartQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const smartResult = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: smartQuery,
    });
    const movieNames = smartResult.text.split(",");

    const promiseArray = movieNames.map((movie) => searchMovies(movie));
    const movieResult = await Promise.all(promiseArray);
    dispatch(addSmartSearchResult({ movieResult, movieNames }));
  };

  return (
    <div className="flex justify-center p-[10%]">
      <form
        className=" bg-black w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage]?.smartSearchPlaceholder}
          ref={searchText}
        />
        <button
          onClick={handleSmartSearch}
          className="py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
        >
          {lang[selectedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};
