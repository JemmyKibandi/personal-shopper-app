"use client"

import { motion, useScroll, useTransform } from "framer-motion"

type Card = {
  title: string
  description: string
  imageUrl: string
}

const cards: Card[] = [
  { title: "Exclusive Deals", description: "Curated just for you.", imageUrl: "/images/deal1.jpg" },
  { title: "Personal Suggestions", description: "Tailored product picks.", imageUrl: "/images/deal2.jpg" },
  { title: "Premium Brands", description: "Hand-picked favorites.", imageUrl: "/images/deal3.jpg" },
]

export default function ParallaxCards() {
  const { scrollY } = useScroll()

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {cards.map((card, idx) => {
        const yMove = useTransform(scrollY, [0, 500], [0, (idx + 1) * -100])

        return (
          <motion.div
            key={idx}
            style={{ y: yMove }}
            className="absolute top-0 left-1/2 w-72 -translate-x-1/2 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm text-neutral-600">{card.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}