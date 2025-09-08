import React, { useState } from "react";
import Head from "next/head";
import { Container, SectionTitle, FAQItem } from "@/components/ui/SharedComponents";
import { ArrowLeft, HelpCircle, MessageCircle, Search } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const allFaqs = [
    {
      question: "How do you prevent bad automation?",
      answer: "Every automated action is bounded by OPA policies with human-readable explanations. We provide multiple operating modes (Assist → Recommend → Auto-with-Approval → Auto-within-Policy) and comprehensive override trails. All actions are logged in our audit-grade ledger.",
      category: "Automation"
    },
    {
      question: "Can we bring our own models?",
      answer: "Yes, Vector supports BYO-model plugins in V3. For V1, we provide pre-trained models optimized for trade operations with full explainability and reason codes.",
      category: "AI & Models"
    },
    {
      question: "How do overrides work?",
      answer: "When a policy blocks an action, users can request an override with justification. All overrides are logged with full context, approval workflow, and audit trail. Override patterns are analyzed to improve policies.",
      category: "Policies"
    },
    {
      question: "What's the go-live path and typical timeline?",
      answer: "Our typical onboarding is 2-4 weeks: Week 1-2 for connector setup and data validation, Week 3 for policy configuration and user training, Week 4 for pilot launch with 2-3 promotions. Full rollout typically takes 6-8 weeks.",
      category: "Implementation"
    },
    {
      question: "What integrations does Vector support?",
      answer: "Vector integrates with 100+ systems including SAP, Oracle, Salesforce, NIQ, Circana, and all major EDI formats (852, 810, 812). We provide pre-built connectors with real-time sync, error handling, and comprehensive monitoring.",
      category: "Integrations"
    },
    {
      question: "How does Vector handle data security and compliance?",
      answer: "Vector is SOC 2 Type II certified and ISO 27001 compliant. We provide SSO/SAML integration, data residency options, and complete audit trails. All data is encrypted in transit and at rest with role-based access controls.",
      category: "Security"
    },
    {
      question: "What's the difference between Vector and traditional trade promotion management?",
      answer: "Vector is an AI-first platform that automates the entire trade lifecycle from planning to settlement. Unlike traditional TPM systems, Vector provides real-time intelligence, policy-bound automation, and an audit-grade ledger for complete transparency.",
      category: "Platform"
    },
    {
      question: "How does pricing work for Vector?",
      answer: "Vector offers flexible pricing based on your trade volume and feature requirements. We provide transparent, usage-based pricing with no hidden fees. Contact our sales team for a customized quote based on your specific needs.",
      category: "Pricing"
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 support with dedicated customer success managers, comprehensive documentation, training programs, and a community forum. Our support team includes trade operations experts who understand your business challenges.",
      category: "Support"
    },
    {
      question: "Can Vector handle complex multi-brand scenarios?",
      answer: "Yes, Vector is designed for complex enterprise scenarios with multi-brand, multi-region, and multi-channel support. Our platform handles different pricing structures, promotion types, and business rules across all your brands and markets.",
      category: "Enterprise"
    },
    {
      question: "How does Vector ensure data accuracy?",
      answer: "Vector uses multiple validation layers including real-time data quality checks, automated reconciliation, and machine learning models to detect anomalies. All data transformations are logged and auditable, ensuring complete traceability.",
      category: "Data Quality"
    },
    {
      question: "What reporting and analytics capabilities does Vector offer?",
      answer: "Vector provides comprehensive reporting including real-time dashboards, custom reports, predictive analytics, and automated insights. Our analytics engine helps identify trends, optimize promotions, and measure ROI across all trade activities.",
      category: "Analytics"
    }
  ];

  const filteredFaqs = allFaqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(allFaqs.map(faq => faq.category))];

  return (
    <>
      <Head>
        <title>FAQ - Vector</title>
        <meta name="description" content="Frequently asked questions about Vector's AI-powered trade management platform" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
        {/* Header */}
        <div className="border-b border-black/10 bg-white/80 backdrop-blur sticky top-0 z-40">
          <Container className="py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors duration-200 playfair-display-500"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-semibold playfair-display-600">FAQ</h1>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold playfair-display-600 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-black/70 playfair-display-400 max-w-2xl mx-auto">
              Find answers to common questions about Vector's platform, features, and implementation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black/40" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent playfair-display-400"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSearchTerm("")}
              className={`px-4 py-2 rounded-full text-sm font-medium playfair-display-500 transition-all duration-200 ${
                searchTerm === "" 
                  ? "bg-black text-white" 
                  : "bg-white text-black/70 hover:bg-black/5 border border-black/10"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium playfair-display-500 transition-all duration-200 ${
                  searchTerm === category 
                    ? "bg-black text-white" 
                    : "bg-white text-black/70 hover:bg-black/5 border border-black/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-black/10 bg-white shadow-xl overflow-hidden">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-black/5 last:border-b-0">
                    <FAQItem
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQ === i}
                      onToggle={() => toggleFAQ(i)}
                    />
                    <div className="px-6 pb-2">
                      <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium playfair-display-500 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center">
                  <HelpCircle className="h-12 w-12 text-black/20 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold playfair-display-600 mb-2">No FAQs found</h3>
                  <p className="text-black/60 playfair-display-400">
                    Try adjusting your search terms or browse all categories.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-8 py-6 shadow-lg">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold playfair-display-600 text-black">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-black/60 playfair-display-400">
                    Our team is here to help you succeed.
                  </p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold playfair-display-600 hover:bg-black/90 transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
