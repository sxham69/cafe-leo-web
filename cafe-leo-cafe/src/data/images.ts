/**
 * Image library. All photos are from Unsplash (free to use under the Unsplash License).
 * EDITABLE: replace any `src` with the cafe's own photos, e.g. '/photos/interior-1.jpg'
 * placed in the /public/photos folder. Real photos of the cafe are strongly recommended.
 */

export type Img = { src: string; srcSet?: string; alt: string };

const unsplash = (id: string, alt: string, w = 900): Img => {
  const base = `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75`;
  return {
    src: `${base}&w=${w}`,
    srcSet: [Math.round(w / 2), w, Math.round(w * 1.6)].map((x) => `${base}&w=${x} ${x}w`).join(', '),
    alt,
  };
};

export const images = {
  heroCoffee: unsplash('photo-1495474472287-4d71bcdd2085', 'Freshly poured latte with delicate latte art in a ceramic cup', 1100),
  heroFood: unsplash('photo-1568901346375-23c9450c58cd', 'Stacked gourmet burger with melted cheese', 600),
  heroPitch: unsplash('photo-1431324155629-1a6deb1dec8d', 'Football resting on a freshly cut green pitch', 600),

  storyInterior: unsplash('photo-1554118811-1e0d58224f24', 'Warm, softly lit cafe interior with wooden tables', 900),
  storyFriends: unsplash('photo-1529156069898-49953e39b3ac', 'Group of friends laughing together', 700),
  storyBeans: unsplash('photo-1447933601403-0c6688de566e', 'Coffee cup surrounded by roasted coffee beans', 600),

  signatureCoffee: unsplash('photo-1509042239860-f550ce710b93', 'Close-up of a cappuccino with rich crema', 1000),

  finalCoffee: unsplash('photo-1442512595331-e89e73853f31', 'Coffee being enjoyed at a cafe table', 1200),
};

export const gallery: (Img & { category: string; tall?: boolean })[] = [
  { ...unsplash('photo-1509042239860-f550ce710b93', 'Cappuccino with latte art, viewed from above', 800), category: 'Coffee', tall: true },
  { ...unsplash('photo-1501339847302-ac426a4a7cbb', 'Cosy cafe interior with plants and warm lights', 800), category: 'Interiors' },
  { ...unsplash('photo-1550547660-d9450f859349', 'Juicy burger served with fresh toppings', 800), category: 'Food' },
  { ...unsplash('photo-1529900748604-07564a03e7a6', 'Classic football on the grass under evening light', 800), category: 'Football', tall: true },
  { ...unsplash('photo-1461023058943-07fcbe16d735', 'Iced coffee in a tall glass', 800), category: 'Cold Coffee' },
  { ...unsplash('photo-1529156069898-49953e39b3ac', 'Friends sharing a happy moment together', 800), category: 'Friends', tall: true },
  { ...unsplash('photo-1572490122747-3968b75cc699', 'Thick chocolate milkshake topped with cream', 800), category: 'Shakes' },
  { ...unsplash('photo-1521017432531-fbd92d768814', 'Modern cafe counter with espresso machine', 800), category: 'Interiors' },
  { ...unsplash('photo-1578985545062-69928b1d9587', 'Slice of rich chocolate cake', 800), category: 'Desserts' },
];
