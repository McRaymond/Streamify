"use client"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type UserInfo = {
  name: string
  email: string
  avatar?: string
}

export default function StreamflixHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Read user info from localStorage on client side
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser")
    if (storedUser) {
      try {
        const parsed: UserInfo = JSON.parse(storedUser)
        setUserInfo(parsed)
      } catch {
        console.warn("Invalid user data in localStorage.")
      }
    }

    // Handle click outside dropdown to close
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser")
    router.push("/login")
  }

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
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={userInfo?.avatar || "/avatar/default.png"} alt="User avatar" />
                <AvatarFallback>{userInfo?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-white" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-lg shadow-lg bg-gray-800 border border-gray-700 z-50">
                <div className="px-4 py-3">
                  <p className="text-sm text-white">{userInfo?.name || "Guest"}</p>
                  <p className="text-xs text-gray-400 truncate">{userInfo?.email || "email@unknown.com"}</p>
                </div>
                <ul className="py-1 text-sm text-gray-300">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-gray-700">Settings</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                    >
                      Sign out
                    </button>
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
