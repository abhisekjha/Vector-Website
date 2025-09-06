import React, { useState, useEffect } from "react";
import {
  Database,
  Workflow,
  BarChart3,
  Shield,
  Zap
} from "lucide-react";

// =============== ADVANCED 3D ISOMETRIC ANIMATION =================
export const AgentsAnimation: React.FC = () => {
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
      color: 'from-blue-500 to-cyan-500',
      type: 'Data Agent',
      description: 'Processes and validates data'
    },
    {
      id: 'agent-2', 
      x: 80,
      y: 20,
      z: 1.2,
      icon: Workflow,
      color: 'from-purple-500 to-pink-500',
      type: 'Workflow Agent',
      description: 'Orchestrates business processes'
    },
    {
      id: 'agent-3',
      x: 75,
      y: 70,
      z: 0.9,
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      type: 'Analytics Agent',
      description: 'Generates insights and reports'
    },
    {
      id: 'agent-4',
      x: 30,
      y: 75,
      z: 1.1,
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      type: 'Security Agent',
      description: 'Enforces policies and compliance'
    },
    {
      id: 'agent-5',
      x: 50,
      y: 50,
      z: 1.3,
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      type: 'Core Agent',
      description: 'Central coordination hub'
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

