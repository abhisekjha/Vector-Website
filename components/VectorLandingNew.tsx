import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SkyHeroSection } from "./sections/SkyHeroSection";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { CTASection } from "./sections/CTASection";
import { IntegrationSection } from "./sections/IntegrationSection";

// Dynamically import the client-only chart to prevent SSR issues
const ClientHealthChart = dynamic(() => import("./ClientHealthChart"), { ssr: false });

// Import UI components
import { Container, SectionTitle, Card, Button } from "./ui";

// =============== PLATFORM SECTION COMPONENTS ====================
const BigNumberSteps: React.FC = () => (
  <div className="grid grid-cols-4 gap-10">
    {[
      { t: "Centralize your data", b: "Access ERP, POS, EDI in one place regardless of format." },
      { t: "Extract your data", b: "Categorize, standardize, and enrich with MDM." },
      { t: "Activate your data", b: "Validate with policies, sync bi‑directionally to systems." },
      { t: "Unlock insights", b: "Drivers, ROI, and audit‑ready analytics for every promo." }
    ].map((s, i) => (
      <div key={s.t}>
        <div className="text-5xl font-semibold text-black/10">{i + 1}</div>
        <div className="mt-2 text-lg font-semibold">{s.t}</div>
        <p className="mt-2 text-black/70">{s.b}</p>
      </div>
    ))}
  </div>
);

const DiagramCard: React.FC<{ variant?: "extract" | "health" }> = ({ variant = "extract" }) => (
  <Card className="w-full">
    {variant === "extract" ? (
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 w-full min-h-[200px]">
        <div className="flex flex-col gap-2">
          {["EMAIL", "JSON", "PDF", "API", "CSV"].map((s) => (
            <div key={s} className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">{s}</div>
          ))}
        </div>
        <div className="mx-auto h-5 w-5 text-gray-400 text-lg">→</div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-gray-800 px-3 py-1 text-xs font-semibold text-white">EXTRACT</div>
          <div className="mt-3 h-16 rounded-lg bg-gray-100" />
        </div>
        <div className="mx-auto h-5 w-5 text-gray-400 text-lg">→</div>
        <div className="flex flex-col gap-3">
          {[
            { label: "VALIDATE", color: "bg-yellow-100", dotColor: "bg-yellow-500" },
            { label: "ENRICH", color: "bg-blue-100", dotColor: "bg-blue-500" }
          ].map((x) => (
            <div key={x.label} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className={`inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-semibold text-gray-800 ${x.color}`}>
                <span className={`h-2 w-2 rounded-full ${x.dotColor}`} /> {x.label}
              </div>
              <div className="mt-3 h-12 rounded-lg bg-gray-100" />
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
  </Card>
);

const CapabilityRow: React.FC<{ 
  label: string; 
  title: string; 
  body: string; 
  cta: string; 
  variant?: "extract" | "health"; 
  flip?: boolean 
}> = ({ label, title, body, cta, variant = "extract", flip }) => (
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
        <Button href="#product" variant="ghost" icon={<span>→</span>}>{cta}</Button>
        <Button href="#demo" showLogo icon={<span>→</span>}>Book a demo</Button>
      </div>
    </div>
    {flip && <DiagramCard variant={variant} />}
  </div>
);

// =============== AI PANEL COMPONENT ====================
const MetricsBar: React.FC = () => (
  <div className="grid grid-cols-3 gap-8">
    {[
      { k: "5 billion", v: "Data points used to train and tune models." },
      { k: "35k", v: "Vendors/partners the models have seen." },
      { k: "$10 billion", v: "Trade value processed (and counting)." }
    ].map((m) => (
      <div key={m.k} className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-accent" />
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
  <div className="bg-black text-white p-16 rounded-3xl border border-black/10">
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 flex items-center justify-center gap-3 opacity-90">
        <div className="h-px w-12 bg-accent" />
        <span className="text-sm uppercase tracking-widest">Not just any AI solution.</span>
        <div className="h-px w-12 bg-accent" />
      </div>
      <h3 className="text-3xl font-semibold playfair-display-600">Agentic, explainable, and audit‑ready</h3>
      <p className="mt-3 text-white/80">Founded with AI at the core: uplift models, policy enforcement, and an audit‑grade ledger. Delivered in‑product so feedback loops are fast and trustworthy.</p>
      <a href="#learn-more" className="mt-3 inline-block text-white/80 underline">Learn more</a>
    </div>
    <div className="mt-10">
      <MetricsBar />
      <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
        {[
          "10/10 Automotive",
          "9/10 CPG",
          "8/10 Retail",
          "7/10 Fashion",
          "6/10 Pharmaceutical",
          "5/10 Chemicals"
        ].map((t) => (
          <div key={t} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-accent">
              <span className="h-4 w-4 text-black">✓</span>
            </span>
            <span className="text-white/90">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// =============== GLOBAL STATS COMPONENT ====================
const GlobalStatsBand: React.FC = () => (
  <section className="py-12">
    <Container>
      <div className="rounded-3xl bg-[#0b1b1a] p-8 text-white">
        <div className="grid gap-8 grid-cols-4">
          {[
            { n: "100+", d: "Document types processed from 35k+ partners." },
            { n: "45+", d: "Countries supported for global teams." },
            { n: "25+", d: "Industries automated end‑to‑end." },
            { n: "24/7", d: "Support across time zones." }
          ].map((s) => (
            <div key={s.n} className="flex items-start gap-3">
              <div className="h-8 w-1 rounded-full bg-accent" />
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

// =============== IMPACT CALLOUT COMPONENT ====================
const ImpactCallout: React.FC = () => (
  <section className="border-t border-black/10 py-16">
    <Container>
      <div className="grid items-center gap-8 rounded-3xl border border-black/10 bg-white p-6 md:grid-cols-2">
        <div className="rounded-3xl p-6 accent-bg">
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
          <div className="mt-5">
            <Button href="#demo" showLogo icon={<span>→</span>}>Book a demo</Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// =============== RESOURCE FEATURE COMPONENT ====================
const ResourceFeature: React.FC = () => (
  <section id="resources" className="border-t border-black/10 bg-white py-16">
    <Container>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-semibold playfair-display-600">"The critical question isn't if or when to adopt AI in trade — it's how."</h3>
          <p className="mt-3 text-black/70">A concise guide to starting with AI in trade spend: balancing automation with human expertise, governance you can trust, and pitfalls to avoid.</p>
          <div className="mt-5">
            <Button href="#whitepaper" icon={<span>→</span>}>Download PDF</Button>
          </div>
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
);

// =============== INTEGRATIONS COMPONENT ====================
const IntegrationsSection: React.FC = () => (
  <section className="border-t border-black/10 py-16">
    <Container>
      <SectionTitle 
        eyebrow="Integrations" 
        title="Engineered to integrate with your existing operations" 
        subtitle="ERP • POS • EDI • CRM. Idempotent retries, backfills, schema diffs, and SLAs." 
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {["SAP", "Oracle", "NIQ", "Circana", "EDI 852", "EDI 810", "EDI 812", "Salesforce", "Snowflake", "BigQuery", "S3", "Azure"].map((n) => (
          <div key={n} className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black/70">{n}</div>
        ))}
      </div>
    </Container>
  </section>
);

// =============== MAIN COMPONENT ====================
export default function VectorLandingNew() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      {/* Navigation */}
      <Navbar />

      {/* Sky Hero */}
      <SkyHeroSection />

      {/* Main Hero */}
      <HeroSection />

      {/* One Platform */}
      <section id="platform" className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            eyebrow="One platform to orchestrate workflows end‑to‑end" 
            title="Centralize, extract, activate, and unlock insights" 
            subtitle="Benefit from a central location where your teams can process promotions, accruals, and claims with business‑specific rules and exception handling." 
          />
          <div className="grid items-center gap-8 lg:grid-cols-2 grid-cols-1">
            <div className="w-full">
              <DiagramCard variant="extract" />
            </div>
            <div className="w-full">
              <BigNumberSteps />
            </div>
          </div>
        </Container>
      </section>

      {/* Not Just Any AI */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <DarkAIPanel />
        </Container>
      </section>

      {/* Global Stats */}
      <GlobalStatsBand />

      {/* Suite of Capabilities */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            eyebrow="A suite of workflow automation capabilities" 
            title="Plan, optimize, and settle" 
            subtitle="Automate what should be automated—facilitate what shouldn't." 
          />
          <div className="space-y-16">
            <CapabilityRow 
              label="Accruals & Claims" 
              title="Your profit margin's first line of defense" 
              body="From day one, invoices and claims match against accruals automatically with the highest level of data accuracy. Human‑in‑the‑loop focuses your team only on exceptions." 
              cta="Accruals & Claims" 
              variant="extract" 
            />
            <CapabilityRow 
              label="Operations" 
              title="Automate ops, get notified only when it matters" 
              body="Remove manual data entry and extraction from workflows. Standardize across teams with ready‑to‑go automations and get alerts only for exceptions." 
              cta="Operations" 
              variant="health" 
              flip 
            />
          </div>
        </Container>
      </section>

      {/* Impact Callout */}
      <ImpactCallout />

      {/* Resource Feature */}
      <ResourceFeature />

      {/* Success Stories */}
      <TestimonialsSection />

      {/* Integrations */}
      <IntegrationSection />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
