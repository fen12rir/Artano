"use client";

import React from "react";
import { Scale, Briefcase, Building, Users2, Landmark, Check } from "lucide-react";
import { motion } from "framer-motion";

interface AudienceGridProps {
  onRequestDemo: () => void;
}

const AUDIENCES = [
  {
    icon: Scale,
    title: "Law Firms & Counsel",
    subtitle: "Partnerships, boutique practices, and litigation teams",
    description:
      "Secure platforms for managing high-volume cases, privileged client communications, contract redline verification, and fast deposition synthesis.",
    points: [
      "Privileged client matter segregation",
      "Automated legal citation & statutory verification",
      "Deposition & transcript synthesis",
    ],
  },
  {
    icon: Briefcase,
    title: "Executives & Principals",
    subtitle: "Founders, CEOs, family office leaders, and chairpersons",
    description:
      "A distraction-free executive cockpit that protects deep work blocks, prepares voice-matched drafts, and surfaces only verified exceptions requiring decisions.",
    points: [
      "Foundation Matrix calendar guarding",
      "VIP zero-inbox triage & approval flows",
      "Consolidated multi-entity estate overview",
    ],
  },
  {
    icon: Building,
    title: "Growth Enterprises",
    subtitle: "Mid-market & enterprise organizations with complex ops",
    description:
      "Bespoke business platforms that unify disparate software tools, automate inter-departmental handoffs, and ensure governance compliance.",
    points: [
      "Custom workflow orchestration",
      "Unified internal knowledge retrieval",
      "Multi-seat operator roles & permissions",
    ],
  },
  {
    icon: Users2,
    title: "Remote & Virtual Teams",
    subtitle: "Executive assistant agencies & fractional operators",
    description:
      "Shared infrastructure allowing high-performing operators to manage multiple principals with consistent rigor and standardized operating procedures.",
    points: [
      "Multi-principal management from one surface",
      "Standardized SOP execution",
      "Collaborative task handoffs with audit trails",
    ],
  },
  {
    icon: Landmark,
    title: "Regulated Institutions",
    subtitle: "Specialized environments with heightened security mandates",
    description:
      "Custom architectures engineered for organizations requiring complete data sovereignty, strict air-gapping capabilities, and deterministic controls.",
    points: [
      "High-assurance data boundary controls",
      "Cryptographic audit logging",
      "Custom deployment topology options",
    ],
  },
];

export function AudienceGrid({ onRequestDemo }: AudienceGridProps) {
  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative">
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
            Audience & Sectors
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            Purpose-built for organizations where precision is non-negotiable.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            EireneOps is designed specifically for professionals and teams that manage high-stakes decisions, confidential information, and multi-threaded operational responsibilities.
          </p>
        </motion.div>

        {/* 5-Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-brand-elevated border border-brand-border hover:border-brand-accent/40 rounded-xl p-5 sm:p-7 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent mb-4 sm:mb-5 group-hover:border-brand-accent/40 transition-colors shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-text mb-1 group-hover:text-brand-accent-light transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-mono text-brand-accent mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-5 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <ul className="space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-brand-secondary">
                        <Check className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          {/* Action CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-brand-surface/40 border border-dashed border-brand-strong-border rounded-xl p-5 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-brand-accent mb-2 uppercase">
                Custom Tailoring
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-text mb-2">
                Have Specialized Operational Requirements?
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-4">
                We engineer customized platforms and integrations for organizations with unique regulatory, procedural, or security requirements.
              </p>
            </div>
            <button
              onClick={onRequestDemo}
              className="w-full py-2.5 bg-brand-surface border border-brand-border hover:border-brand-accent text-brand-text hover:text-brand-accent rounded-lg text-xs font-medium transition-colors"
            >
              Discuss Your Use Case →
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
