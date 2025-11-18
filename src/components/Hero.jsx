import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Subtle ambient audio (opt-in autoplay policies differ; we keep it muted initially)
const Ambient = () => {
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25
    }
  }, [])

  return (
    <div className="absolute bottom-6 right-6 z-20">
      <audio ref={audioRef} loop src="/ambient-low-rumble.mp3" autoPlay muted={muted} />
      <button
        onClick={() => setMuted(m => !m)}
        className="px-3 py-1.5 rounded-full border border-yellow-500/30 text-xs tracking-wide text-yellow-200/80 hover:text-yellow-100 hover:border-yellow-400/60 transition-colors bg-black/40 backdrop-blur-sm"
        aria-label={muted ? 'Unmute ambience' : 'Mute ambience'}
      >
        {muted ? 'Sound: Off' : 'Sound: On'}
      </button>
    </div>
  )
}

const Dust = () => {
  // Simple particle field using CSS masks and gradients
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{
        backgroundImage:
          'radial-gradient(2px 2px at 20% 80%, rgba(255,255,255,0.08) 40%, transparent 41%),' +
          'radial-gradient(1.5px 1.5px at 60% 90%, rgba(255,255,255,0.06) 40%, transparent 41%),' +
          'radial-gradient(1.2px 1.2px at 80% 70%, rgba(255,255,255,0.05) 40%, transparent 41%),' +
          'radial-gradient(1.8px 1.8px at 30% 60%, rgba(255,255,255,0.07) 40%, transparent 41%)'
      }} />
    </div>
  )
}

const Sigil = () => {
  // Gold line-drawn sigil SVG with draw-on animation
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-40 h-40 md:w-56 md:h-56"
      fill="none"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="70"
        stroke="url(#gold)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M60 120 L100 40 L140 120 Z M75 110 H125 M100 120 V155"
        stroke="url(#gold)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: 'easeInOut', delay: 0.2 }}
      />
      <defs>
        <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFC76B" />
          <stop offset="50%" stopColor="#D6A447" />
          <stop offset="100%" stopColor="#9E7C2F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const glow = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0])
  const turn = useTransform(scrollYProgress, [0, 1], [0, 8]) // slight perspective page turn shadow
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section ref={ref} className="relative min-h-[120vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for vignette and color tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />

      {/* Dust */}
      <Dust />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 h-[100vh] flex flex-col items-center justify-center text-center">
        <motion.div style={{ filter: glow.to(v => `drop-shadow(0 0 ${v * 18}px rgba(255,215,130,0.55))`) }}>
          <Sigil />
        </motion.div>
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="mt-10 text-5xl md:text-7xl font-serif tracking-[0.08em]"
        >
          ELANOR
        </motion.h1>
        <motion.p
          style={{ opacity: titleOpacity }}
          className="mt-3 text-yellow-200/80 uppercase tracking-[0.3em] text-xs md:text-sm"
        >
          Where scent becomes sin.
        </motion.p>
      </div>

      {/* Page turn sheen */}
      <motion.div
        style={{ opacity: turn.to(v => Math.min(0.35, v / 12)) }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,rgba(255,209,125,0.10),transparent)]"
      />

      <Ambient />
    </section>
  )
}

export default Hero
