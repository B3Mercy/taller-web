import { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Droplets,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';

export const QuoteCalculator = () => {
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [vehicleType, setVehicleType] = useState('Sedán / Coupé');
  
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Protección PPF (TPU)',
  ]);
  
  const [clientName, setClientName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [paintCondition, setPaintCondition] = useState('Seminuevo con microrrayas leves');

  const vehicleTypes = [
    'Sedán / Coupé',
    'SUV / Crossover',
    'Camioneta 4x4 / Pick-up',
    'Superdeportivo',
  ];

  const availableServices = [
    {
      id: 'ppf',
      name: 'Protección PPF (TPU)',
      desc: 'Blindaje contra piedras e impactos viales (200µm)',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
    {
      id: 'paint',
      name: 'Corrección de Pintura',
      desc: 'Nivelación óptica del barniz y eliminación de swirls',
      icon: Sparkles,
      color: 'text-amber-400',
    },
    {
      id: 'undercoating',
      name: 'Undercoating de Chasis',
      desc: 'Protección anticorrosiva de bajos contra salitre',
      icon: Layers,
      color: 'text-emerald-400',
    },
    {
      id: 'interior',
      name: 'Lavado de Salón a Vapor',
      desc: 'Desinfección profunda a 140°C y nutrición de cuero',
      icon: Droplets,
      color: 'text-blue-400',
    },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const generateWhatsAppMessage = () => {
    const brandStr = carBrand.trim() || '[Marca]';
    const modelStr = carModel.trim() || '[Modelo]';
    const yearStr = carYear.trim() || '[Año]';
    const colorStr = carColor.trim() ? `, Color: ${carColor.trim()}` : '';
    const nameStr = clientName.trim() ? `\n- Cliente: ${clientName.trim()}` : '';
    const dateStr = preferredDate ? `\n- Fecha tentativa: ${preferredDate}` : '';
    
    return `Hola ${siteConfig.brandName}, deseo cotizar y agendar una evaluación técnica para mi vehículo:
- Vehículo: ${brandStr} ${modelStr} (${yearStr}) - ${vehicleType}${colorStr}
- Estado actual de pintura: ${paintCondition}
- Servicios de interés: ${selectedServices.join(' + ')}${dateStr}${nameStr}
¿Me confirman disponibilidad de cabina y tiempos de trabajo en taller?`;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(generateWhatsAppMessage());
    window.open(link, '_blank');
  };

  return (
    <div className="w-full bg-[#0d131f] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
          Asistente de Cotización & Reserva
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Configura tu Proyecto Automotriz
        </h3>
        <p className="mt-2 text-slate-400 text-sm">
          Completa los datos de tu vehículo y seleccionaremos las fases de trabajo ideales con respuesta directa a WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSendToWhatsApp} className="space-y-8">
        {/* Paso 1: Tipo y Datos del Vehículo */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">
              1
            </span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Datos de tu Vehículo
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {vehicleTypes.map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setVehicleType(type)}
                className={`p-3 rounded-xl text-xs font-medium text-center border transition-all ${
                  vehicleType === type
                    ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-slate-400 text-xs mb-1">Marca</label>
              <input
                type="text"
                value={carBrand}
                onChange={(e) => setCarBrand(e.target.value)}
                placeholder="Ej. Porsche / BMW"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Modelo</label>
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                placeholder="Ej. 911 / M3 / Q8"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Año</label>
              <input
                type="text"
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
                placeholder="Ej. 2024"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Color de Pintura</label>
              <input
                type="text"
                value={carColor}
                onChange={(e) => setCarColor(e.target.value)}
                placeholder="Ej. Negro / Gris"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Paso 2: Selección de Servicios */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">
              2
            </span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Servicios Requeridos (Selecciona uno o varios)
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableServices.map((svc) => {
              const isSelected = selectedServices.includes(svc.name);
              const SvcIcon = svc.icon;
              return (
                <div
                  key={svc.id}
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onClick={() => toggleService(svc.name)}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleService(svc.name);
                    }
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-400'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    <SvcIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-slate-200">
                        {svc.name}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                            : 'border-slate-700'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4 fill-current" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Paso 3: Contacto y Fecha */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">
              3
            </span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Datos de Coordinación (Opcional)
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-400 text-xs mb-1">Tu Nombre</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Nombre para la cita"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Fecha Tentativa</label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Estado de la Pintura</label>
              <select
                value={paintCondition}
                onChange={(e) => setPaintCondition(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
              >
                <option value="Nuevo de concesionario (0 km)">Nuevo de concesionario (0 km)</option>
                <option value="Seminuevo con microrrayas leves">Seminuevo con microrrayas leves</option>
                <option value="Pintura con marcas de agua o swirls notorios">Pintura con swirls notorios</option>
                <option value="Vehículo para blindaje PPF de carretera">Para blindaje PPF de carretera</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vista previa del mensaje formateado */}
        <div className="bg-[#070b12] border border-slate-800/80 rounded-2xl p-4 text-xs font-mono text-slate-400 leading-relaxed">
          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">
            Mensaje estructurado para WhatsApp:
          </div>
          <p className="whitespace-pre-line text-slate-300">
            {generateWhatsAppMessage()}
          </p>
        </div>

        {/* Botón de Envío */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            🔒 Diagnóstico visual de cortesía en taller • Sin compromiso de contratación
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Generar y Enviar a WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
};
