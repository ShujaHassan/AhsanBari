import React from 'react';
import bgImage from "../assets/images/image.jpg";


export default function Home() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>

      <div className="relative z-10 px-6 pl-[10%] max-w-6xl">

        <h1 className="text-6xl md:text-7xl font-heading tracking-widest">
          AHSAN BARI
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Composer • Producer • Music Educator
        </p>

        <p className="mt-2 text-gold uppercase tracking-[0.3em]">
          Sounds of Kolachi — Ruzhn
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-3 bg-gold text-black font-semibold">
            Listen Music
          </button>
          <button className="px-8 py-3 border border-gold text-gold">
            Watch Performances
          </button>
        </div>
      </div>
    </section>
  );
}
