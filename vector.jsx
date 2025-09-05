import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
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
  ChevronDown,
  Quote,
  Zap
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

// =============== THEME & PRIMITIVES ==============================
const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Button: React.FC<{ as?: "a" | "button"; href?: string; variant?: "primary" | "ghost" | "dark"; children: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>> = ({ as = "a", href = "#", variant = "primary", children, ...rest }) => {
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
    <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">{title}</h2>
    {subtitle && <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} text-black/70`}>{subtitle}</p>}
  </div>
);

// Accent for dark slab (Raft‑style)
const ACCENT = "#D8FF3D";

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
        <div className="text-5xl font-bold text-black/10">{i + 1}</div>
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
      <h3 className="text-3xl font-semibold sm:text-4xl">Agentic, explainable, and audit‑ready</h3>
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
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RLineChart data={[{ w: "W1", plan: 100, actual: 96 }, { w: "W2", plan: 110, actual: 112 }, { w: "W3", plan: 125, actual: 118 }, { w: "W4", plan: 135, actual: 129 }, { w: "W5", plan: 150, actual: 141 }, { w: "W6", plan: 170, actual: 158 }]} margin={{ left: 8, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" />
              <XAxis dataKey="w" stroke="#00000080" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#00000080" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, color: "#111" }} />
              <Line type="monotone" dataKey="plan" stroke="#111111" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} dot={false} />
            </RLineChart>
          </ResponsiveContainer>
        </div>
      </div>
    )}
  </div>
);

const CapabilityRow: React.FC<{ label: string; title: string; body: string; cta: string; variant?: "extract" | "health"; flip?: boolean }> = ({ label, title, body, cta, variant = "extract", flip }) => (
  <div className={`grid items-center gap-8 ${flip ? "md:grid-cols-[1fr,1.2fr]" : "md:grid-cols-[1.2fr,1fr]"}`}>
    {!flip && <DiagramCard variant={variant} />}
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-black/60">{label}</span>
      </div>
      <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
      <p className="mt-3 text-black/70">{body}</p>
      <div className="mt-4 flex gap-3">
        <Button href="#product" variant="ghost">{cta} <ArrowRight className="h-4 w-4" /></Button>
        <Button href="#demo">Let’s chat <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
    {flip && <DiagramCard variant={variant} />}
  </div>
);

// =============== EXTRA UI BITS (tags, helpers) ==================
const Tag: React.FC<{ children: React.ReactNode; tone?: "lime" | "gray" }> = ({ children, tone = "lime" }) => (
  <span
    className={`pill text-xs font-semibold ${
      tone === "lime" ? "bg-[var(--accent)] text-black" : "bg-black/10 text-black/70"
    }`}
  >
    {children}
  </span>
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
            <h1 className="display mt-6 text-4xl font-semibold sm:text-6xl">$1M annual savings & 2,000 extra hours a month await.</h1>
            <DividerLine className="mt-6" />
            <p className="mx-auto mt-6 max-w-2xl text-white/90">Explore how policy‑bound automation across planning, accruals, and claims compounds into serious annual savings. It all starts with a demo.</p>
            <div className="mt-8 flex items-center justify-center">
              <Button href="#demo" variant="dark">Let’s chat <ArrowRight className="h-4 w-4" /></Button>
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

const ResourceDarkStrip: React.FC = () => (
  <section className="pt-0">
    <div className="border-t border-black/10 bg-[#171717] py-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(260px,420px),1fr,1fr]">
          {/* Left card image placeholder */}
          <div className="rounded-3xl bg-white/5 p-6">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-black/20 to-white/10" />
          </div>

          {/* Center feature post */}
          <div>
            <div className="flex items-center gap-2">
              <Tag>FEATURED</Tag>
              <Tag tone="gray">COLLATERAL</Tag>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">9 Strategic Moves for Smarter, AI‑Driven Trade Management</h3>
            <div className="mt-6">
              <Button href="#resources" variant="dark">Read more <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Right footer nav lists */}
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-white/60">Product</div>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a href="#" className="hover:underline">Planning & Funds</a></li>
                <li><a href="#" className="hover:underline">Accruals & Claims</a></li>
                <li><a href="#" className="hover:underline">Live Health</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white/60">General</div>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a href="#platform" className="hover:underline">Platform</a></li>
                <li><a href="#resources" className="hover:underline">Resources</a></li>
                <li><a href="#about" className="hover:underline">About us</a></li>
                <li><a href="#docs" className="hover:underline">Documentation</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white/60">Social</div>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">X</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>
);

// =============== PAGE ============================================
export default function VectorWebsite() {
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      {/* GLOBAL FONTS & THEME VARS */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'); :root{--accent:#D8FF3D;--grad-start:#7BDCF0;--grad-end:#63D7C1;} body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial,'Noto Sans','Apple Color Emoji','Segoe UI Emoji';} h1,h2,h3,.display{font-family:'Plus Jakarta Sans',Inter,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial; letter-spacing:-.01em;} .pill{border-radius:9999px; padding:.4rem .9rem;}",
        }}
      />

      {/* NAV (raft-like) */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-black font-bold text-white">V</div>
            <span className="text-lg font-semibold">Vector</span>
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
            <a href="#platform" className="text-black/80 hover:text-black">Platform</a>
            <a href="#resources" className="text-black/80 hover:text-black">Resources</a>
            <a href="#about" className="text-black/80 hover:text-black">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="#demo">Let’s chat <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </Container>
      </header>

      {/* SKY HERO (raft-like claim) */}
      <SkyHero />

      {/* HERO (product visual) */}
      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">AI‑powered workflow automation for <span className="whitespace-nowrap">CPG trade</span></h2>
              <p className="mt-4 max-w-xl text-lg text-black/70">Drive efficiency, growth, and customer value across the promotion lifecycle. From Planning & Accruals to Claims & Settlement, Vector streamlines operations with policy‑bound autonomy.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#demo">Let’s chat <ArrowRight className="h-4 w-4" /></Button>
                <Button href="#onepager" variant="ghost">Download one‑pager <FileText className="h-4 w-4" /></Button>
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
          <SectionTitle eyebrow="A suite of workflow automation capabilities" title="Plan, optimize, and settle" subtitle="Automate what should be automated—facilitate what shouldn’t." />
          <div className="space-y-16">
            <CapabilityRow label="Accruals & Claims" title="Your profit margin’s first line of defense" body="From day one, invoices and claims match against accruals automatically with the highest level of data accuracy. Human‑in‑the‑loop focuses your team only on exceptions." cta="Accruals & Claims" variant="extract" />
            <CapabilityRow label="Operations" title="Automate ops, get notified only when it matters" body="Remove manual data entry and extraction from workflows. Standardize across teams with ready‑to‑go automations and get alerts only for exceptions." cta="Operations" variant="health" flip />
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
                <div className="text-5xl font-extrabold">31 USD</div>
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
              <h3 className="text-3xl font-semibold">Double your impact: scale savings in operations & profits</h3>
              <p className="mt-3 text-black/70">Let’s talk through your pain points and show how automating extraction, accruals, and claims drives margin and speed. It’s not just about data entry.</p>
              <div className="mt-5"><Button href="#demo">Let’s chat <ArrowRight className="h-4 w-4" /></Button></div>
            </div>
          </div>
        </Container>
      </section>

      {/* RESOURCE FEATURE */}
      <section id="resources" className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold">“The critical question isn’t if or when to adopt AI in trade — it’s how.”</h3>
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

      {/* TESTIMONIAL */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="grid items-center gap-8 md:grid-cols-[1fr,2fr]">
              <div>
                <div className="text-2xl font-bold">Navia</div>
                <div className="mt-3 text-xs uppercase tracking-widest text-black/60">Vector solutions used</div>
                <div className="mt-2 inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-semibold">Finance</div>
              </div>
              <div>
                <p className="text-lg">AI now takes care of tasks our staff did not enjoy. The automation required us to optimize our processes and revealed areas for improvement. We now provide better service.</p>
                <div className="mt-4 text-sm text-black/60">Rob Ardesi — COO at Navia Freight</div>
              </div>
            </div>
          </div>
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
              <h3 className="text-2xl font-bold">$1M annual savings & thousands of hours await.</h3>
              <p className="mt-2 max-w-xl text-white/80">Explore how automating workflows can free your team and improve margins. It all starts with a conversation.</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Button href="#demo" variant="dark">Let’s chat <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* RESOURCE DARK STRIP + MINI FOOTER NAV (raft style) */}
      <ResourceDarkStrip />

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white py-10 text-sm text-black/70">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Vector — Direction. Magnitude. ROI.</div>
            <div className="flex items-center gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
