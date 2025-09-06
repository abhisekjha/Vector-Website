import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';

export const CTASection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-white py-16">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl border border-black/10 bg-black px-8 py-10 text-white md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold playfair-display-600">$1M annual savings & thousands of hours await.</h3>
            <p className="mt-2 max-w-xl text-white/80">Explore how automating workflows can free your team and improve margins. It all starts with a conversation.</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Button href="#demo" variant="dark" showLogo icon={<ArrowRight className="h-4 w-4" />}>
              Book a demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};