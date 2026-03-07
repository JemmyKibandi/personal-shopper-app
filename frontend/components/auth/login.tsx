"use client"

import { motion } from "framer-motion"
import { useState, FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log({ email, password })
    router.push("/Main")
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-96 bg-white rounded-2xl shadow-2xl p-10"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-semibold text-neutral-800 mb-6"
      >
        Welcome Back! 👋
      </motion.h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-neutral-300 p-3 rounded-lg focus:outline-none focus:border-pink-500 transition"
          required
          disabled={loading}
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-neutral-300 p-3 rounded-lg focus:outline-none focus:border-pink-500 transition"
          required
          disabled={loading}
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg mt-4 hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center font-semibold"
        >
          {loading ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" 
            />
          ) : (
            "Sign In ✨"
          )}
        </motion.button>
      </form>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-sm text-center"
      >
        <Link href="/forgot-password" className="text-neutral-500 hover:text-pink-500 transition">
          Forgot your password?
        </Link>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-neutral-500 mt-2 text-center"
      >
        Don't have an account?{" "}
        <Link href="/register" className="text-pink-500 font-medium hover:underline">
          Sign up
        </Link>
      </motion.p>
    </motion.div>
  )
}
