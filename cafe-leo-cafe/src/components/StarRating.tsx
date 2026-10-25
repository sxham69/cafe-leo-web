import { useId } from 'react';

type Props = { rating: number; size?: number; className?: string; emptyColor?: string };

/** Five stars with an accurate partial fill (e.g. 4.2 = four full stars and 20% of the fifth). */
export function StarRating({ rating, size = 22, className = '', emptyColor = 'rgba(214,177,109,0.25)' }: Props) {
  const id = useId();
  return (
    <span className={`inline-flex gap-1 ${className}`} role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        const gid = `${id}-s${i}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={gid}>
                <stop offset={`${fill * 100}%`} stopColor="#D6B16D" />
                <stop offset={`${fill * 100}%`} stopColor={emptyColor} />
              </linearGradient>
            </defs>
            <path
              d="M12 2.6l2.85 5.95 6.55.82-4.8 4.5 1.22 6.48L12 17.2l-5.82 3.15 1.22-6.48-4.8-4.5 6.55-.82z"
              fill={`url(#${gid})`}
            />
          </svg>
        );
      })}
    </span>
  );
}
