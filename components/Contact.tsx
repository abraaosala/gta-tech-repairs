import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
         <div className="max-w-4xl mx-auto bg-blue-900/20 border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
           <SectionHeading 
             title="Fale Conosco" 
             subtitle="Orçamento Grátis"
           />
           
           <form className="space-y-6 mt-8">
             <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-sm font-bold text-brand-cyan ml-2">Nome Completo</label>
                 <input 
                   type="text" 
                   className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                   placeholder="Seu nome"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-bold text-brand-cyan ml-2">Telefone</label>
                 <input 
                   type="tel" 
                   className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                   placeholder="+244 9XX XXX XXX"
                 />
               </div>
             </div>

             <div className="space-y-2">
                 <label className="text-sm font-bold text-brand-cyan ml-2">Modelo do Dispositivo</label>
                 <select className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none cursor-pointer">
                   <option>Selecione o modelo...</option>
                   <option>iPhone 13 / 14 / 15</option>
                   <option>Samsung Galaxy S Series</option>
                   <option>Outros</option>
                 </select>
             </div>

             <div className="space-y-2">
               <label className="text-sm font-bold text-brand-cyan ml-2">Mensagem</label>
               <textarea 
                 rows={4}
                 className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                 placeholder="Descreva o problema do seu aparelho..."
               ></textarea>
             </div>

             <Button variant="primary" className="w-full py-4 text-lg uppercase tracking-wide">
               Enviar Mensagem
             </Button>
           </form>
         </div>
      </div>
    </section>
  );
};

export default Contact;