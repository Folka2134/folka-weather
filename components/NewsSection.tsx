import React from "react";
import NewsBanner from "./NewsBanner";
import WeatherMap from "./WeatherMap";
import NewsArticles from "./NewsArticles";

const NewsSection = () => {
  return (
    <div className="3xl:px-[700px] my-5 flex w-full flex-col gap-10 px-5 md:px-12 lg:px-32 xl:px-44 2xl:px-96">
      <NewsBanner />
      <WeatherMap />
      <NewsArticles />
    </div>
  );
};

export default NewsSection;
