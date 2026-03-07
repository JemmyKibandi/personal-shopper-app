"use client"

import { useState } from "react"
import Link from "next/link"
import { products } from "./productsData"
import { motion } from "framer-motion"
import Footer from "./Footer"

export default function ProductDetail({ id }: { id: number }) {
  const product = products.find(p => p.id === id)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>
  }

  return (
    <main className="bg-white min-h-screen">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/Main" className="text-2xl font-bold">Personal Shopper</Link>
          <Link href="/Main" className="px-4 py-2 hover:bg-neutral-100 rounded-lg">Back to Shop</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={product.img} alt={product.name} className="w-full h-[500px] object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl text-pink-500 font-bold mb-6">${product.price}</p>
            
            <p className="text-neutral-600 mb-6 text-lg">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-pink-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <label className="font-semibold">Quantity:</label>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border rounded-lg hover:bg-neutral-100"
                >-</button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border rounded-lg hover:bg-neutral-100"
                >+</button>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition">
              Add to Cart - ${product.price * quantity}
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
