import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'a' | 'button';
  href?: string;
  variant?: 'primary' | 'ghost' | 'dark' | 'accent';
  showLogo?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  as,
  href = '#',
  variant = 'primary',
  showLogo = false,
  children,
  icon,
  size = 'md',
  className = '',
  ...props
}) => {
  // Automatically use 'a' tag when href is provided and not '#'
  const elementType = as || (href && href !== '#' ? 'a' : 'button');
  
  const baseClasses = 'inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 focus-ring playfair-display-600';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  };
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-black/90',
    ghost: 'border border-black/10 bg-white hover:bg-black/5',
    dark: 'bg-white text-black hover:bg-white/90',
    accent: 'btn-accent'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (elementType === 'a') {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {showLogo && <img src="/vector-logo.svg" alt="Vector" className="h-4 w-4" />}
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {showLogo && <img src="/vector-logo.svg" alt="Vector" className="h-4 w-4" />}
      {children}
      {icon}
    </button>
  );
};

// Specialized button components
export const CTAButton: React.FC<Omit<ButtonProps, 'variant' | 'showLogo'>> = (props) => (
  <Button variant="primary" showLogo icon={<ArrowRight className="h-4 w-4" />} {...props} />
);

export const AccentButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="accent" {...props} />
);
