import { useRef } from 'react';
import { useScroll, useTransform, motion as Motion } from 'framer-motion';

const HERO_IMAGE = `${import.meta.env.BASE_URL}images/hero-bg.jpg`;

export default function HeroBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.72, 0.92]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Cinematic background image with parallax */}
      <Motion.div
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </Motion.div>

      {/* Layered overlays for readability */}
      <Motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Gold accent shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
