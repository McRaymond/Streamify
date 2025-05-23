// File: app/home/page.tsx
"use client"

import StreamflixHeader from "@/components/ui/streamflix-header"
import { ContentRow } from "@/components/ui/content-row"
import { FeaturedContent } from "@/components/ui/featured-content"

export default function Home() {
  return (
    <div className="bg-min-h-screen bg-black text-white">
      <StreamflixHeader />

      <main className="pt-20">
        <FeaturedContent />

        <div className="space-y-8 pb-16">
          <ContentRow title="Trending Now" />
          <ContentRow title="New Releases" />
          <ContentRow title="Watch Again" />
          <ContentRow title="Comedies" />
          <ContentRow title="Action & Adventure" />
        </div>
      </main>
    </div>
  )
}
