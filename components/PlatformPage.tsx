import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Database,
  Workflow,
  Zap,
  FileText,
  Settings,
  BarChart3,
  Users,
  Lock,
  Globe,
  Server,
  GitBranch,
  Eye,
  Play,
  AlertTriangle,
  Clock,
  TrendingUp,
  Target,
  ShieldCheck,
  Code,
  Link,
  ChevronDown,
  ChevronRight
} from "lucide-react";

// =============== COMPONENTS ==============================
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

const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: "left" | "center" }> = ({ title, subtitle, align = "left" }) => (
  <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
    <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">{title}</h2>
    {subtitle && <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} text-black/70`}>{subtitle}</p>}
  </div>
);

const PillarCard: React.FC<{ icon: React.ReactNode; title: string; description: string; features: string[] }> = ({ icon, title, description, features }) => (
  <div className="rounded-3xl border border-black/10 bg-white p-8">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
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

const AgentCard: React.FC<{ 
  name: string; 
  purpose: string; 
  triggers: string[]; 
  skills: string[]; 
  modes: string[];
  icon: React.ReactNode;
}> = ({ name, purpose, triggers, skills, modes, icon }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
    <p className="mb-4 text-sm text-black/70">{purpose}</p>
    
    <div className="space-y-3">
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Triggers</div>
        <div className="text-sm text-black/70">{triggers.join(", ")}</div>
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Skills</div>
        <div className="text-sm text-black/70">{skills.join(", ")}</div>
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Modes</div>
        <div className="flex flex-wrap gap-1">
          {modes.map((mode, i) => (
            <span key={i} className="rounded-full bg-black/5 px-2 py-1 text-xs text-black/70">{mode}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FlowStep: React.FC<{ title: string; description: string; icon: React.ReactNode; isLast?: boolean }> = ({ title, description, icon, isLast = false }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-black/70">{description}</p>
    </div>
    {!isLast && <ArrowRight className="mt-3 h-5 w-5 text-black/40" />}
  </div>
);

const ConnectorLogo: React.FC<{ name: string; category: string }> = ({ name, category }) => (
  <div className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70">
    <span className="font-medium">{name}</span>
    <span className="ml-2 text-xs text-black/50">({category})</span>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void }> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-black/10">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 text-left"
    >
      <span className="font-semibold">{question}</span>
      {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
    {isOpen && (
      <div className="pb-4 text-black/70">
        {answer}
      </div>
    )}
  </div>
);

// =============== MAIN COMPONENT ==============================
export default function PlatformPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      {/* Hero Section - Raft Style */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
              One platform to orchestrate trade workflows end-to-end
            </h1>
            <p className="mb-8 text-xl text-black/70">
              Plan → Execute → Settle with agentic automation, policy guardrails, and an audit-grade ledger.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="#demo" variant="primary">
                See a demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#architecture" variant="ghost">
                Read the architecture <FileText className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Not just any AI solution - Raft Style */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 opacity-90">
              <div className="h-px w-12 bg-black/20" />
              <span className="text-sm uppercase tracking-widest text-black/60">Not just any AI solution.</span>
              <div className="h-px w-12 bg-black/20" />
            </div>
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
              Agentic, explainable, and audit-ready
            </h2>
            <p className="mb-8 text-black/70">
              Founded with AI at the core: uplift models, policy enforcement, and an audit-grade ledger. 
              Delivered in-product so feedback loops are fast and trustworthy.
            </p>
          </div>
        </Container>
      </section>

      {/* The 5 Pillars */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Vector's opinionated foundation" 
            subtitle="Built on five core pillars that ensure trust, transparency, and automation at scale"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PillarCard
              icon={<Zap className="h-6 w-6 text-black" />}
              title="Agentic Core"
              description="Assist → Recommend → Auto-with-Approval → Auto-within-Policy; every action has rationale."
              features={[
                "Explainable AI decisions",
                "Human-in-the-loop controls",
                "Policy-bounded automation",
                "Rationale for every action"
              ]}
            />
            <PillarCard
              icon={<Database className="h-6 w-6 text-black" />}
              title="Audit-grade Ledger"
              description="Append-only events, replay 'as-of' states for accruals/claims/approvals."
              features={[
                "Immutable event sourcing",
                "As-of reporting",
                "Complete audit trail",
                "Replay any point in time"
              ]}
            />
            <PillarCard
              icon={<Code className="h-6 w-6 text-black" />}
              title="Policy-as-Code"
              description="OPA policies for approvals, margin floors, budgets, SoX checks; human overrides logged."
              features={[
                "Machine-enforced policies",
                "Human override trails",
                "Version-controlled rules",
                "Plain-English explanations"
              ]}
            />
            <PillarCard
              icon={<GitBranch className="h-6 w-6 text-black" />}
              title="Lineage & Observability"
              description="OpenLineage from feed → model → decision → P&L; feed SLAs, schema diffs, backfills."
              features={[
                "End-to-end data lineage",
                "Feed SLA monitoring",
                "Schema drift detection",
                "Safe backfill operations"
              ]}
            />
            <PillarCard
              icon={<Link className="h-6 w-6 text-black" />}
              title="Connectors & Composability"
              description="SAP/Oracle, NIQ/Circana/EDI 852/810/812, Salesforce/REX, data clouds; idempotent retries."
              features={[
                "Pre-built connectors",
                "Idempotent operations",
                "Self-healing integrations",
                "Composable architecture"
              ]}
            />
          </div>
        </Container>
      </section>

      {/* One platform, Multiple solutions - Raft Style */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr,1fr]">
            {/* Left side - Isometric diagram */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Isometric layered diagram */}
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  
                  {/* Bottom layer - Integrations */}
                  <g transform="translate(50, 200) rotate(-30) skewX(30)">
                    <rect width="200" height="40" fill="#3b82f6" opacity="0.8"/>
                    <text x="100" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">INTEGRATIONS</text>
                  </g>
                  
                  {/* Second layer - Platform AI */}
                  <g transform="translate(60, 160) rotate(-30) skewX(30)">
                    <rect width="180" height="40" fill="#f59e0b" opacity="0.9"/>
                    <text x="90" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">PLATFORM AI</text>
                  </g>
                  
                  {/* Third layer - Configuration Layer */}
                  <g transform="translate(70, 120) rotate(-30) skewX(30)">
                    <rect width="160" height="40" fill="#10b981" opacity="0.9"/>
                    <text x="80" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">CONFIGURATION LAYER</text>
                  </g>
                  
                  {/* Top layer - Applications */}
                  <g transform="translate(80, 80) rotate(-30) skewX(30)">
                    <rect width="140" height="40" fill="#ef4444" opacity="0.9"/>
                    <text x="70" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">APPLICATIONS</text>
                  </g>
                  
                  {/* Labels */}
                  <text x="20" y="220" className="text-xs fill-black/60">INTEGRATIONS</text>
                  <text x="20" y="180" className="text-xs fill-black/60">PLATFORM AI</text>
                  <text x="20" y="140" className="text-xs fill-black/60">CONFIGURATION LAYER</text>
                  <text x="20" y="100" className="text-xs fill-black/60">APPLICATIONS</text>
                </svg>
              </div>
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
                One platform, Multiple solutions—built on AI
              </h2>
              <p className="mb-4 text-black/70">
                Vector transforms trade operations by automating workflows across the entire promotion lifecycle. 
                The Planning, Accruals, and Claims solutions are seamlessly integrated, designed from the ground up 
                with AI at their core—not as an afterthought.
              </p>
              <p className="text-black/70">
                With Vector, you get a comprehensive, AI-powered system that handles all your needs in one place.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefit at immense scale - Raft Style */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr,1fr]">
            {/* Left side - Isometric diagram */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Isometric layered diagram */}
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  <defs>
                    <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  
                  {/* Bottom layer - Integrations */}
                  <g transform="translate(50, 200) rotate(-30) skewX(30)">
                    <rect width="200" height="40" fill="#3b82f6" opacity="0.8"/>
                    <text x="100" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">INTEGRATIONS</text>
                  </g>
                  
                  {/* Second layer - Platform AI */}
                  <g transform="translate(60, 160) rotate(-30) skewX(30)">
                    <rect width="180" height="40" fill="#f59e0b" opacity="0.9"/>
                    <text x="90" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">PLATFORM AI</text>
                  </g>
                  
                  {/* Third layer - Configuration Layer */}
                  <g transform="translate(70, 120) rotate(-30) skewX(30)">
                    <rect width="160" height="40" fill="#10b981" opacity="0.9"/>
                    <text x="80" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">CONFIGURATION LAYER</text>
                  </g>
                  
                  {/* Top layer - Applications */}
                  <g transform="translate(80, 80) rotate(-30) skewX(30)">
                    <rect width="140" height="40" fill="#ef4444" opacity="0.9"/>
                    <text x="70" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">APPLICATIONS</text>
                  </g>
                  
                  {/* Callout for Platform AI */}
                  <g transform="translate(250, 140)">
                    <rect width="120" height="60" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="8"/>
                    <text x="60" y="20" textAnchor="middle" className="text-xs font-semibold fill-black">PLATFORM AI</text>
                    <text x="60" y="35" textAnchor="middle" className="text-xs fill-black/70">LLMs trained on</text>
                    <text x="60" y="50" textAnchor="middle" className="text-xs fill-black/70">logistics documents</text>
                  </g>
                  
                  {/* Arrow pointing to Platform AI */}
                  <path d="M 240 170 L 250 170" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
                Benefit at immense scale
              </h2>
              <p className="mb-4 text-black/70">
                The Platform AI layer uses Large Language Models (LLMs) trained on logistics-specific documents 
                to identify document types, content, and conversion formats (units of measure, currencies, time zones).
              </p>
              <p className="text-black/70">
                Platform AI allows customers to benefit from the vast scale and high quality of trained data, 
                capable of processing hundreds of documents per second to enhance operational efficiency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vector Agents */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Six intelligent agents" 
            subtitle="Each agent operates in multiple modes with clear guardrails and measurable outcomes"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AgentCard
              name="Promo Agent"
              purpose="Keep promos on track; detect drift; propose edits; run what-ifs"
              triggers={["New POS signal", "Variance > threshold", "Weekly review"]}
              skills={["Health compute", "Drift detection", "Action proposals", "What-if analysis"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<TrendingUp className="h-5 w-5" />}
            />
            <AgentCard
              name="Deduction Agent"
              purpose="Classify deductions, bundle evidence, match to promos/contracts"
              triggers={["New deduction", "Unmatched claim", "Aging threshold"]}
              skills={["Classification", "Evidence bundling", "Recovery matching", "EV calculation"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<FileText className="h-5 w-5" />}
            />
            <AgentCard
              name="Finance Agent"
              purpose="Maintain accrual schedules; alert over/under; prep audit packs"
              triggers={["Plan publish", "Claim settle", "Period close", "Variance alerts"]}
              skills={["Accrual scheduling", "Variance monitoring", "Audit pack generation", "GL export"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<BarChart3 className="h-5 w-5" />}
            />
            <AgentCard
              name="Data Steward Agent"
              purpose="Enforce MDM quality gates; block dirty hierarchies; propose fixes"
              triggers={["Ingest at staging", "Schema drift", "Failed validations"]}
              skills={["Quality gates", "Schema validation", "Data cleansing", "Fix proposals"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<Database className="h-5 w-5" />}
            />
            <AgentCard
              name="Deal Desk Agent"
              purpose="Pre-check proposals against policies; explain violations"
              triggers={["Draft promotion", "Policy change", "Risk threshold"]}
              skills={["Policy checking", "Violation explanation", "Approval routing", "Risk assessment"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<Shield className="h-5 w-5" />}
            />
            <AgentCard
              name="Integration Agent"
              purpose="Detect late/failed feeds; auto replay/backfill safely; emit lineage"
              triggers={["SLA breach", "Checksum mismatch", "Schema change"]}
              skills={["SLA monitoring", "Safe replay", "Backfill operations", "Lineage emission"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<Link className="h-5 w-5" />}
            />
          </div>
        </Container>
      </section>

      {/* Governance & Trust */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Governance & Trust" 
            subtitle="Built-in controls that ensure every decision is auditable and every policy is enforceable"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <Database className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Audit-grade Ledger</h3>
              <p className="text-black/70">
                Event sourcing with immutable records. Replay any point in time for accruals, claims, and approvals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <Code className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Policy-as-Code</h3>
              <p className="text-black/70">
                OPA policies with plain-English explanations. Every automated action includes policy links and rationale.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <GitBranch className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Complete Lineage</h3>
              <p className="text-black/70">
                Trace every number from source feeds through models to final decisions and P&L impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration Command Center */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Integration Command Center" 
            subtitle="Monitor, manage, and maintain all your data connections with confidence"
            align="center"
          />
          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Feed Health</span>
                </div>
                <div className="mt-2 text-sm text-black/70">95% within SLA</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-blue-50 p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Freshness</span>
                </div>
                <div className="mt-2 text-sm text-black/70">Avg 2.3 hours</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold">Issues</span>
                </div>
                <div className="mt-2 text-sm text-black/70">3 active alerts</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="mb-4 font-semibold">Feed Status</h4>
              <div className="space-y-2">
                {[
                  { name: "SAP GL Feed", status: "Healthy", lastUpdate: "2 hours ago", completeness: "98%" },
                  { name: "NIQ POS Data", status: "Healthy", lastUpdate: "1 hour ago", completeness: "100%" },
                  { name: "EDI 852 Invoices", status: "Warning", lastUpdate: "6 hours ago", completeness: "87%" },
                  { name: "Salesforce CRM", status: "Healthy", lastUpdate: "30 minutes ago", completeness: "99%" }
                ].map((feed, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-black/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${feed.status === 'Healthy' ? 'bg-green-500' : 'bg-orange-500'}`} />
                      <span className="font-medium">{feed.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-black/70">
                      <span>{feed.lastUpdate}</span>
                      <span>{feed.completeness}</span>
                      <Button variant="ghost" className="text-xs">
                        <Play className="h-3 w-3" />
                        Replay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl bg-black/5 p-4">
              <h5 className="mb-2 font-semibold">Safety Features</h5>
              <div className="grid grid-cols-1 gap-2 text-sm text-black/70 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Idempotent operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Sandbox → prod promotion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Approval workflows</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Security & Compliance */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Security & Compliance" 
            subtitle="Enterprise-grade security with comprehensive compliance frameworks"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <ShieldCheck className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">SOC 2 Type II</h4>
              <p className="text-sm text-black/70">In progress</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Lock className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">ISO 27001</h4>
              <p className="text-sm text-black/70">Roadmap</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">SSO/SAML</h4>
              <p className="text-sm text-black/70">Okta, Azure AD</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Globe className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">Data Residency</h4>
              <p className="text-sm text-black/70">US, EU options</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Architecture Overview */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Architecture Overview" 
            subtitle="Modern, scalable architecture built for enterprise trade operations"
            align="center"
          />
          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="mb-4 font-semibold">System Architecture</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-sm">Sources (ERP, POS, EDI)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm">Ingest Layer (quality gates, validation)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <span className="text-sm">Policy Engine (OPA)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-sm">Agent Layer (6 intelligent agents)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="text-sm">Ledger (event sourcing)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-gray-500" />
                    <span className="text-sm">APIs & Exports (GL, audit packs)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Technical Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Stream & batch processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Idempotent retries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Sandbox → prod replay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>OpenTelemetry observability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>OpenLineage data lineage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Connectors */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Pre-built Connectors" 
            subtitle="Connect to your existing systems with confidence"
            align="center"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <ConnectorLogo name="SAP" category="ERP" />
            <ConnectorLogo name="Oracle" category="ERP" />
            <ConnectorLogo name="Salesforce" category="CRM" />
            <ConnectorLogo name="NIQ" category="POS" />
            <ConnectorLogo name="Circana" category="POS" />
            <ConnectorLogo name="EDI 852" category="EDI" />
            <ConnectorLogo name="EDI 810" category="EDI" />
            <ConnectorLogo name="EDI 812" category="EDI" />
            <ConnectorLogo name="S3" category="Storage" />
            <ConnectorLogo name="BigQuery" category="Analytics" />
            <ConnectorLogo name="Snowflake" category="Analytics" />
            <ConnectorLogo name="Azure" category="Cloud" />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Common questions about Vector's platform and capabilities"
            align="center"
          />
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-black/10 bg-white">
              {[
                {
                  question: "How do you prevent bad automation?",
                  answer: "Every automated action is bounded by OPA policies with human-readable explanations. We provide multiple operating modes (Assist → Recommend → Auto-with-Approval → Auto-within-Policy) and comprehensive override trails. All actions are logged in our audit-grade ledger."
                },
                {
                  question: "Can we bring our own models?",
                  answer: "Yes, Vector supports BYO-model plugins in V3. For V1, we provide pre-trained models optimized for trade operations with full explainability and reason codes."
                },
                {
                  question: "How do overrides work?",
                  answer: "When a policy blocks an action, users can request an override with justification. All overrides are logged with full context, approval workflow, and audit trail. Override patterns are analyzed to improve policies."
                },
                {
                  question: "What's the go-live path and typical timeline?",
                  answer: "Our typical onboarding is 2-4 weeks: Week 1-2 for connector setup and data validation, Week 3 for policy configuration and user training, Week 4 for pilot launch with 2-3 promotions. Full rollout typically takes 6-8 weeks."
                }
              ].map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === i}
                  onToggle={() => toggleFAQ(i)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-black/10 bg-black py-16 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
              Ready to transform your trade operations?
            </h2>
            <p className="mb-8 text-xl text-white/80">
              Join forward-thinking CPG companies using Vector to automate workflows, 
              improve accuracy, and unlock millions in savings.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="#demo" variant="dark">
                See a demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="ghost" className="border-white/20 text-white hover:bg-white/10">
                Talk to sales <Users className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
