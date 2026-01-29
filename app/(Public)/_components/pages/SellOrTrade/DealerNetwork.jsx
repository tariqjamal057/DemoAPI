"use client";

import React from "react";
import map from "../../../../../assets/dealer-map.png";

const DealerNetwork = () => {
  return (
    <section className="w-full py-[60px] lg:py-[100px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[20px] lg:px-[60px] flex flex-col items-center">
        {/* HEADER - Consistent with your other components */}
        <div className="flex flex-col items-center gap-4 mb-[40px] md:mb-[60px] text-center">
          <h2 className="text-[30px] lg:text-[54px] font-semibold text-black tracking-tight leading-tight max-w-[80vw]">
            Canada's <span className="text-primary">Largest</span> Dealer
            Network
          </h2>
        </div>

        {/* APP / MAP CONTAINER */}
        <div className="w-full relative group">
          {/* Decorative "Browser" or "App" Frame */}
          <div className="w-full max-h-[1100px]  flex justify-center items-center">
            {/* The Map Image */}
            <div className="relative w-max  h-full md:h-[500px] lg:h-[650px] rounded-[18px] lg:rounded-[32px] overflow-hidden ">
              <img
                src={map.src}
                alt="Canada Dealer Network Map"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Location Badge */}
            </div>
          </div>

          {/* Background Glow for emphasis */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="    bg-white mt-8 px-7 py-5 rounded-[8px] border border-border  flex items-center gap-3">
          <p className="text-#000000 text-[10px] lg:text-[14px] font-semibold">
            Audubon buy cars from any where in canada!{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;
