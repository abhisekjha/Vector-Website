import Head from "next/head";
import VectorLandingNew from "@/components/VectorLandingNew";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vector — Direction. Magnitude. ROI.</title>
        <meta name="description" content="Agentic commercial OS for trade: plan, optimize, and settle with real-time intelligence and an audit-grade ledger." />
        <meta name="keywords" content="AI, automation, trade management, CPG, accruals, claims, workflow, Vector" />
        <meta property="og:title" content="Vector — AI-Powered Workflow Automation" />
        <meta property="og:description" content="Direction. Magnitude. ROI. Transform trade operations with intelligent automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vector.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vector — AI-Powered Workflow Automation" />
        <meta name="twitter:description" content="Direction. Magnitude. ROI. Transform trade operations with intelligent automation." />
        <link rel="canonical" href="https://vector.com" />
      </Head>
      <VectorLandingNew />
    </>
  );
}
