"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is WarpDAO?",
    a: "WarpDAO is a community-governed execution and liquidity layer coordinating multichain trading, liquidity incentives and protocol evolution across supported networks.",
  },
  {
    q: "How is WarpDAO different from a typical DeFi platform?",
    a: "Rather than a single-purpose DEX, WarpDAO fuses cross‑chain liquidity, on‑chain governance and treasury strategy so stakeholders shape emissions, listings and product direction collaboratively.",
  },
  {
    q: "What role does the token play?",
    a: "The native token aligns incentives: it is used for governance voting, fee alignment, liquidity incentives and potential future module access as the DAO expands.",
  },
  {
    q: "How do proposals work?",
    a: "Token holders or delegated stewards submit proposals (emissions changes, listings, treasury actions). After a review window, proposals enter a formal on‑chain vote with quorum + majority thresholds.",
  },
  {
    q: "Is my liquidity self‑custodied?",
    a: "Yes. Smart contracts are non‑custodial; you maintain control and can withdraw subject only to protocol level constraints like cooldowns on specific incentive programs.",
  },
  {
    q: "Which chains are supported today?",
    a: "Initial deployments focus on AVAX, Hedera, Flare & Songbird with an expansion framework for additional EVM or emerging runtimes subject to DAO approval.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 px-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(0,160,255,0.15),transparent_60%),radial-gradient(circle_at_85%_70%,rgba(0,180,255,0.12),transparent_55%)] opacity-60" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_70px)] opacity-10" />
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 heading-split">
            FAQ
          </h2>
          <p className="text-slate-300/85 max-w-2xl mx-auto text-lg leading-relaxed">
            Key answers about the mission, governance mechanics and how to
            participate in WarpDAO.
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>
        <ul className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                className="border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-5 group"
                >
                  <span className="font-medium text-base md:text-lg text-white/90 group-hover:text-white tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className={`text-cyan-400 text-xl transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 text-sm md:text-base leading-relaxed text-slate-400">
                      {item.a}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
