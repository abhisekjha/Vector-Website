import React from "react";
import Head from "next/head";
import { ArrowRight, BookOpen, Shield, Search, CheckCircle2, FileText } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Ledger() {
  return (
    <>
      <Head>
        <title>Vector Ledger — Vector</title>
        <meta name="description" content="Audit-grade event sourcing with comprehensive transaction tracking and compliance reporting." />
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
                  GOVERN & INTEGRATE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Vector Ledger
                <br />
                <span className="text-blue-600">Audit-Grade Event Sourcing</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Complete transaction history with immutable audit trails, ensuring compliance and providing full transparency into every business event.
              </p>
              
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                See Ledger in Action
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
                Comprehensive event sourcing and audit capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Event Sourcing</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Every business event is captured as an immutable record, providing complete transaction history.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Immutable event records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Complete transaction history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Event replay capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Audit Compliance</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Built-in compliance features that meet the highest audit standards and regulatory requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>SOX compliance ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Regulatory reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Tamper-proof records</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Advanced Analytics</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Powerful analytics and reporting capabilities built on top of your complete transaction history.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Real-time analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Data lineage tracking</span>
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
                  Complete Transparency & Compliance
                </h2>
                <p className="text-lg playfair-display-400 text-black/70 mb-8">
                  Every transaction, every change, every business event is captured and preserved in an immutable, auditable format.
                </p>
                
                <div className="space-y-4">
                  {[
                    "100% transaction visibility",
                    "Immutable audit trails",
                    "Regulatory compliance ready",
                    "Real-time reporting capabilities"
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
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold playfair-display-600">Audit Readiness</h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-lg text-black/70 playfair-display-400">audit ready</div>
                  <div className="text-sm text-black/60 mt-4 playfair-display-400">
                    Complete transaction history with immutable records
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Use Cases</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                How organizations use Vector Ledger
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Financial Auditing</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Complete transaction history for financial audits, compliance reporting, and regulatory submissions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>SOX compliance reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>External audit support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Regulatory submissions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Business Intelligence</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Rich analytics and reporting capabilities built on complete transaction history for better decision making.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Trend analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Performance metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Custom dashboards</span>
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
                Ready for Audit-Grade Transparency?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                See how Vector Ledger can provide complete transaction visibility and compliance for your organization.
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
