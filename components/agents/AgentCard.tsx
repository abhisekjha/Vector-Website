import React from "react";

export const AgentCard: React.FC<{ 
  name: string; 
  purpose: string; 
  triggers: string[]; 
  skills: string[]; 
  modes: string[];
  icon: React.ReactNode;
}> = ({ name, purpose, triggers, skills, modes, icon }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5">
        {icon}
      </div>
      <h4 className="text-lg font-semibold font-playfair">{name}</h4>
    </div>
    <p className="mb-4 text-sm text-black/70">{purpose}</p>
    
    <div className="space-y-3">
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Triggers</div>
        <div className="text-sm text-black/70">{triggers.join(", ")}</div>
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Skills</div>
        <div className="text-sm text-black/70">{skills.join(", ")}</div>
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-black/60">Modes</div>
        <div className="flex flex-wrap gap-1">
          {modes.map((mode, i) => (
            <span key={i} className="rounded-full bg-black/5 px-2 py-1 text-xs text-black/70">{mode}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
