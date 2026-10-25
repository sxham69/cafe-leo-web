import { ArrowRight, Navigation, Phone } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { BallIcon } from '../components/Graphics';
import { images } from '../data/images';
import { site } from '../data/site';

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="relative isolate overflow-hidden bg-navy py-28 text-white sm:py-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <SmartImage src={images.finalCoffee.src} alt="" width={1200} height={800} wrapperClassName="h-full w-full" className="opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-sky/25 blur-[130px]" />
      </div>
      <BallIcon className="absolute left-[8%] top-16 hidden h-16 w-16 animate-drift text-sky/30 md:block" />
      <BallIcon className="absolute bottom-16 right-[10%] hidden h-10 w-10 animate-drift text-gold/40 [animation-delay:-4s] md:block" />

      <div className="container-site text-center">
        <Reveal>
          <p className="eyebrow justify-center text-sky">Full-time whistle</p>
          <h2 id="final-cta-title" className="display-xl mx-auto mt-6 max-w-5xl text-balance text-[clamp(2.7rem,7vw,6rem)]">
            Your Next Favourite <em className="text-sky">Cafe Moment</em> Starts Here.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg text-white/70">
            Bring your friends, your appetite and your team spirit. We’ll take care of the coffee.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="#menu" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Explore Menu
          </ButtonLink>
          <ButtonLink href={site.phoneTel} variant="gold" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
            Call the Cafe
          </ButtonLink>
          <ButtonLink href={site.directionsUrl} external variant="outline-light" icon={<Navigation className="h-4 w-4" aria-hidden="true" />}>
            Get Directions
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
