"use client";

import React from "react";
import { Check, X } from "lucide-react";
import leaf from "../../../../../assets/leaf.webp";

const WhySellToAutobon = () => {
  const comparisonData = [
    {
      autobon: "10 days to try it out",
      autobonSub: "Take your time to know the car",
      oldway: "No return option",
      oldwaySub: "Sale is final",
    },
    {
      autobon: "Only 15 mins on average",
      autobonSub: "Quick and efficient process",
      oldway: "Haggling forever",
      oldwaySub: "Hours spent at dealerships",
    },
    {
      autobon: "You pick your route",
      autobonSub: "City, highway, night, rain, etc.",
      oldway: "Seller picks route",
      oldwaySub: "Limited speeds/conditions",
    },
    {
      autobon: "Completely unaccompanied",
      autobonSub: "No pressure, no rush",
      oldway: "Accompanied by salesperson",
      oldwaySub: "Constant pressure to decide",
    },
    {
      autobon: "Full money-back guarantee",
      autobonSub: "For any reason",
      oldway: "Limited feel for quirks",
      oldwaySub: "Hidden issues stay yours",
    },
  ];

  const renderCardItems = (type) => (
    <div className="flex-1 flex flex-col">
      {comparisonData.map((item, i) => (
        <div
          key={i}
          className={`flex-1 p-5 lg:p-6 flex items-start justify-start gap-4 border-b border-gray-100 last:border-0 ${
            i % 2 === 0 ? "bg-[#fafafa]" : "bg-white"
          }`}
        >
          <div className="flex flex-col text-left">
            <span
              className={`text-[14px] lg:text-[16px] leading-tight ${
                type === "autobon"
                  ? "font-semibold text-black"
                  : "font-semibold text-[#272727]"
              }`}
            >
              {type === "autobon" ? item.autobon : item.oldway}
            </span>
            <span className="text-[12px] lg:text-[14px] text-gray-500 font-medium mt-1">
              {type === "autobon" ? item.autobonSub : item.oldwaySub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-background py-[60px] lg:py-[100px] overflow-hidden">
      <style jsx>{`
        @keyframes leaf-rotate {
          0% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(-10deg);
          }
        }
        .animate-leaf {
          animation: leaf-rotate 3s ease-in-out infinite;
        }
      `}</style>

      <div className=" mx-auto px-[20px] lg:px-[0px] flex flex-col items-center">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 mb-[50px] lg:mb-[80px] text-center">
          <h2 className="text-[32px] lg:text-[54px] font-semibold text-black tracking-tight leading-tight max-w-[900px]">
            Why sell your car online to{" "}
            <span className="text-primary">Autobon?</span>
          </h2>
        </div>

        {/* MAIN CONTAINER - Mobile: flex-col | Desktop: flex-row */}
        <div className="flex flex-col md:flex-row lg:px-20 w-full items-center justify-center gap-0 md:gap-8 lg:gap-16">
          {/* THE AUTOBON WAY - PRIMARY */}
          <div className="relative w-full md:flex-1 overflow-hidden order-1 md:order-1 flex flex-col bg-white rounded-[10px] md:scale-105 border border-[#DDDDDD] shadow-xl shadow-primary/70 z-20">
            <div className="p-8 pb-6 flex justify-between items-center border-b border-[#DDDDDD] bg-white rounded-t-[20px]">
              <div>
                <h3 className="text-[23px] lg:text-[32px] font-bold text-[#272727]">
                  The <span className="text-primary">Autobon</span> way
                </h3>
              </div>
              <img
                src={leaf.src}
                alt="Leaf"
                className="animate-leaf w-10 h-10 lg:w-14 lg:h-14"
              />
            </div>
            {renderCardItems("autobon")}
          </div>

          {/* VS INDICATOR - Stays in middle on desktop, sits between on mobile */}
          <div className="order-2 flex items-center justify-center mt-5">
            <div className="text-[#606060] font-semibold w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center  italic text-xl lg:text-2xl z-30">
              -VS-
            </div>
          </div>

          {/* THE OLD WAY - SECONDARY */}
          <div className="w-full scale-90 md:flex-1 order-3 md:order-3 flex flex-col bg-white border border-[#DDDDDD] rounded-[10px] overflow-hidden opacity-90 md:opacity-80 md:scale-95 transition-all hover:opacity-100">
            <div className="p-8 pb-6 bg-white border-b border-[#DDDDDD] bg-[#F9F9F9]">
              <h3 className="text-[24px] font-bold text-[#272727]">
                The old way
              </h3>
            </div>
            {renderCardItems("oldway")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySellToAutobon;
