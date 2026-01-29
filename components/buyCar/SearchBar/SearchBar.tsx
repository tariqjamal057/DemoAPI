"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { BsChevronDown } from "react-icons/bs"

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch?: (query: string) => void
}

export default function SearchBar({ className, onSearch, ...props }: SearchBarProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <BsChevronDown className="absolute right-8 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary cursor-pointer" />
      <Input 
        type="search" 
        placeholder="Search Cars and keywords" 
        className="hidden md:block pl-4 md:pl-9 h-14 md:h-20 w-full text-base"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <Input 
        type="search" 
        placeholder="Search Cars" 
        className="md:hidden pl-4 md:pl-9 h-14 md:h-20 w-full text-base"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  )
}
