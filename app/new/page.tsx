// File: app/new/page.tsx
"use client"

import StreamflixHeader from "@/components/ui/streamflix-header"
import { ContentRow } from "@/components/ui/content-row"
import { FeaturedContent } from "@/components/ui/featured-content"

export default function NewPopularPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StreamflixHeader />

      <main className="pt-20 px-4">
        <FeaturedContent />
        <div className="space-y-8 pb-16">
          <ContentRow title="New Releases" />
          <ContentRow title="Trending Now" />
          <ContentRow title="Just Added" />
        </div>
      </main>
    </div>
  )
}
