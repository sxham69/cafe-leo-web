import { useState, type ImgHTMLAttributes } from 'react';
import { Coffee } from 'lucide-react';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  alt: string;
  /** Classes for the wrapper (controls size / aspect ratio). */
  wrapperClassName?: string;
  priority?: boolean;
};

/**
 * Image with lazy loading, a soft placeholder while loading and a branded
 * fallback if the file can't be fetched. The wrapper reserves space to avoid layout shift.
 */
export function SmartImage({ src, alt, wrapperClassName = '', className = '', priority, ...rest }: Props) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-navy-700 via-navy to-espresso-dark ${wrapperClassName}`}>
      {state !== 'error' ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(priority ? { fetchpriority: 'high' } : {})}
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          className={`h-full w-full object-cover transition-opacity duration-700 ${state === 'loaded' ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...rest}
        />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
            <defs>
              <pattern id="hexes" width="28" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                <path d="M14 0l14 8v16l-14 8L0 24V8z" fill="none" stroke="#75BDEB" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexes)" />
          </svg>
          <Coffee className="relative h-8 w-8 text-sky" strokeWidth={1.4} aria-hidden="true" />
          <span className="relative max-w-[16rem] text-xs leading-snug text-ivory/70">{alt}</span>
        </div>
      )}
    </div>
  );
}
