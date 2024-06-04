import React from "react";
import Image from "next/image";
import { FaCog } from "react-icons/fa";

import logo from "../public/images/logo_icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#2A2A2A] px-10 py-6">
      <div className="flex items-center gap-2">
        <Image src={logo} height={30} width={30} alt="logo" />
        <h3 className="text-xl font-semibold text-white">Folka Weather</h3>
      </div>
      <FaCog
        size={30}
        color="white"
        className="cursor-pointer transition-transform duration-75 hover:scale-105"
      />
    </div>
  );
};

export default Navbar;
