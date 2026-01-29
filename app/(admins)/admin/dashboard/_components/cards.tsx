import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

const cardData = [
  {
    title: "Users",
    amount: "1,234",
    subtitle: "New users",
    subtitleValue: "+20.1%",
  },
  {
    title: "Active Listings",
    amount: "678",
    subtitle: "active",
    subtitleValue: "70%",
  },
  {
    title: "Avg. Conversion",
    amount: "56%",
    subtitle: "higher last month",
    subtitleValue: "+12%",
  },
  {
    title: "Pending Listings",
    amount: "234",
    subtitle: "on wait-list",
    subtitleValue: "54",
  },
];

export function Cards({className}: {className?: string}) {
  return (
    <div className={`grid gap-4 grid-cols-2 md:grid-cols-4 ${className}`}>
      <Card className="shadow-md md:py-6 py-4 md:gap-6 gap-y-0">
        <CardContent className="flex flex-col gap-y-3 md:px-6 px-4">
          <CardTitle className="text-sm md:text-md font-medium text-[#7B91B0]">
            {cardData[0].title}
          </CardTitle>

          <div className="text-xl md:text-4xl font-semibold text-[#2B3674]">
            {cardData[0].amount}
          </div>
          <p className="text-[10px] md:text-xs font-md text-[#7B91B0]">
            <span className="text-[#8FCD88]">{cardData[0].subtitleValue}</span>{" "}
            {cardData[0].subtitle}
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-md">
        <CardContent className="flex flex-col gap-y-3">
          <CardTitle className="text-sm md:text-md font-medium text-[#7B91B0]">
            {cardData[1].title}
          </CardTitle>

          <div className="text-xl md:text-4xl font-semibold text-[#2B3674]">
            {cardData[1].amount}
          </div>
          <p className="text-[10px] md:text-xs font-md text-[#4079ED]">
            <span>{cardData[1].subtitleValue}</span> {cardData[1].subtitle}
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-md">
        <CardContent className="flex flex-col gap-y-3">
          <CardTitle className="text-sm md:text-md font-medium text-[#7B91B0]">
            {cardData[2].title}
          </CardTitle>

          <div className="text-xl md:text-4xl font-semibold text-[#2B3674]">
            {cardData[2].amount}
          </div>
          <p className="text-[10px] md:text-xs font-md text-[#7B91B0]">
            <span className="text-[#8FCD88]">{cardData[2].subtitleValue}</span>{" "}
            {cardData[2].subtitle}
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-md">
        <CardContent className="flex flex-col gap-y-3">
          <CardTitle className="text-sm md:text-md font-medium text-[#7B91B0]">
            {cardData[3].title}
          </CardTitle>

          <div className="text-xl md:text-4xl font-semibold text-[#2B3674]">
            {cardData[3].amount}
          </div>
          <p className="text-[10px] md:text-xs font-md text-[#7F1D1D]">
            <span>{cardData[3].subtitleValue}</span> {cardData[3].subtitle}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
