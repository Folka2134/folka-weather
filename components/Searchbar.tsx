"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

import { cities } from "@/constants";

const Searchbar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = cities.filter((city) =>
    city.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      router.push(`/forecast/${searchInput}`);
    }
  };

  return (
    <div className="relative z-0 mt-4 flex flex-col">
      <div className="flex w-full">
        <Input
          className="h-12 w-full rounded-none border-none px-5 text-xl ring-inset ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
          placeholder="Search for a place"
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsFocused(false);
            }, 1000)
          }
        />
        <a
          className="flex items-center justify-center bg-white pr-8"
          href={`/forecast/${searchInput}`}
        >
          <FaMagnifyingGlass size={20} color="gray" />
        </a>
      </div>
      {isFocused && (
        <div className="absolute top-14 z-10 w-full bg-white">
          {searchInput.length >= 2 && (
            <div className="m-5">
              <h3 className="border-b-[1px] pb-3">Suggested places</h3>
              <ul className="flex flex-col gap-2">
                {suggestions.map((city) => (
                  <li
                    key={city}
                    className="mt-1 flex cursor-pointer items-center gap-1 p-[2px] hover:bg-gray-100"
                    onClick={() =>
                      router.push(`/forecast/${city.toLowerCase()}`)
                    }
                  >
                    <CiLocationOn size={20} />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* <div>
            <h3>Recent places</h3>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
