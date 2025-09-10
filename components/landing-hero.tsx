"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LandingHero() {
  return (
    <header className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(0,170,255,0.25),transparent_60%),radial-gradient(circle_at_85%_70%,rgba(0,110,255,0.18),transparent_55%)] opacity-70" />
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-28 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-[11px] tracking-[0.25em] font-medium text-cyan-300/80">
            GOVERNANCE · LIQUIDITY · EXECUTION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Multichain Liquidity &<br /> Governance Layer
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300/85 leading-relaxed max-w-xl">
            WarpDAO coordinates cross‑chain routing, pooled incentives &
            modular protocol extensions— enabling the community to evolve
            execution surfaces without fragmenting liquidity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#governance"
              className="group inline-flex items-center justify-center rounded-full px-8 h-12 text-sm font-medium tracking-wide bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-md shadow-cyan-800/40 transition-all"
            >
              Explore Governance
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#architecture"
              className="inline-flex items-center justify-center rounded-full px-8 h-12 text-sm font-medium tracking-wide border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] text-white/90 hover:text-white transition-colors"
            >
              Architecture
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingHero;
