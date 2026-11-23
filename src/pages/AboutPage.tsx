import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Cpu,
  Layers,
  Thermometer,
  Eye,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';

export const AboutPage = () => {
  const standards = [
    {
      title: 'Cabina Presurizada de Flujo Continuo',
      desc: 'Instalación de películas PPF y selladores cerámicos en ambiente cerrado con filtración de aire para evitar el 100% de partículas de polvo en suspensión.',
      icon: Cpu,
    },
    {
      title: 'Inspección Óptica 5000K CRI 98+',
      desc: 'Batería de luces hexagonales y proyectores de alta fidelidad de color que revelan cualquier microdefecto que sería imperceptible bajo luz convencional.',
      icon: Eye,
    },
    {
      title: 'Medición Micrométrica de Barniz',
      desc: 'Mapeo digital del espesor del clear coat antes y después de cada pulido para preservar el grosor de seguridad original de fábrica.',
      icon: Layers,
    },
    {
      title: 'Curado Térmico Infrarrojo',
      desc: 'Fijación molecular permanente de cerámicos mediante lámparas de calor de onda corta que aseguran máxima dureza antes de la entrega.',
      icon: Thermometer,
    },
  ];

  const values = [
    {
      title: 'Precisión Quirúrgica',
      desc: 'No aceleramos tiempos. Cada proyecto recibe las horas de laboratorio requeridas para alcanzar el estándar de concurso.',
    },
    {
      title: 'Transparencia Técnica',
      desc: 'Explicamos con datos reales el estado del vehículo, las micras disponibles y qué nivel de corrección es prudente realizar.',
    },
    {
      title: 'Protección Integral',
      desc: 'Cuidamos cada arnés eléctrico, sensor de airbag y zona térmica con enmascarado riguroso antes de cualquier aplicación.',
    },
  ];

  return (
    <>
      <SEOHead
        title={`Nosotros & Estándares de Spa Automotriz | ${siteConfig.brandName}`}
        description={`Conoce la filosofía y estándares de ${siteConfig.brandName}: cabina de detallado libre de polvo, iluminación de inspección CRI 98+, medición micrométrica y pasión por la perfección vehicular en ${siteConfig.contact.address}, ${siteConfig.city}.`}
        canonicalPath="/nosotros"
      />

      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Filosofía & Estándares
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ingeniería Estética Automotriz
            </h1>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              No somos un autolavado comercial ni un taller convencional. Somos un laboratorio dedicado a la preservación del valor patrimonial de vehículos de alta gama.
            </p>
          </div>

          {/* Manifiesto con Imagen */}
          <div className="bg-[#0c121d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 mb-20 reveal-on-scroll">
            <div className="relative min-h-[350px] lg:min-h-full bg-slate-950">
              <img
                src={siteConfig.images.workshopBooth}
                alt="Cabina de detallado y estética de alta gama"
                className="w-full h-full object-cover filter brightness-90 img-cinematic"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0c121d]/40 to-[#0c121d]" />
            </div>

            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                  Nuestro Manifiesto
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
                  La Ciencia Detrás de Cada Reflejo
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                  Creemos que un automóvil es una obra de ingeniería y diseño que merece ser protegida con el mismo rigor con el que fue fabricada. El clima de {siteConfig.city}, la radiación solar y la mala manipulación en lavados convencionales deterioran el barniz en pocos meses.
                </p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  En {siteConfig.brandName} aplicamos química balanceada, instrumentación óptica y técnicas no invasivas para devolver la gloria de fábrica y blindar cada panel contra el paso del tiempo.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">100%</div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Cero Navajas</div>
                  <div className="text-[11px] text-slate-400">Corte computarizado de PPF</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">5000K</div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Luz Solar CRI 98+</div>
                  <div className="text-[11px] text-slate-400">Inspección de microdefecto</div>
                </div>
              </div>
            </div>
          </div>

          {/* Infraestructura de Laboratorio */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Infraestructura y Tecnología
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Equipamiento de grado quirúrgico para garantizar resultados predecibles y de máxima duración.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="bg-[#0c121d] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Valores Fundamentales */}
          <div className="bg-gradient-to-br from-[#0c121d] to-[#070b12] border border-slate-800 rounded-3xl p-8 sm:p-12 mb-16">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Nuestros Pilares de Calidad
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Cómo protegemos tu inversión automotriz en cada paso del proceso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                  <div className="text-cyan-400 font-bold text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{v.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA hacia Contacto */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              ¿Deseas visitar nuestras instalaciones o cotizar un proyecto?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg transition-all"
              >
                <span>Agendar Inspección de Barniz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Contactar por WhatsApp (Demo)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
