// File: app/my-list/page.tsx
"use client"

import StreamflixHeader from "@/components/ui/streamflix-header"
import { ContentRow } from "@/components/ui/content-row"

export default function MyListPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StreamflixHeader />

      <main className="pt-20 px-4">
        <div className="space-y-8 pb-16">
          <h1 className="text-3xl font-bold mb-6">My List</h1>
          <ContentRow title="My Saved Shows" />
        </div>
      </main>
    </div>
  )
}
