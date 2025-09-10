"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
// Use static path from public directory to avoid import issues
const headerImg = "/images/header.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Governance", href: "#governance" },
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#architecture" },
    { name: "Networks", href: "#networks" },
    { name: "FAQ", href: "#faq" },
    { name: "Community", href: "#community" },
  ];

  // Handle scroll detection + progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = [
      "about",
      "governance",
      "features",
      "architecture",
      "networks",
      "faq",
      "community",
    ];
    const observers: IntersectionObserver[] = [];

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveHash(`#${id}`);
              }
            });
          },
          { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleMobileNavClick = (href: string) => {
    scrollToSection(href.substring(1));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main"
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-[0_4px_28px_-12px_rgba(0,160,255,0.25)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 h-16 flex items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-md"
          >
            <Image
              src={headerImg}
              alt="WarpDAO logo"
              priority
              width={32}
              height={32}
              className="h-10 w-auto rounded-md ring-1 ring-white/10"
            />
          </Link>

          {/* Primary Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-[11px] font-medium tracking-[0.14em] uppercase rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                    isActive
                      ? "text-cyan-300 bg-white/5"
                      : "text-slate-400 hover:text-cyan-300 hover:bg-white/5"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Spacer to push right group */}
          <div className="flex-1" />

          {/* Social */}
          <div className="hidden md:flex items-center gap-2 pr-2">
            <a
              href="https://x.com/warpdaoeth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/WarpDAO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              <FaTelegram className="w-4 h-4" />
            </a>
          </div>
          <Link
            href="/"
            className="hidden sm:inline-flex group relative items-center gap-1.5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-600/30 to-blue-700/30 px-5 py-2 text-[11px] font-medium tracking-[0.15em] text-cyan-300 hover:text-white hover:border-cyan-400 transition-all overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            Launch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-md border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Progress bar (subtle) */}
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 transition-[width] duration-150"
            style={{
              width: `${Math.min(100, scrollProgress * 100).toFixed(2)}%`,
            }}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 inset-x-0 bg-[#07090d] border-t border-white/10 backdrop-blur-xl shadow-xl">
            <div className="px-5 py-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationItems.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleMobileNavClick(item.href)}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors",
                      isActive
                        ? "text-cyan-300 bg-white/5"
                        : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <a
                    href="https://x.com/warpdaoeth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/WarpDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="w-5 h-5" />
                  </a>
                </div>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-600/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:border-cyan-400 hover:text-white transition-colors"
                >
                  Launch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
