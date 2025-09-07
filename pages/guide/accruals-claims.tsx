import React from "react";
import Head from "next/head";
import { 
  ArrowRight, 
  Users, 
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  Calendar,
  TrendingUp
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AccrualsClaimsGuide() {
  const accrualTypes = [
    {
      type: "Promotion Accruals",
      description: "Estimated costs for active trade promotions",
      timing: "Monthly",
      keyFactors: ["Promotion volume", "Discount rate", "Participation rate"],
      example: "BOGO promotion: 50K units × $2.00 × 50% = $50K accrual"
    },
    {
      type: "Volume Rebate Accruals",
      description: "Estimated rebates based on volume thresholds",
      timing: "Monthly",
      keyFactors: ["Volume targets", "Rebate rates", "Achievement levels"],
      example: "2% rebate on 100K+ units: 120K units × $2.00 × 2% = $4.8K accrual"
    },
    {
      type: "Co-op Advertising Accruals",
      description: "Estimated costs for cooperative advertising programs",
      timing: "Monthly",
      keyFactors: ["Ad spend", "Co-op percentage", "Approval status"],
      example: "50% co-op on $10K ad spend = $5K accrual"
    },
    {
      type: "Slotting Fee Accruals",
      description: "Estimated costs for shelf space and placement",
      timing: "Quarterly",
      keyFactors: ["Shelf space", "Duration", "Market rates"],
      example: "$500/month × 3 months = $1.5K accrual"
    }
  ];

  const monthlyCloseChecklist = [
    {
      phase: "Pre-Close (Days 1-5)",
      tasks: [
        "Review promotion performance data",
        "Validate volume and participation rates",
        "Check for new promotions launched",
        "Identify promotions ending this month"
      ]
    },
    {
      phase: "Accrual Calculation (Days 6-10)",
      tasks: [
        "Calculate promotion accruals by SKU",
        "Process volume rebate accruals",
        "Update co-op advertising accruals",
        "Review and adjust prior month estimates"
      ]
    },
    {
      phase: "Validation & Review (Days 11-15)",
      tasks: [
        "Reconcile accruals to supporting documentation",
        "Review for reasonableness and trends",
        "Get management approval for significant changes",
        "Prepare accrual journal entries"
      ]
    },
    {
      phase: "Posting & Reporting (Days 16-20)",
      tasks: [
        "Post accrual entries to GL",
        "Generate accrual reports",
        "Update liability tracking systems",
        "Communicate results to stakeholders"
      ]
    }
  ];

  const claimTypes = [
    {
      type: "812 Deductions",
      description: "Standard trade promotion deductions",
      frequency: "High",
      recoveryRate: "85%",
      keyRequirements: ["Valid promotion agreement", "Proof of performance", "Correct calculation"],
      commonIssues: ["Missing documentation", "Calculation errors", "Timing disputes"]
    },
    {
      type: "Co-op Advertising Claims",
      description: "Claims for cooperative advertising programs",
      frequency: "Medium",
      recoveryRate: "75%",
      keyRequirements: ["Ad placement proof", "Invoice documentation", "Approval records"],
      commonIssues: ["Incomplete ad proofs", "Unauthorized spend", "Rate disputes"]
    },
    {
      type: "Slotting Fee Claims",
      description: "Claims for shelf space and placement fees",
      frequency: "Low",
      recoveryRate: "90%",
      keyRequirements: ["Shelf placement proof", "Duration verification", "Rate agreement"],
      commonIssues: ["Placement disputes", "Duration disagreements", "Rate variations"]
    },
    {
      type: "Volume Rebate Claims",
      description: "Claims for volume-based rebates",
      frequency: "Medium",
      recoveryRate: "80%",
      keyRequirements: ["Volume verification", "Threshold achievement", "Rate calculation"],
      commonIssues: ["Volume disputes", "Threshold timing", "Rate application"]
    }
  ];

  const recoveryTimelines = [
    {
      stage: "Claim Receipt",
      duration: "Day 1",
      activities: ["Log claim in system", "Initial validation", "Assign to processor"],
      successFactors: ["Quick logging", "Complete initial data", "Proper assignment"]
    },
    {
      stage: "Documentation Review",
      duration: "Days 2-5",
      activities: ["Gather supporting docs", "Validate claim details", "Check for completeness"],
      successFactors: ["Complete documentation", "Accurate validation", "Clear requirements"]
    },
    {
      stage: "Investigation & Resolution",
      duration: "Days 6-15",
      activities: ["Research discrepancies", "Contact retailer", "Negotiate resolution"],
      successFactors: ["Thorough investigation", "Clear communication", "Fair resolution"]
    },
    {
      stage: "Settlement",
      duration: "Days 16-20",
      activities: ["Process payment", "Update records", "Close claim"],
      successFactors: ["Accurate processing", "Complete documentation", "Timely closure"]
    }
  ];

  return (
    <>
      <Head>
        <title>Accruals & Claims: From Posting to Recovery - Vector Guides</title>
        <meta name="description" content="Master accrual management and claims recovery. Learn how to keep your GL tight and recover faster with best practices." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50" />
          <Container className="relative py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold playfair-display-600 rounded-full">
                  FINANCE GUIDE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Accruals & Claims
                <br />
                <span className="text-purple-600">From Posting to Recovery</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Master the critical financial processes of trade promotion management. Learn how to maintain accrual integrity, 
                execute flawless monthly closes, and optimize claims recovery for maximum financial performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="h-5 w-5" />
                  Download PDF
                </button>
                <a 
                  href="/guides" 
                  className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-purple-50 transition-all duration-200"
                >
                  All Guides
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Accrual Types */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Types of Trade Accruals</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Understanding the different types of accruals in trade promotion management
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {accrualTypes.map((accrual, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <DollarSign className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold playfair-display-600">{accrual.type}</h3>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mt-2">
                          {accrual.timing}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-black/70 playfair-display-400 mb-4">{accrual.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold playfair-display-600 mb-2">Key Factors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {accrual.keyFactors.map((factor, i) => (
                          <span key={i} className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                            {factor}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold playfair-display-600 mb-2 text-purple-800">Example:</h4>
                      <p className="text-purple-700 playfair-display-400 text-sm">{accrual.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Monthly Close Checklist */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Monthly Close Checklist</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  A systematic approach to accurate and timely accrual management
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {monthlyCloseChecklist.map((phase, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold playfair-display-600">{phase.phase}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mt-2">
                          Phase {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="playfair-display-400 text-black/70">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Claim Types */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Types of Claims & Recovery</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Understanding different claim types and their recovery characteristics
                </p>
              </div>

              <div className="space-y-8">
                {claimTypes.map((claim, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                          <FileText className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold playfair-display-600">{claim.type}</h3>
                          <div className="flex gap-2">
                            <span className={`px-3 py-1 text-sm rounded-full ${
                              claim.frequency === 'High' ? 'bg-red-100 text-red-700' : 
                              claim.frequency === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-green-100 text-green-700'
                            }`}>
                              {claim.frequency} Frequency
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                              {claim.recoveryRate} Recovery
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-black/70 playfair-display-400 mb-6">{claim.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold playfair-display-600 mb-3 text-green-600">Key Requirements:</h4>
                            <ul className="space-y-2">
                              {claim.keyRequirements.map((req, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-black/70">
                                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                                  <span className="playfair-display-400">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold playfair-display-600 mb-3 text-red-600">Common Issues:</h4>
                            <ul className="space-y-2">
                              {claim.commonIssues.map((issue, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-black/70">
                                  <AlertTriangle className="h-4 w-4 text-red-600" />
                                  <span className="playfair-display-400">{issue}</span>
                                </li>
                              ))}
                            </ul>
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

        {/* Recovery Timelines */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Recovery Timeline Optimization</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Best practices for fast and effective claims recovery
                </p>
              </div>

              <div className="space-y-8">
                {recoveryTimelines.map((stage, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold playfair-display-600">{stage.stage}</h3>
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                            {stage.duration}
                          </span>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold playfair-display-600 mb-3">Key Activities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.activities.map((activity, i) => (
                              <span key={i} className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold playfair-display-600 mb-3">Success Factors:</h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.successFactors.map((factor, i) => (
                              <span key={i} className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                                {factor}
                              </span>
                            ))}
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

        {/* Next Steps */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Ready to Optimize Your Financial Processes?</h2>
              <p className="text-lg playfair-display-400 text-black/70 mb-8">
                See how Vector's AI-powered agents can automate your accrual management and claims recovery processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/accruals" 
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  See Vector Accruals
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/guide/evidence-packs" 
                  className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-purple-50 transition-all duration-200"
                >
                  Next: Evidence Packs
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
