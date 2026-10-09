import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { projects, projectCategories } from '../data/projects';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <PageLayout>
      <SectionTitle
        title="Work"
        subtitle="Music · Production · Curation · Commissions — a complete archive of practice"
      />

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
                  size={32}
                  className="text-accent shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-xs text-foreground-muted tracking-widest">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 font-heading text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                {project.title}
                {project.href && (
                  <ExternalLink
                    size={16}
                    className="inline-block ml-2 align-middle opacity-60"
                  />
                )}
              </h3>

              {project.role && (
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-accent">
                  {project.role}
                </p>
              )}

              <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 pt-6 border-t border-border-subtle flex flex-wrap gap-2">
                {project.categories.map((catId) => (
                  <span
                    key={catId}
                    className="text-[10px] uppercase tracking-[0.2em] text-accent"
                  >
                    {projectCategories.find((c) => c.id === catId)?.label}
                  </span>
                ))}
              </div>
            </>
          );

          const className =
            'group block p-8 md:p-10 bg-surface-elevated border border-border card-glow h-full';

          return (
            <ScrollReveal key={project.id} delay={i * 0.05}>
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
          No projects found in this category.
        </p>
      )}
    </PageLayout>
  );
}
