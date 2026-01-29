"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import ActiveCustomer from "../dashboard/_components/activeCustomer";
import CarPieChart from "../dashboard/_components/carPieChart";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumblist";

const AnalyticsPage = () => {
  const data = [
    { day: "Monday", Canada: 17000, USA: 20000 },
    { day: "Tuesday", Canada: 18000, USA: 12000 },
    { day: "Wednesday", Canada: 3000, USA: 22000 },
    { day: "Thursday", Canada: 15000, USA: 25000 },
    { day: "Friday", Canada: 21000, USA: 19000 },
    { day: "Saturday", Canada: 12000, USA: 23000 },
    { day: "Sunday", Canada: 8000, USA: 18000 },
  ];

  const colors = ["blue", "green", "red", "yellow", "purple"];

  const breadcrumbs = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "Analytics",
      href: "/admin/analytics",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="mb-10 hidden md:block">
        <BreadcrumbWithCustomSeparator items={breadcrumbs} />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl text-[#7D7D7D]">
        Analytics
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 space-y-6">
          <Card className="hidden md:block">
            <CardHeader>
              <CardTitle>Weekly Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis ticks={[0, 5000, 10000, 15000, 20000, 25000]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Canada" fill="#72C4FF" />
                  <Bar dataKey="USA" fill="#B8E8FF" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className=" block md:hidden">
            <CarPieChart />
          </div>
          <div>
            <ActiveCustomer />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 space-y-6 hidden md:block">
          <CarPieChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
