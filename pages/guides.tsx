import React from "react";
import Head from "next/head";
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  TrendingUp,
  Shield,
  Database,
  BarChart3,
  FileText,
  Download,
  Clock,
  Target
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function GuidesPage() {
  const guides = [
    {
      id: "trade-promotion-101",
      title: "Trade Promotion 101: From Spend to Settlement",
      description: "Understand the lifecycle, roles, and terms.",
      audience: "Newcomers (Sales, Trade Mktg, Finance)",
      value: "Glossary, lifecycle, roles, common pitfalls",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600",
      href: "/guide/trade-promotion-101",
      category: "Fundamentals"
    },
    {
      id: "scenario-roi-handbook",
      title: "Scenario & ROI Handbook",
      description: "Model price/feature/display safely for higher returns.",
      audience: "Planners",
      value: "Pricing/feature/display levers, elasticity basics, what-if patterns, ROI delta examples",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-green-100 text-green-600",
      href: "/guide/scenario-roi-handbook",
      category: "Planning"
    },
    {
      id: "accruals-claims",
      title: "Accruals & Claims: From Posting to Recovery",
      description: "Keep the GL tight and recover faster.",
      audience: "Finance",
      value: "Accrual integrity, monthly close checklist, claim types (812), recovery timelines",
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-600",
      href: "/guide/accruals-claims",
      category: "Finance"
    },
    {
      id: "evidence-packs",
      title: "Evidence Packs: The Complete Checklist",
      description: "Everything you need to win a dispute.",
      audience: "Finance/Legal",
      value: "Contracts, invoices, ASN, policy cites; win-rate drivers; downloadable checklist",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-orange-100 text-orange-600",
      href: "/guide/evidence-packs",
      category: "Legal"
    },
    {
      id: "guardrails-governance",
      title: "Guardrails & Governance for TPM",
      description: "Prevent bad promos before they start.",
      audience: "Leadership/Ops",
      value: "Margin floors, budget caps, approval matrices, override policies (with templates)",
      icon: <Shield className="h-8 w-8" />,
      color: "bg-red-100 text-red-600",
      href: "/guide/guardrails-governance",
      category: "Governance"
    },
    {
      id: "data-slas",
      title: "Data & SLAs for TPM (ERP • POS • EDI • NIQ/Circana)",
      description: "Keep feeds fresh, fix breaks fast.",
      audience: "Data Ops",
      value: "Freshness targets, backfills, lineage, schema diffs; sample SLA policy",
      icon: <Database className="h-8 w-8" />,
      color: "bg-teal-100 text-teal-600",
      href: "/guide/data-slas",
      category: "Data"
    },
    {
      id: "tpm-kpis",
      title: "KPIs That Matter in TPM",
      description: "What 'good' looks like and how to measure it.",
      audience: "Executives",
      value: "Accrual accuracy, feeds in SLA, deduction recovery rate/value, promotion ROI, automation coverage",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-indigo-100 text-indigo-600",
      href: "/guide/tpm-kpis",
      category: "Analytics"
    }
  ];

  const categories = [
    { name: "All", count: guides.length },
    { name: "Fundamentals", count: guides.filter(g => g.category === "Fundamentals").length },
    { name: "Planning", count: guides.filter(g => g.category === "Planning").length },
    { name: "Finance", count: guides.filter(g => g.category === "Finance").length },
    { name: "Legal", count: guides.filter(g => g.category === "Legal").length },
    { name: "Governance", count: guides.filter(g => g.category === "Governance").length },
    { name: "Data", count: guides.filter(g => g.category === "Data").length },
    { name: "Analytics", count: guides.filter(g => g.category === "Analytics").length }
  ];

  return (
    <>
      <Head>
        <title>TPM Guides - Vector Trade Automation Platform</title>
        <meta name="description" content="Comprehensive guides for Trade Promotion Management. Learn from basics to advanced TPM strategies with Vector's expert guides." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50" />
          <Container className="relative py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold playfair-display-600 rounded-full">
                  TPM GUIDES
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Master Trade Promotion
                <br />
                <span className="text-blue-600">Management</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Comprehensive guides covering every aspect of Trade Promotion Management. From fundamentals to advanced strategies, 
                learn how to optimize your trade spend and maximize ROI with expert insights and practical tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-50 transition-all duration-200"
                >
                  Get Expert Help
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <Container>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-semibold playfair-display-600 transition-colors duration-200 ${
                    category.name === "All"
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-black/70 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Guides Grid */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${guide.color}`}>
                      {guide.icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-2">
                        {guide.category}
                      </span>
                      <h3 className="text-xl font-bold playfair-display-600 leading-tight">
                        {guide.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-black/70 playfair-display-400 mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-black/60" />
                      <span className="text-sm font-medium text-black/80">Audience:</span>
                      <span className="text-sm text-black/70">{guide.audience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-black/60 mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-black/80">Value:</span>
                        <p className="text-sm text-black/70">{guide.value}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={guide.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold playfair-display-600 hover:bg-blue-700 transition-colors"
                    >
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <button className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Transform Your Trade Operations?
              </h2>
              <p className="text-lg playfair-display-400 text-black/70 mb-8">
                These guides are just the beginning. See how Vector's AI-powered platform can automate and optimize 
                your entire trade promotion management process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  See Vector in Action
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/platform" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-50 transition-all duration-200"
                >
                  Explore Platform
                  <ArrowRight className="h-5 w-5" />
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
