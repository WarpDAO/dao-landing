"use client";

import React from "react";
import Image from "next/image";

// Ecosystem surfaces (images referenced should be added under /public/images)
const networks = [
  {
    name: "WarpDAO",
    logo: "/images/warpdao.jpg", // hexagon DAO mark
    description:
      "Token‑holder governed coordination layer shaping roadmap & treasury.",
    url: "https://x.com/warpdaoeth",
  },
  {
    name: "Warp Onchain",
    logo: "/images/warponchain.png", // stylized V mark
    description:
      "Execution & routing core enabling unified automation across chains.",
    url: "https://x.com/warponchain",
  },
  {
    name: "Warp Finance",
    logo: "/images/warpfinance.jpg", // white symbol on blue background
    description: "Composable EVM infrastructure + tooling stack for builders.",
    url: "https://x.com/warpevm",
  },
  {
    name: "Warp DeFi",
    logo: "/images/warpdefi.png", // framed W variant
    description:
      "Liquidity & incentive primitives powering protocol level flows.",
    url: "https://x.com/warp_defi",
  },
];

// Centralized lifecycle status per surface (easy to update / govern)
const ecosystemStatus: Record<string, "live" | "building"> = {
  WarpDAO: "live",
  "Warp DeFi": "live",
  "Warp Onchain": "building",
  "Warp Finance": "building",
};

export function SupportedNetworks() {
  return (
    <section
      id="networks"
      className="relative py-28 border-t border-white/5 bg-[#05070B]"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_25%,rgba(0,170,255,0.18),transparent_60%),radial-gradient(circle_at_85%_70%,rgba(0,120,255,0.15),transparent_55%)] opacity-60" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-14">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Ecosystem Surface
            </h2>
            <p className="text-slate-300/85 max-w-xl leading-relaxed text-base md:text-lg">
              A cohesive stack spanning governance, execution, infrastructure &
              DeFi. Shared incentives and routing unify experiences while the
              DAO stewards expansion and standards.
            </p>
            <div className="flex flex-wrap gap-3">
              {networks.map((n) => (
                <span
                  key={n.name + "tag"}
                  className="px-3 py-1 text-[11px] tracking-wide rounded-full bg-white/[0.06] border border-white/10 text-slate-300"
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[48%] relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl">
            <div className="grid gap-4">
              {networks.map((network) => (
                <a
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-cyan-400/40 px-5 py-4 transition-colors"
                >
                  <div className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                    <Image
                      src={network.logo}
                      alt={`${network.name} logo`}
                      width={40}
                      height={40}
                      className="object-cover w-10 h-10 rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 transition-opacity" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
                        {network.name}
                      </h3>
                      {(() => {
                        const status =
                          ecosystemStatus[network.name] || "building";
                        const isLive = status === "live";
                        return (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-[2px] rounded-full border text-[10px] font-medium tracking-wide
                              ${
                                isLive
                                  ? "bg-emerald-500/10 border-emerald-400/20 text-emerald-300"
                                  : "bg-amber-500/10 border-amber-400/20 text-amber-300"
                              }
                            `}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isLive
                                  ? "bg-emerald-400 animate-pulse"
                                  : "bg-amber-400"
                              }`}
                            />
                            {isLive ? "LIVE" : "BUILDING"}
                          </span>
                        );
                      })()}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 line-clamp-2">
                      {network.description}
                    </p>
                  </div>
                  <div className="self-center text-cyan-300/40 group-hover:text-cyan-300 transition-colors text-xs tracking-wider">
                    VIEW
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-[11px] tracking-[0.25em] uppercase text-slate-500 text-center">
              Community governance stewards future ecosystem expansions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
