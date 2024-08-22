import { FaLinkedin, FaGithub } from "react-icons/fa";
import Me from "../assets/maggie.jpg";
import "../components/Header/Header.css";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26] relative overflow-hidden">
      <div className="px-3 flex flex-col items-center relative">
        {/* Background Shapes */}
        <div className="lg:w-60 w-20 lg:h-20 rounded-full border border-t-0 border-r-0 border-[#69835e] absolute z-10 opacity-30 right-0"></div>
        <div className="lg:w-60 w-20 lg:h-60 rounded-full border border-b-0 border-l-0 border-[#69835e] absolute z-10 opacity-50 left-0 lg:bottom-40 bottom-0"></div>

        {/* Social Icons */}
        <div className="flex flex-col gap-y-12 text-[#c3d9bd] absolute lg:left-[15%] left-4 top-1/4">
          <FaLinkedin className="rounded-xl border-[#c3d9bd] p-1 text-3xl cursor-pointer hover:text-white transition-all duration-300" />
          <FaGithub className="p-1 text-3xl cursor-pointer hover:text-white transition-all duration-300" />
        </div>

        {/* Image */}
        <div className="sm:w-[30rem] w-3/5 lg:h-[25rem] mt-24 rounded-[560px] rounded-b-none border border-r-0 border-[#69835e] relative z-20 overflow-hidden">
          <img
            src={Me}
            alt="Margaret N.O Boye"
            className="relative w-full h-full object-cover rounded-tr-[12rem] rounded-tl-[12rem]"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 lg:mt-16 mb-16 text-center">
          <h1 className="text-[#c3d9bd] mt-4 text-transparent bg-clip-text md:text-7xl text-3xl font-semibold">
            Margaret N.O Boye
          </h1>
          <p className="text-[#c3d9bd] md:text-2xl mt-4">
            JUNIOR FRONTEND WEB DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
