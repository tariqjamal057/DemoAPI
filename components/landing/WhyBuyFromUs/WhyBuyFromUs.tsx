import classNames from "classnames";
import React from "react";

function WhyBuyFromUs() {
  const features = [
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
    <section>
      <div className="p-5.5 lg:py-6.75   lg:px-27.5 lg:pb-20 space-y-8">
        <div className="font-['Poppins'] font-semibold text-[30px] leading-10 tracking-[-0.04em] text-center capitalize lg:text-[58px] lg:leading-19.5">
          Why buy from <span className="text-primary">Autobon?</span>
        </div>
        <div className="hidden lg:grid lg:grid-cols-4 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          {features.map((item, index) => (
            <div
              key={index}
              className={classNames(` py-8 text-left space-y-4 `, {
                "border-l": index < features.length,
              })}
            >
              <div className="font-['Poppins'] font-semibold text-[15.01px] leading-[21.77px] tracking-[0] align-middle lg:text-[29px] lg:leading-[42.04px] text-[#272727] border-s-2 border-primary px-8">
                {item.title}
              </div>
              <div className="font-['Poppins'] font-normal text-[9.32px] leading-[15.53px] tracking-[0] align-middle lg:text-[18px] lg:leading-7.5 text-[#767676] px-8">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden space-y-3">
          {features.map((item, index) => {
            return (
              <div
                key={index}
                className=" bg-white border-b-[0.73px] border-l-[0.73px] py-4"
              >
                <div className="font-['Poppins'] font-semibold text-[15.01px] leading-[21.77px] tracking-[0] align-middle md:text-[20px] lg:text-[29px] md:leading-7.5 lg:leading-[42.04px] text-[#272727] border-s-2 border-primary px-6">
                  {item.title}
                </div>
                <div className="font-['Poppins'] font-normal text-[9.32px] leading-[15.53px] tracking-[0] align-middle lg:text-[18px] lg:leading-7.5 text-[#767676] px-6">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyBuyFromUs;
