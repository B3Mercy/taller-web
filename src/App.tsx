import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

// Scroll to top automático en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Gestor de animaciones de scroll para revelar elementos progresivamente
function ScrollRevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Si no hay soporte para IntersectionObserver, mostrar todo directamente
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-scale').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Conectar observadores tras el render
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-scale');
      elements.forEach((el) => {
        // Si el elemento ya está visible en el viewport inicial, revelarlo de inmediato
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

// 404 Not Found Page
function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md bg-[#0c121d] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mx-auto mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-white font-mono">404</h1>
        <h2 className="text-xl font-bold text-slate-200 mt-2">Página no encontrada</h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          La ruta que buscas no existe o ha sido reubicada. Regresa a nuestro inicio para ver los servicios de laboratorio automotriz.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealManager />
      <div className="min-h-screen bg-[#080c14] text-slate-200 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <Navbar />

        <main className="flex-grow pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
            <Route path="/galeria" element={<ProjectsPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloating />
        <MobileStickyCTA />
      </div>
    </Router>
  );
}

export default App;
