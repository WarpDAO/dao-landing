import Image from "next/image";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import logo from "/public/images/logo.png";
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#040507]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-14">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Warp DAO"
                layout="responsive"
                className="w-8 h-8 rounded-lg ring-1 ring-white/10"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              A modular, governance‑directed multichain liquidity & execution
              layer. Reduce fragmentation. Amplify aligned coordination.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/warpdaoeth"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
              >
                <FaTelegram className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-300 uppercase">
                Platform
              </h3>
              <ul className="space-y-2">
                {[
                  "about",
                  "governance",
                  "features",
                  "architecture",
                  "networks",
                  "faq",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l}`}
                      className="text-slate-500 hover:text-cyan-300 transition-colors"
                    >
                      {l.charAt(0).toUpperCase() + l.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-300 uppercase">
                Resources
              </h3>
              <ul className="space-y-2">
                {["Docs", "Whitepaper", "Brand", "Security"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-cyan-300 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-300 uppercase">
              Updates
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe for governance window alerts & module launch notes.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="you@domain.xyz"
                className="flex-1 h-11 rounded-xl bg-white/[0.04] border border-white/10 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
              <button className="h-11 px-5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-sm font-medium hover:from-cyan-500 hover:to-blue-600 transition-colors">
                Join
              </button>
            </form>
            <div className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
              By subscribing you agree to potential on‑chain snapshot reminder
              emails.
            </div>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-white/10 text-[11px] flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-slate-500 tracking-wide">
          <div>© {new Date().getFullYear()} Warp DAO. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            {["Terms", "Privacy", "Brand", "Security"].map((i) => (
              <a
                key={i}
                href="#"
                className="hover:text-cyan-300 transition-colors"
              >
                {i}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
