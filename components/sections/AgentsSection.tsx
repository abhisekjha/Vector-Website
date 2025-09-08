import React from 'react';
import { 
  TrendingUp, 
  FileText, 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  Brain,
  ArrowRight
} from 'lucide-react';

interface Agent {
  name: string;
  purpose: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  category: string;
}

const agents: Agent[] = [
  {
    name: 'Promo Agent',
    purpose: 'Optimization & drift detection',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    category: 'Planning'
  },
  {
    name: 'Claims/Deduction Agent',
    purpose: 'Settlement & Evidence Pack assembly',
    icon: <FileText className="h-5 w-5" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    category: 'Settlement'
  },
  {
    name: 'Accruals Agent',
    purpose: 'Accounting integrity & GL postings',
    icon: <BarChart3 className="h-5 w-5" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    category: 'Finance'
  },
  {
    name: 'Data Quality Agent',
    purpose: 'Data quality & validation',
    icon: <Shield className="h-5 w-5" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    category: 'Data'
  },
  {
    name: 'Policy/Guardrail Agent',
    purpose: 'Policy evaluation & approvals',
    icon: <Users className="h-5 w-5" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    category: 'Compliance'
  },
  {
    name: 'Integration Agent',
    purpose: 'SLA monitoring & backfills',
    icon: <Settings className="h-5 w-5" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    category: 'Integration'
  },
  {
    name: 'Contract Intelligence Agent',
    purpose: 'Contract processing & evidence',
    icon: <Brain className="h-5 w-5" />,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    category: 'Intelligence'
  },
  {
    name: 'Executive Insights Agent',
    purpose: 'Weekly digest & impact attribution',
    icon: <BarChart3 className="h-5 w-5" />,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    category: 'Analytics'
  }
];

// Group agents by category
const agentsByCategory = agents.reduce((acc, agent) => {
  if (!acc[agent.category]) {
    acc[agent.category] = [];
  }
  acc[agent.category].push(agent);
  return acc;
}, {} as Record<string, Agent[]>);

export const AgentsSection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60">
            Eight Specialized Agents
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl playfair-display-600">
            AI agents that work together seamlessly
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-black/70">
            Each agent specializes in a specific aspect of trade promotion management, 
            working together to deliver comprehensive automation and insights.
          </p>
        </div>

        {/* Agents Grid - All agents in one clean grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <div key={agent.name} className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${agent.bgColor} ${agent.color}`}>
                  {agent.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 playfair-display-600">{agent.name}</h4>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{agent.category}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{agent.purpose}</p>
            </div>
          ))}
        </div>

        {/* Agent Collaboration Summary */}
        <div className="mt-16">
          <div className="rounded-3xl border border-black/10 bg-gray-50 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 playfair-display-600">Collaborative Intelligence</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              All eight agents work together seamlessly in Vector's operating loop: 
              <strong> Sense → Explain → Simulate → Check → Act → Log → Learn</strong>. 
              This ensures speed with safety: fast enough to catch issues mid-flight, strict enough to satisfy audit and finance.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Planning', 'Settlement', 'Finance', 'Data', 'Compliance', 'Integration', 'Intelligence', 'Analytics'].map((category) => (
                <span key={category} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/platform" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all border border-black/10 bg-white hover:bg-black/5">
              Meet the agents <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all bg-black text-white hover:bg-black/90">
              See agents in action <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};