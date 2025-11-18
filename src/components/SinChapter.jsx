import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Chapter = ({ name, tagline, lore, notes, colorFrom, colorTo }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative h-[140vh] bg-black text-white overflow-hidden">
      {/* Fog/aura */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${colorFrom} ${colorTo} opacity-10`} />

      <motion.div style={{ opacity }} className="sticky top-0 h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.04),transparent)]" />

        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
            {/* Visual placeholder (bottle/skull) */}
            <motion.div style={{ y }} className="aspect-square w-full bg-black/40 border border-yellow-500/20 rounded-xl" />

            {/* Copy */}
            <div>
              <h3 className="text-5xl md:text-7xl font-serif tracking-wide mb-4">{name}</h3>
              <p className="text-yellow-100/80 text-lg mb-6">{tagline}</p>

              <div className="space-y-1 text-yellow-100/70">
                {lore.map((l, idx) => (
                  <motion.p key={idx} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: idx * 0.1 }}>
                    {l}
                  </motion.p>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-yellow-200/90 tracking-[0.3em] uppercase text-xs mb-3">Notes</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <li className="bg-black/40 border border-yellow-500/20 rounded-lg p-3">
                    <div className="text-xs text-yellow-300/80 mb-1">Top</div>
                    <div className="text-sm text-yellow-100/80">{notes.top}</div>
                  </li>
                  <li className="bg-black/40 border border-yellow-500/20 rounded-lg p-3">
                    <div className="text-xs text-yellow-300/80 mb-1">Heart</div>
                    <div className="text-sm text-yellow-100/80">{notes.heart}</div>
                  </li>
                  <li className="bg-black/40 border border-yellow-500/20 rounded-lg p-3">
                    <div className="text-xs text-yellow-300/80 mb-1">Base</div>
                    <div className="text-sm text-yellow-100/80">{notes.base}</div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button className="px-5 py-2.5 rounded-full border border-yellow-500/40 text-yellow-100/90 hover:border-yellow-400/70 hover:text-yellow-50 transition-colors">
                  Add to Codex
                </button>
                <div className="text-yellow-200/50 text-sm">Bottle rotates as you scroll</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const SinChapter = () => {
  const sins = [
    {
      name: 'PRIDE',
      tagline: 'Stand above. Look down. Never bend.',
      lore: ['Born to be seen.', 'Crowned by your own hand.', 'Never kneel.'],
      notes: { top: 'Bright bergamot', heart: 'Polished leather', base: 'Smoked oud' },
      colorFrom: 'from-yellow-500/20',
      colorTo: 'to-yellow-300/5',
    },
    {
      name: 'ENVY',
      tagline: 'The venom behind your breath.',
      lore: ['Born from longing.', 'Sharpened by obsession.', 'Never satisfied.'],
      notes: { top: 'Bitter citrus slice', heart: 'Poisoned green fig', base: 'Blackened woods, cold musk' },
      colorFrom: 'from-emerald-500/20',
      colorTo: 'to-emerald-300/5',
    },
    {
      name: 'WRATH',
      tagline: 'Your peace was never their problem.',
      lore: ['Quiet is temporary.', 'Impact is permanent.', 'Leave the mark.'],
      notes: { top: 'Cracked pink pepper', heart: 'Burnt resin', base: 'Ironwood and smoke' },
      colorFrom: 'from-red-500/20',
      colorTo: 'to-red-300/5',
    },
    {
      name: 'LUST',
      tagline: 'Desire doesn’t whisper. It devours.',
      lore: ['Heat rising.', 'Skin remembers.', 'Manners dissolve.'],
      notes: { top: 'Crushed berries', heart: 'Velvet rose', base: 'Dark vanilla, ambered musk' },
      colorFrom: 'from-pink-500/20',
      colorTo: 'to-pink-300/5',
    },
    {
      name: 'GREED',
      tagline: 'Everything is never enough.',
      lore: ['One more.', 'And another.', 'And still empty.'],
      notes: { top: 'Sharp aldehydes', heart: 'Gilded iris', base: 'Banked vetiver' },
      colorFrom: 'from-amber-500/20',
      colorTo: 'to-amber-300/5',
    },
    {
      name: 'SLOTH',
      tagline: 'Let the world rot without you.',
      lore: ['Time slows.', 'Edges blur.', 'Stillness wins.'],
      notes: { top: 'Dusty lavender', heart: 'Pale suede', base: 'Grey cedar' },
      colorFrom: 'from-slate-400/20',
      colorTo: 'to-slate-300/5',
    },
    {
      name: 'GLUTTONY',
      tagline: 'Consume until silence.',
      lore: ['Bite after bite.', 'Sugar drips.', 'Hunger remains.'],
      notes: { top: 'Candied citrus', heart: 'Molten caramel', base: 'Roasted tonka' },
      colorFrom: 'from-purple-500/20',
      colorTo: 'to-purple-300/5',
    },
  ]

  return (
    <div>
      {sins.map((s) => (
        <Chapter key={s.name} {...s} />
      ))}
    </div>
  )
}

export default SinChapter
