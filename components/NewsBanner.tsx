import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Button } from "./ui/button";

import { mockNewsData } from "@/constants";

const NewsBanner = () => {
  const articleSummery = mockNewsData[0].content.split(".")[0];

  return (
    <div className="relative w-full bg-[url('../public/images/banner2.jpg')] bg-cover bg-no-repeat p-5 text-white md:p-16">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-black"></div>
      <div className="relative z-20 flex flex-col gap-3 md:w-1/2">
        <h3 className="text-md">NEWS</h3>
        <h2 className="text-3xl font-semibold">{mockNewsData[0].title}</h2>
        <p>{articleSummery}</p>
        <div className="group flex items-center">
          <Button className="text-md w-20 p-0" variant={null}>
            Read More
          </Button>
          <MdKeyboardArrowRight
            size={25}
            color="#B9DC0C"
            className="transition-transform duration-500 group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
