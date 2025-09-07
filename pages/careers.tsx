import React from "react";
import Head from "next/head";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Vector</title>
        <meta name="description" content="Join our mission to revolutionize trade operations through AI-powered automation. Explore career opportunities at Vector." />
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
                <span className="text-blue-600">Revolutionize Trade</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Be part of the team that's transforming how companies manage trade operations through AI-powered automation. Help us build the future of intelligent business.
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

        {/* Why Join Vector */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Why Join Vector?</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Be part of something bigger than yourself
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Cutting-Edge Technology</h3>
                <p className="text-black/70 playfair-display-400">
                  Work with the latest AI and machine learning technologies to solve real-world business problems.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Mission-Driven Culture</h3>
                <p className="text-black/70 playfair-display-400">
                  Join a team that's passionate about transforming industries and making a real impact on businesses worldwide.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Amazing Team</h3>
                <p className="text-black/70 playfair-display-400">
                  Work alongside talented, passionate people who are experts in their fields and committed to excellence.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Benefits & Perks</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Health & Wellness</h3>
                <div className="space-y-4">
                  {[
                    "Comprehensive health, dental, and vision insurance",
                    "Mental health support and counseling",
                    "Flexible PTO and sick leave",
                    "Wellness stipend for fitness and health",
                    "Parental leave and family support"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="playfair-display-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Professional Growth</h3>
                <div className="space-y-4">
                  {[
                    "Learning and development budget",
                    "Conference and training opportunities",
                    "Mentorship programs",
                    "Career advancement paths",
                    "Stock options and equity participation"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="playfair-display-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Open Positions</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Find your next opportunity
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Senior Software Engineer",
                  department: "Engineering",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  description: "Build scalable AI-powered systems that transform trade operations."
                },
                {
                  title: "Product Manager",
                  department: "Product",
                  location: "Remote",
                  type: "Full-time",
                  description: "Lead product strategy and roadmap for our AI automation platform."
                },
                {
                  title: "Customer Success Manager",
                  department: "Customer Success",
                  location: "New York, NY",
                  type: "Full-time",
                  description: "Help customers achieve success with Vector's platform."
                },
                {
                  title: "Data Scientist",
                  department: "Engineering",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  description: "Develop and improve our AI models for trade automation."
                }
              ].map((position) => (
                <div key={position.title} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold playfair-display-600 mb-2">{position.title}</h3>
                      <p className="text-black/70 playfair-display-400 mb-3">{position.description}</p>
                      <div className="flex items-center gap-4 text-sm text-black/60">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <a 
                      href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold playfair-display-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Culture */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Our Culture</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                What it's like to work at Vector
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold playfair-display-600 mb-6">
                  We're Building the Future of Trade
                </h3>
                <p className="text-lg playfair-display-400 text-black/70 mb-8">
                  At Vector, we believe that AI can transform how businesses operate. We're not just building software – we're creating intelligent systems that help companies make better decisions, reduce costs, and drive growth.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Innovation-first mindset",
                    "Collaborative and inclusive environment",
                    "Continuous learning and growth",
                    "Work-life balance and flexibility"
                  ].map((value) => (
                    <div key={value} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="playfair-display-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold playfair-display-600 mb-2">Global Impact</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$10B+</div>
                  <div className="text-sm text-black/70 playfair-display-400">
                    Trade value processed through our platform
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
                Ready to Join Our Team?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Don't see a position that fits? We're always looking for talented people to join our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/careers/positions" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View All Positions
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/careers/contact" 
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Get in Touch
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
