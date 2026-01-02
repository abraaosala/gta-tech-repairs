import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { landingService } from '../services/landingService';

const Hero: React.FC = () => {
  const [settings, setSettings] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    landingService.getSettings().then(setSettings);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-brand-dark">
        {/* Radial Gradients trying to mimic the blue circles in Image 3 */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl opacity-40 mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-brand-cyan/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping"></span>
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-wider">Disponível em Cabinda</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            {settings.hero_title?.split(' ')[0] || "Assistência"}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">
              {settings.hero_title?.split(' ').slice(1).join(' ') || "Técnica Especializada"}
            </span>
            <span className="text-brand-yellow">.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed whitespace-pre-line">
            {settings.hero_subtitle || "Assistência técnica especializada com a confiança que você merece. Reparos rápidos, peças de qualidade e atendimento premium."}
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button
              variant="primary"
              icon={<ArrowRight size={18} />}
              onClick={() => scrollToSection('#services')}
            >
              Ver Serviços
            </Button>
            <Button
              variant="outline"
              icon={<MapPin size={18} />}
              onClick={() => scrollToSection('#location')}
            >
              Como Chegar
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-brand-yellow" size={20} />
              <span className="text-sm font-medium">Peças Originais</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-brand-yellow" size={20} />
              <span className="text-sm font-medium">Garantia de 90 dias</span>
            </div>
          </div>
        </div>

        {/* Visual Content - Phone mockup similar to Image 3 */}
        <div className="relative group perspective-1000">
          <div className="relative z-10 w-full max-w-[350px] mx-auto transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6">
            {/* Phone Frame */}
            <div className="rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden relative aspect-[9/19]">
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

              {/* Screen Content - Circuit/Repair internal view */}
              <div className="absolute inset-0 bg-gray-800">
                <img
                  src="https://img.freepik.com/fotos-gratis/serviceman-usa-lupa-e-chave-de-fenda-para-reparar-smartphone-danificado-na-oficina-eletronica_613910-20797.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Técnico abrindo visor de iPhone para reparo"
                  className="w-full h-full object-cover opacity-90 scale-125 origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-50"></div>

                {/* Overlay Content on Phone Screen */}
                <div className="absolute bottom-8 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <h3 className="text-white font-bold text-lg mb-1">Diagnóstico Rápido</h3>
                  <p className="text-gray-200 text-xs flex items-center">
                    <MapPin size={12} className="text-brand-yellow mr-1" />
                    Cabassango, Angola
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <span className="px-2 py-1 bg-brand-cyan/20 text-brand-cyan text-[10px] rounded font-bold">Aberto</span>
                    <span className="px-2 py-1 bg-brand-yellow/20 text-brand-yellow text-[10px] rounded font-bold">4.9 ★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind phone */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-brand-blue to-brand-cyan rounded-full blur-[80px] -z-10 opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;