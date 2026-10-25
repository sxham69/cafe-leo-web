/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#101A32', 900: '#0A1124', 800: '#101A32', 700: '#18254A', 600: '#22325F' },
        sky: { DEFAULT: '#75BDEB', light: '#A9D7F5', deep: '#4A9FD6' },
        ivory: { DEFAULT: '#FFF8ED', dark: '#F5EAD8' },
        espresso: { DEFAULT: '#543629', light: '#7A5242', dark: '#3A241B' },
        gold: { DEFAULT: '#D6B16D', light: '#E8CD99', dark: '#B8924D' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        condensed: ['"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      maxWidth: { site: '1280px' },
      keyframes: {
        drift: { '0%,100%': { transform: 'translate3d(0,0,0) rotate(0deg)' }, '50%': { transform: 'translate3d(0,-14px,0) rotate(6deg)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        glow: { '0%,100%': { opacity: '0.45' }, '50%': { opacity: '0.8' } },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        glow: 'glow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
