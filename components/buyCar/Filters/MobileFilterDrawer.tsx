"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import Filters from "./Filters"

interface MobileFilterDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileFilterDrawer({ isOpen, onClose }: MobileFilterDrawerProps) {
  // Prevent scrolling when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer Panel */}
      <div className={cn(
        "relative z-50 h-full w-full max-w-[95%] bg-white shadow-xl transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button 
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="h-[calc(100vh-64px)] overflow-y-auto p-4">
          <Filters className="max-w-full" />
        </div>
        
        {/* Footer actions if needed (Apply/Clear) could go here */}
      </div>
    </div>
  )
}
