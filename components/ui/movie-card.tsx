"use client"

import Image from "next/image"
import { useState } from "react"
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Movie } from "@/lib/movies"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative h-28 min-w-[180px] transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        className="rounded-sm object-cover"
      />

      {isHovered && (
        <div className="absolute inset-0 rounded-sm bg-black/80 p-2 flex flex-col justify-between">
          <h3 className="font-semibold">{movie.title}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button size="icon" className="h-7 w-7 rounded-full bg-purple-600 hover:bg-purple-700">
                <Play className="h-4 w-4 text-black" />
              </Button>
              <Button size="icon" variant="outline" className="h-7 w-7 rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="h-7 w-7 rounded-full">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="h-7 w-7 rounded-full ml-auto">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs">Some tags here</div>
          </div>
        </div>
      )}
    </div>
  )
}
