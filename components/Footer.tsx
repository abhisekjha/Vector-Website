import React from "react";
import { ArrowRight, Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

// Footer Link Component
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-white/70 hover:text-white transition-colors duration-200 text-sm playfair-display-400"
  >
    {children}
  </a>
);


// Social Media Icon Component
const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="text-white/70 hover:text-white transition-colors duration-200 playfair-display-400"
    aria-label={label}
  >
    {icon}
  </a>
);

// Main Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section with Logo */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/vector-logo.svg"
              alt="Vector Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-2xl font-semibold text-white playfair-display-600">Vector</h2>
          </div>
          <p className="text-white/70 text-sm max-w-md mx-auto playfair-display-400">
            Direction. Magnitude. ROI. Your comprehensive platform for intelligent business solutions.
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-[#D8FF3D] px-3 py-1 text-xs font-semibold text-black playfair-display-600">
              FEATURED
            </span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 playfair-display-600">
              COLLATERAL
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 playfair-display-600">
            9 Strategic Moves for Smarter, AI‑Driven Trade Management
          </h3>
          <p className="text-white/70 text-sm mb-4 playfair-display-400">
            Discover how AI-driven automation can transform your trade management processes and drive significant ROI improvements.
          </p>
          <a 
            href="/survival-guide" 
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors duration-200 playfair-display-600"
          >
            Read more <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* PRODUCTS */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider playfair-display-600">Products</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/platform">Vector Platform</FooterLink></li>
              <li><FooterLink href="/planning">Planning & Funds</FooterLink></li>
              <li><FooterLink href="/accruals">Accruals & Claims</FooterLink></li>
              <li><FooterLink href="/health">Live Health</FooterLink></li>
              <li><FooterLink href="/agents">Vector Agents</FooterLink></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider playfair-display-600">Company</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/security">Security</FooterLink></li>
              <li><FooterLink href="/terms">Terms</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy</FooterLink></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider playfair-display-600">Resources</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              <li><FooterLink href="/docs">Documentation</FooterLink></li>
              <li><FooterLink href="/guides">Guides</FooterLink></li>
              <li><FooterLink href="/ai-readiness">AI Readiness Report 2024</FooterLink></li>
            </ul>
          </div>

          {/* GUIDES */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider playfair-display-600">Guides</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/guide/trade-promotion-101">Trade Promotion 101</FooterLink></li>
              <li><FooterLink href="/guide/scenario-roi-handbook">Scenario & ROI Handbook</FooterLink></li>
              <li><FooterLink href="/guide/accruals-claims">Accruals & Claims</FooterLink></li>
              <li><FooterLink href="/guide/evidence-packs">Evidence Packs</FooterLink></li>
              <li><FooterLink href="/guide/guardrails-governance">Guardrails & Governance</FooterLink></li>
              <li><FooterLink href="/guide/data-slas">Data & SLAs</FooterLink></li>
              <li><FooterLink href="/guide/tpm-kpis">TPM KPIs</FooterLink></li>
            </ul>
            <div className="mt-4">
              <FooterLink href="/guides">All Guides →</FooterLink>
            </div>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider playfair-display-600">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://twitter.com/vector" 
                icon={<Twitter className="h-5 w-5" />} 
                label="Follow us on Twitter" 
              />
              <SocialIcon 
                href="https://facebook.com/vector" 
                icon={<Facebook className="h-5 w-5" />} 
                label="Follow us on Facebook" 
              />
              <SocialIcon 
                href="https://linkedin.com/company/vector" 
                icon={<Linkedin className="h-5 w-5" />} 
                label="Follow us on LinkedIn" 
              />
            </div>
            <div className="mt-6">
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors duration-200 playfair-display-600"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm playfair-display-400">
              Copyright © {new Date().getFullYear()} Vector — Direction. Magnitude. ROI. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <FooterLink href="/terms">Terms of Use</FooterLink>
              <span className="text-white/40">•</span>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
