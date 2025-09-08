import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  MessageSquare, 
  Calculator, 
  Shield, 
  Play, 
  FileCheck, 
  TrendingUp 
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  example: string;
}

const steps: WorkflowStep[] = [
  {
    id: 'sense',
    title: 'Sense',
    description: 'Ingest data from ERP, POS, EDI, and syndicated sources',
    icon: <Eye className="h-6 w-6" />,
    color: 'bg-blue-500',
    example: 'POS data shows 15% drop in Region South'
  },
  {
    id: 'explain',
    title: 'Explain',
    description: 'Agents describe what changed and why it matters',
    icon: <MessageSquare className="h-6 w-6" />,
    color: 'bg-green-500',
    example: 'Competitor launched 20% discount on similar SKUs'
  },
  {
    id: 'simulate',
    title: 'Simulate',
    description: 'Calculate ROI deltas for safe optimization options',
    icon: <Calculator className="h-6 w-6" />,
    color: 'bg-purple-500',
    example: '+1 week display = +3.2% ROI, -1% price = +1.8% ROI'
  },
  {
    id: 'check',
    title: 'Check',
    description: 'Policies and guardrails validate all actions',
    icon: <Shield className="h-6 w-6" />,
    color: 'bg-orange-500',
    example: 'Margin floor check: PASSED, Budget cap check: PASSED'
  },
  {
    id: 'act',
    title: 'Act',
    description: 'Execute approved actions or queue for human review',
    icon: <Play className="h-6 w-6" />,
    color: 'bg-red-500',
    example: 'Applied +1 week display promotion automatically'
  },
  {
    id: 'log',
    title: 'Log',
    description: 'Record all decisions in the Vector Ledger',
    icon: <FileCheck className="h-6 w-6" />,
    color: 'bg-indigo-500',
    example: 'PROMO_SCENARIO_APPLIED logged with rationale'
  },
  {
    id: 'learn',
    title: 'Learn',
    description: 'Update confidence based on actual outcomes',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'bg-teal-500',
    example: 'Confidence increased to 0.91 after 2.8% actual ROI lift'
  }
];

export const SimpleDynamicWorkflow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000); // 4 seconds per step
    
    return () => clearInterval(interval);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Step Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index === currentStep
                    ? `${step.color} text-white shadow-lg scale-110`
                    : index < currentStep
                    ? `${step.color} text-white shadow-md`
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {step.icon}
              </div>
              <span className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                index === currentStep ? 'text-gray-900' : index < currentStep ? 'text-gray-700' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        
        {/* Progress Line */}
        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-orange-500 via-red-500 via-indigo-500 to-teal-500 transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Current Step Details */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${currentStepData.color} text-white shadow-md`}>
            {currentStepData.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 playfair-display-600">
                {currentStepData.title}
              </h3>
              <span className="text-xs text-gray-500">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            
            <p className="text-gray-600 mb-3 text-sm">
              {currentStepData.description}
            </p>
            
            <div className="bg-gray-50 rounded-md p-3">
              <p className="text-gray-600 text-sm italic">
                "{currentStepData.example}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step Counter */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
          <div className="flex gap-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-blue-500 scale-125' : 
                  index < currentStep ? 'bg-gray-400' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-1">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
      </div>
    </div>
  );
};
