"use client"

import LoginForm from "@/components/auth/login"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-neutral-100">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 p-8 relative overflow-hidden">
        <div className="relative w-full h-full max-w-lg flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
            alt="Beauty products"
            className="w-full h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
        <div className="absolute top-20 left-20 text-6xl animate-bounce">
          💄
        </div>
        <div className="absolute bottom-20 right-20 text-6xl animate-pulse">
          ✨
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </main>
  )
}