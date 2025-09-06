import React from "react";
import Navbar from "./Navbar";

// Import all the new modular components
import { HeroSection } from "./sections/HeroSection";
import { TrustSection } from "./sections/TrustSection";
import { PillarsSection } from "./sections/PillarsSection";
import { PlatformSection } from "./sections/PlatformSection";
import { AgentsSection } from "./sections/AgentsSection";
import { ComplianceSection } from "./sections/ComplianceSection";
import { IntegrationSection } from "./sections/IntegrationSection";
import { FAQSection } from "./sections/FAQSection";
import { CTASection } from "./sections/CTASection";

// =============== MAIN COMPONENT ==============================
export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Section */}
      <TrustSection />

      {/* The 5 Pillars */}
      <PillarsSection />

      {/* Platform Architecture Sections */}
      <PlatformSection />

      {/* Vector Agents */}
      <AgentsSection />

      {/* Governance, Security & Architecture */}
      <ComplianceSection />

      {/* Integration Command Center & Connectors */}
      <IntegrationSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Strip */}
      <CTASection />
    </div>
  );
}

