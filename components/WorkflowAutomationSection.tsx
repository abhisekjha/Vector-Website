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
  Zap,
  Eye,
  MessageSquare,
  Calculator,
  Play,
  FileCheck
} from 'lucide-react';

interface Agent {
  name: string;
  purpose: string;
  icon: React.ReactNode;
  color: string;
}

interface OperatingStep {
  id: string;
  title: string;
  description: string;
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

const operatingSteps: OperatingStep[] = [
  {
    id: 'sense',
    title: 'Sense',
    description: 'Ingest data (ERP, POS, EDI, syndicated) and compute health/drivers',
    icon: <Eye className="h-5 w-5" />,
    color: 'bg-blue-500'
  },
  {
    id: 'explain',
    title: 'Explain',
    description: 'Agents describe what changed and why it matters, in English',
    icon: <MessageSquare className="h-5 w-5" />,
    color: 'bg-green-500'
  },
  {
    id: 'simulate',
    title: 'Simulate',
    description: 'Scenario Studio calculates ROI deltas for safe options',
    icon: <Calculator className="h-5 w-5" />,
    color: 'bg-purple-500'
  },
  {
    id: 'check',
    title: 'Check',
    description: 'Policies/guardrails run; unsafe options are blocked with reasons',
    icon: <Shield className="h-5 w-5" />,
    color: 'bg-orange-500'
  },
  {
    id: 'act',
    title: 'Act',
    description: 'In Recommend or Auto modes, actions are queued or executed',
    icon: <Play className="h-5 w-5" />,
    color: 'bg-red-500'
  },
  {
    id: 'log',
    title: 'Log',
    description: 'The Vector Ledger records the event, rationale, inputs, and outcomes',
    icon: <FileCheck className="h-5 w-5" />,
    color: 'bg-indigo-500'
  },
  {
    id: 'learn',
    title: 'Learn',
    description: 'Future confidence calibrates from realized outcomes',
    icon: <Brain className="h-5 w-5" />,
    color: 'bg-teal-500'
  }
];

const operatingModes = [
  { name: 'Assist', description: 'Drafts & explanations only', icon: <FileText className="h-4 w-4" /> },
  { name: 'Recommend', description: 'Proposes actions with EV & confidence', icon: <CheckCircle className="h-4 w-4" /> },
  { name: 'Auto + Approval', description: 'Queues safe actions for human approval', icon: <Users className="h-4 w-4" /> },
  { name: 'Auto within Policy', description: 'Executes automatically when guardrails pass', icon: <Zap className="h-4 w-4" /> }
];

export const WorkflowAutomationSection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60">
            A suite of workflow automation capabilities
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl playfair-display-600">
            Plan, optimize, and settle
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-black/70">
            Automate what should be automated—facilitate what shouldn't.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left Column: Operating Loop & Agents */}
          <div className="space-y-12">
            
            {/* Operating Loop */}
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Vector's Operating Loop</h3>
              
              {/* Loop Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  {operatingSteps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center mb-2`}>
                        {step.icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{step.title}</span>
                      {index < operatingSteps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-gray-400 mt-2" />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Current Step Detail */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${operatingSteps[0].color} text-white`}>
                      {operatingSteps[0].icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{operatingSteps[0].title}</h4>
                      <p className="text-sm text-gray-600">{operatingSteps[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Modes */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Four Operating Modes</h4>
                <div className="grid grid-cols-2 gap-3">
                  {operatingModes.map((mode) => (
                    <div key={mode.name} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="p-1.5 rounded-md bg-gray-200 text-gray-600">
                        {mode.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-gray-900">{mode.name}</div>
                        <div className="text-xs text-gray-600">{mode.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Agents Grid */}
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Eight Specialized Agents</h3>
              <div className="grid grid-cols-2 gap-4">
                {agents.map((agent) => (
                  <div key={agent.name} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className={`p-2 rounded-lg ${agent.color} text-white`}>
                      {agent.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900">{agent.name}</div>
                      <div className="text-xs text-gray-600">{agent.purpose}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Operating Loop */}
          <div className="space-y-8">
            
            {/* Operating Loop Detail */}
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/60">Operating Loop</span>
                <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                  Sense → Explain → Simulate → Check → Act → Log → Learn
                </h3>
                <p className="mt-3 text-gray-600">
                  Vector's consistent loop powers both planning and settlement. Agents sense data changes, 
                  explain what matters in plain English, simulate safe options, check policies, act when 
                  approved, log everything to the Vector Ledger, and learn from outcomes. This ensures 
                  speed with safety.
                </p>
              </div>
              
              <div className="flex gap-3">
                <a href="/scenario-studio" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all border border-black/10 bg-white hover:bg-black/5">
                  Operating Loop <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/demo" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all bg-black text-white hover:bg-black/90">
                  Let's chat <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Continuous Loop Visualization */}
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {operatingSteps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center group">
                      <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-200 shadow-lg p-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className={`w-8 h-8 rounded-xl ${step.color} flex items-center justify-center`}>
                          {step.icon}
                        </div>
                      </div>
                      <div className="mt-3 text-center max-w-32">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-xs text-gray-600 leading-tight">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Continuous Loop Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-80 h-80 border-2 border-dashed border-gray-300 rounded-full opacity-30">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Continuous Loop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
