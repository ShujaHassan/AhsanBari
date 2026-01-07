import React from 'react';
import SectionTitle from "../components/SectionTitle";

// Dummy media data
const mediaItems = [
  { title: "Performance 1", link: "#" },
  { title: "Music Video 1", link: "#" },
  { title: "Performance 2", link: "#" },
  { title: "Music Video 2", link: "#" },
  { title: "Performance 3", link: "#" },
  { title: "Music Video 3", link: "#" },
];

export default function AudioVisual() {
  return (
    <section className="bg-black py-32 px-6 min-h-screen flex flex-col items-center text-center">
      <SectionTitle
        title="Audio / Visual"
        subtitle="Performances, music videos & visual storytelling"
      />

      <div className="mt-12 grid md:grid-cols-3 gap-8 justify-items-center w-full max-w-7xl">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="aspect-video w-full md:w-64 bg-dark2 border border-white/10 flex flex-col items-center justify-center rounded-lg hover:scale-105 transition-transform"
          >
            <span className="text-gray-300 mb-2">{item.title}</span>
            <a
              href={item.link}
              className="bg-gold text-black px-4 py-2 rounded font-heading hover:scale-105 transition-transform"
            >
              Watch
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
