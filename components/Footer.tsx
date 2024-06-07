import React from "react";
import Image from "next/image";

import {
  FaSquareXTwitter,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";

import logo from "../public/images/logo_transparent.png";
import googlePlay from "../public/images/google-play-badge.svg";
import appStore from "../public/images/apple-store-badge.svg";

const Footer = () => {
  return (
    <div>
      <div className="mt-10 flex h-72 justify-center gap-5 bg-[#3A3A3A] p-5">
        <div className="border-r-[1px] border-gray-600 border-opacity-70">
          <Image src={logo} height={100} width={150} alt="logo" />
        </div>
        <div className="px-2 py-5">
          <ul className="flex flex-col gap-5 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white hover:underline">
              Accessibility
            </li>
            <li className="cursor-pointer hover:text-white hover:underline">
              Email updates
            </li>
            <li className="cursor-pointer hover:text-white hover:underline">
              Advertising
            </li>
            <li className="cursor-pointer hover:text-white hover:underline">
              Careers
            </li>
            <li className="cursor-pointer hover:text-white hover:underline">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="flex min-h-32 flex-col justify-evenly gap-5 bg-[#2A2A2A] p-5 md:flex-row">
        <div className="flex items-start gap-3">
          <Image
            src={googlePlay}
            height={100}
            width={115}
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src={appStore}
            height={100}
            width={100}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-10 text-white">
          <ul className="flex gap-3">
            <FaSquareXTwitter
              size={35}
              className="cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
            />
            <FaYoutube
              size={35}
              className="cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
            />
            <FaFacebook
              size={35}
              className="cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
            />
            <FaTiktok
              size={35}
              className="cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
            />
            <FaInstagram
              size={35}
              className="cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
            />
            <SiIndeed
              size={35}
              className="cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
            />
          </ul>
          <h4 className="flex items-center justify-end gap-1 text-sm text-white opacity-50">
            <FaCopyright /> Folka.dev Copyright
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
