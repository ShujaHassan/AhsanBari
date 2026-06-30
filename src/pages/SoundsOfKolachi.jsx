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

      {/* Team */}
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Team
          </h2>
          <p className="mt-3 text-foreground-muted max-w-xl mx-auto">
            The artists shaping the sound of Sounds of Kolachi
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
        {soundsOfKolachi.team.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 0.1}>
            <article className="p-8 bg-surface-elevated border border-border card-glow text-center h-full">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-amber-900/60 to-stone-900/80 flex items-center justify-center">
                <span className="font-heading text-xl text-white/50">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
              <p className="text-xs text-accent mt-2 tracking-wide uppercase">
                {member.role}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>

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
