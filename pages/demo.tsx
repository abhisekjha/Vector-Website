import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  TrendingUp,
  Shield,
  Clock,
  Target,
  BarChart3,
  FileText,
  Zap
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    companySize: '',
    tradeSpend: '',
    currentChallenges: [] as string[],
    timeline: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      currentChallenges: checked 
        ? [...prev.currentChallenges, value]
        : prev.currentChallenges.filter(challenge => challenge !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Demo Request Submitted - Vector</title>
          <meta name="description" content="Thank you for your interest in Vector's trade automation platform. We'll be in touch soon." />
        </Head>
        
        <div className="min-h-screen bg-[#FAFAFA] text-black">
          <Navbar />
          
          {/* Success State Section */}
          <section className="py-16">
            <Container>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl border border-black/10 p-8 lg:p-12 shadow-sm text-center">
              <div className="mb-8">
                <CheckCircle2 className="h-20 w-20 text-[#D8FF3D] mx-auto mb-6" />
                <h1 className="text-4xl font-bold playfair-display-600 mb-4">
                  Demo Request Submitted!
                </h1>
                <p className="text-xl playfair-display-400 text-black/70 mb-8">
                  Thank you for your interest in Vector. Our team will review your request and contact you within 24 hours to schedule your personalized demo.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold playfair-display-600 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D8FF3D] text-black rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="playfair-display-400 text-black/70">We'll review your specific trade automation needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D8FF3D] text-black rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="playfair-display-400 text-black/70">Schedule a 30-minute personalized demo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D8FF3D] text-black rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="playfair-display-400 text-black/70">Show you how Vector can transform your trade operations</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#D8FF3D] text-black px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-[#D8FF3D]/90 transition-colors duration-200"
              >
                Back to Home
                <ArrowRight className="h-5 w-5" />
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

  return (
    <>
      <Head>
        <title>Book a Demo - Vector Trade Automation Platform</title>
        <meta name="description" content="Schedule a personalized demo of Vector's AI-powered trade automation platform. See how we can transform your trade operations with real-time intelligence and audit-grade ledger." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />

        {/* Main Content Section */}
        <section className="py-16">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Form Box */}
              <div className="bg-white rounded-2xl border border-black/10 p-8 lg:p-12 shadow-sm">
                <div className="mb-8">
                  <h1 className="text-4xl lg:text-5xl font-bold playfair-display-600 mb-4">
                    Let's Transform Your Trade Operations
                  </h1>
                  <p className="text-xl playfair-display-400 text-black/70">
                    Join leading CPG companies accelerating their trade automation with Vector. 
                    Book a personalized demo to see how we can optimize your trade spend and improve ROI.
                  </p>
                </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                    placeholder="Trade Finance Manager"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                      placeholder="john@acme.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-3">
                    Company Size *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['1-50', '51-200', '201-1000', '1000+'].map((size) => (
                      <label key={size} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="companySize"
                          value={size}
                          checked={formData.companySize === size}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#D8FF3D] bg-white/10 border-white/20 focus:ring-[#D8FF3D]"
                        />
                        <span className="playfair-display-400 text-black/70">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Trade Spend */}
                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-3">
                    Annual Trade Spend *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['<$10M', '$10M-$50M', '$50M-$100M', '$100M+'].map((spend) => (
                      <label key={spend} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tradeSpend"
                          value={spend}
                          checked={formData.tradeSpend === spend}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#D8FF3D] bg-white/10 border-white/20 focus:ring-[#D8FF3D]"
                        />
                        <span className="playfair-display-400 text-black/70">{spend}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Current Challenges */}
                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-3">
                    What are your biggest trade management challenges? (Select all that apply) *
                  </label>
                  <div className="space-y-3">
                    {[
                      'Manual accrual processes and reconciliation',
                      'Deduction recovery and evidence collection',
                      'Lack of real-time trade spend visibility',
                      'Complex promotion planning and optimization',
                      'Integration issues with ERP/POS systems',
                      'Audit compliance and documentation',
                      'Forecast accuracy and bias reduction',
                      'Policy enforcement and governance'
                    ].map((challenge) => (
                      <label key={challenge} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          value={challenge}
                          checked={formData.currentChallenges.includes(challenge)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-[#D8FF3D] bg-white/10 border-white/20 focus:ring-[#D8FF3D] mt-1"
                        />
                        <span className="playfair-display-400 text-black/70 text-sm">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-2">
                    When are you looking to implement a solution? *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    aria-label="Implementation timeline"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400"
                  >
                    <option value="" className="bg-gray-900">Select timeline</option>
                    <option value="immediately" className="bg-gray-900">Immediately (0-3 months)</option>
                    <option value="short-term" className="bg-gray-900">Short-term (3-6 months)</option>
                    <option value="medium-term" className="bg-gray-900">Medium-term (6-12 months)</option>
                    <option value="long-term" className="bg-gray-900">Long-term (12+ months)</option>
                    <option value="exploring" className="bg-gray-900">Just exploring options</option>
                  </select>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-semibold playfair-display-600 mb-2">
                    Tell us more about your current trade management setup
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-[#D8FF3D] focus:ring-1 focus:ring-[#D8FF3D] playfair-display-400 resize-none"
                    placeholder="Describe your current systems, processes, team size, and any specific requirements..."
                  />
                </div>

                {/* Privacy Policy */}
                <p className="text-sm playfair-display-400 text-black/60">
                  By submitting this form, your information will be processed in accordance with our{' '}
                  <a href="/privacy" className="text-[#D8FF3D] hover:underline">Privacy Policy</a>.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D8FF3D] text-black px-8 py-4 rounded-lg text-lg font-semibold playfair-display-600 hover:bg-[#D8FF3D]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Demo
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
              </div>

              {/* Right Side - Benefits & Social Proof Box */}
              <div className="bg-white rounded-2xl border border-black/10 p-8 lg:p-12 shadow-sm">
              <div className="mb-8">
                <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                  Why Leading CPG Companies Choose Vector
                </h2>
                <p className="text-lg playfair-display-400 text-black/70">
                  "Vector transformed our trade operations from manual, error-prone processes to an intelligent, automated system that saves us millions annually."
                </p>
                <div className="mt-4">
                  <p className="font-semibold playfair-display-600">Sarah Chen</p>
                  <p className="text-sm playfair-display-400 text-black/60">VP of Trade Finance, Global CPG</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-4 border border-black/10">
                  <TrendingUp className="h-8 w-8 text-[#D8FF3D] mb-3" />
                  <h3 className="font-semibold playfair-display-600 mb-2">3-5% ROI Lift</h3>
                  <p className="text-sm playfair-display-400 text-black/70">Average trade spend optimization</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/10">
                  <Clock className="h-8 w-8 text-[#D8FF3D] mb-3" />
                  <h3 className="font-semibold playfair-display-600 mb-2">90 Days</h3>
                  <p className="text-sm playfair-display-400 text-black/70">To full implementation</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/10">
                  <Shield className="h-8 w-8 text-[#D8FF3D] mb-3" />
                  <h3 className="font-semibold playfair-display-600 mb-2">Audit-Grade</h3>
                  <p className="text-sm playfair-display-400 text-black/70">Compliance & documentation</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/10">
                  <Zap className="h-8 w-8 text-[#D8FF3D] mb-3" />
                  <h3 className="font-semibold playfair-display-600 mb-2">Real-Time</h3>
                  <p className="text-sm playfair-display-400 text-black/70">Live liability & health monitoring</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold playfair-display-600 mb-6">
                Trusted by leading trade finance teams
              </h3>
              <div className="grid grid-cols-3 gap-4 opacity-60">
                {[
                  { name: "Global CPG", icon: <Building2 className="h-8 w-8" /> },
                  { name: "Fortune 500", icon: <Target className="h-8 w-8" /> },
                  { name: "Enterprise", icon: <BarChart3 className="h-8 w-8" /> },
                  { name: "Mid-Market", icon: <Users className="h-8 w-8" /> },
                  { name: "Retail", icon: <FileText className="h-8 w-8" /> },
                  { name: "Manufacturing", icon: <Building2 className="h-8 w-8" /> }
                ].map((company, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-center border border-black/10">
                    <div className="text-black/60 mb-2 flex justify-center">
                      {company.icon}
                    </div>
                    <p className="text-xs playfair-display-400 text-black/60">{company.name}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </Container>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
