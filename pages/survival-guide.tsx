import React from "react";
import Head from "next/head";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  BarChart3, 
  Clock, 
  Users, 
  Database,
  Workflow,
  Target,
  TrendingUp,
  FileText,
  Globe,
  Lock,
  Eye,
  Settings,
  Play,
  Download
} from "lucide-react";
import { Container, SectionTitle } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SurvivalGuide() {
  return (
    <>
      <Head>
        <title>Vector — Trade Automation Survival Guide</title>
        <meta name="description" content="Complete guide to Vector's AI-powered trade automation platform. Plan, optimize, and settle with real-time intelligence and audit-grade ledger." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/50 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-green-100/50 rounded-full animate-pulse animate-delay-1000" />
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-100/50 rounded-full animate-pulse animate-delay-2000" />
          </div>
          
          <Container className="relative py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold playfair-display-600 rounded-full">
                  SURVIVAL GUIDE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Vector — Trade Automation
                <br />
                <span className="text-blue-600">Survival Guide</span>
              </h1>
              
              <div className="mb-8">
                <p className="text-2xl playfair-display-500 text-black/80 mb-2">Direction. Magnitude. ROI.</p>
                <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto">
                  Plan, optimize, and settle with real-time intelligence, policy-bound autonomy, and an audit-grade ledger.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Schedule a Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="#download" 
                  className="inline-flex items-center gap-2 border border-black/10 bg-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-black/5 transition-colors duration-200"
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* How to Use This Guide */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold playfair-display-600 mb-8">How to Use This Guide</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-black/10">
                  <h3 className="text-xl font-semibold playfair-display-600 mb-4">Audience</h3>
                  <p className="playfair-display-400 text-black/80">
                    Finance teams, Sales/Trade professionals, Deductions specialists, and IT leaders looking to modernize trade operations.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-black/10">
                  <h3 className="text-xl font-semibold playfair-display-600 mb-4">Contact</h3>
                  <p className="playfair-display-400 text-black/80">
                    Questions? Reach out to <a href="mailto:hello@vector.ai" className="text-blue-600 hover:underline">hello@vector.ai</a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Executive Summary */}
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-8 text-center">Executive Summary</h2>
              
              <div className="bg-white rounded-3xl p-8 mb-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold playfair-display-600 text-[blue-600] mb-2">20-25%</div>
                  <p className="text-xl playfair-display-500">of CPG revenue is trade spend</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold playfair-display-600 mb-4">The Problem</h3>
                    <ul className="space-y-3 playfair-display-400 text-black/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        Legacy tools split plan/claims/analytics
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        Finance lacks live liability visibility
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        IT lacks observability across systems
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold playfair-display-600 mb-4">The Solution</h3>
                    <ul className="space-y-3 playfair-display-400 text-black/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[blue-600] rounded-full mt-2 flex-shrink-0" />
                        Unifies TPM + TPO with agentic automation
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[blue-600] rounded-full mt-2 flex-shrink-0" />
                        Policy-as-code (OPA) guardrails
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[blue-600] rounded-full mt-2 flex-shrink-0" />
                        Append-only Ledger for audit trails
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What Makes Vector Different */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">What Makes Vector Different</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="h-8 w-8 text-[blue-600]" />
                    <h3 className="text-xl font-semibold playfair-display-600">One Flow</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    Plan → Execute → Claims/Settlement with optimization built-in, not bolted on.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-[blue-600]" />
                    <h3 className="text-xl font-semibold playfair-display-600">Audit-Grade by Design</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    Ledger + as-of reconciliation with complete lineage to P&L.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="h-8 w-8 text-[blue-600]" />
                    <h3 className="text-xl font-semibold playfair-display-600">Policy-Bound Autonomy</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    OPA guardrails + human approvals + plain-English explanations.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-8 w-8 text-[blue-600]" />
                    <h3 className="text-xl font-semibold playfair-display-600">Observable Integrations</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    ERP/POS/EDI with SLAs, schema-diffs, and safe replays.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Measured Outcomes */}
        <section className="py-16">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">Measured Outcomes</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold playfair-display-600 text-[blue-600] mb-2">↑</div>
                  <p className="text-sm playfair-display-400 text-black/80">Accrual Accuracy</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 text-center">
                  <CheckCircle2 className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold playfair-display-600 text-[blue-600] mb-2">↑</div>
                  <p className="text-sm playfair-display-400 text-black/80">Audit Pass Rate</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 text-center">
                  <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold playfair-display-600 text-[blue-600] mb-2">↑</div>
                  <p className="text-sm playfair-display-400 text-black/80">Deduction Recovery</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl p-6 text-center">
                  <Clock className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold playfair-display-600 text-[blue-600] mb-2">↓</div>
                  <p className="text-sm playfair-display-400 text-black/80">Cycle Time</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold playfair-display-600 text-[blue-600] mb-2">↑</div>
                  <p className="text-sm playfair-display-400 text-black/80">Promo ROI</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Six Agents */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">The Six Agents</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Promo Agent",
                    purpose: "Optimizes trade promotions",
                    triggers: "Budget changes, market shifts",
                    actions: "Scenario modeling, approval routing",
                    icon: <Target className="h-6 w-6" />
                  },
                  {
                    name: "Deduction Agent",
                    purpose: "Manages deduction recovery",
                    triggers: "New deductions, evidence gaps",
                    actions: "Evidence collection, dispute filing",
                    icon: <FileText className="h-6 w-6" />
                  },
                  {
                    name: "Finance Agent",
                    purpose: "Maintains live liability",
                    triggers: "Accrual updates, period close",
                    actions: "Balance reconciliation, GL export",
                    icon: <BarChart3 className="h-6 w-6" />
                  },
                  {
                    name: "Data Steward",
                    purpose: "Ensures data quality",
                    triggers: "Schema changes, data anomalies",
                    actions: "Validation, enrichment, alerts",
                    icon: <Database className="h-6 w-6" />
                  },
                  {
                    name: "Deal Desk",
                    purpose: "Manages deal approvals",
                    triggers: "New deals, policy violations",
                    actions: "Approval routing, exception handling",
                    icon: <Users className="h-6 w-6" />
                  },
                  {
                    name: "Integration Agent",
                    purpose: "Monitors system health",
                    triggers: "Feed failures, SLA breaches",
                    actions: "Auto-recovery, notifications",
                    icon: <Globe className="h-6 w-6" />
                  }
                ].map((agent, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[blue-600]/20 rounded-lg">
                        {agent.icon}
                      </div>
                      <h3 className="text-xl font-semibold playfair-display-600">{agent.name}</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold playfair-display-600 text-[blue-600] mb-1">Purpose</h4>
                        <p className="text-sm playfair-display-400 text-black/80">{agent.purpose}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold playfair-display-600 text-[blue-600] mb-1">Triggers</h4>
                        <p className="text-sm playfair-display-400 text-black/80">{agent.triggers}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold playfair-display-600 text-[blue-600] mb-1">Actions</h4>
                        <p className="text-sm playfair-display-400 text-black/80">{agent.actions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 90-Day Go-Live Playbook */}
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">90-Day Go-Live Playbook</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[blue-600] text-black rounded-full flex items-center justify-center font-bold playfair-display-600">
                      1-2
                    </div>
                    <h3 className="text-2xl font-semibold playfair-display-600">Foundations</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    SSO/RBAC setup, policy pack v1, connector wizards, and initial data validation.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[blue-600] text-black rounded-full flex items-center justify-center font-bold playfair-display-600">
                      3-6
                    </div>
                    <h3 className="text-2xl font-semibold playfair-display-600">First Loop Live</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    Planning + approvals, Health v1, claims intake, Ledger timeline + as-of reconciliation.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[blue-600] text-black rounded-full flex items-center justify-center font-bold playfair-display-600">
                      7-10
                    </div>
                    <h3 className="text-2xl font-semibold playfair-display-600">Observability & Scale</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    Integration Center, data gates, KPI dashboards, and performance optimization.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[blue-600] text-black rounded-full flex items-center justify-center font-bold playfair-display-600">
                      11-12
                    </div>
                    <h3 className="text-2xl font-semibold playfair-display-600">Pilot Hardening</h3>
                  </div>
                  <p className="playfair-display-400 text-black/80">
                    Security review, runbook creation, executive readout, and go-live preparation.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ROI Snapshot */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">ROI Snapshot</h2>
              
              <div className="bg-gradient-to-r from-[blue-600]/20 to-blue-500/20 rounded-3xl p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold playfair-display-600 text-[blue-600] mb-2">$100M</div>
                    <p className="playfair-display-400 text-black/80">Trade Base</p>
                    <p className="text-sm playfair-display-400 text-black/60 mt-1">+3-5% uplift target</p>
                  </div>
                  
                  <div>
                    <div className="text-4xl font-bold playfair-display-600 text-[blue-600] mb-2">5% → 2%</div>
                    <p className="playfair-display-400 text-black/80">Accrual Delta</p>
                    <p className="text-sm playfair-display-400 text-black/60 mt-1">Improved accuracy</p>
                  </div>
                  
                  <div>
                    <div className="text-4xl font-bold playfair-display-600 text-[blue-600] mb-2">+10-15%</div>
                    <p className="playfair-display-400 text-black/80">Deduction Recovery</p>
                    <p className="text-sm playfair-display-400 text-black/60 mt-1">Automated processes</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-lg playfair-display-500 text-black/90">
                    <strong>Ops hours saved:</strong> Thousands per month through extraction & claims automation
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* How Vector Works */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">How Vector Works</h2>
              
              <div className="bg-white rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Pipeline Flow</h3>
                    <div className="space-y-4">
                      {[
                        "Inputs (ERP/POS/EDI)",
                        "Extract/Validate/Enrich",
                        "Plan/Accruals",
                        "Live Health Monitoring",
                        "Claims/Settlement",
                        "GL Export"
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[blue-600] text-black rounded-full flex items-center justify-center font-bold playfair-display-600 text-sm">
                            {i + 1}
                          </div>
                          <span className="playfair-display-400 text-black/80">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Key Components</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold playfair-display-600 text-[blue-600] mb-2">Ledger</h4>
                        <p className="text-sm playfair-display-400 text-black/80">Tamper-evident events with as-of reconstruction</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold playfair-display-600 text-[blue-600] mb-2">OPA Policies</h4>
                        <p className="text-sm playfair-display-400 text-black/80">Approve/deny with reasons and override trails</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold playfair-display-600 text-[blue-600] mb-2">Lineage</h4>
                        <p className="text-sm playfair-display-400 text-black/80">Complete feed → model → decision → P&L traceability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Integrations */}
        <section className="py-16">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">Integrations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Supported Systems</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "SAP", "Oracle", "NIQ", "Circana",
                      "EDI 852", "EDI 810", "EDI 812", "Salesforce",
                      "Snowflake", "BigQuery", "S3", "Azure"
                    ].map((system, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 text-center">
                        <span className="playfair-display-500 text-black/90">{system}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Integration Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[blue-600]" />
                      <span className="playfair-display-400 text-black/80">Real-time sync with error handling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[blue-600]" />
                      <span className="playfair-display-400 text-black/80">SLA monitoring and alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[blue-600]" />
                      <span className="playfair-display-400 text-black/80">Schema diff detection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[blue-600]" />
                      <span className="playfair-display-400 text-black/80">Safe replay and backfill</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[blue-600]" />
                      <span className="playfair-display-400 text-black/80">OpenLineage event tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">Security & Compliance</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Lock className="h-8 w-8" />, title: "SSO/SAML", desc: "Enterprise authentication" },
                  { icon: <Shield className="h-8 w-8" />, title: "Encryption", desc: "At rest & in transit" },
                  { icon: <Users className="h-8 w-8" />, title: "RBAC", desc: "Role-based access control" },
                  { icon: <FileText className="h-8 w-8" />, title: "SOC2/ISO", desc: "Compliance roadmap" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-[blue-600] mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold playfair-display-600 mb-2">{item.title}</h3>
                    <p className="text-sm playfair-display-400 text-black/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "How do you ensure guardrails and reversibility?",
                    a: "Every automated action is bounded by OPA policies with human-readable explanations. We provide multiple operating modes and comprehensive override trails with full audit logs."
                  },
                  {
                    q: "Can we bring our own models?",
                    a: "Yes, Vector supports BYO-model plugins in V3. For V1, we provide pre-trained models optimized for trade operations with full explainability."
                  },
                  {
                    q: "What's the typical go-live speed?",
                    a: "Our standard implementation is 8-12 weeks, with pilot launches possible in 4-6 weeks. This includes connector setup, policy configuration, and user training."
                  },
                  {
                    q: "How do you handle data latency and quality?",
                    a: "Our Integration Command Center provides real-time monitoring of data freshness, completeness, and quality. We offer SLA guarantees and automated alerts for any issues."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6">
                    <h3 className="text-lg font-semibold playfair-display-600 mb-3">{faq.q}</h3>
                    <p className="playfair-display-400 text-black/80">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[blue-600]/20 to-blue-500/20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-semibold playfair-display-600 mb-6">
                Ready to Transform Your Trade Operations?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Schedule a demo to see Vector in action and discover how we can help you achieve measurable ROI improvements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-[blue-600] text-black px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-[blue-600]/90 transition-colors duration-200"
                >
                  Schedule a Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hello@vector.ai" 
                  className="inline-flex items-center gap-2 border border-white/20 bg-white backdrop-blur px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-white/20 transition-colors duration-200"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </Container>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
