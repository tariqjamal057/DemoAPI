"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Car {
  id: number;
  brand: string;
  model: string;
  variant: string;
  year: number;
  priceCAD: number;
  kilometersDriven: number;
  images: {
    cover: string;
    gallery: string[];
  };
}

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  // Approximate bi-weekly payment (5 year term / 26 payments per year)
  // This is a rough estimation for visual matching
  const biWeeklyPayment = Math.round(car.priceCAD / (5 * 26));

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-4xl border bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden ">
        {/* Placeholder for image if empty */}
        {car.images.cover ? (
          <Image
            src={car.images.cover}
            alt={`${car.year} ${car.brand} ${car.model}`}
            fill
            className="object-contain rounded-4xl transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
            No Image
          </div>
        )}

        <button className="absolute right-3 top-3 rounded-full  p-2 text-red-500 cursor-pointer transition-colors hover:bg-white hover:text-red-600">
          <Heart className="h-5 w-5 fill-current" />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-xl font-bold text-gray-900">
          {car.year} {car.brand} {car.model}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium text-gray-900">{car.variant}</span>
          <span className="h-4 w-px bg-gray-300"></span>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{car.kilometersDriven.toLocaleString()} km</span>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-500 line-clamp-2">
          Excellent condition {car.brand} {car.model} featuring advanced safety
          components and a comfortable ride.
        </p>

        <div className="mt-auto pt-4 flex items-center gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-secondary">
              ${car.priceCAD.toLocaleString()}
            </div>
            <div className="text-xs text-secondary font-medium">
              ${biWeeklyPayment} /biweekly $0 down
            </div>
          </div>
          <Button className="w-fit shrink-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold h-10">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
