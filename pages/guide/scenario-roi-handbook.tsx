import React from "react";
import Head from "next/head";
import { 
  ArrowRight, 
  TrendingUp, 
  Calculator,
  Target,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Download,
  Lightbulb
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ScenarioROIHandbook() {
  const pricingLevers = [
    {
      lever: "Base Price Changes",
      impact: "High",
      risk: "Medium",
      description: "Direct price adjustments to products",
      example: "10% price increase → 15% margin improvement",
      considerations: ["Competitive response", "Volume impact", "Customer acceptance"]
    },
    {
      lever: "Feature Modifications",
      impact: "Medium",
      risk: "Low",
      description: "Changes to product features or packaging",
      example: "Larger pack size → 8% unit margin increase",
      considerations: ["Manufacturing costs", "Consumer preference", "Shelf space"]
    },
    {
      lever: "Display Positioning",
      impact: "Medium",
      risk: "Low",
      description: "Changes to in-store display and placement",
      example: "Endcap placement → 25% volume lift",
      considerations: ["Retailer cooperation", "Competition", "Seasonality"]
    },
    {
      lever: "Promotion Mechanics",
      impact: "High",
      risk: "High",
      description: "Changes to discount structure and terms",
      example: "BOGO → 40% volume increase, 12% margin impact",
      considerations: ["Retailer margin", "Consumer behavior", "Competitive response"]
    }
  ];

  const elasticityBasics = [
    {
      concept: "Price Elasticity",
      definition: "How demand changes with price changes",
      formula: "Elasticity = % Change in Quantity / % Change in Price",
      example: "If 10% price increase causes 15% volume decrease, elasticity = -1.5",
      application: "Use to predict volume impact of price changes"
    },
    {
      concept: "Cross-Price Elasticity",
      definition: "How demand for one product changes with another's price",
      formula: "Cross-Elasticity = % Change in Product A Quantity / % Change in Product B Price",
      example: "If competitor's 10% price decrease causes 5% volume loss, cross-elasticity = 0.5",
      application: "Understand competitive dynamics and substitution effects"
    },
    {
      concept: "Promotion Elasticity",
      definition: "How demand responds to promotional activities",
      formula: "Promotion Elasticity = % Change in Volume / % Change in Promotion Intensity",
      example: "If 20% discount causes 50% volume increase, promotion elasticity = 2.5",
      application: "Optimize promotion depth and frequency"
    }
  ];

  const whatIfPatterns = [
    {
      scenario: "Price Increase Scenario",
      description: "What happens if we increase prices by 5%?",
      inputs: ["Current price", "Current volume", "Price elasticity"],
      outputs: ["New volume", "Revenue impact", "Margin impact"],
      decision: "Proceed if margin gain > volume loss"
    },
    {
      scenario: "Promotion Depth Scenario",
      description: "What's the optimal discount level?",
      inputs: ["Base volume", "Promotion elasticity", "Margin structure"],
      outputs: ["Volume lift", "Margin impact", "Net ROI"],
      decision: "Choose discount with highest net ROI"
    },
    {
      scenario: "Feature Change Scenario",
      description: "Should we change pack size or features?",
      inputs: ["Feature cost", "Consumer preference", "Competitive position"],
      outputs: ["Volume impact", "Cost impact", "Market share change"],
      decision: "Proceed if net benefit > implementation cost"
    },
    {
      scenario: "Competitive Response Scenario",
      description: "How will competitors react to our changes?",
      inputs: ["Competitive intelligence", "Market dynamics", "Historical responses"],
      outputs: ["Likely competitive actions", "Market share impact", "Price war risk"],
      decision: "Factor competitive response into strategy"
    }
  ];

  const roiExamples = [
    {
      scenario: "Price Optimization",
      baseline: "Current: $2.00 price, 100K units, 30% margin",
      change: "Increase price to $2.10 (5% increase)",
      impact: "Volume drops to 92K units (-8%), margin increases to 35%",
      roi: "Net revenue increase: $4,400 (+2.2% ROI)",
      keyInsight: "Price elasticity of -1.6 makes this profitable"
    },
    {
      scenario: "Promotion Optimization",
      baseline: "Current: 10% discount, 120K units, 20% margin",
      change: "Increase discount to 15%",
      impact: "Volume increases to 150K units (+25%), margin drops to 15%",
      roi: "Net revenue increase: $7,500 (+6.25% ROI)",
      keyInsight: "Promotion elasticity of 2.5 justifies deeper discount"
    },
    {
      scenario: "Feature Enhancement",
      baseline: "Current: Standard pack, 100K units, 30% margin",
      change: "Add premium feature (+$0.20 cost)",
      impact: "Volume increases to 110K units (+10%), margin drops to 28%",
      roi: "Net revenue increase: $2,200 (+2.0% ROI)",
      keyInsight: "Consumer willingness to pay covers feature cost"
    }
  ];

  return (
    <>
      <Head>
        <title>Scenario & ROI Handbook - Vector Guides</title>
        <meta name="description" content="Master scenario planning and ROI optimization for trade promotions. Learn pricing levers, elasticity, and what-if analysis." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50" />
          <Container className="relative py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-semibold playfair-display-600 rounded-full">
                  PLANNING GUIDE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Scenario & ROI
                <br />
                <span className="text-green-600">Handbook</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Master the art of scenario planning and ROI optimization. Learn how to model price, feature, and display changes 
                safely to maximize returns while minimizing risk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="h-5 w-5" />
                  Download PDF
                </button>
                <a 
                  href="/guides" 
                  className="inline-flex items-center gap-2 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-green-50 transition-all duration-200"
                >
                  All Guides
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Levers */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Pricing & Feature Levers</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Understanding the key variables you can adjust to optimize ROI
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {pricingLevers.map((lever, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold playfair-display-600">{lever.lever}</h3>
                        <div className="flex gap-2 mt-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            lever.impact === 'High' ? 'bg-red-100 text-red-700' : 
                            lever.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            Impact: {lever.impact}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            lever.risk === 'High' ? 'bg-red-100 text-red-700' : 
                            lever.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            Risk: {lever.risk}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-black/70 playfair-display-400 mb-4">{lever.description}</p>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold playfair-display-600 mb-2 text-green-800">Example:</h4>
                      <p className="text-green-700 playfair-display-400">{lever.example}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold playfair-display-600 mb-2">Key Considerations:</h4>
                      <ul className="space-y-1">
                        {lever.considerations.map((consideration, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-black/70">
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                            <span className="playfair-display-400">{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Elasticity Basics */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">Elasticity Fundamentals</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Understanding how demand responds to changes in price and promotion
                </p>
              </div>

              <div className="space-y-8">
                {elasticityBasics.map((concept, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Calculator className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold playfair-display-600 mb-3">{concept.concept}</h3>
                        <p className="text-black/70 playfair-display-400 mb-4">{concept.definition}</p>
                        
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold playfair-display-600 mb-2 text-blue-800">Formula:</h4>
                          <code className="text-blue-700 font-mono text-sm">{concept.formula}</code>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold playfair-display-600 mb-2">Example:</h4>
                            <p className="text-black/70 playfair-display-400 text-sm">{concept.example}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold playfair-display-600 mb-2">Application:</h4>
                            <p className="text-black/70 playfair-display-400 text-sm">{concept.application}</p>
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

        {/* What-If Patterns */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">What-If Analysis Patterns</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Common scenario analysis frameworks for trade promotion decisions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {whatIfPatterns.map((pattern, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold playfair-display-600">{pattern.scenario}</h3>
                    </div>
                    
                    <p className="text-black/70 playfair-display-400 mb-6">{pattern.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-2 text-blue-600">Inputs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pattern.inputs.map((input, i) => (
                            <span key={i} className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                              {input}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-2 text-green-600">Outputs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pattern.outputs.map((output, i) => (
                            <span key={i} className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                              {output}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold playfair-display-600 mb-2 text-purple-600">Decision Rule:</h4>
                        <p className="text-black/70 playfair-display-400 text-sm">{pattern.decision}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ROI Examples */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold playfair-display-600 mb-4">ROI Calculation Examples</h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  Real-world examples of scenario analysis and ROI optimization
                </p>
              </div>

              <div className="space-y-8">
                {roiExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold playfair-display-600">{example.scenario}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold playfair-display-600 mb-2 text-gray-600">Baseline:</h4>
                          <p className="text-black/70 playfair-display-400 text-sm">{example.baseline}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold playfair-display-600 mb-2 text-blue-600">Change:</h4>
                          <p className="text-black/70 playfair-display-400 text-sm">{example.change}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold playfair-display-600 mb-2 text-green-600">Impact:</h4>
                          <p className="text-black/70 playfair-display-400 text-sm">{example.impact}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold playfair-display-600 mb-2 text-green-800">ROI Result:</h4>
                          <p className="text-green-700 playfair-display-400 font-semibold">{example.roi}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold playfair-display-600 mb-2 text-blue-800">Key Insight:</h4>
                          <p className="text-blue-700 playfair-display-400 text-sm">{example.keyInsight}</p>
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
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Ready to Optimize Your Scenarios?</h2>
              <p className="text-lg playfair-display-400 text-black/70 mb-8">
                See how Vector's Scenario Studio can automate your what-if analysis and help you find the optimal promotion parameters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/scenario-studio" 
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Try Scenario Studio
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/guide/accruals-claims" 
                  className="inline-flex items-center gap-2 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-green-50 transition-all duration-200"
                >
                  Next: Accruals & Claims
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
