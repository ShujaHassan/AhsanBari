import { useState } from 'react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Lightbox from '../components/ui/Lightbox';
import PerformanceCard, { YouTubeEmbed } from '../components/PerformanceCard';
import { performances, performanceCategories } from '../data/performances';

export default function AudioVisual() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePerformance, setActivePerformance] = useState(null);

  const filtered =
    activeCategory === 'all'
      ? performances
      : performances.filter((p) => p.type === activeCategory);

  return (
    <PageLayout fullWidth>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle
          title="Performances"
          subtitle="Live stages, music videos, and visual storytelling from Sounds of Kolachi and Ahsan Bari"
        />

        {/* Category filter */}
        <ScrollReveal>
          <div
            className="flex flex-wrap justify-center gap-2 mb-14"
            role="tablist"
            aria-label="Filter performances by type"
          >
            {performanceCategories.map((cat) => (
              <button
                key={cat.id}
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
                    ({performances.filter((p) => p.type === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Performance grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((perf, i) => (
            <ScrollReveal key={perf.id} delay={i * 0.05}>
              <PerformanceCard
                performance={perf}
                onWatch={setActivePerformance}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-foreground-muted py-20">
            No performances found in this category.
          </p>
        )}
      </div>

      {/* YouTube lightbox player */}
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
    </PageLayout>
  );
}
