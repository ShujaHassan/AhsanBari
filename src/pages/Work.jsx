import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { projects, projectCategories } from '../data/projects';

const categoryCopy = {
  all: 'Complete professional archive — music, production, curation and commissions.',
  music:
    'Work as composer, musician, performer and music director — ensembles, albums, solo releases and collaborative recordings.',
  production:
    'Music production, artist production, arrangement, music direction, album and live production, and artist development.',
  curation:
    'Platforms for collaboration, dialogue and cultural exchange — ensembles, series, awards and international programmes.',
  commissions:
    'Commissioned screen, stage, immersive, brand and cross-cultural work across film, theatre and media.',
};

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory]
  );

  return (
    <PageLayout>
      <SectionTitle
        title="Work"
        subtitle="Music · Production · Curation · Commissions"
      />

      <ScrollReveal>
        <p className="text-center text-foreground-muted text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {categoryCopy[activeCategory]}
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div
          className="flex flex-wrap justify-center gap-2 mb-14"
          role="tablist"
          aria-label="Filter work by category"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-[#0a0a0a] border-accent shadow-sm shadow-accent/20'
                  : 'border-border text-foreground-muted hover:border-accent hover:text-accent'
              }`}
            >
              {cat.label}
              {cat.id !== 'all' && (
                <span className="ml-2 opacity-60">
                  ({projects.filter((p) => p.categories.includes(cat.id)).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {filtered.map((project, i) => {
          const Icon = Icons[project.icon] || Icons.Music;
          const content = (
            <>
              <div className="flex items-start justify-between gap-4">
                <Icon
                  size={28}
                  className="text-accent shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="text-right">
                  <span className="block text-xs text-foreground-muted tracking-widest">
                    {project.period}
                  </span>
                  {project.status === 'current' && (
                    <span className="mt-1 inline-block text-[10px] uppercase tracking-[0.2em] text-accent">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <h3 className="mt-5 font-heading text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                {project.title}
                {project.href && (
                  <ExternalLink
                    size={15}
                    className="inline-block ml-2 align-middle opacity-50"
                  />
                )}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-accent">
                {project.role}
              </p>

              <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
                {project.overview}
              </p>

              {project.background && (
                <p className="mt-3 text-sm text-foreground-muted/80 leading-relaxed">
                  {project.background}
                </p>
              )}

              <div className="mt-6 pt-5 border-t border-border-subtle flex flex-wrap gap-2">
                {project.categories.map((catId) => (
                  <span
                    key={catId}
                    className="text-[10px] uppercase tracking-[0.2em] text-accent"
                  >
                    {projectCategories.find((c) => c.id === catId)?.label}
                  </span>
                ))}
                {project.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] text-foreground-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          const className =
            'group block p-8 md:p-10 bg-surface-elevated border border-border card-glow h-full';

          return (
            <ScrollReveal key={project.id} delay={Math.min(i * 0.04, 0.4)}>
              {project.path ? (
                <Link to={project.path} className={className}>
                  {content}
                </Link>
              ) : project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <article className={className}>{content}</article>
              )}
            </ScrollReveal>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground-muted py-20">
          No projects in this category yet.
        </p>
      )}
    </PageLayout>
  );
}
