import React from 'react';
import SectionTitle from "../components/SectionTitle";

export default function Academia() {
  return (
    <section className="bg-black py-32 px-6 min-h-screen flex flex-col items-center text-center">
      <SectionTitle
        title="Academia & Publications"
        subtitle="Teaching, mentorship & academic contribution"
      />

      <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
        Ahsan Bari serves as Head of Music Department at Arts Council of Pakistan
        and Director for Special Programs, contributing to music education,
        curriculum development, and cultural discourse.
      </p>

      {/* Upcoming Book Card */}
      <div className="mt-12 p-6 border border-gold bg-dark2 rounded-lg max-w-md text-center">
        <h3 className="font-heading text-xl mb-2 text-white">Upcoming Book</h3>
        <p className="text-gray-400">
          A reflective work on music, culture and contemporary sound practices.
        </p>
        <span className="text-gold text-sm mt-2 inline-block">Coming Soon</span>
      </div>
    </section>
  );
}
