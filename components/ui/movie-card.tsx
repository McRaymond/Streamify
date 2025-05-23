"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Play, Plus, ThumbsUp, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Movie } from "@/lib/movies"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isInMyList, setIsInMyList] = useState(false)

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList") || "[]")
    setIsInMyList(storedList.some((m: Movie) => m.id === movie.id))
  }, [movie.id])

  const toggleMyList = () => {
    const storedList = JSON.parse(localStorage.getItem("myList") || "[]")
    const exists = storedList.find((m: Movie) => m.id === movie.id)

    let updatedList
    if (exists) {
      updatedList = storedList.filter((m: Movie) => m.id !== movie.id)
      setIsInMyList(false)
    } else {
      updatedList = [...storedList, movie]
      setIsInMyList(true)
    }

    localStorage.setItem("myList", JSON.stringify(updatedList))

    // ✅ Notify MyListPage (same tab)
    window.dispatchEvent(new Event("myListUpdated"))
  }

  return (
    <div className="relative group h-28 min-w-[180px] md:h-36 md:min-w-[260px] transition-transform hover:scale-105 hover:z-10">
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        className="rounded-sm object-cover"
      />

      <div className="absolute inset-0 rounded-sm p-2 bg-black/60 flex flex-col justify-between">
        <h3 className="text-white font-semibold text-sm md:text-base">{movie.title}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Button size="icon" className="h-7 w-7 rounded-full bg-purple-600 hover:bg-purple-700">
              <Play className="h-4 w-4 text-black" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={toggleMyList}
              className={`h-7 w-7 rounded-full ${isInMyList ? "bg-green-600 border-green-600" : ""}`}
              title={isInMyList ? "Remove from My List" : "Add to My List"}
            >
              {isInMyList ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </Button>
            <Button size="icon" variant="outline" className="h-7 w-7 rounded-full">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="h-7 w-7 rounded-full ml-auto">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-white">Some tags here</div>
        </div>
      </div>
    </div>
  )
}
