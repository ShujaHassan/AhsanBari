import { ExternalLink } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { soundsOfKolachi } from '../data/collectives';

export default function SoundsOfKolachi() {
  return (
    <PageLayout>
      <SectionTitle
        title={soundsOfKolachi.title}
        subtitle={soundsOfKolachi.subtitle}
      />

      {/* Intro */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          {soundsOfKolachi.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-foreground-muted text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>

      {/* Collaboration with Trance of Darvesh */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto mb-20 p-8 md:p-10 border border-accent/30 bg-surface-muted text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Collaborative Project
          </p>
          <p className="text-foreground-muted text-base leading-relaxed">
            {soundsOfKolachi.collaboration}
          </p>
          <div className="mt-6">
            <Button to="/trance-of-darvesh" variant="secondary" size="sm">
              Explore Trance of Darvesh
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Links */}
      <ScrollReveal>
        <div className="text-center p-12 border border-border bg-surface-muted">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground">
            Listen & Follow
          </h3>
          <p className="mt-3 text-foreground-muted text-sm max-w-md mx-auto">
            Stream music and follow Sounds of Kolachi across platforms.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {soundsOfKolachi.links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ExternalLink size={14} className="ml-2" />
              </Button>
            ))}
            <Button to="/audio-visual" variant="ghost">
              Watch Performances
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
