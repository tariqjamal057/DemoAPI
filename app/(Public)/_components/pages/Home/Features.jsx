"use client";
import React, { useState, useEffect } from "react";
import s1 from "../../../../../assets/s1.png";
import s2 from "../../../../../assets/s2.png";
import h2 from "../../../../../assets/h2.png";

const Features = () => {
  const [index, setIndex] = useState(0);
  // Joint sequence: 10 to 6, clear (null), 5 to 0
  const sequence = [10, 9, 8, 7, 6, null, 5, 4, 3, 2, 1, 0];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sequence.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [sequence.length]);

  const featureCards = [
    {
      title: "Choose Your Car",
      desc: "Browse nationwide inventory and enjoy top-quality vehicles with industry-leading interest rates.",
      img: s1,
      help: h2,
    },
    {
      title: "Instant Approvals",
      desc: "Get financing with some of the best interest rates in the nation for the car you want.",
      isAnimated: true,
      help: h2,
    },
    {
      title: "Drive or Delivered",
      desc: "Pick up your new car or have it delivered—drive away with total confidence.",
      img: s2,
      help: h2,
    },
  ];

  return (
    <section className="w-full bg-background py-[60px] px-[20px] lg:px-[0px]">
      <div className="max-w-custom mx-auto flex flex-col items-center gap-[40px] lg:gap-[60px]">
        <div className="text-center">
          <h2 className="text-[32px] lg:text-[45px] font-semibold text-black tracking-tight">
            Simple, Fast And Easy.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] lg:gap-[28px]">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white w-full rounded-[6px] border border-[#DDDDDD] shadow-lg flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="w-full p-[25px] lg:p-[35px] flex flex-col gap-[15px] lg:gap-[20px] items-center text-center">
                <h3 className="font-semibold text-[26px] lg:text-[32px] text-black">
                  {card.title}
                </h3>
                <p className="font-[400] text-[#535353] text-[14px] lg:text-[15px] max-w-[320px]">
                  {card.desc}
                </p>
                <button className="px-6 py-2 font-[500] text-[14px] lg:text-[16px] rounded-full bg-primary text-white hover:bg-black transition-all duration-300 mb-[10px]">
                  View Details
                </button>
              </div>

              <div className="mt-auto relative w-full pt-10 px-4">
                {/* HELP ICON */}
                <div className="absolute top-0 lg:-top-10 left-6 lg:left-10 z-20 transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={card.help.src}
                    alt="help"
                    className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px] object-contain"
                  />
                </div>

                {/* ANIMATION AREA */}
                <div className="relative z-10 w-full flex justify-center items-center overflow-hidden h-[180px] lg:h-[220px]">
                  {card.isAnimated ? (
                    <div className="w-full h-full relative overflow-hidden">
                      {/* THE STRIP: Width is calculated by sequence length * 100% */}
                      <div
                        className="flex h-full transition-transform duration-700 ease-in-out"
                        style={{
                          width: `${sequence.length * 100}%`,
                          transform: `translateX(-${
                            (index * 100) / sequence.length
                          }%)`,
                        }}
                      >
                        {sequence.map((num, i) => (
                          <div
                            key={i}
                            style={{ width: `${100 / sequence.length}%` }}
                            className="h-full flex items-center justify-center"
                          >
                            <span
                              className="text-[100px] lg:text-[140px] font-black select-none"
                              style={{
                                color: "transparent",
                                WebkitTextStroke: "2px black", // Black Outline as requested
                                visibility: num === null ? "hidden" : "visible",
                              }}
                            >
                              {num}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={card.img.src}
                      alt={card.title}
                      className="w-full h-auto max-h-[160px] lg:max-h-[200px] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
