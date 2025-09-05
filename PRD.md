# Vector — Product Development Plan (v0.1)

**Owner:** Abhisek (PM/Tech Lead)
**Audience:** Engineering, Design, Data/ML, QA, Solutions, Sales/CS
**Revision:** v0.1 (living doc)

---

## 1) Executive Summary

Vector is an **agentic commercial OS for trade**. It unifies TPM + TPO in a single flow — **plan → execute → claims/settlement** — with **policy‑bound autonomy**, an **audit‑grade ledger**, and **observable integrations**. We will ship value fast with a **phased roadmap (V1→V3)** and obsess over **trust, time‑to‑value, and explainability**.

**Primary personas**

* **Trade Finance Lead** (owns accruals, claims, GL hooks)
* **CPG Sales/Trade Manager** (plans & optimizes promotions)
* **Revenue Recovery / Deductions Analyst** (evidence packs, settlement)
* **Data/IT Owner** (feeds, lineage, SLAs, security)

**KPIs** (success criteria)

* Accrual accuracy ↑ (delta vs settlement), audit pass rate
* Deduction recovery rate ↑, cycle time ↓
* Promo ROI ↑, forecast bias ↓
* Time‑to‑first‑integration (days→hours), % feeds within SLA
* Override rate on agent recs ↓

---

## 2) Problem & Opportunity

Trade spend (\~20–25% of CPG revenue) is fragmented across planning tools, spreadsheets, and opaque claims workflows. Finance lacks **live liability**; Operations lacks **continuous health**; IT lacks **observability**. Incumbents market AI but fail on **governed automation** and **evidence‑based trust**. Vector differentiates on **agentic automation with policy guardrails**, **ledgered truth**, and **lineage/observability**.

---

## 3) Scope (What we will build)

**Table‑stakes (but better)**

* Unified **TPM + TPO** workflow
* **Finance‑grade accruals & claims** (always‑live liability, GL hooks)
* **Modern UX & collab** (fast grid, scenario compare, health cards)

**10 Big Bets**

1. Agentic core (explainable, bounded)
2. Audit‑grade ledger (event sourcing)
3. Policy‑as‑code guardrails (OPA)
4. Composability & self‑healing connectors
5. Lineage for trust (OpenLineage)
6. Live Promotion Health (real‑time drivers & drift)
7. One‑click Evidence Packs
8. TPO that explains itself (reason codes & guard‑bands)
9. Scenario Studio (constraint optimizer)
10. Integration Command Center (feed SLAs, schema diffs, replays)

Out of scope (V1): multi‑entity tax, BYO‑model plug‑ins, full automation without policy limits.

---

## 4) Phased Roadmap & Timeline

### V1 (12–16 weeks) — “Prove the loop”

**Deliverables**

* Planning calendar & grid (funds, accruals; fast UX)
* Claims intake & settlement workflow
* Live Promotion Health (plan vs actuals; top drivers)
* ERP connector (choose **SAP** first) & POS connector (choose **NIQ** first)
* **Vector Ledger** (event‑sourced core; as‑of accruals)
* **OPA guardrails v1** (approvals, budget caps, margin floors)
* **Integration Command Center v1** (feeds list, freshness/completeness, manual replay)

**Sprints (2‑week)**

1. Foundations: repo, CI, environments, design tokens, auth, RBAC
2. Ledger core (event model) + OPA service + seed policies
3. Planning grid (funds, accrual patterns) + GL posting stub
4. Claims intake + Evidence Pack scaffold
5. Health v1 (plan vs actuals) + POS ingest
6. SAP/NIQ connector MVP + Integration Center v1 (SLA metrics)
7. Approvals UX + audit pack export (as‑of)
8. Hardening, data quality gates, beta cut
   **Exit:** 2 pilot customers live; metrics wired; runbook ready

### V2 (8–12 weeks) — “Explain & optimize”

* **TPO v1** (baselines, uplift/elasticity with reason codes & guard‑bands)
* **Scenario Studio** (constraint optimizer; apply‑to‑plan)
* **Evidence Packs v1** (contracts, invoices, shipments, policy extracts; similarity suggestions)
* **Deduction Agent** (assist/recommend)
* **OpenLineage end‑to‑end** (feed→model→decision→P\&L)

### V3 — “Scale & automate”

* Multi‑entity/currency/tax
* Auto‑within‑policy for Promo & Deduction Agents
* BYO‑model plug‑ins
* Integration sandbox→prod **replay** for backfills, with approvals & rollbacks

---

## 5) Product Epics → Feature Stories (V1)

### Epic A — Planning & Funds

* **A1**: Create/clone promo; attach customer, SKUs, dates, mechanics
* **A2**: Allocate funds; accrual schedule (flat/curve/% of sales)
* **A3**: Guardrails: budget caps, margin floors (OPA)
* **A4**: Ledger write: `PromotionCreated`, `AccrualScheduled`
  **Acceptance**: Create/clone ≤2s; validations inline; events visible in audit view.

### Epic B — Live Promotion Health

* **B1**: Plan vs actuals (POS) with drivers (distribution, price, competitor cuts)
* **B2**: Health Card: traffic light + “next best action”
* **B3**: Diff view: “what changed” since last publish
  **Acceptance**: Data refresh ≤30m; drivers ranked with confidence; actions explainable.

### Epic C — Accruals & Claims

* **C1**: Always‑live liability; as‑of reporting
* **C2**: Claims intake (852/810/812 & manual)
* **C3**: Evidence Pack bundle (v0): linked docs + policy extracts
* **C4**: Settlement workflow; GL postings (export file)
  **Acceptance**: Submit→decision path logged; settlement deltas reconciled; GL export validates.

### Epic D — Governance & Audit

* **D1**: Ledger timeline & **Ledger Diff** (Git‑style) for accruals/approvals
* **D2**: OPA policies admin (yaml UI) + explanation strings
* **D3**: SoX checks on high‑risk actions; override trail
  **Acceptance**: Every rejection shows a human‑readable reason + policy link; “as‑of” packs generate in <10s.

### Epic E — Integrations & Observability

* **E1**: Connectors: SAP (GL, vendor, promotions), POS (NIQ)
* **E2**: Ingest framework (idempotent, late data backfill)
* **E3**: Integration Command Center v1: freshness/completeness, schema diffs, backfill/replay
  **Acceptance**: Freshness SLA alarms; replay is idempotent; lineage events emitted.

---

## 6) Technical Architecture (V1)

* **Frontend**: Next.js + Tailwind; modular UI; feature flags.
* **API**: GraphQL for app reads/writes; REST/ingest for feeds; async jobs via queue.
* **Services**: `ledger-svc`, `policy-svc (OPA)`, `health-svc`, `claims-svc`, `ingest-svc`, `tpo-svc (V2)`.
* **Storage**: Postgres (OLTP), S3 (docs), Parquet lake for analytics; Redis for cache/queues.
* **Observability**: OpenTelemetry; OpenLineage for data/ML lineage; dashboards (Grafana/Metabase).
* **Security**: SSO/SAML, SCIM, RBAC; encryption in transit & at rest; tenant isolation.

**Event (Ledger) — baseline schema**

```ts
interface LedgerEvent<T=any> {
  event_id: string;              // ULID
  ts: string;                    // ISO8601
  actor: { type: "user"|"agent"|"system"; id: string; name?: string };
  entity: { type: string; id: string; version?: number };
  kind: 
   | "PromotionCreated" | "AccrualScheduled" | "AccrualAdjusted"
   | "ClaimSubmitted" | "ClaimSettled" | "EvidencePackBundled"
   | "PolicyViolationDetected" | "PolicyOverrideApproved"
   | "DataFeedIngested" | "BackfillPerformed";
  payload: T;                    // event-specific body
  causationId?: string;          // command/event id
  correlationId?: string;        // workflow instance id
  signature?: string;            // tamper‑evident (V2)
}
```

**OPA — example policy (margin floor)**

```rego
package vector.policies.promo

default allow = false

allow {
  input.action == "PublishPromotion"
  not violates_margin_floor
}

violates_margin_floor {
  input.metrics.gross_margin < input.policy.min_gross_margin
}

violation_reason := msg {
  violates_margin_floor
  msg := sprintf("Projected GM %v%% is below floor %v%%", [input.metrics.gross_margin, input.policy.min_gross_margin])
}
```

Every policy return includes `violation_reason` used for plain‑English explanations.

**Lineage (OpenLineage) — minimal**

* One event per feed/model/decision write, linking inputs (dataset URIs) to outputs (tables, events) + job facets (schema version, code git‑sha).

---

## 7) Data & ML Plan (V1→V2)

* **V1**: Feature store for health signals; uplift baselines (classical + elastic net) for explainability; holdout tests; bias & drift monitoring.
* **V2**: Uplift/elasticity per product‑store‑week; reason codes; counterfactual what‑ifs; constraint optimizer (Scenario Studio).
* **Prompt/agent safety**: red‑team prompts, offline eval harness, approval gates.

---

## 8) UX Signatures

* **Health Card** on every promo (traffic light + top 3 drivers + next best action)
* **Ledger Diff** (Git‑style) for accruals/approvals
* **Scenario Compare** (side‑by‑side ROI & risk)
* **Evidence Workbench** timeline for claims
* **Integration Command Center** cockpit

---

## 9) Non‑Functional Requirements

* **Performance**: UI p95 < 300ms server, < 2.5s LCP; heavy grids virtualized.
* **Availability**: 99.9% (single region V1), RPO ≤ 15m, RTO ≤ 1h.
* **Security**: SOC2/ISO posture; audit logging; encrypted secrets (KMS).
* **Compliance**: SoX support; data retention policies; PII minimization.
* **Extensibility**: connectors are packageable; policies hot‑reload (with approvals); BYO‑model adapters (V3).

---

## 10) Dev Process & RACI

* **Method**: Scrum (2‑week sprints), trunk‑based dev, PR reviews, storybook for components.
* **CI/CD**: Lint, typecheck, unit/integration tests, OPA tests, seed data, migrations; blue‑green deploys.
* **QA**: Contract tests for connectors; E2E (Playwright); data reconciliation tests (accruals vs settlement).
* **RACI**: Abhisek (A/R), Eng TL (R), Design (R), Data/ML (R), QA (R), Solutions (C), Finance SME (C), Security (C), Exec (I).

**Ticket template (example)**

* **Story**: As a Finance Lead, I can export **as‑of** accrual ledger for date D.
* **Acceptance**: filters by entity/date; CSV & JSON; checksum; signed hash; 10s SLA.
* **Events**: `AccrualAdjusted`, `AccrualExported`.
* **OPA**: only roles FinanceAdmin may export.

---

## 11) Go‑to‑Market & Launch

* **Design partners**: 2–3 CPGs with SAP + NIQ.
* **Pricing**: base platform + add‑ons (TPO/Scenario, Deductions Agent). Seat + volume tier.
* **Onboarding**: wizard for connectors, test payloads, sample policies, sandbox datasets.
* **Collateral**: 3‑min pitch deck, one‑pager, ROI calculator.

**Pilot → GA path**

1. 4‑week pilot: ingest 2 feeds, run accruals/claims, produce audit pack
2. Validate KPIs (recovery rate, accrual delta)
3. Security review + DPA
4. Rollout with feature flags; “auto‑within‑policy” disabled by default

---

## 12) Risk & Mitigation

* **Feed quality/latency** → Integration Center, backfills, schema diff alarms
* **Policy brittleness** → versioned policies, staged rollouts, override trails
* **Model trust** → reason codes, guard‑bands, holdout performance reports
* **Change management** → in‑product tips, scenario compare, easy rollbacks

---

## 13) Open Questions (decide this week)

1. **Initial vertical focus**: CPG only for V1? (recommended).
2. **First ERP & POS**: Confirm **SAP + NIQ**.
3. **GL export format**: Flat file vs API integration (SAP‑specific).
4. **Data residency**: default region + any EU requirement?
5. **SSO**: Okta/Azure AD first?

---

## 14) Appendices

### A) Minimal APIs (V1)

* `POST /api/promotions` create; `PATCH /api/promotions/:id` update
* `POST /api/claims` submit; `POST /api/claims/:id/settle`
* `GET /api/accruals/:id/asof?date=YYYY‑MM‑DD`
* `POST /api/ingest/:feed-id` (signed URL)
* `POST /api/replay` {feed, range} (requires approval)

### B) Example Evidence Pack (bundle)

* Contract PDF, invoice(s), shipment docs, POS extract, policy extracts (OPA), ledger snapshot, rationale text.

### C) Telemetry & Metrics

* Feed freshness/completeness; SLA status
* Agent actions: success/override rates
* Policy violations by type; time‑to‑approval
* ROI uplift; forecast bias; recovery rate; cycle time

---

**Definition of Done (V1)**

* Feature behind a flag, with OPA checks
* Unit/integration/E2E tests green; data contract tests for connectors
* Ledger events defined & emitted; lineage captured
* Docs updated; runbook & dashboards exist
* Security review; PII check; error budgets assigned
# Vector — Full‑Story PRD (v0.2)

**Product**: Vector (Agentic Commercial OS for Trade)
**Owner**: Abhisek (PM/Tech Lead)
**Audience**: Eng, Design, Data/ML, QA, Solutions, Finance SME, Sec/IT
**Status**: Draft for build approval

---

## 0) TL;DR

Vector unifies **TPM + TPO** in one governed system: **plan → execute → live health → claims/settlement → GL**. It is powered by six purposeful, explainable agents: **Promo, Deduction, Finance, Data Steward, Deal Desk, Integration**. Every action lands in an **append‑only Ledger** and every number traces via **Lineage**. Policies are **machine‑enforced (OPA)** with human overrides logged.

**Primary outcomes**: accrual accuracy ↑, deduction recovery ↑, ROI ↑, time‑to‑value ↓, and audit confidence ↑.

---

## 1) Goals & Non‑Goals

**Goals**

1. Ship a governed TPM/TPO loop (V1) that Finance will trust and Sales will use daily.
2. Reduce claims cycle time and leakage via Evidence Packs + Deduction Agent.
3. Provide live promotion health with reasoned actions (not a black box).
4. Make integrations observable + self‑healing to shrink go‑live risk.

**Non‑Goals (V1)**

* Full multi‑entity tax/multi‑currency rollups (V3).
* BYO‑model marketplace (V3).
* Unbounded autonomy: all automation is policy‑bounded with approvals.

---

## 2) Personas & JTBD

* **Trade Finance Lead (Dana)** — Always‑live liability; fast audits; clean GL hooks.
* **Trade Manager / Sales (Sam)** — Plan promos, see drift, apply best actions quickly.
* **Deductions Analyst (Riley)** — Classify/match deductions; assemble evidence; maximize recovery.
* **Data/IT Owner (Alex)** — Wire feeds; enforce quality; watch SLAs; prove lineage.

---

## 3) Scope (V1) — What we will deliver end‑to‑end

* **Planning & Funds**: calendar + grid, accrual schedules, approvals (OPA).
* **Live Promotion Health v1**: plan vs actuals, top drivers, next best actions.
* **Accruals & Claims**: intake (EDI 852/810/812 + manual), Evidence Pack v0, settlement + GL export.
* **Ledger** (event‑sourced) with **Ledger Diff** view.
* **Policy‑as‑Code (OPA) v1** with plain‑English explanations.
* **Integration Command Center v1**: feed freshness/completeness, schema diffs, replay/backfill.
* **Connectors**: SAP (ERP) + NIQ (POS) first.

Out of scope for V1: Scenario Studio optimizer, Auto‑within‑Policy for Promo/Deduction (V3).

---

## 4) Success Metrics (KPIs)

* **Accrual accuracy**: |accrual – settlement| / settlement ≤ 3% (pilot)
* **Deduction recovery rate**: +10–15% vs baseline; **cycle time** −30%
* **Promo ROI uplift**: +3–5% (pilot) with **forecast bias** ↓
* **Time‑to‑first‑integration**: < 3 days; **% feeds within SLA** ≥ 95%
* **Override rate on agent recs**: trending ↓ month‑over‑month

---

## 5) The Six Agents (included)

**All six are in scope and modeled below.** Each agent supports operating modes: **Assist → Recommend → Auto‑with‑Approval → Auto‑within‑Policy (V3)**. All actions emit rationale; all side effects are ledgered.

### 5.1 Promo Agent

* **Purpose**: Keep promos on track; detect drift; propose edits; run what‑ifs.
* **Triggers**: New POS/price signal; variance > policy threshold; weekly review.
* **Signals**: POS pace, distribution, competitor pricing, weather/calendar.
* **Skills**: Health compute, “what changed” diff, action proposals (e.g., adjust depth/display, shift budget).
* **Guardrails (OPA)**: margin floors, budget caps, approval routing by risk.
* **Ledger events**: `HealthUpdated`, `ActionProposed`, `ActionApplied`, `PolicyViolationDetected`.
* **Metrics**: forecast bias, realized ROI, rec acceptance rate, time‑to‑action.

### 5.2 Deduction Agent

* **Purpose**: Classify deductions, bundle evidence, match to promos/contracts, recommend recovery/write‑off with EV.
* **Triggers**: New deduction received; unmatched claim; aging threshold.
* **Inputs**: Reason codes, invoices, shipments (ASN/EDI), contracts, prior promos.
* **Outputs**: Evidence Pack, recommendation with EV & confidence.
* **Guardrails**: dispute thresholds; high‑value requires approval.
* **Ledger**: `DeductionClassified`, `EvidencePackBundled`, `RecoveryRecommended`, `RecoveryFiled`.
* **Metrics**: precision/recall, recovery rate, cycle time.

### 5.3 Finance Agent

* **Purpose**: Maintain accrual schedules; alert over/under; prep “as‑of” audit packs.
* **Triggers**: Plan publish, claim settle, period close approach, variance alerts.
* **Guardrails**: SoX checks; approval for adjustments beyond tolerance.
* **Ledger**: `AccrualScheduled`, `AccrualAdjusted`, `AuditPackGenerated`, `GLExportPosted`.
* **Metrics**: accrual accuracy, close time, audit pass.

### 5.4 Data Steward Agent

* **Purpose**: Enforce MDM quality gates; block dirty hierarchies; propose fixes.
* **Triggers**: Ingest at staging; schema drift; failed validations.
* **Guardrails**: block/allow lists; steward approval for merges/splits.
* **Ledger**: `DataFeedIngested`, `SchemaDiffDetected`, `QualityGateFailed`, `RecordFixed`.
* **Metrics**: feed reject rate, time‑to‑fix, %golden records.

### 5.5 Deal Desk Agent

* **Purpose**: Pre‑check new proposals against margin/budget policies; explain violations.
* **Triggers**: Draft promotion submitted/edited.
* **Guardrails**: OPA policy pack; escalation routes.
* **Ledger**: `ProposalChecked`, `PolicyViolationDetected`, `OverrideApproved`.
* **Metrics**: violation rate, approval latency.

### 5.6 Integration Agent

* **Purpose**: Detect late/failed feeds; auto replay/backfill safely; open tickets; emit lineage.
* **Triggers**: SLA breach, checksum mismatch, schema version change.
* **Guardrails**: idempotent replays; sandbox→prod promotion with approvals.
* **Ledger**: `FeedLate`, `ReplayTriggered`, `BackfillPerformed`, `LineageEmitted`.
* **Metrics**: %feeds in SLA, MTTD/MTTR for integrations.

---

## 6) End‑to‑End User Stories & Acceptance

### Story 1 — Plan a promotion and get to live accruals

**As** Sam (Trade Manager) **I want** to create a promo, get approvals, and see accruals start **so that** Finance has live liability.

* **Flow**: Draft → Deal Desk check (OPA) → Approvals → Publish → Ledger writes `PromotionCreated`, `AccrualScheduled` → Finance dashboard shows live balance.
* **Acceptance**: Draft/clone ≤ 2s; policy reasons displayed on any rejection; accrual appears in ≤ 5s after publish; audit trail visible.

### Story 2 — Catch drift and apply a safe action

**As** Sam **I want** to see when POS pace drifts and apply the best action **so that** ROI is protected.

* **Flow**: POS update → Promo Agent computes Health → proposes action with rationale & guard‑band → Sam accepts → policy check → apply → Ledger `ActionApplied` with policy link.
* **Acceptance**: Driver list with confidence; actions are reversible; bias report available; override logged.

### Story 3 — Intake a deduction and recover revenue

**As** Riley **I want** the system to classify deductions and autopack evidence **so that** I can recover funds faster.

* **Flow**: EDI 810 posts → Deduction Agent classifies & bundles Evidence Pack → recommends recovery or write‑off with EV → Riley files dispute → settlement.
* **Acceptance**: Top‑1 classification ≥ 85% (pilot); bundle contains contracts, invoices, shipments, relevant policies; cycle time ↓ 30%.

### Story 4 — Close the month with “as‑of” audit packs

**As** Dana **I want** an as‑of snapshot for any date **so that** audits are fast and accurate.

* **Flow**: Finance Agent compiles events → generates pack (CSV/JSON) → checksum + signature (V2) → GL export.
* **Acceptance**: export in < 10s; reconciles with GL sample; all changes diff‑able.

### Story 5 — Heal a late POS feed safely

**As** Alex **I want** to replay last week’s POS safely with lineage **so that** health is correct without duplication.

* **Flow**: SLA breach → Integration Agent offers Replay/Backfill → sandbox run → approver sign‑off → prod replay → lineage emitted.
* **Acceptance**: no duplicates; lineage shows before/after; health recompute consistent.

---

## 7) UX Scope (Key Surfaces)

* **Planning**: calendar, fast grid, scenario compare, approvals panel.
* **Promo Health**: Health Card (traffic light + top 3 drivers + NBA), Trend chart, Diff pane.
* **Accruals/Claims**: balances view, claim details, Evidence Workbench (timeline, attachments, policy extracts), settlement modal.
* **Governance**: Ledger timeline + **Ledger Diff**; Policy admin (YAML + explanation strings).
* **Integration Center**: feed table (freshness, completeness, status), Replay/Backfill controls, schema diff viewer.

---

## 8) Architecture (V1)

* **Frontend**: Next.js (app/pages), Tailwind; feature flags; role‑based menus.
* **APIs**: GraphQL for product ops; REST for ingest/replay; signed URLs for documents.
* **Services**: `ledger-svc`, `policy-svc (OPA)`, `health-svc`, `claims-svc`, `ingest-svc`, `gl-exporter`.
* **Storage**: Postgres (OLTP), S3 (docs), Parquet lake; Redis (queues/cache).
* **Observability**: OpenTelemetry; OpenLineage; audit logs; dashboards (Grafana/Metabase).
* **Security**: SSO/SAML, SCIM, RBAC; encryption in transit/at rest; tenant isolation.

**Core Ledger Event (baseline)**

```ts
interface LedgerEvent<T=any> {
  event_id: string; ts: string; actor: { type: "user"|"agent"|"system"; id: string; name?: string };
  entity: { type: string; id: string; version?: number };
  kind: "PromotionCreated"|"AccrualScheduled"|"AccrualAdjusted"|"ClaimSubmitted"|"ClaimSettled"|"EvidencePackBundled"|"ActionProposed"|"ActionApplied"|"PolicyViolationDetected"|"DataFeedIngested"|"BackfillPerformed"|"GLExportPosted";
  payload: T; causationId?: string; correlationId?: string; signature?: string;
}
```

**Policy example (OPA, margin floor)**

```rego
package vector.policies.promo

default allow = false

allow { input.action == "PublishPromotion"; not violates_margin_floor }
violates_margin_floor { input.metrics.gross_margin < input.policy.min_gross_margin }
violation_reason := sprintf("Projected GM %v%% is below floor %v%%", [input.metrics.gross_margin, input.policy.min_gross_margin])
```

---

## 9) APIs (V1 Minimal)

* `POST /api/promotions` (create) → `PromotionCreated`
* `PATCH /api/promotions/:id` (update)
* `POST /api/policies/check` (returns allow/deny + reason)
* `POST /api/claims` (submit) → `ClaimSubmitted`
* `POST /api/claims/:id/settle` → `ClaimSettled`
* `GET /api/accruals/:promoId/asof?date=YYYY-MM-DD`
* `POST /api/ingest/:feed` (signed URL)
* `POST /api/replay` {feed, range} (requires approval) → `BackfillPerformed`

---

## 10) Integrations

* **ERP (SAP first)**: GL exports, vendor master, promo IDs.
* **POS (NIQ first)**: weekly/daily pace.
* **EDI**: 852 (product movement), 810 (invoice), 812 (credit/debit memo).
* **Data clouds**: S3, BigQuery, Snowflake (batch extracts).
  **SLA**: freshness targets (POS ≤ 24h; invoices ≤ 24h). Checksums; schema versioning.

---

## 11) Security, Compliance, Privacy

* SSO/SAML, SCIM; RBAC down to entity (promo/customer).
* Encryption at rest/in‑transit; key management (KMS).
* PII minimization; data retention policies; audit exports.
* SOC 2 Type II / ISO 27001 roadmap.

---

## 12) QA & Validation

* **Unit/Integration**: services + policy tests (OPA).
* **E2E**: critical paths (stories 1–5) with Playwright.
* **Data validation**: reconciliation jobs (accruals vs settlement).
* **ML eval** (V2): uplift models with holdout; red‑team prompts for agents; rollback plans.

---

## 13) Release Plan (V1, 8 sprints)

1. Foundations (CI/CD, auth, RBAC, design system, seed data)
2. Ledger + OPA skeleton + event catalog
3. Planning grid + approvals + Ledger Diff
4. Claims intake + Evidence Pack scaffold
5. Health v1 + NIQ ingest
6. SAP connector + GL export stub + Integration Center v1
7. Approvals UX + as‑of audit packs
8. Hardening + pilot onboarding + ops runbook

**Exit criteria**: two pilots live; KPIs instrumented; security review passed.

---

## 14) Risks & Mitigations

* Feed quality/latency → Integration Center, backfills, schema diff alarms.
* Policy brittleness → policy versioning, staged rollouts, override trails.
* Trust in recs → reason codes, guard‑bands, holdout performance.
* Change management → in‑product tips, scenario compare, easy rollbacks.

---

## 15) Open Questions (for sign‑off)

1. Confirm **SAP + NIQ** as first connectors.
2. V1 GL export format (flat file vs API).
3. Data residency (US only? EU needed?).
4. SSO provider priority (Okta vs Azure AD).
5. KPI targets per pilot customer.

---

## 16) Appendices

* **Evidence Pack contents**: contracts, invoices, shipments, POS extract, policy extracts, ledger snapshot, rationale.
* **Glossary**: TPM/TPO, OPA, Lineage, SLA, EV (expected value), As‑of.
* **Telemetry**: feed freshness, completeness, error rate; agent rec acceptance; violation counts; ROI uplift; recovery rate.
