import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';

export const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#090e17]/95 backdrop-blur-lg border-t border-slate-800 p-2.5 flex items-center gap-2 md:hidden shadow-2xl">
      <a
        href={`tel:${siteConfig.contact.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-semibold hover:bg-slate-800 transition-colors"
        aria-label="Llamar al taller"
      >
        <Phone className="w-4 h-4 text-cyan-400" />
        <span>Llamar</span>
      </a>

      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold shadow-lg transition-all active:scale-95"
        aria-label="Cotizar por WhatsApp con CAR WASH - UP Spa Automotriz"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>Cotizar WhatsApp</span>
      </a>
    </div>
  );
};
