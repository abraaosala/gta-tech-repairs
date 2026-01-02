import { Smartphone, Battery, Cpu, Wifi, Wrench, Monitor, ShieldCheck, MapPin, ShoppingCart, Laptop } from 'lucide-react';
import { ServiceItem, Testimonial } from './types';

// Links using ID anchors for smooth scrolling
export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#services' },
  { name: 'Sobre Nós', href: '#about' },
  { name: 'Localização', href: '#location' },
  { name: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Troca de Visor',
    description: 'Substituição de telas quebradas ou riscadas com peças originais e garantia.',
    icon: Smartphone,
    price: 'A partir de 15.000 Kz'
  },
  {
    id: 2,
    title: 'Troca de Bateria',
    description: 'Renove a vida útil do seu dispositivo com baterias de alta performance.',
    icon: Battery,
    price: 'A partir de 8.000 Kz'
  },
  {
    id: 3,
    title: 'Reparo de Placa',
    description: 'Diagnóstico avançado e reparo de componentes internos e micro-soldagem.',
    icon: Cpu,
    price: 'Sob Consulta'
  },
  {
    id: 4,
    title: 'Troca de Conector',
    description: 'Seu celular não carrega? Trocamos o conector de carga rapidamente.',
    icon: Wifi, // Using Wifi as proxy for connectivity
    price: 'A partir de 5.000 Kz'
  },
  {
    id: 5,
    title: 'Software & Desbloqueio',
    description: 'Atualizações, formatação, recuperação de dados e remoção de contas.',
    icon: Monitor,
    price: 'Sob Consulta'
  },
  {
    id: 6,
    title: 'Manutenção Completa',
    description: 'Limpeza interna, troca de pasta térmica e revisão geral do aparelho.',
    icon: Wrench,
    price: 'A partir de 10.000 Kz'
  },
  {
    id: 7,
    title: 'Venda de Telefones',
    description: 'Smartphones novos e seminovos de diversas marcas com garantia.',
    icon: ShoppingCart,
    price: 'Sob Consulta'
  },
  {
    id: 8,
    title: 'Venda de Computadores',
    description: 'Computadores, laptops e acessórios para todas as suas necessidades.',
    icon: Laptop,
    price: 'Sob Consulta'
  },
  {
    id: 9,
    title: 'Películas Protetoras',
    description: 'Películas de vidro temperado e hidrogel para proteção total da tela.',
    icon: ShieldCheck,
    price: 'A partir de 2.000 Kz'
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Cliente iPhone 13",
    text: "Serviço impecável! Trocaram a tela do meu iPhone em menos de 2 horas. A qualidade ficou idêntica à original.",
    rating: 5
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Cliente Samsung",
    text: "A equipe da GTA-Tech é muito profissional. O atendimento no Cabassango foi super fácil de achar.",
    rating: 5
  },
  {
    id: 3,
    name: "Paulo Silva",
    role: "Manutenção",
    text: "Recuperaram meu aparelho que caiu na água. Recomendo muito!",
    rating: 4
  }
];

export const CONTACT_INFO = {
  phone: "+244 973 933 880",
  address: "Escola de condução EBJ, Cabassango",
  city: "Cabinda - Angola",
  email: "contato@gta-tech.ao"
};