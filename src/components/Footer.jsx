import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Ahsan Bari — Sounds of Kolachi | Ruzhn
    </footer>
  );
}
