"use client"

import * as React from "react"
import { carsList } from "@/data/cars"
import { CarCard } from "./CarCard"
import { Pagination } from "./Pagination"

const CARS_PER_PAGE = 9

export default function CarsList() {
  const [currentPage, setCurrentPage] = React.useState(1)

  // Calculate pagination
  const totalPages = Math.ceil(carsList.length / CARS_PER_PAGE)
  const startIndex = (currentPage - 1) * CARS_PER_PAGE
  const currentCars = carsList.slice(startIndex, startIndex + CARS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}