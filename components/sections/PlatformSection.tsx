import React, { useState, useEffect } from "react";
import { Container } from "../ui/SharedComponents";
import { 
  TrendingUp, 
  FileText, 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  Brain,
  Database,
  Zap,
  Eye
} from "lucide-react";

// Vector Platform Architecture - Enhanced with Vector-specific layers
const VectorPlatformArchitecture: React.FC = () => {
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
        {/* Floating data particles */}
        <div className="absolute inset-0 w-[600px] h-[500px]">
          {Array.from({ length: 12 }, (_, i) => {
            const x = 15 + i * 8 + Math.sin(time + i) * 6;
            const y = 15 + (i % 4) * 25 + Math.cos(time * 0.8 + i) * 4;
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            );
          })}
        </div>

        {/* Vector Platform Architecture */}
        <svg viewBox="0 0 700 600" className="h-[500px] w-[600px]">
          <defs>
            {/* Enhanced gradients for Vector layers */}
            <linearGradient id="vectorAppGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="vectorAgentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="vectorPolicyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="vectorLedgerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="vectorIntegrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>

            {/* Enhanced shadows and effects */}
            <filter id="vectorShadow">
              <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="rgba(0,0,0,0.2)"/>
            </filter>
            <filter id="vectorGlow">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="rgba(59, 130, 246, 0.3)"/>
            </filter>
          </defs>
          
          {/* Bottom layer - Integrations (ERP, POS, EDI, NIQ/Circana) */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="60,450; 61,449; 60,450"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="280" 
                height="60" 
                fill="url(#vectorIntegrationGradient)" 
                rx="8"
                filter="url(#vectorShadow)"
                opacity="0.9"
              />
              <text x="140" y="38" textAnchor="middle" className="text-sm font-bold fill-white">
                INTEGRATIONS
              </text>
              <text x="140" y="52" textAnchor="middle" className="text-xs fill-white/80">
                ERP • POS • EDI • NIQ/Circana
              </text>
            </g>
          </g>
          
          {/* Vector Ledger - Foundation layer */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="80,370; 81,369; 80,370"
              dur="4.5s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="260" 
                height="60" 
                fill="url(#vectorLedgerGradient)" 
                rx="8"
                filter="url(#vectorShadow)"
                opacity="0.95"
              />
              <text x="130" y="38" textAnchor="middle" className="text-sm font-bold fill-white">
                VECTOR LEDGER
              </text>
              <text x="130" y="52" textAnchor="middle" className="text-xs fill-white/80">
                Audit-grade • Immutable • As-of replay
              </text>
            </g>
          </g>
          
          {/* Policy & Guardrails Layer */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="100,290; 101,289; 100,290"
              dur="4s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="240" 
                height="60" 
                fill="url(#vectorPolicyGradient)" 
                rx="8"
                filter="url(#vectorShadow)"
                opacity="0.9"
              />
              <text x="120" y="38" textAnchor="middle" className="text-sm font-bold fill-white">
                POLICY & GUARDRAILS
              </text>
              <text x="120" y="52" textAnchor="middle" className="text-xs fill-white/80">
                Margin floors • Budget caps • Approvals
              </text>
            </g>
          </g>

          {/* Eight Specialized Agents Layer */}
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
                width="220" 
                height="60" 
                fill="url(#vectorAgentGradient)" 
                rx="8"
                filter="url(#vectorShadow)"
                opacity="0.95"
              />
              <text x="110" y="38" textAnchor="middle" className="text-sm font-bold fill-white">
                EIGHT SPECIALIZED AGENTS
              </text>
              <text x="110" y="52" textAnchor="middle" className="text-xs fill-white/80">
                Promo • Claims • Accruals • DQ • Policy • Integration • Contract • Insights
              </text>
            </g>
          </g>
          
          {/* Top layer - Vector Applications */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="140,130; 141,129; 140,130"
              dur="3s"
              repeatCount="indefinite"
            />
            <g transform="rotate(-30) skewX(30)">
              <rect 
                width="200" 
                height="60" 
                fill="url(#vectorAppGradient)" 
                rx="8"
                filter="url(#vectorGlow)"
                opacity="0.95"
              />
              <text x="100" y="38" textAnchor="middle" className="text-sm font-bold fill-white">
                VECTOR APPLICATIONS
              </text>
              <text x="100" y="52" textAnchor="middle" className="text-xs fill-white/80">
                Planning • Accruals • Claims • Settlement
              </text>
            </g>
          </g>

          {/* Operating Loop Visualization */}
          <g transform="translate(450, 200)">
            <circle cx="0" cy="0" r="80" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3">
              <animate attributeName="stroke-dasharray" values="0,502;251,251;0,502" dur="4s" repeatCount="indefinite"/>
            </circle>
            <text x="0" y="-5" textAnchor="middle" className="text-xs font-semibold fill-blue-600">
              OPERATING LOOP
            </text>
            <text x="0" y="8" textAnchor="middle" className="text-xs fill-blue-600">
              Sense → Explain → Simulate
            </text>
            <text x="0" y="20" textAnchor="middle" className="text-xs fill-blue-600">
              Check → Act → Log → Learn
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

// Vector Agent Ecosystem - Shows agent interactions and Evidence Packs
const VectorAgentEcosystem: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const animate = () => {
      setTime(prev => prev + 0.02);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const agents = [
    { name: 'Promo Agent', icon: TrendingUp, color: '#3b82f6', x: 100, y: 100 },
    { name: 'Claims Agent', icon: FileText, color: '#10b981', x: 300, y: 100 },
    { name: 'Accruals Agent', icon: BarChart3, color: '#8b5cf6', x: 500, y: 100 },
    { name: 'Data Quality Agent', icon: Shield, color: '#f59e0b', x: 100, y: 250 },
    { name: 'Policy Agent', icon: Users, color: '#ef4444', x: 300, y: 250 },
    { name: 'Integration Agent', icon: Settings, color: '#06b6d4', x: 500, y: 250 },
    { name: 'Contract Agent', icon: Brain, color: '#84cc16', x: 200, y: 400 },
    { name: 'Insights Agent', icon: Eye, color: '#f97316', x: 400, y: 400 }
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Floating evidence particles */}
        <div className="absolute inset-0 w-[600px] h-[500px]">
          {Array.from({ length: 8 }, (_, i) => {
            const x = 20 + i * 15 + Math.sin(time + i) * 10;
            const y = 20 + (i % 3) * 30 + Math.cos(time * 0.6 + i) * 8;
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-green-400/40 rounded-full animate-pulse"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            );
          })}
        </div>

        <svg viewBox="0 0 700 600" className="h-[500px] w-[600px]">
          <defs>
            <filter id="agentGlow">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="rgba(59, 130, 246, 0.4)"/>
            </filter>
            <filter id="evidenceGlow">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="rgba(16, 185, 129, 0.3)"/>
            </filter>
          </defs>

          {/* Vector Ledger at the center */}
          <g transform="translate(300, 300)">
            <circle cx="0" cy="0" r="60" fill="#8b5cf6" opacity="0.9" filter="url(#agentGlow)">
              <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite"/>
            </circle>
            <text x="0" y="-5" textAnchor="middle" className="text-xs font-bold fill-white">
              VECTOR
            </text>
            <text x="0" y="8" textAnchor="middle" className="text-xs font-bold fill-white">
              LEDGER
            </text>
            <text x="0" y="20" textAnchor="middle" className="text-xs fill-white/80">
              Audit Trail
            </text>
          </g>

          {/* Agent nodes */}
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            const angle = (index * 45) * Math.PI / 180;
            const radius = 120;
            const x = 300 + Math.cos(angle) * radius;
            const y = 300 + Math.sin(angle) * radius;
            
            return (
              <g key={agent.name} transform={`translate(${x}, ${y})`}>
                {/* Agent circle */}
                <circle cx="0" cy="0" r="35" fill={agent.color} opacity="0.9" filter="url(#agentGlow)">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
                </circle>
                
                {/* Agent icon */}
                <g transform="translate(-8, -8)">
                  <IconComponent className="h-4 w-4 fill-white" />
                </g>
                
                {/* Agent name */}
                <text x="0" y="25" textAnchor="middle" className="text-xs font-semibold fill-white">
                  {agent.name.split(' ')[0]}
                </text>
                
                {/* Connection line to Vector Ledger */}
                <line 
                  x1="0" y1="0" 
                  x2={300 - x} y2={300 - y} 
                  stroke={agent.color} 
                  strokeWidth="2" 
                  opacity="0.6"
                >
                  <animate attributeName="stroke-dasharray" values="0,100;50,50;0,100" dur="3s" repeatCount="indefinite"/>
                </line>
              </g>
            );
          })}

          {/* Evidence Pack visualization */}
          <g transform="translate(50, 50)">
            <rect width="120" height="80" fill="#10b981" opacity="0.9" rx="8" filter="url(#evidenceGlow)">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            <text x="60" y="20" textAnchor="middle" className="text-xs font-bold fill-white">
              EVIDENCE PACK
            </text>
            <text x="60" y="35" textAnchor="middle" className="text-xs fill-white/80">
              Contract excerpts
            </text>
            <text x="60" y="48" textAnchor="middle" className="text-xs fill-white/80">
              Invoices • ASN
            </text>
            <text x="60" y="61" textAnchor="middle" className="text-xs fill-white/80">
              Policy cites
            </text>
          </g>

          {/* Operating modes callout */}
          <g transform="translate(500, 50)">
            <rect width="140" height="100" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="8" opacity="0.95">
              <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite"/>
            </rect>
            <text x="70" y="20" textAnchor="middle" className="text-xs font-bold fill-black">
              OPERATING MODES
            </text>
            <text x="70" y="35" textAnchor="middle" className="text-xs fill-black/70">
              Assist
            </text>
            <text x="70" y="48" textAnchor="middle" className="text-xs fill-black/70">
              Recommend
            </text>
            <text x="70" y="61" textAnchor="middle" className="text-xs fill-black/70">
              Auto + Approval
            </text>
            <text x="70" y="74" textAnchor="middle" className="text-xs fill-black/70">
              Auto within Policy
            </text>
          </g>

          {/* Data flow arrows */}
          <g transform="translate(200, 150)">
            <path d="M 0 0 Q 50 25 100 0" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7">
              <animate attributeName="stroke-dasharray" values="0,150;75,75;0,150" dur="4s" repeatCount="indefinite"/>
            </path>
            <text x="50" y="-5" textAnchor="middle" className="text-xs fill-blue-600">
              Data Flow
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export const PlatformSection: React.FC = () => {
  return (
    <>
      {/* Vector Platform Architecture */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] items-center">
            {/* Left side - Vector Platform Architecture */}
            <div className="flex items-center justify-center">
              <VectorPlatformArchitecture />
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl playfair-display-600">
                Built on Vector's opinionated foundation
              </h2>
              <p className="mb-4 text-black/70">
                Vector transforms trade operations with a comprehensive architecture built on five core pillars: 
                Agentic Core, Vector Ledger, Policy-as-Code, Lineage & Observability, and Connectors & Composability.
              </p>
              <p className="mb-4 text-black/70">
                The Vector Ledger provides an audit-grade record that explains every decision, while the eight specialized agents 
                work together in the operating loop: <strong>Sense → Explain → Simulate → Check → Act → Log → Learn</strong>.
              </p>
              <p className="text-black/70">
                This ensures speed with safety: fast enough to catch issues mid-flight, strict enough to satisfy audit and finance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vector Agent Ecosystem */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] items-center">
            {/* Left side - Vector Agent Ecosystem */}
            <div className="flex items-center justify-center">
              <VectorAgentEcosystem />
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl playfair-display-600">
                Eight specialized agents working in harmony
              </h2>
              <p className="mb-4 text-black/70">
                Each agent specializes in a specific aspect of trade promotion management, all connected through the Vector Ledger 
                and working together to deliver comprehensive automation and insights.
              </p>
              <p className="mb-4 text-black/70">
                The Claims/Deduction Agent assembles Evidence Packs that compile all documents needed to resolve claims fast, 
                while the Promo Agent detects drift and simulates scenarios to optimize ROI.
              </p>
              <p className="text-black/70">
                All agents operate in four modes: Assist, Recommend, Auto + Approval, and Auto within Policy—ensuring 
                human oversight where needed while maximizing automation where safe.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
