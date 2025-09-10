import React from "react";
import {
  FaXTwitter,
  FaTelegram,
  FaDiscord,
  FaMedium,
  FaGithub,
  FaRedditAlien,
} from "react-icons/fa6";

// Central definition so it's easy to update real links later
const socials: {
  name: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
  ring: string;
  delay: number;
}[] = [
  {
    name: "Telegram",
    href: "https://t.me/WarpDAO",
    icon: <FaTelegram className="w-6 h-6" />,
    gradient: "from-cyan-500/25 via-cyan-400/10 to-transparent",
    ring: "ring-cyan-400/30",
    delay: 0,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/warpdaoeth",
    icon: <FaXTwitter className="w-6 h-6" />,
    gradient: "from-blue-500/25 via-blue-400/10 to-transparent",
    ring: "ring-blue-400/30",
    delay: 100,
  },
  {
    name: "Discord",
    href: "https://discord.gg/p7gYu8kktE",
    icon: <FaDiscord className="w-6 h-6" />,
    gradient: "from-indigo-500/25 via-indigo-400/10 to-transparent",
    ring: "ring-indigo-400/30",
    delay: 200,
  },
  {
    name: "Medium",
    href: "https://warpdao.medium.com/",
    icon: <FaMedium className="w-6 h-6" />,
    gradient: "from-emerald-500/25 via-emerald-400/10 to-transparent",
    ring: "ring-emerald-400/30",
    delay: 300,
  },
  {
    name: "GitHub",
    href: "https://github.com/WarpDAO",
    icon: <FaGithub className="w-6 h-6" />,
    gradient: "from-slate-500/25 via-slate-400/10 to-transparent",
    ring: "ring-slate-400/30",
    delay: 400,
  },
  {
    name: "Paragraph",
    href: "https://paragraph.com/@warpdao",
    icon: <FaRedditAlien className="w-6 h-6" />,
    gradient: "from-orange-500/25 via-amber-400/10 to-transparent",
    ring: "ring-orange-400/30",
    delay: 500,
  },
];

export function JoinCommunity() {
  return (
    <section
      id="community"
      className="relative py-24 border-t border-white/5 bg-gradient-to-b from-[#05070B] to-black"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2 space-y-7">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Join The WarpDAO
            </h2>
            <p className="text-slate-300/85 text-base md:text-lg leading-relaxed max-w-xl">
              Contribute signal, delegate voting power, propose treasury
              strategies & collaborate on new module design. Help coordinate a
              resilient multichain liquidity system.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full pr-5 pl-2 h-11 border border-white/10 bg-white/[0.04] hover:border-cyan-400/40 hover:bg-white/[0.07] transition-colors"
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 ring-1 ${s.ring} group-hover:ring-white/40 border border-white/10 text-slate-300 group-hover:text-white`}
                  >
                    {s.icon}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400 group-hover:text-cyan-300">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl flex flex-col gap-6 shadow-[0_10px_60px_-25px_rgba(0,180,255,0.25)]">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold tracking-wide text-white/90">
                  Early Contributor Access
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  A contributor portal (phase 1) will enable role requests,
                  working group formation & reputation tracking. Register early
                  to secure delegate visibility.
                </p>
              </div>
              <button className="group relative inline-flex items-center justify-center h-12 rounded-full px-8 text-sm font-medium tracking-wide bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-md shadow-cyan-800/40 transition-all">
                Request Early Access
              </button>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 text-center">
                Beta portal – Q4 target
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
