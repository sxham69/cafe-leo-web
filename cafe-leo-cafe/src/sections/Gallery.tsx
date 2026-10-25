import { useCallback, useState } from 'react';
import { Expand } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SmartImage } from '../components/SmartImage';
import { Reveal } from '../components/Reveal';
import { Lightbox } from '../components/Lightbox';
import { gallery } from '../data/images';

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);

  return (
    <section id="gallery" className="bg-ivory py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="04 — Gallery"
            title={
              <>
                Moments worth <em className="text-espresso">framing.</em>
              </>
            }
          />
          <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
            Coffee, comfort food, good company and football colours. Tap any photo to see it larger.
          </p>
        </div>

        <div className="mt-14 columns-2 gap-3 sm:gap-5 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-5">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-[18px] text-left sm:rounded-[26px]"
                aria-label={`Open image: ${g.alt}`}
              >
                <SmartImage
                  src={g.src}
                  srcSet={g.srcSet}
                  sizes="(min-width:1024px) 33vw, 50vw"
                  alt={g.alt}
                  width={800}
                  height={g.tall ? 1050 : 640}
                  wrapperClassName={g.tall ? 'aspect-[4/5.25]' : 'aspect-[5/4]'}
                  className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 font-condensed text-[13px] sm:bottom-5 sm:left-5 sm:text-[15px] tracking-[0.25em] text-white">{g.category}</span>
                <span className="absolute right-5 top-5 flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[13px] text-navy/45">Representative photography. To be replaced with the cafe’s own photos.</p>
      </div>

      <Lightbox items={gallery} index={index} onClose={close} onChange={setIndex} />
    </section>
  );
}
