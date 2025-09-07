import React from "react";
import Head from "next/head";
import { ArrowRight, Star, TrendingUp, Users, Award, Quote } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Customers() {
  return (
    <>
      <Head>
        <title>Customers — Vector</title>
        <meta name="description" content="Success stories, case studies, and testimonials from Vector's customers using AI-powered trade automation." />
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
                  CUSTOMERS
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Success Stories
                <br />
                <span className="text-blue-600">From Our Customers</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Discover how leading companies are transforming their trade operations with Vector's AI-powered automation platform.
              </p>
            </div>
          </Container>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Proven Results</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Real impact from real customers
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">31%</div>
                <div className="text-lg font-semibold playfair-display-600 mb-2">Cost Reduction</div>
                <div className="text-sm text-black/70 playfair-display-400">Average savings per promotion</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-lg font-semibold playfair-display-600 mb-2">Accuracy Improvement</div>
                <div className="text-sm text-black/70 playfair-display-400">In data processing</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">80%</div>
                <div className="text-lg font-semibold playfair-display-600 mb-2">Time Savings</div>
                <div className="text-sm text-black/70 playfair-display-400">In manual processes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">$10B+</div>
                <div className="text-lg font-semibold playfair-display-600 mb-2">Trade Value</div>
                <div className="text-sm text-black/70 playfair-display-400">Processed and counting</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">What Our Customers Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-black/70 mb-6 playfair-display-400">
                  "Vector has transformed our trade operations. We've reduced manual work by 80% and improved accuracy significantly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold playfair-display-600">John Doe</div>
                    <div className="text-sm text-black/60">VP of Trade, Global CPG</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-black/70 mb-6 playfair-display-400">
                  "The AI-powered automation has been a game-changer. Our team can now focus on strategic initiatives instead of data entry."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold playfair-display-600">Sarah Miller</div>
                    <div className="text-sm text-black/60">Trade Manager, Retail Chain</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-purple-600 mb-4" />
                <p className="text-black/70 mb-6 playfair-display-400">
                  "Vector's platform has given us unprecedented visibility into our trade operations. The ROI has been exceptional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold playfair-display-600">Mike Johnson</div>
                    <div className="text-sm text-black/60">CFO, Manufacturing Co.</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Case Studies</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                In-depth stories of customer success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">CASE STUDY</span>
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">
                  Global CPG Company Reduces Trade Costs by 35%
                </h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Learn how a leading consumer goods company automated their trade promotion management and achieved significant cost savings.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-black/60">
                    <div className="font-semibold">Industry:</div>
                    <div>Consumer Goods</div>
                  </div>
                  <a 
                    href="/customers/case-studies/cpg-company" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500"
                  >
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">SUCCESS STORY</span>
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">
                  Retail Chain Improves Accuracy by 95%
                </h3>
                <p className="text-black/70 mb-6 playfair-display-400">
                  Discover how a major retail chain eliminated manual errors and improved data accuracy across their trade operations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-black/60">
                    <div className="font-semibold">Industry:</div>
                    <div>Retail</div>
                  </div>
                  <a 
                    href="/customers/case-studies/retail-chain" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500"
                  >
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Customer Logos */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Trusted by Industry Leaders</h2>
              <p className="text-lg playfair-display-400 text-black/70">
                Companies across industries rely on Vector for their trade automation needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                "Global CPG Company",
                "Major Retail Chain", 
                "Manufacturing Leader",
                "Food & Beverage Corp"
              ].map((company) => (
                <div key={company} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-sm font-semibold playfair-display-600 text-black/70">{company}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                See how Vector can transform your trade operations and deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Schedule a Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/customers/case-studies" 
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  View All Case Studies
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
