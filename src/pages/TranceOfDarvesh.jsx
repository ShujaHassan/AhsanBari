import { Link } from 'react-router-dom';
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
        <div className="max-w-3xl mx-auto mb-20 p-8 md:p-10 border border-border bg-surface-muted text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            In Collaboration With
          </p>
          <p className="text-foreground-muted text-base leading-relaxed">
            Trance of Darvesh is a collaborative project with{' '}
            <Link
              to="/sounds-of-kolachi"
              className="text-accent hover:text-accent-light transition-colors"
            >
              Sounds of Kolachi
            </Link>
            , extending the collective&apos;s exploration of Sufi spirituality and
            contemporary South Asian musical expression.
          </p>
        </div>
      </ScrollReveal>

      {/* Team */}
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Team
          </h2>
          <p className="mt-3 text-foreground-muted max-w-xl mx-auto">
            The artists shaping the sound of Trance of Darvesh
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
        {tranceOfDarvesh.team.map((member, i) => (
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

      {/* Collaborators */}
      <ScrollReveal>
        <div className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-3">
            Collaborators
          </h2>
          <p className="text-center text-foreground-muted text-sm max-w-xl mx-auto mb-10">
            Musicians, composers, vocalists, and artists from across Pakistan and
            around the world
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl mx-auto">
            {tranceOfDarvesh.collaborators.map((name) => (
              <span
                key={name}
                className="text-sm text-foreground-muted hover:text-accent transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center p-12 border border-border bg-surface-muted">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground">
            Discover More
          </h3>
          <p className="mt-3 text-foreground-muted text-sm max-w-md mx-auto">
            Explore the wider world of Sounds of Kolachi and their collaborative
            projects.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button to="/sounds-of-kolachi" variant="secondary">
              Sounds of Kolachi
            </Button>
            <Button to="/projects" variant="ghost">
              All Projects
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
