import React, { useState, useEffect } from "react";
import { Container } from "../ui/SharedComponents";

// Enhanced Isometric Stack - keeping original style but with life
const EnhancedIsometricStack: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const animate = () => {
      setTime(prev => prev + 0.02);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Floating particles */}
        <div className="absolute inset-0 w-[500px] h-[400px]">
          {Array.from({ length: 8 }, (_, i) => {
            const x = 20 + i * 15 + Math.sin(time + i) * 8;
            const y = 20 + (i % 3) * 30 + Math.cos(time * 0.7 + i) * 6;
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            );
          })}
        </div>

        {/* Clean Isometric layered diagram - matching second diagram style */}
        <svg viewBox="0 0 600 500" className="h-[400px] w-[500px]">
          <defs>
            {/* Gradients for each layer - same as second diagram */}
            <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="advancedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="configGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Subtle shadow - same as second diagram */}
            <filter id="subtleShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.15)"/>
            </filter>
          </defs>
          
          {/* Bottom layer - Integrations */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="80,350; 81,349; 80,350"
              dur="4s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="240" 
                height="50" 
                fill="url(#integrationGradient)" 
                rx="6"
                filter="url(#subtleShadow)"
                opacity="0.8"
              />
              <text x="120" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                INTEGRATIONS
              </text>
            </g>
          </g>
          
          {/* Platform AI layer */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="100,280; 102,278; 100,280"
              dur="3s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="220" 
                height="50" 
                fill="url(#platformGradient)" 
                rx="6"
                filter="url(#subtleShadow)"
                opacity="0.95"
              />
              <text x="110" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                PLATFORM AI
              </text>
            </g>
          </g>
          
          {/* Configuration Layer */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="120,210; 121,209; 120,210"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="200" 
                height="50" 
                fill="url(#configGradient)" 
                rx="6"
                filter="url(#subtleShadow)"
                opacity="0.9"
              />
              <text x="100" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                CONFIGURATION LAYER
              </text>
            </g>
          </g>

          {/* Advanced layer */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="140,140; 141,139; 140,140"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="180" 
                height="50" 
                fill="url(#advancedGradient)" 
                rx="6"
                filter="url(#subtleShadow)"
                opacity="0.9"
              />
              <text x="90" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                ADVANCED
              </text>
            </g>
          </g>
          
          {/* Top layer - Applications */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="160,70; 161,69; 160,70"
              dur="2s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="160" 
                height="50" 
                fill="url(#appGradient)" 
                rx="6"
                filter="url(#subtleShadow)"
                opacity="0.9"
              />
              <text x="80" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                APPLICATIONS
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

// Enhanced AI Platform with subtle callout animation
const EnhancedAIPlatformIsometric: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Floating particles */}
        <div className="absolute inset-0 w-[500px] h-[400px]">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-pulse"
              style={{
                left: `${30 + i * 12}%`,
                top: `${40 + (i % 2) * 20}%`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>

        {/* Clean Isometric diagram with Platform AI highlight and better spacing */}
        <svg viewBox="0 0 600 500" className="h-[400px] w-[500px]">
          <defs>
            {/* Enhanced gradients */}
            <linearGradient id="appGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="configGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="platformGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="integrationGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Enhanced glow for Platform AI */}
            <filter id="platformGlow">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="rgba(245, 158, 11, 0.4)"/>
            </filter>
            
            <filter id="subtleShadow2">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.15)"/>
            </filter>
          </defs>
          
          {/* Bottom layer - Integrations with clean spacing */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="80,350; 81,349; 80,350"
              dur="4s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="240" 
                height="50" 
                fill="url(#integrationGradient2)" 
                rx="6"
                filter="url(#subtleShadow2)"
                opacity="0.8"
              />
              <text x="120" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                INTEGRATIONS
              </text>
            </g>
          </g>
          
          {/* Platform AI layer - HIGHLIGHTED with enhanced spacing */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="100,280; 102,278; 100,280"
              dur="3s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="220" 
                height="50" 
                fill="url(#platformGradient2)" 
                rx="6"
                filter="url(#platformGlow)"
                opacity="0.95"
              />
              {/* Enhanced pulsing glow */}
              <rect width="220" height="50" fill="rgba(245, 158, 11, 0.3)" rx="6">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/>
              </rect>
              <text x="110" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                PLATFORM AI
              </text>
            </g>
          </g>
          
          {/* Configuration Layer with clean spacing */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="120,210; 121,209; 120,210"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="200" 
                height="50" 
                fill="url(#configGradient2)" 
                rx="6"
                filter="url(#subtleShadow2)"
                opacity="0.9"
              />
              <text x="100" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                CONFIGURATION LAYER
              </text>
            </g>
          </g>
          
          {/* Top layer - Applications with clean spacing */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="140,140; 141,139; 140,140"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="180" 
                height="50" 
                fill="url(#appGradient2)" 
                rx="6"
                filter="url(#subtleShadow2)"
                opacity="0.9"
              />
              <text x="90" y="32" textAnchor="middle" className="text-sm font-semibold fill-white">
                APPLICATIONS
              </text>
            </g>
          </g>
          
          {/* Clean callout for Platform AI */}
          <g transform="translate(400, 200)">
            <rect 
              width="150" 
              height="80" 
              fill="white" 
              stroke="#e5e7eb" 
              strokeWidth="1" 
              rx="8"
              opacity="0.95"
              filter="url(#subtleShadow2)"
            />
            <text x="75" y="20" textAnchor="middle" className="text-sm font-semibold fill-black">
              PLATFORM AI
            </text>
            <text x="75" y="38" textAnchor="middle" className="text-xs fill-black/70">
              LLMs trained on
            </text>
            <text x="75" y="52" textAnchor="middle" className="text-xs fill-black/70">
              logistics documents
            </text>
            <g transform="translate(15, 60)">
              <circle r="2" fill="#f59e0b">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <text x="8" y="4" className="text-xs fill-orange-600">Processing documents</text>
            </g>
          </g>
          
          {/* Clean animated arrow pointing to Platform AI */}
          <path 
            d="M 350 305 L 400 240" 
            stroke="#6b7280" 
            strokeWidth="2" 
            markerEnd="url(#arrowhead2)"
            opacity="0.7"
          >
            <animate attributeName="stroke-dasharray" values="0,12;12,0" dur="2s" repeatCount="indefinite"/>
          </path>
          
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export const PlatformSection: React.FC = () => {
  return (
    <>
      {/* One platform, Multiple solutions - Enhanced Isometric */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] items-center">
            {/* Left side - Enhanced Isometric Stack */}
            <div className="flex items-center justify-center">
              <EnhancedIsometricStack />
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl font-playfair">
                One platform, Multiple solutions—built on AI
              </h2>
              <p className="mb-4 text-black/70">
                Vector transforms trade operations by automating workflows across the entire promotion lifecycle. 
                The Planning, Accruals, and Claims solutions are seamlessly integrated, designed from the ground up 
                with AI at their core—not as an afterthought.
              </p>
              <p className="text-black/70">
                With Vector, you get a comprehensive, AI-powered system that handles all your needs in one place.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefit at immense scale - Enhanced Isometric */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] items-center">
            {/* Left side - Enhanced AI Platform Isometric */}
            <div className="flex items-center justify-center">
              <EnhancedAIPlatformIsometric />
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl font-playfair">
                Benefit at immense scale
              </h2>
              <p className="mb-4 text-black/70">
                The Platform AI layer uses Large Language Models (LLMs) trained on logistics-specific documents 
                to identify document types, content, and conversion formats (units of measure, currencies, time zones).
              </p>
              <p className="text-black/70">
                Platform AI allows customers to benefit from the vast scale and high quality of trained data, 
                capable of processing hundreds of documents per second to enhance operational efficiency.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
