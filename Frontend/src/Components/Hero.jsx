import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col border sm:flex-row border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
            <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
            </div>
            <h1 className=".anton-regular text-3xl md:text-5xl sm:py-3 font-bold mt-4">Latest Collection</h1>
            <div className="flex items-center gap-4 mt-6">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
        </div>
      </div>
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="hero" />
    </div>
  );
};

export default Hero;
