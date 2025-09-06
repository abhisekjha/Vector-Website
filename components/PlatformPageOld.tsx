import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Database,
  Workflow,
  Zap,
  FileText,
  Settings,
  BarChart3,
  Users,
  Lock,
  Globe,
  Server,
  GitBranch,
  Eye,
  Play,
  AlertTriangle,
  Clock,
  TrendingUp,
  Target,
  ShieldCheck,
  Code,
  Link,
  ChevronDown,
  ChevronRight
} from "lucide-react";

// =============== COMPONENTS ==============================
const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Button: React.FC<{ as?: "a" | "button"; href?: string; variant?: "primary" | "ghost" | "dark"; children: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>> = ({ as = "a", href = "#", variant = "primary", children, ...rest }) => {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : variant === "dark"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-black/10 bg-white hover:bg-black/5";
  const Comp: any = as;
  return (
    <Comp href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </Comp>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: "left" | "center" }> = ({ title, subtitle, align = "left" }) => (
  <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
    <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">{title}</h2>
    {subtitle && <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} text-black/70`}>{subtitle}</p>}
  </div>
);

const PillarCard: React.FC<{ icon: React.ReactNode; title: string; description: string; features: string[] }> = ({ icon, title, description, features }) => (
  <div className="rounded-3xl border border-black/10 bg-white p-8">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="mb-4 text-black/70">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-black/70">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const AgentCard: React.FC<{ 
  name: string; 
  purpose: string; 
  triggers: string[]; 
  skills: string[]; 
  modes: string[];
  icon: React.ReactNode;
}> = ({ name, purpose, triggers, skills, modes, icon }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
    <p className="mb-4 text-sm text-black/70">{purpose}</p>
    
    <div className="space-y-3">
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Triggers</div>
        <div className="text-sm text-black/70">{triggers.join(", ")}</div>
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Skills</div>
        <div className="text-sm text-black/70">{skills.join(", ")}</div>
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Modes</div>
        <div className="flex flex-wrap gap-1">
          {modes.map((mode, i) => (
            <span key={i} className="rounded-full bg-black/5 px-2 py-1 text-xs text-black/70">{mode}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// =============== ADVANCED 3D ISOMETRIC ANIMATION =================
const AgentsAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Continuous animation loop
    const animate = () => {
      setTime(prev => prev + 0.01);
      requestAnimationFrame(animate);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      animate();
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // 3D Isometric components inspired by the reference design
  const components = [
    { 
      id: 'data-processor', 
      x: 15, y: 20, z: 0.8, 
      width: 140, height: 100,
      type: 'Data Processor',
      element: 'grid',
      rotation: 0
    },
    { 
      id: 'ai-brain', 
      x: 75, y: 15, z: 1.2, 
      width: 120, height: 80,
      type: 'AI Neural Network',
      element: 'brain',
      rotation: 45
    },
    { 
      id: 'analytics-engine', 
      x: 80, y: 65, z: 0.9, 
      width: 130, height: 90,
      type: 'Analytics Engine',
      element: 'chart',
      rotation: -30
    },
    { 
      id: 'ml-pipeline', 
      x: 25, y: 75, z: 1.1, 
      width: 110, height: 70,
      type: 'ML Pipeline',
      element: 'pipeline',
      rotation: 15
    },
    { 
      id: 'api-gateway', 
      x: 50, y: 45, z: 0.7, 
      width: 100, height: 60,
      type: 'API Gateway',
      element: 'gateway',
      rotation: -15
    }
  ];

  // Floating gradient orbs
  const orbs = [
    { x: 30, y: 25, size: 80, color: 'from-blue-400 via-purple-500 to-pink-400', speed: 0.5, opacity: 0.3 },
    { x: 70, y: 40, size: 120, color: 'from-cyan-400 via-blue-500 to-purple-500', speed: 0.3, opacity: 0.25 },
    { x: 40, y: 70, size: 60, color: 'from-purple-400 via-pink-500 to-red-400', speed: 0.7, opacity: 0.35 },
    { x: 85, y: 80, size: 45, color: 'from-green-400 via-teal-500 to-blue-400', speed: 0.6, opacity: 0.4 },
    { x: 20, y: 85, size: 70, color: 'from-yellow-400 via-orange-500 to-pink-400', speed: 0.4, opacity: 0.3 }
  ];

  // Particle system for connections
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: 0.2 + Math.random() * 0.3,
    size: 1 + Math.random() * 2
  }));

  // AI Agents for the animation
  const agents = [
    {
      id: 'agent-1',
      x: 20,
      y: 25,
      z: 1.0,
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'agent-2', 
      x: 80,
      y: 20,
      z: 1.2,
      icon: Workflow,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'agent-3',
      x: 75,
      y: 70,
      z: 0.9,
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'agent-4',
      x: 30,
      y: 75,
      z: 1.1,
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'agent-5',
      x: 50,
      y: 50,
      z: 1.3,
      icon: Zap,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const renderComponent = (comp: any) => {
    const floatY = Math.sin(time * comp.z + comp.x * 0.01) * 8;
    const floatX = Math.cos(time * comp.z * 0.8 + comp.y * 0.01) * 4;
    const rotateY = comp.rotation + time * 10 * comp.z;
    
    const parallaxX = isClient ? (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * (comp.z * 0.02) : 0;
    const parallaxY = isClient ? (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * (comp.z * 0.02) : 0;

    return (
      <div
        key={comp.id}
        className="absolute group cursor-pointer"
        style={{
          left: `${comp.x}%`,
          top: `${comp.y}%`,
          transform: `translate(-50%, -50%) translate(${floatX + parallaxX}px, ${floatY + parallaxY}px) perspective(800px) rotateX(12deg) rotateY(${rotateY}deg)`,
          zIndex: Math.round(comp.z * 100),
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Isometric shadow */}
        <div 
          className="absolute bg-black/20 blur-lg"
          style={{ 
            width: comp.width, 
            height: comp.height,
            borderRadius: '24px',
            transform: 'translateZ(-20px) translateY(20px) translateX(10px) rotateX(90deg)',
            transformOrigin: 'center bottom'
          }} 
        />
        
        {/* Main 3D component */}
        <div 
          className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-xl group-hover:border-cyan-400/50 transition-all duration-700 shadow-2xl"
          style={{ 
            width: comp.width, 
            height: comp.height,
            boxShadow: `
              0 25px 50px rgba(0,0,0,0.4),
              0 0 0 1px rgba(255,255,255,0.1) inset,
              0 0 30px rgba(59, 130, 246, 0.1)
            `,
            transform: 'translateZ(0px)'
          }}
        >
          {/* Glowing top edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          
          {/* Component-specific content */}
          <div className="absolute inset-4">
            {comp.element === 'grid' && (
              <div className="grid grid-cols-10 gap-1 h-full opacity-80">
                {[...Array(50)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-br from-blue-400/60 to-cyan-400/40 rounded-sm animate-pulse transform hover:scale-110 transition-transform" 
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: `${1.5 + Math.random()}s`
                    }}
                  />
                ))}
              </div>
            )}
            
            {comp.element === 'brain' && (
              <div className="flex items-center justify-center h-full">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-70 animate-pulse" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-white to-purple-200 opacity-90 animate-pulse" style={{ animationDelay: '1s' }} />
                  
                  {/* Neural network lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos(i * Math.PI / 4 + time) * 30}%`}
                        y2={`${50 + Math.sin(i * Math.PI / 4 + time) * 30}%`}
                        stroke="rgba(99, 102, 241, 0.6)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            )}
            
            {comp.element === 'chart' && (
              <div className="flex items-end justify-center gap-2 h-full pb-4">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-t from-pink-500 via-purple-400 to-cyan-400 rounded-t-lg shadow-lg animate-pulse"
                    style={{ 
                      width: '12px', 
                      height: `${30 + Math.sin(time * 2 + i * 0.5) * 20}px`,
                      animationDelay: `${i * 0.15}s`,
                      transform: 'translateZ(2px)'
                    }}
                  />
                ))}
              </div>
            )}
            
            {comp.element === 'pipeline' && (
              <div className="flex items-center justify-center h-full">
                <div className="flex gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-4 h-12 bg-gradient-to-t from-blue-500 via-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg"
                      style={{ 
                        animationDelay: `${i * 0.25}s`,
                        transform: `translateY(${Math.sin(time + i) * 4}px) translateZ(${i * 2}px)`
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {comp.element === 'gateway' && (
              <div className="flex items-center justify-center h-full">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-2 rounded-lg bg-slate-800 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          {/* Component label */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="px-4 py-2 bg-black/90 backdrop-blur-xl text-white text-sm rounded-lg border border-white/20 shadow-xl whitespace-nowrap">
              {comp.type}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative mb-16 h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/20 border border-white/10">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => {
          const x = (particle.x + Math.sin(time * particle.speed + particle.id) * 10) % 100;
          const y = (particle.y + Math.cos(time * particle.speed * 0.7 + particle.id) * 8) % 100;
          
          return (
            <div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: particle.size,
                height: particle.size,
                filter: 'blur(0.5px)',
                animationDelay: `${particle.id * 0.1}s`
              }}
            />
          );
        })}
      </div>

      {/* Floating gradient orbs */}
      {orbs.map((orb, i) => {
        const floatY = Math.sin(time * orb.speed + i * 2) * 30;
        const floatX = Math.cos(time * orb.speed * 0.7 + i * 2) * 20;
        
        return (
          <div
            key={`orb-${i}`}
            className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-xl animate-pulse`}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              opacity: orb.opacity,
              transform: `translate(-50%, -50%) translate(${floatX}px, ${floatY}px)`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        );
      })}

      {/* 3D Isometric components */}
      {components.map(renderComponent)}

      {/* Connection network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
        <defs>
          <linearGradient id="connectionFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.9)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.7)" />
          </linearGradient>
          
          <filter id="connectionGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic connection paths */}
        {components.map((comp, i) => {
          const nextComp = components[(i + 1) % components.length];
          const midX = (comp.x + nextComp.x) / 2 + Math.sin(time + i) * 5;
          const midY = (comp.y + nextComp.y) / 2 + Math.cos(time + i) * 5;
          
          return (
            <g key={`connection-${i}`}>
              <path
                d={`M ${comp.x * 7} ${comp.y * 7} Q ${midX * 7} ${midY * 7} ${nextComp.x * 7} ${nextComp.y * 7}`}
                stroke="url(#connectionFlow)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                filter="url(#connectionGlow)"
                className="animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + i * 0.5}s`
                }}
              />
              
              {/* Animated particles along connections */}
              <circle r="4" fill="rgba(99, 102, 241, 0.9)" filter="url(#connectionGlow)">
                <animateMotion dur={`${5 + i}s`} repeatCount="indefinite">
                  <path d={`M ${comp.x * 7} ${comp.y * 7} Q ${midX * 7} ${midY * 7} ${nextComp.x * 7} ${nextComp.y * 7}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Vector branding */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white/70 backdrop-blur-xl bg-black/20 px-4 py-2 rounded-xl border border-white/10">
        <img src="/vector-logo.svg" alt="Vector" className="h-6 w-6 opacity-80" />
        <span className="text-sm font-medium">Vector AI Platform</span>
      </div>

      {/* Performance indicator */}
      <div className="absolute top-6 right-6 backdrop-blur-xl bg-black/20 px-4 py-2 rounded-xl border border-white/10">
        <div className="flex items-center gap-2 text-white/70">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium">Live Processing</span>
        </div>
      </div>
    </div>
  );
};
    <div className="relative mb-16 h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/20 border border-white/10">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgb(139 92 246)" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Connection lines - subtle and elegant */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139 92 246)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Curved connections between agents */}
        <path 
          d="M 15 20 Q 50 15 80 15" 
          stroke="url(#connectionGradient)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-pulse"
        />
        <path 
          d="M 80 15 Q 85 40 85 65" 
          stroke="url(#connectionGradient)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path 
          d="M 85 65 Q 65 75 45 80" 
          stroke="url(#connectionGradient)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <path 
          d="M 45 80 Q 25 75 10 70" 
          stroke="url(#connectionGradient)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '3s' }}
        />
        <path 
          d="M 60 35 Q 35 30 15 20" 
          stroke="url(#connectionGradient)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      {/* Agent nodes with Scale.ai styling */}
      {agents.map((agent: any, i: number) => {
        const IconComponent = agent.icon;
        const parallaxX = isClient ? (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * (agent.z / 1000) : 0;
        const parallaxY = isClient ? (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * (agent.z / 1000) : 0;
        
        return (
          <div
            key={agent.id}
            className="absolute transition-all duration-500 ease-out group cursor-pointer"
            style={{
              left: `${agent.x}%`,
              top: `${agent.y}%`,
              transform: `translate(-50%, -50%) translate(${parallaxX}px, ${parallaxY}px)`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            {/* Outer glow ring */}
            <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r ${agent.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 animate-pulse`} />
            
            {/* Main container - isometric style */}
            <div className="relative">
              {/* 3D shadow effect */}
              <div className="absolute top-1 left-1 w-16 h-16 rounded-2xl bg-black/20 blur-sm" />
              
              {/* Main card */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/10 backdrop-blur-xl group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-2xl`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white/90 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Subtle inner border */}
                <div className="absolute inset-0.5 rounded-xl border border-white/5" />
              </div>
            </div>

            {/* Label with Scale.ai style */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="px-3 py-2 bg-slate-900/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl min-w-max">
                <div className="text-sm font-medium text-white">{agent.type}</div>
                <div className="text-xs text-white/60 mt-0.5">{agent.description}</div>
              </div>
              {/* Tooltip arrow */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900/95 border-l border-t border-white/10 rotate-45" />
            </div>
          </div>
        );
      })}

      {/* Central Vector Core - enhanced */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl animate-pulse" />
          
          {/* 3D shadow */}
          <div className="absolute top-2 left-2 w-20 h-20 rounded-full bg-black/30 blur-lg" />
          
          {/* Main core */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-300">
            {/* Inner gradient */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
            
            {/* Center icon */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-inner">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Rotating rings */}
            <div className="absolute inset-0 w-20 h-20 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-2 w-16 h-16 rounded-full border border-dashed border-white/5 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          </div>
          
          {/* Core label */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="px-4 py-2 bg-slate-900/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl">
              <div className="text-sm font-semibold text-white">Vector Core</div>
              <div className="text-xs text-white/60">AI Orchestration Hub</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const FlowStep: React.FC<{ title: string; description: string; icon: React.ReactNode; isLast?: boolean }> = ({ title, description, icon, isLast = false }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-black/70">{description}</p>
    </div>
    {!isLast && <ArrowRight className="mt-3 h-5 w-5 text-black/40" />}
  </div>
);

const ConnectorLogo: React.FC<{ name: string; category: string }> = ({ name, category }) => (
  <div className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70">
    <span className="font-medium">{name}</span>
    <span className="ml-2 text-xs text-black/50">({category})</span>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void }> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-black/10">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 text-left"
    >
      <span className="font-semibold">{question}</span>
      {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
    {isOpen && (
      <div className="pb-4 text-black/70">
        {answer}
      </div>
    )}
  </div>
);

// =============== MAIN COMPONENT ==============================
export default function PlatformPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      {/* Hero Section - Raft Style */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
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

      {/* Not just any AI solution - Raft Style */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 opacity-90">
              <div className="h-px w-12 bg-black/20" />
              <span className="text-sm uppercase tracking-widest text-black/60">Not just any AI solution.</span>
              <div className="h-px w-12 bg-black/20" />
            </div>
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
              Agentic, explainable, and audit-ready
            </h2>
            <p className="mb-8 text-black/70">
              Founded with AI at the core: uplift models, policy enforcement, and an audit-grade ledger. 
              Delivered in-product so feedback loops are fast and trustworthy.
            </p>
          </div>
        </Container>
      </section>

      {/* The 5 Pillars */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Vector's opinionated foundation" 
            subtitle="Built on five core pillars that ensure trust, transparency, and automation at scale"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PillarCard
              icon={<Zap className="h-6 w-6 text-black" />}
              title="Agentic Core"
              description="Assist → Recommend → Auto-with-Approval → Auto-within-Policy; every action has rationale."
              features={[
                "Explainable AI decisions",
                "Human-in-the-loop controls",
                "Policy-bounded automation",
                "Rationale for every action"
              ]}
            />
            <PillarCard
              icon={<Database className="h-6 w-6 text-black" />}
              title="Audit-grade Ledger"
              description="Append-only events, replay 'as-of' states for accruals/claims/approvals."
              features={[
                "Immutable event sourcing",
                "As-of reporting",
                "Complete audit trail",
                "Replay any point in time"
              ]}
            />
            <PillarCard
              icon={<Code className="h-6 w-6 text-black" />}
              title="Policy-as-Code"
              description="OPA policies for approvals, margin floors, budgets, SoX checks; human overrides logged."
              features={[
                "Machine-enforced policies",
                "Human override trails",
                "Version-controlled rules",
                "Plain-English explanations"
              ]}
            />
            <PillarCard
              icon={<GitBranch className="h-6 w-6 text-black" />}
              title="Lineage & Observability"
              description="OpenLineage from feed → model → decision → P&L; feed SLAs, schema diffs, backfills."
              features={[
                "End-to-end data lineage",
                "Feed SLA monitoring",
                "Schema drift detection",
                "Safe backfill operations"
              ]}
            />
            <PillarCard
              icon={<Link className="h-6 w-6 text-black" />}
              title="Connectors & Composability"
              description="SAP/Oracle, NIQ/Circana/EDI 852/810/812, Salesforce/REX, data clouds; idempotent retries."
              features={[
                "Pre-built connectors",
                "Idempotent operations",
                "Self-healing integrations",
                "Composable architecture"
              ]}
            />
          </div>
        </Container>
      </section>

      {/* One platform, Multiple solutions - Raft Style */}
      <section className="border-t border-black/10 py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr,1fr]">
            {/* Left side - Isometric diagram */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Isometric layered diagram */}
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  
                  {/* Bottom layer - Integrations */}
                  <g transform="translate(50, 200) rotate(-30) skewX(30)">
                    <rect width="200" height="40" fill="#3b82f6" opacity="0.8"/>
                    <text x="100" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">INTEGRATIONS</text>
                  </g>
                  
                  {/* Second layer - Platform AI */}
                  <g transform="translate(60, 160) rotate(-30) skewX(30)">
                    <rect width="180" height="40" fill="#f59e0b" opacity="0.9"/>
                    <text x="90" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">PLATFORM AI</text>
                  </g>
                  
                  {/* Third layer - Configuration Layer */}
                  <g transform="translate(70, 120) rotate(-30) skewX(30)">
                    <rect width="160" height="40" fill="#10b981" opacity="0.9"/>
                    <text x="80" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">CONFIGURATION LAYER</text>
                  </g>
                  
                  {/* Top layer - Applications */}
                  <g transform="translate(80, 80) rotate(-30) skewX(30)">
                    <rect width="140" height="40" fill="#ef4444" opacity="0.9"/>
                    <text x="70" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">APPLICATIONS</text>
                  </g>
                  
                  {/* Labels */}
                  <text x="20" y="220" className="text-xs fill-black/60">INTEGRATIONS</text>
                  <text x="20" y="180" className="text-xs fill-black/60">PLATFORM AI</text>
                  <text x="20" y="140" className="text-xs fill-black/60">CONFIGURATION LAYER</text>
                  <text x="20" y="100" className="text-xs fill-black/60">APPLICATIONS</text>
                </svg>
              </div>
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
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

      {/* Benefit at immense scale - Raft Style */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr,1fr]">
            {/* Left side - Isometric diagram */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Isometric layered diagram */}
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  <defs>
                    <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  
                  {/* Bottom layer - Integrations */}
                  <g transform="translate(50, 200) rotate(-30) skewX(30)">
                    <rect width="200" height="40" fill="#3b82f6" opacity="0.8"/>
                    <text x="100" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">INTEGRATIONS</text>
                  </g>
                  
                  {/* Second layer - Platform AI */}
                  <g transform="translate(60, 160) rotate(-30) skewX(30)">
                    <rect width="180" height="40" fill="#f59e0b" opacity="0.9"/>
                    <text x="90" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">PLATFORM AI</text>
                  </g>
                  
                  {/* Third layer - Configuration Layer */}
                  <g transform="translate(70, 120) rotate(-30) skewX(30)">
                    <rect width="160" height="40" fill="#10b981" opacity="0.9"/>
                    <text x="80" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">CONFIGURATION LAYER</text>
                  </g>
                  
                  {/* Top layer - Applications */}
                  <g transform="translate(80, 80) rotate(-30) skewX(30)">
                    <rect width="140" height="40" fill="#ef4444" opacity="0.9"/>
                    <text x="70" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">APPLICATIONS</text>
                  </g>
                  
                  {/* Callout for Platform AI */}
                  <g transform="translate(250, 140)">
                    <rect width="120" height="60" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="8"/>
                    <text x="60" y="20" textAnchor="middle" className="text-xs font-semibold fill-black">PLATFORM AI</text>
                    <text x="60" y="35" textAnchor="middle" className="text-xs fill-black/70">LLMs trained on</text>
                    <text x="60" y="50" textAnchor="middle" className="text-xs fill-black/70">logistics documents</text>
                  </g>
                  
                  {/* Arrow pointing to Platform AI */}
                  <path d="M 240 170 L 250 170" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* Right side - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
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

      {/* Vector Agents */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Six intelligent agents" 
            subtitle="Each agent operates in multiple modes with clear guardrails and measurable outcomes"
            align="center"
          />
          <AgentsAnimation />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AgentCard
              name="Promo Agent"
              purpose="Keep promos on track; detect drift; propose edits; run what-ifs"
              triggers={["New POS signal", "Variance > threshold", "Weekly review"]}
              skills={["Health compute", "Drift detection", "Action proposals", "What-if analysis"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<TrendingUp className="h-5 w-5" />}
            />
            <AgentCard
              name="Deduction Agent"
              purpose="Classify deductions, bundle evidence, match to promos/contracts"
              triggers={["New deduction", "Unmatched claim", "Aging threshold"]}
              skills={["Classification", "Evidence bundling", "Recovery matching", "EV calculation"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<FileText className="h-5 w-5" />}
            />
            <AgentCard
              name="Finance Agent"
              purpose="Maintain accrual schedules; alert over/under; prep audit packs"
              triggers={["Plan publish", "Claim settle", "Period close", "Variance alerts"]}
              skills={["Accrual scheduling", "Variance monitoring", "Audit pack generation", "GL export"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<BarChart3 className="h-5 w-5" />}
            />
            <AgentCard
              name="Data Steward Agent"
              purpose="Enforce MDM quality gates; block dirty hierarchies; propose fixes"
              triggers={["Ingest at staging", "Schema drift", "Failed validations"]}
              skills={["Quality gates", "Schema validation", "Data cleansing", "Fix proposals"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<Database className="h-5 w-5" />}
            />
            <AgentCard
              name="Deal Desk Agent"
              purpose="Pre-check proposals against policies; explain violations"
              triggers={["Draft promotion", "Policy change", "Risk threshold"]}
              skills={["Policy checking", "Violation explanation", "Approval routing", "Risk assessment"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<Shield className="h-5 w-5" />}
            />
            <AgentCard
              name="Integration Agent"
              purpose="Detect late/failed feeds; auto replay/backfill safely; emit lineage"
              triggers={["SLA breach", "Checksum mismatch", "Schema change"]}
              skills={["SLA monitoring", "Safe replay", "Backfill operations", "Lineage emission"]}
              modes={["Assist", "Recommend", "Auto-approval"]}
              icon={<Link className="h-5 w-5" />}
            />
          </div>
        </Container>
      </section>

      {/* Governance & Trust */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Governance & Trust" 
            subtitle="Built-in controls that ensure every decision is auditable and every policy is enforceable"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <Database className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Audit-grade Ledger</h3>
              <p className="text-black/70">
                Event sourcing with immutable records. Replay any point in time for accruals, claims, and approvals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <Code className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Policy-as-Code</h3>
              <p className="text-black/70">
                OPA policies with plain-English explanations. Every automated action includes policy links and rationale.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5">
                <GitBranch className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Complete Lineage</h3>
              <p className="text-black/70">
                Trace every number from source feeds through models to final decisions and P&L impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration Command Center */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Integration Command Center" 
            subtitle="Monitor, manage, and maintain all your data connections with confidence"
            align="center"
          />
          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Feed Health</span>
                </div>
                <div className="mt-2 text-sm text-black/70">95% within SLA</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-blue-50 p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Freshness</span>
                </div>
                <div className="mt-2 text-sm text-black/70">Avg 2.3 hours</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold">Issues</span>
                </div>
                <div className="mt-2 text-sm text-black/70">3 active alerts</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="mb-4 font-semibold">Feed Status</h4>
              <div className="space-y-2">
                {[
                  { name: "SAP GL Feed", status: "Healthy", lastUpdate: "2 hours ago", completeness: "98%" },
                  { name: "NIQ POS Data", status: "Healthy", lastUpdate: "1 hour ago", completeness: "100%" },
                  { name: "EDI 852 Invoices", status: "Warning", lastUpdate: "6 hours ago", completeness: "87%" },
                  { name: "Salesforce CRM", status: "Healthy", lastUpdate: "30 minutes ago", completeness: "99%" }
                ].map((feed, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-black/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${feed.status === 'Healthy' ? 'bg-green-500' : 'bg-orange-500'}`} />
                      <span className="font-medium">{feed.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-black/70">
                      <span>{feed.lastUpdate}</span>
                      <span>{feed.completeness}</span>
                      <Button variant="ghost" className="text-xs">
                        <Play className="h-3 w-3" />
                        Replay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl bg-black/5 p-4">
              <h5 className="mb-2 font-semibold">Safety Features</h5>
              <div className="grid grid-cols-1 gap-2 text-sm text-black/70 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Idempotent operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Sandbox → prod promotion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Approval workflows</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Security & Compliance */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Security & Compliance" 
            subtitle="Enterprise-grade security with comprehensive compliance frameworks"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <ShieldCheck className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">SOC 2 Type II</h4>
              <p className="text-sm text-black/70">In progress</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Lock className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">ISO 27001</h4>
              <p className="text-sm text-black/70">Roadmap</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">SSO/SAML</h4>
              <p className="text-sm text-black/70">Okta, Azure AD</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                <Globe className="h-6 w-6 text-black" />
              </div>
              <h4 className="mb-2 font-semibold">Data Residency</h4>
              <p className="text-sm text-black/70">US, EU options</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Architecture Overview */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Architecture Overview" 
            subtitle="Modern, scalable architecture built for enterprise trade operations"
            align="center"
          />
          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="mb-4 font-semibold">System Architecture</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-sm">Sources (ERP, POS, EDI)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm">Ingest Layer (quality gates, validation)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <span className="text-sm">Policy Engine (OPA)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-sm">Agent Layer (6 intelligent agents)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="text-sm">Ledger (event sourcing)</span>
                  </div>
                  <div className="ml-6 h-4 w-px bg-black/20" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-gray-500" />
                    <span className="text-sm">APIs & Exports (GL, audit packs)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Technical Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Stream & batch processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Idempotent retries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Sandbox → prod replay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>OpenTelemetry observability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>OpenLineage data lineage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Connectors */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Pre-built Connectors" 
            subtitle="Connect to your existing systems with confidence"
            align="center"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <ConnectorLogo name="SAP" category="ERP" />
            <ConnectorLogo name="Oracle" category="ERP" />
            <ConnectorLogo name="Salesforce" category="CRM" />
            <ConnectorLogo name="NIQ" category="POS" />
            <ConnectorLogo name="Circana" category="POS" />
            <ConnectorLogo name="EDI 852" category="EDI" />
            <ConnectorLogo name="EDI 810" category="EDI" />
            <ConnectorLogo name="EDI 812" category="EDI" />
            <ConnectorLogo name="S3" category="Storage" />
            <ConnectorLogo name="BigQuery" category="Analytics" />
            <ConnectorLogo name="Snowflake" category="Analytics" />
            <ConnectorLogo name="Azure" category="Cloud" />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Common questions about Vector's platform and capabilities"
            align="center"
          />
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-black/10 bg-white">
              {[
                {
                  question: "How do you prevent bad automation?",
                  answer: "Every automated action is bounded by OPA policies with human-readable explanations. We provide multiple operating modes (Assist → Recommend → Auto-with-Approval → Auto-within-Policy) and comprehensive override trails. All actions are logged in our audit-grade ledger."
                },
                {
                  question: "Can we bring our own models?",
                  answer: "Yes, Vector supports BYO-model plugins in V3. For V1, we provide pre-trained models optimized for trade operations with full explainability and reason codes."
                },
                {
                  question: "How do overrides work?",
                  answer: "When a policy blocks an action, users can request an override with justification. All overrides are logged with full context, approval workflow, and audit trail. Override patterns are analyzed to improve policies."
                },
                {
                  question: "What's the go-live path and typical timeline?",
                  answer: "Our typical onboarding is 2-4 weeks: Week 1-2 for connector setup and data validation, Week 3 for policy configuration and user training, Week 4 for pilot launch with 2-3 promotions. Full rollout typically takes 6-8 weeks."
                }
              ].map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === i}
                  onToggle={() => toggleFAQ(i)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-black/10 bg-black py-16 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
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
    </div>
  );
}
