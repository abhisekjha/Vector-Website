import React from "react";
import Head from "next/head";
import { ArrowRight, Calculator, Target, TrendingUp, CheckCircle2, AlertTriangle, Play, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ScenarioStudio() {
  return (
    <>
      <Head>
        <title>Scenario Studio — Vector</title>
        <meta name="description" content="Constraint optimization for trade planning with AI-powered scenario analysis and ROI simulation." />
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
                  SCENARIO STUDIO
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Scenario Studio
                <br />
                <span className="text-blue-600">Constraint Optimization</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                AI-powered constraint optimizer that simulates what-if scenarios, calculates ROI deltas, and finds the optimal promotion parameters within policy guardrails.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Try Scenario Studio
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/platform" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-50 transition-all duration-200"
                >
                  View Platform
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Intelligent Scenario Analysis</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto">
                Vector's Scenario Studio uses constraint optimization to find the best promotion parameters while respecting all business rules and policy guardrails.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">What-If Analysis</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Simulate scenarios like "−1% price + 1wk display" and see the impact on ROI, margin, and other key metrics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Real-time ROI calculations
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Multi-variable optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Confidence scoring
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Constraint Optimization</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Find the optimal promotion parameters that maximize ROI while respecting margin floors, budget caps, and approval thresholds.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Policy-aware optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Cross-banner mix constraints
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Approval routing logic
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">ROI Simulation</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Calculate expected ROI deltas with confidence intervals and explain the drivers behind each recommendation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    ΔROI calculations
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Driver attribution
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Risk assessment
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Workflow Example */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Example: Fix Drift on Live Promotion</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto">
                See how Scenario Studio helps the Promo Agent optimize a live promotion that's experiencing drift.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">PR-4JUL Promotion Drift</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-800">Amber Status</span>
                      </div>
                      <p className="text-sm text-red-700">Distribution -3%, Competitor -5%</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Scenario Analysis</span>
                      </div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• +1wk display: ΔROI +2.3%</li>
                        <li>• -1% price: ΔROI +1.8% (blocked by margin floor)</li>
                        <li>• Both: ΔROI +4.1% (recommended)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Policy Check</span>
                      </div>
                      <p className="text-sm text-green-700">All scenarios pass margin floor and budget cap constraints</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Scenario Comparison</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Current Plan</span>
                        <span className="text-gray-500">Baseline</span>
                      </div>
                      <div className="text-sm text-gray-600">-10% price, 2wk display</div>
                    </div>
                    
                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-blue-800">Option A: +1wk display</span>
                        <span className="text-blue-600 font-semibold">+2.3% ROI</span>
                      </div>
                      <div className="text-sm text-blue-700">-10% price, 3wk display</div>
                    </div>
                    
                    <div className="border border-red-200 rounded-xl p-4 bg-red-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-red-800">Option B: -1% price</span>
                        <span className="text-red-600 font-semibold">Blocked</span>
                      </div>
                      <div className="text-sm text-red-700">-11% price, 2wk display (margin floor violation)</div>
                    </div>
                    
                    <div className="border border-green-200 rounded-xl p-4 bg-green-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-green-800">Option C: Both (Recommended)</span>
                        <span className="text-green-600 font-semibold">+4.1% ROI</span>
                      </div>
                      <div className="text-sm text-green-700">-10% price, 3wk display</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800 transition-all duration-200">
                      <Play className="h-5 w-5" />
                      Apply Recommended Scenario
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Ready to Optimize Your Promotions?</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                See how Scenario Studio can help you find the optimal promotion parameters and maximize ROI while staying within policy constraints.
              </p>
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
