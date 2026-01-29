"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-600 text-blue-600 transition-colors hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed group"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full text-lg font-medium transition-all",
              currentPage === page
                ? "bg-blue-600 text-white shadow-md"
                : "border border-gray-200 text-gray-900 hover:border-blue-200 hover:bg-blue-50"
            )}
          >
            {page.toString().padStart(2, '0')}
          </button>
        ))}
      </div>

       <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-600 text-blue-600 transition-colors hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  )
}
