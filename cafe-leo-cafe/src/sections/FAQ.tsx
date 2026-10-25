import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { faqs } from '../data/content';
import { site } from '../data/site';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" aria-label="Frequently asked questions" className="bg-ivory-dark py-24 sm:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="07 — FAQ"
            title={
              <>
                Good <em className="text-espresso">questions.</em>
              </>
            }
            intro={
              <>
                Can’t find what you need? Call us on{' '}
                <a href={site.phoneTel} className="font-semibold text-navy underline decoration-sky decoration-2 underline-offset-4">
                  {site.phoneDisplay}
                </a>
                .
              </>
            }
          />
        </div>

        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const btnId = `${base}-q${i}`;
            const panelId = `${base}-a${i}`;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[20px] font-semibold text-navy transition-colors hover:text-espresso sm:text-[22px]"
                  >
                    {f.q}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen ? 'rotate-45 border-navy bg-navy text-sky' : 'border-navy/20 text-navy'
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-14 text-[16px] leading-relaxed text-navy/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
