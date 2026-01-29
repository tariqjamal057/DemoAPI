/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SiSpeedtest } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

const carData = [
  {
    id: 1,
    title: "BMW X SUV",
    description:
      "Excellent fuel efficiency & low maintenance Sporty design with advanced safety features.",
    img: {
      src: "/icons/landingpage/car1.jpg",
      alt: "",
    },
    spec: {
      mileageKm: 14200,
      fuelType: "Petrol",
      transmission: "CVT",
    },
  },
  {
    id: 2,
    title: "Audi A4 Sedan",
    description:
      "Premium comfort with smooth handling, advanced infotainment, and refined performance.",
    img: {
      src: "/car1.png",
      alt: "",
    },
    spec: {
      mileageKm: 18500,
      fuelType: "Petrol",
      transmission: "Automatic",
    },
  },
  {
    id: 3,
    title: "Mercedes GLC SUV",
    description:
      "Luxury SUV offering superior ride comfort, safety technology, and bold styling.",
    img: {
      src: "/icons/landingpage/car3.jpg",
      alt: "",
    },
    spec: {
      mileageKm: 16200,
      fuelType: "Diesel",
      transmission: "Automatic",
    },
  },
  {
    id: 4,
    title: "BMW X SUV",
    description:
      "Excellent fuel efficiency & low maintenance Sporty design with advanced safety features.",
    img: {
      src: "/car1.png",
      alt: "",
    },
    spec: {
      mileageKm: 14200,
      fuelType: "Petrol",
      transmission: "CVT",
    },
  },
  {
    id: 5,
    title: "Audi A4 Sedan",
    description:
      "Premium comfort with smooth handling, advanced infotainment, and refined performance.",
    img: {
      src: "/car1.png",
      alt: "",
    },
    spec: {
      mileageKm: 18500,
      fuelType: "Petrol",
      transmission: "Automatic",
    },
  },
  {
    id: 6,
    title: "Mercedes GLC SUV",
    description:
      "Luxury SUV offering superior ride comfort, safety technology, and bold styling.",
    img: {
      src: "/icons/landingpage/car3.jpg",
      alt: "",
    },
    spec: {
      mileageKm: 16200,
      fuelType: "Diesel",
      transmission: "Automatic",
    },
  },
];

function ExploreCars() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEmblaReady, setIsEmblaReady] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // Sync active slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    const onInit = () => {
      setIsEmblaReady(true);
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("init", onInit);
    onSelect();
    onInit();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onInit);
    };
  }, [emblaApi]);

  const currentCarData = useMemo(() => {
    return carData[currentIndex];
  }, [currentIndex]);

  const handleSlideClick = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <>
      {/* EMBLA STYLES (slick replacement) */}
      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          align-items: center;
        }
        .embla__slide {
          flex: 0 0 100%;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .embla__slide.is-selected {
          opacity: 1;
        }

        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }

        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 33.3333%;
          }
        }
      `}</style>

      <section className="px-4 py-6 lg:pb-20">
        <div className="max-w-206.25 space-y-4 mx-auto">
          <div className="font-['Poppins'] font-semibold text-[30px] leading-[35.22px] tracking-[-0.04em] text-center capitalize lg:text-[58px] lg:leading-19.5">
            Canada’s Favourite Cars
          </div>
          <div className="font-['Poppins'] font-normal text-[9px] leading-[15.35px] tracking-[0] text-center lg:text-[19px] lg:leading-8.5">
            Explore a wide selection of vehicles—from fuel-efficient rides and
            everyday drivers to premium models.
          </div>
        </div>

        {/* CAROUSEL */}
        <div className={`slider-container relative mt-8 ${!isEmblaReady ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            ←
          </button>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {carData.map((car, index) => (
                <div
                  key={car.id}
                  className={`embla__slide px-3 ${
                    index === currentIndex ? "is-selected" : ""
                  }`}
                  onClick={() => handleSlideClick(index)}
                  
                >
                  <div className="" >
                    <Image
                      src={car.img.src}
                      alt={car.img.alt}
                      width={300}
                      height={200}
                      className="w-full object-cover rounded-lg mb-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            →
          </button>
        </div>

        {/* DETAILS CARD */}
        <div className="max-w-125 min-w-42.5 mx-auto bg-white rounded-4xl p-4 md:p-6 mt-8 space-y-4">
          <div className="font-['Poppins'] font-semibold text-[18px] leading-[100%] tracking-[-0.03em] text-center md:font-medium md:text-[32px]">
            {currentCarData?.title}
          </div>
          <div className="font-['Poppins'] font-normal text-[8px] leading-[13.36px] tracking-[0] text-center align-middle md:text-[14px] md:leading-6.25 text-[#535353]">
            {currentCarData?.description}
          </div>
          <div className="flex justify-center items-center gap-6 md:gap-14 w-full">
            <div className="flex justify-center items-center flex-col gap-2.5 min-w-22.5">
              <SiSpeedtest size={40} />
              <div>{currentCarData?.spec?.mileageKm}</div>
            </div>
            <div className="flex justify-center items-center flex-col gap-2.5 min-w-22.5">
              <BsFillFuelPumpFill size={40} />
              <div>{currentCarData?.spec?.fuelType}</div>
            </div>
            <div className="flex justify-center items-center flex-col gap-2.5 min-w-22.5">
              <TbManualGearbox size={40} />
              <div>{currentCarData?.spec?.transmission}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreCars;
