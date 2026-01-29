/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { carFilters } from "@/data/cars";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Custom Checkbox Component to match Shadcn/Radix style without installing it
const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    type="checkbox"
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground accent-black",
      className
    )}
    ref={ref}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";

export default function Filters({className}: {className?: string}) {
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  const toggleSection = (key: string) => {
    setOpenSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const renderFilterContent = (filter: any) => {
    if (filter.key === "price_payment") {
      return (
        <div className="space-y-4 px-1">
          <div className="space-y-2">
            <Label className="text-lg font-semibold text-muted-foreground uppercase">
              Price
            </Label>
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <span className="absolute left-2 top-2 text-lg text-muted-foreground">
                  Min
                </span>
                <Input
                  type="number"
                  className="pl-12 h-9"
                  placeholder={filter.options.price.min.toString()}
                />
              </div>
              <span className="text-muted-foreground">-</span>
              <div className="relative w-full">
                <span className="absolute left-2 top-2 text-lg text-muted-foreground">
                  Max
                </span>
                <Input
                  type="number"
                  className="pl-12 h-9"
                  placeholder={filter.options.price.max.toString()}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-lg font-semibold text-muted-foreground uppercase">
              Monthly Payment
            </Label>
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <span className="absolute left-2 top-2 text-lg text-muted-foreground">
                  Min
                </span>
                <Input
                  type="number"
                  className="pl-12 h-9"
                  placeholder={filter.options.monthly_payment.min.toString()}
                />
              </div>
              <span className="text-muted-foreground">-</span>
              <div className="relative w-full">
                <span className="absolute left-2 top-2 text-lg text-muted-foreground">
                  Max
                </span>
                <Input
                  type="number"
                  className="pl-12 h-9"
                  placeholder={filter.options.monthly_payment.max.toString()}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (filter.type) {
      case "checkbox":
        return (
          <div className="flex flex-col space-y-3">
            {filter.options.map((option: any) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <Checkbox id={`${filter.key}-${option.value}`} />
                <span className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );
      case "radio":
        return (
          <div className="flex flex-col space-y-3">
            {filter.options.map((option: any) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={filter.key}
                  className="accent-black h-4 w-4"
                />
                <span className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );
      case "range":
        return (
          <div className="flex items-center gap-2 px-1">
            <div className="relative w-full">
              <span className="absolute left-2 top-2 text-lg text-muted-foreground">
                Min
              </span>
              <Input
                type="number"
                className="pl-12 h-9"
                placeholder={filter.options.min.toString()}
              />
            </div>
            <span className="text-muted-foreground">-</span>
            <div className="relative w-full">
              <span className="absolute left-2 top-2 text-lg text-muted-foreground">
                Max
              </span>
              <Input
                type="number"
                className="pl-12 h-9"
                placeholder={filter.options.max.toString()}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn("w-full max-w-sm border rounded-lg bg-white shadow-sm divide-y divide-gray-300", className)}>
      {carFilters.filters.map((filter) => {
        const isOpen = openSections.includes(filter.key);
        return (
          <div key={filter.key} className="group">
            <button
              onClick={() => toggleSection(filter.key)}
              className={cn(
                "flex w-full items-center justify-between p-6 text-left font-semibold transition-all hover:bg-gray-50/50",
                isOpen ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <span className="font-poppins text-[22px] font-medium leading-none tracking-normal align-middle text-secondary">
                {filter.label}
              </span>
              {isOpen ? (
                <ChevronDown className="h-8 w-8 text-muted-foreground cursor-pointer" />
              ) : (
                <ChevronDown className="h-8 w-8 text-muted-foreground -rotate-90 cursor-pointer" />
              )}
            </button>
            {isOpen && (
              <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-1 duration-200">
                {renderFilterContent(filter)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
