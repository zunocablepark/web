import Link from "next/link";

import { sessionLink } from "@/lib/whatsapp";

import Logo from "./logo";

const NavHeader = () => {
  return (
    <>
      <div className="w-full fixed top-0 mx-auto flex z-50 py-4 h-20 justify-center bg-gradient-to-r from-black via-green-700 to-black border-b-2 border-green-600 shadow-md shadow-green-950">
        <header className="max-w-page w-full">
          <nav className="px-6 flex w-full h-full justify-between items-center">
            <div className="flex justify-start items-center ">
              <Logo />
            </div>
            <Link
              className="font-extrabold whitespace-nowrap hover:underline hover:scale-105 transition-all duration-300"
              href={sessionLink}
              target="_blank"
            >
              AGENDE SUA SESSÃO
            </Link>
          </nav>
        </header>
      </div>
      <div className="h-20 bg-transparent" />
    </>
  );
};

export default NavHeader;
