import React, { useState } from "react";
import { Container, SectionTitle, FAQItem } from "../ui/SharedComponents";

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
    }
  ];

  return (
    <section className="py-16">
      <Container>
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Common questions about Vector's platform and capabilities"
          align="center"
        />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-black/10 bg-white">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onToggle={() => toggleFAQ(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
