import React from "react";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Users, MapPin, Clock, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers at Vector — Join Our Team</title>
        <meta name="description" content="Join Vector's mission to transform trade operations through AI. Explore career opportunities and be part of the future of trade automation." />
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
                  CAREERS
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Join Our Mission to
                <br />
                <span className="text-blue-600">Transform Trade</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Be part of the team that's revolutionizing trade operations through AI-powered automation. Help us build the future of CPG trade management.
              </p>
              
              <a 
                href="#open-positions" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Open Positions
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Why Join Vector?</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Be part of a team that's building the future of trade automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">World-Class Team</h3>
                <p className="playfair-display-400 text-black/70">
                  Work alongside experts in AI, trade finance, and enterprise software.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Impact</h3>
                <p className="playfair-display-400 text-black/70">
                  Build solutions that transform how CPG companies operate.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Flexibility</h3>
                <p className="playfair-display-400 text-black/70">
                  Remote-first culture with flexible working arrangements.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Open Positions</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Join our growing team and help shape the future of trade automation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold playfair-display-600 mb-2">Senior AI Engineer</h3>
                    <div className="flex items-center gap-4 text-sm playfair-display-400 text-black/70">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        Full-time
                      </span>
                    </div>
                  </div>
                  <a 
                    href="mailto:careers@vector.ai?subject=Senior AI Engineer Application"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold playfair-display-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold playfair-display-600 mb-2">Product Manager</h3>
                    <div className="flex items-center gap-4 text-sm playfair-display-400 text-black/70">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        Full-time
                      </span>
                    </div>
                  </div>
                  <a 
                    href="mailto:careers@vector.ai?subject=Product Manager Application"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold playfair-display-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold playfair-display-600 mb-2">Sales Engineer</h3>
                    <div className="flex items-center gap-4 text-sm playfair-display-400 text-black/70">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        Full-time
                      </span>
                    </div>
                  </div>
                  <a 
                    href="mailto:careers@vector.ai?subject=Sales Engineer Application"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold playfair-display-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
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
                Don't See Your Role?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              
              <a 
                href="mailto:careers@vector.ai?subject=General Application"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Your Resume
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
