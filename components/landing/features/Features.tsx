import Image from "next/image";

const features = [
  {
    title: "Find Your Car",
    description:
      "Shop the nations inventory with the best prices & rates. Zero Pressure!",
    image: "/icons/Find-car.png",
  },
  {
    title: "Sell or Trade",
    description:
      "Describe your car and get a guaranteed offer in minutes —fast!",
    image: "/icons/sell-car.png",
  },
];

export default function Features() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5.5 lg:py-6.75   lg:px-27.5 lg:pb-20 items-center">
        {features.map((item, index) => {
          return (
            <div key={index} className="  flex justify-center">
              <div className="w-full sm:w-1/2 lg:w-full rounded-4xl bg-white border">
                <div className="flex justify-between items-center gap-2 px-4 py-6  lg:p-8">
                  <div className="space-y-2">
                    <div className="font-poppins font-semibold text-[22.53px] lg:text-[41.65px] leading-[100%] tracking-[-0.04em]">
                      {item.title}
                    </div>
                    <div className="font-poppins font-normal text-[10px] lg:text-[16px] leading-3.5 lg:leading-[28.49px] tracking-[0em] text-[#7B7B7B]">
                      {item.description}
                    </div>
                  </div>
                  <div className="shrink-0 bg-primary rounded-full w-7 lg:w-13 h-7 lg:h-13 flex items-center justify-center cursor-pointer">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5236 5.1745L13.6996 6.99852L20.918 14.2299H5.17456V16.8172H20.918L13.6996 24.0486L15.5236 25.8726L25.8727 15.5235L15.5236 5.1745Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.title}
                    width={720}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="w-full h-auto object-contain rounded-b-4xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
