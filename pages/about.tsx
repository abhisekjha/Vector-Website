import React from "react";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Shield, Target, Heart, Users, Building2, Award } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Vector — AI-Powered Trade Automation</title>
        <meta name="description" content="Learn about Vector's mission to transform trade operations through AI-powered automation." />
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
                  ABOUT VECTOR
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Transforming Trade Operations
                <br />
                <span className="text-blue-600">Through AI</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Vector is the leading AI-powered trade automation platform, helping CPG companies transform their operations from manual, error-prone processes to intelligent, automated systems.
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

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Our Mission</h2>
              <p className="text-xl playfair-display-400 text-black/70 mb-12">
                To revolutionize trade operations through intelligent automation, enabling CPG companies to achieve unprecedented efficiency and ROI.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-4">The Problem</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-sm font-bold mt-1">•</span>
                      <span className="playfair-display-400 text-black/70">Manual processes are error-prone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-sm font-bold mt-1">•</span>
                      <span className="playfair-display-400 text-black/70">Lack of real-time visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-sm font-bold mt-1">•</span>
                      <span className="playfair-display-400 text-black/70">Compliance challenges</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Our Solution</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">AI-powered automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">Real-time monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="playfair-display-400 text-black/70">Audit-grade compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-black/10 p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Innovation</h3>
                <p className="playfair-display-400 text-black/70">
                  We continuously push the boundaries of what's possible in trade automation.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Trust</h3>
                <p className="playfair-display-400 text-black/70">
                  We build secure, reliable solutions that our customers can depend on.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Customer Success</h3>
                <p className="playfair-display-400 text-black/70">
                  Our success is measured by our customers' success.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Discover how Vector can transform your trade operations.
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