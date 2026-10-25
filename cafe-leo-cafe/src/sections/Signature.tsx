import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { PitchLines } from '../components/Graphics';
import { images } from '../data/images';

/** Moods, not claims about facilities. Edit freely. */
const moments = [
  { time: "01'", title: 'First touch', body: 'That opening sip of something hot and freshly made.' },
  { time: "45'", title: 'Half-time talk', body: 'Big opinions, bigger laughs, and a plate in the middle.' },
  { time: "90'", title: 'Full-time sweet', body: 'Because every great day deserves a proper finish.' },
];

export function Signature() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['6%', '-10%']);

  return (
    <section ref={ref} aria-labelledby="signature-title" className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-sky/15 blur-[140px]" />
        <PitchLines animate className="absolute -left-[10%] top-1/2 h-[120%] w-[120%] -translate-y-1/2 text-sky/10" />
      </div>

      {/* Oversized background word */}
      <motion.p
        style={{ x }}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-10 select-none whitespace-nowrap font-condensed text-[clamp(7rem,22vw,20rem)] leading-none text-white/[0.035]"
      >
        PASSION · PASSION · PASSION
      </motion.p>

      <div className="container-site grid items-center gap-14 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <motion.div style={{ y }} className="relative mx-auto max-w-sm lg:max-w-none">
            <SmartImage
              src={images.signatureCoffee.src}
              srcSet={images.signatureCoffee.srcSet}
              sizes="(min-width:1024px) 35vw, 90vw"
              alt={images.signatureCoffee.alt}
              width={1000}
              height={1250}
              wrapperClassName="aspect-[4/5] rounded-[32px] shadow-2xl shadow-black/60"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gold px-5 py-4 text-navy shadow-xl sm:-right-8">
              <p className="font-condensed text-[13px] tracking-[0.25em]">THE SIGNATURE</p>
              <p className="font-display text-xl font-semibold italic">Sky Blue Spirit</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <p className="eyebrow text-sky">03 — The Experience</p>
            <h2 id="signature-title" className="mt-6 font-condensed text-[clamp(3.6rem,10vw,8.5rem)] leading-[0.86] tracking-[0.01em]">
              Fuel your
              <br />
              <span className="text-sky">passion.</span>
            </h2>
            <p className="mt-3 font-display text-[clamp(1.8rem,3.6vw,3rem)] italic text-gold">Savour every moment.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/70">
              Think of the energy of a big final and the calm of a perfect cup, sharing the same table. That’s the
              feeling we’re inspired by — vibrant, warm and unmistakably sky blue.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-4 sm:grid-cols-3">
            {moments.map((m, i) => (
              <motion.li
                key={m.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-sky/50"
              >
                <span className="font-condensed text-[32px] leading-none text-sky">{m.time}</span>
                <h3 className="mt-4 font-display text-[20px] font-semibold">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">{m.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
