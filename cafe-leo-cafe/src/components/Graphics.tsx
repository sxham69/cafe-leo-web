import { motion } from 'framer-motion';

/** Faint football-pitch markings used as a background texture. */
export function PitchLines({ className = '', animate = false }: { className?: string; animate?: boolean }) {
  const draw = animate
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 2.4, ease: 'easeInOut' as const },
      }
    : {};
  return (
    <svg viewBox="0 0 600 400" fill="none" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <g stroke="currentColor" strokeWidth="1.2">
        <motion.rect x="20" y="20" width="560" height="360" rx="2" {...draw} />
        <motion.path d="M300 20v360" {...draw} />
        <motion.circle cx="300" cy="200" r="58" {...draw} />
        <motion.path d="M20 120h90v160H20M580 120h-90v160h90M20 165h34v70H20M580 165h-34v70h34" {...draw} />
        <motion.path d="M110 160a46 46 0 0 1 0 80M490 160a46 46 0 0 0 0 80" {...draw} />
      </g>
      <circle cx="300" cy="200" r="3" fill="currentColor" />
    </svg>
  );
}

/** Minimal football outline used as a slow, floating accent. */
export function BallIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="2" />
      <path d="M32 21l10 7.3-3.8 11.8H25.8L22 28.3z" fill="currentColor" />
      <path
        d="M32 21V8M42 28.3l12-4M38.2 40.1l7.6 10.3M25.8 40.1l-7.6 10.3M22 28.3l-12-4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

/** Three horizontal bands inspired by Argentine sky-blue and white. */
export function StripeAccent({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`stripe-band block rounded-full ${className}`} />;
}
