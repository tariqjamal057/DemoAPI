import React from "react";
import Cars from "./_components/pages/Home/Cars";
import Features from "./_components/pages/Home/Features";
import Hero from "./_components/pages/Home/Hero";
import Reviews from "./_components/pages/Home/Reviews";
import SellingOrTrading from "./_components/pages/Home/SellingOrTrading";
import SellYourCar from "./_components/pages/Home/SellYourCar";
import TraditionalDealerships from "./_components/pages/Home/TraditionalDealerships";
import TwoCards from "./_components/pages/Home/TwoCards";
import WhyBuyFromAutobon from "./_components/pages/Home/WhyBuyAutobon";

const SectionSeparator = () => (
  <div className="w-full flex justify-center">
    <div className="w-full lg:mx-0 mx-6 max-w-[1200px] h-[1px] bg-[#E4E4E4]" />
  </div>
);

const SectionWrapper = ({ children }) => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-[1200px]">{children}</div>
  </div>
);

const Page = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />

      <SectionSeparator />
      <SectionWrapper>
        <TwoCards />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <Features />
      </SectionWrapper>
      <SectionSeparator />
      <Cars />
      <SectionSeparator />
      <SectionWrapper>
        <WhyBuyFromAutobon />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <TraditionalDealerships />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <SellingOrTrading />
      </SectionWrapper>
      <SectionSeparator />
      <SectionWrapper>
        <SellYourCar />
      </SectionWrapper>
      <SectionSeparator />
      {/* Removed the fixed left padding that was breaking alignment */}
      <>
        <Reviews />
      </>
    </div>
  );
};

export default Page;
