"use client";

import React, { useState } from "react";
import home1 from "../../../../../assets/out.png";
import arrowImage from "../../../../../assets/arrow-f.png";
import textImage from "../../../../../assets/text-f.png";
import Image from "next/image";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <section className="w-full bg-background py-8 lg:py-16 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-5 gap-4 lg:gap-12">
        {/* LEFT SIDE: Text + Image */}
        <div className="flex flex-col w-full lg:w-[55%] gap-6 items-center lg:items-start text-center lg:text-left">
          {/* HEADING CONTAINER - Now holds the pointing arrows */}
          <div className="flex flex-col gap-3 relative w-full">
            {/* DECORATIVE IMAGES: Points to Heading */}
            <div className="absolute -top-20 right-20 sm:-top-1 sm:right-15 flex flex-col items-center pointer-events-none z-10 scale-[0.6] sm:scale-90 lg:scale-100 origin-right">
              <img
                src={textImage.src}
                alt="Decorative Text"
                className="w-55 sm:w-32 h-auto mb-1 relative left-[90px] sm:left-[110px] top-[50px] sm:top-[35px]"
              />
              <img
                src={arrowImage.src}
                alt="Arrow"
                className="w-24 sm:w-[150px] h-auto rotate-[20deg] lg:rotate-0"
              />
            </div>

            <h1 className="text-[40px] sm:text-[55px] lg:text-[65px] text-start font-semibold text-black leading-tight">
              Any Car,
              <br /> Any Where
            </h1>
            <p className="text-[#7B7B7B] text-start w-full text-[16px] sm:text-[18px] max-w-[500px]">
              Get an instant price for your car!
            </p>
          </div>

          {/* Car Image Container */}
          <div className="w-full relative lg:-left-6 flex justify-center lg:justify-start">
            <div className="relative w-[95%] sm:w-full">
              <Image
                src={home1}
                alt="Hero Car"
                priority
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form Card */}
        <div className="w-full lg:w-[460px] bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden p-6 sm:p-8 z-20 mt-[-10px] lg:mt-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <p className="text-[#4A4A4A] text-[13px] font-medium sm:max-w-[140px]">
              Enter vehicle details or VIN to get a real offer.
            </p>
            <div className="flex bg-gray-100 border border-gray-200 rounded-full w-full sm:w-max p-1">
              <button
                onClick={() => setActiveTab("details")}
                className={`flex-1 text-[12px] lg:text-[14px] px-4 py-2 rounded-full font-bold transition-all ${
                  activeTab === "details"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab("vin")}
                className={`flex-1 text-[12px] lg:text-[14px] px-4 py-2 rounded-full font-bold transition-all ${
                  activeTab === "vin"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                VIN
              </button>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            {activeTab === "details" ? (
              <>
                <input
                  type="text"
                  placeholder="Year"
                  className="w-full text-[14px] h-[50px] px-6 rounded-full bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Make"
                  className="w-full text-[14px] h-[50px] px-6 rounded-full bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Model"
                  className="w-full text-[14px] h-[50px] px-6 rounded-full bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
                />
              </>
            ) : (
              <input
                type="text"
                placeholder="Enter 17-digit VIN"
                className="w-full text-[14px] h-[50px] px-6 rounded-full bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
              />
            )}

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full text-[14px] h-[50px] px-6 rounded-full bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Province"
                className="w-full text-[14px] h-[50px] px-6 rounded-full bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
              />
            </div>

            <button className="w-full h-[55px] text-[16px] font-bold bg-primary text-white rounded-full hover:bg-black transition-all duration-300 shadow-lg mt-2">
              Get My Offer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
