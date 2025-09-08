import React from "react";
import { Zap, Database, Code, GitBranch, Link } from "lucide-react";
import { Container, SectionTitle, PillarCard } from "../ui/SharedComponents";

export const PillarsSection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-white py-16">
      <Container>
        <SectionTitle 
          title="Vector's opinionated foundation" 
          subtitle="Built on five core pillars that ensure trust, transparency, and automation at scale"
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PillarCard
            icon={<Zap className="h-6 w-6 text-black" />}
            title="Agentic Core"
            description="Assist → Recommend → Auto-with-Approval → Auto-within-Policy; every action has rationale."
            features={[
              "Explainable AI decisions",
              "Human-in-the-loop controls",
              "Policy-bounded automation",
              "Rationale for every action"
            ]}
          />
          <PillarCard
            icon={<Database className="h-6 w-6 text-black" />}
            title="Vector Ledger"
            description="An append-only record that lets you recreate state as-of any time and explain why a decision was made."
            features={[
              "Immutable event sourcing",
              "As-of reporting",
              "Complete audit trail",
              "Replay any point in time"
            ]}
          />
          <PillarCard
            icon={<Code className="h-6 w-6 text-black" />}
            title="Policy-as-Code"
            description="OPA policies for approvals, margin floors, budgets, SoX checks; human overrides logged."
            features={[
              "Machine-enforced policies",
              "Human override trails",
              "Version-controlled rules",
              "Plain-English explanations"
            ]}
          />
          <PillarCard
            icon={<GitBranch className="h-6 w-6 text-black" />}
            title="Lineage & Observability"
            description="OpenLineage from feed → model → decision → P&L; feed SLAs, schema diffs, backfills."
            features={[
              "End-to-end data lineage",
              "Feed SLA monitoring",
              "Schema drift detection",
              "Safe backfill operations"
            ]}
          />
          <PillarCard
            icon={<Link className="h-6 w-6 text-black" />}
            title="Connectors & Composability"
            description="SAP/Oracle, NIQ/Circana/EDI 852/810/812, Salesforce/REX, data clouds; idempotent retries."
            features={[
              "Pre-built connectors",
              "Idempotent operations",
              "Self-healing integrations",
              "Composable architecture"
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

