"use client"

import { useEffect, useState } from "react"
import StreamflixHeader from "@/components/ui/streamflix-header"
import { ContentRow } from "@/components/ui/content-row"
import type { Movie } from "@/lib/movies"

export default function MyListPage() {
  const [myList, setMyList] = useState<Movie[]>([])

  const loadMyList = () => {
    const saved = localStorage.getItem("myList")
    if (saved) {
      try {
        setMyList(JSON.parse(saved))
      } catch {
        console.error("Failed to parse saved list.")
      }
    }
  }

  useEffect(() => {
    loadMyList()

    // ✅ Listen to custom update event
    const onUpdate = () => loadMyList()
    window.addEventListener("myListUpdated", onUpdate)

    return () => window.removeEventListener("myListUpdated", onUpdate)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <StreamflixHeader />
      <main className="pt-20 px-4">
        <div className="space-y-8 pb-16">
          <h1 className="text-3xl font-bold mb-6">My List</h1>
          {myList.length > 0 ? (
            <ContentRow title="My Saved Shows" movies={myList} />
          ) : (
            <p className="text-gray-400">You haven’t added any shows yet.</p>
          )}
        </div>
      </main>
    </div>
  )
}
