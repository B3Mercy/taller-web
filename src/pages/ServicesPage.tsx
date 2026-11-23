import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';

export const ServicesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Protección Exterior',
    'Corrección & Brillo',
    'Chasis & Bajos',
    'Estética Interior',
  ];

  const filteredServices =
    selectedFilter === 'Todos'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedFilter);

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Catálogo de Servicios de Detailing y Protección Automotriz',
    itemListElement: servicesData.map((s, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: `${siteConfig.siteUrl}/servicios/${s.slug}`,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Servicios Especializados de Detailing & PPF | Catálogo Completo"
        description="Conoce nuestros servicios de alta gama: Corrección de pintura, Paint Protection Film (PPF), Undercoating de chasis y Lavado de salón a vapor en Lima."
        canonicalPath="/servicios"
        schema={servicesSchema}
      />

      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Catálogo de Especialidades
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Servicios de Estética y Protección
            </h1>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Tratamientos formulados con estándares técnicos internacionales. Cada servicio cuenta con protocolo documentado y control de calidad por etapas.
            </p>

            {/* Filtros por Categoría */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedFilter === cat
                      ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Servicios Detallados */}
          <div className="space-y-12" key={selectedFilter}>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#0c121d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row group hover:border-cyan-500/40 transition-all duration-300 animate-fade-in-up"
              >
                {/* Visual Image */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-950">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0c121d]/30 to-[#0c121d]" />
                  
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
                    {service.badge}
                  </div>
                </div>

                {/* Info & Content */}
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {service.durationEstimate}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {service.name}
                    </h2>
                    <p className="text-cyan-300 text-xs sm:text-sm font-medium mt-1">
                      {service.headline}
                    </p>

                    <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Beneficios Clave */}
                    <div className="mt-6 space-y-2">
                      <div className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                        Aspectos Destacados:
                      </div>
                      {service.keyBenefits.slice(0, 3).map((b) => (
                        <div key={b.title} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>
                            <strong>{b.title}:</strong> {b.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      to={`/servicios/${service.slug}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-all border border-slate-600"
                    >
                      <span>Ver Ficha Técnica Completa</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={buildWhatsAppLink(service.whatsappTemplate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Cotizar en WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
