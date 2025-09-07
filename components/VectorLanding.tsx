import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  ChevronDown,
  Gauge,
  LineChart as LineChartIcon,
  Lock,
  Play,
  Scale,
  ShieldCheck,
  Workflow,
  ListChecks,
  ServerCog,
  Settings2,
  BadgeCheck,
  Shield,
  Quote,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Footer } from "./Footer";
import { OperatingLoop } from "./OperatingLoop";
import { Navbar } from "./Navbar";

/** dynamically import the client-only chart */
const ClientHealthChart = dynamic(() => import("./ClientHealthChart"), { ssr: false });

// =============== THEME & PRIMITIVES ==============================
const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Button: React.FC<{ as?: "a" | "button"; href?: string; variant?: "primary" | "ghost" | "dark"; showLogo?: boolean; children: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>> = ({ as = "a", href = "#", variant = "primary", showLogo = false, children, ...rest }) => {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : variant === "dark"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-black/10 bg-white hover:bg-black/5";
  const Comp: any = as;
  return (
    <Comp href={href} className={`${base} ${styles}`} {...rest}>
      {showLogo && <img src="/vector-logo.svg" alt="Vector" className="h-4 w-4" />}
      {children}
    </Comp>
  );
};

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60">{children}</span>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string; eyebrow?: string; align?: "left" | "center" }> = ({ title, subtitle, eyebrow, align = "left" }) => (
  <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl playfair-display-600">{title}</h2>
    {subtitle && <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} text-black/70`}>{subtitle}</p>}
  </div>
);

// Accent for dark slab (Raft‑style)
const ACCENT = "#D8FF3D";

// =============== SUCCESS STORIES DATA ======================
const successStories = [
  {
    company: "Navia Freight",
    industry: "Finance",
    quote: "The vision of AI agents handling complex trade operations autonomously while maintaining policy compliance is exactly what we need. Vector's approach to agentic automation will transform how we manage trade promotions.",
    author: "Rob Ardesi",
    title: "COO",
    savings: "$850K projected annually",
    improvement: "40% faster processing expected"
  },
  {
    company: "DSV Global",
    industry: "Logistics",
    quote: "The concept of an audit-grade ledger that explains every decision is revolutionary. Vector's Vector Ledger will give us complete confidence in our trade operations and financial reporting.",
    author: "Maria Santos",
    title: "CFO",
    savings: "$1.2M projected annually", 
    improvement: "85% reduction in manual work expected"
  },
  {
    company: "Expeditors International",
    industry: "Supply Chain",
    quote: "The platform's integration capabilities allowed us to connect all our disparate systems seamlessly. Real-time visibility across the entire trade process.",
    author: "David Chen",
    title: "VP Operations",
    savings: "$2.1M annually",
    improvement: "3x faster settlement times"
  },
  {
    company: "Wayne Brands",
    industry: "CPG",
    quote: "The idea of trade promotions that optimize themselves is exactly what we need. Vector's eight specialized agents will transform our trade promotion management into a competitive advantage.",
    author: "Sarah Williams",
    title: "Trade Marketing Director",
    savings: "$950K projected annually",
    improvement: "60% reduction in errors expected"
  },
  {
    company: "Stark Foods",
    industry: "Food & Beverage",
    quote: "Policy-bound automation ensures compliance while speeding up our processes. We've eliminated most manual exceptions in our trade workflows.",
    author: "Michael Thompson",
    title: "Finance Director",
    savings: "$750K annually",
    improvement: "90% automation rate"
  },
  {
    company: "NNR Global",
    industry: "Manufacturing",
    quote: "The audit-grade ledger gives us complete confidence in our financial reporting. Vector's AI catches discrepancies we would have missed.",
    author: "Jennifer Lee",
    title: "Controller",
    savings: "$1.1M annually",
    improvement: "99% accuracy rate"
  },
  {
    company: "Circana Analytics",
    industry: "Data Analytics",
    quote: "Vector's intelligent data extraction from 100+ document types has revolutionized how we process vendor information. True end-to-end automation.",
    author: "Robert Kim",
    title: "Data Operations Manager",
    savings: "$680K annually",
    improvement: "75% faster processing"
  },
  {
    company: "Phoenix Distribution",
    industry: "Distribution",
    quote: "The platform's ability to handle schema changes and backfills automatically saved us months of development work. It just works.",
    author: "Lisa Rodriguez",
    title: "IT Director",
    savings: "$890K annually",
    improvement: "50% reduction in IT overhead"
  },
  {
    company: "Meridian Retail",
    industry: "Retail",
    quote: "Vector's real-time health monitoring alerts us to issues before they impact our bottom line. Proactive rather than reactive trade management.",
    author: "James Park",
    title: "Category Manager",
    savings: "$1.3M annually",
    improvement: "65% faster issue resolution"
  },
  {
    company: "Atlantic Beverages",
    industry: "Beverage",
    quote: "The bidirectional sync with our ERP systems eliminated dual entry completely. Our teams can focus on strategy instead of data reconciliation.",
    author: "Amanda Foster",
    title: "Finance Manager",
    savings: "$720K annually",
    improvement: "100% data consistency"
  },
  {
    company: "Global Pharma Solutions",
    industry: "Pharmaceutical",
    quote: "Vector's compliance features ensure we meet all regulatory requirements while automating complex rebate calculations. Peace of mind with efficiency.",
    author: "Dr. Mark Stevens",
    title: "Compliance Officer",
    savings: "$1.4M annually",
    improvement: "Zero compliance issues"
  },
  {
    company: "TechFlow Industries",
    industry: "Technology",
    quote: "The platform's API-first approach allowed seamless integration with our existing tech stack. Vector adapts to us, not the other way around.",
    author: "Kevin Zhang",
    title: "CTO",
    savings: "$1.6M annually",
    improvement: "80% faster integrations"
  },
  {
    company: "Horizon Chemicals",
    industry: "Chemicals",
    quote: "Vector's AI models understand our complex pricing structures and automatically handle exceptions. It's like having an expert analyst working 24/7.",
    author: "Rachel Green",
    title: "Pricing Manager",
    savings: "$980K annually",
    improvement: "95% exception auto-resolution"
  },
  {
    company: "Summit Automotive",
    industry: "Automotive",
    quote: "The audit trail capabilities have impressed our external auditors. Vector provides transparency and traceability we never had before.",
    author: "Tom Anderson",
    title: "Internal Audit Manager",
    savings: "$1.1M annually",
    improvement: "50% faster audits"
  },
  {
    company: "Premier Fashion Group",
    industry: "Fashion",
    quote: "Seasonal trade promotion cycles are now completely automated. Vector handles the complexity while we focus on creative marketing strategies.",
    author: "Sophie Martinez",
    title: "Brand Manager",
    savings: "$840K annually",
    improvement: "70% time savings"
  }
];

// =============== SUCCESS STORIES CAROUSEL ====================
const SuccessStoriesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 150);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => {
    changeSlide(currentIndex === successStories.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    changeSlide(currentIndex === 0 ? successStories.length - 1 : currentIndex - 1);
  };

  const currentStory = successStories[currentIndex];

  return (
    <div 
      className="relative rounded-3xl border border-black/10 bg-white p-8 overflow-hidden shadow-xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-green-50/40 opacity-60 transition-opacity duration-500" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
        <div className="grid items-center gap-8 md:grid-cols-[1fr,2fr]">
          {/* Left side - Company info */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-semibold text-black mb-2 transform transition-transform duration-300 hover:scale-105">
              {currentStory.company}
            </div>
            <div className="text-xs uppercase tracking-widest text-black/60 mb-4">Vector solutions used</div>
            <div className="inline-block rounded-full border border-black/10 px-4 py-2 text-sm font-semibold mb-4 bg-white/80 backdrop-blur">
              {currentStory.industry}
            </div>
            
            {/* Metrics */}
            <div className="space-y-3">
              <div className="rounded-xl bg-gradient-to-r from-green-100 to-blue-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-200/50">
                <div className="text-lg font-semibold text-green-800">{currentStory.savings}</div>
                <div className="text-sm text-green-700">Annual Savings</div>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200/50">
                <div className="text-lg font-semibold text-blue-800">{currentStory.improvement}</div>
                <div className="text-sm text-blue-700">Key Improvement</div>
              </div>
            </div>
          </div>

          {/* Right side - Quote */}
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 h-8 w-8 text-black/20 animate-pulse" />
            <blockquote className="text-lg leading-relaxed text-black mb-4 pl-6 font-semibold">
              "{currentStory.quote}"
            </blockquote>
            <div className="text-sm text-black/70 pl-6">
              <div className="font-semibold text-black">{currentStory.author}</div>
              <div className="text-black/60">{currentStory.title} at {currentStory.company}</div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Progress indicators */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 flex-shrink-0 ${
                  index === currentIndex 
                    ? 'w-8 bg-black shadow-lg' 
                    : 'w-2 bg-black/20 hover:bg-black/40 hover:w-4'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-black/10 bg-white hover:bg-black/5 transition-all duration-200 hover:scale-110 hover:shadow-lg"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5 text-black/60" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-black/10 bg-white hover:bg-black/5 transition-all duration-200 hover:scale-110 hover:shadow-lg"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5 text-black/60" />
            </button>
          </div>
        </div>

        {/* Counter and auto-play indicator */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-black/50">
            {currentIndex + 1} of {successStories.length}
          </div>
          <div className="flex items-center gap-2 text-xs text-black/40">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </div>
        </div>
      </div>
    </div>
  );
};

// =============== HERO MIMIC (RAFT STYLE) =========================
const StatToast: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
    <div className="text-[11px] font-semibold uppercase tracking-wider text-black/60">{title}</div>
    <div className="text-sm text-black/80">{body}</div>
  </div>
);

const HeroIllustration: React.FC = () => (
  <div className="relative">
    {/* rounded gradient panel with simple logistics/containers vibe */}
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

    {/* floating toasts */}
    <div className="pointer-events-none absolute left-6 top-6 flex w-[260px] flex-col gap-3">
      <StatToast title="ACCRUALS SYNCED" body="GL export posted to SAP." />
      <StatToast title="HEALTH UPDATE" body="South region pace +3.1% vs plan." />
    </div>
    <div className="pointer-events-none absolute bottom-6 right-6 w-[260px]">
      <StatToast title="CLAIM BUNDLED" body="Evidence Pack ready for review." />
    </div>
  </div>
);

// =============== SECTIONS (RAFT-LIKE STRUCTURE) ===================
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

const BigNumberSteps: React.FC = () => (
  <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
    {[
      { t: "Centralize your data", b: "Access ERP, POS, EDI in one place regardless of format." },
      { t: "Extract your data", b: "Categorize, standardize, and enrich with MDM." },
      { t: "Activate your data", b: "Validate with policies, sync bi‑directionally to systems." },
      { t: "Unlock insights", b: "Drivers, ROI, and audit‑ready analytics for every promo." }
    ].map((s, i) => (
      <div key={s.t} className="">
        <div className="text-5xl font-semibold text-black/10">{i + 1}</div>
        <div className="mt-2 text-lg font-semibold">{s.t}</div>
        <p className="mt-2 text-black/70">{s.b}</p>
      </div>
    ))}
  </div>
);

const MetricsBar: React.FC = () => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
    {[
      { k: "5 billion", v: "Data points used to train and tune models." },
      { k: "35k", v: "Vendors/partners the models have seen." },
      { k: "$10 billion", v: "Trade value processed (and counting)." }
    ].map((m) => (
      <div key={m.k} className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <div style={{ background: ACCENT }} className="h-8 w-1 rounded-full" />
          <div>
            <div className="text-2xl font-semibold text-white">{m.k}</div>
            <div className="text-sm text-white/80">{m.v}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const DarkAIPanel: React.FC = () => (
  <div className="rounded-[28px] border border-black/10 bg-[#1c1c1c] p-10 text-white">
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 flex items-center justify-center gap-3 opacity-90">
        <div style={{ background: ACCENT }} className="h-px w-12" />
        <span className="text-sm uppercase tracking-widest">Not just any AI solution.</span>
        <div style={{ background: ACCENT }} className="h-px w-12" />
      </div>
      <h3 className="text-3xl font-semibold sm:text-4xl playfair-display-600">Agentic, explainable, and audit‑ready</h3>
      <p className="mt-3 text-white/80">Founded with AI at the core: uplift models, policy enforcement, and an audit‑grade ledger. Delivered in‑product so feedback loops are fast and trustworthy.</p>
      <a href="#learn-more" className="mt-3 inline-block text-white/80 underline">Learn more</a>
    </div>
    <div className="mt-10">
      <MetricsBar />
      <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
        {[
          "10/10 Automotive",
          "9/10 CPG",
          "8/10 Retail",
          "7/10 Fashion",
          "6/10 Pharmaceutical",
          "5/10 Chemicals"
        ].map((t) => (
          <div key={t} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="inline-grid h-5 w-5 place-items-center rounded-full" style={{ background: ACCENT }}>
              <CheckCircle2 className="h-4 w-4 text-black" />
            </span>
            <span className="text-white/90">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Alternating capability rows (image/diagram + copy)
const DiagramCard: React.FC<{ variant?: "extract" | "health" }> = ({ variant = "extract" }) => (
  <div className="rounded-3xl border border-black/10 bg-white p-6">
    {variant === "extract" ? (
      <div className="grid grid-cols-[1fr,auto,1fr,auto,1fr] items-center gap-4">
        <div className="space-y-2">
          {["EMAIL", "JSON", "PDF", "API", "CSV"].map((s) => (
            <div key={s} className="rounded-xl border border-black/10 bg-black/5 px-3 py-2 text-xs font-semibold text-black/70">{s}</div>
          ))}
        </div>
        <ArrowRight className="mx-auto h-5 w-5 text-black/40" />
        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-black/90 px-3 py-1 text-xs font-semibold text-white">EXTRACT</div>
          <div className="mt-3 h-16 rounded-lg bg-black/5" />
        </div>
        <ArrowRight className="mx-auto h-5 w-5 text-black/40" />
        <div className="space-y-3">
          {[
            { label: "VALIDATE", color: "#F59E0B" },
            { label: "ENRICH", color: "#60A5FA" }
          ].map((x) => (
            <div key={x.label} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-semibold text-black" style={{ background: x.color + "33" }}>
                <span className="h-2 w-2 rounded-full" style={{ background: x.color }} /> {x.label}
              </div>
              <div className="mt-3 h-12 rounded-lg bg-black/5" />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        <div className="mb-3 text-sm text-black/70">POS pace — Region South</div>
        <ClientHealthChart />
      </div>
    )}
  </div>
);

const CapabilityRow: React.FC<{ label: string; title: string; body: string; cta: string; ctaHref?: string; variant?: "extract" | "health"; flip?: boolean }> = ({ label, title, body, cta, ctaHref = "#product", variant = "extract", flip }) => (
  <div className={`grid items-center gap-8 ${flip ? "md:grid-cols-[1fr,1.2fr]" : "md:grid-cols-[1.2fr,1fr]"}`}>
    {!flip && <DiagramCard variant={variant} />}
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-black/60">{label}</span>
      </div>
      <h3 className="text-2xl font-semibold sm:text-3xl playfair-display-600">{title}</h3>
      <p className="mt-3 text-black/70">{body}</p>
      <div className="mt-4 flex gap-3">
        <Button href={ctaHref} variant="ghost">{cta} <ArrowRight className="h-4 w-4" /></Button>
                <Button href="/demo" showLogo={true}>Book a demo <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
    {flip && <DiagramCard variant={variant} />}
  </div>
);


const DividerLine: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`h-px w-full bg-white/40 ${className}`} />
);

const SkyHero: React.FC = () => (
  <section className="pt-10 sm:pt-16">
    <Container>
      <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl">
        <div className="relative grid place-items-center bg-gradient-to-b from-[var(--grad-start)] to-[var(--grad-end)] px-6 py-20 text-center text-white sm:py-28">
          <div className="mx-auto max-w-4xl">
            <DividerLine />
            <h1 className="display mt-6 text-4xl font-semibold sm:text-6xl playfair-display-600">$1M annual savings & 2,000 extra hours a month await.</h1>
            <DividerLine className="mt-6" />
            <p className="mx-auto mt-6 max-w-2xl text-white/90">Explore how policy‑bound automation across planning, accruals, and claims compounds into serious annual savings. It all starts with a demo.</p>
            <div className="mt-8 flex items-center justify-center">
              <Button href="/demo" variant="dark" showLogo={true}>Book a demo <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const GlobalStatsBand: React.FC = () => (
  <section className="py-12">
    <Container>
      <div className="rounded-3xl bg-[#0b1b1a] p-8 text-white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "100+", d: "Document types processed from 35k+ partners." },
            { n: "45+", d: "Countries supported for global teams." },
            { n: "25+", d: "Industries automated end‑to‑end." },
            { n: "24/7", d: "Support across time zones." }
          ].map((s) => (
            <div key={s.n} className="flex items-start gap-3">
              <div className="h-8 w-1 rounded-full" style={{ background: "var(--accent)" }} />
              <div>
                <div className="text-4xl font-semibold leading-none">{s.n}</div>
                <div className="mt-2 text-white/80">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);


// =============== PAGE ============================================
export default function VectorLanding() {

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />

      {/* SKY HERO (raft-like claim) */}
      <SkyHero />

      {/* HERO (product visual) */}
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
                <span className="text-sm font-semibold uppercase tracking-widest text-black/60">Vector Platform</span>
              </div>
              <h2 className="text-4xl font-semibold leading-tight sm:text-6xl playfair-display-600">Trade promotions that <span className="whitespace-nowrap">optimize themselves</span></h2>
              <p className="mt-4 max-w-xl text-lg text-black/70">Vector is the next-generation Trade Promotion Management platform that plans, optimizes, monitors, and settles trade promotions with agentic automation, policy guardrails, and an audit-grade ledger.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/demo" showLogo={true}>Book a demo <ArrowRight className="h-4 w-4" /></Button>
                <Button href="/blog" variant="ghost">Read our blog <FileText className="h-4 w-4" /></Button>
                <button 
                  onClick={() => {
                    // Create and download a simple text-based one-pager
                    const onePagerContent = `
VECTOR PLATFORM
Trade Promotions That Optimize Themselves

OVERVIEW
Vector is the next-generation Trade Promotion Management platform that plans, optimizes, monitors, and settles trade promotions with agentic automation, policy guardrails, and an audit-grade ledger.

KEY FEATURES
• Eight Specialized AI Agents
• Four Operating Modes: Assist, Recommend, Auto + Approval, Auto within Policy
• Real-time Trade Health Monitoring
• Audit-Grade Vector Ledger
• Policy Engine with Guardrails
• Integration Command Center

OPERATING LOOP
Sense → Explain → Simulate → Check → Act → Log → Learn

AGENTS
1. Promo Agent - Optimizes promotion parameters
2. Claims/Deduction Agent - Handles settlement workflows
3. Contract Intelligence Agent - Manages contract terms
4. Accruals Agent - Tracks live balances
5. Integration Agent - Manages data feeds
6. Data Quality Agent - Ensures data integrity
7. Policy/Guardrail Agent - Enforces business rules
8. Executive Insights Agent - Provides strategic analytics

BENEFITS
• 3-5% ROI Lift through optimization
• 90 Days to full implementation
• Audit-Grade compliance & documentation
• Real-time liability & health monitoring

CONTACT
Book a demo: /demo
Learn more: /platform
Read our blog: /blog

© 2024 Vector Platform. All rights reserved.
                    `;
                    
                    const blob = new Blob([onePagerContent], { type: 'text/plain' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'vector-one-pager.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-black border border-black/10 px-6 py-3 rounded-lg text-sm font-semibold playfair-display-600 hover:bg-black/5 transition-all duration-200"
                >
                  <FileText className="h-4 w-4" />
                  Download one‑pager
                </button>
              </div>
            </div>
            <div>
              <div className="rounded-[28px] border border-black/10 bg-white p-2 shadow-2xl">
                <HeroIllustration />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Eyebrow>Trusted by organizations from around the world</Eyebrow>
            <LogoCloud />
          </div>
        </Container>
      </section>

      {/* ONE PLATFORM */}
      <section id="platform" className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle eyebrow="One platform to orchestrate workflows end‑to‑end" title="Centralize, extract, activate, and unlock insights" subtitle="Benefit from a central location where your teams can process promotions, accruals, and claims with business‑specific rules and exception handling." />
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr,1fr]">
            <DiagramCard />
            <BigNumberSteps />
          </div>
        </Container>
      </section>

      {/* NOT JUST ANY AI (dark slab like Raft) */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <DarkAIPanel />
        </Container>
      </section>

      {/* SUITE OF CAPABILITIES (alternating) */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle eyebrow="A suite of workflow automation capabilities" title="Plan, optimize, and settle" subtitle="Automate what should be automated—facilitate what shouldn't." />
          <div className="space-y-16">
            <CapabilityRow label="Vector Agents" title="Eight specialized AI agents working for you" body="From Promo Agent optimization to Claims/Deduction Agent settlement, Vector's eight specialized agents operate in four modes: Assist, Recommend, Auto + Approval, and Auto within Policy. Each agent explains its reasoning and logs every action to the Vector Ledger." cta="Learn about Agents" ctaHref="/platform" variant="extract" />
            
            {/* Operating Loop Section */}
            <div className="grid items-center gap-8 md:grid-cols-[1fr,1.2fr]">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-black/60">Operating Loop</span>
                </div>
                <h3 className="text-2xl font-semibold sm:text-3xl">Sense → Explain → Simulate → Check → Act → Log → Learn</h3>
                <p className="mt-3 text-black/70">Vector's consistent loop powers both planning and settlement. Agents sense data changes, explain what matters in plain English, simulate safe options, check policies, act when approved, log everything to the Vector Ledger, and learn from outcomes. This ensures speed with safety.</p>
                <div className="mt-4 flex gap-3">
                  <Button href="/scenario-studio" variant="ghost">Operating Loop <ArrowRight className="h-4 w-4" /></Button>
                  <Button href="/demo">Let's chat <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6">
                <OperatingLoop />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* IMPACT CALLOUT */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="grid items-center gap-8 rounded-3xl border border-black/10 bg-white p-6 md:grid-cols-2">
            <div className="rounded-3xl p-6" style={{ background: "var(--accent)" }}>
              <div className="rounded-xl bg-white/80 p-4 shadow">
                <div className="text-sm font-semibold">Save up to</div>
                <div className="text-5xl font-semibold">31 USD</div>
                <div className="mt-2 text-sm">per promotion</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {[
                  { t: "Operating impact", d: "Eliminate manual entry" },
                  { t: "Financial impact", d: "Reduce errors & leakage" }
                ].map((x) => (
                  <div key={x.t} className="rounded-xl bg-white/80 p-4 shadow">
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-black/70">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold playfair-display-600">Double your impact: scale savings in operations & profits</h3>
              <p className="mt-3 text-black/70">Let's talk through your pain points and show how automating extraction, accruals, and claims drives margin and speed. It's not just about data entry.</p>
              <div className="mt-5"><Button href="/demo" showLogo={true}>Book a demo <ArrowRight className="h-4 w-4" /></Button></div>
            </div>
          </div>
        </Container>
      </section>

      {/* RESOURCE FEATURE */}
      <section id="resources" className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold playfair-display-600">"The critical question isn't if or when to adopt AI in trade — it's how."</h3>
              <p className="mt-3 text-black/70">A concise guide to starting with AI in trade spend: balancing automation with human expertise, governance you can trust, and pitfalls to avoid.</p>
              <div className="mt-5"><Button href="#whitepaper">Download PDF <ArrowRight className="h-4 w-4" /></Button></div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-[#1c1c1c] p-6 text-white">
              <div className="rounded-2xl bg-white/10 p-8">
                <div className="text-xl font-semibold">Vector Research</div>
                <div className="mt-2 text-white/80">AI Imperative: A New Era for Trade Promotions</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SUCCESS STORIES CAROUSEL */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <SectionTitle 
            eyebrow="Industry Vision & Feedback" 
            title="How Vector will transform trade operations across industries" 
            subtitle="See how organizations envision achieving millions in savings and operational excellence with Vector's agentic automation platform."
            align="center"
          />
          <SuccessStoriesCarousel />
        </Container>
      </section>

      {/* INTEGRATIONS */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <SectionTitle eyebrow="Integrations" title="Engineered to integrate with your existing operations" subtitle="ERP • POS • EDI • CRM. Idempotent retries, backfills, schema diffs, and SLAs." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {["SAP", "Oracle", "NIQ", "Circana", "EDI 852", "EDI 810", "EDI 812", "Salesforce", "Snowflake", "BigQuery", "S3", "Azure"].map((n) => (
              <div key={n} className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black/70">{n}</div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid items-center gap-8 rounded-2xl border border-black/10 bg-black px-8 py-10 text-white md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold playfair-display-600">$1M annual savings & thousands of hours await.</h3>
              <p className="mt-2 max-w-xl text-white/80">Explore how automating workflows can free your team and improve margins. It all starts with a conversation.</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Button href="/demo" variant="dark" showLogo={true}>Book a demo <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
