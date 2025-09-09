"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import LandingHero from "@/components/landing-hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { SupportedNetworks } from "@/components/supported-networks";
import GovernanceSpotlight from "@/components/governance-spotlight";
import Architecture from "@/components/architecture";
import FAQ from "@/components/faq";
import { JoinCommunity } from "@/components/join-community";
import StatsBar from "@/components/stats-bar";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div className="min-h-screen relative text-white bg-black selection:bg-cyan-500/30">
      <Navigation />
      <LandingHero />
      <StatsBar />
      <main className="relative z-10">
        <About />
        <GovernanceSpotlight />
        {/* <Features /> */}
        <Architecture />
        <SupportedNetworks />
        <FAQ />
        <JoinCommunity />
        <Footer />
      </main>
    </div>
  );
}
