import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-brand-yellow font-bold tracking-widest text-sm uppercase mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {title}
        <span className="text-brand-cyan">.</span>
      </h2>
      <div className={`h-1.5 w-24 bg-gradient-to-r from-brand-yellow to-brand-cyan mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;