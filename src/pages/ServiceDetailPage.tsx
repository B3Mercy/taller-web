import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  Cpu,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: `${siteConfig.siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: `${siteConfig.siteUrl}/servicios`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${siteConfig.siteUrl}/servicios/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.siteUrl}/servicios/${service.slug}#service`,
    name: service.name,
    serviceType: service.category,
    description: service.description,
    provider: {
      '@type': 'AutoRepair',
      name: siteConfig.brandName,
      telephone: siteConfig.contact.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: siteConfig.city,
      },
    },
    areaServed: {
      '@type': 'City',
      name: siteConfig.city,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={`${service.name} en ${siteConfig.city} | ${siteConfig.brandName}`}
        description={`${service.headline}. Conoce especificaciones técnicas, fases del proceso y cotiza directamente por WhatsApp.`}
        canonicalPath={`/servicios/${service.slug}`}
        ogImage={service.heroImage}
        schema={[breadcrumbsSchema, serviceSchema, faqSchema]}
      />

      <div className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/servicios" className="hover:text-cyan-400 transition-colors">
              Servicios
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-cyan-400 font-semibold">{service.name}</span>
          </nav>

          {/* Hero del Servicio */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0c121d] mb-16 shadow-2xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <img
                src={service.heroImage}
                alt={service.name}
                className="w-full h-full object-cover filter brightness-75 contrast-110"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c121d] via-[#0c121d]/70 to-transparent" />
            </div>

            <div className="p-6 sm:p-10 -mt-24 sm:-mt-36 relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  {service.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono">
                  {service.durationEstimate}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {service.name}
              </h1>
              <p className="text-cyan-300 font-medium text-sm sm:text-base mt-2 max-w-3xl">
                {service.headline}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={buildWhatsAppLink(service.whatsappTemplate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Cotizar este Servicio en WhatsApp</span>
                </a>

                <Link
                  to="/contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all"
                >
                  <span>Ir al Cotizador Interactivo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid Principal: Descripción Detallada + Ficha Técnica Lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            {/* Columna Izquierda: Información Exhaustiva */}
            <div className="lg:col-span-2 space-y-10">
              {/* Resumen Clínico */}
              <div className="bg-[#0c121d] border border-slate-800 rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  En Qué Consiste el Tratamiento
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.fullOverview}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Recomendación técnica:</strong> {service.idealFor}
                  </div>
                </div>
              </div>

              {/* Beneficios Clave */}
              <div className="reveal-on-scroll">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Beneficios y Rendimiento
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyBenefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="bg-[#0c121d] border border-slate-800 rounded-2xl p-5"
                    >
                      <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{benefit.title}</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protocolo Paso a Paso */}
              <div className="reveal-on-scroll">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Fases del Proceso en Taller
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="bg-[#0c121d] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 hover:border-slate-700 transition-colors"
                    >
                      <div className="text-2xl font-black font-mono text-cyan-400 px-3 py-1.5 rounded-xl bg-cyan-950/50 border border-cyan-800/60 shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Paquetes de Cobertura si están definidos */}
              {service.packages && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Niveles y Paquetes de Cobertura
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className={`rounded-2xl p-5 border flex flex-col justify-between ${
                          pkg.recommended
                            ? 'bg-[#101827] border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                            : 'bg-[#0c121d] border-slate-800'
                        }`}
                      >
                        <div>
                          {pkg.recommended && (
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider mb-2">
                              Más Recomendado
                            </span>
                          )}
                          <h4 className="text-base font-bold text-white">{pkg.name}</h4>
                          <div className="text-xs text-cyan-300 font-medium mt-1">
                            {pkg.target}
                          </div>
                          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                            {pkg.coverage}
                          </p>
                        </div>

                        <a
                          href={buildWhatsAppLink(
                            `Hola ${siteConfig.brandName}, deseo cotizar el paquete "${pkg.name}" de ${service.name} para mi vehículo.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500 text-xs font-semibold text-center transition-all"
                        >
                          Cotizar este paquete
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs específicas */}
              <div className="reveal-on-scroll">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Preguntas Frecuentes sobre {service.shortName}
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-[#0c121d] border border-slate-800 rounded-2xl p-5"
                    >
                      <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Derecha: Especificaciones Técnicas y Card Flotante */}
            <div className="space-y-6">
              {/* Tarjeta de Especificaciones Técnicas */}
              <div className="bg-[#0c121d] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl sticky top-28">
                <div className="flex items-center gap-2 mb-4 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                  <h3 className="font-bold text-base text-white uppercase tracking-wider">
                    Ficha Técnica de Cabina
                  </h3>
                </div>

                <div className="divide-y divide-slate-800/80 text-xs">
                  {service.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="py-3 flex justify-between items-center gap-2">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-slate-200 font-semibold text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                  <a
                    href={buildWhatsAppLink(service.whatsappTemplate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Consultar Disponibilidad</span>
                  </a>

                  <Link
                    to="/servicios"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-medium text-center transition-colors"
                  >
                    <span>← Volver a todos los servicios</span>
                  </Link>
                </div>

                {/* Sello de Calidad */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center">
                  <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-xs font-bold text-white">Garantía Escrita</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Cada trabajo se entrega con informe de micras y certificado de aplicación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
