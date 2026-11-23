import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { SEOHead } from '../components/SEOHead';

export const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedVehicleTag, setSelectedVehicleTag] = useState('Superdeportivos');

  const vehicleTags = [
    'Superdeportivos',
    'Sedán / Coupé Premium',
    'SUV & Crossover',
    'Camioneta 4x4 / Pick-up',
  ];

  const homeFaqs = [
    {
      q: '¿Cuál es la diferencia entre un pulido tradicional y la corrección de pintura profesional?',
      a: 'El pulido tradicional o encerado comercial suele utilizar ceras o productos con siliconas ("fillers") que solo disimulan temporalmente los microrrayones, perdiendo el brillo al poco tiempo. Nuestra corrección mide previamente el barniz en micras y nivela científicamente el clear coat con abrasivos controlados, eliminando de forma definitiva hasta el 95%+ de los defectos.',
    },
    {
      q: '¿El PPF (Paint Protection Film) cambia el color o textura de mi vehículo?',
      a: 'No. El film de poliuretano termoplástico (TPU) alifático de 200 micras es completamente transparente y otorga un acabado ultra brillante de grado óptico. Si el cliente lo prefiere, también contamos con la variante Matte Stealth para transformar la pintura a un tono satinado sedoso.',
    },
    {
      q: '¿El servicio de Undercoating genera malos olores o humo al calentar el escape?',
      a: 'No en nuestro taller. Antes de pulverizar realizamos un enmascarado minucioso de todo el sistema de escape, pinzas de freno, sensores y transmisión. El producto anticorrosivo base agua solo se aplica sobre la chapa del chasis estructural y los pasos de rueda.',
    },
    {
      q: '¿Por qué la limpieza interior a vapor seco es superior al lavado con agua?',
      a: 'El vapor seco a 140°C desintegra grasas y esteriliza bacterias y ácaros utilizando una mínima fracción de agua. Esto previene que la espuma interna de los asientos quede empapada por días, evitando hongos y olores a humedad.',
    },
    {
      q: '¿Cómo se cotiza un servicio y con cuánto tiempo de anticipación se reserva?',
      a: 'La cotización se personaliza según el tamaño del vehículo y estado de la carrocería. Recomendamos agendar con 48 a 72 horas de anticipación a través de nuestro WhatsApp oficial para reservar la cabina limpia.',
    },
  ];

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${siteConfig.siteUrl}/#taller`,
    name: siteConfig.brandName,
    image: [siteConfig.images.heroBackground, siteConfig.images.workshopBooth],
    url: `${siteConfig.siteUrl}/`,
    telephone: siteConfig.contact.phoneRaw,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.city,
      addressRegion: 'Lima',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.coordinates.lat,
      longitude: siteConfig.contact.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Estética y Protección Automotriz de Alta Gama | PPF & Detailing"
        description="Centro especializado en Paint Protection Film (PPF), Corrección Óptica de Pintura, Undercoating Anticorrosivo y Detailing Interior en Lima. Diagnóstico técnico y acabados de concurso."
        canonicalPath="/"
        schema={[homeSchema, faqSchema]}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
        {/* Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.images.heroBackground}
            alt="Vehículo de alta gama en cabina de detallado"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/75 to-[#080c14]/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#080c14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Badge de Estatus de Cabina */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-float-slow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Cabina de Detallado • Spa Automotriz de Alta Gama</span>
          </div>

          {/* H1 Principal de Alto Impacto */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Blindaje Óptico y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Protección Definitiva
            </span>{' '}
            para tu Vehículo
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Especialistas en <strong>Paint Protection Film (PPF)</strong>, corrección de barniz con medición micrométrica, <strong>undercoating</strong> de chasis y <strong>detailing interior</strong> con estándares de concurso.
          </p>

          {/* Selector Rápido de Categoría */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {vehicleTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedVehicleTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedVehicleTag === tag
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-sm'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* CTAs Principales */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppLink(
                `Hola ${siteConfig.brandName}, deseo agendar un diagnóstico y cotizar servicios de protección para mi ${selectedVehicleTag}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Iniciar cotización por WhatsApp con CAR WASH - UP Spa Automotriz"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <Link
              to="/servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-base backdrop-blur-md transition-all hover:border-cyan-500/50"
            >
              <span>Explorar Servicios</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Indicadores de Confianza Inferiores */}
          <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {siteConfig.trustMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE DE MARCAS FRECUENTES */}
      <section className="py-8 bg-[#060910] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
              Marcas y vehículos de referencia demostrativa para la presentación
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 font-bold text-sm tracking-wider uppercase">
            {siteConfig.featuredBrands.map((brand) => (
              <span
                key={brand}
                className="hover:text-cyan-400 transition-colors py-1 cursor-default opacity-75 hover:opacity-100"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID DE LOS 4 SERVICIOS CLAVE */}
      <section className="py-20 lg:py-28 relative reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Especialidades de Estudio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ingeniería en Protección y Restauración
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              Cada superficie automotriz requiere una química y técnica específica. Conoce nuestros 4 tratamientos fundamentales con parámetros y especificaciones referenciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className="group relative bg-[#0c121d] border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Imagen del Servicio */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                    <img
                      src={service.heroImage}
                      alt={service.name}
                      className="w-full h-full object-cover img-cinematic"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121d] via-[#0c121d]/40 to-transparent" />
                    
                    {/* Badge de Categoría */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-400 text-xs font-semibold">
                      {service.badge}
                    </div>

                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-xs font-mono">
                      {service.durationEstimate}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 sm:p-8">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                      0{idx + 1} • {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Especificaciones Chips */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {service.technicalSpecs.slice(0, 2).map((spec) => (
                        <div
                          key={spec.label}
                          className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-xs"
                        >
                          <span className="text-slate-400 block text-[10px] uppercase">
                            {spec.label}
                          </span>
                          <span className="text-slate-200 font-semibold mt-0.5 block truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer de Tarjeta con CTAs */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-4">
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Ficha y Proceso</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={buildWhatsAppLink(service.whatsappTemplate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-bold transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all hover:border-cyan-500/50"
            >
              <span>Ver comparativa y catálogo general de servicios</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARADOR ANTES / DESPUÉS */}
      <section className="py-16 bg-[#060910] border-y border-slate-800/80 reveal-on-scroll">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeImage={siteConfig.images.beforeSwirls}
            afterImage={siteConfig.images.afterGloss}
            title="Efecto Espejo: Del Swirl al Reflejo Perfecto"
            subtitle="Compara la microrefracción difusa por lavados con escobillas frente a la nivelación en cabina (Muestra demostrativa referencial)."
            beforeLabel="Barniz con Swirls & Opacidad"
            afterLabel="Nivelación Master CAR WASH - UP"
          />
        </div>
      </section>

      {/* PROTOCOLO CLÍNICO EN 5 PASOS */}
      <section className="py-20 lg:py-28 relative reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Método Quirúrgico
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Protocolo Técnico de Trabajo
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              No improvisamos. Cada automóvil atraviesa una secuencia rigurosa para garantizar la preservación de micras y máxima durabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Diagnóstico Óptico',
                desc: 'Medición de espesor en micras e inspección bajo luz CRI 98+.',
              },
              {
                step: '02',
                title: 'Descontaminación',
                desc: 'Lavado pH neutro, purificación ferrosa y Clay Bar suave.',
              },
              {
                step: '03',
                title: 'Corrección Pulido',
                desc: 'Nivelación mecánica con abrasivos decrecientes sin fillers.',
              },
              {
                step: '04',
                title: 'Blindaje en Cabina',
                desc: 'Instalación de PPF computarizado o Cerámico en sala cerrada.',
              },
              {
                step: '05',
                title: 'Curado & Entrega',
                desc: 'Curado térmico infrarrojo, certificado y kit de mantenimiento.',
              },
            ].map((p, pIdx) => (
              <div
                key={p.step}
                className="bg-[#0b1018] border border-slate-800 rounded-2xl p-6 relative group hover:border-cyan-500/40 transition-all duration-300 reveal-on-scroll"
                style={{ transitionDelay: `${pIdx * 100}ms` }}
              >
                <div className="text-3xl font-black text-cyan-500/20 font-mono mb-2 group-hover:text-cyan-400/40 transition-colors">
                  {p.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section className="py-12 bg-gradient-to-b from-[#080c14] to-[#05080e] reveal-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ ACCORDION) */}
      <section className="py-20 bg-[#060910] border-t border-slate-800 reveal-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Claridad y Transparencia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Preguntas Frecuentes
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Resolvemos las dudas técnicas más comunes antes de ingresar tu auto a cabina.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-[#0d131f] border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">
              ¿Tienes una consulta específica sobre tu modelo?
            </p>
            <a
              href={buildWhatsAppLink(
                `Hola ${siteConfig.brandName}, tengo una consulta técnica sobre mi vehículo antes de agendar.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Escríbenos directamente a WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
