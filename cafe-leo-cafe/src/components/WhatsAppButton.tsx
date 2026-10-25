import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/site';

/** Optional: only renders when a verified WhatsApp number is set in src/data/site.ts. */
export function WhatsAppButton() {
  if (!whatsappUrl) return null;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
