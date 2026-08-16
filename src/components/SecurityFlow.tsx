"use client";

import React from "react";
import { User, KeyRound, Cpu, UserCheck, ScrollText } from "lucide-react";
import { motion } from "framer-motion";

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
      desc: "Air-gapped models; zero customer data training.",
    },
    {
      step: "04",
      icon: UserCheck,
      title: "Mandatory Human Gate",
      desc: "Critical outcomes require operator sign-off.",
      highlight: true,
    },
    {
      step: "05",
      icon: ScrollText,
      title: "Immutable Audit Log",
      desc: "Cryptographically verifiable ledger.",
    },
  ];

  return (
    <section id="security" className="py-16 sm:py-20 lg:py-24 bg-brand-elevated/40 border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-surface border border-brand-border rounded text-xs font-mono uppercase tracking-wider text-brand-accent mb-4">
            Security Architecture
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            Security is not an afterthought. It is the operating foundation.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            Every request, task, and AI interaction is governed by strict deterministic boundaries. Information moves strictly through verified permission layers with complete auditability and continuous human oversight.
          </p>
        </motion.div>

        {/* Security Flow Pipeline Visual */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 relative">
            {flowNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative group flex flex-col"
                >
                  
                  {/* Step Card */}
                  <div
                    className={`h-full p-4 sm:p-5 rounded-xl border flex flex-col justify-between transition-all ${
                      node.highlight
                        ? "bg-brand-bg border-brand-accent/60 shadow-lg shadow-brand-accent/5"
                        : "bg-brand-elevated border-brand-border hover:border-brand-strong-border"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                        <span
                          className={`font-mono text-xs font-bold ${
                            node.highlight ? "text-brand-accent" : "text-brand-tertiary"
                          }`}
                        >
                          STAGE {node.step}
                        </span>
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                            node.highlight
                              ? "bg-brand-accent/20 text-brand-accent"
                              : "bg-brand-surface text-brand-secondary"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-sm sm:text-base font-bold text-brand-text mb-1">
                        {node.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-brand-secondary leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    {node.highlight && (
                      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-brand-accent/30 text-[9px] sm:text-[10px] font-mono text-brand-accent uppercase">
                        ★ Critical Gate
                      </div>
                    )}
                  </div>

                  {/* Desktop arrow connector */}
                  {index < flowNodes.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-brand-tertiary">
                      <div className="w-5 h-5 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-[9px] text-brand-accent">
                        →
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security Principles Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Isolated Data Tenancy",
              desc: "Your confidential communications, matters, contracts, and transcripts are never pooled, never used for external model fine-tuning, and always kept within strictly segregated organizational silos.",
            },
            {
              title: "Granular Role-Based Permissions",
              desc: "Define precisely which team members, executive assistants, or fractional counsel can view specific client matters, financial records, or privileged briefings.",
            },
            {
              title: "Verifiable Operational Ledger",
              desc: "Every action initiated by human operators or executed by agentic pipelines generates an immutable timestamped trail for governance, compliance, and internal review.",
            },
          ].map((principle, pIdx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: pIdx * 0.1 }}
              className="p-5 sm:p-6 bg-brand-elevated border border-brand-border rounded-xl"
            >
              <h4 className="font-serif text-base sm:text-lg font-bold text-brand-text mb-2">
                {principle.title}
              </h4>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
