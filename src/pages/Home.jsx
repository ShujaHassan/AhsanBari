import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Play, Music, ChevronRight } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';
import PerformanceCard, { YouTubeEmbed } from '../components/PerformanceCard';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import Lightbox from '../components/ui/Lightbox';
import { projects } from '../data/projects';
import { stats } from '../data/stats';
import { testimonials } from '../data/testimonials';
import { featuredPerformances } from '../data/performances';

export default function Home() {
  const [activePerformance, setActivePerformance] = useState(null);

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-28 md:py-32">
          <p className="animate-fade-up text-xs uppercase tracking-[0.35em] text-accent font-medium mb-6">
            Composer &bull; Producer &bull; Music Educator
          </p>

          <h1 className="animate-fade-up animate-fade-up-delay-1 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-wide text-white leading-[1.05] drop-shadow-lg">
            Ahsan
            <br />
            <span className="italic text-accent">Bari</span>
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-2 mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Multidisciplinary artist and cultural curator bridging South Asian
            traditions with contemporary global sound.
          </p>

          <p className="animate-fade-up animate-fade-up-delay-2 mt-3 text-sm uppercase tracking-[0.25em] text-accent/90">
            Sounds of Kolachi — Ruzhn
          </p>

          <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <Button to="/sounds-of-kolachi" size="lg">
              <Music size={16} className="mr-2" />
              Listen Music
            </Button>
            <Button to="/audio-visual" variant="secondary" size="lg">
              <Play size={16} className="mr-2" />
              Watch Performances
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-up animate-fade-up-delay-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-pulse-slow" />
        </div>
      </section>

      <div>
        {/* ─── Stats Section ──────────────────────────────────── */}
        <section className="py-20 md:py-28 border-y border-border bg-surface-muted section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1}>
                  <div className="text-center group">
                    <p className="font-heading text-4xl md:text-5xl text-accent font-medium transition-transform duration-500 group-hover:scale-105">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground-muted">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Featured Performances ──────────────────────────── */}
        <section className="py-24 md:py-32 section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionTitle
              title="Live Performances"
              subtitle="Experience Sounds of Kolachi on world stages — from the Kennedy Center to Joe's Pub"
            />

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {featuredPerformances.map((perf, i) => (
                <ScrollReveal key={perf.id} delay={i * 0.08}>
                  <PerformanceCard
                    performance={perf}
                    onWatch={setActivePerformance}
                    index={i}
                    variant={i === 0 ? 'featured' : 'grid'}
                  />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-12 flex justify-center">
                <Button to="/audio-visual" variant="ghost">
                  View All Performances
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Featured Projects ──────────────────────────────── */}
        <section className="py-24 md:py-32 bg-surface-muted section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionTitle
              title="Featured Work"
              subtitle="Curated performances, collaborations, and musical journeys across cultures"
            />

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.1}>
                  <Link
                    to="/projects"
                    className="group block p-8 md:p-10 bg-surface-elevated border border-border card-glow"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-accent">
                      0{project.id}
                    </span>
                    <h3 className="mt-4 font-heading text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                      {project.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      Explore <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button to="/projects" variant="ghost">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ───────────────────────────────────── */}
        <section className="py-24 md:py-32 section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionTitle
              title="Recognition"
              subtitle="Voices from collaborators and cultural institutions"
            />

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <blockquote className="p-8 bg-surface-elevated border border-border h-full flex flex-col card-glow">
                    <p className="text-foreground-muted leading-relaxed italic flex-1">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="mt-8 pt-6 border-t border-border-subtle">
                      <cite className="not-italic">
                        <p className="text-sm font-medium text-foreground">
                          {item.author}
                        </p>
                        <p className="text-xs text-accent mt-1 tracking-wide">
                          {item.venue}
                        </p>
                      </cite>
                    </footer>
                  </blockquote>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Banner ─────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-surface-muted section-fade">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden p-12 md:p-20 bg-surface-elevated border border-border text-center">
                <div
                  className="absolute inset-0 hero-mesh opacity-50"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <h2 className="font-heading text-3xl md:text-5xl text-foreground">
                    Let&apos;s Create Something
                    <span className="italic text-accent"> Extraordinary</span>
                  </h2>
                  <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
                    Available for performances, collaborations, and academic
                    engagements worldwide.
                  </p>
                  <div className="mt-8">
                    <Button to="/contact" size="lg">
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* Performance lightbox */}
      <Lightbox
        isOpen={!!activePerformance}
        onClose={() => setActivePerformance(null)}
        title={activePerformance?.title}
        wide
      >
        {activePerformance && (
          <YouTubeEmbed
            videoId={activePerformance.videoId}
            startTime={activePerformance.startTime}
            title={activePerformance.title}
          />
        )}
      </Lightbox>
    </>
  );
}
