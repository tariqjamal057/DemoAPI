import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Image from "next/image";
import { ArrowUp, ArrowDown } from "lucide-react";

const CarPieChart = ({ showLabel = true }: { showLabel?: boolean }) => {
  const pieData = [
    { name: "HatchBack", value: 54, color: "#FFA777", arrow: "positive" },
    { name: "Coupe", value: 20, color: "#FFDBB6", arrow: "positive" },
    { name: "Truck", value: 26, color: "#FFEFDD", arrow: "negative" },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx?: any;
    cy?: any;
    midAngle?: any;
    innerRadius?: any;
    outerRadius?: any;
    percent?: any;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card>
      <CardContent>
        <ResponsiveContainer width="100%" height={260} className={"md:!h-114"}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            {showLabel && (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-foreground text-3xl font-bold"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  fill: "#333",
                }}
              >
                43%
              </text>
            )}
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {pieData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
              <div className="flex items-center">
                <span>{item.value}%</span>
                {item.arrow === "positive" ? <ArrowUp className="h-4 text-[#52C93F]" /> : <ArrowDown className="h-4 text-[#FF2727]" /> }
              </div>
            </div>
          ))}
          {/* <Image
            src={"/carTrade/car4.png"}
            alt="car image"
            width={50}
            height={50}
            className="h-28 md:h-36 w-full"
          /> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default CarPieChart;
