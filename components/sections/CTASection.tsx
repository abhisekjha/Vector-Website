import React from "react";
import { ArrowRight, Users } from "lucide-react";
import { Container, Button } from "../ui/SharedComponents";

export const CTASection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-black py-16 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl font-playfair">
            Ready to transform your trade operations?
          </h2>
          <p className="mb-8 text-xl text-white/80">
            Join forward-thinking CPG companies using Vector to automate workflows, 
            improve accuracy, and unlock millions in savings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#demo" variant="dark">
              See a demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="ghost" className="border-white/20 text-white hover:bg-white/10">
              Talk to sales <Users className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
