import React from "react";
import Head from "next/head";
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  DollarSign,
  Target,
  FileText,
  Download
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TradePromotion101Guide() {
  const lifecycleSteps = [
    {
      step: "1",
      title: "Planning & Budgeting",
      description: "Set trade budgets, allocate funds across channels, and establish guardrails",
      duration: "Q4 (prior year)",
      keyActivities: ["Budget allocation", "Channel planning", "Guardrail setup"]
    },
    {
      step: "2", 
      title: "Promotion Design",
      description: "Create promotion mechanics, pricing, and terms with retailers",
      duration: "Q1-Q4",
      keyActivities: ["Mechanic design", "Pricing strategy", "Retailer negotiation"]
    },
    {
      step: "3",
      title: "Execution & Monitoring",
      description: "Launch promotions and monitor performance in real-time",
      duration: "Ongoing",
      keyActivities: ["Promotion launch", "Performance tracking", "Drift detection"]
    },
    {
      step: "4",
      title: "Accrual Management",
      description: "Post accruals, reconcile estimates vs. actuals, and manage liabilities",
      duration: "Monthly",
      keyActivities: ["Accrual posting", "Reconciliation", "Liability management"]
    },
    {
      step: "5",
      title: "Claims & Settlement",
      description: "Process retailer claims, validate deductions, and settle accounts",
      duration: "Ongoing",
      keyActivities: ["Claim processing", "Deduction validation", "Settlement"]
    }
  ];

  const roles = [
    {
      title: "Trade Marketing Manager",
      responsibilities: ["Promotion design", "Retailer relationships", "Performance analysis"],
      keyMetrics: ["Promotion ROI", "Retailer satisfaction", "Market share"]
    },
    {
      title: "Finance Manager",
      responsibilities: ["Budget management", "Accrual oversight", "Financial reporting"],
      keyMetrics: ["Budget variance", "Accrual accuracy", "Cash flow impact"]
    },
    {
      title: "Sales Manager",
      responsibilities: ["Retailer negotiations", "Promotion execution", "Relationship management"],
      keyMetrics: ["Sales volume", "Retailer compliance", "Revenue growth"]
    },
    {
      title: "Data Analyst",
      responsibilities: ["Performance tracking", "ROI analysis", "Insight generation"],
      keyMetrics: ["Data accuracy", "Report timeliness", "Insight quality"]
    }
  ];

  const commonPitfalls = [
    {
      pitfall: "Poor Budget Allocation",
      impact: "Overspend in some channels, underspend in others",
      solution: "Use historical data and predictive modeling for allocation"
    },
    {
      pitfall: "Inaccurate Accruals",
      impact: "Financial misstatements and cash flow issues",
      solution: "Implement real-time tracking and automated reconciliation"
    },
    {
      pitfall: "Weak Evidence Collection",
      impact: "High deduction rates and lost recoveries",
      solution: "Automate evidence pack creation and validation"
    },
    {
      pitfall: "Lack of Real-time Visibility",
      impact: "Late detection of promotion drift and poor performance",
      solution: "Deploy real-time monitoring and alerting systems"
    },
    {
      pitfall: "Manual Processes",
      impact: "Errors, delays, and high operational costs",
      solution: "Automate routine tasks and implement AI-powered decision support"
    }
  ];

  const glossary = [
    { term: "Accrual", definition: "Estimated liability recorded in the general ledger for trade promotions" },
    { term: "Deduction", definition: "Amount claimed by retailer for trade promotion participation" },
    { term: "Evidence Pack", definition: "Documentation bundle supporting a trade promotion claim" },
    { term: "Promotion Drift", definition: "Deviation from planned promotion parameters during execution" },
    { term: "Trade Spend", definition: "Total investment in trade promotions and retailer incentives" },
    { term: "ROI", definition: "Return on investment - revenue generated per dollar of trade spend" },
    { term: "Settlement", definition: "Final reconciliation and payment of trade promotion claims" },
    { term: "Guardrails", definition: "Business rules and limits that prevent risky promotion decisions" }
  ];

  return (
    <>
      <Head>
        <title>Trade Promotion 101: From Spend to Settlement - Vector Guides</title>
        <meta name="description" content="Complete guide to Trade Promotion Management. Learn the lifecycle, roles, terms, and common pitfalls in TPM." />
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
                  FUNDAMENTALS GUIDE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Trade Promotion 101
                <br />
                <span className="text-blue-600">From Spend to Settlement</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Master the fundamentals of Trade Promotion Management. This comprehensive guide covers the complete lifecycle, 
                key roles, essential terminology, and common pitfalls to avoid in TPM.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="h-5 w-5" />
                  Download PDF
                </button>
                <a 
                  href="/guides" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-50 transition-all duration-200"
                >
                  All Guides
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Table of Contents */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-8 text-center">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Trade Promotion Lifecycle",
                  "Key Roles & Responsibilities", 
                  "Essential Terminology",
                  "Common Pitfalls & Solutions",
                  "Best Practices Checklist",
                  "Next Steps & Resources"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-black/10">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium playfair-display-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Trade Promotion Lifecycle */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Trade Promotion Lifecycle</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Understanding the complete journey from planning to settlement
                </p>
              </div>

              <div className="space-y-8">
                {lifecycleSteps.map((step, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold playfair-display-600">{step.title}</h3>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-black/70 playfair-display-400 mb-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.keyActivities.map((activity, i) => (
                            <span key={i} className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Key Roles & Responsibilities */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Key Roles & Responsibilities</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Understanding who does what in the TPM process
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {roles.map((role, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold playfair-display-600">{role.title}</h3>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold playfair-display-600 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-center gap-2 text-black/70">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span className="playfair-display-400">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold playfair-display-600 mb-3">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.keyMetrics.map((metric, i) => (
                          <span key={i} className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Essential Terminology */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Essential Terminology</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Key terms every TPM professional should know
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {glossary.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-black/10 p-6 shadow-sm">
                    <h3 className="font-bold playfair-display-600 mb-2 text-blue-600">{item.term}</h3>
                    <p className="text-black/70 playfair-display-400">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Common Pitfalls & Solutions */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Common Pitfalls & Solutions</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Learn from common mistakes and how to avoid them
                </p>
              </div>

              <div className="space-y-6">
                {commonPitfalls.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                          <AlertTriangle className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold playfair-display-600 mb-3">{item.pitfall}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold playfair-display-600 mb-2 text-red-600">Impact:</h4>
                            <p className="text-black/70 playfair-display-400">{item.impact}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold playfair-display-600 mb-2 text-green-600">Solution:</h4>
                            <p className="text-black/70 playfair-display-400">{item.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Best Practices Checklist */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Best Practices Checklist</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Essential practices for successful TPM
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold playfair-display-600 mb-4">Planning Phase</h3>
                    <ul className="space-y-3">
                      {[
                        "Set clear budget allocation by channel",
                        "Establish guardrails and approval limits",
                        "Define success metrics upfront",
                        "Create promotion calendar",
                        "Align with sales and marketing teams"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="playfair-display-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold playfair-display-600 mb-4">Execution Phase</h3>
                    <ul className="space-y-3">
                      {[
                        "Monitor performance in real-time",
                        "Track accruals accurately",
                        "Collect evidence systematically",
                        "Validate deductions promptly",
                        "Maintain audit trails"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="playfair-display-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Ready to Take the Next Step?</h2>
              <p className="text-lg playfair-display-400 text-black/70 mb-8">
                Now that you understand the fundamentals, explore our advanced guides or see how Vector can automate your TPM processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/guide/scenario-roi-handbook" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Next: Scenario & ROI Handbook
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-50 transition-all duration-200"
                >
                  See Vector in Action
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
