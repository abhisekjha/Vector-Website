import React from 'react';
import { 
  Eye,
  MessageSquare,
  Calculator,
  Shield,
  Play,
  FileCheck,
  Brain,
  ArrowRight
} from 'lucide-react';

interface OperatingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

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

export const OperatingLoopSection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60">
            Vector's Operating Loop
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl playfair-display-600">
            Sense → Explain → Simulate → Check → Act → Log → Learn
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-black/70">
            Vector's consistent loop powers both planning and settlement. Agents sense data changes, 
            explain what matters in plain English, simulate safe options, check policies, act when 
            approved, log everything to the Vector Ledger, and learn from outcomes. This ensures 
            speed with safety.
          </p>
        </div>

        {/* Operating Loop Visualization */}
        <div className="mb-12">
          <div className="relative">
            {/* Loop Steps */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {operatingSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      {step.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-900 mb-1">{step.title}</span>
                  </div>
                  {index < operatingSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-400 mx-2" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Continuous Loop Indicator */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Continuous Loop
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {operatingSteps.map((step) => (
            <div key={step.id} className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${step.color} text-white flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 playfair-display-600">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/scenario-studio" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all border border-black/10 bg-white hover:bg-black/5">
              Learn about Operating Loop <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all bg-black text-white hover:bg-black/90">
              See it in action <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
