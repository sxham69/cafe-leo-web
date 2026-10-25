import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Fragment, useRef } from 'react';
import { ButtonLink } from '../components/Button';
import { SmartImage } from '../components/SmartImage';
import { BallIcon, PitchLines } from '../components/Graphics';
import { StarRating } from '../components/StarRating';
import { images } from '../data/images';
import { site } from '../data/site';

const ease = [0.22, 1, 0.36, 1] as const;
const line1 = ['Where', 'Great', 'Coffee'];
const line2 = ['Meets', 'the'];
const line3 = ['Beautiful', 'Game.'];

function Word({ children, i, className = '' }: { children: string; i: number; className?: string }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.25 + i * 0.08, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const tickerWords = ['Coffee', 'Food', 'Football', 'Friendship', 'Kolkata', 'Sky Blue Spirit'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '6%']);

  let w = 0;

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden bg-navy text-white">
      {/* Ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] animate-glow rounded-full bg-sky/25 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-espresso/60 blur-[120px]" />
        <PitchLines className="absolute inset-0 h-full w-full text-white/[0.05]" />
        <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </div>

      <div className="container-site grid min-h-[100svh] items-center gap-12 pb-28 pt-32 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-32 lg:pt-36">
        {/* Copy */}
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="eyebrow text-sky"
          >
            Coffee · Food · Football — Kolkata
          </motion.p>

          <h1 className="display-xl mt-6 text-[clamp(2.9rem,7.4vw,6.4rem)]" aria-label="Where Great Coffee Meets the Beautiful Game.">
            <span aria-hidden="true" className="block">
              {line1.map((t, idx) => (
                <Fragment key={t}>
                  {idx > 0 && ' '}
                  <Word i={w++}>{t}</Word>
                </Fragment>
              ))}
            </span>
            <span aria-hidden="true" className="block">
              {line2.map((t, idx) => (
                <Fragment key={t}>
                  {idx > 0 && ' '}
                  <Word i={w++}>{t}</Word>
                </Fragment>
              ))}
            </span>
            <span aria-hidden="true" className="block">
              {line3.map((t, idx) => (
                <Fragment key={t}>
                  {idx > 0 && ' '}
                  <Word i={w++} className="italic text-sky">{t}</Word>
                </Fragment>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease }}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/75 sm:text-lg"
          >
            CAFE LEO CAFE brings together the comfort of a great cup and the electric energy of football.
            Inspired by sky-blue passion and made for good company — pull up a chair and stay a while.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#menu" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              Explore Our Menu
            </ButtonLink>
            <ButtonLink href="#location" variant="outline-light" icon={<MapPin className="h-4 w-4" aria-hidden="true" />}>
              Find Us
            </ButtonLink>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 grid max-w-md grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6"
          >
            {[
              { k: 'Rating', v: `${site.rating}`, s: '/ 5' },
              { k: 'Reviews', v: `${site.reviewCount}`, s: '+' },
              { k: 'City', v: 'KOL', s: 'WB' },
            ].map((s) => (
              <div key={s.k} className="px-4 first:pl-0">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-white/50">{s.k}</dt>
                <dd className="mt-1 font-condensed text-[34px] leading-none tracking-wide text-white">
                  {s.v}
                  <span className="ml-1 text-base text-gold">{s.s}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual composition */}
        <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="relative ml-auto w-[82%] sm:w-[78%]"
          >
            <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[32px] border border-gold/40" aria-hidden="true" />
            <motion.div style={{ y: imgY }} className="overflow-hidden rounded-t-[999px] rounded-b-[28px] shadow-2xl shadow-black/50">
              <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease }}>
                <SmartImage
                  src={images.heroCoffee.src}
                  srcSet={images.heroCoffee.srcSet}
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  alt={images.heroCoffee.alt}
                  width={1100}
                  height={1400}
                  priority
                  wrapperClassName="aspect-[4/5]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Food card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease }}
            className="absolute -bottom-6 left-0 w-[44%] rotate-[-4deg] rounded-[22px] bg-ivory p-2 shadow-2xl shadow-black/40"
          >
            <SmartImage
              src={images.heroFood.src}
              alt={images.heroFood.alt}
              width={600}
              height={600}
              priority
              wrapperClassName="aspect-square rounded-[16px]"
            />
            <p className="px-2 pb-1 pt-2 font-condensed text-[13px] tracking-[0.18em] text-espresso">GOOD FOOD · GOOD COMPANY</p>
          </motion.div>

          {/* Pitch image circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="absolute -top-4 left-[6%] hidden h-28 w-28 overflow-hidden rounded-full border-4 border-navy shadow-xl sm:block lg:h-32 lg:w-32"
          >
            <SmartImage src={images.heroPitch.src} alt={images.heroPitch.alt} width={300} height={300} priority wrapperClassName="h-full w-full" />
          </motion.div>

          {/* Rating badge */}
          <motion.a
            href="#reviews"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
            className="absolute right-0 top-[54%] flex items-center gap-3 rounded-2xl border border-white/15 bg-navy/70 px-4 py-3 shadow-xl backdrop-blur-md transition hover:border-sky/60 sm:-right-4"
            aria-label={`Rated ${site.rating} out of 5 from ${site.reviewCount} reviews — see reviews`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy">
              <Star className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-semibold">
                {site.rating}/5 · {site.reviewCount} Reviews
              </span>
              <StarRating rating={site.rating} size={13} className="mt-1" />
            </span>
          </motion.a>

          {/* Rotating text ring */}
          <div className="absolute -bottom-10 right-[4%] hidden h-28 w-28 md:block" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_28s_linear_infinite] text-gold">
              <defs>
                <path id="ring" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1 -76 0" />
              </defs>
              <text fontSize="9.5" letterSpacing="3.2" fill="currentColor" fontFamily="Bebas Neue, sans-serif">
                <textPath href="#ring">COFFEE · FOOTBALL · FRIENDSHIP · </textPath>
              </text>
            </svg>
            <BallIcon className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-sky" />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-y border-white/10 bg-navy-900/80 py-3 backdrop-blur" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {[...tickerWords, ...tickerWords].map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center font-condensed text-[18px] tracking-[0.3em] text-white/70">
                  <span className="px-6">{t}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-sky" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
