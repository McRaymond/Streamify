"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { users } from "@/lib/users" // 👈 Import your user list

export default function StreamflixHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedEmail = localStorage.getItem("loggedInUser")
    if (storedEmail) {
      const matchedUser = users.find((u) => u.email === storedEmail)
      if (matchedUser) {
        setUserInfo({ name: matchedUser.name, email: matchedUser.email })
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-8">
          <Link href="/home" className="text-purple-600 font-bold text-3xl">STREAMFLIX</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/home" className="text-sm font-medium hover:text-gray-300">Home</Link>
            <Link href="/tv-shows" className="text-sm font-medium hover:text-gray-300">TV Shows</Link>
            <Link href="/movies" className="text-sm font-medium hover:text-gray-300">Movies</Link>
            <Link href="/new" className="text-sm font-medium hover:text-gray-300">New & Popular</Link>
            <Link href="/my-list" className="text-sm font-medium hover:text-gray-300">My List</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Avatar + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 focus:outline-none">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar/avatar.png" alt="User avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-white" />
            </button>

            {dropdownOpen && userInfo && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-800 border border-gray-700 z-50">
                <div className="px-4 py-3">
                  <p className="text-sm text-white">{userInfo.name}</p>
                  <p className="text-xs text-gray-400 truncate">{userInfo.email}</p>
                </div>
                <ul className="py-1 text-sm text-gray-300">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-gray-700">Settings</Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-700" onClick={() => localStorage.removeItem("loggedInUser")}>
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
