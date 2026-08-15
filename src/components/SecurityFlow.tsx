import React from "react";
import { User, KeyRound, ShieldCheck, Cpu, UserCheck, ScrollText, ArrowRight } from "lucide-react";

export function SecurityFlow() {
  const flowNodes = [
    {
      step: "01",
      icon: User,
      title: "Authenticated Principal",
      desc: "Hardware token or biometric session initiated.",
    },
    {
      step: "02",
      icon: KeyRound,
      title: "Permission Gate",
      desc: "Dynamic role-based access & tenancy validation.",
    },
    {
      step: "03",
      icon: Cpu,
      title: "Isolated Processing",
      desc: "Air-gapped models; zero customer data model training.",
    },
    {
      step: "04",
      icon: UserCheck,
      title: "Mandatory Human Gate",
      desc: "Critical outcomes require explicit operator sign-off.",
      highlight: true,
    },
    {
      step: "05",
      icon: ScrollText,
      title: "Immutable Audit Log",
      desc: "Cryptographically verifiable operational ledger.",
    },
  ];

  return (
    <section id="security" className="py-24 bg-brand-elevated/40 border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-surface border border-brand-border rounded text-xs font-mono uppercase tracking-wider text-brand-accent mb-4">
            Security Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4">
            Security is not an afterthought. It is the operating foundation.
          </h2>
          <p className="text-brand-secondary text-base sm:text-lg leading-relaxed">
            Every request, task, and AI interaction is governed by strict deterministic boundaries. Information moves strictly through verified permission layers with complete auditability and continuous human oversight.
          </p>
        </div>

        {/* Security Flow Pipeline Visual */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {flowNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.step} className="relative group">
                  
                  {/* Step Card */}
                  <div
                    className={`h-full p-5 rounded-xl border flex flex-col justify-between transition-all ${
                      node.highlight
                        ? "bg-brand-bg border-brand-accent/60 shadow-lg shadow-brand-accent/5"
                        : "bg-brand-elevated border-brand-border hover:border-brand-strong-border"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`font-mono text-xs font-bold ${
                            node.highlight ? "text-brand-accent" : "text-brand-tertiary"
                          }`}
                        >
                          STAGE {node.step}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            node.highlight
                              ? "bg-brand-accent/20 text-brand-accent"
                              : "bg-brand-surface text-brand-secondary"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-base font-bold text-brand-text mb-1">
                        {node.title}
                      </h3>
                      <p className="text-xs text-brand-secondary leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    {node.highlight && (
                      <div className="mt-4 pt-3 border-t border-brand-accent/30 text-[10px] font-mono text-brand-accent uppercase">
                        ★ Critical Control Checkpoint
                      </div>
                    )}
                  </div>

                  {/* Desktop arrow connector */}
                  {index < flowNodes.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-brand-tertiary">
                      <div className="w-6 h-6 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-[10px] text-brand-accent">
                        →
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* Security Principles Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-brand-elevated border border-brand-border rounded-xl">
            <h4 className="font-serif text-lg font-bold text-brand-text mb-2">
              Isolated Data Tenancy
            </h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Your confidential communications, matters, contracts, and transcripts are never pooled, never used for external model fine-tuning, and always kept within strictly segregated organizational silos.
            </p>
          </div>

          <div className="p-6 bg-brand-elevated border border-brand-border rounded-xl">
            <h4 className="font-serif text-lg font-bold text-brand-text mb-2">
              Granular Role-Based Permissions
            </h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Define precisely which team members, executive assistants, or fractional counsel can view specific client matters, financial records, or privileged briefings.
            </p>
          </div>

          <div className="p-6 bg-brand-elevated border border-brand-border rounded-xl">
            <h4 className="font-serif text-lg font-bold text-brand-text mb-2">
              Verifiable Operational Ledger
            </h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Every action initiated by human operators or executed by agentic pipelines generates an immutable timestamped trail for governance, compliance, and internal review.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
