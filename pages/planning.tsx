import React from "react";
import Head from "next/head";
import { ArrowRight, BarChart3, Calendar, DollarSign, Target, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Planning() {
  return (
    <>
      <Head>
        <title>Planning & Funds — Vector</title>
        <meta name="description" content="AI-powered budget allocation and accrual schedules for intelligent trade promotion planning." />
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
                  PLAN & EXECUTE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Planning & Funds
                <br />
                <span className="text-blue-600">Intelligent Budget Allocation</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Optimize your trade promotion budget allocation with AI-powered insights and automated accrual schedules for maximum ROI.
              </p>
              
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                See Planning in Action
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Key Features</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Everything you need for intelligent trade promotion planning
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Budget Allocation</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  AI-powered budget allocation across channels, products, and time periods for optimal ROI.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Predictive budget optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Multi-channel allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Real-time budget tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Accrual Schedules</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Automated accrual schedules that adapt to your business rules and promotion timing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Automated schedule generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Custom business rules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Exception handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Performance Tracking</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Real-time performance tracking and optimization recommendations for ongoing promotions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Real-time performance metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Optimization recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>ROI analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold playfair-display-600 mb-6">
                  Transform Your Planning Process
                </h2>
                <p className="text-lg playfair-display-400 text-black/70 mb-8">
                  Move from manual, error-prone planning to intelligent, automated budget allocation that maximizes your trade promotion ROI.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Reduce planning time by 70%",
                    "Improve budget accuracy by 95%",
                    "Increase promotion ROI by 25%",
                    "Eliminate manual accrual errors"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-lg playfair-display-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-center mb-6">
                  <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold playfair-display-600">Average Savings</h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$31</div>
                  <div className="text-lg text-black/70 playfair-display-400">per promotion</div>
                  <div className="text-sm text-black/60 mt-4 playfair-display-400">
                    Through optimized budget allocation and automated accrual management
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Optimize Your Planning?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                See how Vector's Planning & Funds can transform your trade promotion planning process.
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
