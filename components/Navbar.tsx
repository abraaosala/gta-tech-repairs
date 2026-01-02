import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 group"
        >
         <div className="
  w-12 h-12 
  bg-white
  rounded-lg 
  flex items-center justify-center 
  shadow-lg shadow-brand-cyan/30 
  transition-all 
  group-hover:scale-105
">
<img
  src="/logo.png"
  alt="Logo"
  className="w-16 h-16 object-contain drop-shadow-[0_0_4px_rgba(0,0,0,0.35)]"
/>



</div>

          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white leading-none group-hover:text-gray-100 transition-colors">
              GTA<span className="text-brand-cyan">-TECH</span>
            </span>
            <span className="text-[10px] text-brand-yellow font-bold tracking-widest uppercase">
              Prazer em Servi-lo
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-wide font-medium text-gray-300 transition-all duration-300 ease-in-out hover:text-brand-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="px-5 py-2 text-sm" onClick={(e) => handleNavClick(e as any, '#contact')}>
            Agendar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 p-6 shadow-2xl h-screen">
          <div className="flex flex-col space-y-6 mt-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-bold text-xl text-white transition-all duration-300 ease-in-out hover:text-brand-cyan hover:pl-2 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
               <Button variant="primary" className="w-full justify-center" onClick={(e) => handleNavClick(e as any, '#contact')}>
                Agendar Serviço
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;