import { motion as Motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const offsets = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  };

  const offset = offsets[direction] || offsets.up;

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </Motion.div>
  );
}
