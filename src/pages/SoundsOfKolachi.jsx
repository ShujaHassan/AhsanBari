import React from 'react';
import SectionTitle from "../components/SectionTitle";

export default function SoundsOfKolachi() {
  const albums = [
    { title: "Album 1", link: "#" },
    { title: "Album 2", link: "#" },
    { title: "Album 3", link: "#" },
  ];

  return (
    <section className="bg-black py-32 px-6 min-h-screen flex flex-col items-center text-center">
      <SectionTitle
        title="Sounds of Kolachi"
        subtitle="A band rooted in tradition, powered by contemporary sound"
      />

      <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
        Sounds of Kolachi is a contemporary Pakistani band founded by Ahsan Bari,
        blending eastern musical traditions with modern arrangements and global
        soundscapes.
      </p>

      <div className="mt-20 grid md:grid-cols-3 gap-8 justify-items-center">
        {albums.map((album, index) => (
          <div
            key={index}
            className="h-48 w-64 bg-black/50 border border-white/10 flex flex-col items-center justify-center p-4 rounded-lg hover:bg-dark2 transition"
          >
            <span className="text-gray-200 mb-4">{album.title}</span>
            <a
              href={album.link}
              className="bg-gold text-black px-4 py-2 rounded font-heading hover:scale-105 transition-transform"
            >
              Listen
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
