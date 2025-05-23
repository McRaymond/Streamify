"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { users } from "@/lib/users" // ✅ Import users from user database

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const user = users.find((u) => u.email === email)

    if (!user) {
      setError("No user found with that email")
    } else if (user.password !== password) {
      setError("Incorrect password")
    } else {
      localStorage.setItem("loggedInUser", user.email) // ✅ Save email to localStorage
      router.push("/home") // ✅ Redirect after login
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black px-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md relative">
        <Link
          href="/"
          className="absolute top-4 left-4 text-sm text-purple-400 hover:text-purple-300 transition"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold text-center text-white mb-6">Sign in to Streamify</h1>

        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 bg-white text-black font-medium py-3 rounded hover:bg-gray-100 transition">
            <FcGoogle size={20} />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-3 bg-black border border-gray-600 text-white py-3 rounded hover:bg-gray-800 transition">
            <FaApple size={20} />
            Sign in with Apple
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-900 px-2 text-gray-400">or sign in with email</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded font-semibold transition">
            Login
          </button>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        </form>
      </div>
    </main>
  )
}
