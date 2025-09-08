import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw, CheckCircle, AlertCircle, Brain, Zap, Shield, FileText, BarChart3, Settings, Users, TrendingUp } from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  agents: string[];
  example: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 'sense',
    title: 'Sense',
    description: 'Ingest data from ERP, POS, EDI, and syndicated sources',
    icon: <Brain className="h-6 w-6" />,
    color: 'bg-blue-500',
    agents: ['Integration Agent', 'Data Steward Agent'],
    example: 'POS data shows 15% drop in Region South'
  },
  {
    id: 'explain',
    title: 'Explain',
    description: 'Agents describe what changed and why it matters',
    icon: <FileText className="h-6 w-6" />,
    color: 'bg-green-500',
    agents: ['Promo Agent', 'Executive Insights Agent'],
    example: 'Competitor launched 20% discount on similar SKUs'
  },
  {
    id: 'simulate',
    title: 'Simulate',
    description: 'Calculate ROI deltas for safe optimization options',
    icon: <BarChart3 className="h-6 w-6" />,
    color: 'bg-purple-500',
    agents: ['Promo Agent', 'Finance Agent'],
    example: '+1 week display = +3.2% ROI, -1% price = +1.8% ROI'
  },
  {
    id: 'check',
    title: 'Check',
    description: 'Policies and guardrails validate all actions',
    icon: <Shield className="h-6 w-6" />,
    color: 'bg-orange-500',
    agents: ['Deal Desk Agent', 'Policy Agent'],
    example: 'Margin floor check: PASSED, Budget cap check: PASSED'
  },
  {
    id: 'act',
    title: 'Act',
    description: 'Execute approved actions or queue for human review',
    icon: <Zap className="h-6 w-6" />,
    color: 'bg-red-500',
    agents: ['Promo Agent', 'Deduction Agent'],
    example: 'Applied +1 week display promotion automatically'
  },
  {
    id: 'log',
    title: 'Log',
    description: 'Record all decisions in the Vector Ledger',
    icon: <FileText className="h-6 w-6" />,
    color: 'bg-indigo-500',
    agents: ['All Agents'],
    example: 'PROMO_SCENARIO_APPLIED logged with rationale'
  },
  {
    id: 'learn',
    title: 'Learn',
    description: 'Update confidence based on actual outcomes',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'bg-teal-500',
    agents: ['All Agents'],
    example: 'Confidence increased to 0.91 after 2.8% actual ROI lift'
  }
];

const agentIcons: { [key: string]: React.ReactNode } = {
  'Integration Agent': <Settings className="h-4 w-4" />,
  'Data Steward Agent': <Shield className="h-4 w-4" />,
  'Promo Agent': <TrendingUp className="h-4 w-4" />,
  'Executive Insights Agent': <BarChart3 className="h-4 w-4" />,
  'Finance Agent': <FileText className="h-4 w-4" />,
  'Deal Desk Agent': <Users className="h-4 w-4" />,
  'Policy Agent': <Shield className="h-4 w-4" />,
  'Deduction Agent': <FileText className="h-4 w-4" />,
  'All Agents': <Brain className="h-4 w-4" />
};

export const DynamicWorkflow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          onClick={handlePlayPause}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isPlaying ? 'Pause' : 'Play'} Demo
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Brain className="h-4 w-4" />
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
      </div>

      {/* Workflow Steps */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        
        <div className="relative flex justify-between items-center">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="relative z-10">
              {/* Step Circle */}
              <button
                onClick={() => handleStepClick(index)}
                className={`w-16 h-16 rounded-full border-4 transition-all duration-500 flex items-center justify-center ${
                  index <= currentStep
                    ? `${step.color} border-white text-white shadow-lg`
                    : 'bg-white border-gray-300 text-gray-400 hover:border-gray-400'
                }`}
              >
                {step.icon}
              </button>
              
              {/* Step Label */}
              <div className="mt-3 text-center">
                <div className={`text-sm font-semibold ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Details */}
      <div className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl ${workflowSteps[currentStep].color} text-white`}>
            {workflowSteps[currentStep].icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {workflowSteps[currentStep].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {workflowSteps[currentStep].description}
            </p>
            
            {showDetails && (
              <div className="space-y-4">
                {/* Active Agents */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Active Agents:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workflowSteps[currentStep].agents.map((agent) => (
                      <div key={agent} className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {agentIcons[agent]}
                        {agent}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Example */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Example:</h4>
                  <div className="p-3 bg-gray-100 rounded-lg text-sm text-gray-700">
                    {workflowSteps[currentStep].example}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {workflowSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index <= currentStep ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
