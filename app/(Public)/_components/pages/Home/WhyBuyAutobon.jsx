"use client";

import React from "react";
import { Tag, Car, Search, Truck } from "lucide-react";

const WhyBuyFromAutobon = () => {
  const reasons = [
    {
      title: "Better Prices",
      description: "Shop the nations inventory at wholesale prices",
    },
    {
      title: "Largest Inventory",
      description:
        "Drive the car you want! Thousands of options to match every style and budget.",
    },
    {
      title: "Transparency",
      description:
        "Carfaxes, inspections, reports all available. No surprises!",
    },
    {
      title: "Any Car, Any Where",
      description: "Purchase a vehicle with us and have it delivered for free!",
    },
  ];

  return (
    <section className="w-full bg-background py-[80px] overflow-hidden">
      <div className="max-w-custom mx-auto px-[20px] lg:px-[0px] flex flex-col items-center">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-1 mb-[60px]">
          <h2 className="text-[30px] lg:text-[54px] font-semibold text-black tracking-tight text-center leading-tight">
            Why buy from <span className="text-primary">Autobon?</span>
          </h2>
        </div>

        {/* CONTAINER */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:border border-[#e3e3e3]  rounded-[14px] overflow-hidden lg:bg-white lg:shadow-sm">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-8 relative flex flex-col items-start border-l border-border lg:items-start text-start lg:text-left gap-4 transition-colors hover:bg-gray-50/50 
                bg-white lg:rounded-[0px] 
                border 
                
                ${
                  index !== reasons.length - 1
                    ? "lg:border-r lg:border-[#e3e3e3]"
                    : ""
                } 
                ${
                  index % 2 === 0
                    ? "md:border-r md:border-[#e3e3e3]"
                    : "md:border-r-0"
                }`}
            >
              <div className="w-full relative ">
                {/* PRIMARY ACCENT BORDER (Mobile Only)
                    - left-[-32px] moves it exactly to the card edge (offsetting card padding)
                    - h-[38px] roughly matches the title height
                */}
                <span className="absolute left-[-32px] top-0 w-[2px] h-[38px] bg-primary rounded-r-sm " />

                <h3 className="text-start text-[20px] font-semibold text-black mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-[14px] text-text text-start ">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromAutobon;
