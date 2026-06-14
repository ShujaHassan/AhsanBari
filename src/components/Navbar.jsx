import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, ctaLink } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import { useScrollLock } from '../hooks/useScrollLock';
import Button from './ui/Button';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav border-b border-border' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl tracking-[0.2em] text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Ahsan Bari — Home"
          >
            AHSAN BARI
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                  isActive(path)
                    ? 'text-accent'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 text-foreground-muted hover:text-accent transition-colors rounded-full border border-border hover:border-accent"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Button to={ctaLink.path} size="sm">
              {ctaLink.label}
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground-muted hover:text-accent transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="presentation">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="mobile-menu-enter absolute right-0 top-0 h-full w-[min(320px,85vw)] bg-surface-elevated border-l border-border shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="font-heading text-lg tracking-widest text-foreground">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 text-foreground-muted hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm uppercase tracking-[0.15em] font-medium border-b border-border-subtle transition-colors ${
                    isActive(path)
                      ? 'text-accent'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="px-6 py-8 border-t border-border">
              <Button to={ctaLink.path} className="w-full" size="md" onClick={() => setMenuOpen(false)}>
                {ctaLink.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
