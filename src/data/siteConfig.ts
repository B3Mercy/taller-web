/**
 * CONFIGURACIÓN CENTRALIZADA DE LA WEB Y VERACIDAD COMERCIAL
 * Todos los datos del taller, datos comerciales, textos de contacto y referencias
 * de imágenes se concentran aquí para que el cliente pueda editarlos fácilmente.
 * 
 * NOTA DE PRESENTACIÓN:
 * Los valores entre corchetes [...] corresponden a datos provisionales y placeholders
 * que deben ser completados o validados por el cliente antes del despliegue comercial.
 */

export interface SiteConfig {
  isDemonstrationMode: boolean;
  demoNotice: string;
  brandName: string;
  siteUrl: string;
  tagline: string;
  description: string;
  city: string;
  country: string;
  
  // Datos comerciales y de contacto (Placeholders identificables)
  contact: {
    isConfigured: boolean;
    phoneDisplay: string;
    phoneRaw: string;
    whatsappNumber: string; // formato internacional sin '+' ni espacios
    whatsappDisplay: string;
    email: string;
    address: string;
    district: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsUrl: string;
    wazeUrl: string;
    hours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };

  // Redes sociales placeholders
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
    youtube: string;
  };

  // Métricas técnicas y estándares de proceso (sin cifras comerciales inventadas)
  trustMetrics: Array<{
    label: string;
    value: string;
    description: string;
  }>;

  // Marcas de referencia demostrativa
  featuredBrands: string[];

  // Galería de imágenes centralizada (Fotografías de stock automotriz referenciales)
  images: {
    heroBackground: string;
    heroCar: string;
    workshopBooth: string;
    coatingDetail: string;
    ppfInstallation: string;
    paintCorrectionMacro: string;
    undercoatingChassis: string;
    interiorDetailing: string;
    beforeSwirls: string;
    afterGloss: string;
    inspectionLight: string;
  };
}

export const siteConfig: SiteConfig = {
  isDemonstrationMode: false,
  demoNotice: "SITIO OFICIAL: Centro especializado en estética y protección automotriz de alta gama.",

  brandName: "CAR WASH - UP Spa Automotriz",
  siteUrl: "https://carwashup.pe",
  tagline: "Estética & Spa Automotriz de Alta Gama",
  description: "Centro especializado en Paint Protection Film (PPF), Corrección Óptica de Pintura, Undercoating y Detailing Interior en Lima. Atención en Jirón Arequipa 319, Lima 15086.",
  city: "Lima",
  country: "Perú",

  contact: {
    isConfigured: true,
    phoneDisplay: "+51 921 006 145",
    phoneRaw: "+51921006145",
    whatsappNumber: "51921006145",
    whatsappDisplay: "+51 921 006 145",
    email: "contacto@carwashup.pe",
    address: "Jirón Arequipa 319",
    district: "Lima 15086",
    coordinates: {
      lat: -12.0833,
      lng: -77.085,
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jir%C3%B3n+Arequipa+319,+Lima+15086",
    wazeUrl: "https://waze.com/ul?q=Jir%C3%B3n+Arequipa+319+Lima+15086&navigate=yes",
    hours: {
      weekdays: "Lunes a Viernes: 08:30 – 18:30",
      saturday: "Sábados: 09:00 – 14:00",
      sunday: "Domingos: Previa reserva por WhatsApp",
    },
  },

  socials: {
    instagram: "https://instagram.com/carwashup_pe",
    facebook: "https://facebook.com/carwashup.pe",
    tiktok: "https://tiktok.com/@carwashup.pe",
    youtube: "https://youtube.com/@carwashup.pe",
  },

  trustMetrics: [
    {
      label: "Inspección de Barniz",
      value: "Micrómetro",
      description: "Medición de espesor de laca antes de pulir",
    },
    {
      label: "Espesor Típico PPF",
      value: "200 µm",
      description: "Especificación técnica de láminas TPU estándar",
    },
    {
      label: "Control Ambiental",
      value: "Cabina Limpia",
      description: "Instalación en ambiente libre de polvo",
    },
    {
      label: "Garantías Escritas",
      value: "Por Insumo",
      description: "Sujetas a la marca elegida por el cliente",
    },
  ],

  featuredBrands: [
    "Porsche",
    "BMW M",
    "Mercedes-AMG",
    "Audi Sport",
    "Land Rover",
    "Ferrari",
    "Maserati",
    "Tesla",
  ],

  images: {
    heroBackground: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=2000", // Stock: Supercar oscuro en estudio con luces
    heroCar: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1600", // Stock: Mercedes negro pulido
    workshopBooth: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1400", // Stock: Taller con luces LED hexágonos
    coatingDetail: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1400", // Stock: Gotas de agua hidrofóbicas
    ppfInstallation: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1400", // Stock: Detalle instalación de film
    paintCorrectionMacro: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1400", // Stock: Pulido de pintura con luz
    undercoatingChassis: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1400", // Stock: Mecánica / chasis elevado
    interiorDetailing: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1400", // Stock: Interior en cuero de lujo
    beforeSwirls: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1400", // Stock: Pintura con reflejo difuso
    afterGloss: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400", // Stock: Acabado espejo
    inspectionLight: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400", // Stock: Reflejos de luces en carrocería
  },
};

/**
 * Generador de URLs de WhatsApp oficial con mensaje pre-codificado
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const defaultMsg = `Hola ${siteConfig.brandName}, deseo información y cotización sobre sus servicios de estética y protección automotriz para mi vehículo.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
