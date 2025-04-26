import React from "react";
import { lang } from "../../utils/languageConstants";
import { useSelector } from "react-redux";

export const SmartSearchBar = () => {
  const selectedLanguage = useSelector(
    (state) => state.language?.languageOption
  );

  return (
    <div className="flex justify-center p-[10%]">
      <form className=" bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage]?.smartSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg">
          {lang[selectedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};
