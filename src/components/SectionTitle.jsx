import ScrollReveal from './ui/ScrollReveal';

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <ScrollReveal className={`mb-14 md:mb-20 ${alignClass}`}>
      <div className="accent-line w-16 mb-6 mx-auto" style={align === 'left' ? { marginLeft: 0 } : align === 'right' ? { marginRight: 0, marginLeft: 'auto' } : {}} />

      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide ${
          light ? 'text-[#faf8f5]' : 'text-foreground'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-foreground-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
