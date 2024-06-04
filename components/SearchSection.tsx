import React from "react";
import Searchbar from "./Searchbar";

const SearchSection = () => {
  return (
    <div className="w-full bg-[url('../public/images/banner1.jpg')] bg-cover bg-no-repeat">
      <div className="mx-5 my-10 bg-black bg-opacity-60 p-10">
        <h1 className="text-center text-3xl font-semibold text-white">
          Find a forecast
        </h1>
        <Searchbar />
      </div>
    </div>
  );
};

export default SearchSection;
