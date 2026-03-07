"use client"

import { motion } from "framer-motion"
import { useState, FormEvent } from "react"
import Link from "next/link"

export default function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log({ email, password })
    setLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-96 bg-white rounded-2xl shadow-xl p-10"
    >
      <h1 className="text-3xl font-semibold text-neutral-800 mb-6">
        Create Account
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-neutral-300 p-3 rounded-lg focus:outline-none focus:border-black"
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-neutral-300 p-3 rounded-lg focus:outline-none focus:border-black"
          required
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-3 rounded-lg mt-4 hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Sign Up"
          )}
        </button>
      </form>

      <p className="text-sm text-neutral-500 mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-black font-medium hover:underline">
          Sign In
        </Link>
      </p>
    </motion.div>
  )
}