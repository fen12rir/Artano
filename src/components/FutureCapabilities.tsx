"use client";

import React from "react";
import { Landmark, Shield, Stethoscope, Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface FutureCapabilitiesProps {
  onRequestDemo: () => void;
}

const DOMAINS = [
  {
    domain: "Legal & Litigation Operations",
    icon: Landmark,
    category: "Professional Practice",
    status: "Active Ecosystem",
    description:
      "Matter intelligence, contract delta tracking, deposition synthesis, and privileged client communication environments.",
  },
  {
    domain: "Executive Estate Management",
    icon: Award,
    category: "High-Net-Worth & Family Offices",
    status: "Core Platform",
    description:
      "Multi-entity asset tracking, confidential administrative routing, foundation calendar matrix, and VIP communication pipelines.",
  },
  {
    domain: "Healthcare & Clinical Systems",
    icon: Stethoscope,
    category: "Clinical & Practice Operations",
    status: "Capability Architecture",
    description:
      "HIPAA-conscious operational coordination, clinical administrative triage, practitioner schedule shielding, and record synthesis.",
  },
  {
    domain: "Public Sector & Defense Governance",
    icon: Shield,
    category: "Regulated & Institutional",
    status: "Capability Architecture",
    description:
      "Controlled unclassified information (CUI) handling, strict air-gapped readiness, cryptographic audit pipelines, and compliance verification.",
  },
];

export function FutureCapabilities({ onRequestDemo }: FutureCapabilitiesProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-elevated/20 border-y border-brand-border relative">
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
            Domain Capabilities
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            Built around the problem, not the template.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            EireneOps is designed as an extensible operational kernel. We apply our core competencies in secure systems, permission layers, and intelligent automation across high-stakes domains.
          </p>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {DOMAINS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.domain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-brand-elevated border border-brand-border hover:border-brand-accent/40 rounded-xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-brand-accent">
                      {item.category}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-brand-secondary">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent group-hover:border-brand-accent/40 transition-colors shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-text group-hover:text-brand-accent-light transition-colors">
                        {item.domain}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-5 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono text-brand-tertiary">
                    ENGINEERED TO SPEC
                  </span>
                  <button
                    onClick={onRequestDemo}
                    className="text-xs text-brand-text group-hover:text-brand-accent flex items-center gap-1 transition-colors"
                  >
                    Inquire <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
