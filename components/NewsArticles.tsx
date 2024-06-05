import React from "react";

import Image from "next/image";

import { FaListUl } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import { mockNewsData } from "@/constants";

const NewsArticles = () => {
  return (
    <div>
      <h1 className="mb-5 border-b-[1px] pb-5 text-3xl font-semibold">
        More from Folka Weather
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mockNewsData.map((article) => (
          <Card
            key={article.id}
            className="group flex cursor-pointer flex-col justify-between"
          >
            <CardHeader className="p-0">
              <img src={article.image} alt="weather" className="max-h-52" />
              <h3 className="p-5 pt-1 text-lg font-semibold group-hover:underline">
                {article.title}
              </h3>
            </CardHeader>
            <div className="ml-5 flex items-center gap-1">
              <FaListUl size={18} />
              <Button variant={null} className="text-md p-0 hover:bg-none">
                Explore
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
