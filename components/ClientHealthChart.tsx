"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function ClientHealthChart() {
  const data = [
    { w: "W1", plan: 100, actual: 96 },
    { w: "W2", plan: 110, actual: 112 },
    { w: "W3", plan: 125, actual: 118 },
    { w: "W4", plan: 135, actual: 129 },
    { w: "W5", plan: 150, actual: 141 },
    { w: "W6", plan: 170, actual: 158 }
  ];

  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart data={data} margin={{ left: 8, right: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" />
          <XAxis dataKey="w" stroke="#00000080" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#00000080" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, color: "#111" }} />
          <Line type="monotone" dataKey="plan" stroke="#111111" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} dot={false} />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
}
