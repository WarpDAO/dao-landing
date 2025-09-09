import React from "react";
import {
  Shield,
  Zap,
  Users,
  TrendingUp,
  Lock,
  Rocket,
  Globe,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Cross-Chain Trading",
    description:
      "Seamlessly trade across AVAX, Hedera, Flare, and SGB networks",
    icon: Globe,
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Lightning Fast",
    description:
      "Execute trades instantly with optimized routing and minimal slippage",
    icon: Zap,
    gradient: "from-cyan-500/20 via-blue-500/20 to-cyan-500/20",
    iconColor: "brand-blue-text",
  },
  {
    title: "Secure by Design",
    description:
      "Audited smart contracts with non-custodial architecture for maximum security",
    icon: Shield,
    gradient: "from-blue-400/20 via-slate-500/20 to-blue-400/20",
    iconColor: "text-blue-300",
  },
  {
    title: "Advanced Analytics",
    description:
      "Real-time market data and performance tracking across all networks",
    icon: BarChart3,
    gradient: "from-slate-500/20 via-blue-500/20 to-slate-500/20",
    iconColor: "text-slate-400",
  },
  {
    title: "Liquidity Provision",
    description:
      "Earn yield by providing liquidity to cross-chain trading pairs",
    icon: TrendingUp,
    gradient: "from-cyan-400/20 via-blue-400/20 to-cyan-400/20",
    iconColor: "brand-blue-text",
  },
  {
    title: "DAO Governance",
    description:
      "Community-driven decisions for protocol upgrades and treasury management",
    icon: Users,
    gradient: "from-blue-300/20 via-slate-400/20 to-blue-300/20",
    iconColor: "text-blue-300",
  },
  {
    title: "Yield Farming",
    description:
      "Maximize returns through optimized farming strategies and rewards",
    icon: Rocket,
    gradient: "from-slate-400/20 via-cyan-400/20 to-slate-400/20",
    iconColor: "text-slate-300",
  },
  {
    title: "DAO Modules",
    description:
      "Composable governance, treasury and incentive extensions under one surface",
    icon: Lock,
    gradient: "from-blue-600/20 via-cyan-600/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(0,170,255,0.12),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,180,255,0.1),transparent_55%)] opacity-70" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_70px)] opacity-[0.18]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight heading-split">
            Unified Liquidity & Governance Layer
          </h2>
          <p className="text-slate-300/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Coordinated cross‑chain routing, incentivized liquidity, analytics
            and modular DAO primitives combine into one minimal, extensible
            surface— governed transparently by stakeholders.
          </p>
          <div className="mt-8 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl transition-all duration-500 group shadow-[0_6px_50px_-10px_rgba(0,180,255,0.25)] hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 opacity-100 bg-gradient-to-br ${feature.gradient}`}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 mb-5 group-hover:bg-white/10 transition-colors border border-white/10 group-hover:border-cyan-300/30 shadow-inner">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-base font-semibold text-white group-hover:brand-blue-text tracking-wide">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-28 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "$3.2B+", label: "Cumulative Volume" },
              { value: "$250M+", label: "Total Liquidity" },
              { value: "120K+", label: "Community Members" },
              { value: "4+", label: "Live Chains" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg,#ffffff,#0554F2)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-[0.25em] group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/0 via-white/5 to-white/0 blur-md transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
