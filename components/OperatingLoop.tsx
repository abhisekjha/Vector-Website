import React from "react";
import { ArrowRight, Eye, MessageSquare, Calculator, Shield, Play, FileText, Brain } from "lucide-react";

export const OperatingLoop: React.FC = () => {
  const steps = [
    {
      id: "sense",
      title: "Sense",
      description: "Ingest data (ERP, POS, EDI, syndicated) and compute health/drivers",
      icon: Eye,
      color: "bg-blue-500"
    },
    {
      id: "explain",
      title: "Explain", 
      description: "Agents describe what changed and why it matters, in English",
      icon: MessageSquare,
      color: "bg-cyan-500"
    },
    {
      id: "simulate",
      title: "Simulate",
      description: "Scenario Studio calculates ROI deltas for safe options",
      icon: Calculator,
      color: "bg-teal-500"
    },
    {
      id: "check",
      title: "Check",
      description: "Policies/guardrails run; unsafe options are blocked with reasons",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      id: "act",
      title: "Act",
      description: "In Recommend or Auto modes, actions are queued or executed",
      icon: Play,
      color: "bg-emerald-500"
    },
    {
      id: "log",
      title: "Log",
      description: "The Vector Ledger records the event, rationale, inputs, and outcomes",
      icon: FileText,
      color: "bg-lime-500"
    },
    {
      id: "learn",
      title: "Learn",
      description: "Future confidence calibrates from realized outcomes",
      icon: Brain,
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Linear flow with clear arrows */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          
          return (
            <React.Fragment key={step.id}>
              {/* Step card */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-200 shadow-lg p-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-2`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-3 text-center max-w-32">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-600 leading-tight">{step.description}</p>
                </div>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Circular connection showing it's a loop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 border-2 border-dashed border-gray-300 rounded-full opacity-30">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Loop indicator */}
      <div className="text-center mt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          Continuous Loop
        </div>
      </div>
    </div>
  );
};
