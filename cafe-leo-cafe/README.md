# CAFE LEO CAFE — Website

A premium, football-inspired cafe website for **CAFE LEO CAFE**, Kolkata.
Built with React 18, Vite 5, TypeScript, Tailwind CSS 3, Framer Motion and Lucide icons.

## Quick start

Requires Node.js 18+.

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:5173
npm run typecheck  # TypeScript check
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Deploy

**Vercel:** push this folder to a GitHub repo, then "Add New Project" on vercel.com and import it.
Framework preset: *Vite*. Build command `npm run build`. Output directory `dist`.

**Netlify:** "Add new site → Import from Git", build command `npm run build`, publish directory `dist`.
Or drag-and-drop the `dist/` folder onto app.netlify.com/drop after running `npm run build`.

After deploying, replace `https://cafeleocafe.example.com` in `index.html` (canonical, Open Graph,
structured data) and `siteUrl` in `src/data/site.ts` with the real domain.

## Where to edit things

| What | File |
| --- | --- |
| Phone, address, links, opening hours, WhatsApp, social links | `src/data/site.ts` |
| Menu items, categories, prices, photos | `src/data/menu.ts` |
| Photos (hero, story, gallery) | `src/data/images.ts` |
| FAQ, brand themes, genuine reviews | `src/data/content.ts` |
| Colours and fonts | `tailwind.config.js` |
| Page title, meta description, Open Graph, structured data | `index.html` |
| Favicon / social share image | `public/favicon.svg`, `public/og-image.png` |

To use the cafe's own photos, put them in `public/photos/` and set e.g. `src: '/photos/interior.jpg'`.

## Verified vs. sample content

**Verified (supplied by the business):** name, category, phone 07003449639, location J99R+JH Kolkata,
rating 4.2/5, 436 reviews. These are used for the contact section, call/directions buttons, FAQ answers
and structured data.

**Sample / placeholder — must be confirmed before launch:**
- Every menu item, description and photo in `src/data/menu.ts`. Prices are `null` and show "Price TBC".
- All photography is representative stock from Unsplash (free under the Unsplash License), not the cafe.
- Opening hours (empty: site says "please call to confirm").
- Reviews link: currently a Google Maps search for the cafe. Replace `reviewsUrl` with the exact Google
  Business Profile link.
- Review quotes: none are shown. Add genuine reviews (with permission) to `reviews` in `content.ts`.
- Full menu link (`fullMenuUrl`): empty, so the button says "Call for the Full Menu".
- Social links and WhatsApp: empty, so they are hidden.
- Production domain.

The rating is intentionally **not** added as `aggregateRating` in structured data: Google ignores
self-published ratings for local businesses and may treat them as spam.

## What works now (no external services)

- Responsive layout (tested at 375, 430, 768, 1024, 1440px) with no horizontal overflow
- Navbar scroll transition, active-section indicator, animated mobile menu (Esc to close)
- Smooth scrolling, staggered hero reveal, scroll reveals, parallax, ambient motion
- Menu category filters, gallery lightbox (click, arrow keys, Esc), FAQ accordion (keyboard friendly)
- Click-to-call (`tel:07003449639`), Google Maps directions, embedded map
- Sticky "Call / Directions" bar on phones
- Image lazy loading, reserved image space, branded fallback when a photo fails
- `prefers-reduced-motion` support, skip link, visible focus states, semantic HTML
- SEO title/description, Open Graph image, favicon, CafeOrCoffeeShop structured data

## Optional features that need the cafe or an external service

- **WhatsApp button:** set `whatsappNumber` in `site.ts` (only if the number is confirmed on WhatsApp).
- **Online ordering:** not included. It would need an ordering backend or platform (e.g. Zomato/Swiggy
  links, or a custom backend with a payment gateway such as Razorpay plus order notifications).
- **Table booking / enquiry form:** not included. Would need a form service (e.g. Formspree, Netlify Forms)
  or a booking tool.

## Brand note

The design is inspired by Argentine football colours and football culture. It deliberately does not use any
player's name, image or signature, or any club/federation badge, and the footer states the site is not
affiliated with any player, club or football association.
