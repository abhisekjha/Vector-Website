"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

// Container component
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

// Button component
function Button({ children, href = "#", variant = "default", showLogo = false, ...props }: { 
  children: React.ReactNode; 
  href?: string; 
  variant?: "default" | "ghost" | "dark";
  showLogo?: boolean;
  [key: string]: any 
}) {
  const baseClasses = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";
  const variants = {
    default: "bg-black text-white hover:bg-black/90",
    ghost: "border border-black/20 bg-white text-black hover:bg-black/5",
    dark: "bg-black text-white hover:bg-black/80"
  };
  
  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`} {...props}>
      {showLogo && <img src="/vector-logo.svg" alt="Vector" className="h-4 w-4" />}
      {children}
    </a>
  );
}

export default function Navbar() {
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/vector-logo.svg" alt="Vector" className="h-10 w-10" />
          <span className="text-xl font-semibold font-playfair">Vector</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <div className="relative">
            <button onClick={() => setOpenProducts(!openProducts)} className="inline-flex items-center gap-1 text-black/80 hover:text-black">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            {openProducts && (
              <div className="absolute left-0 top-9 w-[280px] rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
                {[
                  { t: "Planning & Funds", d: "Budgeting, guardrails" },
                  { t: "Accruals & Claims", d: "Live balances, settlement" },
                  { t: "Live Health", d: "Drivers, drift" }
                ].map((i) => (
                  <a key={i.t} href="#" className="block rounded-xl p-3 hover:bg-black/5">
                    <div className="text-sm font-semibold">{i.t}</div>
                    <div className="text-xs text-black/60">{i.d}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/platform" className="text-black/80 hover:text-black">Platform</a>
          <a href="/resources" className="text-black/80 hover:text-black">Resources</a>
          <a href="/about" className="text-black/80 hover:text-black">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="#demo" showLogo={true}>Let's chat <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Container>
    </header>
  );
}
