import React from 'react'
import { motion } from 'framer-motion'

const sins = [
  { name: 'PRIDE', tagline: 'Stand above. Look down. Never bend.', color: 'from-yellow-500/20 to-yellow-300/5' },
  { name: 'ENVY', tagline: 'Want it? Take it. Break whoever stands in the way.', color: 'from-emerald-500/20 to-emerald-300/5' },
  { name: 'WRATH', tagline: 'Your peace was never their problem.', color: 'from-red-500/20 to-red-300/5' },
  { name: 'LUST', tagline: 'Desire doesn’t whisper. It devours.', color: 'from-pink-500/20 to-pink-300/5' },
  { name: 'GREED', tagline: 'Everything is never enough.', color: 'from-amber-500/20 to-amber-300/5' },
  { name: 'SLOTH', tagline: 'Let the world rot without you.', color: 'from-slate-400/20 to-slate-300/5' },
  { name: 'GLUTTONY', tagline: 'Consume until silence.', color: 'from-purple-500/20 to-purple-300/5' },
]

const SinsIndex = () => {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-yellow-200/80 tracking-[0.35em] uppercase mb-8">The Seven Sins</h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="w-full overflow-x-auto overflow-y-hidden">
        <div className="flex gap-6 px-6 pb-6 min-w-max">
          {sins.map((s, i) => (
            <motion.div
              key={s.name}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/5] bg-gradient-to-b rounded-xl border border-yellow-500/20 p-5"
            >
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b ${s.color}`} />

              {/* Symbol placeholder */}
              <div className="relative z-10 flex items-center justify-center h-24 mb-4">
                <div className="w-12 h-12 rounded-full border border-yellow-500/40 group-hover:border-yellow-400/70 transition-colors" />
              </div>

              {/* Skull/bottle thumbnail placeholder */}
              <div className="relative z-10 bg-black/40 border border-yellow-500/20 rounded-lg h-40 mb-4" />

              <div className="relative z-10">
                <h3 className="text-3xl font-serif tracking-wide mb-2 group-hover:tracking-wider transition-all">
                  {s.name}
                </h3>
                <p className="text-yellow-100/70 text-sm">{s.tagline}</p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-1 ring-yellow-400/50" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center text-yellow-200/60 text-sm">
        Scroll down to enter the codex.
      </div>
    </section>
  )
}

export default SinsIndex
