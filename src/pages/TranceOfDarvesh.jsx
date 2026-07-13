import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { tranceOfDarvesh } from '../data/collectives';

export default function TranceOfDarvesh() {
  return (
    <PageLayout>
      <SectionTitle
        title={tranceOfDarvesh.title}
        subtitle={tranceOfDarvesh.subtitle}
      />

      {/* Intro */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          {tranceOfDarvesh.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-foreground-muted text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>

      {/* Collaboration note */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto mb-20 p-8 md:p-10 border border-accent/30 bg-surface-muted text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            In Collaboration With
          </p>
          <p className="font-heading text-2xl md:text-3xl text-foreground">
            Global Synk
          </p>
          <p className="mt-4 text-foreground-muted text-base leading-relaxed">
            Exploring the powerful convergence of Sufi philosophy, Electronic Dance
            Music (EDM), and Rock &amp; Roll.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center p-12 border border-border bg-surface-muted">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground">
            Discover More
          </h3>
          <p className="mt-3 text-foreground-muted text-sm max-w-md mx-auto">
            Explore more projects and collaborative work from Ahsan Bari.
          </p>
          <div className="mt-6">
            <Button to="/projects" variant="secondary">
              All Projects
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
