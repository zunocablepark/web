"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import Logo from "./logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black via-green-700 to-black">
      <div className="flex justify-center items-center py-8">
        <Logo />
      </div>
      <div className="w-full flex justify-center">
        <Link
          className="w-fit flex flex-row items-center text-lg font-bold hover:underline"
          href="https://instagram.com/zunocablepark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="mr-2" />
          junte-se a nós no instagram
        </Link>
      </div>
      <div className="mt-8 flex-1 h-0.5 bg-black"></div>

      <p className="text-center text-sm sm:text-md pt-4 px-6 font-light">
        {`© ${year} Zuno Cable Park`}
      </p>
      <p className="text-center text-sm sm:text-md pt-2 pb-4 font-light">
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
