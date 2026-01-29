"use client";
import React, { useState } from "react";
import CarsGrid from "../_components/CarsGrid";
import Filters from "../_components/pages/ShopCars/Filter";
import { SlidersHorizontal, X } from "lucide-react";
const ShopPage = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="flex p-4  lg:p-[40px] flex-col lg:flex-row min-h-screen bg-gray-50/50">
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-[20px] font-bold">Filters</h2>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <Filters />
          <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t mt-6">
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full h-[50px] bg-primary text-white rounded-full font-bold"
            >
              Show Results
            </button>
          </div>
        </div>
      )}

      <aside className="hidden lg:block w-[280px] sticky top-0 h-screen overflow-y-auto border rounded-[5px] border-[#E3E3E3] bg-white p-6">
        <Filters />
      </aside>

      <main className="flex-1 p-0 lg:p-10 lg:pr-0 lg:pt-0">
        <CarsGrid onMobileFilterClick={() => setIsMobileFilterOpen(true)} />
      </main>
    </div>
  );
};

export default ShopPage;
