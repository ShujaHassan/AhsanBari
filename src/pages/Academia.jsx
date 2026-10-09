import { BookOpen, GraduationCap, Users, Globe2 } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import {
  academiaIntro,
  artsCouncil,
  musicProgramme,
  teachingMentorship,
  academicExchange,
  soundSpiritNote,
} from '../data/academia';

const roleCards = [
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
      'Music education, artist mentorship, workshops, masterclasses and emerging artist development.',
  },
];

export default function Academia() {
  return (
    <PageLayout>
      <SectionTitle
        title="Academia"
        subtitle="Academic Leadership · Music Education · Teaching & Mentorship · Institutional Practice"
      />

      <ScrollReveal>
        <p className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-20">
          {academiaIntro}
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24">
        {roleCards.map((item, i) => (
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

      {/* Arts Council */}
      <ScrollReveal>
        <div className="mb-20 p-8 md:p-12 border border-border bg-surface-elevated">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            {artsCouncil.subtitle}
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            {artsCouncil.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {artsCouncil.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-xs uppercase tracking-[0.12em] border border-border text-foreground-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Music Programme */}
      <div className="grid lg:grid-cols-2 gap-8 mb-20">
        <ScrollReveal>
          <div className="p-8 md:p-10 border border-border bg-surface-muted h-full">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
              {musicProgramme.title}
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-8">
              {musicProgramme.subtitle}
            </p>
            <ul className="space-y-2">
              {musicProgramme.areas.map((area) => (
                <li
                  key={area}
                  className="text-sm text-foreground-muted border-b border-border-subtle py-2"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="p-8 md:p-10 border border-border bg-surface-muted h-full">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              {teachingMentorship.title}
            </h3>
            <ul className="space-y-2">
              {teachingMentorship.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-foreground-muted border-b border-border-subtle py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Exchange */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Globe2 size={22} className="text-accent" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center">
              {academicExchange.title}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {academicExchange.items.map((item) => (
              <div
                key={item}
                className="p-5 border border-border bg-surface-elevated text-sm text-foreground-muted text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Sound Spirit */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto mb-20 p-8 md:p-10 border border-accent/30 bg-surface-muted text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Education · Emerging Artists · Performance
          </p>
          <h3 className="font-heading text-2xl md:text-3xl text-foreground">
            {soundSpiritNote.title}
          </h3>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            {soundSpiritNote.description}
          </p>
        </div>
      </ScrollReveal>

      {/* Upcoming book — keep existing site content */}
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
