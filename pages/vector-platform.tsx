import React from "react";
import Head from "next/head";
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

export default function VectorPlatform() {
  return (
    <>
      <Head>
        <title>Vector Platform — AI-Powered Trade Automation</title>
        <meta name="description" content="Vector Platform: The comprehensive AI-powered trade automation solution for CPG companies. Plan, optimize, and settle with real-time intelligence." />
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
                  VECTOR PLATFORM
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Trade Promotions That
                <br />
                <span className="text-blue-600">Optimize Themselves</span>
              </h1>
              
              <div className="mb-8">
                <p className="text-2xl playfair-display-500 text-black/80 mb-2">Direction. Magnitude. ROI.</p>
                <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto">
                  Vector is the next-generation Trade Promotion Management platform that plans, optimizes, monitors, and settles trade promotions with agentic automation, policy guardrails, and an audit-grade ledger.
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
                  href="#features" 
                  className="inline-flex items-center gap-2 border border-black/10 bg-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-black/5 transition-colors duration-200"
                >
                  <Play className="h-5 w-5" />
                  Watch Demo
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Features */}
        <section id="features" className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Platform Capabilities</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto">
                Vector Platform combines AI intelligence with policy-bound autonomy to deliver measurable results across your entire trade lifecycle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Planning & Funds</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Intelligent trade planning with automated fund allocation and budget optimization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    AI-driven budget allocation
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Real-time fund tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Automated approvals
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Accruals & Claims</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Automated accrual management and claims processing with audit-grade documentation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Automated accrual calculations
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Claims validation
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Audit trail generation
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Live Health</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Real-time monitoring and health checks across your entire trade ecosystem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Health dashboards
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Alert systems
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Eight Specialized Agents</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Promo Agent (optimization), Deduction Agent (settlement), Finance Agent (accrual management), Data Steward Agent (data quality), Deal Desk Agent (policy checking), Integration Agent (SLA & backfills), Contract Intelligence Agent (evidence), and Executive Insights Agent (strategic analytics).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-orange-600" />
                    Four operating modes: Assist, Recommend, Auto + Approval, Auto within Policy
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-orange-600" />
                    Each agent explains reasoning in plain English
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-orange-600" />
                    All actions logged to Vector Ledger with complete traceability
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Security & Compliance</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Enterprise-grade security with comprehensive compliance and audit capabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    SOC 2 compliance
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    Audit-grade logging
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Analytics & ROI</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Comprehensive analytics and ROI tracking to measure your success.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600" />
                    ROI dashboards
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600" />
                    Performance metrics
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600" />
                    Predictive analytics
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Transform Your Trade Operations?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Schedule a demo to see Vector Platform in action and discover how we can help you achieve measurable ROI improvements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Schedule a Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hello@vector.ai" 
                  className="inline-flex items-center gap-2 border border-black/10 bg-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-black/5 transition-colors duration-200"
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
