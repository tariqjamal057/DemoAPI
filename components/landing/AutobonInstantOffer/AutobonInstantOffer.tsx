import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

function AutobonInstantOffer() {
  return (
    <section className="p-5.5 lg:py-6.75   lg:px-27.5">
      <div className="max-w-[1508px] mx-auto">
      <div className="text-center  mx-auto mb-16 space-y-4">
        <div className="font-['Poppins'] font-semibold text-[30px] leading-[35.22px] tracking-[-0.04em] text-center capitalize lg:text-[58px] lg:leading-19.5">
          Selling or trading?
        </div>
        <div className="font-['Poppins'] font-normal text-[9px] leading-[15.35px] tracking-[0] text-center lg:text-[19px] lg:leading-[34px]">
          Tell us about your ride and get a firm offer in minutes
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src={"/icons/landingpage/truck-offer.png"}
          alt={"Icon"}
          width={1500}
          height={685}
          priority
          className="w-full object-cover rounded-4xl"
        />
        <div className="absolute inset-0 rounded-4xl shadow-[0px_4px_44px_0px_rgba(0,0,0,0.14)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_75.68%,rgba(0,0,0,0.9)_100%)]" />

        <div className=" absolute bg-white rounded-full p-4 bottom-14 w-[80%] left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-between gap-2">
            <div className="bg-secondary text-white rounded-full p-4 w-56.25 text-center font-semibold">
              License Plate
            </div>
            <div className="bg-[#EBEBEB] text-secondary rounded-full p-4 w-56.25 text-center font-semibold">
              VIN
            </div>
            <div className="w-75">
              <Input
                placeholder="License Plate"
                className=" p-4 rounded-full h-full"
              />
            </div>
            <div className="w-75">
              <Input
                placeholder="Postal Code"
                className=" p-4 rounded-full h-full"
              />
            </div>
            <div className="bg-primary text-white rounded-full p-4 w-56.25 text-center font-semibold">
              Get Instant Offer
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-4xl  block lg:hidden ">
        <div className="relative">
          <Image
            src={"/icons/landingpage/truck-offer.png"}
            alt={"Icon"}
            width={1500}
            height={685}
            priority
            className="w-full object-cover rounded-4xl"
          />
          <div className="absolute inset-0 rounded-4xl shadow-[0px_4px_44px_0px_rgba(0,0,0,0.14)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_75.68%,rgba(0,0,0,0.9)_100%)]" />
        </div>
        <div className="space-y-3 p-4 md:p-8">
          <div className="flex items-center gap-2">
            <div className="font-['Poppins'] font-semibold text-[13.73px] leading-[100%] tracking-[0] text-center align-middle bg-secondary text-white rounded-full p-4 w-1/2">
              License Plate
            </div>
            <div
              className="bg-[#EBEBEB] text-secondary rounded-full p-4 w-1/2  font-['Poppins'] font-semibold text-[13.73px] leading-[100%] tracking-[0] text-center align-middle
"
            >
              VIN
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1/2">
              <Input
                placeholder="License Plate"
                className=" p-4 rounded-full h-full"
              />
            </div>
            <div className="w-1/2">
              <Input
                placeholder="Postal Code"
                className=" p-4 rounded-full h-full"
              />
            </div>
          </div>
          <div className="bg-primary text-white rounded-full p-3 w-full text-center font-semibold">
            Get Instant Offer
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AutobonInstantOffer;
