"use client";

import React from "react";
import { Compass, ShieldCheck, HeartHandshake, RefreshCw, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function WhyEireneOps() {
  const differentiators = [
    {
      icon: Compass,
      title: "Deep Operational Understanding",
      desc: "We don’t build generic software and ask you to adapt your business. Our systems are engineered around the reality of how executives, lawyers, and high-performing operators actually work.",
    },
    {
      icon: HeartHandshake,
      title: "Human + AI Symbiosis",
      desc: "We reject the illusion that AI can operate autonomously without oversight. Our platforms elevate human judgment with rapid data synthesis, citation verification, and deterministic execution.",
    },
    {
      icon: ShieldCheck,
      title: "Architectural Security First",
      desc: "Confidentiality and role-based isolation are core primitives of our database and network designs, not marketing badges tacked onto consumer models.",
    },
    {
      icon: RefreshCw,
      title: "Built to Evolve with You",
      desc: "Deploy our core executive command platform today in minutes, and extend seamlessly into custom multi-agent automations as your firm’s operations expand.",
    },
    {
      icon: Cpu,
      title: "Tailored Where It Matters",
      desc: "Off-the-shelf software forces costly operational compromises. We engineer bespoke interfaces, custom integrations, and specialized data models for unique workflows.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative">
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
            The EireneOps Standard
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            Why leading operators and legal counsel choose EireneOps.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            In an era of fleeting AI experiments, EireneOps stands for reliability, security, craftsmanship, and long-term engineering partnership.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-brand-elevated border border-brand-border rounded-xl p-5 sm:p-7 flex flex-col justify-between hover:border-brand-strong-border transition-all"
              >
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent mb-4 sm:mb-5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-brand-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-brand-surface/30 border border-brand-accent/30 rounded-xl p-5 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-brand-accent uppercase mb-2">
                EST. 2026 · NYPZIM
              </div>
              <h3 className="font-serif text-base sm:text-xl font-bold text-brand-text mb-2">
                “Silent precision over noisy hype.”
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                We build tools that give leaders their hours back and allow enterprises to run with disciplined clarity.
              </p>
            </div>
            <div className="pt-4 border-t border-brand-border/40 text-[10px] sm:text-[11px] font-mono text-brand-tertiary">
              HARDWARE-ENFORCED · HUMAN-CONTROLLED
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
