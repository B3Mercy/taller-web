import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Sparkles,
  Phone,
  Droplets,
  Layers,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al navegar
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios', hasDropdown: true },
    { name: 'Galería', path: '/galeria' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const serviceSublinks = [
    {
      name: 'Corrección de Pintura',
      path: '/servicios/correccion-de-pintura',
      desc: 'Restauración óptica y acabado espejo',
      icon: Sparkles,
      color: 'text-amber-400',
    },
    {
      name: 'Protección PPF',
      path: '/servicios/ppf-paint-protection-film',
      desc: 'Película TPU autorregenerable 200µm',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
    {
      name: 'Undercoating Chasis',
      path: '/servicios/undercoating-chasis',
      desc: 'Blindaje anticorrosivo y aislamiento',
      icon: Layers,
      color: 'text-emerald-400',
    },
    {
      name: 'Lavado de Salón',
      path: '/servicios/lavado-de-salon',
      desc: 'Desinfección profunda a vapor 140°C',
      icon: Droplets,
      color: 'text-blue-400',
    },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Banner Informativo de Demostración */}
      <div className="bg-[#05080e] border-b border-slate-800/80 text-xs text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              Modo Demostración
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Sitio preparado para presentación al cliente • Datos y fotos provisionales</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Contacto provisional:</span>
            <span className="text-cyan-400 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {siteConfig.contact.phoneDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-[#090d16]/80 backdrop-blur-sm border-b border-slate-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 transition-colors">
              <ShieldCheck className="w-6 h-6 text-cyan-400 group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                {siteConfig.brandName}
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                        isActive(link.path)
                          ? 'text-cyan-400 bg-cyan-950/30 border border-cyan-800/40'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 transition-all">
                        <div className="bg-[#0d131f] border border-slate-700/80 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                          <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                            Especialidades de Laboratorio
                          </div>
                          <div className="py-1">
                            {serviceSublinks.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group"
                                >
                                  <div
                                    className={`p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 ${sub.color}`}
                                  >
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                      {sub.name}
                                    </div>
                                    <div className="text-xs text-slate-400 leading-snug">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="p-2 border-t border-slate-800 mt-1">
                            <Link
                              to="/servicios"
                              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium block text-center py-1 hover:underline"
                            >
                              Ver catálogo completo con fichas →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-cyan-400 bg-cyan-950/30 border border-cyan-800/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA: WhatsApp Direct */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contacto"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700/60 hover:bg-slate-800/50 transition-colors hidden md:inline-block"
            >
              Cotizador Online
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Contactar por WhatsApp a CAR WASH - UP Spa Automotriz"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menú de navegación móvil"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c111a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive('/') ? 'text-cyan-400 bg-slate-900' : 'text-slate-300'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive('/servicios') ? 'text-cyan-400 bg-slate-900' : 'text-slate-300'
                }`}
              >
                Servicios (Catálogo Completo)
              </Link>

              {/* Subservicios en móvil */}
              <div className="pl-4 space-y-1 border-l border-slate-800 my-2">
                {serviceSublinks.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block py-1.5 text-sm text-slate-400 hover:text-cyan-400"
                  >
                    • {sub.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/galeria"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive('/galeria') ? 'text-cyan-400 bg-slate-900' : 'text-slate-300'
                }`}
              >
                Galería de Proyectos
              </Link>
              <Link
                to="/nosotros"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive('/nosotros') ? 'text-cyan-400 bg-slate-900' : 'text-slate-300'
                }`}
              >
                Nosotros & Estándares
              </Link>
              <Link
                to="/contacto"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive('/contacto') ? 'text-cyan-400 bg-slate-900' : 'text-slate-300'
                }`}
              >
                Contacto & Reservas
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium text-center"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Llamar: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
