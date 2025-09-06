import React, { useState } from "react";
import { Container, SectionTitle, FAQItem } from "../ui/SharedComponents";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you prevent bad automation?",
      answer: "Every automated action is bounded by OPA policies with human-readable explanations. We provide multiple operating modes (Assist → Recommend → Auto-with-Approval → Auto-within-Policy) and comprehensive override trails. All actions are logged in our audit-grade ledger."
    },
    {
      question: "Can we bring our own models?",
      answer: "Yes, Vector supports BYO-model plugins in V3. For V1, we provide pre-trained models optimized for trade operations with full explainability and reason codes."
    },
    {
      question: "How do overrides work?",
      answer: "When a policy blocks an action, users can request an override with justification. All overrides are logged with full context, approval workflow, and audit trail. Override patterns are analyzed to improve policies."
    },
    {
      question: "What's the go-live path and typical timeline?",
      answer: "Our typical onboarding is 2-4 weeks: Week 1-2 for connector setup and data validation, Week 3 for policy configuration and user training, Week 4 for pilot launch with 2-3 promotions. Full rollout typically takes 6-8 weeks."
    },
    {
      question: "What integrations does Vector support?",
      answer: "Vector integrates with 100+ systems including SAP, Oracle, Salesforce, NIQ, Circana, and all major EDI formats (852, 810, 812). We provide pre-built connectors with real-time sync, error handling, and comprehensive monitoring."
    },
    {
      question: "How does Vector handle data security and compliance?",
      answer: "Vector is SOC 2 Type II certified and ISO 27001 compliant. We provide SSO/SAML integration, data residency options, and complete audit trails. All data is encrypted in transit and at rest with role-based access controls."
    },
    {
      question: "What's the difference between Vector and traditional trade promotion management?",
      answer: "Vector is an AI-first platform that automates the entire trade lifecycle from planning to settlement. Unlike traditional TPM systems, Vector provides real-time intelligence, policy-bound automation, and an audit-grade ledger for complete transparency."
    },
    {
      question: "How does pricing work for Vector?",
      answer: "Vector offers flexible pricing based on your trade volume and feature requirements. We provide transparent, usage-based pricing with no hidden fees. Contact our sales team for a customized quote based on your specific needs."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <Container>
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Common questions about Vector's platform and capabilities"
          align="center"
        />
        
        {/* FAQ Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-black/10 bg-white shadow-xl overflow-hidden">
            {faqs.slice(0, 4).map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onToggle={() => toggleFAQ(i)}
              />
            ))}
          </div>
          
          {/* View All FAQs Button */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold playfair-display-600 text-black/80">
                  Have more questions?
                </span>
              </div>
              <a 
                href="/faq" 
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold playfair-display-600 hover:bg-black/90 transition-colors duration-200"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Contact Support */}
          <div className="mt-6 text-center">
            <p className="text-sm text-black/60 playfair-display-400 mb-3">
              Still need help? Our team is here to assist you.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium playfair-display-500 transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

