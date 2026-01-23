import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SoundsOfKolachi from "./pages/SoundsOfKolachi";
import Ruzhn from "./pages/Ruzhn";
import Academia from "./pages/Academia";
import AudioVisual from "./pages/AudioVisual";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-dark text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sounds-of-kolachi" element={<SoundsOfKolachi />} />
            <Route path="/ruzhn" element={<Ruzhn />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/audio-visual" element={<AudioVisual />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
