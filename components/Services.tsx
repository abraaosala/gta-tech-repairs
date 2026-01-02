import React, { useEffect, useState } from 'react';
import { landingService, LandingServiceData } from '../services/landingService';
import SectionHeading from './SectionHeading';
import { ArrowRight, Smartphone, Battery, Cpu, Wifi, Wrench, Monitor, ShoppingCart, Laptop, ShieldCheck, HelpCircle } from 'lucide-react';

// Mapeamento de ícones vindo do banco (string) para componente Lucide
const IconMap: Record<string, any> = {
  'Smartphone': Smartphone,
  'Battery': Battery,
  'Cpu': Cpu,
  'Wifi': Wifi,
  'Monitor': Monitor,
  'Wrench': Wrench,
  'ShoppingCart': ShoppingCart,
  'Laptop': Laptop,
  'ShieldCheck': ShieldCheck,
};

const Services: React.FC = () => {
  const [services, setServices] = useState<LandingServiceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await landingService.getServices();
      setServices(data);
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });

      // Dipara evento customizado para o componente Contact capturar
      window.dispatchEvent(new CustomEvent('set-service', { detail: serviceTitle }));

      const textarea = contactSection.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      if (textarea) {
        textarea.focus();
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Nossos Serviços"
          subtitle="Especialistas em Reparos"
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-cyan"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const ServiceIcon = IconMap[service.icon] || HelpCircle;
              return (
                <div
                  key={service.id}
                  className="group relative p-8 rounded-3xl bg-blue-900/20 border border-white/5 hover:border-brand-cyan/50 hover:bg-blue-900/40 transition-all duration-500 ease-out overflow-hidden hover:scale-[1.03] hover:shadow-[0_20px_50px_-12px_rgba(0,212,255,0.15)]"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-brand-cyan/20 duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-brand-cyan/20 group-hover:scale-110 transition-transform duration-300">
                      <ServiceIcon className="text-brand-cyan" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed text-sm h-16 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-brand-yellow font-bold text-sm">
                        {service.price}
                      </span>
                      <button
                        onClick={() => handleServiceClick(service.title)}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-colors"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;