import React, { useEffect } from "react";

import { mockWeatherData } from "@/constants";

const locationPage = async ({ params }: { params: { location: string } }) => {
  console.log(mockWeatherData);

  // const res = await fetch(
  //   `http://api.openweathermap.org/geo/1.0/direct?q=${params.location},GB&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
  // );

  // const geoData = await res.json();
  // const lat = geoData[0].lat;
  // const lon = geoData[0].lon;

  // const weatherRes = await fetch(
  //   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
  // );
  // const weatherData = await weatherRes.json();
  // console.log(weatherData);

  return <div>{params.location}</div>;
};

export default locationPage;
