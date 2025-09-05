import Head from "next/head";
import PlatformPage from "@/components/PlatformPage";

export default function Platform() {
  return (
    <>
      <Head>
        <title>Platform — Vector</title>
        <meta name="description" content="One platform to orchestrate trade workflows end-to-end with agentic automation, policy guardrails, and an audit-grade ledger." />
      </Head>
      <PlatformPage />
    </>
  );
}
