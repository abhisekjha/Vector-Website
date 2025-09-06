import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-10 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl font-playfair">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-black/70`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
