'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500) // 3.5s
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center text-white"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs mb-3"
          >
            I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-6xl font-extrabold"
          >
            Narendra
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-6xl font-extrabold text-yellow-400"
          >
            Aryasatya
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
