import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      <SectionTitle
        title="Projects & Curation"
        subtitle="Curated performances, collaborations & musical journeys"
      />

      {/* Category filter */}
      <ScrollReveal>
        <div
          className="flex flex-wrap justify-center gap-2 mb-14"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-[#0a0a0a] border-accent'
                  : 'border-border text-foreground-muted hover:border-accent hover:text-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {filtered.map((project, i) => {
          const Icon = Icons[project.icon] || Icons.Music;
          const content = (
            <>
              <div className="flex items-start justify-between">
                <Icon
                  size={32}
                  className="text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-xs text-foreground-muted tracking-widest">
                  0{project.id}
                </span>
              </div>

              <h3 className="mt-6 font-heading text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 pt-6 border-t border-border-subtle">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                  {projectCategories.find((c) => c.id === project.category)?.label}
                </span>
              </div>
            </>
          );

          return (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              {project.path ? (
                <Link
                  to={project.path}
                  className="group block p-8 md:p-10 bg-surface-elevated border border-border card-glow h-full"
                >
                  {content}
                </Link>
              ) : (
                <article className="group p-8 md:p-10 bg-surface-elevated border border-border card-glow h-full">
                  {content}
                </article>
              )}
            </ScrollReveal>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground-muted py-16">
          No projects found in this category.
        </p>
      )}
    </PageLayout>
  );
}
