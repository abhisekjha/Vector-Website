import React from 'react';
import { 
  TrendingUp, 
  FileText, 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  Brain,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';

interface Agent {
  name: string;
  purpose: string;
  icon: React.ReactNode;
  color: string;
}

const agents: Agent[] = [
  {
    name: 'Promo Agent',
    purpose: 'Optimization & drift detection',
    icon: <TrendingUp className="h-4 w-4" />,
    color: 'bg-blue-500'
  },
  {
    name: 'Deduction Agent',
    purpose: 'Settlement & evidence bundling',
    icon: <FileText className="h-4 w-4" />,
    color: 'bg-green-500'
  },
  {
    name: 'Finance Agent',
    purpose: 'Accrual management',
    icon: <BarChart3 className="h-4 w-4" />,
    color: 'bg-purple-500'
  },
  {
    name: 'Data Steward Agent',
    purpose: 'Data quality & MDM',
    icon: <Shield className="h-4 w-4" />,
    color: 'bg-orange-500'
  },
  {
    name: 'Deal Desk Agent',
    purpose: 'Policy checking',
    icon: <Users className="h-4 w-4" />,
    color: 'bg-red-500'
  },
  {
    name: 'Integration Agent',
    purpose: 'SLA monitoring',
    icon: <Settings className="h-4 w-4" />,
    color: 'bg-indigo-500'
  },
  {
    name: 'Contract Intelligence Agent',
    purpose: 'Contract processing',
    icon: <Brain className="h-4 w-4" />,
    color: 'bg-teal-500'
  },
  {
    name: 'Executive Insights Agent',
    purpose: 'Strategic analytics',
    icon: <BarChart3 className="h-4 w-4" />,
    color: 'bg-pink-500'
  }
];

const operatingModes = [
  { name: 'Assist', description: 'Drafts & explanations only', icon: <FileText className="h-4 w-4" /> },
  { name: 'Recommend', description: 'Proposes actions with EV & confidence', icon: <CheckCircle className="h-4 w-4" /> },
  { name: 'Auto + Approval', description: 'Queues safe actions for human approval', icon: <Users className="h-4 w-4" /> },
  { name: 'Auto within Policy', description: 'Executes automatically when guardrails pass', icon: <Zap className="h-4 w-4" /> }
];

export const VectorCapabilityCard: React.FC = () => {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6">
      {/* Operating Loop Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Vector's Operating Loop</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Sense</span>
          <ArrowRight className="h-3 w-3 text-gray-400" />
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Explain</span>
          <ArrowRight className="h-3 w-3 text-gray-400" />
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">Simulate</span>
          <ArrowRight className="h-3 w-3 text-gray-400" />
          <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Check</span>
          <ArrowRight className="h-3 w-3 text-gray-400" />
          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">Act</span>
          <ArrowRight className="h-3 w-3 text-gray-400" />
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">Log</span>
          <ArrowRight className="h-3 w-3 text-gray-400" />
          <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold">Learn</span>
        </div>
      </div>

      {/* Eight Agents Grid */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Eight Specialized Agents</h4>
        <div className="grid grid-cols-2 gap-2">
          {agents.map((agent, index) => (
            <div key={agent.name} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
              <div className={`p-1.5 rounded-md ${agent.color} text-white`}>
                {agent.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-900 truncate">
                  {agent.name}
                </div>
                <div className="text-xs text-gray-600 truncate">
                  {agent.purpose}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Modes */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Four Operating Modes</h4>
        <div className="space-y-2">
          {operatingModes.map((mode) => (
            <div key={mode.name} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
              <div className="p-1.5 rounded-md bg-gray-200 text-gray-600">
                {mode.icon}
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-gray-900">
                  {mode.name}
                </div>
                <div className="text-xs text-gray-600">
                  {mode.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
