"use client"

import Link from "next/link"
import Hero from "@/components/store/Hero"
import Categories from "@/components/store/Categories"
import ProductGrid from "@/components/store/ProductGrid"
import Footer from "@/components/store/Footer"

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Shopper</h1>
          <div className="flex gap-4">
            <Link href="/contact" className="px-4 py-2 hover:bg-neutral-100 rounded-lg">Contact</Link>
            <Link href="/login" className="px-4 py-2 hover:bg-neutral-100 rounded-lg">Login</Link>
            <Link href="/register" className="px-4 py-2 bg-black text-white rounded-lg">Sign Up</Link>
          </div>
        </div>
      </nav>
      <Hero />
      <Categories />
      <ProductGrid />
      <Footer />
    </main>
  )
}
