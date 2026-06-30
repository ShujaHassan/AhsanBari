import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SoundsOfKolachi from './pages/SoundsOfKolachi';
import TranceOfDarvesh from './pages/TranceOfDarvesh';
import Ruzhn from './pages/Ruzhn';
import Academia from './pages/Academia';
import AudioVisual from './pages/AudioVisual';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sounds-of-kolachi" element={<SoundsOfKolachi />} />
          <Route path="/trance-of-darvesh" element={<TranceOfDarvesh />} />
          <Route path="/ruzhn" element={<Ruzhn />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/audio-visual" element={<AudioVisual />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-surface text-foreground min-h-screen flex flex-col font-body">
          <Navbar />

          <main id="main-content" className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
