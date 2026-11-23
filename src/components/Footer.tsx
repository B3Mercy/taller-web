import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-400 text-sm">
      {/* Pre-footer Call to Action */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-[#0a101b] to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl text-center lg:text-left z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
                Diagnóstico de Barniz sin Costo
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Protege el valor de tu vehículo con el estándar más alto
              </h3>
              <p className="mt-3 text-slate-300 text-sm md:text-base">
                Evaluamos el espesor de pintura en micras y diseñamos el paquete de protección perfecto para tu auto. Reserva tu espacio en cabina controlada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
              <Link
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Cotizador Interactivo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                aria-label="Iniciar cotización inmediata por WhatsApp con el taller"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Atención WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Columna 1: Marca y descripción */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {siteConfig.brandName}
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Laboratorio especializado de estética y protección automotriz. Tratamientos de alta precisión para superdeportivos, SUVs y vehículos de alta gama en {siteConfig.city}.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>• Diagnóstico y medición de pintura en micras</div>
              <div>• Películas de poliuretano TPU con autocuración térmica</div>
              <div>• Aplicación de PPF computarizada sin navajas</div>
            </div>
          </div>

          {/* Columna 2: Servicios Principales */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Servicios Especializados
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/servicios/correccion-de-pintura"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Corrección de Pintura
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/ppf-paint-protection-film"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Protección PPF (TPU)
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/undercoating-chasis"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Undercoating de Chasis
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/lavado-de-salon"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Lavado de Salón a Vapor
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-block pt-1"
                >
                  Ver todos los servicios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Navegación Rápida */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Enlaces del Sitio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Página de Inicio
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-cyan-400 transition-colors">
                  Galería de Proyectos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-cyan-400 transition-colors">
                  Nosotros & Estándares
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-cyan-400 transition-colors">
                  Contacto & Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Ubicación y Contacto */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Atención en Taller
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  <span className="text-slate-400">{siteConfig.contact.district}</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div>{siteConfig.contact.hours.weekdays}</div>
                  <div className="text-slate-400">{siteConfig.contact.hours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Placeholders */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {siteConfig.brandName}. Todos los derechos reservados.
            <span className="block sm:inline text-amber-400/90 mt-1 sm:mt-0 sm:ml-2">
              [AVISO DE PRESENTACIÓN: Datos comerciales, dirección, fotografías de stock y teléfono son demostrativos y serán reemplazados por el contenido definitivo del cliente].
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Propuesta Web Profesional de Alta Gama</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
