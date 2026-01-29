"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, ChevronLeft, ChevronRight } from "lucide-react";
import car1 from "../../../../../assets/cars-1.png";
import car2 from "../../../../../assets/cars-2.png";
import car3 from "../../../../../assets/cars-3.png";
import Link from "next/link";

const Cars = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const carData = [
    {
      name: "Tesla Model 3",
      desc: "Industry leading electric range with minimalist interior and autopilot features.",
      km: "8,500 km",
      fuel: "Electric",
      transmission: "Automatic",
      img: car1.src,
    },
    {
      name: "BMW X SUV",
      desc: "Excellent fuel efficiency & low maintenance. Sporty design with advanced safety features.",
      km: "14,200 km",
      fuel: "Petrol",
      transmission: "CVT",
      img: car2.src,
    },
    {
      name: "Audi A4 Sedan",
      desc: "Premium luxury combined with powerful performance and high-end technology.",
      km: "12,100 km",
      fuel: "Diesel",
      transmission: "Automatic",
      img: car3.src,
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % carData.length);
  }, [carData.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + carData.length) % carData.length);
  }, [carData.length]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const stopAutoPlay = () => setIsAutoPlaying(false);

  const getDisplayCars = () => {
    const prev = (activeIndex - 1 + carData.length) % carData.length;
    const next = (activeIndex + 1) % carData.length;
    return [
      { ...carData[prev], originalIndex: prev, side: "left" },
      { ...carData[activeIndex], originalIndex: activeIndex, side: "center" },
      { ...carData[next], originalIndex: next, side: "right" },
    ];
  };

  return (
    <section className="w-full  py-[80px] overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* HEADING SECTION */}
        <div className="px-[20px] lg:px-[60px] flex flex-col items-center gap-1 mb-[60px]">
          <h2 className="text-[30px] lg:text-[54px] font-semibold text-black tracking-tight text-center">
            Canada’s Favourite Cars
          </h2>
          <p className="text-[#505050] text-center text-[17px] max-w-[550px] leading-[34px]">
            Explore a wide selection of vehicles—from fuel-efficient rides and
            everyday drivers to premium models.
          </p>
          <Link
            href={"/shop"}
            className="mt-4 flex justify-center items-center w-[200px] h-[50px] font-[500] text-[18px] rounded-full bg-[#1A6ADB] text-white cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
          >
            View All Cars
          </Link>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative w-screen left-1/2  -translate-x-1/2 h-[250px] lg:h-[400px]">
          <div className="flex items-center  justify-center w-full h-full gap-8 lg:gap-20 overflow-visible">
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              {getDisplayCars().map((car) => {
                const isActive = car.side === "center";

                return (
                  <motion.div
                    key={`${car.originalIndex}-${car.side}`}
                    layout
                    custom={direction}
                    initial={{ x: direction * 100, opacity: 0 }}
                    animate={{ x: 0, opacity: isActive ? 1 : 0.4 }}
                    exit={{ x: -direction * 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => {
                      stopAutoPlay();
                      setActiveIndex(car.originalIndex);
                    }}
                    className={`relative bg-r  cursor-pointer flex shrink-0 items-center justify-center transition-all duration-500
                      ${
                        isActive
                          ? "w-[85%] lg:w-[45%] scale-110 z-20"
                          : "w-[25%] lg:w-[25%] scale-90 z-0"
                      }
                    `}
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle, black 60%, transparent 95%)",
                      maskImage:
                        "radial-gradient(circle, black 60%, transparent 95%)",
                    }}
                  >
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 lg:px-20 pointer-events-none z-30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                stopAutoPlay();
                prevSlide();
              }}
              className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-full bg-white/90 backdrop-blur shadow-xl flex justify-center items-center pointer-events-auto hover:bg-white transition-all"
            >
              <ChevronLeft size={25} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                stopAutoPlay();
                nextSlide();
              }}
              className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-full bg-white/90 backdrop-blur shadow-xl flex justify-center items-center pointer-events-auto hover:bg-white transition-all"
            >
              <ChevronRight size={25} />
            </button>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="mt-6 w-[280px] lg:w-[450px] max-w-[450px] bg-white rounded-[24px] p-4 lg:p-10 shadow-lg border border-gray-50 mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center text-center">
              <h3 className="text-[24px] lg:text-[32px] font-semibold  text-black tracking-tight">
                {carData[activeIndex].name}
              </h3>
              <p className="text-[#606060]  text-[12px] lg:text-[15px] leading-relaxed">
                {carData[activeIndex].desc}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 lg:gap-10 w-full border-none lg:border-y  border-gray-100 py-0 lg:py-0 ">
              {[
                { label: carData[activeIndex].km, icon: <Gauge size={24} /> },
                { label: carData[activeIndex].fuel, icon: <Gauge size={24} /> },
                {
                  label: carData[activeIndex].transmission,
                  icon: <Gauge size={24} />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-black"
                >
                  <div className="text-black">{item.icon}</div>
                  <span className="text-[10px] lg:text-[13px] font-normal lg:font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="lg:w-[200px] w-[160px]  h-[45px] sm:h-[55px] font-senibold text-[18px] rounded-full bg-[#1A6ADB] text-white hover:bg-black hover:scale-[1.02] transition-all shadow-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
