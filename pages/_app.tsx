import type { AppProps } from "next/app";
import Head from "next/head";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Vector - AI-Powered Workflow Automation</title>
        <meta name="description" content="Direction. Magnitude. ROI. AI-powered workflow automation for CPG trade. Drive efficiency, growth, and customer value across the promotion lifecycle." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D8FF3D" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/vector-logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
