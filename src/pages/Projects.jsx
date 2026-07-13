import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { projects, projectCategories } from '../data/projects';

// Set to true to show All / Ensembles / Curation filter tabs again
const SHOW_CATEGORY_FILTER = false;

export default function Projects() {
  return (
    <PageLayout>
      <SectionTitle
        title="Projects & Curation"
        subtitle="Curated performances, collaborations & musical journeys"
      />

      {SHOW_CATEGORY_FILTER && (
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
                className="px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium border border-border text-foreground-muted"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Project grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => {
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
    </PageLayout>
  );
}
