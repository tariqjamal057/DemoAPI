"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const leftItems = [
  "Slow Appraisals",
  "Low ball offers",
  "Slow Appraisals",
  "Endless Negotiation",
];

const centerItems = [
  "Immediate offers",
  "Best prices",
  "Instant payments",
  "Same day purchase",
];

const rightItems = [
  "Low ball offers",
  "Scams & fraud risks",
  "Safety concerns",
  "Endless haggling",
];

export default function WhySellWithAutobon() {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  // Initial scroll to center slide (Autobon way)
  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width, behavior: "instant" });
    }
  }, []);

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };
  return (
    <section className="lg:pb-20 ">
      {/* Heading */}
      <div className="text-center  mx-auto mb-6 md:mb-16 space-y-4 p-5.5 lg:py-6.75   lg:px-27.5 ">
        <div className="font-['Poppins'] font-semibold text-[30px] leading-[35.22px] tracking-[-0.04em] text-center capitalize lg:text-[58px] lg:leading-19.5">
          Why sell your car online to{" "}
          <span className="text-primary">Autobon ?</span>
        </div>
      </div>

      {/* Desktop Cards (Hidden on mobile) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 items-start mx-auto lg:py-6.75   lg:px-27.5 ">
        {/* Left Card */}
        <ComparisonCard title="Dealerships" items={leftItems} />

        {/* Center Highlighted Card */}
        <div className="bg-white rounded-3xl shadow-[2.8px_2.8px_44px_0px_rgba(26,106,219,0.44)] overflow-hidden">
          <div className="px-6 py-6 border-b flex items-center justify-between">
            <div className="font-['Poppins'] font-bold text-[26.24px] leading-[27.75px] tracking-[0] align-middle lg:text-[31.79px] lg:leading-[33.61px]">
              The <span className="text-primary">Autobon</span> way
            </div>
            <span className="text-primary text-2xl">
              <Image
                src={"/icons/landingpage/LEAF_PNGS-ezgif.com-video-to-webp-converter.webp"}
                alt={"Icon"}
                width={55}
                height={55}
                className="object-cover "
              />
            </span>
          </div>

          <ul>
            {centerItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 px-6 py-6 border-b last:border-b-0"
              >
                <span className="text-primary text-xl">✓</span>
                <span className="font-['Poppins'] font-medium text-[17.3px] leading-[23.06px] tracking-[0] align-middle lg:text-[21.01px] lg:leading-[28.01px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <ComparisonCard title="Private sellers" items={rightItems} />
      </div>

      {/* Mobile Custom Carousel (Visible below md) */}
      <div className="block md:hidden pb-10">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Slide 1: Dealerships */}
          <div className="min-w-full snap-center  py-8 flex justify-center">
            <ComparisonCard title="Dealerships" items={leftItems} />
          </div>
          {/* Slide 2: Autobon (Center) */}
          <div className="min-w-full snap-center  py-8 flex justify-center">
            <div className="bg-white rounded-3xl shadow-[2.8px_2.8px_44px_0px_rgba(26,106,219,0.44)] overflow-hidden w-[85%]">
              <div className="px-6 py-6 border-b flex items-center justify-between">
                <div className="font-['Poppins'] font-bold text-[22px] leading-[27.75px] tracking-[0] align-middle">
                  The <span className="text-primary">Autobon</span> way
                </div>
                <span className="text-primary text-2xl">
                  <Image
                    src={"/icons/landingpage/LEAF_PNGS-ezgif.com-video-to-webp-converter.webp"}
                    alt={"Icon"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </span>
              </div>

              <ul>
                {centerItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 px-6 py-6 border-b last:border-b-0"
                  >
                    <span className="text-primary text-xl">✓</span>
                    <span className="font-['Poppins'] font-medium text-[16px] leading-[23.06px] tracking-[0] lg:text-[21.01px] lg:leading-[28.01px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slide 3: Private Sellers */}
          <div className="min-w-full snap-center   py-8 flex justify-center">
            <ComparisonCard title="Private sellers" items={rightItems} />
          </div>
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Reusable Card (UNCHANGED) */
function ComparisonCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden w-[90%] mx-auto">
      <div className="px-6 py-6 border-b">
        <h3 className="font-['Poppins'] font-medium text-[20px] text-gray-500">
          {title}
        </h3>
      </div>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className="px-6 py-6 border-b last:border-b-0 text-gray-600 font-['Poppins'] text-[14px] lg:text-[16px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
