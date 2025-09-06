import React from "react";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";

// =============== SHARED UI COMPONENTS ==============================

export const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = "", 
  children 
}) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const Button: React.FC<{ 
  as?: "a" | "button"; 
  href?: string; 
  variant?: "primary" | "ghost" | "dark"; 
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>> = ({ 
  as = "a", 
  href = "#", 
  variant = "primary", 
  children, 
  className = "",
  ...rest 
}) => {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : variant === "dark"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-black/10 bg-white hover:bg-black/5";
  const Comp: any = as;
  return (
    <Comp href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Comp>
  );
};

export const SectionTitle: React.FC<{ 
  title: string; 
  subtitle?: string; 
  align?: "left" | "center" 
}> = ({ title, subtitle, align = "left" }) => (
  <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
    <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl font-playfair">{title}</h2>
    {subtitle && (
      <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} text-black/70`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const PillarCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[] 
}> = ({ icon, title, description, features }) => (
  <div className="rounded-3xl border border-black/10 bg-white p-8">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-playfair">{title}</h3>
    </div>
    <p className="mb-4 text-black/70">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-black/70">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const FlowStep: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  isLast?: boolean 
}> = ({ title, description, icon, isLast = false }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold font-playfair">{title}</h4>
      <p className="mt-1 text-sm text-black/70">{description}</p>
    </div>
    {!isLast && <ArrowRight className="mt-3 h-5 w-5 text-black/40" />}
  </div>
);

export const ConnectorLogo: React.FC<{ name: string; category: string }> = ({ name, category }) => (
  <div className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70">
    <span className="font-medium">{name}</span>
    <span className="ml-2 text-xs text-black/50">({category})</span>
  </div>
);

export const FAQItem: React.FC<{ 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void 
}> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-black/10">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 text-left"
    >
      <span className="font-semibold font-playfair">{question}</span>
      {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
    {isOpen && (
      <div className="pb-4 text-black/70">
        {answer}
      </div>
    )}
  </div>
);

// Re-export Footer for easy importing
export { Footer } from "../Footer";
