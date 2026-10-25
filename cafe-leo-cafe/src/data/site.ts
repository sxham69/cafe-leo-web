/**
 * Central business configuration.
 *
 * VERIFIED = supplied by the business / public listing.
 * EDITABLE = placeholder; confirm with the cafe owner before going live.
 */

const PLUS_CODE = 'J99R+JH';
const CITY = 'Kolkata';

export const site = {
  // VERIFIED
  name: 'CAFE LEO CAFE',
  category: 'Cafe',
  phoneDisplay: '070034 49639',
  phoneRaw: '07003449639',
  phoneTel: 'tel:07003449639',
  plusCode: PLUS_CODE,
  city: CITY,
  region: 'West Bengal',
  country: 'India',
  addressLine: `${PLUS_CODE}, ${CITY}, West Bengal, India`,
  rating: 4.2,
  reviewCount: 436,

  // Derived links (no invented coordinates; Google resolves the plus code)
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`CAFE LEO CAFE ${PLUS_CODE} ${CITY}`)}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(`${PLUS_CODE}, ${CITY}, West Bengal`)}&output=embed`,

  // EDITABLE: replace with the cafe's exact Google Business Profile reviews link.
  // Until then this opens a Google Maps search for the cafe, where reviews are shown.
  reviewsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`CAFE LEO CAFE ${PLUS_CODE} ${CITY}`)}`,
  reviewsUrlIsVerified: false,

  // EDITABLE: link to a full menu (PDF, Zomato/Swiggy page, etc.). Empty = scroll to on-page menu.
  fullMenuUrl: '',

  // EDITABLE: opening hours are not verified. Leave empty to show "please call to confirm".
  openingHours: '' as string,

  // EDITABLE (optional): WhatsApp in international format without "+" or spaces, e.g. '917003449639'.
  // Only fill this if the cafe confirms this number is on WhatsApp. Empty = button hidden.
  whatsappNumber: '',

  // EDITABLE: add real profile URLs only. Empty entries are not rendered.
  social: {
    instagram: '',
    facebook: '',
    zomato: '',
    swiggy: '',
  },

  // EDITABLE: production URL, used for canonical/Open Graph tags (also update index.html).
  siteUrl: 'https://cafeleocafe.example.com',
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
] as const;

export const whatsappUrl = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent('Hi CAFE LEO CAFE! I have a question.')}`
  : '';
