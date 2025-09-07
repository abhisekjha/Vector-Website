import React from "react";
import Head from "next/head";
import { ArrowRight, Shield, DollarSign, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Accruals() {
  return (
    <>
      <Head>
        <title>Accruals & Claims — Vector</title>
        <meta name="description" content="Live balances and settlement workflow for automated accruals and claims management." />
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
                  SETTLE & RECOVER
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Accruals & Claims
                <br />
                <span className="text-blue-600">Your Profit Margin's First Line of Defense</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                From day one, invoices and claims match against accruals automatically with the highest level of data accuracy. Human-in-the-loop focuses your team only on exceptions.
              </p>
              
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                See Accruals in Action
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
                Automated accrual and claims management with exception handling
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Live Balances</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Real-time accrual balances that automatically update as promotions progress and claims are processed.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Real-time balance updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Multi-currency support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Historical tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Settlement Workflow</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Automated settlement workflow that matches claims against accruals with intelligent exception handling.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Automated matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Exception routing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Approval workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Exception Management</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Intelligent exception handling that routes only the most critical issues to your team for review.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Smart exception detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Priority-based routing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Resolution tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Process Flow */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">How It Works</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                From accrual creation to settlement completion
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold playfair-display-600 mb-2">Create Accrual</h3>
                <p className="text-sm text-black/70 playfair-display-400">
                  Automatically create accruals based on promotion plans and business rules
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold playfair-display-600 mb-2">Track Balances</h3>
                <p className="text-sm text-black/70 playfair-display-400">
                  Monitor live balances as promotions progress and claims are submitted
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold playfair-display-600 mb-2">Match Claims</h3>
                <p className="text-sm text-black/70 playfair-display-400">
                  Automatically match claims against accruals with intelligent validation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold playfair-display-600 mb-2">Settle & Recover</h3>
                <p className="text-sm text-black/70 playfair-display-400">
                  Complete settlements and recover any discrepancies automatically
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold playfair-display-600 mb-6">
                  Protect Your Profit Margins
                </h2>
                <p className="text-lg playfair-display-400 text-black/70 mb-8">
                  Eliminate manual errors and ensure accurate accrual management with automated matching and exception handling.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Reduce manual processing by 90%",
                    "Improve accuracy by 95%",
                    "Faster settlement cycles",
                    "Better cash flow management"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-lg playfair-display-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold playfair-display-600">Exception Rate</h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">5%</div>
                  <div className="text-lg text-black/70 playfair-display-400">require human review</div>
                  <div className="text-sm text-black/60 mt-4 playfair-display-400">
                    95% of claims are automatically matched and settled
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Automate Your Accruals?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                See how Vector's Accruals & Claims can protect your profit margins and streamline settlement.
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
