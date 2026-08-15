"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Cpu, Terminal, FileText, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onRequestDemo: () => void;
}

export function Hero({ onRequestDemo }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle architectural background depth */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-raised/40 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* System Status / Credibility Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-brand-surface/80 border border-brand-border text-xs text-brand-secondary mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-text">
                Autonomous Operational Infrastructure
              </span>
              <span className="text-brand-tertiary">|</span>
              <span className="text-brand-accent text-[11px]">v4.2 Production</span>
            </div>

            {/* Main Headline (Single h1) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-text tracking-tight leading-[1.1] mb-6">
              Operational intelligence for the people who keep organizations moving.
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-brand-secondary font-normal leading-relaxed mb-8 max-w-2xl">
              EireneOps combines software, artificial intelligence, automation, and controlled agentic workflows into unified, high-security platforms engineered around actual executive and legal practice.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-accent text-brand-bg font-medium text-sm rounded-lg hover:bg-brand-accent-light transition-all shadow-md active:scale-[0.98]"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-surface/70 hover:bg-brand-surface text-brand-text border border-brand-border hover:border-brand-strong-border font-medium text-sm rounded-lg transition-all"
              >
                Explore the Platform
              </a>
            </div>

            {/* Trust & Security Micro-signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 border-t border-brand-border/60 text-xs text-brand-tertiary font-mono">
              <div className="flex items-center gap-1.5 text-brand-secondary">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>Zero Trust Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 text-brand-secondary">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span>Deterministic Human Control</span>
              </div>
              <div className="flex items-center gap-1.5 text-brand-secondary">
                <Cpu className="w-4 h-4 text-brand-accent" />
                <span>Custom Agentic Workflows</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive CSS/SVG System Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative framing element */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-brand-accent/20 via-brand-border to-transparent opacity-40 blur-sm" />

              {/* Main Visual Surface */}
              <div className="relative rounded-xl bg-brand-elevated border border-brand-strong-border p-5 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Header bar of the visual */}
                <div className="flex items-center justify-between pb-4 border-b border-brand-border mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-danger/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-accent/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-success/60" />
                    <span className="ml-2 font-mono text-[11px] text-brand-tertiary">eireneops://core-kernel</span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-accent bg-brand-surface px-2 py-0.5 rounded border border-brand-border">
                    SYSTEM SYNCHRONIZED
                  </span>
                </div>

                {/* Simulated Real-Time System Stream */}
                <div className="space-y-3 font-mono text-xs">
                  
                  {/* Item 1: Inbound Executive Request */}
                  <div className="p-3 bg-brand-bg rounded-lg border border-brand-border/70 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-brand-accent flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" /> AGENT_INGEST #8841
                      </span>
                      <span className="text-brand-tertiary">00:02.4s ago</span>
                    </div>
                    <p className="text-brand-text font-sans text-xs">
                      Incoming: Multi-party contract revision review & schedule reconciliation for Principal.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-brand-secondary">
                      <span className="px-1.5 py-0.5 bg-brand-surface rounded text-brand-tertiary">Source: Legal Portal</span>
                      <span className="text-brand-success font-medium">Confidence: 99.4%</span>
                    </div>
                  </div>

                  {/* Item 2: Security & Routing Check */}
                  <div className="p-3 bg-brand-surface/80 rounded-lg border border-brand-border/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-brand-accent" />
                      <div>
                        <div className="text-brand-text font-medium font-sans text-xs">Permission Layer Passed</div>
                        <div className="text-[10px] text-brand-tertiary">Role: Managing Partner · Verified Session</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-success bg-brand-bg px-2 py-1 rounded border border-brand-border">
                      CLEARED
                    </span>
                  </div>

                  {/* Item 3: Synthesized Output & Action Ready */}
                  <div className="p-3 bg-brand-bg rounded-lg border border-brand-accent/40 relative">
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                      <span className="text-[9px] text-brand-accent font-mono">AWAITING APPROVAL</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-secondary mb-1 text-[11px]">
                      <FileText className="w-3.5 h-3.5 text-brand-accent" /> Briefing Summary Generated
                    </div>
                    <p className="text-brand-text font-sans text-xs mb-2">
                      “3 material clause variances detected in Section 14 (Indemnity). Proposed redline prepared with side-by-side comparison.”
                    </p>
                    <div className="flex gap-2">
                      <div className="px-2.5 py-1 bg-brand-accent text-brand-bg rounded text-[10px] font-sans font-medium">
                        One-Tap Approve
                      </div>
                      <div className="px-2.5 py-1 bg-brand-surface border border-brand-border text-brand-secondary rounded text-[10px] font-sans">
                        Inspect Citations
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between text-[10px] font-mono text-brand-tertiary">
                  <span>LATENCY: 14ms</span>
                  <span>ENCRYPTION: HARDWARE-BOUND</span>
                  <span>AUDIT: LOGGED</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
