import React from "react";
import Searchbar from "./Searchbar";

const SearchSection = () => {
  return (
    <div className="flex w-full justify-center bg-[url('../public/images/banner1.jpg')] bg-cover bg-no-repeat">
      <div className="w-[1232px] bg-black bg-opacity-60 p-5 md:mx-5 md:my-10 md:p-10">
        <h1 className="text-center text-2xl font-semibold text-white">
          Find a location
        </h1>
        <Searchbar />
      </div>
    </div>
  );
};

export default SearchSection;
