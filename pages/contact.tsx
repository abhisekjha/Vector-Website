import React, { useState } from "react";
import Head from "next/head";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Users
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
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
          <title>Message Sent - Vector</title>
          <meta name="description" content="Thank you for contacting Vector. We'll be in touch soon." />
        </Head>
        
        <div className="min-h-screen bg-[#FAFAFA] text-black">
          <Navbar />
          
          {/* Success State Section */}
          <section className="py-16">
            <Container>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl border border-black/10 p-8 lg:p-12 shadow-sm text-center">
                  <div className="mb-8">
                    <CheckCircle2 className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                    <h1 className="text-4xl font-bold playfair-display-600 mb-4">
                      Message Sent Successfully!
                    </h1>
                    <p className="text-xl playfair-display-400 text-black/70 mb-8">
                      Thank you for reaching out to Vector. Our team will review your message and get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold playfair-display-600 mb-4">What happens next?</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <span className="playfair-display-400 text-black/70">We'll review your inquiry and route it to the appropriate team</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <span className="playfair-display-400 text-black/70">A team member will respond within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <span className="playfair-display-400 text-black/70">We'll work together to address your needs</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="/" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
        <title>Contact Us - Vector Trade Automation Platform</title>
        <meta name="description" content="Get in touch with Vector's team. Contact us for sales inquiries, support, partnerships, or general questions about our AI-powered trade automation platform." />
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
                  CONTACT US
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Get in Touch
                <br />
                <span className="text-blue-600">We're Here to Help</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Have questions about Vector's AI-powered trade automation platform? Need support with your implementation? 
                Want to explore partnership opportunities? We'd love to hear from you.
              </p>
            </div>
          </Container>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Contact Form */}
              <div className="bg-white rounded-2xl border border-black/10 p-8 lg:p-12 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-lg playfair-display-400 text-black/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold playfair-display-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 playfair-display-400"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold playfair-display-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 playfair-display-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 playfair-display-400"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 playfair-display-400"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Demo Request</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="media">Media & Press</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 playfair-display-400"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold playfair-display-600 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 playfair-display-400 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Privacy Policy */}
                  <p className="text-sm playfair-display-400 text-black/60">
                    By submitting this form, your information will be processed in accordance with our{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Side - Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold playfair-display-600 mb-6">
                    Other Ways to Reach Us
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-1">Email Us</h4>
                        <p className="text-black/70 playfair-display-400 mb-2">For general inquiries and support</p>
                        <a href="mailto:hello@vector.ai" className="text-blue-600 hover:underline playfair-display-500">
                          hello@vector.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-1">Call Us</h4>
                        <p className="text-black/70 playfair-display-400 mb-2">Monday - Friday, 9 AM - 6 PM EST</p>
                        <a href="tel:+1-555-VECTOR-1" className="text-blue-600 hover:underline playfair-display-500">
                          +1 (555) VECTOR-1
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-1">Live Chat</h4>
                        <p className="text-black/70 playfair-display-400 mb-2">Available 24/7 for urgent support</p>
                        <button className="text-blue-600 hover:underline playfair-display-500">
                          Start Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Information */}
                <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold playfair-display-600 mb-6">
                    Our Office
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-1">Headquarters</h4>
                        <p className="text-black/70 playfair-display-400">
                          Vector Technologies Inc.<br />
                          123 Innovation Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold playfair-display-600 mb-1">Business Hours</h4>
                        <p className="text-black/70 playfair-display-400">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday: 10:00 AM - 2:00 PM EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold playfair-display-600 mb-6">
                    Quick Actions
                  </h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="/demo" 
                      className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold playfair-display-600">Book a Demo</div>
                        <div className="text-sm text-black/70 playfair-display-400">See Vector in action</div>
                      </div>
                    </a>

                    <a 
                      href="/support" 
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <Users className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-semibold playfair-display-600">Get Support</div>
                        <div className="text-sm text-black/70 playfair-display-400">Technical help & resources</div>
                      </div>
                    </a>

                    <a 
                      href="/resources" 
                      className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold playfair-display-600">Browse Resources</div>
                        <div className="text-sm text-black/70 playfair-display-400">Documentation & guides</div>
                      </div>
                    </a>
                  </div>
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
