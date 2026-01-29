"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import { Cards } from "./_components/cards";
import { RecentSales } from "./_components/sales";
import ActiveCustomer from "./_components/activeCustomer";
import CarPieChart from "./_components/carPieChart";
import ActivityInfo from "./_components/activityInfo";

export default function DashboardPage() {
  const data = [
    { day: "Monday", Canada: 17000, USA: 20000 },
    { day: "Tuesday", Canada: 18000, USA: 12000 },
    { day: "Wednesday", Canada: 3000, USA: 22000 },
    { day: "Thursday", Canada: 15000, USA: 25000 },
    { day: "Friday", Canada: 21000, USA: 19000 },
    { day: "Saturday", Canada: 12000, USA: 23000 },
    { day: "Sunday", Canada: 8000, USA: 18000 },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-8 flex flex-col gap-y-4">
        <Cards />
        <div>
          <Card>
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
                  <Bar dataKey="Canada" fill="#2B3674" />
                  <Bar dataKey="USA" fill="#0095FF" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <CarPieChart showLabel={false} />
      </div>
      <div className="col-span-12 md:col-span-7">
        <ActiveCustomer />
      </div>
      <div className="col-span-12 md:col-span-5">
        <ActivityInfo />
      </div>
    </div>
  );
}
