import React from "react";
import { CheckCircle2, ArrowRight, Zap, Settings2 } from "lucide-react";

interface StandardCustomProps {
  onRequestDemo: () => void;
}

export function StandardCustom({ onRequestDemo }: StandardCustomProps) {
  return (
    <section className="py-24 bg-brand-elevated/30 border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-surface border border-brand-border rounded text-xs font-mono uppercase tracking-wider text-brand-accent mb-4">
            Deployment Paths
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4">
            Start with a proven foundation. Expand when your organization needs more.
          </h2>
          <p className="text-brand-secondary text-base sm:text-lg leading-relaxed">
            EireneOps provides both structured, rapid-deployment platforms and deeply customized enterprise solutions tailored to specific organizational workflows.
          </p>
        </div>

        {/* Two Paths Comparison Grid (Not a generic pricing table) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Path 1: Standard Deployment */}
          <div className="bg-brand-elevated border border-brand-border rounded-xl p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface rounded-full border border-brand-border text-xs font-mono text-brand-accent">
                  <Zap className="w-3.5 h-3.5" /> RAPID DEPLOYMENT
                </div>
                <span className="text-xs font-mono text-brand-tertiary">STRUCTURED</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-2">
                Standard Platform
              </h3>
              <p className="text-sm text-brand-accent font-medium mb-4">
                Immediate operational leverage with our battle-tested executive and legal foundation.
              </p>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-8">
                Designed for solo principals, executive assistants, legal boutiques, and operational teams looking for an immediate upgrade to their productivity, calendar protection, and document intelligence.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  "Core EireneOps Executive Command Dashboard",
                  "AI Document Synthesis & Legal Matter Assistant",
                  "Zero-Inbox VIP Triage & Tone-Matched Drafting",
                  "Foundation Matrix Calendar Guarding",
                  "Secure Media & Briefings Vault",
                  "Standard System Integrations (Google, Outlook, Slack)",
                  "Dedicated Customer Success Onboarding",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border">
              <button
                onClick={onRequestDemo}
                className="w-full py-3 bg-brand-surface border border-brand-strong-border hover:border-brand-accent text-brand-text hover:text-brand-accent rounded-lg text-sm font-medium transition-all"
              >
                Explore Standard Platform
              </button>
            </div>
          </div>

          {/* Path 2: Custom Enterprise Architecture */}
          <div className="bg-brand-elevated border border-brand-accent/50 rounded-xl p-8 flex flex-col justify-between relative shadow-xl shadow-brand-accent/5">
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-brand-accent text-brand-bg rounded text-[11px] font-mono font-bold tracking-wider uppercase">
              ENTERPRISE TAILORED
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface rounded-full border border-brand-border text-xs font-mono text-brand-accent">
                  <Settings2 className="w-3.5 h-3.5" /> BESPOKE ENGINEERING
                </div>
                <span className="text-xs font-mono text-brand-tertiary">ORGANIZATION-SPECIFIC</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-2">
                Custom Systems
              </h3>
              <p className="text-sm text-brand-accent font-medium mb-4">
                Engineered from the ground up to match proprietary operations, compliance, and systems.
              </p>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-8">
                Designed for multi-partner firms, corporate enterprises, specialized industry teams, and high-security institutions requiring tailored agentic workflows, custom interfaces, and strict tenancy options.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  "Everything in Standard Foundation",
                  "Custom Agentic Engineering & Multi-Step Workflows",
                  "Proprietary ERP & Knowledge Graph Bridges",
                  "Organization-Specific Role & Permission Matrices",
                  "Custom Dashboards & Specialized Operator Consoles",
                  "Private VPC & Sovereign Cloud Deployment Options",
                  "White-Glove Engineering & Long-Term Technical Partnership",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border">
              <button
                onClick={onRequestDemo}
                className="w-full py-3 bg-brand-accent text-brand-bg hover:bg-brand-accent-light rounded-lg text-sm font-medium transition-all shadow-md"
              >
                Discuss Custom Solution
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
