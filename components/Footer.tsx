import React from 'react';
import { Smartphone, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Smartphone className="text-brand-cyan" size={24} />
              <span className="text-2xl font-black text-white">GTA-TECH</span>
            </div>
            <p className="text-gray-500 text-sm">Prazer em Servi-lo.</p>
          </div>

          <div className="flex space-x-6">
            {[Facebook, Instagram, Twitter, Mail].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 GTA-Tech Mobile Services. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-cyan">Termos</a>
            <a href="#" className="hover:text-brand-cyan">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;