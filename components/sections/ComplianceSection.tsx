import React from "react";
import { ShieldCheck, Lock, Users, Globe, Database, Code, GitBranch, CheckCircle2 } from "lucide-react";
import { Container, SectionTitle } from "../ui/SharedComponents";

export const ComplianceSection: React.FC = () => {
  return (
    <>
      {/* Governance & Trust */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Governance & Trust" 
            subtitle="Built-in controls that ensure every decision is auditable and every policy is enforceable"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <Database className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold font-playfair">Audit-grade Ledger</h3>
              <p className="text-black/70">
                Event sourcing with immutable records. Replay any point in time for accruals, claims, and approvals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <Code className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold font-playfair">Policy-as-Code</h3>
              <p className="text-black/70">
                OPA policies with plain-English explanations. Every automated action includes policy links and rationale.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <GitBranch className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold font-playfair">Complete Lineage</h3>
              <p className="text-black/70">
                Trace every number from source feeds through models to final decisions and P&L impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Security & Compliance */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Security & Compliance" 
            subtitle="Enterprise-grade security with comprehensive compliance frameworks"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <ShieldCheck className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold font-playfair">SOC 2 Type II</h4>
              <p className="text-sm text-black/70">In progress</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Lock className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold font-playfair">ISO 27001</h4>
              <p className="text-sm text-black/70">Roadmap</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold font-playfair">SSO/SAML</h4>
              <p className="text-sm text-black/70">Okta, Azure AD</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Globe className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold font-playfair">Data Residency</h4>
              <p className="text-sm text-black/70">US, EU options</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Architecture Overview */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Architecture Overview" 
            subtitle="Modern, scalable architecture built for enterprise trade operations"
            align="center"
          />
          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="mb-4 font-semibold font-playfair">System Architecture</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-sm">Sources (ERP, POS, EDI)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm">Ingest Layer (quality gates, validation)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <span className="text-sm">Policy Engine (OPA)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-sm">Agent Layer (6 intelligent agents)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="text-sm">Ledger (event sourcing)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-gray-500" />
                    <span className="text-sm">APIs & Exports (GL, audit packs)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4 font-semibold font-playfair">Technical Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Stream & batch processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Idempotent retries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Sandbox → prod replay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>OpenTelemetry observability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>OpenLineage data lineage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
