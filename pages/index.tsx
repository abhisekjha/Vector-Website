import Head from "next/head";
import VectorLanding from "@/components/VectorLanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vector — Direction. Magnitude. ROI.</title>
        <meta name="description" content="Agentic commercial OS for trade: plan, optimize, and settle with real-time intelligence and an audit-grade ledger." />
      </Head>
      <VectorLanding />
    </>
  );
}
