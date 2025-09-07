import React, { useState } from "react";
import Head from "next/head";
import { 
  ArrowRight, 
  Search, 
  MessageSquare, 
  BookOpen, 
  Video, 
  Users, 
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileText,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'New to Vector? Start here.',
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600',
      articles: [
        'Vector Platform Overview',
        'Setting Up Your Account',
        'First Steps with Trade Automation',
        'Understanding the Operating Loop'
      ]
    },
    {
      id: 'integration',
      title: 'Integration & Setup',
      description: 'Connect your systems with Vector.',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600',
      articles: [
        'ERP Integration Guide',
        'POS System Setup',
        'Data Feed Configuration',
        'API Documentation'
      ]
    },
    {
      id: 'agents',
      title: 'AI Agents',
      description: 'Learn about Vector\'s intelligent agents.',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600',
      articles: [
        'Promo Agent Configuration',
        'Claims Agent Workflows',
        'Accruals Agent Setup',
        'Policy Engine Configuration'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and solutions.',
      icon: <AlertCircle className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-600',
      articles: [
        'Data Sync Issues',
        'Agent Performance Problems',
        'Integration Errors',
        'Performance Optimization'
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      href: '/api-docs',
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      href: '/tutorials',
      icon: <Video className="h-5 w-5" />
    },
    {
      title: 'Community Forum',
      description: 'Connect with other Vector users',
      href: '/community',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'System Status',
      description: 'Check Vector platform status',
      href: '/status',
      icon: <CheckCircle2 className="h-5 w-5" />
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageSquare className="h-6 w-6" />,
      availability: '24/7',
      responseTime: 'Immediate',
      href: '#chat'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="h-6 w-6" />,
      availability: '24/7',
      responseTime: '< 4 hours',
      href: '/contact'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="h-6 w-6" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      href: 'tel:+1-555-VECTOR-1'
    }
  ];

  return (
    <>
      <Head>
        <title>Support Center - Vector Trade Automation Platform</title>
        <meta name="description" content="Get help with Vector's AI-powered trade automation platform. Find documentation, tutorials, troubleshooting guides, and contact our support team." />
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
                  SUPPORT CENTER
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                How can we help?
                <br />
                <span className="text-blue-600">We're here for you</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Find answers, get help, and connect with our support team. From getting started guides to advanced troubleshooting, we've got you covered.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black/40" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-black/10 rounded-full text-lg playfair-display-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Quick Links</h2>
              <p className="text-lg playfair-display-400 text-black/70">
                Popular resources to get you started
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group bg-white rounded-xl border border-black/10 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {link.icon}
                    </div>
                    <ChevronRight className="h-4 w-4 text-black/40 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="font-semibold playfair-display-600 mb-2">{link.title}</h3>
                  <p className="text-sm text-black/70 playfair-display-400">{link.description}</p>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* Support Categories */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Browse by Category</h2>
              <p className="text-lg playfair-display-400 text-black/70">
                Find help organized by topic
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold playfair-display-600">{category.title}</h3>
                      <p className="text-black/70 playfair-display-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.articles.map((article, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <ChevronRight className="h-4 w-4 text-black/40 group-hover:text-blue-600 transition-colors" />
                        <span className="playfair-display-400 text-black/80 group-hover:text-blue-600 transition-colors">
                          {article}
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-black/10">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500 font-semibold"
                    >
                      View all {category.title.toLowerCase()} articles
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Still need help?</h2>
              <p className="text-lg playfair-display-400 text-black/70">
                Our support team is here to help you succeed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                    {option.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold playfair-display-600 mb-3">{option.title}</h3>
                  <p className="text-black/70 playfair-display-400 mb-6">{option.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-black/60" />
                      <span className="playfair-display-400 text-black/70">{option.availability}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="playfair-display-400 text-green-600 font-medium">{option.responseTime}</span>
                    </div>
                  </div>

                  <a
                    href={option.href}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold playfair-display-600 hover:bg-blue-700 transition-colors"
                  >
                    {option.title === 'Live Chat' ? 'Start Chat' : 
                     option.title === 'Email Support' ? 'Send Email' : 'Call Now'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg playfair-display-400 text-black/70">
                Quick answers to common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How do I get started with Vector?",
                    answer: "Getting started is easy! Book a demo to see Vector in action, then our team will help you set up your account and configure your first agents. The entire process typically takes 2-3 weeks."
                  },
                  {
                    question: "What systems does Vector integrate with?",
                    answer: "Vector integrates with all major ERP systems (SAP, Oracle, Microsoft Dynamics), POS systems, EDI networks, and syndicated data providers. We also offer custom integrations for specialized systems."
                  },
                  {
                    question: "How long does implementation take?",
                    answer: "Most implementations are completed within 90 days. This includes system integration, agent configuration, policy setup, and team training. Complex enterprise deployments may take longer."
                  },
                  {
                    question: "What kind of support do you provide?",
                    answer: "We provide 24/7 support through live chat, email, and phone. Our support team includes trade operations experts who understand your business challenges and can provide both technical and strategic guidance."
                  },
                  {
                    question: "Is my data secure with Vector?",
                    answer: "Absolutely. Vector is SOC2 Type II certified and follows enterprise-grade security practices. All data is encrypted in transit and at rest, and we maintain strict access controls and audit trails."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-black/10 p-6">
                    <h3 className="text-lg font-semibold playfair-display-600 mb-3">{faq.question}</h3>
                    <p className="text-black/70 playfair-display-400">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500 font-semibold"
                >
                  View all FAQs
                  <ArrowRight className="h-4 w-4" />
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
