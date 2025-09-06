import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';

const DividerLine: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`h-px w-full bg-white/40 ${className}`} />
);

export const SkyHeroSection: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl">
          <div className="relative grid place-items-center bg-gradient-to-b from-[var(--grad-start)] to-[var(--grad-end)] px-6 py-20 text-center text-white sm:py-28">
            <div className="mx-auto max-w-4xl">
              <DividerLine />
              <h1 className="display mt-6 text-4xl font-semibold sm:text-6xl playfair-display-600">
                $1M annual savings & 2,000 extra hours a month await.
              </h1>
              <DividerLine className="mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-white/90">
                Explore how policy‑bound automation across planning, accruals, and claims compounds into serious annual savings. It all starts with a demo.
              </p>
              <div className="mt-8 flex items-center justify-center">
                <Button href="#demo" variant="dark" showLogo icon={<ArrowRight className="h-4 w-4" />}>
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
