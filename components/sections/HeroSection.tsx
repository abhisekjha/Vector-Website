import React from 'react';
import Image from 'next/image';
import { ArrowRight, FileText } from 'lucide-react';
import { Container, Button, CTAButton } from '@/components/ui';

// Hero Illustration Component
const HeroIllustration: React.FC = () => (
  <div className="relative">
    <svg viewBox="0 0 800 420" className="h-full w-full rounded-[28px]">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#80E3FF" />
          <stop offset="100%" stopColor="#50d5b7" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="420" rx="26" fill="url(#grad)" />
      <g opacity="0.18">
        <rect x="40" y="260" width="120" height="80" fill="#000" />
        <rect x="170" y="240" width="140" height="100" fill="#000" />
        <rect x="320" y="260" width="160" height="86" fill="#000" />
        <rect x="500" y="250" width="120" height="96" fill="#000" />
        <rect x="640" y="270" width="100" height="76" fill="#000" />
      </g>
      <g opacity="0.12">
        <path d="M40 120 L760 120" stroke="#000" strokeWidth="18" />
        <path d="M100 120 L180 40" stroke="#000" strokeWidth="14" />
        <path d="M360 120 L430 60" stroke="#000" strokeWidth="14" />
        <circle cx="430" cy="60" r="8" fill="#000" />
      </g>
    </svg>

    {/* Floating toasts */}
    <div className="pointer-events-none absolute left-6 top-6 flex w-[260px] flex-col gap-3">
      <div className="rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-black/60">ACCRUALS SYNCED</div>
        <div className="text-sm text-black/80">GL export posted to SAP.</div>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-black/60">HEALTH UPDATE</div>
        <div className="text-sm text-black/80">South region pace +3.1% vs plan.</div>
      </div>
    </div>
    <div className="pointer-events-none absolute bottom-6 right-6 w-[260px]">
      <div className="rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-black/60">CLAIM BUNDLED</div>
        <div className="text-sm text-black/80">Evidence Pack ready for review.</div>
      </div>
    </div>
  </div>
);

// Logo Cloud Component
const LogoCloud: React.FC = () => (
  <div className="mt-10 grid grid-cols-2 gap-4 opacity-80 sm:grid-cols-3 md:grid-cols-6">
    {["DSV", "Expeditors", "NNR", "Navia", "Stark Foods", "Wayne Brands"].map((n) => (
      <div
        key={n}
        className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-xs text-black/60"
      >
        {n}
      </div>
    ))}
  </div>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/vector-logo.svg"
                alt="Vector Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-sm font-semibold uppercase tracking-widest text-black/60 playfair-display-500">Vector Platform</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl playfair-display-600">
              AI‑powered workflow automation for <span className="whitespace-nowrap">CPG trade</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-black/70 playfair-display-400">
              Vector turns fragmented, manual TPM work into a closed‑loop system where every step is explainable, reversible, and tied to measurable ROI. From Planning & Accruals to Claims & Settlement with Evidence Packs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/demo">Book a demo</CTAButton>
              <Button href="#onepager" variant="ghost" icon={<FileText className="h-4 w-4" />}>
                Download one‑pager
              </Button>
            </div>
          </div>
          <div>
            <div className="rounded-[28px] border border-black/10 bg-white p-2 shadow-2xl">
              <HeroIllustration />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60 playfair-display-500">
            Trusted by organizations from around the world
          </span>
          <LogoCloud />
        </div>
      </Container>
    </section>
  );
};