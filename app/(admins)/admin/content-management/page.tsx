import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumblist";
import { Dot } from "lucide-react";
import React from "react";

const ContentManagementPage = () => {
  const breadcrumbs = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "Content Management",
      href: "/admin/content-management",
    },
  ];
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="mb-10 hidden md:block">
        <BreadcrumbWithCustomSeparator items={breadcrumbs} />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl text-[#7D7D7D]">
        Content Management
      </h2>
      <div className="grid grid-cols-12 p-2 gap-4">
        <div className="p-4 rounded border flex flex-col justify-start col-span-12 md:col-span-4 gap-y-5">
          <div>
            <h3 className="md:font-medium font-semibold md:text-lg mb-1">
              Poly Bon Contact Form
            </h3>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-x-1">
                <div className="h-4 w-4 bg-[#4079ED] rounded-full"></div>
                <p>688 responses</p>
              </div>
              <div className="flex justify-between items-center gap-x-1">
                <Dot /> 8 today
              </div>
            </div>
          </div>
          <p className="font-light text-gray-400 text-sm">
            You edited 5 days ago
          </p>
        </div>
        {/* duplicates */}
        <div className="p-4 rounded border flex flex-col justify-start col-span-12 md:col-span-4 gap-y-5">
          <div>
            <h3 className="md:font-medium font-semibold md:text-lg mb-1">
              Poly Bon Contact Form
            </h3>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-x-1">
                <div className="h-4 w-4 bg-[#4079ED] rounded-full"></div>
                <p>688 responses</p>
              </div>
              <div className="flex justify-between items-center gap-x-1">
                <Dot /> 8 today
              </div>
            </div>
          </div>
          <p className="font-light text-gray-400 text-sm">
            You edited 5 days ago
          </p>
        </div>
        <div className="p-4 rounded border flex flex-col justify-start col-span-12 md:col-span-4 gap-y-5">
          <div>
            <h3 className="md:font-medium font-semibold md:text-lg mb-1">
              Poly Bon Contact Form
            </h3>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-x-1">
                <div className="h-4 w-4 bg-[#4079ED] rounded-full"></div>
                <p>688 responses</p>
              </div>
              <div className="flex justify-between items-center gap-x-1">
                <Dot /> 8 today
              </div>
            </div>
          </div>
          <p className="font-light text-gray-400 text-sm">
            You edited 5 days ago
          </p>
        </div>

        <div className="p-4 rounded border flex flex-col justify-start col-span-12 md:col-span-4 gap-y-5">
          <div>
            <h3 className="md:font-medium font-semibold md:text-lg mb-1">
              Poly Bon Contact Form
            </h3>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-x-1">
                <div className="h-4 w-4 bg-[#4079ED] rounded-full"></div>
                <p>688 responses</p>
              </div>
              <div className="flex justify-between items-center gap-x-1">
                <Dot /> 8 today
              </div>
            </div>
          </div>
          <p className="font-light text-gray-400 text-sm">
            You edited 5 days ago
          </p>
        </div>
        <div className="p-4 rounded border flex flex-col justify-start col-span-12 md:col-span-4 gap-y-5">
          <div>
            <h3 className="md:font-medium font-semibold md:text-lg mb-1">
              Poly Bon Contact Form
            </h3>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-x-1">
                <div className="h-4 w-4 bg-[#4079ED] rounded-full"></div>
                <p>688 responses</p>
              </div>
              <div className="flex justify-between items-center gap-x-1">
                <Dot /> 8 today
              </div>
            </div>
          </div>
          <p className="font-light text-gray-400 text-sm">
            You edited 5 days ago
          </p>
        </div>
        <div className="p-4 rounded border flex flex-col justify-start col-span-12 md:col-span-4 gap-y-5">
          <div>
            <h3 className="md:font-medium font-semibold md:text-lg mb-1">
              Poly Bon Contact Form
            </h3>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-x-1">
                <div className="h-4 w-4 bg-[#4079ED] rounded-full"></div>
                <p>688 responses</p>
              </div>
              <div className="flex justify-between items-center gap-x-1">
                <Dot /> 8 today
              </div>
            </div>
          </div>
          <p className="font-light text-gray-400 text-sm">
            You edited 5 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentManagementPage;
