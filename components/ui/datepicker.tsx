"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
}

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ value, onChange, placeholder }, ref) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button
            // variant={"outline"}
            className={cn(
              "w-full bg-transparent !border-b border-gray-400 py-2 text-gray-900 placeholder:text-gray-500 focus:border-gray-600 focus:outline-none justify-start text-left font-normal",
              !value && "text-muted-foreground",
              "ring-0 focus:ring-0 flex items-center gap-2" // Ensure no ring on focus
            )}
            ref={ref}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : placeholder || "Pick a date"}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={value} onSelect={onChange} />
        </PopoverContent>
      </Popover>
    );
  }
);
DatePicker.displayName = "DatePicker";

export { DatePicker };
