import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-200/60 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs tracking-wide">Choose your sin.</div>
          <nav className="text-[11px] flex items-center gap-6">
            <a href="#" className="hover:text-yellow-100/90">Home</a>
            <a href="#" className="hover:text-yellow-100/90">Shop</a>
            <a href="#" className="hover:text-yellow-100/90">About</a>
            <a href="#" className="hover:text-yellow-100/90">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
