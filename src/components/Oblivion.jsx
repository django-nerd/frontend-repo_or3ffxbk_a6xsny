import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Oblivion = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rise = useTransform(scrollYProgress, [0, 1], [80, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative h-[140vh] bg-black text-white overflow-hidden">
      <motion.div style={{ opacity }} className="sticky top-0 h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_60%,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative max-w-5xl mx-auto px-6 w-full">
          <div className="text-center mb-10">
            <h3 className="text-5xl md:text-7xl font-serif tracking-wide">OBLIVION</h3>
            <p className="text-yellow-100/70 mt-2">A pull of fate. A coin flipped in the dark. You get what the abyss decides.</p>
          </div>
          <motion.div style={{ y: rise }} className="mx-auto w-full max-w-xl aspect-[4/3] bg-black/50 border border-yellow-500/20 rounded-xl flex items-center justify-center">
            <div className="text-yellow-200/60">Matte-black bag emerges from the void</div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="px-5 py-2.5 rounded-full border border-yellow-500/40 text-yellow-100/90 hover:border-yellow-400/70 hover:text-yellow-50 transition-colors">1 Bag</button>
            <button className="px-5 py-2.5 rounded-full border border-yellow-500/40 text-yellow-100/90 hover:border-yellow-400/70 hover:text-yellow-50 transition-colors">3 Bag Collector</button>
          </div>

          <div className="mt-10 text-center text-yellow-200/50 text-sm">Question mark fades in and dissolves like smoke</div>
        </div>
      </motion.div>
    </section>
  )
}

export default Oblivion
