import React from "react";
import languageStore from "@/Mobx/Store/Languagestore";
import LanguageSwitch from "./LanguageSwitch";

function Search() {
  const translations = {
    en: { Placeholder: "Search ..."  },
    ar: { Placeholder: "البحث في الموقع" },
  };
  return (
    <div className="      ">
      <div className="  grid grid-cols-[1fr_auto_auto] items-center   h-[40px]     bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-200">
        <input
          type="text"
          placeholder={translations[languageStore.language].Placeholder}
          className="w-[90%] p-2   border-none  outline-none h-[40px] "
        />
        <LanguageSwitch />
        <svg
          className="w-4 h-4 text-gray-400 mx-2 "
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>{" "}
      </div>
    </div>
  );
}

export default Search;
