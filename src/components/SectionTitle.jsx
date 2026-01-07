import React from 'react';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-heading tracking-wide">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
