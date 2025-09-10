"use client";
import React from "react";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative py-28 px-6 bg-[#050507] border-y border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(0,140,255,0.15),transparent_60%)] opacity-70" />
      <div className="mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Modular Architecture
            </h2>
            <p className="text-slate-300/85 leading-relaxed text-base md:text-lg">
              WarpDAO segments core execution, liquidity orchestration and
              governance into upgradable modules. This creates a minimal base
              while enabling community‑approved expansion of treasury tooling,
              incentive engines and analytics surfaces.
            </p>
            <ul className="space-y-3 text-sm text-slate-300/80">
              {[
                "Execution Router (multi-chain swaps / aggregation)",
                "Liquidity Vaults (emissions & fee flows)",
                "Governance Kernel (proposals, delegation, voting)",
                "Treasury & Budget Streams (multi-sig + scheduled flows)",
                "Extension Layer (future modules: lending hooks, fee sharing)",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400/70 shadow-cyan-500/40 shadow" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-8 backdrop-blur-xl shadow-[0_10px_70px_-25px_rgba(0,180,255,0.25)]">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    t: "Users",
                    d: "Traders, LPs, Delegates interact via unified UI",
                  },
                  {
                    t: "Router",
                    d: "Deterministic cross-chain path & settlement",
                  },
                  {
                    t: "Vault Layer",
                    d: "Unified accounting for fee + incentives",
                  },
                  {
                    t: "Governance",
                    d: "Proposal lifecycle, delegation, quorum",
                  },
                  { t: "Treasury", d: "Policy controlled spend + streaming" },
                  { t: "Extensions", d: "DAO approved module attach points" },
                ].map((b) => (
                  <div
                    key={b.t}
                    className="relative group rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-2 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
                      {b.t}
                    </div>
                    <div className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {b.d}
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 transition-opacity" />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-[11px] uppercase tracking-[0.25em] text-slate-500 text-center">
                Simplified conceptual layout (not final architecture diagram)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
