"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Inbox,
  Calendar,
  FileText,
  Search,
  ShieldCheck,
  Clock,
  Bot,
  Send,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

export function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "cases" | "inbox" | "security">("overview");

  return (
    <section id="platform" className="py-16 sm:py-20 lg:py-24 bg-brand-elevated/40 border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-surface border border-brand-border rounded text-xs font-mono uppercase tracking-wider text-brand-accent mb-4">
            Platform Experience
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            The Executive Command Surface
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            A unified operating environment engineered with real-time operational telemetry, verified intelligence, and direct human-in-the-loop controls.
          </p>
        </motion.div>

        {/* Tab Selector for Interactive Exploration */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-4 border-b border-brand-border">
          {[
            { id: "overview", label: "Executive Overview", icon: LayoutDashboard },
            { id: "cases", label: "Matters & Clients", icon: FileText },
            { id: "inbox", label: "Triage & Assistant", icon: Inbox },
            { id: "security", label: "Security & Governance", icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-brand-surface text-brand-accent border border-brand-accent/40 shadow-sm"
                    : "text-brand-secondary hover:text-brand-text hover:bg-brand-surface/40 border border-transparent"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Enterprise Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-brand-bg border border-brand-strong-border shadow-2xl overflow-hidden"
        >
          
          {/* Top Bar of Dashboard */}
          <div className="px-3.5 sm:px-4 py-3 bg-brand-elevated border-b border-brand-border flex items-center justify-between gap-3">
            
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
                <span className="font-serif font-bold text-xs tracking-wider text-brand-text">
                  EIRENEOPS COMMAND
                </span>
              </div>
              <span className="hidden md:inline-block text-[11px] font-mono text-brand-tertiary truncate">
                WORKSPACE: PRINCIPAL_ESTATE_01
              </span>
            </div>

            {/* Center Search Simulation */}
            <div className="hidden lg:flex items-center gap-2 bg-brand-surface px-3 py-1.5 rounded-lg border border-brand-border w-72 xl:w-80 text-xs text-brand-tertiary">
              <Search className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
              <span className="truncate">Search documents, briefs, actions...</span>
              <kbd className="ml-auto text-[10px] font-mono bg-brand-bg px-1.5 py-0.5 rounded border border-brand-border shrink-0">
                ⌘K
              </kbd>
            </div>

            {/* Right User Status */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-brand-surface rounded border border-brand-border text-[10px] sm:text-[11px] font-mono text-brand-success">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse shrink-0" />
                <span className="hidden xs:inline">ONLINE · ENCRYPTED</span>
                <span className="xs:hidden">SECURE</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent text-xs font-serif font-bold shrink-0">
                EV
              </div>
            </div>

          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Micro-Sidebar (Desktop) */}
            <div className="hidden lg:flex lg:col-span-2 border-r border-brand-border bg-brand-elevated/40 p-3 flex-col justify-between">
              <div className="space-y-1">
                {[
                  { name: "Overview", icon: LayoutDashboard, active: true },
                  { name: "Executive Inbox", icon: Inbox, badge: "3 VIP" },
                  { name: "Foundation Matrix", icon: Calendar, badge: "Guarded" },
                  { name: "Legal & Matters", icon: FileText, badge: "14" },
                  { name: "Media & Vault", icon: Layers },
                  { name: "AI Agent Ops", icon: Bot, badge: "Active" },
                  { name: "Security Audit", icon: ShieldCheck },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                        item.active
                          ? "bg-brand-surface text-brand-accent border border-brand-border font-medium"
                          : "text-brand-secondary hover:bg-brand-surface/50 hover:text-brand-text"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-bg border border-brand-border text-brand-tertiary shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-2.5 bg-brand-surface/60 border border-brand-border rounded-lg text-[11px] font-mono text-brand-secondary space-y-1">
                <div className="flex justify-between">
                  <span className="text-brand-tertiary">HUMAN GATES:</span>
                  <span className="text-brand-accent">ENFORCED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-tertiary">AGENT STATE:</span>
                  <span className="text-brand-success">READY</span>
                </div>
              </div>
            </div>

            {/* Center Content Workspace */}
            <div className="lg:col-span-7 p-3.5 sm:p-5 lg:p-6 space-y-5 sm:space-y-6 overflow-y-auto">
              
              {/* KPI Telemetry Header */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[9px] sm:text-[10px] font-mono text-brand-tertiary uppercase truncate">Pending Approvals</div>
                  <div className="text-base sm:text-xl font-serif font-bold text-brand-text mt-1">3 Required</div>
                  <div className="text-[9px] sm:text-[10px] text-brand-accent font-mono mt-0.5 truncate">2 Contracts · 1 Payout</div>
                </div>

                <div className="p-2.5 sm:p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[9px] sm:text-[10px] font-mono text-brand-tertiary uppercase truncate">Guarded Hours</div>
                  <div className="text-base sm:text-xl font-serif font-bold text-brand-text mt-1">4.5h Deep</div>
                  <div className="text-[9px] sm:text-[10px] text-brand-success font-mono mt-0.5 truncate">0 Conflict Breaches</div>
                </div>

                <div className="p-2.5 sm:p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[9px] sm:text-[10px] font-mono text-brand-tertiary uppercase truncate">Agentic Actions</div>
                  <div className="text-base sm:text-xl font-serif font-bold text-brand-text mt-1">42 Resolved</div>
                  <div className="text-[9px] sm:text-[10px] text-brand-secondary font-mono mt-0.5 truncate">100% Audit Verified</div>
                </div>

                <div className="p-2.5 sm:p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[9px] sm:text-[10px] font-mono text-brand-tertiary uppercase truncate">Active Matters</div>
                  <div className="text-base sm:text-xl font-serif font-bold text-brand-text mt-1">14 Tracked</div>
                  <div className="text-[9px] sm:text-[10px] text-brand-secondary font-mono mt-0.5 truncate">3 Critical Deadlines</div>
                </div>
              </div>

              {/* Action Required: Approvals & Tasks */}
              <div className="bg-brand-elevated border border-brand-border rounded-lg p-3.5 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Clock className="w-4 h-4 text-brand-accent shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-text truncate">
                      Human Approval Queue
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-brand-tertiary shrink-0">3 Awaiting Review</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 bg-brand-bg border border-brand-strong-border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-medium text-brand-text">
                        <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono bg-brand-danger/20 text-brand-danger border border-brand-danger/30 rounded shrink-0">
                          LEGAL REVIEW
                        </span>
                        <span className="leading-snug">MSA - Annex B Liability Cap Redline</span>
                      </div>
                      <p className="text-[11px] text-brand-secondary mt-1 leading-normal">
                        Agent extracted 2 unaligned indemnification terms against standard advisory policy.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 bg-brand-accent text-brand-bg text-xs font-medium rounded hover:bg-brand-accent-light transition-colors">
                        Approve
                      </button>
                      <button className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-secondary text-xs rounded hover:text-brand-text transition-colors">
                        Diff
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-brand-bg border border-brand-border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-medium text-brand-text">
                        <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono bg-brand-accent/20 text-brand-accent border border-brand-accent/30 rounded shrink-0">
                          CALENDAR
                        </span>
                        <span className="leading-snug">VIP Private Session: Board Member Hold</span>
                      </div>
                      <p className="text-[11px] text-brand-secondary mt-1 leading-normal">
                        Proposed time slots analyzed against Foundation Matrix. 15:30 Thursday clear.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 bg-brand-accent text-brand-bg text-xs font-medium rounded hover:bg-brand-accent-light transition-colors">
                        Lock Slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Documents & Briefings */}
              <div className="bg-brand-elevated border border-brand-border rounded-lg p-3.5 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-secondary shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-text truncate">
                      Recent Intelligence & Case Briefings
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-brand-accent hover:underline cursor-pointer shrink-0">
                    Vault →
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-2.5 sm:p-3 bg-brand-bg border border-brand-border rounded-lg">
                    <div className="text-xs font-medium text-brand-text mb-1">
                      Quarterly Executive Briefing - Q3
                    </div>
                    <div className="text-[10px] text-brand-tertiary font-mono">
                      Generated 08:30 today · 14 citations
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 bg-brand-bg border border-brand-border rounded-lg">
                    <div className="text-xs font-medium text-brand-text mb-1">
                      Deposition: Case #2026-CV-982
                    </div>
                    <div className="text-[10px] text-brand-tertiary font-mono">
                      Verified transcript · Attributed
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Embedded AI Operational Assistant */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-brand-border bg-brand-elevated/70 p-3.5 sm:p-4 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-brand-accent shrink-0" />
                    <span className="text-xs font-semibold text-brand-text truncate">AI Operational Co-Pilot</span>
                  </div>
                  <span className="text-[9px] font-mono bg-brand-surface px-1.5 py-0.5 rounded text-brand-accent border border-brand-border shrink-0">
                    DETERMINISTIC
                  </span>
                </div>

                {/* Simulated Conversation Feed */}
                <div className="space-y-2.5 sm:space-y-3 text-xs">
                  <div className="p-2.5 bg-brand-surface/60 rounded-lg text-brand-secondary">
                    <div className="text-[10px] font-mono text-brand-tertiary mb-1">USER PROMPT</div>
                    <p className="text-brand-text text-[11px] leading-relaxed">
                      “Summarize the key indemnification exposure in the updated draft from counsel.”
                    </p>
                  </div>

                  <div className="p-2.5 bg-brand-bg border border-brand-border rounded-lg text-brand-secondary space-y-1.5">
                    <div className="text-[10px] font-mono text-brand-accent flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 shrink-0" /> VERIFIED CITATION
                    </div>
                    <p className="text-brand-text text-[11px] leading-relaxed">
                      Clause 14.2 uncaps consequential damages for data breach incidents. Standard firm limit is $2,000,000.
                    </p>
                    <div className="p-2 bg-brand-surface rounded text-[10px] font-mono text-brand-secondary">
                      Suggested Action: Inject Standard Addendum A-4.
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-4 pt-3 border-t border-brand-border">
                <div className="flex items-center gap-2 bg-brand-bg border border-brand-border rounded-lg px-2.5 py-1.5">
                  <input
                    type="text"
                    placeholder="Instruct assistant..."
                    className="w-full bg-transparent text-xs text-brand-text placeholder:text-brand-tertiary focus:outline-none"
                    disabled
                  />
                  <button className="p-1 bg-brand-accent text-brand-bg rounded shrink-0">
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-[9px] font-mono text-brand-tertiary text-center mt-1.5">
                  Strict Human Gate Enforcement Active
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
