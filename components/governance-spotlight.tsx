"use client";
import React from "react";

const phases = [
  {
    name: "Ideation",
    desc: "Community threads & informal feedback loops gather consensus signals.",
    accent: "from-cyan-500/30 to-blue-600/20",
  },
  {
    name: "Draft",
    desc: "Formal WIP spec posted with scope, on-chain impact & treasury ask.",
    accent: "from-blue-600/30 to-indigo-500/20",
  },
  {
    name: "Review",
    desc: "Delegates + stewards surface risks, alternatives & integration notes.",
    accent: "from-indigo-500/30 to-slate-500/20",
  },
  {
    name: "Vote",
    desc: "On-chain execution w/ quorum + majority thresholds enforced.",
    accent: "from-emerald-500/30 to-cyan-500/20",
  },
  {
    name: "Execute",
    desc: "Immutable action or scheduled stream enacted; metrics monitored.",
    accent: "from-rose-500/30 to-amber-400/20",
  },
];

export function GovernanceSpotlight() {
  return (
    <section
      id="governance"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-[#060B12] to-black"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_25%,rgba(0,160,255,0.25),transparent_65%),radial-gradient(circle_at_80%_70%,rgba(0,160,255,0.18),transparent_55%)] opacity-60" />
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-7">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Governance Lifecycle
            </h2>
            <p className="text-slate-300/85 leading-relaxed text-base md:text-lg">
              Proposals evolve through clear, time‑bounded phases ensuring
              transparency, accountability and signal quality before execution.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl text-sm text-slate-300 leading-relaxed">
              Delegation encourages informed voting. A future interface will let
              you discover & delegate to aligned stewards or become one.
            </div>
          </div>
          <div className="lg:flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {phases.map((p, i) => (
              <div
                key={p.name}
                className="relative group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-5 py-6 flex flex-col gap-4 overflow-hidden"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${p.accent}`}
                />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-300/70 group-hover:text-cyan-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300" />
                </div>
                <div className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
                  {p.name}
                </div>
                <div className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovernanceSpotlight;
