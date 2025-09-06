import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionTitle } from '@/components/ui';

// Success Stories Data
const successStories = [
  {
    company: "Navia Freight",
    industry: "Finance",
    quote: "AI now takes care of tasks our staff did not enjoy. The automation required us to optimize our processes and revealed areas for improvement. We now provide better service.",
    author: "Rob Ardesi",
    title: "COO",
    savings: "$850K annually",
    improvement: "40% faster claims processing"
  },
  {
    company: "DSV Global",
    industry: "Logistics",
    quote: "Vector's automation reduced our manual accrual entry by 85%. Our finance team now focuses on strategic analysis instead of data entry.",
    author: "Maria Santos",
    title: "CFO",
    savings: "$1.2M annually", 
    improvement: "85% reduction in manual work"
  },
  {
    company: "Expeditors International",
    industry: "Supply Chain",
    quote: "The platform's integration capabilities allowed us to connect all our disparate systems seamlessly. Real-time visibility across the entire trade process.",
    author: "David Chen",
    title: "VP Operations",
    savings: "$2.1M annually",
    improvement: "3x faster settlement times"
  },
  {
    company: "Wayne Brands",
    industry: "CPG",
    quote: "Trade promotion management used to be our biggest headache. Vector transformed it into our competitive advantage with intelligent automation.",
    author: "Sarah Williams",
    title: "Trade Marketing Director",
    savings: "$950K annually",
    improvement: "60% reduction in errors"
  },
  {
    company: "Stark Foods",
    industry: "Food & Beverage",
    quote: "Policy-bound automation ensures compliance while speeding up our processes. We've eliminated most manual exceptions in our trade workflows.",
    author: "Michael Thompson",
    title: "Finance Director",
    savings: "$750K annually",
    improvement: "90% automation rate"
  },
  {
    company: "NNR Global",
    industry: "Manufacturing",
    quote: "The audit-grade ledger gives us complete confidence in our financial reporting. Vector's AI catches discrepancies we would have missed.",
    author: "Jennifer Lee",
    title: "Controller",
    savings: "$1.1M annually",
    improvement: "99% accuracy rate"
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 150);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => {
    changeSlide(currentIndex === successStories.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    changeSlide(currentIndex === 0 ? successStories.length - 1 : currentIndex - 1);
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="border-t border-black/10 py-16">
      <Container>
        <SectionTitle 
          eyebrow="Customer Success Stories" 
          title="Transforming trade operations across industries" 
          subtitle="See how organizations are achieving millions in savings and operational excellence with Vector's AI-powered automation."
          align="center"
        />
        
        <div 
          className="relative rounded-3xl border border-black/10 bg-white p-8 overflow-hidden shadow-xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Background gradient animation */}
          <div className="absolute inset-0 gradient-blue-green opacity-60 transition-opacity duration-500" />
          
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full animate-pulse animate-delay-1s" />
          </div>
          
          {/* Content */}
          <div className={`relative z-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
            <div className="grid items-center gap-8 md:grid-cols-[1fr,2fr]">
              {/* Left side - Company info */}
              <div className="text-center md:text-left">
                <div className="text-3xl font-semibold text-black mb-2 transform transition-transform duration-300 hover:scale-105 playfair-display-600">
                  {currentStory.company}
                </div>
                <div className="text-xs uppercase tracking-widest text-black/60 mb-4 playfair-display-500">Vector solutions used</div>
                <div className="inline-block rounded-full border border-black/10 px-4 py-2 text-sm font-semibold mb-4 bg-white/80 backdrop-blur playfair-display-600">
                  {currentStory.industry}
                </div>
                
                {/* Metrics */}
                <div className="space-y-3">
                  <div className="rounded-xl bg-gradient-to-r from-green-100 to-blue-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-200/50">
                    <div className="text-lg font-semibold text-green-800 playfair-display-600">{currentStory.savings}</div>
                    <div className="text-sm text-green-700 playfair-display-400">Annual Savings</div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200/50">
                    <div className="text-lg font-semibold text-blue-800 playfair-display-600">{currentStory.improvement}</div>
                    <div className="text-sm text-blue-700 playfair-display-400">Key Improvement</div>
                  </div>
                </div>
              </div>

              {/* Right side - Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-black/20 animate-pulse" />
                <blockquote className="text-lg leading-relaxed text-black mb-4 pl-6 font-semibold playfair-display-500">
                  "{currentStory.quote}"
                </blockquote>
                <div className="text-sm text-black/70 pl-6">
                  <div className="font-semibold text-black playfair-display-600">{currentStory.author}</div>
                  <div className="text-black/60 playfair-display-400">{currentStory.title} at {currentStory.company}</div>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Progress indicators */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 flex-shrink-0 focus-ring ${
                      index === currentIndex 
                        ? 'w-8 bg-black shadow-lg' 
                        : 'w-2 bg-black/20 hover:bg-black/40 hover:w-4'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-black/10 bg-white hover:bg-black/5 transition-all duration-200 hover:scale-110 hover:shadow-lg focus-ring"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="h-5 w-5 text-black/60" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-black/10 bg-white hover:bg-black/5 transition-all duration-200 hover:scale-110 hover:shadow-lg focus-ring"
                  aria-label="Next story"
                >
                  <ChevronRight className="h-5 w-5 text-black/60" />
                </button>
              </div>
            </div>

            {/* Counter and auto-play indicator */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-black/50 playfair-display-400">
                {currentIndex + 1} of {successStories.length}
              </div>
              <div className="flex items-center gap-2 text-xs text-black/40 playfair-display-400">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
