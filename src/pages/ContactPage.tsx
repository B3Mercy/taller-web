import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { SEOHead } from '../components/SEOHead';

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title={`Contacto & Cotizaciones | ${siteConfig.brandName}`}
        description={`Agenda tu evaluación técnica o cotiza por WhatsApp con ${siteConfig.brandName} en ${siteConfig.city}. Atención personalizada para vehículos de alta gama.`}
        canonicalPath="/contacto"
      />

      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Canales Oficiales de Atención
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Contacto y Reservas en Cabina
            </h1>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Trabajamos con capacidad limitada para asegurar la máxima dedicación a cada vehículo. Te recomendamos coordinar tu cita con anticipación.
            </p>
          </div>

          {/* Tarjetas de Información Rápida */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-on-scroll">
            <div className="bg-[#0c121d] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-bold text-white text-sm">WhatsApp Oficial</h3>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Respuesta rápida y envío de cotizaciones detalladas en menos de 15 minutos.
              </p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
              >
                <span>Chatear ahora →</span>
              </a>
            </div>

            <div className="bg-[#0c121d] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Llamada Telefónica</h3>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Atención directa para consultas técnicas o emergencias de recepción.
              </p>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="bg-[#0c121d] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Correo Electrónico</h3>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Para propuestas corporativas, flotas premium o consultas de facturación.
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 truncate block"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="bg-[#0c121d] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Horario de Taller</h3>
              <div className="text-xs text-slate-400 mt-1 space-y-0.5">
                <div>{siteConfig.contact.hours.weekdays}</div>
                <div>{siteConfig.contact.hours.saturday}</div>
              </div>
            </div>
          </div>

          {/* Calculador / Asistente de Cotización Interactivo */}
          <div className="mb-20 reveal-on-scroll">
            <QuoteCalculator />
          </div>

          {/* Ubicación y Mapa Placeholder */}
          <div className="bg-[#0c121d] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Ubicación de Laboratorio
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                  Visítanos en {siteConfig.city}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Nuestras instalaciones cuentan con estacionamiento privado vigilado 24/7 y acceso controlado para superdeportivos de bajo despeje al suelo.
                </p>

                <div className="space-y-3 text-xs text-slate-300 mb-8">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Dirección:</strong> {siteConfig.contact.address}, {siteConfig.contact.district}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Seguridad privada y póliza de seguro vehicular durante la estadía</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={siteConfig.contact.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Navegar con Waze</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Mapa Representativo Interactivo */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-[16/10] bg-slate-950 relative flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto mb-3 shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-float-slow">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="font-bold text-white text-base">
                    Sede {siteConfig.brandName}
                  </h4>
                  <p className="text-xs text-cyan-400 font-semibold mt-1">
                    Atención y Recepción Vehicular
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {siteConfig.contact.address}, {siteConfig.contact.district}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Llámanos o escríbenos al {siteConfig.contact.phoneDisplay}
                  </p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors shadow-lg"
                  >
                    Cómo Llegar en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
