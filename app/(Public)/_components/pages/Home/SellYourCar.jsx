"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import leaf from "../../../../../assets/leaf.webp";

const SellYourCar = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const comparisonData = [
    {
      dealerships: "Slow Appraisals",
      autobon: "Immediate offers",
      private: "Low ball offers",
    },
    {
      dealerships: "Low ball offers",
      autobon: "Best prices",
      private: "Scams & fraud risks",
    },
    {
      dealerships: "Slow Appraisals",
      autobon: "Instant payments",
      private: "Safety concerns",
    },
    {
      dealerships: "Endless Negotiation",
      autobon: "Same day purchase",
      private: "Endless haggling",
    },
  ];

  // Robust wrap-around logic for physical sliding
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped Left
      setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    } else if (info.offset.x > swipeThreshold) {
      // Swiped Right
      setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }
  };

  const renderCardItems = (type) => (
    <div className="flex-1 flex flex-col">
      {comparisonData.map((item, i) => (
        <div
          key={i}
          className={`flex-1 p-6 flex items-center justify-start gap-3 text-black font-semibold text-[16px] border-b border-gray-100 last:border-0 ${
            i % 2 === 0 ? "bg-[#fafafa]" : "bg-white"
          }`}
        >
          {type === "autobon" && (
            <Check size={20} className="text-primary shrink-0" />
          )}
          <span
            className={`text-start ${
              type === "autobon" ? "font-semibold" : "font-medium text-gray-700"
            }`}
          >
            {item[type]}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-background py-[80px] overflow-hidden">
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

      <div className="max-w-custom mx-auto px-[20px] lg:px-[0px] flex flex-col items-center">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 mb-[40px] md:mb-[80px] text-center">
          <h2 className="text-[30px] lg:text-[54px] font-semibold text-black tracking-tight leading-tight max-w-[80vw]">
            Why sell your car online to{" "}
            <span className="text-primary">Autobon</span>?
          </h2>
          <p className="text-gray-500 text-[16px] lg:text-[18px] max-w-custom">
            Experience a faster, safer, and more profitable way to sell your
            vehicle without the usual headaches.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid w-full grid-cols-3 gap-[30px] items-stretch">
          <div className="relative min-h-[420px] z-10 flex flex-col bg-white border border-[#DDDDDD] rounded-[10px] overflow-hidden">
            <div className="p-8 pb-4 border-b border-[#DDDDDD] bg-white">
              <h3 className="text-[22px] font-semibold text-[#272727]">
                Dealerships
              </h3>
            </div>
            {renderCardItems("dealerships")}
          </div>

          <div className="relative min-h-[420px] overflow-hidden z-20 flex flex-col bg-white rounded-[10px] scale-105 border border-[#DDDDDD] shadow-lg shadow-primary/90">
            <div className="p-8 pb-4 flex justify-between items-center border-b border-[#DDDDDD] bg-white rounded-t-[10px]">
              <h3 className="text-[26px] font-bold text-[#272727]">
                The <span className="text-primary">AUTOBON</span> way
              </h3>
              <img
                src={leaf.src}
                alt="Leaf"
                className="animate-leaf w-12 h-12"
              />
            </div>
            {renderCardItems("autobon")}
          </div>

          <div className="relative min-h-[420px] z-10 flex flex-col bg-white border border-[#DDDDDD] rounded-[10px] overflow-hidden">
            <div className="p-8 pb-4 border-b border-[#DDDDDD] bg-white">
              <h3 className="text-[22px] font-semibold text-[#272727]">
                Private sellers
              </h3>
            </div>
            {renderCardItems("private")}
          </div>
        </div>

        {/* MOBILE CAROUSEL - Physical Sliding Implementation */}
        <div className="md:hidden w-full flex flex-col items-center">
          <div className="relative w-full overflow-hidden min-h-[500px] touch-pan-y">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex w-full cursor-grab active:cursor-grabbing"
            >
              {/* Card 0: Dealerships */}
              <div className="w-full shrink-0 px-2">
                <div className="flex flex-col bg-white border border-[#DDDDDD] rounded-[10px] overflow-hidden h-full">
                  <div className="p-6 border-b border-[#DDDDDD] text-[20px] font-semibold">
                    Dealerships
                  </div>
                  {renderCardItems("dealerships")}
                </div>
              </div>

              {/* Card 1: Autobon */}
              <div className="w-full shrink-0 px-2">
                <div className="flex flex-col bg-white border border-border shadow-2xl shadow-primary/40 overflow-hidden rounded-[10px] h-full">
                  <div className="p-6 flex justify-between items-center border-b border-[#DDDDDD]">
                    <h3 className="text-[22px] font-bold">
                      The <span className="text-primary">AUTOBON</span> way
                    </h3>
                    <img
                      src={leaf.src}
                      alt="Leaf"
                      className="animate-leaf w-10 h-10"
                    />
                  </div>
                  {renderCardItems("autobon")}
                </div>
              </div>

              {/* Card 2: Private */}
              <div className="w-full shrink-0 px-2">
                <div className="flex flex-col bg-white border border-[#DDDDDD] rounded-[10px] overflow-hidden h-full">
                  <div className="p-6 border-b border-[#DDDDDD] text-[20px] font-semibold">
                    Private sellers
                  </div>
                  {renderCardItems("private")}
                </div>
              </div>
            </motion.div>
          </div>

          {/* INDICATORS */}
          <div className="flex gap-3 mt-6">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-[45px] h-[8px] rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-[60px]" : "bg-[#DDDDDD]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellYourCar;
