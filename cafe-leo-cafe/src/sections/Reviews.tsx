import { ArrowUpRight, Quote } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { StarRating } from '../components/StarRating';
import { reviews } from '../data/content';
import { site } from '../data/site';

export function Reviews() {
  return (
    <section id="reviews" className="relative isolate overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-sky/15 blur-[140px]" />

      <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-sky">05 — Reviews</p>
          <h2 className="display-xl mt-5 text-[clamp(2.4rem,5vw,4.2rem)]">
            Loved by the <em className="text-sky">home crowd.</em>
          </h2>

          <div className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-4">
            <p className="font-display text-[clamp(5.5rem,13vw,9rem)] font-semibold leading-[0.8] text-white">
              {site.rating.toFixed(1)}
              <span className="ml-2 align-top font-sans text-2xl font-medium text-white/40">/ 5</span>
            </p>
            <div className="pb-2">
              <StarRating rating={site.rating} size={28} />
              <p className="mt-2 text-white/70">
                Based on <strong className="font-semibold text-white">{site.reviewCount}</strong> customer reviews
              </p>
            </div>
          </div>

          <div className="mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full rounded-full bg-gradient-to-r from-sky to-gold" style={{ width: `${(site.rating / 5) * 100}%` }} />
          </div>

          <ButtonLink href={site.reviewsUrl} external className="mt-10" icon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}>
            Read Customer Reviews
          </ButtonLink>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.length > 0
            ? reviews.map((r, i) => (
                <Reveal key={i} delay={i * 0.08} className={i === 0 ? 'sm:col-span-2' : ''}>
                  <figure className="h-full rounded-[26px] border border-white/10 bg-white/[0.04] p-7">
                    <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
                    {r.rating && <StarRating rating={r.rating} size={16} className="mt-4" />}
                    <blockquote className="mt-4 font-display text-xl leading-relaxed">“{r.quote}”</blockquote>
                    <figcaption className="mt-5 text-sm text-white/60">
                      — {r.author}
                      {r.source && <span className="text-white/40"> · {r.source}</span>}
                    </figcaption>
                  </figure>
                </Reveal>
              ))
            : [0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 0.08} className={i === 0 ? 'sm:col-span-2' : ''}>
                  <div className="flex h-full min-h-[170px] flex-col justify-between rounded-[26px] border border-dashed border-white/20 bg-white/[0.025] p-7">
                    <Quote className="h-7 w-7 text-gold/60" aria-hidden="true" />
                    <div className="mt-6 space-y-2.5" aria-hidden="true">
                      <span className="block h-2.5 w-11/12 rounded-full bg-white/10" />
                      <span className="block h-2.5 w-4/5 rounded-full bg-white/10" />
                      {i === 0 && <span className="block h-2.5 w-2/3 rounded-full bg-white/10" />}
                    </div>
                    <p className="mt-6 text-[13px] text-white/50">Reserved for a genuine guest review.</p>
                  </div>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
