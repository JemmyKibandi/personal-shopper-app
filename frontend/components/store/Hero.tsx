"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        className="text-center px-6"
      >
        <span className="px-4 py-1 bg-pink-500 text-white rounded-full text-sm">
          Your Beauty Expert
        </span>

        <h1 className="text-6xl font-bold mt-6 max-w-4xl mx-auto">
          Makeup Personal Shopper
          <br />
          <span className="text-pink-500">Tailored to You</span>
        </h1>

        <p className="text-xl text-neutral-600 mt-4 max-w-2xl mx-auto">
          Discover curated beauty products perfectly matched to your style and needs
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Link href="/register" className="bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition">
            Get Started
          </Link>
          <Link href="#products" className="bg-pink-500 text-white px-8 py-4 rounded-xl hover:opacity-90 transition">
            Shop Now
          </Link>
        </div>
      </motion.div>
    </section>
  )
}