"use client";

import React from "react";
import { Briefcase, Scale, Layers, Bot, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesProps {
  onRequestDemo: () => void;
}

const CAPABILITIES = [
  {
    number: "01",
    icon: Briefcase,
    title: "Executive Operations",
    tagline: "Total operational command across communications, calendar, and critical workflows.",
    description:
      "Engineered for principals, fractional COOs, and executive assistants who manage complex estates. EireneOps centralizes information intake, automates VIP response preparation, guards deep work hours, and provides unified situational awareness.",
    features: [
      "Zero-compromise inbox triage & tone-matched drafting",
      "Foundation Matrix calendar shielding & conflict protection",
      "Executive briefing engine with verified sources",
      "Meticulously indexed media & document vault",
    ],
  },
  {
    number: "02",
    icon: Scale,
    title: "Legal & Professional Intelligence",
    tagline: "AI-assisted research, contract analysis, and client-facing workflows with full citation fidelity.",
    description:
      "Tailored for law firms, legal departments, and specialized advisory practices. Analyze briefs, identify clause variance, extract key obligations, and summarize complex depositions without transmitting raw data into unsecured consumer models.",
    features: [
      "Strict confidential data boundary with role-based access",
      "Side-by-side contract delta & risk variance detection",
      "Client communication synthesis & matter tracking",
      "Automated deposition & hearing summarization",
    ],
  },
  {
    number: "03",
    icon: Layers,
    title: "Custom Business Systems",
    tagline: "Bespoke operational architectures built around your exact organizational procedures.",
    description:
      "When off-the-shelf software forces compromise, EireneOps designs custom operating surfaces. We integrate with legacy ERPs, internal knowledge graphs, and proprietary pipelines to build unified interfaces for distributed teams.",
    features: [
      "Custom permission matrices & audit reporting",
      "Tailored API bridges and internal tool orchestration",
      "Specialized multi-seat operator consoles",
      "Dedicated deployment architectures & VPC readiness",
    ],
  },
  {
    number: "04",
    icon: Bot,
    title: "AI & Agentic Engineering",
    tagline: "Autonomous multi-step agents that execute operational work under deterministic human oversight.",
    description:
      "Moving beyond static chatbots into active agentic systems. EireneOps engineers agents capable of multi-step retrieval, cross-system reconciliation, administrative execution, and structured approval routing with full auditability.",
    features: [
      "Multi-stage autonomous task breakdown & execution",
      "Mandatory human approval checkpoints for sensitive actions",
      "Real-time execution telemetry and state logging",
      "Self-correcting verification against organizational SOPs",
    ],
  },
];

export function Services({ onRequestDemo }: ServicesProps) {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative">
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
            System Pillars
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            Four disciplines. One coherent operational infrastructure.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            EireneOps is not a collection of fragmented point solutions. It is a comprehensive operational ecosystem engineered to reduce cognitive load, preserve executive focus, and execute work with silent precision.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-brand-elevated border border-brand-border hover:border-brand-accent/40 rounded-xl p-5 sm:p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top bar with number and icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent group-hover:border-brand-accent/40 transition-colors shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-mono text-xs text-brand-tertiary">
                        PILLAR // {cap.number}
                      </span>
                    </div>
                    <button
                      onClick={onRequestDemo}
                      className="text-brand-tertiary group-hover:text-brand-accent transition-colors p-1.5 rounded-md hover:bg-brand-surface"
                      aria-label={`Explore ${cap.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-brand-text mb-2 group-hover:text-brand-accent-light transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-brand-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4 leading-normal">
                    {cap.tagline}
                  </p>

                  {/* Body description */}
                  <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Feature checklist */}
                <div className="pt-5 sm:pt-6 border-t border-brand-border/60">
                  <ul className="space-y-2 sm:space-y-2.5">
                    {cap.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-brand-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/80 mt-1.5 shrink-0" />
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
