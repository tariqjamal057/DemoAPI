"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, TrendingUp, DollarSign, Eye } from "lucide-react";
import Image from "next/image";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumblist";

const LocationMarketControlPage = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countries = [
    { name: "USA", x: 15, y: 40 },
    { name: "UK", x: 45, y: 30 },
    { name: "Germany", x: 50, y: 35 },
    { name: "France", x: 48, y: 38 },
    { name: "Japan", x: 85, y: 45 },
    { name: "Australia", x: 90, y: 75 },
    { name: "Canada", x: 20, y: 25 },
    { name: "India", x: 70, y: 55 },
    { name: "Brazil", x: 35, y: 70 },
    { name: "South Africa", x: 55, y: 80 },
  ];

  const chartData = [
    { month: "Jan", value: 20000 },
    { month: "Feb", value: 45000 },
    { month: "Mar", value: 70000 },
    { month: "Apr", value: 15000 },
    { month: "May", value: 153000 },
    { month: "Jun", value: 80000 },
    { month: "Jul", value: 230000 },
  ];

  const cards = [
    {
      title: "Total Followers",
      value: "12,584",
      change: "+2.21%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+5.4%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Page Views",
      value: "89,432",
      change: "+12.5%",
      icon: Eye,
      color: "text-purple-600",
    },
  ];
  const breadcrumbs = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "Location Market Control",
      href: "/admin/location-market-control",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="mb-10 hidden md:block">
        <BreadcrumbWithCustomSeparator items={breadcrumbs} />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl text-[#7D7D7D]">
        Location/Market Control
      </h2>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Container */}
        <div className="col-span-12 md:col-span-8 space-y-6">
          {/* Map */}

          <div className="bg-white p-6 rounded-lg  ">
            <div className="w-full flex  justify-center items-center mx-auto">
              <div className="flex flex-col mx-auto">
                <h3 className="text-lg font-semibold mb-4">Map Disribution</h3>
                <Image
                  src="/world.svg"
                  width={100}
                  height={100}
                  alt="map image"
                  className="text-blue-400 w-full md:w-1/2"
                />
              </div>
            </div>
          </div>

          {/* Area Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Market Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={(value) => `${value / 1000}K`}
                  domain={[0, 250000]}
                  ticks={[0, 50000, 100000, 150000, 200000, 250000]}
                />
                {/* <Tooltip
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                  labelFormatter={(label) => `Month: ${label}`}
                /> */}
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Container */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          {/* Map */}

          {/* Additional Cards */}
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-5">
                  <p className="text-sm font-medium text-gray-600">
                    Total Followers
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    13,675
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1.50037C5.20435 1.50037 4.44129 1.81644 3.87868 2.37905C3.31607 2.94165 3 3.70472 3 4.50037C3 5.29602 3.31607 6.05908 3.87868 6.62169C4.44129 7.1843 5.20435 7.50037 6 7.50037C6.79565 7.50037 7.55871 7.1843 8.12132 6.62169C8.68393 6.05908 9 5.29602 9 4.50037C9 3.70472 8.68393 2.94165 8.12132 2.37905C7.55871 1.81644 6.79565 1.50037 6 1.50037ZM1.5 4.50037C1.5 3.30689 1.97411 2.1623 2.81802 1.31839C3.66193 0.474472 4.80653 0.000366211 6 0.000366211C7.19347 0.000366211 8.33807 0.474472 9.18198 1.31839C10.0259 2.1623 10.5 3.30689 10.5 4.50037C10.5 5.69384 10.0259 6.83843 9.18198 7.68235C8.33807 8.52626 7.19347 9.00037 6 9.00037C4.80653 9.00037 3.66193 8.52626 2.81802 7.68235C1.97411 6.83843 1.5 5.69384 1.5 4.50037Z"
                      fill="#849AA9"
                    />
                    <path
                      d="M1.593 12.0003H10.407C9.99675 10.3525 8.262 9.00027 6 9.00027C3.738 9.00027 2.00325 10.3525 1.593 12.0003ZM0 12.7503C0 9.74652 2.799 7.50027 6 7.50027C9.201 7.50027 12 9.74652 12 12.7503C12 12.9492 11.921 13.14 11.7803 13.2806C11.6397 13.4213 11.4489 13.5003 11.25 13.5003H0.75C0.551088 13.5003 0.360322 13.4213 0.21967 13.2806C0.0790176 13.14 0 12.9492 0 12.7503ZM11.2507 7.40577C11.1616 7.56671 11.065 7.72339 10.9613 7.87527C11.4285 8.28777 11.844 8.75727 12.1965 9.27327C13.5997 9.74952 14.607 10.7958 14.907 12.0003H13.35C13.4482 12.4848 13.5 12.9865 13.5 13.5003H15.75C15.9489 13.5003 16.1397 13.4213 16.2803 13.2806C16.421 13.14 16.5 12.9492 16.5 12.7503C16.5 10.6563 15.1395 8.93052 13.2315 8.07702C14.0138 7.47988 14.5788 6.64274 14.8399 5.69384C15.101 4.74494 15.0438 3.73661 14.6771 2.82332C14.3104 1.91002 13.6544 1.14212 12.8096 0.637244C11.9648 0.132372 10.9778 -0.0816287 9.99975 0.0280239C10.5011 0.477032 10.9237 1.00687 11.25 1.59552C11.8933 1.76261 12.463 2.13852 12.8697 2.66429C13.2764 3.19007 13.497 3.83596 13.497 4.50065C13.497 5.16534 13.2764 5.81123 12.8697 6.337C12.463 6.86278 11.8933 7.23869 11.25 7.40577H11.2507Z"
                      fill="#849AA9"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[#2CDDC7]">
                    +2.1%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-5">
                  <p className="text-sm font-medium text-gray-600">
                    Total Posts
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    13,675
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 16.5C3.90326 16.5 3.33097 16.2629 2.90901 15.841C2.48705 15.419 2.25 14.8467 2.25 14.25V3.75C2.25 3.15326 2.48705 2.58097 2.90901 2.15901C3.33097 1.73705 3.90326 1.5 4.5 1.5H10.629C11.2254 1.50033 11.7973 1.73745 12.219 2.15925L15.0915 5.03025C15.5132 5.45223 15.7501 6.02442 15.75 6.621V14.25C15.75 14.8467 15.5129 15.419 15.091 15.841C14.669 16.2629 14.0967 16.5 13.5 16.5H4.5ZM3.75 14.25C3.75 14.4489 3.82902 14.6397 3.96967 14.7803C4.11032 14.921 4.30109 15 4.5 15H13.5C13.6989 15 13.8897 14.921 14.0303 14.7803C14.171 14.6397 14.25 14.4489 14.25 14.25V7.5H12C11.4033 7.5 10.831 7.26295 10.409 6.84099C9.98705 6.41903 9.75 5.84674 9.75 5.25V3H4.5C4.30109 3 4.11032 3.07902 3.96967 3.21967C3.82902 3.36032 3.75 3.55109 3.75 3.75V14.25ZM12 6H13.9395L11.25 3.3105V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6ZM6 9C5.80109 9 5.61032 9.07902 5.46967 9.21967C5.32902 9.36032 5.25 9.55109 5.25 9.75C5.25 9.94891 5.32902 10.1397 5.46967 10.2803C5.61032 10.421 5.80109 10.5 6 10.5H12C12.1989 10.5 12.3897 10.421 12.5303 10.2803C12.671 10.1397 12.75 9.94891 12.75 9.75C12.75 9.55109 12.671 9.36032 12.5303 9.21967C12.3897 9.07902 12.1989 9 12 9H6ZM6 12C5.80109 12 5.61032 12.079 5.46967 12.2197C5.32902 12.3603 5.25 12.5511 5.25 12.75C5.25 12.9489 5.32902 13.1397 5.46967 13.2803C5.61032 13.421 5.80109 13.5 6 13.5H9C9.19891 13.5 9.38968 13.421 9.53033 13.2803C9.67098 13.1397 9.75 12.9489 9.75 12.75C9.75 12.5511 9.67098 12.3603 9.53033 12.2197C9.38968 12.079 9.19891 12 9 12H6Z"
                      fill="#849AA9"
                    />
                  </svg>

                  <span className="text-sm font-medium text-[#FF3131]">
                    -0.1%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-5">
                  <p className="text-sm font-medium text-gray-600">
                    Total Likes
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    13,675
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.6945 2.745C9.94779 2.49173 10.275 2.32546 10.6289 2.27017C10.9828 2.21488 11.3451 2.27343 11.6636 2.43739C11.9821 2.60134 12.2402 2.86221 12.4008 3.18237C12.5615 3.50254 12.6162 3.86545 12.5573 4.21875L12.135 6.75225C13.1056 6.78722 14.0248 7.19738 14.699 7.89641C15.3733 8.59543 15.75 9.52879 15.75 10.5V12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75H4.5C3.90326 15.75 3.33097 15.513 2.90901 15.091C2.48705 14.669 2.25 14.0967 2.25 13.5V9C2.25 8.40327 2.48705 7.83097 2.90901 7.40901C3.33097 6.98706 3.90326 6.75 4.5 6.75H5.6895L9.6945 2.745ZM5.25 8.25H4.5C4.30109 8.25 4.11032 8.32902 3.96967 8.46968C3.82902 8.61033 3.75 8.80109 3.75 9V13.5C3.75 13.6989 3.82902 13.8897 3.96967 14.0303C4.11032 14.171 4.30109 14.25 4.5 14.25H5.25V8.25ZM6.75 14.25H12C12.5967 14.25 13.169 14.013 13.591 13.591C14.0129 13.169 14.25 12.5967 14.25 12V10.5C14.25 9.90327 14.0129 9.33097 13.591 8.90901C13.169 8.48706 12.5967 8.25 12 8.25H9.75C9.55109 8.25 9.36032 8.17099 9.21967 8.03033C9.07902 7.88968 9 7.69892 9 7.5C9 7.30109 9.07902 7.11033 9.21967 6.96967C9.36032 6.82902 9.55109 6.75 9.75 6.75H10.6147L11.0775 3.972C11.0842 3.93218 11.0781 3.89124 11.0601 3.8551C11.042 3.81897 11.013 3.78951 10.9771 3.77097C10.9412 3.75244 10.9003 3.7458 10.8604 3.75201C10.8205 3.75822 10.7836 3.77695 10.755 3.8055L6.75 7.8105V14.25Z"
                      fill="#849AA9"
                    />
                  </svg>

                  <span className="text-sm font-medium text-[#2CDDC7]">
                    +2.1%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-5">
                  <p className="text-sm font-medium text-gray-600">
                    Total Comments
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    13,675
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49999 3.75C4.90199 3.75 2.99999 5.5335 2.99999 7.5C2.99999 8.16 3.20474 8.78325 3.57374 9.33C3.63679 9.42329 3.67802 9.52958 3.69438 9.64097C3.71074 9.75237 3.7018 9.86603 3.66824 9.9735L3.32699 11.0678L5.04824 10.7918C5.18773 10.7693 5.33072 10.7867 5.46074 10.842C6.10611 11.1138 6.79971 11.2526 7.49999 11.25C10.098 11.25 12 9.4665 12 7.5C12 5.5335 10.098 3.75 7.49999 3.75ZM1.49999 7.5C1.49999 4.49625 4.29899 2.25 7.49999 2.25C10.701 2.25 13.5 4.49625 13.5 7.5C13.5 10.5038 10.701 12.75 7.49999 12.75C6.67256 12.7521 5.85184 12.6016 5.07899 12.306L2.36849 12.741C2.24233 12.7613 2.11309 12.749 1.99302 12.7053C1.87295 12.6616 1.76603 12.5879 1.68241 12.4913C1.59879 12.3947 1.54124 12.2783 1.51522 12.1532C1.48921 12.0281 1.49558 11.8984 1.53374 11.7765L2.13374 9.85425C1.71969 9.13866 1.50113 8.32675 1.49999 7.5Z"
                      fill="#849AA9"
                    />
                    <path
                      d="M12.0556 6.14999C12.0184 6.24124 11.9995 6.33893 12.0001 6.43748C12.0006 6.53603 12.0206 6.6335 12.0588 6.72433C12.0971 6.81515 12.1528 6.89755 12.2229 6.96682C12.293 7.03608 12.3761 7.09085 12.4674 7.12799C14.0199 7.76024 15.0001 9.07125 15.0001 10.5C15.0001 11.16 14.7954 11.7832 14.4264 12.33C14.3633 12.4233 14.3221 12.5296 14.3057 12.641C14.2894 12.7524 14.2983 12.866 14.3319 12.9735L14.6731 14.0677L12.9519 13.7917C12.8124 13.7693 12.6694 13.7867 12.5394 13.842C11.894 14.1138 11.2004 14.2526 10.5001 14.25C8.47213 14.25 6.83038 13.1407 6.24238 11.7142C6.1666 11.5303 6.02083 11.3839 5.83713 11.3074C5.65344 11.2309 5.44688 11.2305 5.26288 11.3062C5.07889 11.382 4.93254 11.5278 4.85602 11.7115C4.77951 11.8952 4.7791 12.1018 4.85488 12.2857C5.70913 14.355 7.95763 15.75 10.5001 15.75C11.3276 15.7521 12.1483 15.6016 12.9211 15.306L15.6316 15.741C15.7578 15.7613 15.887 15.749 16.0071 15.7053C16.1272 15.6616 16.2341 15.5879 16.3177 15.4913C16.4013 15.3947 16.4589 15.2783 16.4849 15.1532C16.5109 15.0281 16.5045 14.8984 16.4664 14.7765L15.8664 12.8542C16.2804 12.1387 16.499 11.3267 16.5001 10.5C16.5001 8.3385 15.0279 6.55049 13.0329 5.73824C12.9416 5.70116 12.844 5.6824 12.7455 5.68306C12.647 5.68372 12.5496 5.70377 12.4588 5.74208C12.3681 5.78038 12.2858 5.83619 12.2166 5.90631C12.1474 5.97643 12.0927 6.05949 12.0556 6.15075V6.14999Z"
                      fill="#849AA9"
                    />
                  </svg>

                  <span className="text-sm font-medium text-[#2CDDC7]">
                    +2.1%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-5">
                  <p className="text-sm font-medium text-gray-600">
                    Total Shares
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    13,675
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.6838 16.2413C1.58655 16.1293 1.52467 15.9911 1.50598 15.8439C1.48729 15.6968 1.51263 15.5475 1.5788 15.4148L8.3288 1.91478C8.391 1.78997 8.48677 1.68498 8.60534 1.61159C8.72392 1.53821 8.8606 1.49933 9.00005 1.49933C9.1395 1.49933 9.27618 1.53821 9.39476 1.61159C9.51333 1.68498 9.6091 1.78997 9.6713 1.91478L16.4213 15.4148C16.4877 15.5475 16.5132 15.6969 16.4947 15.8441C16.4762 15.9913 16.4144 16.1298 16.3171 16.2418C16.2199 16.3539 16.0916 16.4347 15.9485 16.4738C15.8053 16.513 15.6538 16.5088 15.5131 16.4618L9.00005 14.2905L2.48705 16.4618C2.34636 16.5085 2.19497 16.5125 2.052 16.4733C1.90903 16.434 1.7809 16.3533 1.6838 16.2413ZM9.75005 12.96L14.2695 14.4668L9.00005 3.92703L3.73055 14.466L8.25005 12.9593V9.00003C8.25005 8.80112 8.32907 8.61035 8.46972 8.4697C8.61037 8.32905 8.80114 8.25003 9.00005 8.25003C9.19896 8.25003 9.38973 8.32905 9.53038 8.4697C9.67103 8.61035 9.75005 8.80112 9.75005 9.00003V12.96Z"
                      fill="#849AA9"
                    />
                  </svg>

                  <span className="text-sm font-medium text-[#FF3131]">
                    -2.1%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMarketControlPage;
