import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Info, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SmartImage } from '../components/SmartImage';
import { ButtonLink } from '../components/Button';
import { menuCategories, menuItems, type MenuItem } from '../data/menu';
import { site } from '../data/site';

function VegMark({ veg }: { veg: boolean }) {
  const c = veg ? '#2E8B57' : '#9B3D2A';
  return (
    <span
      className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[3px] border-2 bg-white"
      style={{ borderColor: c }}
      title={veg ? 'Vegetarian' : 'Non-vegetarian'}
    >
      <span className="h-2 w-2 rounded-full" style={{ background: c }} />
      <span className="sr-only">{veg ? 'Vegetarian' : 'Non-vegetarian'}</span>
    </span>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="group flex h-full flex-row overflow-hidden rounded-[22px] sm:flex-col sm:rounded-[26px] bg-white shadow-[0_1px_0_rgba(16,26,50,0.06)] ring-1 ring-navy/[0.07] transition-shadow duration-500 hover:shadow-[0_30px_60px_-25px_rgba(16,26,50,0.35)]"
    >
      <div className="relative w-[38%] shrink-0 sm:w-auto">
        <SmartImage
          src={item.image}
          alt={item.name}
          width={640}
          height={480}
          wrapperClassName="h-full min-h-[150px] sm:aspect-[4/3] sm:h-auto sm:min-h-0"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute left-3 top-3 flex gap-2 sm:left-4 sm:top-4">
          {item.veg !== undefined && <VegMark veg={item.veg} />}
        </div>
        <span className="absolute right-4 top-4 hidden rounded-full sm:inline-block bg-navy/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
          {item.category.split(' ')[0]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:gap-4">
          <h3 className="font-display text-[19px] font-semibold leading-snug text-navy sm:text-[22px]">{item.name}</h3>
          <span className={`order-last shrink-0 font-condensed text-[17px] tracking-wide sm:order-none sm:pt-1 sm:text-[20px] ${item.price === null ? 'text-navy/40' : 'text-espresso'}`}>
            {item.price === null ? 'Price TBC' : `₹${item.price}`}
          </span>
        </div>
        <p className="mt-1.5 text-[14px] leading-relaxed text-navy/65 sm:mt-2 sm:text-[15px]">{item.description}</p>
      </div>
    </motion.article>
  );
}

export function Menu() {
  const [active, setActive] = useState<(typeof menuCategories)[number]>('All');
  const items = useMemo(() => (active === 'All' ? menuItems : menuItems.filter((m) => m.category === active)), [active]);

  return (
    <section id="menu" className="relative bg-ivory-dark py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="02 — The Menu"
            title={
              <>
                Picked for your <em className="text-espresso">starting eleven.</em>
              </>
            }
            intro="From a first-touch espresso to a full-time dessert — a taste of the kind of comfort food and drinks you can expect."
          />
          <p className="flex max-w-xs items-start gap-2 rounded-2xl border border-espresso/20 bg-ivory px-4 py-3 text-[13px] leading-snug text-espresso">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Preview menu. Items, photos and prices are samples — please call the cafe to confirm today’s menu.
          </p>
        </div>

        <div className="-mx-5 mt-12 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0">
          <div role="group" aria-label="Filter menu by category" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {menuCategories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={`relative min-h-[44px] whitespace-nowrap rounded-full px-5 text-[14px] font-semibold transition-colors ${
                    isActive ? 'text-white' : 'border border-navy/15 bg-white/60 text-navy/75 hover:border-navy/40 hover:text-navy'
                  }`}
                >
                  {isActive && (
                    <motion.span layoutId="menu-pill" className="absolute inset-0 rounded-full bg-navy" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                  )}
                  <span className="relative">{c}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          {site.fullMenuUrl ? (
            <ButtonLink href={site.fullMenuUrl} external variant="dark" icon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}>
              View Full Menu
            </ButtonLink>
          ) : (
            <>
              <ButtonLink href={site.phoneTel} variant="dark" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                Call for the Full Menu
              </ButtonLink>
              <p className="text-[13px] text-navy/55">The full menu link will appear here once the cafe shares it.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
