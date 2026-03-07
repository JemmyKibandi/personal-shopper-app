"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "./productsData"

export default function ProductGrid() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <motion.div
              whileHover={{ y:-6 }}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-pink-500 font-semibold">${product.price}</p>
                <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:opacity-90 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}