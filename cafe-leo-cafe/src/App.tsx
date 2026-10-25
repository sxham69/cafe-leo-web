import { MotionConfig } from 'framer-motion';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Menu } from './sections/Menu';
import { Signature } from './sections/Signature';
import { Gallery } from './sections/Gallery';
import { Reviews } from './sections/Reviews';
import { Location } from './sections/Location';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-sky px-5 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Story />
        <Menu />
        <Signature />
        <Gallery />
        <Reviews />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
      <WhatsAppButton />
    </MotionConfig>
  );
}
