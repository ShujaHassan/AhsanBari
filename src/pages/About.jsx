import { Award, BookOpen, Download, Globe, Music } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { timeline } from '../data/timeline';

const profileAreas = [
  'Composition',
  'Music Production',
  'Music Direction',
  'Artist Development',
  'Performance',
  'Curation',
  'Music Education',
  'Curriculum Development',
  'Mentorship',
  'Cultural Programming',
  'Institutional Development',
  'Cross-cultural Collaboration',
];

const skills = [
  { icon: Music, label: 'Composition & Production' },
  { icon: Globe, label: 'Curation & Cultural Exchange' },
  { icon: BookOpen, label: 'Music Education' },
  { icon: Award, label: 'Institutional Practice' },
];

const ABOUT_IMAGE = `${import.meta.env.BASE_URL}images/about.jpg`;
const CV_PATH = `${import.meta.env.BASE_URL}Ahsan-Bari-CV.pdf`;

export default function About() {
  return (
    <PageLayout>
      <SectionTitle
        title="About"
        subtitle="Biography · Professional Profile · CV"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
        <ScrollReveal>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-muted border border-border overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Ahsan Bari — composer, producer, educator and curator"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-6 text-foreground-muted leading-relaxed text-base md:text-lg">
            <p>
              Ahsan Bari is a Pakistani composer, producer, educator and curator whose
              practice connects music-making with cultural programming and education.
            </p>
            <p>
              His musical journey developed through Pakistan&apos;s underground music
              scene and later through deeper engagement with South Asian classical
              music, composition and contemporary musical practice.
            </p>
            <p>
              He founded Sounds of Kolachi in Karachi in 2014, developing the ensemble
              into a distinctive contemporary project combining South Asian classical
              traditions, Western harmony, improvisation and modern ensemble
              composition.
            </p>
            <p>
              Alongside composition and performance, Bari has developed an extensive
              practice in music production and artist development across independent
              music, film, television, theatre, commercial collaborations and emerging
              artist platforms.
            </p>
            <p>
              His curatorial work includes Southasia Ensemble, Mukalma, PAS Awards and
              Sound Spirit, while his academic practice encompasses music education,
              curriculum development, mentorship, workshops, masterclasses, student
              development and institutional programming.
            </p>
            <p>
              Across these fields, Bari&apos;s practice is centred on building musical
              ecosystems: creating music, developing artists, building platforms,
              teaching musicians, developing audiences and creating spaces for cultural
              exchange.
            </p>

            <div className="pt-4">
              <Button href={CV_PATH} download size="lg">
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Professional Profile */}
      <ScrollReveal>
        <h3 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
          Professional Profile
        </h3>
        <p className="text-center text-foreground-muted mb-12 max-w-lg mx-auto">
          Areas of practice across music, education and cultural programming.
        </p>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-3 mb-24 md:mb-32 max-w-4xl mx-auto">
        {profileAreas.map((area, i) => (
          <ScrollReveal key={area} delay={i * 0.03}>
            <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.12em] border border-border text-foreground-muted">
              {area}
            </span>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
        {skills.map((skill, i) => (
          <ScrollReveal key={skill.label} delay={i * 0.08}>
            <div className="p-8 bg-surface-elevated border border-border text-center card-glow">
              <skill.icon size={28} className="mx-auto text-accent mb-4" strokeWidth={1.5} />
              <p className="text-sm font-medium text-foreground tracking-wide">
                {skill.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Timeline */}
      <ScrollReveal>
        <h3 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
          Journey
        </h3>
        <p className="text-center text-foreground-muted mb-14 max-w-lg mx-auto">
          A path shaped by tradition, innovation, and global artistic exchange.
        </p>
      </ScrollReveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden="true" />

        {timeline.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div
                className={`md:w-1/2 pl-12 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  {item.year}
                </span>
                <h4 className="mt-2 font-heading text-xl text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div
                className="absolute left-4 md:left-1/2 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-accent ring-4 ring-surface"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </PageLayout>
  );
}
