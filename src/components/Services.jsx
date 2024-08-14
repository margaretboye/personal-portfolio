import React from "react";
import { PiDesktopTower } from "react-icons/pi";
import { SiMaterialdesignicons } from "react-icons/si";
import { VscPaintcan } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import MainImage from "../assets/woman-removebg.png";

const Services = () => {
  return (
    <div className=" bg-gradient-to-b from-[#273b1a] to-[#3b4c26]">
      <div className="container mx-auto px-3 pt-20">
        <div className="lg:flex items-center justify-between gap-x-40">
          <span className="lg:w-1/2">
            <p className="text-[#c0d6bb] lg:text-2xl text-xl pb-4 uppercase">
              Services
            </p>
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl">
              Building Digital Products with better Experience
            </h1>
          </span>
          <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-r-none border border-r-0 border-[#4c613e] opacity-40 lg:static absolute top"></div>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <SiMaterialdesignicons className="text-4xl text-white mb-4  " />
            <h1 className="text-white text-2xl mb- ">
              Junior Frontend Web developer
            </h1>
            <p className="text-[#93a98b] mb-6">
              I have created a user interface and user experience with some
              process and method
            </p>
          </div>

          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <PiDesktopTower className="text-4xl text-white mb-4  " />
            <h1 className="text-white text-2xl mb- ">
              Junior Frontend Web developer
            </h1>
            <p className="text-[#93a98b] mb-6">
              I have created a user interface and user experience with some
              process and method
            </p>
          </div>
          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <PiDesktopTower className="text-4xl text-white mb-4  " />
            <h1 className="text-white text-2xl mb- ">
              Junior Frontend Web developer
            </h1>
            <p className="text-[#93a98b] mb-6">
              I have created a user interface and user experience with some
              process and method
            </p>
          </div>

          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <VscPaintcan className="text-4xl text-white mb-4  " />
            <h1 className="text-white text-2xl mb- ">
              Junior Frontend Web developer
            </h1>
            <p className="text-[#93a98b] mb-6">
              I have created a user interface and user experience with some
              process and method
            </p>
          </div>
        </section>
        <section className="lg:flex w-full items-end gap-20 mt-12">
          <div className="sm:w-[30rem] w-4/5 lg:mx-0 mx-auto rounded-[560px] rounded-b-none border border-b-0 border-l-0 border-[#4c613e] relative z-20 ">
            <img
              src={MainImage}
              alt="main image"
              className="w-full -mt-8 relative z-20 -left-8"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-12">
            <p className="text-[#c0d6bb] text-2xl uppercase lg:text-left text-center">
              Statistics
            </p>
            <div className="w-full lg:flex justify-between gap-8 lg:pt-24">
              <span className="text-center">
                <p className="lg:text-5xl  bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  200+
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                  Projects Delivered
                </p>
              </span>
              <span className="text-center">
                <p className="lg:text-5xl  bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  200+
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">Awards</p>
              </span>
              <span className="text-center">
                <p className="lg:text-5xl  bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  200+
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                  Years of experience
                </p>
              </span>

              <span className="text-center">
                <p className="lg:text-5xl  bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  200+
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                  {" "}
                  Happy Clients
                </p>
              </span>
            </div>
            <div className="flex lg:justify-between justify-start lg:gap-0 gap-[50%] pt-12 xl:pl-[20%] lg:h-auto h-44">
              <div className="lg:w-60 w-28 lg:h-40 rounded-[560px] rounded-b-none border border-b-0 border-[#4c613e] opacity-40"></div>
              <div className="bg-[#3f5125] rounded-full rounded-b-none lg:w-40 w-32 lg:h-20 h-16 lg:p-8 p-6">
                <button className="rounded-full bg-[#ff8267] text-[#762f20] lg:h-24 w-20 p-4 relative transition ease-out duration-300 transform hover:bg-[#1c2f13] ">
                  <p className="lg:text-2xl text-xl font-medium uppercase">
                    Let's talk
                  </p>
                  <BsArrowRight className="lg:w-full w-1/2 h-12 absolute lg:-left-20 -left-8 top-[25%] text-white" />
                  {/* <img
                    src=""
                    alt=""
                    className="lg:w-full w-1/2 h-12 absolute lg:-left-20 -left-8 top-[25%] "
                  /> */}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
