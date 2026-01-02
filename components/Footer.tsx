import React, { useEffect, useState } from 'react';
import { Smartphone, Facebook, Instagram, Twitter, Mail, MessageCircle } from 'lucide-react';
import { landingService } from '../services/landingService';

const Footer: React.FC = () => {
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    landingService.getSettings().then(setSettings).catch(console.error);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: settings.facebook_url, key: 'facebook' },
    { icon: Instagram, href: settings.instagram_url, key: 'instagram' },
    { icon: Twitter, href: settings.twitter_url, key: 'twitter' },
    { icon: MessageCircle, href: settings.whatsapp_phone ? `https://wa.me/${settings.whatsapp_phone.replace(/\D/g, '')}` : '#', key: 'whatsapp' },
    { icon: Mail, href: settings.contact_email ? `mailto:${settings.contact_email}` : '#', key: 'email' },
  ].filter(link => link.href && link.href !== '#');

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
            {socialLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} GTA-Tech Mobile Services. Todos os direitos reservados.</p>
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