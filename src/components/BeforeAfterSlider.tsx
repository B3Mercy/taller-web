import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Condición Inicial (Swirls / Desgaste)',
  afterLabel = 'Acabado Spa Automotriz (Nivelación & Sellado Óptico)',
  title = 'Transformación Óptica Real',
  subtitle = 'Arrastra el control deslizante para comparar el estado previo frente a nuestro acabado nivel espejo.',
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const position = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        ref={containerRef}
        role="slider"
        aria-label="Control deslizante para comparar estado antes y después"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setSliderPosition((prev) => Math.max(0, prev - 5));
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            setSliderPosition((prev) => Math.min(100, prev + 5));
          }
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden select-none border border-slate-800 shadow-2xl cursor-ew-resize bg-slate-950 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      >
        {/* Imagen AFTER (fondo completo) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Badge AFTER */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-lg">
          {afterLabel}
        </div>

        {/* Imagen BEFORE (recortada con clip-path) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current
                ? `${containerRef.current.clientWidth}px`
                : '100%',
              height: '100%',
            }}
            loading="lazy"
          />
          {/* Badge BEFORE */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-semibold tracking-wider uppercase shadow-lg">
            {beforeLabel}
          </div>
        </div>

        {/* Línea divisoria y tirador interactivo */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-white shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center transition-transform group-hover:scale-110">
            <svg
              className="w-5 h-5 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="8 7 3 12 8 17" />
              <polyline points="16 7 21 12 16 17" />
            </svg>
          </div>
        </div>

        {/* Instrucción visual flotante */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none px-4 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm border border-slate-700 text-slate-300 text-xs">
          ← Arrastra para comparar →
        </div>
      </div>
    </div>
  );
};
