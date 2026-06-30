import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const socialLinks = [
  { icon: Mail, href: 'mailto:info@ahsanbari.com', label: 'Email' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Sounds of Kolachi', path: '/sounds-of-kolachi' },
  { label: 'Trance of Darvesh', path: '/trance-of-darvesh' },
  { label: 'Ruzhn', path: '/ruzhn' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand column */}
            <div>
              <Link
                to="/"
                className="font-heading text-2xl tracking-[0.15em] text-foreground hover:text-accent transition-colors"
              >
                AHSAN BARI
              </Link>
              <p className="mt-4 text-sm text-foreground-muted leading-relaxed max-w-xs">
                Composer, producer, and music educator shaping cultural landscapes
                through Sounds of Kolachi and Ruzhn.
              </p>

              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2.5 border border-border text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300"
                      aria-label={social.label}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    >
                      <SocialIcon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-6">
                Explore
              </h3>
              <ul className="space-y-3">
                {footerLinks.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-6">
                Get in Touch
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                For bookings, collaborations, and academic engagements.
              </p>
              <a
                href="mailto:info@ahsanbari.com"
                className="text-accent hover:text-accent-light transition-colors text-sm font-medium"
              >
                info@ahsanbari.com
              </a>
            </div>
          </div>

          <div className="accent-line w-full mt-14 mb-8" />

          <p className="text-center text-xs text-foreground-muted tracking-wide">
            © {new Date().getFullYear()} Ahsan Bari — Sounds of Kolachi | Ruzhn. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
