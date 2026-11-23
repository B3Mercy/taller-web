# CAR WASH - UP Spa Automotriz 🚗✨

> Web corporativa profesional de alta gama especializada en estética vehicular, Paint Protection Film (PPF), corrección óptica de pintura, undercoating y detallado interior.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📌 Datos de la Empresa

- **Razón Comercial:** CAR WASH - UP Spa Automotriz
- **Slogan:** Estética & Spa Automotriz de Alta Gama
- **Ubicación:** Jirón Arequipa 319, Lima 15086, Perú
- **Teléfono / WhatsApp:** [+51 921 006 145](https://wa.me/51921006145)

---

## 🚀 Servicios Especializados

1. **Tratamiento y Corrección de Pintura:** Nivelación óptica micrométrica del clear coat para atenuación de swirls y acabado espejo.
2. **Protección PPF (Paint Protection Film):** Película de poliuretano termoplástico (TPU) alifático de 200 micras autorregenerable.
3. **Undercoating y Protección de Chasis:** Tratamiento anticorrosivo para chasis estructural y pasos de rueda contra salitre y humedad.
4. **Lavado de Salón y Limpieza Interior:** Desinfección profunda con vapor seco a 140°C, inyección-extracción y nutrición de cueros.

---

## 🛠️ Tecnologías y Características

- **Framework:** React 19 + TypeScript + Vite 8.
- **Estilos:** Tailwind CSS v4 con paleta oscura premium (`#080c14`), acentos cian/ámbar y micro-interacciones.
- **Animaciones:** Animaciones progresivas de scroll e imágenes optimizadas mediante `IntersectionObserver` nativo.
- **Componentes Interactivos:**
  - Comparador táctil antes/después (`BeforeAfterSlider`).
  - Cotizador en tiempo real con exportación formateada a WhatsApp (`QuoteCalculator`).
  - Lightbox modal para casos de proyectos en la galería.
  - Botón flotante y barra sticky optimizada para móviles.
- **SEO & Performance:** HTML semántico, títulos y descripciones únicas, OpenGraph y datos estructurados Schema.org (`AutoRepair`, `OfferCatalog`, `FAQPage`, `BreadcrumbList`).

---

## 💻 Instalación y Desarrollo

### Prerrequisitos
- Node.js >= 18
- pnpm instalado globalmente (`npm install -g pnpm`)

### Comandos de Ejecución

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar servidor de desarrollo local
pnpm dev

# 3. Compilar para producción (validación TypeScript + bundle Vite)
pnpm build

# 4. Previsualizar compilación de producción
pnpm preview
```

---

## 📁 Estructura del Código

```text
D:\Prueba1/
├── src/
│   ├── components/         # Navbar, Footer, Cotizador, Sliders, WhatsApp, SEO
│   ├── data/
│   │   ├── siteConfig.ts   # Configuración centralizada de la empresa y contacto
│   │   ├── servicesData.ts # Fichas técnicas, protocolos y especificaciones
│   │   └── projectsData.ts # Casos demostrativos y proyectos de galería
│   ├── pages/              # 9 rutas completas (Home, Servicios, 4 Detalle, Galería, Nosotros, Contacto)
│   ├── App.tsx             # Enrutamiento, ScrollToTop y ScrollRevealManager
│   ├── main.tsx            # Punto de entrada de React
│   └── index.css           # Tailwind CSS v4, animaciones e identidad estética
├── public/                 # Favicon y assets estáticos
├── screenshots/            # 21 capturas completas desktop (1440px) y mobile (390px)
├── index.html              # Template principal con metadatos SEO
└── vite.config.js          # Configuración de empaquetado Vite
```

---

## 📄 Licencia

© 2026 CAR WASH - UP Spa Automotriz. Todos los derechos reservados.
