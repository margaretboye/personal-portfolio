import React from "react";
import MainImage from "../assets//woman-removebg.png";

import { BsArrowRight } from "react-icons/bs";

const HireMe = () => {
  return (
    <div className="bg-gradient-to-b from-[#273b1a] to-[#3b4c26] h-full relative">
      <div className="px-3 pt-20 lg:flex items-end justify-between gap-8 container mx-auto">
        <div className="lg:w-2/3">
          <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase text-center">
            Hire me
          </p>
          <span className="flex pb-8 pt-4">
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl">
              Stay Chill and Tell Your Plan
            </h1>
          </span>

          <div>
            <img src={MainImage} alt="" className="h-[106%] -mt-8 w-full" />
          </div>
          <form
            action=""
            className="lg:11/12 flex flex-col lg:gap-6 gap-3 text-white lg:mt-0 mt-12"
          >
            <div className="flex lg:gap-6 gap-3 w-full">
              <label htmlFor="" className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#213516] w-full px-4 h-16 outline-none"
                />
              </label>
              <label htmlFor="" className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#213516] w-full px-4 h-16 outline-none"
                />
              </label>
            </div>
            <label htmlFor="" className="w-full">
              <textarea
                name=""
                id=""
                placeholder="Message..."
                className="resize-none bg-[#213516] w-full px-4 h-140 outline-none"
              />
            </label>

            <div className="pt-4 flex justify-end h-40">
              <div className="bg-gradient-to-b from-[#3f5125] to-[#364823] rounded-full rounded-b-none lg:h-20 lg:w-40 w-32 h-16 lg:p-8 p-6">
                <button className="rounded-full bg-[#ff8267] text-[#762f20] lg:h-24 h-20 lg:w-24 w-20 p-4 relative transition ease-out duration-300 transform hover:bg-[#1c2f13]">
                  <p>Send</p>
                  <BsArrowRight className="" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
