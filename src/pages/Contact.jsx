import React from 'react';
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section className="bg-black py-32 px-6 min-h-screen flex flex-col items-center text-center">
      <SectionTitle
        title="Contact & Collaboration"
        subtitle="Bookings, collaborations & inquiries"
      />

      <p className="text-gray-300 mb-8 max-w-2xl">
        For collaborations, performances, or academic engagements, reach out via email.  
        We are always excited to connect with talented artists and creative partners.
      </p>

      <a
        href="mailto:info@ahsanbari.com"
        className="inline-block px-8 py-4 border border-gold text-gold font-heading rounded-lg hover:bg-gold hover:text-black transition"
      >
        info@ahsanbari.com
      </a>
    </section>
  );
}
