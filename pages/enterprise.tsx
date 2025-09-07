import React from "react";
import Head from "next/head";
import { ArrowRight, Shield, Building2, Users, Award, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Enterprise() {
  return (
    <>
      <Head>
        <title>Enterprise — Vector</title>
        <meta name="description" content="Enterprise-grade solutions and support for large organizations using Vector's AI-powered trade automation platform." />
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
                  ENTERPRISE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Enterprise-Grade
                <br />
                <span className="text-blue-600">Trade Automation</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Tailored solutions, dedicated support, and enterprise-grade security for large organizations transforming their trade operations.
              </p>
              
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact Enterprise Sales
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Enterprise Solutions</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Comprehensive solutions designed for enterprise-scale operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Custom Deployments</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  On-premise and hybrid deployment options tailored to your infrastructure requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>On-premise deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Hybrid cloud solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Security & Compliance</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Enterprise-grade security with SOC2, ISO27001, and comprehensive compliance frameworks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>SOC2 Type II certified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>ISO27001 compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Advanced data governance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Dedicated Support</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  24/7 dedicated support with SLA guarantees and professional services.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>SLA guarantees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Professional services</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Industry Solutions</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Vertical-specific implementations for your industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Consumer Goods", icon: "🛒", description: "CPG trade promotion management" },
                { name: "Retail", icon: "🏪", description: "Retail trade automation" },
                { name: "Manufacturing", icon: "🏭", description: "Manufacturing trade operations" },
                { name: "Food & Beverage", icon: "🍔", description: "F&B trade management" }
              ].map((industry) => (
                <div key={industry.name} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold playfair-display-600 mb-2">{industry.name}</h3>
                  <p className="text-sm text-black/70 playfair-display-400">{industry.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Enterprise Features</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Security & Governance</h3>
                <div className="space-y-4">
                  {[
                    "Advanced role-based access control",
                    "Audit-grade event sourcing",
                    "Data encryption at rest and in transit",
                    "Comprehensive audit trails",
                    "Policy enforcement engine",
                    "Compliance reporting"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Support & Services</h3>
                <div className="space-y-4">
                  {[
                    "Dedicated customer success manager",
                    "24/7 priority support",
                    "Professional implementation services",
                    "Custom training programs",
                    "SLA guarantees",
                    "Regular health checks"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400">{feature}</span>
                    </div>
                  ))}
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Let's discuss how Vector can meet your enterprise requirements and scale with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Contact Enterprise Sales
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/enterprise/security" 
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  View Security Details
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
