import { Award, BookOpen, Globe, Music } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { timeline } from '../data/timeline';

const skills = [
  { icon: Music, label: 'Composition & Arrangement' },
  { icon: Globe, label: 'Cultural Curation' },
  { icon: BookOpen, label: 'Music Education' },
  { icon: Award, label: 'Live Production' },
];

export default function About() {
  return (
    <PageLayout>
      <SectionTitle
        title="About Ahsan Bari"
        subtitle="Composer, Producer, Educator & Cultural Curator"
      />

      {/* Story section — split layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
        <ScrollReveal>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-muted border border-border overflow-hidden">
              <div className="w-full h-full hero-mesh flex items-center justify-center">
                <span className="font-heading text-8xl text-accent/20 italic">AB</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-6 text-foreground-muted leading-relaxed text-base md:text-lg">
            <p>
              Ahsan Bari is a multidisciplinary artist, music director, and cultural
              curator working across music, theatre, film, and interdisciplinary
              performance. Trained in North Indian classical music and Qawwali, his
              practice is rooted in raga and tala systems while engaging Western
              classical harmony, jazz, and contemporary forms. He is an alumnus of
              Pakistan&apos;s National Academy of Performing Arts (NAPA).
            </p>
            <p>
              He is the founder of Sounds of Kolachi, a pioneering South Asian ensemble
              known for its collaborative and experimental approach, and has worked
              across both academic and commercial platforms, including Coke Studio and
              Pepsi Battle of the Bands.
            </p>
            <p>
              Ahsan currently serves as Head of the Music Department and Director of
              Special Programs at the Arts Council of Pakistan Karachi, where he leads
              curriculum development, ensemble initiatives, and large-scale cultural
              programming.
            </p>
            <p>
              With over 15 years of curatorial and performance experience, his work has
              been presented internationally at venues such as the John F. Kennedy
              Center, Savannah Music Festival, Bharat Rang Mahotsav, Joe&apos;s Pub, and
              leading academic institutions. Informed by philosophy and spirituality,
              Ahsan&apos;s work focuses on building sustainable music ecosystems and
              fostering meaningful artistic exchange across cultures.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Skills grid */}
      <ScrollReveal>
        <h3 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
          Expertise
        </h3>
      </ScrollReveal>

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
