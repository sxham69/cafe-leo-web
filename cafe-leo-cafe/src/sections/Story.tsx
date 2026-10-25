import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Trophy, Users } from 'lucide-react';
import { useRef } from 'react';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { BallIcon, StripeAccent } from '../components/Graphics';
import { images } from '../data/images';
import { brandThemes } from '../data/content';
import { site } from '../data/site';

const icons = { coffee: Coffee, trophy: Trophy, users: Users };

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yA = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 50]);

  return (
    <section id="story" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <BallIcon className="pointer-events-none absolute -right-16 top-24 h-64 w-64 animate-drift text-navy/[0.04]" />

      <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Collage */}
        <div ref={ref} className="relative order-2 grid grid-cols-6 grid-rows-6 gap-4 lg:order-1" style={{ aspectRatio: '1 / 1.05' }}>
          <motion.div style={{ y: yA }} className="col-span-4 row-span-4">
            <SmartImage src={images.storyInterior.src} srcSet={images.storyInterior.srcSet} sizes="(min-width:1024px) 30vw, 66vw" alt={images.storyInterior.alt} width={900} height={900} wrapperClassName="h-full rounded-[28px]" />
          </motion.div>
          <motion.div style={{ y: yB }} className="col-span-2 col-start-5 row-span-3 row-start-2">
            <SmartImage src={images.storyBeans.src} alt={images.storyBeans.alt} width={500} height={750} wrapperClassName="h-full rounded-t-[999px] rounded-b-[24px]" />
          </motion.div>
          <div className="col-span-3 col-start-3 row-span-2 row-start-5">
            <SmartImage src={images.storyFriends.src} alt={images.storyFriends.alt} width={700} height={460} wrapperClassName="h-full rounded-[24px]" />
          </div>
          <Reveal className="col-span-2 row-span-2 row-start-5 flex flex-col items-center justify-center rounded-[24px] bg-navy p-3 text-center text-white">
            <span className="font-condensed text-[clamp(2rem,5vw,3.25rem)] leading-none text-sky">{site.rating}★</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">{site.reviewCount} reviews</span>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow text-espresso">01 — Our Story</p>
            <h2 className="display-xl mt-5 text-balance text-[clamp(2.4rem,5.2vw,4.4rem)] text-navy">
              More Than Just a <em className="text-espresso">Cafe.</em>
            </h2>
            <StripeAccent className="mt-7 h-3 w-16" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[18px] leading-relaxed text-navy/80">
              Some places serve coffee. Others serve a feeling. CAFE LEO CAFE is built around the simple joys that
              bring people together — a well-made cup, something delicious to share, and a love for the beautiful game.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-navy/70">
              Our look and spirit draw on the sky-blue and white of Argentine football: the flair, the hope, the
              celebration. Whether you're a student between classes, catching up with friends or simply in need of a
              good coffee in Kolkata, there's a seat here for you.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Brand themes */}
      <div className="container-site mt-24 grid gap-5 md:grid-cols-3">
        {brandThemes.map((t, i) => {
          const Icon = icons[t.icon];
          return (
            <Reveal key={t.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-[28px] border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sky/60 hover:shadow-[0_30px_60px_-30px_rgba(16,26,50,0.35)]">
                <span className="absolute right-6 top-5 font-condensed text-[56px] leading-none text-navy/[0.06] transition-colors group-hover:text-sky/25">
                  0{i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-sky transition-transform duration-500 group-hover:rotate-[-6deg]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-display text-[26px] font-semibold text-navy">{t.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/70">{t.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
