import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="">
      <div className="p-5.5 lg:py-6.75   lg:px-27.5">
        <div className="flex flex-col lg:flex-row item-center gap-4   p-4 lg:py-20 space-y-4">
          <div className="w-full lg:w-[45%] space-y-2 lg:space-y-4">
            <div className="flex items-center gap-2 bg-white rounded-full p-3 w-fit text-sm lg:text-sm">
              <Image
                src="/icons/rating-star.svg"
                alt="Rating Star"
                width={18}
                height={18}
              />
              5.0 Star Rating from Thousands of Customers
            </div>

            <div className="font-poppins font-semibold  text-[42px]  leading-13  tracking-[-0.04em]  sm:text-[56px] sm:leading-17 lg:text-6xl lg:leading-24">
              Any Car, <br />
              Any Where
            </div>
            <div className="space-y-4">
              <div className="font-poppins font-normal text-[12px] lg:text-[20px lg:leading-9 tracking-[0em] text-[#7b7b7b]">
                No Used Car lots, No pressure. Shop the nations inventory.
              </div>
              <div className="flex gap-2 items-center">
                <Link href={"/accounts/cars/trade"} className="bg-primary text-white rounded-full p-2 px-4 lg:p-4 w-fit lg:w-58 text-center text-[12px] lg:text-[22px]">
                  Get Instant Offer
                </Link>
                <div className="bg-secondary text-white rounded-full p-2 px-4 lg:p-4 w-fit lg:w-58 text-center text-[12px] lg:text-[22px]">
                  Browse Cars
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] flex items-center">
            <Image
              src="/icons/heroImage.png"
              alt="Hero Image"
              width={971}
              height={344}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
