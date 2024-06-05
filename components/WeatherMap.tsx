import Image from "next/image";
import React, { useEffect, useState } from "react";

const WeatherMap = () => {
  // const [mapData, setMapData] = useState("");

  // useEffect(() => {
  //   const fetchMap = async () => {
  //     const res = await fetch(
  //       `https://tile.openweathermap.org/map/temp_new/6/0/63.png?appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
  //     );

  //     const map = await res.blob();
  //     const url = URL.createObjectURL(map);
  //     setMapData(url);
  //   };

  //   fetchMap();
  // });

  return (
    <div className="">
      {/* {mapData && (
        <Image src={mapData} alt="Weather Map" height={500} width={500} />
      )} */}
      <div className="bg-[#2A2A2A] p-3 text-white">
        <h2 className="text-4xl">UK weather map</h2>
        <p>View the weather with our interactive map</p>
      </div>
      <div className="h-60 bg-[url(../public/images/weathermap1.png)] bg-cover bg-no-repeat md:h-96" />
      <div className="border-[1px] p-4 text-sm">
        <span>Forecast for {Date().slice(0, 21)}</span>
      </div>
    </div>
  );
};

export default WeatherMap;
