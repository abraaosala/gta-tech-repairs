import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Nossos Serviços" 
          subtitle="Especialistas em Reparos" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 rounded-3xl bg-blue-900/20 border border-white/5 hover:border-brand-cyan/50 hover:bg-blue-900/40 transition-all duration-500 ease-out overflow-hidden hover:scale-[1.03] hover:shadow-[0_20px_50px_-12px_rgba(0,212,255,0.15)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-brand-cyan/20 duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-brand-cyan/20 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-brand-cyan" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-sm h-16">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-brand-yellow font-bold text-sm">
                    {service.price}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;