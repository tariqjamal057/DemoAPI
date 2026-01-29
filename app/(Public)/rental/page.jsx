"use client";
import React from "react";
import Faq from "../_components/Faq";
import Benefits from "../_components/pages/Rental/Benefits";
import BoS2 from "../_components/pages/Rental/BoS2";
import BuyingOrSelling from "../_components/pages/Rental/BuyingOrSelling";
import DiscoverOptions from "../_components/pages/Rental/DiscoverOptions";
import FeaturedCars from "../_components/pages/Rental/FeaturedCars";
import Hero from "../_components/pages/Rental/Hero";
import ThreeCards from "../_components/pages/Rental/ThreeCards";

const SectionSeparator = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-[1200px] h-[1px] bg-[#E4E4E4]" />
  </div>
);

const SectionWrapper = ({ children }) => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-[1200px]">{children}</div>
  </div>
);

const Page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      <Hero />
      <SectionWrapper>
        <ThreeCards />
      </SectionWrapper>
      <SectionSeparator />
      <DiscoverOptions />
      <SectionSeparator />
      <SectionWrapper>
        <BuyingOrSelling />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <BoS2 />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <FeaturedCars />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <Faq />
      </SectionWrapper>
    </div>
  );
};

export default Page;
