import React from 'react';
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  const projects = [
    "Music Curation & Festivals",
    "Cultural Collaborations",
    "Live Concert Productions",
    "Sound Design Projects",
  ];

  return (
    <section className="bg-black py-32 px-6 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projects & Curation"
          subtitle="Curated performances, collaborations & musical journeys"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-dark2 border border-white/10 p-8 hover:border-gold transition"
            >
              <h3 className="text-xl font-heading text-white">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
