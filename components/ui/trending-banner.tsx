// File: components/ui/trending-banner.tsx
"use client"

import { movies } from "@/lib/movies"
import Image from "next/image"

export default function TrendingBanner() {
  const trending = movies
    .filter((movie) => movie.category === "Trending Now")
    .slice(0, 5)

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Top Trending Movies
        </h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {trending.map((movie, index) => (
            <div
              key={movie.id}
              className="relative flex-shrink-0 w-40 md:w-90"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                width={208}
                height={312}
                className="rounded-lg object-cover w-full h-auto"
              />
              <span className="absolute -top-2 -left-3 text-6xl font-black text-white/80 drop-shadow-md">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}