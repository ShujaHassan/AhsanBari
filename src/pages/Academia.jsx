import { BookOpen, GraduationCap, Users } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

const academicHighlights = [
  {
    icon: GraduationCap,
    title: 'Head of Music Department',
    description:
      'Leading curriculum development and ensemble initiatives at the Arts Council of Pakistan Karachi.',
  },
  {
    icon: Users,
    title: 'Director of Special Programs',
    description:
      'Designing and directing large-scale cultural programming and interdisciplinary projects.',
  },
  {
    icon: BookOpen,
    title: 'Mentorship & Teaching',
    description:
      'Contributing to music education, cultural discourse, and nurturing the next generation of artists.',
  },
];

export default function Academia() {
  return (
    <PageLayout>
      <SectionTitle
        title="Academia & Publications"
        subtitle="Teaching, mentorship & academic contribution"
      />

      <ScrollReveal>
        <p className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-20">
          Ahsan Bari serves as Head of Music Department at Arts Council of Pakistan
          and Director for Special Programs, contributing to music education,
          curriculum development, and cultural discourse.
        </p>
      </ScrollReveal>

      {/* Academic roles */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
        {academicHighlights.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="p-8 bg-surface-elevated border border-border text-center card-glow h-full">
              <item.icon size={32} className="mx-auto text-accent mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Upcoming book */}
      <ScrollReveal>
        <div className="max-w-2xl mx-auto">
          <article className="relative overflow-hidden p-10 md:p-14 border border-accent/40 bg-surface-elevated">
            <div
              className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"
              aria-hidden="true"
            />

            <span className="text-xs uppercase tracking-[0.25em] text-accent">
              Publication
            </span>

            <h3 className="mt-4 font-heading text-3xl md:text-4xl text-foreground">
              Upcoming Book
            </h3>

            <p className="mt-4 text-foreground-muted leading-relaxed">
              A reflective work on music, culture and contemporary sound practices —
              exploring the intersections of tradition, spirituality, and modern
              artistic expression.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 px-5 py-2 border border-accent/30">
              <BookOpen size={16} className="text-accent" />
              <span className="text-sm text-accent font-medium tracking-wide">
                Coming Soon
              </span>
            </div>
          </article>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
