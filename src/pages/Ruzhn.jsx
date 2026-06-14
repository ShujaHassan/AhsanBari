import * as Icons from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { artists, ruzhnServices } from '../data/artists';

export default function Ruzhn() {
  return (
    <PageLayout>
      <SectionTitle
        title="Ruzhn"
        subtitle="Music production, artist development & sound identity"
      />

      {/* Intro */}
      <ScrollReveal>
        <p className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-20">
          Ruzhn is a creative music production house producing original music,
          nurturing artists, and delivering high-quality audio for albums, films,
          and live performances.
        </p>
      </ScrollReveal>

      {/* Services cards */}
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32">
        {ruzhnServices.map((service, i) => {
          const Icon = Icons[service.icon] || Icons.Music;
          return (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="p-8 md:p-10 bg-surface-elevated border border-border card-glow h-full">
                <Icon size={28} className="text-accent mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl md:text-2xl text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Featured Artists */}
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Featured Artists
          </h2>
          <p className="mt-3 text-foreground-muted max-w-xl mx-auto">
            Meet the talented musicians shaping the sound of Ruzhn
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
        {artists.map((artist, i) => (
          <ScrollReveal key={artist.id} delay={i * 0.1}>
            <article className="group bg-surface-elevated border border-border overflow-hidden card-glow">
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${artist.gradient} flex items-center justify-center`}
              >
                <span className="font-heading text-5xl text-white/30 group-hover:text-white/50 transition-colors">
                  {artist.initials}
                </span>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-heading text-xl text-foreground">{artist.name}</h3>
                <p className="text-xs text-accent mt-1 tracking-wide uppercase">
                  {artist.role}
                </p>

                <div className="mt-4 flex justify-center gap-4">
                  {[
                    { label: 'Instagram', href: artist.instagram },
                    { label: 'Facebook', href: artist.facebook },
                    { label: 'YouTube', href: artist.youtube },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-xs text-foreground-muted hover:text-accent transition-colors uppercase tracking-wider"
                      aria-label={`${artist.name} on ${social.label}`}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Inquiry CTA */}
      <ScrollReveal>
        <div className="text-center p-12 md:p-16 border border-accent/30 bg-surface-muted">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground">
            Ready to Create?
          </h3>
          <p className="mt-3 text-foreground-muted text-sm max-w-md mx-auto">
            Partner with Ruzhn for production, composition, and artist development.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
