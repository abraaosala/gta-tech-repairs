import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-yellow-400 focus:ring-yellow-400 shadow-[0_0_15px_rgba(255,204,0,0.5)]",
    secondary: "bg-brand-cyan text-brand-dark hover:bg-cyan-300 focus:ring-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.5)]",
    outline: "border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 focus:ring-brand-cyan"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;