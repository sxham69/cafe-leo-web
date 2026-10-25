import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline-light' | 'outline-dark' | 'dark' | 'gold';

const styles: Record<Variant, string> = {
  primary: 'bg-sky text-navy hover:bg-white shadow-[0_10px_30px_-10px_rgba(117,189,235,0.7)]',
  'outline-light': 'border border-white/35 text-white hover:border-sky hover:text-sky backdrop-blur-sm',
  'outline-dark': 'border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-ivory',
  dark: 'bg-navy text-ivory hover:bg-espresso',
  gold: 'bg-gold text-navy hover:bg-gold-light',
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
};

export function ButtonLink({ variant = 'primary', icon, external, className = '', children, ...rest }: Props) {
  return (
    <a
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </a>
  );
}
