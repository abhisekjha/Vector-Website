import React from "react";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Shield, Lock, Eye, FileText, Award } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security at Vector — Enterprise-Grade Protection</title>
        <meta name="description" content="Learn about Vector's enterprise-grade security measures, compliance certifications, and data protection protocols." />
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
                  SECURITY
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Enterprise-Grade
                <br />
                <span className="text-blue-600">Security</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Your data security is our top priority. Vector implements industry-leading security measures and compliance standards to protect your sensitive trade information.
              </p>
              
              <a 
                href="#compliance" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Compliance
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>

        {/* Security Features */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Security Features</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Comprehensive security measures to protect your data and operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">End-to-End Encryption</h3>
                <p className="playfair-display-400 text-black/70">
                  All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Access Controls</h3>
                <p className="playfair-display-400 text-black/70">
                  Role-based access controls with multi-factor authentication and single sign-on support.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Audit Logging</h3>
                <p className="playfair-display-400 text-black/70">
                  Comprehensive audit trails for all system activities and data access.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Data Privacy</h3>
                <p className="playfair-display-400 text-black/70">
                  GDPR and CCPA compliant with comprehensive data privacy controls.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">SOC 2 Compliance</h3>
                <p className="playfair-display-400 text-black/70">
                  SOC 2 Type II certified with regular third-party security audits.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">24/7 Monitoring</h3>
                <p className="playfair-display-400 text-black/70">
                  Continuous security monitoring with automated threat detection and response.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Compliance & Certifications</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Vector meets the highest industry standards for security and compliance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Security Standards</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">SOC 2 Type II Certified</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">ISO 27001 Compliant</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">GDPR Compliant</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">CCPA Compliant</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Infrastructure</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">AWS Cloud Infrastructure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">99.9% Uptime SLA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">Regular Security Audits</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">Penetration Testing</span>
                    </li>
                  </ul>
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
                Questions About Security?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Our security team is available to discuss your specific requirements and answer any questions.
              </p>
              
              <a 
                href="mailto:security@vector.ai"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact Security Team
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
