import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { featuredProjects } from '../data/projects';

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-28 md:py-32">
          <p className="animate-fade-up text-xs uppercase tracking-[0.35em] text-accent font-medium mb-6">
            Composer &bull; Producer &bull; Educator &bull; Curator
          </p>

          <h1 className="animate-fade-up animate-fade-up-delay-1 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-wide text-white leading-[1.05] drop-shadow-lg">
            Ahsan
            <br />
            <span className="italic text-accent">Bari</span>
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-2 mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Artist, curator, and educational leader exploring new frameworks for South Asian artistic expression, pedagogy, and cultural exchange.
          </p>

          <p className="animate-fade-up animate-fade-up-delay-2 mt-3 text-sm uppercase tracking-[0.25em] text-accent/90">
            Sounds of Kolachi — Ruzhn
          </p>

          <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <Button to="/work" size="lg">
              Selected Work
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              About
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-up animate-fade-up-delay-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-pulse-slow" />
        </div>
      </section>

      <div>
        {/* ─── Selected Work ──────────────────────────────────── */}
        <section className="py-24 md:py-32 section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionTitle
              title="Selected Work"
              subtitle="A curated selection of major projects across composition, production, curation, and cultural exchange"
            />

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project, i) => {
                const Wrapper = project.path
                  ? Link
                  : project.href
                    ? 'a'
                    : 'article';
                const wrapperProps = project.path
                  ? { to: project.path }
                  : project.href
                    ? {
                        href: project.href,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {};

                return (
                  <ScrollReveal key={project.id} delay={i * 0.06}>
                    <Wrapper
                      {...wrapperProps}
                      className="group block p-8 md:p-10 bg-surface-elevated border border-border card-glow h-full"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-accent">
                          {project.highlight || String(project.id).padStart(2, '0')}
                        </span>
                        {project.href && (
                          <ExternalLink
                            size={14}
                            className="text-foreground-muted opacity-60"
                          />
                        )}
                      </div>
                      <h3 className="mt-4 font-heading text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.role && (
                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-accent/80">
                          {project.role}
                        </p>
                      )}
                      <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                        {project.description}
                      </p>
                      {(project.path || project.href) && (
                        <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                          Explore <ArrowRight size={14} />
                        </span>
                      )}
                    </Wrapper>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Button to="/work" variant="ghost">
                View Complete Archive
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Current Practice ───────────────────────────────── */}
        <section className="py-24 md:py-32 bg-surface-muted section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <SectionTitle
                  title="Current Practice"
                  subtitle="Composition → Performance → Production → Artist Development → Curation → Education → Institution Building → Cultural Exchange"
                />
                <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
                  Ahsan Bari creates music, develops artists, builds platforms,
                  teaches musicians and creates spaces for cultural exchange.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button to="/academia" variant="secondary">
                    Academia
                  </Button>
                  <Button to="/contact" size="lg">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
