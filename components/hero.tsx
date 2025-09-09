import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Layered ambient field */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_30%,rgba(0,180,255,0.35),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,160,255,0.25),transparent_55%)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04),transparent)] animate-pulse [animation-duration:6s]"
          style={{ transform: `translateX(${mousePosition.x * 12}px)` }}
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_80px)] opacity-5" />
      </div>

      {/* Subtle concentric interaction ring */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div
          className="relative w-[900px] h-[900px] opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${
              mousePosition.y * 12
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-cyan-500/10"
              style={{
                transform: `scale(${0.35 + i * 0.18})`,
                backdropFilter: "blur(2px)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content wrapper */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Primary Heading & Subheading FIRST (moved above logo per request) */}
          <div className="inline-flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2 mb-6 shadow-inner shadow-white/5">
            <span className="text-[11px] tracking-[0.2em] font-medium brand-blue-text">
              MULTICHAIN DAO & LIQUIDITY LAYER
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 relative heading-split"
            data-delay="100"
            aria-label="Warp DAO"
          >
            Warp DAO
          </h1>

          <p
            className="text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-3xl mx-auto mb-8"
            data-delay="200"
          >
            A governance‑directed execution & liquidity layer spanning AVAX,
            Hedera, Flare & SGB. Execute trades, direct emissions, and expand
            protocol primitives with transparent, on‑chain coordination.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            data-delay="400"
          >
            <Link href="#features">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-10 h-12 bg-gradient-to-r from-[#0554F2] to-[#023cba] hover:from-[#0462ff] hover:to-[#0554F2] transition-all duration-500 text-white font-medium shadow-lg shadow-blue-600/30"
              >
                <span className="relative z-10 flex items-center tracking-wide text-sm md:text-base">
                  Launch App
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </Button>
            </Link>
            <Link href="#about" className="group">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-12 border-[#0554F2]/40 bg-white/5 hover:bg-[#0554F2]/10 transition-all duration-500 backdrop-blur-sm brand-blue-text hover:brightness-110 text-sm md:text-base"
              >
                <Sparkles className="mr-2 w-4 h-4" />
                Why Warp DAO
              </Button>
            </Link>
          </div>

          {/* Supporting description panel */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 via-white/2 to-transparent blur-xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl px-6 py-6 md:px-10 md:py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                Provide and route liquidity, shape emissions & listings, and
                compose emerging on‑chain modules through a unified DAO governed
                surface.
              </p>
            </div>
          </div>

          {/* Token Metrics Section (with logo) */}
          <TokenMetrics />
        </div>
      </div>
    </section>
  );
}

export default Hero;

// --- Token Metrics (mock data) ---
interface TokenStats {
  price: number; // USD
  change24h: number; // percent
  marketCap: number; // USD
  volume24h: number; // USD
}

const mockStats: TokenStats = {
  price: 0.0195,
  change24h: 4.82,
  marketCap: 17853210,
  volume24h: 2543091,
};

function formatNumber(num: number, opts: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
    ...opts,
  }).format(num);
}

function TokenMetrics() {
  // Could later be wired to live API; static for now.
  const [stats] = useState<TokenStats>(mockStats);

  const changePositive = stats.change24h >= 0;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(4,100,255,0.25),transparent_60%)]" />
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start">
            <div className="relative group">
              <Image
                src="/images/logo.png"
                alt="Warp Token"
                width={92}
                height={92}
                className="w-20 h-20 rounded-2xl ring-1 ring-white/10 shadow-lg shadow-black/40 group-hover:ring-cyan-400/30 transition-all"
              />
              <div className="pointer-events-none absolute -inset-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Metrics */}
          <Metric
            label="Price"
            value={`$${stats.price.toFixed(2)}`}
            sub="USD"
          />
          <Metric
            label="24h Change"
            value={`${changePositive ? "+" : ""}${stats.change24h.toFixed(2)}%`}
            sub={changePositive ? "Up" : "Down"}
            valueClass={changePositive ? "text-emerald-400" : "text-rose-400"}
          />
          <Metric
            label="Market Cap"
            value={`$${formatNumber(stats.marketCap)}`}
            sub="FDV est."
          />
          <Metric
            label="24h Volume"
            value={`$${formatNumber(stats.volume24h)}`}
            sub="DEX volume"
          />
        </div>
      </div>
    </div>
  );
}

interface MetricProps {
  label: string;
  value: string;
  sub?: string;
  valueClass?: string;
}

function Metric({ label, value, sub, valueClass }: MetricProps) {
  return (
    <div className="text-center md:text-left">
      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
        {label}
      </div>
      <div
        className={`text-lg md:text-xl font-semibold text-white leading-tight ${
          valueClass || ""
        }`}
      >
        {value}
      </div>
      {sub && (
        <div className="text-[12px] text-slate-500 mt-0.5 font-medium">
          {sub}
        </div>
      )}
    </div>
  );
}
