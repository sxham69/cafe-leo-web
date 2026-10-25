import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { Logo } from '../components/Logo';
import { navLinks, site } from '../data/site';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';

const ids = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'border-b border-white/10 bg-navy/85 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="container-site flex items-center justify-between gap-6" aria-label="Main">
        <a href="#home" className="shrink-0 rounded-full" aria-label={`${site.name} — back to top`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2 text-[14px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-white' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#location"
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-sky px-5 text-[14px] font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" /> Visit Us
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute h-[1.5px] w-5 rounded bg-current"
                initial={false}
                animate={
                  open
                    ? { y: 0, rotate: i === 1 ? 0 : i === 0 ? 45 : -45, opacity: i === 1 ? 0 : 1 }
                    : { y: (i - 1) * 6, rotate: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 -z-10 overflow-hidden bg-navy lg:hidden"
          >
            <div className="container-site flex h-full flex-col pb-10 pt-28">
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-display text-[32px] text-white"
                    >
                      {l.label}
                      <span className="font-condensed text-sm tracking-[0.2em] text-sky">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
                <a href={site.phoneTel} className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/25 font-semibold text-white">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call
                </a>
                <a href="#location" onClick={() => setOpen(false)} className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky font-semibold text-navy">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> Visit Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
