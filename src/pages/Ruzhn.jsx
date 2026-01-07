import React from 'react';
import SectionTitle from "../components/SectionTitle";

// Dummy artists data
const artists = [
  {
    name: "Ali Khan",
    image: "/images/artist1.jpg",
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  {
    name: "Sara Ahmed",
    image: "/images/artist2.jpg",
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  {
    name: "Omar Malik",
    image: "/images/artist3.jpg",
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
];

export default function Ruzhn() {
  return (
    <section className="bg-black py-32 px-6 min-h-screen flex flex-col items-center text-center">
      <SectionTitle
        title="Ruzhn"
        subtitle="Music production, artist development & sound identity"
      />

      <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
        Ruzhn is a creative music production house producing original music,
        nurturing artists, and delivering high-quality audio for albums,
        films, and live performances.
      </p>

      <ul className="mt-8 space-y-3 text-gray-400">
        <li>• Artist Recording & Production</li>
        <li>• Original Composition</li>
        <li>• Sound Design & Mixing</li>
        <li>• Artist Development</li>
      </ul>

      {/* NEW Heading for Artists */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-white">
          Our Featured Artists
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          Meet the talented musicians shaping the sound of Ruzhn
        </p>
      </div>

      {/* Artists Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 justify-items-center">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-dark2 rounded-lg overflow-hidden w-64 hover:scale-105 transition-transform"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-white font-heading text-lg mb-2">{artist.name}</h3>
              <div className="flex justify-center space-x-3">
                <a href={artist.instagram} className="text-gray-400 hover:text-gold">
                  Instagram
                </a>
                <a href={artist.facebook} className="text-gray-400 hover:text-gold">
                  Facebook
                </a>
                <a href={artist.youtube} className="text-gray-400 hover:text-gold">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
