import React from 'react'
import Hero from './components/Hero'
import SinsIndex from './components/SinsIndex'
import SinChapter from './components/SinChapter'
import Oblivion from './components/Oblivion'
import House from './components/House'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Opening: sigil + Spline hero */}
      <Hero />

      {/* Seven Sins horizontal index */}
      <SinsIndex />

      {/* Immersive sin chapters */}
      <SinChapter />

      {/* Oblivion */}
      <Oblivion />

      {/* House of Elanor */}
      <House />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
