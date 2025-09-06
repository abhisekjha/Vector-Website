import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { Container, Button } from "../ui/SharedComponents";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-semibold leading-tight text-black sm:text-6xl font-playfair">
            One platform to orchestrate trade workflows end-to-end
          </h1>
          <p className="mb-8 text-xl text-black/70">
            Plan → Execute → Settle with agentic automation, policy guardrails, and an audit-grade ledger.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#demo" variant="primary">
              See a demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#architecture" variant="ghost">
              Read the architecture <FileText className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
