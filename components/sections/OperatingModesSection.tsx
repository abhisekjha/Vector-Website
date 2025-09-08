import React from 'react';
import { 
  FileText,
  CheckCircle,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';

interface OperatingMode {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const operatingModes: OperatingMode[] = [
  { 
    name: 'Assist', 
    description: 'Drafts & explanations only', 
    icon: <FileText className="h-5 w-5" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  { 
    name: 'Recommend', 
    description: 'Proposes actions with expected value (EV) & confidence', 
    icon: <CheckCircle className="h-5 w-5" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  { 
    name: 'Auto + Approval', 
    description: 'Queues safe actions; a human approves', 
    icon: <Users className="h-5 w-5" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  { 
    name: 'Auto within Policy', 
    description: 'Executes automatically when guardrails pass', 
    icon: <Zap className="h-5 w-5" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

export const OperatingModesSection: React.FC = () => {
  return (
    <section className="border-t border-black/10 bg-gray-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/60">
            Four Operating Modes
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl playfair-display-600">
            From assistance to full automation
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-black/70">
            Choose the right level of automation for your organization. Start with assistance 
            and gradually move to full automation as confidence grows.
          </p>
        </div>

        {/* Operating Modes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {operatingModes.map((mode, index) => (
            <div key={mode.name} className="relative">
              {/* Mode Card */}
              <div className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${mode.bgColor} ${mode.color}`}>
                    {mode.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 playfair-display-600">{mode.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{mode.description}</p>
              </div>
              
              {/* Arrow to next mode (except last) */}
              {index < operatingModes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progression Indicator */}
        <div className="mt-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-black/10 shadow-sm">
              <span className="text-sm font-medium text-gray-600">Automation Level:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-600">Low → High</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/platform" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all border border-black/10 bg-white hover:bg-black/5">
              Learn about modes <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all bg-black text-white hover:bg-black/90">
              Choose your mode <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
