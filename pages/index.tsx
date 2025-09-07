import Head from "next/head";
import VectorLanding from "@/components/VectorLanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vector — Direction. Magnitude. ROI.</title>
        <meta name="description" content="Direction. Magnitude. ROI. Next-generation Trade Promotion Management platform with agentic automation, policy guardrails, and an audit-grade ledger." />
        <meta name="keywords" content="AI, automation, trade management, CPG, accruals, claims, workflow, Vector" />
        <meta property="og:title" content="Vector — Direction. Magnitude. ROI." />
        <meta property="og:description" content="Direction. Magnitude. ROI. Next-generation Trade Promotion Management platform with agentic automation, policy guardrails, and an audit-grade ledger." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vector.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vector — Direction. Magnitude. ROI." />
        <meta name="twitter:description" content="Direction. Magnitude. ROI. Next-generation Trade Promotion Management platform with agentic automation, policy guardrails, and an audit-grade ledger." />
        <link rel="canonical" href="https://vector.com" />
      </Head>
      <VectorLanding />
    </>
  );
}
