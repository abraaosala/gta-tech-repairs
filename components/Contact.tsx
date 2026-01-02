import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { landingService } from '../services/landingService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Adicionado campo de telefone
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await landingService.sendContact(formData);
      setStatus({ type: 'success', msg: 'Mensagem enviada com sucesso! Em breve entraremos em contato.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setStatus({ type: 'error', msg: 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-blue-900/20 border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <SectionHeading
            title="Fale Conosco"
            subtitle="Orçamento Grátis"
          />

          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-cyan ml-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-cyan ml-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-cyan ml-2">Telefone (Opcional)</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  placeholder="+244 ..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-cyan ml-2">Modelo do Dispositivo</label>
                <input
                  type="text"
                  name="message"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  placeholder="Ex: iPhone 13 Pro"
                  onChange={(e) => setFormData(prev => ({ ...prev, message: `Aparelho: ${e.target.value} | ${prev.message}` }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-cyan ml-2">Mensagem / Defeito</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                placeholder="Descreva o problema do seu aparelho..."
              ></textarea>
            </div>

            {status && (
              <div className={`p-4 rounded-xl text-center ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {status.msg}
              </div>
            )}

            <Button
              variant="primary"
              className="w-full py-4 text-lg uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;