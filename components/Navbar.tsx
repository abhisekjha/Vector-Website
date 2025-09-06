"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Container, CTAButton } from "@/components/ui";

export function Navbar() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenProducts(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const products = [
    { t: "Planning & Funds", d: "Budgeting, guardrails", href: "/planning" },
    { t: "Accruals & Claims", d: "Live balances, settlement", href: "/accruals" },
    { t: "Live Health", d: "Drivers, drift", href: "/health" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <Image src="/vector-logo.svg" alt="Vector" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-semibold font-playfair">Vector</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex" role="navigation" aria-label="Main navigation">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setOpenProducts(!openProducts)} 
              className="inline-flex items-center gap-1 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
              aria-label="Products menu"
            >
              Products <ChevronDown className={`h-4 w-4 transition-transform ${openProducts ? 'rotate-180' : ''}`} />
            </button>
            {openProducts && (
              <div 
                className="absolute left-0 top-9 w-[280px] rounded-2xl border border-black/10 bg-white p-3 shadow-xl"
                aria-label="Products submenu"
              >
                {products.map((item) => (
                  <Link 
                    key={item.t} 
                    href={item.href} 
                    className="block rounded-xl p-3 hover:bg-black/5 focus-ring"
                  >
                    <div className="text-sm font-semibold">{item.t}</div>
                    <div className="text-xs text-black/60">{item.d}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/platform" className="text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1">Platform</Link>
          <Link href="/resources" className="text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1">Resources</Link>
          <Link href="/about" className="text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1">About</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <CTAButton href="#demo">Let&apos;s chat</CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg focus-ring"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur">
          <Container className="py-4">
            <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
              <div>
                <button 
                  onClick={() => setOpenProducts(!openProducts)}
                  className="flex items-center gap-2 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 w-full text-left"
                >
                  Products <ChevronDown className={`h-4 w-4 transition-transform ${openProducts ? 'rotate-180' : ''}`} />
                </button>
                {openProducts && (
                  <div className="mt-2 ml-4 space-y-2">
                    {products.map((item) => (
                      <Link 
                        key={item.t} 
                        href={item.href} 
                        className="block rounded-lg p-2 hover:bg-black/5 focus-ring"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="text-sm font-semibold">{item.t}</div>
                        <div className="text-xs text-black/60">{item.d}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                href="/platform" 
                className="block text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </Link>
              <Link 
                href="/resources" 
                className="block text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/about" 
                className="block text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4">
                <CTAButton href="#demo" className="w-full justify-center">
                  Let&apos;s chat
                </CTAButton>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;
