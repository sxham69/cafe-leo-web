/** Editable copy for FAQ, brand themes and reviews. */
import { site } from './site';

export const brandThemes = [
  {
    title: 'Coffee & Comfort',
    body: 'Slow sips, warm cups and the kind of corner you never want to leave. Coffee is where every good conversation kicks off.',
    icon: 'coffee',
  },
  {
    title: 'Football & Passion',
    body: 'Inspired by the beautiful game and the sky-blue spirit of Argentine football — energy, flair and pure joy.',
    icon: 'trophy',
  },
  {
    title: 'Food & Friendship',
    body: 'Plates made for sharing, tables made for laughing. Bring your squad, stay for the stories.',
    icon: 'users',
  },
] as const;

/**
 * GENUINE REVIEWS ONLY. Paste real reviews (with the reviewer's permission) here.
 * Leave empty to show reserved review slots.
 */
export const reviews: { quote: string; author: string; source?: string; rating?: number }[] = [];

export const faqs = [
  {
    q: `Where is ${site.name} located?`,
    a: `We're at ${site.addressLine}. Tap "Get Directions" to open the exact location in Google Maps.`,
  },
  {
    q: 'How can I contact the cafe?',
    a: `Call us on ${site.phoneDisplay}. On a phone, tap any "Call" button on this page to dial directly.`,
  },
  {
    q: 'Where can I view the menu?',
    a: 'Browse the menu section on this page for a preview. Items and prices may change, so please call the cafe to confirm today’s menu.',
  },
  {
    q: 'What are your opening hours?',
    a: site.openingHours
      ? site.openingHours
      : `Opening hours aren't listed here yet. Please call ${site.phoneDisplay} before your visit to confirm.`,
  },
  {
    q: 'How can I find directions?',
    a: 'Use the "Get Directions" button in the Location section. It opens Google Maps with our location so you can navigate from wherever you are.',
  },
  {
    q: 'Where can I read customer reviews?',
    a: `We're rated ${site.rating} out of 5 from ${site.reviewCount} reviews. Tap "Read Customer Reviews" to see what guests are saying on Google.`,
  },
];
