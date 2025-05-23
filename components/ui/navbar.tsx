// File: components/ui/navbar.tsx
"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full bg-transparent py-4 px-6 flex justify-between items-center fixed top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-purple-500">
        Streamify
      </Link>
      <nav>
        <Link
          href="/login"
          className="text-white text-base font-semibold px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
        >
          Sign In
        </Link>
      </nav>
    </header>
  )
}
