// File: app/movies/page.tsx
"use client"

import StreamflixHeader from "@/components/ui/streamflix-header"
import { ContentRow } from "@/components/ui/content-row"
import { FeaturedContent } from "@/components/ui/featured-content"

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StreamflixHeader />

      <main className="pt-20 px-4">
        <FeaturedContent />
        <div className="space-y-8 pb-16">
          <ContentRow title="Popular Movies" />
          <ContentRow title="Action" />
          <ContentRow title="Thrillers" />
          <ContentRow title="Comedies" />
        </div>
      </main>
    </div>
  )
}
