import React from "react";
import { Container, SectionTitle } from "../ui/SharedComponents";

export const TrustSection: React.FC = () => {
  return (
    <section className="border-t border-black/10 py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 opacity-90">
            <div className="h-px w-12 bg-black/20" />
            <span className="text-sm uppercase tracking-widest text-black/60">Not just any AI solution.</span>
            <div className="h-px w-12 bg-black/20" />
          </div>
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl playfair-display-600">
            Agentic, explainable, and audit-ready
          </h2>
          <p className="mb-8 text-black/70">
            Founded with AI at the core: uplift models, policy enforcement, and an audit-grade ledger. 
            Delivered in-product so feedback loops are fast and trustworthy.
          </p>
        </div>
      </Container>
    </section>
  );
};
