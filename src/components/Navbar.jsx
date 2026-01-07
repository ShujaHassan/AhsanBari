import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-heading tracking-widest">
          AHSAN BARI
        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <Link to="/about" className="hover:text-gold">About</Link>
          <Link to="/projects" className="hover:text-gold">Projects</Link>
          <Link to="/sounds-of-kolachi" className="hover:text-gold">Kolachi</Link>
          <Link to="/ruzhn" className="hover:text-gold">Ruzhn</Link>
          <Link to="/academia" className="hover:text-gold">Academia</Link>
          <Link to="/audio-visual" className="hover:text-gold">Media</Link>
          <Link to="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
