import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  FileText, 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  Brain,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  purpose: string;
  icon: React.ReactNode;
  color: string;
  status: 'idle' | 'active' | 'processing' | 'completed';
  confidence?: number;
}

const agents: Agent[] = [
  {
    id: 'promo',
    name: 'Promo Agent',
    purpose: 'Optimizes promotion parameters and detects drift',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'bg-blue-500',
    status: 'idle'
  },
  {
    id: 'deduction',
    name: 'Deduction Agent',
    purpose: 'Handles settlement workflows and evidence bundling',
    icon: <FileText className="h-5 w-5" />,
    color: 'bg-green-500',
    status: 'idle'
  },
  {
    id: 'finance',
    name: 'Finance Agent',
    purpose: 'Maintains live liability and accrual management',
    icon: <BarChart3 className="h-5 w-5" />,
    color: 'bg-purple-500',
    status: 'idle'
  },
  {
    id: 'data-steward',
    name: 'Data Steward Agent',
    purpose: 'Ensures data quality and MDM enforcement',
    icon: <Shield className="h-5 w-5" />,
    color: 'bg-orange-500',
    status: 'idle'
  },
  {
    id: 'deal-desk',
    name: 'Deal Desk Agent',
    purpose: 'Manages deal approvals and policy checking',
    icon: <Users className="h-5 w-5" />,
    status: 'idle'
  },
  {
    id: 'integration',
    name: 'Integration Agent',
    purpose: 'Monitors system health and SLA management',
    icon: <Settings className="h-5 w-5" />,
    color: 'bg-indigo-500',
    status: 'idle'
  },
  {
    id: 'contract',
    name: 'Contract Intelligence Agent',
    purpose: 'Processes contracts and manages evidence',
    icon: <Brain className="h-5 w-5" />,
    color: 'bg-teal-500',
    status: 'idle'
  },
  {
    id: 'executive',
    name: 'Executive Insights Agent',
    purpose: 'Provides strategic analytics and reporting',
    icon: <BarChart3 className="h-5 w-5" />,
    color: 'bg-pink-500',
    status: 'idle'
  }
];

const scenarios = [
  {
    name: 'Promotion Drift Detection',
    description: 'Promo Agent detects performance issues and optimizes',
    activeAgents: ['promo', 'finance', 'deal-desk']
  },
  {
    name: 'Deduction Recovery',
    description: 'Deduction Agent processes claims with evidence',
    activeAgents: ['deduction', 'contract', 'finance']
  },
  {
    name: 'Data Quality Check',
    description: 'Data Steward ensures data integrity across systems',
    activeAgents: ['data-steward', 'integration']
  },
  {
    name: 'Executive Insights',
    description: 'Executive Insights generates strategic reports',
    activeAgents: ['executive', 'promo', 'finance']
  }
];

export const SimpleAgentsDemo: React.FC = () => {
  const [agentStates, setAgentStates] = useState<Agent[]>(agents);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'activating' | 'processing' | 'completing'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      setPhase('idle');
    }, 10000); // 10 seconds per scenario
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === 'idle') {
      // Reset all agents
      setAgentStates(agents.map(agent => ({ ...agent, status: 'idle' as const })));
      
      // Start activation phase
      setTimeout(() => setPhase('activating'), 1000);
    } else if (phase === 'activating') {
      // Activate relevant agents
      const currentScenarioData = scenarios[currentScenario];
      setAgentStates(prev => prev.map(agent => {
        if (currentScenarioData.activeAgents.includes(agent.id)) {
          return {
            ...agent,
            status: 'active' as const,
            confidence: Math.floor(Math.random() * 20) + 80
          };
        }
        return agent;
      }));
      
      setTimeout(() => setPhase('processing'), 2000);
    } else if (phase === 'processing') {
      // Set to processing
      const currentScenarioData = scenarios[currentScenario];
      setAgentStates(prev => prev.map(agent => {
        if (currentScenarioData.activeAgents.includes(agent.id)) {
          return { ...agent, status: 'processing' as const };
        }
        return agent;
      }));
      
      setTimeout(() => setPhase('completing'), 3000);
    } else if (phase === 'completing') {
      // Complete processing
      const currentScenarioData = scenarios[currentScenario];
      setAgentStates(prev => prev.map(agent => {
        if (currentScenarioData.activeAgents.includes(agent.id)) {
          return { ...agent, status: 'completed' as const };
        }
        return agent;
      }));
      
      setTimeout(() => setPhase('idle'), 2000);
    }
  }, [phase, currentScenario]);

  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return <Zap className="h-4 w-4 text-yellow-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-300" />;
    }
  };

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return 'border-yellow-300 bg-yellow-50';
      case 'processing':
        return 'border-blue-300 bg-blue-50';
      case 'completed':
        return 'border-green-300 bg-green-50';
      default:
        return 'border-gray-200 bg-white';
    }
  };

  const currentScenarioData = scenarios[currentScenario];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Scenario Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 playfair-display-600">
          {currentScenarioData.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {currentScenarioData.description}
        </p>
        
        {/* Phase Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
          <div className={`w-2 h-2 rounded-full ${
            phase === 'idle' ? 'bg-gray-400' :
            phase === 'activating' ? 'bg-yellow-500' :
            phase === 'processing' ? 'bg-blue-500 animate-pulse' :
            'bg-green-500'
          }`} />
          <span className="capitalize">{phase}</span>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {agentStates.map((agent) => (
          <div
            key={agent.id}
            className={`p-4 rounded-xl border-2 transition-all duration-500 ${getStatusColor(agent.status)}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${agent.color} text-white`}>
                {agent.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-gray-900 playfair-display-600">
                  {agent.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {agent.purpose}
                </p>
              </div>
              {getStatusIcon(agent.status)}
            </div>
            
            {agent.confidence && (
              <div className="text-xs text-gray-500">
                Confidence: {agent.confidence}%
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scenario Progress */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
          <div className="flex gap-1">
            {scenarios.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentScenario ? 'bg-purple-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2">
            {currentScenario + 1} / {scenarios.length}
          </span>
        </div>
      </div>
    </div>
  );
};
