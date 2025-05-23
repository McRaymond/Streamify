"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { movies } from "@/lib/movies"
import type { Movie } from "@/lib/movies"

export function FeaturedContent() {
  const [featured, setFeatured] = useState<Movie | null>(null)

  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    setFeatured(randomMovie)
  }, [])

  if (!featured) return null

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={featured.image}
          alt={featured.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="container relative h-full flex flex-col justify-end pb-24 pt-32">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold">{featured.title}</h1>
          <p className="text-lg">{featured.description}</p>
          <div className="flex gap-3 pt-4">
            <Button className="gap-2 text-lg px-6 py-6 bg-purple-600 hover:bg-purple-700">
              <Play className="h-5 w-5" />
              Play
            </Button>
            <Button variant="secondary" className="gap-2 text-lg px-6 py-6 bg-purple-900/40 hover:bg-purple-900/60">
              <Info className="h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
