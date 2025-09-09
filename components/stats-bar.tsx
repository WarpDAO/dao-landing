"use client";
import React from "react";

const stats = [
  { label: "TVL Secured", value: "$250M+" },
  { label: "Cumulative Volume", value: "$3.2B+" },
  { label: "Active Chains", value: "4" },
  { label: "DAO Proposals", value: "1.3K+" },
  { label: "Community", value: "120K+" },
];

export function StatsBar() {
  return (
    <div className="sticky top-0 z-30 hidden md:block border-b border-white/10 backdrop-blur bg-black/70">
      <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-5 gap-6 text-xs font-medium tracking-wide">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-slate-400 uppercase tracking-[0.18em] mb-1">
              {s.label}
            </span>
            <span className="text-white/90 text-sm font-semibold">
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
