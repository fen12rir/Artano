"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Inbox,
  Calendar,
  FileText,
  Search,
  Bell,
  ShieldCheck,
  CheckCircle,
  Clock,
  ChevronRight,
  Bot,
  User,
  Sliders,
  Send,
  MoreVertical,
  Activity,
  Layers,
} from "lucide-react";

export function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "cases" | "inbox" | "security">("overview");

  return (
    <section id="platform" className="py-24 bg-brand-elevated/40 border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-surface border border-brand-border rounded text-xs font-mono uppercase tracking-wider text-brand-accent mb-4">
            Platform Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4">
            The Executive Command Surface
          </h2>
          <p className="text-brand-secondary text-base sm:text-lg leading-relaxed">
            A unified operating environment engineered with real-time operational telemetry, verified intelligence, and direct human-in-the-loop controls.
          </p>
        </div>

        {/* Tab Selector for Interactive Exploration */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-brand-border pb-4">
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
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-brand-surface text-brand-accent border border-brand-accent/40 shadow-sm"
                    : "text-brand-secondary hover:text-brand-text hover:bg-brand-surface/40 border border-transparent"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Enterprise Dashboard Container */}
        <div className="rounded-xl bg-brand-bg border border-brand-strong-border shadow-2xl overflow-hidden">
          
          {/* Top Bar of Dashboard */}
          <div className="px-4 py-3 bg-brand-elevated border-b border-brand-border flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-border" />
                <span className="font-serif font-bold text-xs tracking-wider text-brand-text">
                  EIRENEOPS COMMAND
                </span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-brand-tertiary">
                WORKSPACE: PRINCIPAL_ESTATE_01
              </span>
            </div>

            {/* Center Search Simulation */}
            <div className="hidden md:flex items-center gap-2 bg-brand-surface px-3 py-1.5 rounded-lg border border-brand-border w-80 text-xs text-brand-tertiary">
              <Search className="w-3.5 h-3.5 text-brand-secondary" />
              <span>Search documents, briefs, actions, or ask AI...</span>
              <kbd className="ml-auto text-[10px] font-mono bg-brand-bg px-1.5 py-0.5 rounded border border-brand-border">
                ⌘K
              </kbd>
            </div>

            {/* Right User Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-brand-surface rounded border border-brand-border text-[11px] font-mono text-brand-success">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                <span>ONLINE · ENCRYPTED</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent text-xs font-serif font-bold">
                EV
              </div>
            </div>

          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
            
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
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-bg border border-brand-border text-brand-tertiary">
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
                  <span className="text-brand-success">IDLE / READY</span>
                </div>
              </div>
            </div>

            {/* Center Content Workspace */}
            <div className="lg:col-span-7 p-4 sm:p-6 space-y-6 overflow-y-auto max-h-[620px]">
              
              {/* KPI Telemetry Header */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[10px] font-mono text-brand-tertiary uppercase">Pending Approvals</div>
                  <div className="text-xl font-serif font-bold text-brand-text mt-1">3 Required</div>
                  <div className="text-[10px] text-brand-accent font-mono mt-0.5">2 Contracts · 1 Payout</div>
                </div>

                <div className="p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[10px] font-mono text-brand-tertiary uppercase">Guarded Hours</div>
                  <div className="text-xl font-serif font-bold text-brand-text mt-1">4.5h Deep</div>
                  <div className="text-[10px] text-brand-success font-mono mt-0.5">0 Conflict Breaches</div>
                </div>

                <div className="p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[10px] font-mono text-brand-tertiary uppercase">Agentic Actions</div>
                  <div className="text-xl font-serif font-bold text-brand-text mt-1">42 Resolved</div>
                  <div className="text-[10px] text-brand-secondary font-mono mt-0.5">100% Audit Verified</div>
                </div>

                <div className="p-3 bg-brand-elevated border border-brand-border rounded-lg">
                  <div className="text-[10px] font-mono text-brand-tertiary uppercase">Active Matters</div>
                  <div className="text-xl font-serif font-bold text-brand-text mt-1">14 Tracked</div>
                  <div className="text-[10px] text-brand-secondary font-mono mt-0.5">3 Critical Deadlines</div>
                </div>
              </div>

              {/* Action Required: Approvals & Tasks */}
              <div className="bg-brand-elevated border border-brand-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                      High-Priority Human Approval Queue
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-tertiary">3 Items Awaiting Review</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 bg-brand-bg border border-brand-strong-border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-brand-text">
                        <span className="px-1.5 py-0.5 text-[10px] font-mono bg-brand-danger/20 text-brand-danger border border-brand-danger/30 rounded">
                          LEGAL REVIEW
                        </span>
                        Master Service Agreement - Annex B Liability Cap Redline
                      </div>
                      <p className="text-[11px] text-brand-secondary mt-1">
                        Agent extracted 2 unaligned indemnification terms against standard advisory policy.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 bg-brand-accent text-brand-bg text-xs font-medium rounded hover:bg-brand-accent-light">
                        Approve
                      </button>
                      <button className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-secondary text-xs rounded hover:text-brand-text">
                        Compare Diff
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-brand-bg border border-brand-border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-brand-text">
                        <span className="px-1.5 py-0.5 text-[10px] font-mono bg-brand-accent/20 text-brand-accent border border-brand-accent/30 rounded">
                          CALENDAR LOCK
                        </span>
                        VIP Private Session Request: Board Member Hold
                      </div>
                      <p className="text-[11px] text-brand-secondary mt-1">
                        Proposed time slots analyzed against Foundation Matrix. 15:30 Thursday clear of deep work blocks.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 bg-brand-accent text-brand-bg text-xs font-medium rounded hover:bg-brand-accent-light">
                        Lock Slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Documents & Briefings */}
              <div className="bg-brand-elevated border border-brand-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                      Recent Intelligence & Case Briefings
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-brand-accent hover:underline cursor-pointer">
                    Vault Index →
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-brand-bg border border-brand-border rounded-lg">
                    <div className="text-xs font-medium text-brand-text mb-1">
                      Quarterly Executive Briefing - Q3
                    </div>
                    <div className="text-[10px] text-brand-tertiary font-mono">
                      Generated 08:30 today · 14 citations verified
                    </div>
                  </div>
                  <div className="p-3 bg-brand-bg border border-brand-border rounded-lg">
                    <div className="text-xs font-medium text-brand-text mb-1">
                      Deposition Summary: Case #2026-CV-982
                    </div>
                    <div className="text-[10px] text-brand-tertiary font-mono">
                      Verified transcript · Speaker attribution complete
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Embedded AI Operational Assistant */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-brand-border bg-brand-elevated/70 p-4 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-semibold text-brand-text">AI Operational Co-Pilot</span>
                  </div>
                  <span className="text-[9px] font-mono bg-brand-surface px-1.5 py-0.5 rounded text-brand-accent border border-brand-border">
                    DETERMINISTIC
                  </span>
                </div>

                {/* Simulated Conversation Feed */}
                <div className="space-y-3 text-xs">
                  <div className="p-2.5 bg-brand-surface/60 rounded-lg text-brand-secondary">
                    <div className="text-[10px] font-mono text-brand-tertiary mb-1">USER PROMPT</div>
                    <p className="text-brand-text">
                      “Summarize the key indemnification exposure in the updated draft from counsel.”
                    </p>
                  </div>

                  <div className="p-2.5 bg-brand-bg border border-brand-border rounded-lg text-brand-secondary space-y-1.5">
                    <div className="text-[10px] font-mono text-brand-accent flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED CITATION
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
                  <button className="p-1 bg-brand-accent text-brand-bg rounded">
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-[9px] font-mono text-brand-tertiary text-center mt-1.5">
                  Strict Human Gate Enforcement Active
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
