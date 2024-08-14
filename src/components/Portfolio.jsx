import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26]">
      <div className="container mx-auto px-3 pt-20 ">
        <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase text-center">
          Portfolio
        </p>
        <span className="flex justify-center pb-20 pt-8 ">
          <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:text-5xl text-2xl">
            Selected works
          </h1>
        </span>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-16">
          <div className="md:col-span-1">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
