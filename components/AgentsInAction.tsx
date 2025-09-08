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
  AlertCircle,
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
  currentTask?: string;
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
    color: 'bg-red-500',
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

const agentTasks = {
  promo: [
    'Analyzing promotion performance...',
    'Detecting drift in Region South...',
    'Simulating optimization scenarios...',
    'Applied +1 week display promotion'
  ],
  deduction: [
    'Processing new 812 deduction...',
    'Matching to promotion PR-4JUL...',
    'Assembling evidence pack...',
    'Recovery proposal: $22.3k @ 91% confidence'
  ],
  finance: [
    'Recomputing accruals...',
    'Checking variance thresholds...',
    'Preparing GL postings...',
    'Accruals updated successfully'
  ],
  'data-steward': [
    'Validating data quality...',
    'Checking MDM compliance...',
    'Flagging data issues...',
    'Data quality gates passed'
  ],
  'deal-desk': [
    'Checking policy compliance...',
    'Validating margin floors...',
    'Routing for approval...',
    'Policy check: PASSED'
  ],
  integration: [
    'Monitoring SLA status...',
    'Detecting late POS feed...',
    'Launching backfill...',
    'Integration health: OK'
  ],
  contract: [
    'Processing contract PDF...',
    'Extracting eligible products...',
    'Citing relevant clauses...',
    'Evidence pack compiled'
  ],
  executive: [
    'Analyzing weekly KPIs...',
    'Attributing impact to decisions...',
    'Generating executive summary...',
    'Weekly digest sent'
  ]
};

export const AgentsInAction: React.FC = () => {
  const [agentStates, setAgentStates] = useState<Agent[]>(agents);
  const [currentScenario, setCurrentScenario] = useState(0);

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
      name: 'Weekly Analytics',
      description: 'Executive Insights generates strategic reports',
      activeAgents: ['executive', 'promo', 'finance']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScenario((prev) => (prev + 1) % scenarios.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentScenarioData = scenarios[currentScenario];
    
    // Reset all agents
    setAgentStates(agents.map(agent => ({ ...agent, status: 'idle' as const })));
    
    // Activate agents for current scenario
    setTimeout(() => {
      setAgentStates(prev => prev.map(agent => {
        if (currentScenarioData.activeAgents.includes(agent.id)) {
          return {
            ...agent,
            status: 'active' as const,
            currentTask: agentTasks[agent.id as keyof typeof agentTasks]?.[0],
            confidence: Math.floor(Math.random() * 20) + 80 // 80-99%
          };
        }
        return agent;
      }));
    }, 500);

    // Simulate processing
    setTimeout(() => {
      setAgentStates(prev => prev.map(agent => {
        if (currentScenarioData.activeAgents.includes(agent.id)) {
          return {
            ...agent,
            status: 'processing' as const,
            currentTask: agentTasks[agent.id as keyof typeof agentTasks]?.[1]
          };
        }
        return agent;
      }));
    }, 2000);

    // Complete processing
    setTimeout(() => {
      setAgentStates(prev => prev.map(agent => {
        if (currentScenarioData.activeAgents.includes(agent.id)) {
          return {
            ...agent,
            status: 'completed' as const,
            currentTask: agentTasks[agent.id as keyof typeof agentTasks]?.[3]
          };
        }
        return agent;
      }));
    }, 5000);
  }, [currentScenario]);

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
        return 'border-yellow-400 bg-yellow-50';
      case 'processing':
        return 'border-blue-400 bg-blue-50';
      case 'completed':
        return 'border-green-400 bg-green-50';
      default:
        return 'border-gray-200 bg-white';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">

      {/* Current Scenario */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {scenarios[currentScenario].name}
        </h3>
        <p className="text-gray-600">
          {scenarios[currentScenario].description}
        </p>
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
                <h4 className="font-semibold text-sm text-gray-900">
                  {agent.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {agent.purpose}
                </p>
              </div>
              {getStatusIcon(agent.status)}
            </div>
            
            {agent.currentTask && (
              <div className="text-xs text-gray-700 mb-2">
                {agent.currentTask}
              </div>
            )}
            
            {agent.confidence && (
              <div className="text-xs text-gray-500">
                Confidence: {agent.confidence}%
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scenario Progress */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          {scenarios.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentScenario ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
