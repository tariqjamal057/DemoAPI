import React from "react";
import Faq from "../_components/Faq";
import Reviews from "../_components/pages/Home/Reviews";
import DealerNetwork from "../_components/pages/SellOrTrade/DealerNetwork";
import ExploreAdvantages from "../_components/pages/SellOrTrade/ExploreAdvantages";
import Hero from "../_components/pages/SellOrTrade/Hero";
import HowitWorks from "../_components/pages/SellOrTrade/HowitWorks";
import HowYouGetPaid from "../_components/pages/SellOrTrade/HowYouGetPaid";
import LoanOrLease from "../_components/pages/SellOrTrade/LoanOrLease";
import TradeIn from "../_components/pages/SellOrTrade/TradeIn";
import WhySellToAutobon from "../_components/pages/SellOrTrade/WhySellToAutobon";

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
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionSeparator />

      <main className="w-full flex flex-col">
        <SectionWrapper>
          <HowitWorks />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <HowYouGetPaid />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <DealerNetwork />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <WhySellToAutobon />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <LoanOrLease />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <ExploreAdvantages />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <TradeIn />
        </SectionWrapper>
        <SectionSeparator />
        <SectionWrapper>
          <Faq />
        </SectionWrapper>
        <SectionSeparator />
        <Reviews />
      </main>
    </div>
  );
};

export default Page;
