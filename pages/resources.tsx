import React from "react";
import Head from "next/head";
import { ArrowRight, BookOpen, Users, FileText } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources — Vector</title>
        <meta name="description" content="Documentation, guides, and support resources for Vector's AI-powered trade automation platform." />
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
                  RESOURCES
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Everything You Need to
                <br />
                <span className="text-blue-600">Succeed with Vector</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Comprehensive documentation, guides, and support resources to help you maximize the value of Vector's AI-powered trade automation platform.
              </p>
            </div>
          </Container>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Learn & Develop */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Learn & Develop</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Comprehensive guides and documentation to help you get started and build with Vector.
                </p>
                <div className="space-y-3">
                  <a href="/survival-guide" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 playfair-display-500">
                    <span>📖</span>
                    <span>Survival Guide</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/docs" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 playfair-display-500">
                    <span>📚</span>
                    <span>Documentation</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/developers" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 playfair-display-500">
                    <span>🛠️</span>
                    <span>Developer Hub</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/api" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 playfair-display-500">
                    <span>🔌</span>
                    <span>API Reference</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                </div>
              </div>

              {/* Support & Community */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Support & Community</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Get help from our team and connect with other Vector users.
                </p>
                <div className="space-y-3">
                  <a href="/help" className="flex items-center gap-3 text-green-600 hover:text-green-700 playfair-display-500">
                    <span>❓</span>
                    <span>Help Center</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/community" className="flex items-center gap-3 text-green-600 hover:text-green-700 playfair-display-500">
                    <span>👥</span>
                    <span>Community</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/support" className="flex items-center gap-3 text-green-600 hover:text-green-700 playfair-display-500">
                    <span>🎧</span>
                    <span>Support</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                </div>
              </div>

              {/* Insights & Updates */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Insights & Updates</h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Stay updated with the latest insights and product updates.
                </p>
                <div className="space-y-3">
                  <a href="/blog" className="flex items-center gap-3 text-purple-600 hover:text-purple-700 playfair-display-500">
                    <span>📝</span>
                    <span>Blog</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/webinars" className="flex items-center gap-3 text-purple-600 hover:text-purple-700 playfair-display-500">
                    <span>🎥</span>
                    <span>Webinars</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/newsletter" className="flex items-center gap-3 text-purple-600 hover:text-purple-700 playfair-display-500">
                    <span>📧</span>
                    <span>Newsletter</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </a>
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
                Need Help Getting Started?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Our team is here to help you succeed with Vector. Get personalized support and guidance.
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