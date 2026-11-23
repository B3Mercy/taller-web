/**
 * CATÁLOGO DETALLADO DE LOS 4 SERVICIOS CLAVE (ESPECIFICACIONES REFERENCIALES)
 * Información técnica, beneficios, protocolos paso a paso, FAQs y plantillas WhatsApp.
 * 
 * NOTA COMERCIAL:
 * Tiempos de trabajo, niveles de corrección y coberturas son estimaciones técnicas
 * que se adaptarán a la línea de productos e insumos autorizados por el taller.
 */

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  fullOverview: string;
  category: 'Protección Exterior' | 'Corrección & Brillo' | 'Chasis & Bajos' | 'Estética Interior';
  heroImage: string;
  detailImage: string;
  badge: string;
  durationEstimate: string;
  idealFor: string;
  
  technicalSpecs: Array<{
    label: string;
    value: string;
  }>;

  keyBenefits: Array<{
    title: string;
    description: string;
  }>;

  processSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;

  packages?: Array<{
    name: string;
    target: string;
    coverage: string;
    recommended: boolean;
  }>;

  faqs: Array<{
    question: string;
    answer: string;
  }>;

  whatsappTemplate: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'correccion-de-pintura',
    slug: 'correccion-de-pintura',
    name: 'Tratamiento y Corrección de Pintura',
    shortName: 'Corrección de Pintura',
    headline: 'Restauración Óptica del Barniz y Nivelación Espejo de Alta Definición',
    description: 'Proceso de pulido técnico multi-etapa diseñado para atenuar o remover microrrayas (swirls), marcas de agua ácida y hologramas mediante abrasivos controlados, devolviendo profundidad y reflejo al barniz.',
    fullOverview: 'La pintura vehicular moderna está protegida por una capa de barniz transparente (clear coat) de espesor milimétrico (típicamente 35 a 50 micras). Lavados inadecuados y el polvo abrasivo generan microrrayones circulares que dispersan la luz. El servicio propone medir previamente el grosor de pintura en micras y nivelar el barniz de forma controlada para optimizar el reflejo óptico sin comprometer la vida útil de la pintura original. [Nota: Los insumos de sellado final se coordinan según requerimiento del cliente].',
    category: 'Corrección & Brillo',
    heroImage: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1600',
    detailImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1400',
    badge: 'Acabado Espejo Referencial',
    durationEstimate: 'Referencial: 2 a 4 Días según evaluación',
    idealFor: 'Autos con swirls, microrrayones o pérdida de brillo que requieran diagnóstico previo de laca.',
    
    technicalSpecs: [
      { label: 'Diagnóstico previo', value: 'Medición digital de espesor de pintura' },
      { label: 'Atenuación de defectos', value: '70% a 95% (sujeto al espesor seguro de laca)' },
      { label: 'Maquinaria sugerida', value: 'Pulidoras roto-orbitales de rotación forzada' },
      { label: 'Inspección lumínica', value: 'Luces de espectro diurno de alta fidelidad' },
      { label: 'Sellado posterior', value: 'Sellador polimérico o Cerámico SiO2 [Por definir]' },
    ],

    keyBenefits: [
      {
        title: 'Reflejo Nítido y Homogéneo',
        description: 'Atenúa marcas circulares para recuperar la nitidez visual del color original.',
      },
      {
        title: 'Preservación Cautelosa de Laca',
        description: 'Medición previa del grosor para remover únicamente las micras indispensables.',
      },
      {
        title: 'Sin Productos de Relleno Ocultos',
        description: 'Nivelación mecánica real sin ceras con silicona que enmascaren temporalmente los defectos.',
      },
      {
        title: 'Preparación para Selladores',
        description: 'Superficie descontaminada y pulida, óptima para recibir recubrimientos de protección.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Inspección Inicial y Mapeo en Micras',
        description: 'Evaluación del estado de cada panel con medidor electromagnético para definir un margen seguro de pulido.',
      },
      {
        step: '02',
        title: 'Descontaminación Técnica',
        description: 'Lavado con espuma de pH neutro, purificación de partículas ferrosas y barra de arcilla suave.',
      },
      {
        step: '03',
        title: 'Enmascarado Preventivo',
        description: 'Protección meticulosa de molduras plásticas, gomas, emblemas y faros con cinta técnica automotriz.',
      },
      {
        step: '04',
        title: 'Corrección Multietapa (Corte y Acabado)',
        description: 'Fases de corte y refinado con micro-pads y pastas abrasivas para eliminar defectos visibles sin sobrecalentar el panel.',
      },
      {
        step: '05',
        title: 'Desengrase y Capa de Sellado',
        description: 'Limpieza de aceites residuales con alcohol isopropílico e instalación del sellado protector acordado.',
      },
    ],

    packages: [
      {
        name: 'Etapa 1: Realce y Brillo (1 Paso)',
        target: 'Para vehículos seminuevos con desgaste leve',
        coverage: 'Pulido ligero de abrillantado para incrementar reflectividad [Tiempo estimado: 24h].',
        recommended: false,
      },
      {
        name: 'Etapa 2: Corrección Intermedia (2 Pasos)',
        target: 'Configuración estándar para uso cotidiano',
        coverage: 'Corte medio y refinado para atenuar la mayor parte de marcas circulares [Estimado: 48h].',
        recommended: true,
      },
      {
        name: 'Etapa 3: Corrección Exhaustiva (3 Pasos)',
        target: 'Pinturas severamente deterioradas o colores oscuros',
        coverage: 'Intervención de máxima minuciosidad sujeta a viabilidad de micras [Estimado: 72h].',
        recommended: false,
      },
    ],

    faqs: [
      {
        question: '¿La corrección desgasta el barniz de mi vehículo?',
        answer: 'Un proceso responsable solo remueve entre 2 y 4 micras de la capa superficial del barniz. La medición previa con micrómetro digital garantiza no comprometer la resistencia UV de la pintura original.',
      },
      {
        question: '¿Cuál es la diferencia con un encerado comercial tradicional?',
        answer: 'Los encerados comerciales suelen utilizar ceras con siliconas que disimulan temporalmente los rayones sin nivelar la laca. La corrección técnica pule la superficie de forma permanente.',
      },
      {
        question: '¿Cuánto dura el resultado de la corrección?',
        answer: 'El acabado corregido es permanente. Su conservación futura dependerá del método de lavado empleado; por ello se recomienda complementarlo con un sellado protector.',
      },
    ],

    whatsappTemplate: 'Hola CAR WASH - UP Spa Automotriz, deseo cotizar el servicio de Corrección de Pintura para mi auto [Marca / Modelo / Año]. Quisiera información sobre tiempos y opciones de sellado.',
  },

  {
    id: 'ppf-paint-protection-film',
    slug: 'ppf-paint-protection-film',
    name: 'Protección PPF (Paint Protection Film)',
    shortName: 'Protección PPF',
    headline: 'Lámina de Poliuretano Termoplástico para Protección contra Impactos Viales',
    description: 'Instalación de película de poliuretano termoplástico (TPU) de alta resistencia. Diseñada para actuar como barrera física frente a impactos de gravilla, microrrayones y agentes químicos cotidianos.',
    fullOverview: 'El Paint Protection Film (PPF) es una lámina elastomérica de poliuretano de aproximadamente 200 micras de espesor que se adhiere sobre la carrocería. Ofrece absorción física ante impactos de piedras proyectadas en carretera y cuenta con propiedades de autorregeneración térmica frente a marcas leves. [Nota: Las marcas de láminas, garantías oficiales de fábrica y tipos de precorte se homologan según los convenios del taller].',
    category: 'Protección Exterior',
    heroImage: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1600',
    detailImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1400',
    badge: 'Blindaje Físico TPU',
    durationEstimate: 'Referencial: 3 a 5 Días según área',
    idealFor: 'Autos nuevos o de carretera que requieran blindaje contra piedras y gravilla.',
    
    technicalSpecs: [
      { label: 'Espesor referencial', value: '200 µm (aprox. 8 mils) TPU alifático' },
      { label: 'Propiedad elástica', value: 'Capacidad autorregenerable con calor suave' },
      { label: 'Método de corte', value: 'Plotter digital / ajuste de bordes [Sujeto a plantilla]' },
      { label: 'Opciones de acabado', value: 'Ultra Gloss (Brillante) o Satinado (Mate)' },
      { label: 'Garantía referencial', value: 'Sujeta a fabricante del insumo [Por confirmar]' },
    ],

    keyBenefits: [
      {
        title: 'Amortiguación de Impactos de Gravilla',
        description: 'La viscoelasticidad del film absorbe el golpe físico de piedras en autopista.',
      },
      {
        title: 'Autorregeneración Térmica',
        description: 'Marcas leves de frotamiento se atenúan al exponer el panel a calor ambiental o agua tibia.',
      },
      {
        title: 'Conservación del Color Original',
        description: 'Película transparente con filtro UV para proteger la laca original de la intemperie.',
      },
      {
        title: 'Removible sin Daño',
        description: 'Adhesivos acrílicos formulados para retirarse sin afectar la pintura de fábrica.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Preparación y Descontaminación',
        description: 'Limpieza minuciosa y pulido preparatorio para garantizar una superficie libre de impurezas.',
      },
      {
        step: '02',
        title: 'Diseño y Precorte Digital',
        description: 'Corte por plotter computarizado adaptado a las medidas y paños del modelo específico.',
      },
      {
        step: '03',
        title: 'Montaje en Ambiente Limpio',
        description: 'Instalación con gel lubricante en cabina cerrada para minimizar partículas de polvo.',
      },
      {
        step: '04',
        title: 'Fijación y Acabado de Bordes',
        description: 'Remates doblados en esquinas y líneas de corte para un acabado discreto.',
      },
      {
        step: '05',
        title: 'Secado y Control Térmico',
        description: 'Inspección térmica en aristas para verificar la correcta adhesión inicial.',
      },
    ],

    packages: [
      {
        name: 'Paquete Frontal Básico de Impacto',
        target: 'Protección de zonas de contacto directo',
        coverage: 'Parachoques delantero, faros y carcasas de retrovisores.',
        recommended: true,
      },
      {
        name: 'Paquete Frontal Completo',
        target: 'Cobertura ampliada para autopistas',
        coverage: 'Frente completo, capó entero, guardafangos y franja de techo.',
        recommended: false,
      },
      {
        name: 'Paquete Carrocería Completa (Full Body)',
        target: 'Protección integral de todos los paneles pintados',
        coverage: 'Cobertura del 100% de la carrocería en acabado brillo o mate satinado.',
        recommended: false,
      },
    ],

    faqs: [
      {
        question: '¿El film PPF cambia el color original del vehículo?',
        answer: 'El film de grado óptico es totalmente transparente y conserva el tono de fábrica. También existe la variante mate para clientes que deseen un acabado satinado personalizado.',
      },
      {
        question: '¿La lámina se vuelve amarilla con el tiempo?',
        answer: 'Las películas modernas de TPU alifático integran estabilizadores UV resistentes a la intemperie para evitar el amarillamiento prematuro.',
      },
      {
        question: '¿Se puede retirar el PPF posteriormente?',
        answer: 'Sí. Está formulado para ser desinstalado técnicamente sin dañar la pintura original de fábrica.',
      },
    ],

    whatsappTemplate: 'Hola CAR WASH - UP Spa Automotriz, quiero consultar sobre la instalación de PPF para mi vehículo [Marca / Modelo / Año]. Me interesa información de paquetes y tiempos estimados.',
  },

  {
    id: 'undercoating-chasis',
    slug: 'undercoating-chasis',
    name: 'Undercoating y Protección de Chasis',
    shortName: 'Undercoating',
    headline: 'Tratamiento Anticorrosivo y Aislamiento para Bajos del Vehículo',
    description: 'Recubrimiento protector para chasis, largueros y pasos de rueda. Ayuda a prevenir la corrosión por humedad y salinidad costera, amortiguando ruidos de rodadura.',
    fullOverview: 'La parte inferior del automóvil se encuentra expuesta a la humedad, barro, sales marinas y gravilla. Este servicio comprende la descontaminación y lavado técnico de bajos, saneamiento de corrosión superficial previa, enmascarado riguroso de zonas mecánicas y térmicas, y aplicación de compuesto elastomérico anticorrosivo. [Nota: Los productos específicos y períodos de garantía dependerán del fabricante del recubrimiento seleccionado].',
    category: 'Chasis & Bajos',
    heroImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1600',
    detailImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1400',
    badge: 'Protección Anticorrosiva',
    durationEstimate: 'Referencial: 1 a 2 Días de taller',
    idealFor: 'SUVs, camionetas 4x4 y vehículos que circulan en zonas costeras o caminos de trocha.',
    
    technicalSpecs: [
      { label: 'Tipo de recubrimiento', value: 'Compuesto elastomérico / caucho sintético' },
      { label: 'Propiedad elástica', value: 'Flexible para absorber vibraciones de marcha' },
      { label: 'Beneficio acústico', value: 'Atenuación del repiqueteo de gravilla en pasaruedas' },
      { label: 'Zonas cubiertas', value: 'Chasis estructural, largueros y pasaruedas' },
      { label: 'Zonas resguardadas', value: 'Escape, discos de freno, sensores y motor' },
    ],

    keyBenefits: [
      {
        title: 'Protección Frente a Salinidad y Humedad',
        description: 'Genera una barrera física frente a los agentes corrosivos del ambiente.',
      },
      {
        title: 'Amortiguación de Piedras en Bajos',
        description: 'La capa elástica absorbe la energía de proyectiles disparados por los neumáticos.',
      },
      {
        title: 'Atenuación de Ruidos de Rodadura',
        description: 'Disminuye la resonancia metálica del tren de rodadura en la cabina.',
      },
      {
        title: 'Enmascarado Preventivo Riguroso',
        description: 'Cuidado estricto del tubo de escape y frenos para evitar olores o inconvenientes mecánicos.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Elevación e Inspección de Bajos',
        description: 'Montaje en elevador hidráulico y retiro de pasaruedas plásticos para despejar el área.',
      },
      {
        step: '02',
        title: 'Lavado a Presión y Desengrase',
        description: 'Limpieza de tierra, grasas y barro acumulados en la chapa inferior.',
      },
      {
        step: '03',
        title: 'Saneamiento Superficial de Óxido',
        description: 'Tratamiento localizado en puntos de corrosión superficial antes del recubrimiento.',
      },
      {
        step: '04',
        title: 'Enmascarado de Zonas Críticas',
        description: 'Protección de caño de escape, catalizador, discos de freno, amortiguadores y transmisión.',
      },
      {
        step: '05',
        title: 'Aplicación Neumática y Secado',
        description: 'Pulverización homogénea del compuesto protector, curado y reinstalación de pasaruedas.',
      },
    ],

    faqs: [
      {
        question: '¿El producto genera humo u olores al calentarse el auto?',
        answer: 'No. El enmascarado riguroso garantiza que el compuesto no entre en contacto con el tubo de escape ni zonas de alta temperatura del motor.',
      },
      {
        question: '¿Con qué frecuencia se recomienda inspeccionar el undercoating?',
        answer: 'Se recomienda realizar una inspección visual de control anual para verificar la integridad del recubrimiento en zonas de alto impacto.',
      },
      {
        question: '¿Afecta la garantía de fábrica de un vehículo nuevo?',
        answer: 'El producto se aplica únicamente sobre chapa estructural y pasos de rueda autorizados, sin intervenir piezas mecánicas ni cableado electrónico.',
      },
    ],

    whatsappTemplate: 'Hola CAR WASH - UP Spa Automotriz, deseo consultar sobre el servicio de Undercoating de chasis para mi auto [Marca / Modelo / Año].',
  },

  {
    id: 'lavado-de-salon',
    slug: 'lavado-de-salon',
    name: 'Lavado de Salón y Limpieza Interior',
    shortName: 'Lavado de Salón',
    headline: 'Limpieza Higiénica a Vapor y Acondicionamiento de Interiores',
    description: 'Tratamiento integral de habitáculo: inyección-extracción en tapicerías textiles, desinfección a vapor seco en ductos de climatización y nutrición de superficies de cuero y plásticos.',
    fullOverview: 'El interior del vehículo acumula polvo, ácaros, bacterias y manchas con el uso diario. Este tratamiento combina tecnología de vapor seco a alta temperatura para disolver suciedad sin sobrehumedecer las espumas internas, junto con inyección y succión en tapices textiles y acondicionadores de tacto mate para pieles y molduras. [Nota: El nivel de desarmado de asientos se evalúa técnicamente según arneses y sensores del fabricante].',
    category: 'Estética Interior',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1600',
    detailImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1400',
    badge: 'Higiene & Detallado Interior',
    durationEstimate: 'Referencial: 1 a 2 Días de servicio',
    idealFor: 'Renovación de habitáculo, desinfección profunda y preservación de tapicerías.',
    
    technicalSpecs: [
      { label: 'Tecnología térmica', value: 'Vapor seco a alta temperatura (aprox. 140°C)' },
      { label: 'Sistema textil', value: 'Inyección y extracción de alto caudal' },
      { label: 'Cuidado de cuero', value: 'Limpiador de pH equilibrado y acondicionador mate' },
      { label: 'Climatización', value: 'Sanitización de ductos de A/C' },
      { label: 'Acabado en plásticos', value: 'Aspecto natural mate (sin siliconas grasosas)' },
    ],

    keyBenefits: [
      {
        title: 'Higienización con Vapor Seco',
        description: 'Desintegra suciedad y sanitiza ductos utilizando un volumen mínimo de agua.',
      },
      {
        title: 'Secado Rápido Controlado',
        description: 'La extracción por vacío minimiza la humedad residual en espumas y alfombras.',
      },
      {
        title: 'Nutrición de Cuero sin Brillo Grasoso',
        description: 'Limpia poros y humecta la piel devolviendo un tacto suave y acabado mate de fábrica.',
      },
      {
        title: 'Protección Antiestática en Molduras',
        description: 'Acondicionadores con filtro UV que previenen resecamiento sin atraer polvo.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Aspirado Exhaustivo Inicial',
        description: 'Aspirado milimétrico de alfombras, ranuras y maletero para desalojar partículas sólidas.',
      },
      {
        step: '02',
        title: 'Limpieza Delicada de Techo y Pilares',
        description: 'Tratamiento manual suave para desmanchar sin aflojar el adhesivo del tapizado superior.',
      },
      {
        step: '03',
        title: 'Inyección y Succión en Asientos',
        description: 'Aplicación de bio-limpiador y extracción inmediata por succión de alto vacío.',
      },
      {
        step: '04',
        title: 'Acondicionamiento de Cuero y Tablero',
        description: 'Limpieza de costuras con cepillos suaves y nutrición con bálsamos de absorción seca.',
      },
      {
        step: '05',
        title: 'Sanitización de Ductos de A/C',
        description: 'Vaporizado de salidas de aire acondicionado para neutralizar bacterias y malos olores.',
      },
    ],

    faqs: [
      {
        question: '¿Los asientos se entregan húmedos?',
        answer: 'No. Al emplear vapor seco y extractores industriales de alta potencia, la humedad residual es mínima y se entrega ventilado y seco al tacto.',
      },
      {
        question: '¿Se desmontan los asientos durante el lavado?',
        answer: 'El desmontaje se evalúa según el estado del habitáculo y los protocolos de sensores y airbags del vehículo para no generar alertas en el tablero.',
      },
      {
        question: '¿Qué producto aplican en el tablero y puertas?',
        answer: 'Se utilizan acondicionadores de base acuosa que proporcionan un acabado mate limpio y protección UV, sin siliconas grasosas que atraigan polvo.',
      },
    ],

    whatsappTemplate: 'Hola CAR WASH - UP Spa Automotriz, deseo consultar sobre el Lavado de Salón y detallado interior para mi auto [Marca / Modelo / Año]. La tapicería es de [Tela / Cuero].',
  },
];
