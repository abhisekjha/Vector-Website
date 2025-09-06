import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  rounded = '3xl'
}) => {
  const variantClasses = {
    default: 'bg-white border border-black/10',
    elevated: 'bg-white shadow-xl border border-black/5',
    outlined: 'bg-transparent border-2 border-black/20',
    glass: 'bg-white/80 backdrop-blur border border-white/20'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  };

  const classes = `${variantClasses[variant]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
