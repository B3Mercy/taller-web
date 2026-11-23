import { useState } from 'react';
import { projectsData, type ProjectItem } from '../data/projectsData';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle2, X, MessageSquare } from 'lucide-react';

export const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = ['Todos', 'Pintura', 'PPF', 'Undercoating', 'Interior'];

  const filteredProjects =
    selectedFilter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <>
      <SEOHead
        title={`Galería de Proyectos & Trabajos | ${siteConfig.brandName}`}
        description="Explora nuestros proyectos de estética y protección automotriz: superdeportivos, SUVs y camionetas con PPF, corrección de pintura, undercoating e interiores."
        canonicalPath="/galeria"
      />

      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Muestrario Demostrativo de Acabados
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Galería de Proyectos (Referencial)
            </h1>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Muestras fotográficas y casos demostrativos para ilustrar el alcance visual de cada servicio. El cliente podrá reemplazar estas imágenes por sus propios trabajos.
            </p>

            {/* Filtros */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedFilter === filter
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={selectedFilter}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group bg-[#0c121d] border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between animate-fade-in-up"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover img-cinematic"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121d] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
                      {project.category}
                    </div>

                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-xs font-mono">
                      {project.treatmentTime}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                      {project.badge}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {project.serviceUsed}
                    </p>

                    <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                  <span>Ver Ficha del Proyecto</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Lightbox de Proyecto */}
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative bg-[#0c121d] border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white"
                  aria-label="Cerrar ventana modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[16/9] w-full relative bg-slate-950">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
                    {activeModalProject.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
                      {activeModalProject.category} • {activeModalProject.treatmentTime}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {activeModalProject.carModel}
                    </h3>
                    <div className="text-sm text-slate-300 font-medium">
                      Tratamiento: {activeModalProject.serviceUsed}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {activeModalProject.description}
                  </p>

                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
                    <div className="text-xs uppercase font-bold text-slate-300 mb-2">
                      Aspectos Técnicos Clave:
                    </div>
                    <div className="space-y-1.5">
                      {activeModalProject.highlights.map((h) => (
                        <div key={h} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={buildWhatsAppLink(
                        `Hola ${siteConfig.brandName}, vi en la galería el proyecto "${activeModalProject.title}" (${activeModalProject.serviceUsed}). Quisiera cotizar un tratamiento similar para mi vehículo.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Cotizar este Mismo Trabajo en WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
