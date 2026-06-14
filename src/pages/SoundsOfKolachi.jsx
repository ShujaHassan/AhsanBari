import { Disc3, ExternalLink } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { albums } from '../data/albums';

export default function SoundsOfKolachi() {
  return (
    <PageLayout>
      <SectionTitle
        title="Sounds of Kolachi"
        subtitle="A band rooted in tradition, powered by contemporary sound"
      />

      {/* Intro */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
            Sounds of Kolachi is a contemporary Pakistani band founded by Ahsan Bari,
            blending eastern musical traditions with modern arrangements and global
            soundscapes.
          </p>
        </div>
      </ScrollReveal>

      {/* Albums — masonry-style grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {albums.map((album, i) => (
          <ScrollReveal key={album.id} delay={i * 0.1}>
            <article className="group relative overflow-hidden border border-border card-glow">
              <div
                className={`aspect-square bg-gradient-to-br ${album.gradient} flex items-center justify-center`}
              >
                <Disc3
                  size={48}
                  className="text-white/20 group-hover:text-accent/40 transition-colors duration-500"
                  strokeWidth={1}
                />
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a
                  href={album.link}
                  className="px-6 py-3 bg-accent text-[#0a0a0a] text-xs uppercase tracking-widest font-semibold hover:bg-accent-light transition-colors"
                  aria-label={`Listen to ${album.title}`}
                >
                  Listen
                </a>
              </div>

              <div className="p-6 bg-surface-elevated">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">
                      {album.title}
                    </h3>
                    <p className="text-xs text-foreground-muted mt-1">{album.year}</p>
                  </div>
                  <a
                    href={album.link}
                    className="text-foreground-muted hover:text-accent transition-colors"
                    aria-label={`Open ${album.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal>
        <div className="mt-20 text-center p-12 border border-border bg-surface-muted">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground">
            Experience the Sound
          </h3>
          <p className="mt-3 text-foreground-muted text-sm max-w-md mx-auto">
            Discover the full discography and upcoming releases from Sounds of Kolachi.
          </p>
          <div className="mt-6">
            <Button href="#" variant="secondary">
              Stream on Spotify
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
