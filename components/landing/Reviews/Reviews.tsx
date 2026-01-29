/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    text: "Thousands of verified 5-star reviews from happy buyers, sellers, and renters who trust AUTOBON for a smooth, transparent car experience.",
    name: "Eldho J.",
    role: "Satisfied Contractor",
    avatar: "/icons/landingpage/user.png",
    image: "/icons/landingpage/review1.png",
    rating: 5,
  },
  {
    id: 2,
    text: "Thousands of verified 5-star reviews from happy buyers, sellers, and renters who trust AUTOBON for a smooth, transparent car experience.",
    name: "Eldho J.",
    role: "Satisfied Contractor",
    avatar: "/icons/landingpage/user.png",
    image: "/icons/landingpage/review2.png",
    rating: 5,
  },
  {
    id: 3,
    text: "Thousands of verified 5-star reviews from happy buyers, sellers, and renters who trust AUTOBON for a smooth, transparent car experience.",
    name: "Eldho J.",
    role: "Satisfied Contractor",
    avatar: "/icons/landingpage/user.png",
    image: "/icons/landingpage/review3.png",
    rating: 4,
  },
  {
    id: 4,
    text: "Thousands of verified 5-star reviews from happy buyers, sellers, and renters who trust AUTOBON for a smooth, transparent car experience.",
    name: "Eldho J.",
    role: "Satisfied Contractor",
    avatar: "/icons/landingpage/user.png",
    image: "/icons/landingpage/review1.png",
    rating: 5,
  },
  {
    id: 5,
    text: "Thousands of verified 5-star reviews from happy buyers, sellers, and renters who trust AUTOBON for a smooth, transparent car experience.",
    name: "Eldho J.",
    role: "Satisfied Contractor",
    avatar: "/icons/landingpage/user.png",
    image: "/icons/landingpage/review2.png",
    rating: 5,
  },
  {
    id: 6,
    text: "Thousands of verified 5-star reviews from happy buyers, sellers, and renters who trust AUTOBON for a smooth, transparent car experience.",
    name: "Eldho J.",
    role: "Satisfied Contractor",
    avatar: "/icons/landingpage/user.png",
    image: "/icons/landingpage/review3.png",
    rating: 4,
  },
];

function Reviews() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEmblaReady, setIsEmblaReady] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
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

  const handleSlideClick = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <>
      {/* EMBLA GLOBAL STYLE (replacement of slick styles) */}
      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
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

      <section>
        <div className="p-5.5 lg:py-6.75   lg:px-27.5 lg:pb-20">
          <div className="flex justify-between md:items-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="font-['Poppins'] font-semibold text-[30px] leading-[35.22px] tracking-[-0.04em] capitalize md:text-[58px] md:leading-19.5 max-w-155">
              Real experiences from real drivers!
            </div>
            <div className="space-y-4 max-w-130">
              <div className="font-['Poppins'] font-normal text-[9px] leading-[15.35px] tracking-[0] text-[#505050] md:text-[19px] md:leading-8.5">
                With an endless selection of vehicles, we can help you find
                exactly what you’re looking for.
              </div>
              <div className="font-['Poppins'] font-semibold text-[8.95px] leading-[100%] tracking-[0] text-center align-middle md:text-[19px] text-white bg-primary rounded-full p-2 md:p-4 w-fit cursor-pointer">
                Read all Reviews
              </div>
            </div>
          </div>

          {/* EMBLA CAROUSEL */}
          <div
            className={`mt-10 embla ${
              !isEmblaReady ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            ref={emblaRef}
          >
            <div className="embla__container">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`embla__slide sm:px-3 pt-14 max-w-136.25  ${
                    index === selectedIndex ? "is-selected" : ""
                  }`}
                  onClick={() => handleSlideClick(index)}
                >
                  <div className="bg-white rounded-3xl relative p-4">
                    {/* Quote icon */}
                    <div className="absolute -top-6 left-6 bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-white text-3xl font-bold">
                      <FaQuoteLeft />
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-10">
                      <p className="text-[#505050] text-sm leading-relaxed">
                        {item.text}
                      </p>

                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="w-15 h-15 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.role}</p>
                          </div>
                        </div>

                        <Image
                          src="/icons/landingpage/google.png"
                          alt="Google"
                          width={28}
                          height={28}
                        />
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt="testimonial"
                        width={545}
                        height={364}
                        className="w-full h-60 max-w-136.25 max-h-91.25 rounded-3xl object-cover"
                      />
                      <div className="absolute inset-0 rounded-4xl shadow-[0px_4px_44px_0px_rgba(0,0,0,0.14)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_75.68%,rgba(0,0,0,0.9)_100%)]" />

                      <div className="absolute bottom-4 left-4 flex gap-1 text-white">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={i < item.rating ? "" : "opacity-30"}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-4 right-4 text-white text-xl">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
