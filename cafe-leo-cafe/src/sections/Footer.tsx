import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { Logo } from '../components/Logo';
import { StripeAccent } from '../components/Graphics';
import { navLinks, site } from '../data/site';

const socialMeta = {
  instagram: { label: 'Instagram', Icon: Instagram },
  facebook: { label: 'Facebook', Icon: Facebook },
  zomato: { label: 'Zomato', Icon: null },
  swiggy: { label: 'Swiggy', Icon: null },
} as const;

export function Footer() {
  const socials = (Object.keys(site.social) as (keyof typeof site.social)[]).filter((k) => site.social[k]);

  return (
    <footer className="bg-navy-900 pb-28 pt-20 text-white md:pb-10">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              A Kolkata cafe inspired by great coffee, good food and the sky-blue spirit of the beautiful game.
            </p>
            <StripeAccent className="mt-6 h-2.5 w-14" />
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {socials.map((k) => {
                  const { label, Icon } = socialMeta[k];
                  return (
                    <li key={k}>
                      <a
                        href={site.social[k]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 min-w-[44px] items-center justify-center rounded-full border border-white/15 px-3 text-sm text-white/80 transition hover:border-sky hover:text-sky"
                      >
                        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="font-condensed text-[15px] tracking-[0.28em] text-sky">EXPLORE</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {[...navLinks, { label: 'FAQ', href: '#faq' }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-condensed text-[15px] tracking-[0.28em] text-sky">FIND US</h2>
            <ul className="mt-5 space-y-4 text-white/70">
              <li>
                <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-white">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {site.addressLine}
                </a>
              </li>
              <li>
                <a href={site.phoneTel} className="flex gap-3 transition hover:text-white">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Football-inspired design. Not affiliated with any player, club or football association.</p>
        </div>
      </div>
    </footer>
  );
}
