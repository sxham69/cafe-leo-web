import { AnimatePresence, motion } from 'framer-motion';
import { Navigation, Phone } from 'lucide-react';
import { useScrolled } from '../hooks/useActiveSection';
import { site } from '../data/site';

/** Sticky "Call / Directions" bar for phones, shown once the visitor scrolls past the hero. */
export function MobileActionBar() {
  const show = useScrolled(560);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-lg md:hidden"
        >
          <div className="grid grid-cols-2 gap-3">
            <a href={site.phoneTel} className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gold font-semibold text-navy">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call
            </a>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-sky font-semibold text-navy"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" /> Directions
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
