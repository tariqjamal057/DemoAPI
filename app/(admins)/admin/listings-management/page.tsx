"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumblist";

interface Listing {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ListingsManagementPage = () => {
  const [activeTab, setActiveTab] = useState("active");

  const activeListings: Listing[] = [
    {
      id: 1,
      image: "/carTrade/car1.png",
      title: "Toyota 2020",
      description:
        "Well-maintained sedan with low mileage. Perfect for daily commute.",
    },
    {
      id: 2,
      image: "/carTrade/car2.png",
      title: "Honda 2019",
      description:
        "Fuel-efficient hatchback in excellent condition. Great for city driving.",
    },
    {
      id: 3,
      image: "/carTrade/car4.png",
      title: "BMW X3 2022",
      description: "Luxury SUV with advanced features. Comfortable and safe.",
    },
    {
      id: 4,
      image: "/carTrade/car3.png",
      title: "BMW X3 2022",
      description: "Luxury SUV with advanced features. Comfortable and safe.",
    },
  ];

  const renderListings = (listings: Listing[]) => (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="border rounded-lg overflow-hidden shadow-sm"
        >
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-24 py-3"
          />
          <div className="bg-gray-200 p-4">
            <h3 className="font-semibold text-sm md:text-md mb-2">
              {listing.title}
            </h3>
            <p className="md:text-xs text-[10px] text-gray-600">
              {listing.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const breadcrumbs = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "Listing Management",
      href: "/admin/listings-management",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="mb-10 hidden md:block">
        <BreadcrumbWithCustomSeparator items={breadcrumbs} />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl text-[#7D7D7D]">
        Listing Management
      </h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-300">
          <TabsTrigger
            value="active"
            className={`${
              activeTab === "active"
                ? "!bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            } !text-[11px] md:text-base`}
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className={`${
              activeTab === "pending"
                ? "!bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            } !text-[11px] md:text-base`}
          >
            Pending Approval
          </TabsTrigger>
          <TabsTrigger
            value="expired"
            className={`${
              activeTab === "expired"
                ? "!bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            } !text-[11px] md:text-base`}
          >
            Expired
          </TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          {renderListings(activeListings)}
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <p className="text-gray-500">No pending listings at the moment.</p>
        </TabsContent>
        <TabsContent value="expired" className="mt-4">
          <p className="text-gray-500">No expired listings at the moment.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListingsManagementPage;
