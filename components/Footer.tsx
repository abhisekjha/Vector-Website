import React from "react";
import { ArrowRight, Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

// Footer Link Component
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
  >
    {children}
  </a>
);


// Social Media Icon Component
const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="text-white/70 hover:text-white transition-colors duration-200"
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
            <h2 className="text-2xl font-semibold text-white">Vector</h2>
          </div>
          <p className="text-white/70 text-sm max-w-md mx-auto">
            Direction. Magnitude. ROI. Your comprehensive platform for intelligent business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* PRODUCTS */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
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
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
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
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              <li><FooterLink href="/customers">Customers</FooterLink></li>
              <li><FooterLink href="/events">Events</FooterLink></li>
              <li><FooterLink href="/docs">Documentation</FooterLink></li>
              <li><FooterLink href="/guides">Guides</FooterLink></li>
              <li><FooterLink href="/community">Community</FooterLink></li>
              <li><FooterLink href="/ai-readiness">AI Readiness Report 2024</FooterLink></li>
              <li><FooterLink href="/research">Research</FooterLink></li>
            </ul>
          </div>

          {/* GUIDES */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Guides</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/guide/data-labeling">Data Labeling</FooterLink></li>
              <li><FooterLink href="/guide/ml-training">ML Model Training</FooterLink></li>
              <li><FooterLink href="/guide/diffusion-models">Diffusion Models</FooterLink></li>
              <li><FooterLink href="/guide/ai-ecommerce">Guide to AI for eCommerce</FooterLink></li>
              <li><FooterLink href="/guide/computer-vision">Computer Vision Applications</FooterLink></li>
              <li><FooterLink href="/guide/llm">Large Language Models</FooterLink></li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
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
                href="#demo" 
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
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
