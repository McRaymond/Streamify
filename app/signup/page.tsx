"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")
  const [error, setError] = useState("")

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()

    const newUser = { name, email, password, avatar }
    const storedUsers = JSON.parse(localStorage.getItem("dynamicUsers") || "[]")

    const exists = storedUsers.find((u: any) => u.email === email)
    if (exists) {
      setError("Email already exists.")
      return
    }

    storedUsers.push(newUser)
    localStorage.setItem("dynamicUsers", JSON.stringify(storedUsers))
    localStorage.setItem("loggedInUser", JSON.stringify(newUser))
    router.push("/home")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black px-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Create an Account</h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            placeholder="Avatar URL (optional)"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded font-semibold transition">
            Sign Up
          </button>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        </form>
      </div>
    </main>
  )
}
