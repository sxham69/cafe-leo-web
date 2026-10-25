import { useState } from 'react';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { PitchLines } from '../components/Graphics';
import { site } from '../data/site';

export function Location() {
  const [mapReady, setMapReady] = useState(false);

  return (
    <section id="location" className="bg-ivory py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="06 — Location"
          title={
            <>
              Come say hello in <em className="text-espresso">Kolkata.</em>
            </>
          }
          intro="Drop by for a coffee, a bite and a good conversation. Tap below for directions or give us a call."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Map */}
          <Reveal className="relative min-h-[360px] overflow-hidden rounded-[30px] bg-navy lg:min-h-[480px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center text-white">
              <PitchLines className="absolute inset-0 h-full w-full text-sky/15" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-sky text-navy shadow-[0_0_0_12px_rgba(117,189,235,0.18)]">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="relative font-display text-2xl">{site.name}</p>
              <p className="relative text-white/70">{site.addressLine}</p>
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="relative text-sm font-semibold text-sky underline-offset-4 hover:underline">
                Open in Google Maps
              </a>
            </div>
            {!import.meta.env.VITE_NO_MAP && (
            <iframe
              title={`Map showing ${site.name}, ${site.addressLine}`}
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapReady(true)}
              className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${mapReady ? 'opacity-100' : 'opacity-0'}`}
            />
            )}
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1} className="flex flex-col rounded-[30px] bg-navy p-8 text-white sm:p-10">
            <p className="font-condensed text-[15px] tracking-[0.28em] text-sky">VISIT · CALL · ENJOY</p>
            <h3 className="mt-4 font-display text-[32px] font-semibold">{site.name}</h3>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <dt className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  <p className="font-semibold">{site.plusCode}</p>
                  <p className="text-white/65">
                    {site.city}, {site.region}, {site.country}
                  </p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd>
                  <a href={site.phoneTel} className="text-lg font-semibold hover:text-sky">
                    {site.phoneDisplay}
                  </a>
                  <p className="text-white/65">Tap to call</p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Opening hours</span>
                </dt>
                <dd>
                  <p className="font-semibold">Opening hours</p>
                  <p className="text-white/65">{site.openingHours || 'Please call to confirm before visiting.'}</p>
                </dd>
              </div>
            </dl>

            <div className="mt-auto grid gap-3 pt-10 sm:grid-cols-2">
              <ButtonLink href={site.phoneTel} variant="gold" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                Call Now
              </ButtonLink>
              <ButtonLink href={site.directionsUrl} external icon={<Navigation className="h-4 w-4" aria-hidden="true" />}>
                Get Directions
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
