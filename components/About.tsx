import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            icon: Award,
            title: 'Qualidade Garantida',
            description: 'Utilizamos apenas peças originais e de alta qualidade em todos os nossos reparos.'
        },
        {
            icon: Users,
            title: 'Equipe Especializada',
            description: 'Técnicos certificados e experientes em reparos de smartphones e computadores.'
        },
        {
            icon: Clock,
            title: 'Atendimento Rápido',
            description: 'Maioria dos reparos concluídos no mesmo dia, sem comprometer a qualidade.'
        },
        {
            icon: Shield,
            title: 'Garantia Total',
            description: 'Todos os serviços incluem garantia para sua total tranquilidade.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-brand-dark to-blue-950/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Sobre Nós"
                    subtitle="Excelência em Assistência Técnica"
                />

                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                        A <span className="text-brand-cyan font-bold">GTA-Tech</span> é referência em assistência técnica
                        de smartphones e computadores em Cabinda. Com anos de experiência no mercado, oferecemos
                        soluções completas para todos os seus dispositivos eletrônicos.
                    </p>
                    <p className="text-gray-400 text-center leading-relaxed">
                        Nossa missão é proporcionar serviços de alta qualidade com preços justos, garantindo
                        a satisfação total dos nossos clientes. Além de reparos, também oferecemos venda de
                        equipamentos novos e seminovos, películas protetoras e acessórios.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-blue-900/20 border border-white/5 hover:border-brand-cyan/50 hover:bg-blue-900/30 transition-all duration-300 hover:scale-105"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-brand-cyan/20 transition-shadow">
                                <feature.icon className="text-brand-cyan" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-brand-cyan mb-2">5+</div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Anos de Experiência</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-brand-cyan mb-2">1000+</div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Clientes Satisfeitos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-brand-cyan mb-2">98%</div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Taxa de Sucesso</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-brand-cyan mb-2">24h</div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Suporte Disponível</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
