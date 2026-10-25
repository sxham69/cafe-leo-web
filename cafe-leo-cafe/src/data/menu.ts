/**
 * SAMPLE MENU — FOR DESIGN DEMONSTRATION ONLY.
 * None of these items or prices are confirmed offerings of CAFE LEO CAFE.
 * Replace every entry with the cafe's real menu before going live.
 *
 * price: a number in rupees (e.g. 180) or null to show "Price TBC".
 * veg:   true = vegetarian mark, false = non-vegetarian mark, undefined = no mark.
 * image: any URL or a file in /public (e.g. '/menu/cold-coffee.jpg').
 */

export const menuCategories = [
  'All',
  'Coffee & Espresso',
  'Cold Coffee & Refreshers',
  'Shakes & Beverages',
  'Snacks & Quick Bites',
  'Burgers & Sandwiches',
  'Desserts',
] as const;

export type MenuCategory = Exclude<(typeof menuCategories)[number], 'All'>;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number | null;
  veg?: boolean;
  image: string;
  tag?: string;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=640`;

export const menuItems: MenuItem[] = [
  { id: 'cappuccino', name: 'Classic Cappuccino', description: 'Velvety espresso crowned with silky steamed milk foam.', category: 'Coffee & Espresso', price: null, veg: true, image: img('photo-1572442388796-11668a67e53d'), tag: 'Sample' },
  { id: 'latte', name: 'Café Latte', description: 'Smooth espresso and creamy milk, finished with latte art.', category: 'Coffee & Espresso', price: null, veg: true, image: img('photo-1541167760496-1628856ab772') },
  { id: 'espresso', name: 'Double Espresso', description: 'Bold, aromatic and short — a proper kick-off.', category: 'Coffee & Espresso', price: null, veg: true, image: img('photo-1510707577719-ae7c14805e3a') },

  { id: 'cold-coffee', name: 'Signature Cold Coffee', description: 'Chilled, creamy and blended for the warmest afternoons.', category: 'Cold Coffee & Refreshers', price: null, veg: true, image: img('photo-1461023058943-07fcbe16d735'), tag: 'Sample' },
  { id: 'iced-americano', name: 'Iced Americano', description: 'Espresso poured over ice for a crisp, clean finish.', category: 'Cold Coffee & Refreshers', price: null, veg: true, image: img('photo-1517701604599-bb29b565090c') },
  { id: 'lemon-cooler', name: 'Sky Blue Lemon Cooler', description: 'Zesty, sparkling and refreshing, served ice-cold.', category: 'Cold Coffee & Refreshers', price: null, veg: true, image: img('photo-1556679343-c7306c1976bc') },

  { id: 'choco-shake', name: 'Double Chocolate Shake', description: 'Thick, indulgent and topped with whipped cream.', category: 'Shakes & Beverages', price: null, veg: true, image: img('photo-1572490122747-3968b75cc699') },
  { id: 'hot-chocolate', name: 'Rich Hot Chocolate', description: 'Warm, comforting cocoa for slow conversations.', category: 'Shakes & Beverages', price: null, veg: true, image: img('photo-1542990253-0d0f5be5f0ed') },

  { id: 'fries', name: 'Golden Fries', description: 'Crispy, lightly salted and perfect for sharing.', category: 'Snacks & Quick Bites', price: null, veg: true, image: img('photo-1573080496219-bb080dd4f877') },
  { id: 'nachos', name: 'Loaded Nachos', description: 'Crunchy tortilla chips with cheese and salsa.', category: 'Snacks & Quick Bites', price: null, veg: true, image: img('photo-1513456852971-30c0b8199d4d') },

  { id: 'classic-burger', name: 'The Classic Burger', description: 'Toasted bun, crisp lettuce and a generous patty.', category: 'Burgers & Sandwiches', price: null, veg: false, image: img('photo-1568901346375-23c9450c58cd'), tag: 'Sample' },
  { id: 'club-sandwich', name: 'Grilled Club Sandwich', description: 'Layered, toasted and stacked with fresh fillings.', category: 'Burgers & Sandwiches', price: null, veg: false, image: img('photo-1528735602780-2552fd46c7af') },
  { id: 'veg-burger', name: 'Garden Veg Burger', description: 'Crisp vegetable patty with fresh, crunchy greens.', category: 'Burgers & Sandwiches', price: null, veg: true, image: img('photo-1550547660-d9450f859349') },

  { id: 'brownie', name: 'Warm Chocolate Brownie', description: 'Fudgy centre, crackled top, best enjoyed warm.', category: 'Desserts', price: null, veg: true, image: img('photo-1606313564200-e75d5e30476c') },
  { id: 'cheesecake', name: 'Baked Cheesecake', description: 'Creamy, rich and finished with a buttery base.', category: 'Desserts', price: null, veg: true, image: img('photo-1533134242443-d4fd215305ad') },
];
