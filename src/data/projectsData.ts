/**
 * DATOS DE LA GALERÍA Y SHOWCASE DE PROYECTOS (DEMOSTRACIÓN COMERCIAL)
 * 
 * NOTA DE TRANSPARENCIA COMERCIAL:
 * Las fotografías y casos mostrados corresponden a imágenes y vehículos de referencia
 * demostrativa seleccionados para ilustrar el tipo de acabado estético. Serán reemplazados
 * por el portafolio fotográfico y trabajos reales del taller una vez suministrados.
 */

export interface ProjectItem {
  id: string;
  title: string;
  carModel: string;
  category: 'Pintura' | 'PPF' | 'Undercoating' | 'Interior';
  serviceUsed: string;
  imageUrl: string;
  treatmentTime: string;
  badge: string;
  description: string;
  highlights: string[];
  isDemoSample: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '[Demostración] Porsche 911 GT3 RS',
    carModel: 'Porsche 911 GT3 RS (992) [Vehículo Demostrativo]',
    category: 'PPF',
    serviceUsed: 'Instalación PPF Full Body (Demostración de acabado)',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1400',
    treatmentTime: 'Referencial: 4 Días',
    badge: '[Muestra Referencial] PPF 200µm',
    description: 'Caso demostrativo que ilustra la cobertura con película de protección de pintura con precorte por software computarizado y bordes doblados hacia el interior del panel.',
    highlights: ['Corte digital computarizado sin contacto sobre barniz', 'Bordes doblados ocultos para acabado estético', 'Fotografía de demostración visual'],
    isDemoSample: true,
  },
  {
    id: 'proj-2',
    title: '[Demostración] BMW M4 Competition',
    carModel: 'BMW M4 Competition Coupé [Vehículo Demostrativo]',
    category: 'Pintura',
    serviceUsed: 'Corrección de Pintura Multietapa (Demostración)',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1400',
    treatmentTime: 'Referencial: 3 Días',
    badge: '[Muestra Referencial] Nivel Espejo',
    description: 'Ejemplo demostrativo de nivelación de barniz en color oscuro para atenuar micro-rayas circulares y recuperar la profundidad óptica de la pintura.',
    highlights: ['Medición previa de grosor de laca', 'Atenuación de marcas circulares de lavado', 'Fotografía de demostración visual'],
    isDemoSample: true,
  },
  {
    id: 'proj-3',
    title: '[Demostración] Mercedes-AMG G63',
    carModel: 'Mercedes-AMG G63 [Vehículo Demostrativo]',
    category: 'Undercoating',
    serviceUsed: 'Undercoating Anticorrosivo de Chasis (Demostración)',
    imageUrl: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1400',
    treatmentTime: 'Referencial: 2 Días',
    badge: '[Muestra Referencial] Chasis',
    description: 'Referencia visual de recubrimiento en bajos y pasos de rueda para protección contra salinidad marina y amortiguación de gravilla.',
    highlights: ['Desengrase y lavado a presión de bajos', 'Enmascarado preventivo de sistema de escape', 'Fotografía de demostración visual'],
    isDemoSample: true,
  },
  {
    id: 'proj-4',
    title: '[Demostración] Audi RS6 Avant',
    carModel: 'Audi RS6 Avant [Vehículo Demostrativo]',
    category: 'Interior',
    serviceUsed: 'Lavado de Salón y Desinfección a Vapor (Demostración)',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1400',
    treatmentTime: 'Referencial: 1 a 2 Días',
    badge: '[Muestra Referencial] Vapor 140°C',
    description: 'Ejemplo ilustrativo de detallado higiénico interior: limpieza de tapicería con inyección-extracción y acondicionamiento mate en cueros.',
    highlights: ['Vapor seco que previene sobrehumedad', 'Acondicionador de cuero de acabado mate natural', 'Fotografía de demostración visual'],
    isDemoSample: true,
  },
  {
    id: 'proj-5',
    title: '[Demostración] Ferrari F8 Tributo',
    carModel: 'Ferrari F8 Tributo [Vehículo Demostrativo]',
    category: 'PPF',
    serviceUsed: 'PPF Frontal de Alto Impacto (Demostración)',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1400',
    treatmentTime: 'Referencial: 3 Días',
    badge: '[Muestra Referencial] Frontal Track',
    description: 'Muestra representativa de blindaje en fascia delantera y capó con película autorregenerable transparente contra piedras en carretera.',
    highlights: ['Protección de zonas frontales expuestas', 'Propiedad elástica de autocuración por calor', 'Fotografía de demostración visual'],
    isDemoSample: true,
  },
  {
    id: 'proj-6',
    title: '[Demostración] Porsche Taycan Turbo S',
    carModel: 'Porsche Taycan Turbo S [Vehículo Demostrativo]',
    category: 'Pintura',
    serviceUsed: 'Pulido de Brillo y Sellador Hidrofóbico (Demostración)',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400',
    treatmentTime: 'Referencial: 2 Días',
    badge: '[Muestra Referencial] Hidrofobia',
    description: 'Ilustración del efecto de repelencia al agua y brillo cristalino tras descontaminación completa y sellado protector.',
    highlights: ['Efecto hidrofóbico que facilita el lavado', 'Descontaminación ferrosa y mecánica previa', 'Fotografía de demostración visual'],
    isDemoSample: true,
  },
];
