import { useState } from 'react';
import { MessageSquare, X, Check, Send } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig';

export const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('PPF (Paint Protection Film)');
  const [carModel, setCarModel] = useState('');

  const quickServices = [
    'Protección PPF (TPU)',
    'Corrección de Pintura',
    'Undercoating Chasis',
    'Lavado de Salón a Vapor',
  ];

  const handleSend = () => {
    const msg = `Hola ${siteConfig.brandName}, deseo cotizar el servicio de ${selectedService}${
      carModel ? ` para mi vehículo ${carModel}` : ''
    }. ¿Tienen disponibilidad en cabina esta semana?`;
    window.open(buildWhatsAppLink(msg), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end">
      {/* Popover Card de Atención Directa */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-[#0c121d] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header del popover */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm">
                  CW
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight truncate max-w-[200px]">
                  {siteConfig.brandName}
                </h4>
                <p className="text-emerald-100 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  En línea • Atención WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cuerpo interactivo */}
          <div className="p-4 space-y-3 text-slate-300 text-xs">
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 text-slate-300 leading-relaxed">
              👋 ¡Hola! ¿Deseas cotizar o consultar sobre el tratamiento ideal para tu auto?
              Selecciona tu servicio y modelo para enviarte la propuesta de inmediato.
            </div>

            <div>
              <label className="block text-slate-400 font-medium mb-1.5 text-[11px] uppercase tracking-wider">
                Servicio de Interés:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {quickServices.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className={`px-2.5 py-2 rounded-xl text-left font-medium transition-all text-[11px] flex items-center justify-between ${
                      selectedService === svc
                        ? 'bg-cyan-950/60 border border-cyan-500 text-cyan-300'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{svc}</span>
                    {selectedService === svc && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-medium mb-1.5 text-[11px] uppercase tracking-wider">
                Marca / Modelo / Año (Opcional):
              </label>
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                placeholder="Ej. Porsche Macan 2023 / BMW M3"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir WhatsApp (Simulación Demo)</span>
            </button>
            <p className="text-[10px] text-center text-slate-500">
              * Número placeholder para demostración técnica. Se actualizará con la línea oficial del cliente.
            </p>
          </div>
        </div>
      )}

      {/* Botón flotante circular */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.7)] transition-all transform hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Abrir asistente de WhatsApp para cotización"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-950 flex items-center justify-center text-[9px] font-bold text-slate-950">
          1
        </span>
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-7 h-7 fill-white" />
        )}
      </button>
    </div>
  );
};
