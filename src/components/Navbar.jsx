import { useState } from "react";
import { FaBars, FaWifi, FaDownload } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SiMinds } from "react-icons/si";
import "../App.css";

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#273b1a] to-[#3b4c26]">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3">
        <div className="lg:w-1/4 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center">
          <a
            href="/"
            className="font-medium tracking-wider transition-colors cursor-pointer"
          >
            <button className="flex items-center gap-x-4 text-white">
              <FaWifi className="text-2xl" />
              <p className="text-2xl">Maggie</p>
            </button>
          </a>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-xl text-white leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!NavbarOpen)}
            >
              {NavbarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={
            "lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-3/4" +
            (NavbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0">
            <div className="flex flex-col lg:flex-row items-center justify-between lg:w-2/3">
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="">Services</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="">Portfolio</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="">About</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="">Contact Me</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
