import React from "react";
import { TrendingUp, FileText, BarChart3, Database, Shield, Link } from "lucide-react";
import { Container, SectionTitle } from "../ui/SharedComponents";
import { AgentsAnimation } from "../agents/AgentsAnimation";
import { AgentCard } from "../agents/AgentCard";

export const AgentsSection: React.FC = () => {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle 
          title="Six intelligent agents" 
          subtitle="Each agent operates in multiple modes with clear guardrails and measurable outcomes"
          align="center"
        />
        <AgentsAnimation />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AgentCard
            name="Promo Agent"
            purpose="Keep promos on track; detect drift; propose edits; run what-ifs"
            triggers={["New POS signal", "Variance > threshold", "Weekly review"]}
            skills={["Health compute", "Drift detection", "Action proposals", "What-if analysis"]}
            modes={["Assist", "Recommend", "Auto-approval"]}
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <AgentCard
            name="Deduction Agent"
            purpose="Classify deductions, bundle evidence, match to promos/contracts"
            triggers={["New deduction", "Unmatched claim", "Aging threshold"]}
            skills={["Classification", "Evidence bundling", "Recovery matching", "EV calculation"]}
            modes={["Assist", "Recommend", "Auto-approval"]}
            icon={<FileText className="h-5 w-5" />}
          />
          <AgentCard
            name="Finance Agent"
            purpose="Maintain accrual schedules; alert over/under; prep audit packs"
            triggers={["Plan publish", "Claim settle", "Period close", "Variance alerts"]}
            skills={["Accrual scheduling", "Variance monitoring", "Audit pack generation", "GL export"]}
            modes={["Assist", "Recommend", "Auto-approval"]}
            icon={<BarChart3 className="h-5 w-5" />}
          />
          <AgentCard
            name="Data Steward Agent"
            purpose="Enforce MDM quality gates; block dirty hierarchies; propose fixes"
            triggers={["Ingest at staging", "Schema drift", "Failed validations"]}
            skills={["Quality gates", "Schema validation", "Data cleansing", "Fix proposals"]}
            modes={["Assist", "Recommend", "Auto-approval"]}
            icon={<Database className="h-5 w-5" />}
          />
          <AgentCard
            name="Deal Desk Agent"
            purpose="Pre-check proposals against policies; explain violations"
            triggers={["Draft promotion", "Policy change", "Risk threshold"]}
            skills={["Policy checking", "Violation explanation", "Approval routing", "Risk assessment"]}
            modes={["Assist", "Recommend", "Auto-approval"]}
            icon={<Shield className="h-5 w-5" />}
          />
          <AgentCard
            name="Integration Agent"
            purpose="Detect late/failed feeds; auto replay/backfill safely; emit lineage"
            triggers={["SLA breach", "Checksum mismatch", "Schema change"]}
            skills={["SLA monitoring", "Safe replay", "Backfill operations", "Lineage emission"]}
            modes={["Assist", "Recommend", "Auto-approval"]}
            icon={<Link className="h-5 w-5" />}
          />
        </div>
      </Container>
    </section>
  );
};
