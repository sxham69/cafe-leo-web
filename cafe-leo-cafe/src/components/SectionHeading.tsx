import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, tone = 'light', align = 'left', className = '' }: Props) {
  const dark = tone === 'dark';
  return (
    <Reveal className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p className={`eyebrow ${dark ? 'text-sky' : 'text-espresso'} ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 className={`display-xl mt-5 text-balance text-[clamp(2.4rem,5.2vw,4.4rem)] ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {intro && (
        <p className={`mt-6 max-w-2xl text-[17px] leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-white/70' : 'text-navy/70'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
