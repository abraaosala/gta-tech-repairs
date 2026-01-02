import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Navigation, Phone, CheckCircle } from 'lucide-react';
import Button from './Button';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-brand-dark to-blue-950 relative overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-brand-blue/5 skew-y-3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Map/Image Area */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-cyan blur-[100px] opacity-20"></div>
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
              {/* Image of repair workbench/microscope */}
              <img 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1000&auto=format&fit=crop" 
                alt="Laboratório de Reparação GTA-Tech" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                        <MapPin className="text-brand-yellow mr-2" /> 
                        Escola de Condução EBJ
                    </h4>
                    <p className="text-gray-300 text-sm">{CONTACT_INFO.address}, {CONTACT_INFO.city}</p>
                 </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-brand-yellow text-brand-dark p-6 rounded-full shadow-[0_0_30px_rgba(255,204,0,0.4)] animate-bounce hidden md:block">
               <span className="font-black text-xl block text-center">30min</span>
               <span className="text-xs font-bold uppercase">Reparo Rápido</span>
            </div>
          </div>

          {/* Right: Info Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
              Onde <br/>
              <span className="text-brand-cyan">Estamos</span>
            </h2>
            
            <p className="text-gray-300 text-lg">
              Localizados estrategicamente para melhor lhe atender. Nossa loja conta com laboratório certificado e sala de espera confortável.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shrink-0">
                  <Navigation className="text-brand-cyan" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">Ponto de Referência</h5>
                  <p className="text-gray-400">Ao lado da Escola de condução EBJ, Cabassango.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-brand-cyan" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">Contatos Diretos</h5>
                  <p className="text-gray-400">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 mt-1 text-sm text-brand-yellow font-semibold">Atendimento WhatsApp 24h</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Troca de Tampa', 'Troca de Placa', 'Software', 'Manutenção'].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-brand-yellow" />
                        <span className="text-sm font-medium text-gray-300">{item}</span>
                    </div>
                  ))}
               </div>
               
               <Button variant="secondary" className="w-full md:w-auto">
                 Abrir no Google Maps
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;