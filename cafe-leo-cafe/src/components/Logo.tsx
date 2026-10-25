type Props = { className?: string; tone?: 'light' | 'dark'; showText?: boolean };

/** Original mark: a coffee cup in sky-white-sky bands with a football "foam" above it. */
export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <clipPath id="cup-clip">
          <path d="M9 21h25v7.5C34 35.4 28.4 41 21.5 41S9 35.4 9 28.5z" />
        </clipPath>
      </defs>
      <circle cx="24" cy="24" r="23" fill="#101A32" stroke="#D6B16D" strokeWidth="1.2" />
      <g clipPath="url(#cup-clip)">
        <rect x="8" y="21" width="28" height="6.7" fill="#75BDEB" />
        <rect x="8" y="27.7" width="28" height="6.6" fill="#FFFFFF" />
        <rect x="8" y="34.3" width="28" height="7" fill="#75BDEB" />
      </g>
      <path d="M34 24h2.2a4.3 4.3 0 0 1 0 8.6H33" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 43h19" stroke="#D6B16D" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="21.5" cy="12.5" r="6.2" fill="#FFF8ED" />
      <path d="M21.5 9.6l2.75 2 -1.05 3.25h-3.4l-1.05-3.25z" fill="#101A32" />
      <path d="M21.5 6.3v3.3M24.25 11.6l3.1-1M23.2 14.85l1.9 2.6M19.8 14.85l-1.9 2.6M18.75 11.6l-3.1-1" stroke="#101A32" strokeWidth="0.9" />
    </svg>
  );
}

export function Logo({ className = '', tone = 'light', showText = true }: Props) {
  const text = tone === 'light' ? 'text-white' : 'text-navy';
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      {showText && (
        <span className={`flex items-baseline gap-1.5 leading-none ${text}`}>
          <span className="font-condensed text-[15px] tracking-[0.22em]">CAFE</span>
          <span className="font-display text-[26px] font-bold italic tracking-tight text-sky">LEO</span>
          <span className="font-condensed text-[15px] tracking-[0.22em]">CAFE</span>
        </span>
      )}
    </span>
  );
}
