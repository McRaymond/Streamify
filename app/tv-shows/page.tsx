// File: app/tv-shows/page.tsx
"use client"

import StreamflixHeader from "@/components/ui/streamflix-header"
import { ContentRow } from "@/components/ui/content-row"
import { FeaturedContent } from "@/components/ui/featured-content"

export default function TvShowsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StreamflixHeader />

      <main className="pt-20 px-4">
        <FeaturedContent />
        <div className="space-y-8 pb-16">
          <ContentRow title="Popular TV Shows" />
          <ContentRow title="Drama" />
          <ContentRow title="Sci-Fi" />
          <ContentRow title="Documentaries" />
        </div>
      </main>
    </div>
  )
}
