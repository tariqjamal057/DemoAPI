import Image from "next/image";

export default function Process() {
  const list = [
    {
      title: "Choose Your Car",
      description:
        "Browse nationwide inventory and enjoy top-quality vehicles with industry-leading interest rates.",
      icon: "/icons/landingpage/icon1.png",
      image: "/icons/landingpage/car.png",
      path: "",
    },
    {
      title: "Instant Approvals",
      description:
        "Get financing with some of the best interest rates in the nation for the car you want.",
      icon: "/icons/landingpage/icon2.png",
      image: "/icons/landingpage/numbers.png",
      path: "",
    },
    {
      title: "Drive or Delivered",
      description:
        "Pick up your new car or have it delivered—drive away with total confidence.",
      icon: "/icons/landingpage/icon3.png",
      image: "/icons/landingpage/truck.png",
      path: "",
    },
  ];

  return (
    <section>
      <div className="p-5.5 lg:py-6.75   lg:px-27.5 lg:pb-20">
        <div className="font-['Poppins'] font-semibold text-[30px] leading-10 tracking-[-0.04em] text-center capitalize lg:text-[58px] lg:leading-19.5">
          Simple, Fast And Easy.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between px-8 lg:px-15 py-8 gap-4 bg-white rounded-3xl border-[#dfdfdf]"
            >
             <div className="flex flex-col items-center justify-center gap-4">
                 <div className="font-['Poppins'] font-medium text-[29px] lg:text-[40px] leading-[100%] tracking-[-0.04em] text-center">
                {item.title}
              </div>
              <div className="font-['Poppins'] font-normal text-[10px] lg:text-[14px] leading-4.25 lg:leading-5.75 tracking-[0] text-center align-middle text-[#848484]">
                {item.description}
              </div>
              <div className="text-white bg-primary px-4 py-2 cursor-pointer rounded-full text-[10px] lg:text-[14px]">
                View Details
              </div>
             </div>
              <div className="mt-16">
                <div className="relative">
                  {/* ICON IMAGE (BACKGROUND) */}
                  <div className="absolute -top-17.5   z-0">
                    <Image
                      src={item.icon || "/placeholder.jpg"}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-cover "
                    />
                  </div>

                  {/* MAIN IMAGE (FRONT) */}
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.title}
                    width={720}
                    height={300}
                    className="w-full object-cover rounded-b-4xl relative z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
