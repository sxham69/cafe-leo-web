import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Img } from '../data/images';

type Props = { items: Img[]; index: number | null; onClose: () => void; onChange: (i: number) => void };

export function Lightbox({ items, index, onClose, onChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      prevFocus?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
      if (e.key === 'Tab') {
        const nodes = document.querySelectorAll<HTMLElement>('[data-lightbox] button');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, items.length, onClose, onChange]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          data-lightbox
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-900/95 p-4 backdrop-blur-md sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src.replace(/w=\d+/, 'w=1600')}
              alt={item.alt}
              className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {item.alt} <span className="text-white/40">· {index + 1} / {items.length}</span>
            </figcaption>
          </motion.figure>

          {(['prev', 'next'] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              aria-label={dir === 'prev' ? 'Previous image' : 'Next image'}
              onClick={(e) => {
                e.stopPropagation();
                onChange(dir === 'next' ? (index + 1) % items.length : (index - 1 + items.length) % items.length);
              }}
              className={`absolute bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-sky hover:text-navy sm:top-1/2 sm:-translate-y-1/2 ${
                dir === 'prev' ? 'left-[calc(50%-56px)] sm:left-6' : 'right-[calc(50%-56px)] sm:right-6'
              }`}
            >
              {dir === 'prev' ? <ChevronLeft className="h-5 w-5" aria-hidden="true" /> : <ChevronRight className="h-5 w-5" aria-hidden="true" />}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
