# Vector - Next-Generation Trade Promotion Management

> **Trade promotions that optimize themselves.**

Vector is the next-generation Trade Promotion Management (TPM) platform for CPG and retail manufacturers. It plans, optimizes, monitors, and settles trade promotions with agentic automation, policy guardrails, Evidence Packs, and an audit-grade ledger (the Vector Ledger).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
vector/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── sections/        # Page sections
│   └── agents/          # Agent-specific components
├── pages/               # Next.js pages
├── styles/              # Global styles and CSS
├── public/              # Static assets
├── __tests__/           # Test files
└── docs/                # Documentation
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Charts**: Recharts
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel-ready

## 🎨 Design System

Vector uses a custom design system with:
- **Accent Color**: `#D8FF3D` (neon lime)
- **Typography**: Inter + Plus Jakarta Sans + Playfair Display
- **Components**: Modular, accessible UI components
- **Responsive**: Mobile-first design approach

## 🎯 Vector's Vision

- **Eight Specialized Agents**: Promo Agent (optimization), Claims/Deduction Agent (settlement), Contract Intelligence Agent (evidence), Accruals Agent (accounting), Integration Agent (SLA & backfills), Data Quality Agent (DQ), Policy/Guardrail Agent, and Executive Insights Agent (digest)
- **Four Operating Modes**: Assist, Recommend, Auto + Approval, Auto within Policy
- **Operating Loop**: Sense → Explain → Simulate → Check → Act → Log → Learn
- **Vector Ledger**: Audit-grade ledger that explains every decision and enables as-of replay
- **Evidence Packs**: Compile all documents needed to resolve claims fast
- **Policy Guardrails**: Prevent bad decisions and standardize approvals
- **Scenario Studio**: Constraint optimizer for trade planning with what-if analysis
- **Integration Command Center**: SLA monitoring, schema diffs, and automated backfills
- **Expected Outcomes**: Higher ROI, lower leakage, fewer errors, faster cycles

## 📋 Current Implementation Status

### ✅ **Completed (Marketing Website)**
- **8-Agent Architecture**: All agents implemented with detailed descriptions
- **Operating Loop Visualization**: Interactive component showing the 7-step process
- **Scenario Studio Page**: Complete page with constraint optimization examples
- **Integration Command Center**: SLA monitoring and backfill management page
- **Workflow Examples**: Specific examples from vector-description (PR-4JUL, CL-812-0912, NIQ)
- **Blog Content**: 4 articles aligned with Vector vision
- **Product Pages**: Planning, Accruals, Ledger, Platform pages
- **Responsive Design**: Modern UI with Tailwind CSS and Next.js

### 🚧 **Next Steps (Software Development)**
- Backend services implementation
- Database and Vector Ledger development
- Policy engine (OPA) integration
- Real-time data processing
- Integration connectors (SAP, NIQ)
- Agent automation logic

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Environment Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Code Quality
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting
- Jest for testing

## 📄 License

Private - All rights reserved.

---

**Vector** - Transforming trade operations with intelligent automation.
