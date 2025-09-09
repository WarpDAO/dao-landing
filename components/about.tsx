"use client";

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-4 overflow-hidden"
      data-delay="100"
    >
      {/* Background subtle accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,180,255,0.12),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(0,160,255,0.10),transparent_55%)] opacity-60" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0_1px,transparent_1px_70px)] opacity-20" />
      </div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight heading-split">
            Why Warp DAO
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Warp DAO coordinates multichain liquidity, execution primitives &
            on‑chain governance so traders, LPs & builders shape protocol
            outcomes transparently— not just interact with them.
          </p>
          <div
            className="h-1 w-24 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#0554F2,#0a6dff)" }}
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl p-10 md:p-14 shadow-[0_8px_60px_-15px_rgba(0,180,255,0.15)]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-[0.15em] brand-blue-text uppercase">
                Multichain Liquidity
              </h4>
              <p className="text-slate-300/85 text-sm leading-relaxed">
                Execution-aware routing spans AVAX, Hedera, Flare & SGB
                delivering best path pricing and minimized slippage impact.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-[0.15em] brand-blue-text uppercase">
                Security First
              </h4>
              <p className="text-slate-300/85 text-sm leading-relaxed">
                Layered audits, real‑time anomaly telemetry & non‑custodial
                primitives preserve capital integrity end‑to‑end.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-[0.15em] brand-blue-text uppercase">
                DAO Governance
              </h4>
              <p className="text-slate-300/85 text-sm leading-relaxed">
                Emissions, listings & treasury strategy shaped through
                transparent, on‑chain proposal & voting mechanics.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { label: "Total Value Secured", value: "$250M+" },
              { label: "Chains Supported", value: "4+" },
              { label: "Community Members", value: "120K+" },
              { label: "DAO Proposals", value: "1.3K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group relative">
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg,#ffffff,#0554F2)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors uppercase">
                  {stat.label}
                </div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-white/0 via-white/5 to-white/0 blur-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
