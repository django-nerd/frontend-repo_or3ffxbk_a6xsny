import React from 'react'
import { motion } from 'framer-motion'

const House = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen', filter: 'grayscale(1) contrast(1.2) brightness(0.7)' }} />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="border-t border-b border-yellow-500/30 py-12">
          <p className="text-yellow-200/80 text-lg md:text-xl leading-relaxed">
            We do not create fragrances. We carve obsessions. Each bottle is a blade — wielded, not worn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            'Scent is story.',
            'Sin is truth.',
            'Elanor is the codex that binds them both.',
          ].map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/50 border border-yellow-500/20 rounded-xl p-6">
              <p className="text-yellow-100/80">{line}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <button className="px-5 py-2.5 rounded-full border border-yellow-500/40 text-yellow-100/90 hover:border-yellow-400/70 hover:text-yellow-50 transition-colors">Shop The Codex</button>
          <button className="px-5 py-2.5 rounded-full border border-yellow-500/40 text-yellow-100/90 hover:border-yellow-400/70 hover:text-yellow-50 transition-colors">Begin With Envy</button>
        </div>

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      </div>
    </section>
  )
}

export default House
