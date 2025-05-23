"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/ui/movie-card"
import { movies as allMovies } from "@/lib/movies"
import type { Movie } from "@/lib/movies"

interface ContentRowProps {
  title: string
  movies?: Movie[]
}

export function ContentRow({ title, movies }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  // ✅ Use passed movies or fallback to filtered ones
  const rowMovies = movies ?? allMovies.filter(movie => movie.category === title)

  return (
    <div className="space-y-2 md:space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="group relative">
        <Button
          variant="ghost"
          size="icon"
          className={`absolute left-2 top-0 bottom-0 z-40 m-auto h-9 w-9 bg-black/30 hover:bg-black/50 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div
          ref={rowRef}
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide md:space-x-4 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {rowMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>


        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-0 bottom-0 z-40 m-auto h-9 w-9 bg-black/30 hover:bg-black/50"
          onClick={() => handleClick("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
