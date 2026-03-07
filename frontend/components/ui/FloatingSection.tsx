"use client"

import { motion } from "framer-motion"

export default function FloatingSection({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <motion.div
      initial={{ opacity:0, y:40 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.8 }}
      whileHover={{ y:-6 }}
      className="backdrop-blur-md bg-white/60 shadow-xl rounded-2xl border border-white/40"
    >
      {children}
    </motion.div>
  )
}