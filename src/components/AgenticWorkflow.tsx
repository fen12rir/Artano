"use client";

import React from "react";
import { Terminal, BrainCircuit, Database, Play, UserCheck, CheckCircle2, History, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface AgenticWorkflowProps {
  onRequestDemo: () => void;
}

export function AgenticWorkflow({ onRequestDemo }: AgenticWorkflowProps) {
  const steps = [
    {
      num: "01",
      icon: Terminal,
      title: "Inbound Request",
      desc: "Triggered by email, matter filing, or executive instruction.",
    },
    {
      num: "02",
      icon: BrainCircuit,
      title: "Task Decomposition",
      desc: "Agent breaks intent into structured sub-tasks & dependencies.",
    },
    {
      num: "03",
      icon: Database,
      title: "Information Retrieval",
      desc: "Queries internal databases, matter files, and knowledge vaults.",
    },
    {
      num: "04",
      icon: Play,
      title: "Draft Execution",
      desc: "Executes computations, creates draft deliverables, checks SOPs.",
    },
    {
      num: "05",
      icon: UserCheck,
      title: "Approval Gate",
      desc: "Human operator reviews, confirms, or refines proposed action.",
      isHumanGate: true,
    },
    {
      num: "06",
      icon: CheckCircle2,
      title: "Final Completion",
      desc: "Approved action is dispatched to target system/stakeholder.",
    },
    {
      num: "07",
      icon: History,
      title: "Immutable Log",
      desc: "Complete execution trace and human sign-off recorded.",
    },
  ];

  return (
    <section id="agentic" className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative">
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
            Agentic Engineering
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            Intelligent systems that execute real work with human oversight.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            We don’t build novelty bots. We engineer multi-step agentic pipelines capable of executing complex operational procedures while ensuring human judgment remains the final authority.
          </p>
        </motion.div>

        {/* Multi-Step Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-elevated border border-brand-border rounded-xl p-4 sm:p-7 lg:p-8 mb-10 sm:mb-12"
        >
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-brand-border mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-text">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shrink-0" />
              <span className="truncate">AGENTIC PIPELINE // HUMAN-IN-THE-LOOP</span>
            </div>
            <span className="text-[10px] font-mono bg-brand-surface px-2.5 py-1 rounded text-brand-secondary border border-brand-border self-start sm:self-auto">
              GOVERNANCE: DETERMINISTIC
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col justify-between">
                  <div
                    className={`h-full p-3.5 sm:p-4 rounded-lg border transition-all ${
                      step.isHumanGate
                        ? "bg-brand-surface border-brand-accent shadow-md shadow-brand-accent/10"
                        : "bg-brand-bg border-brand-border hover:border-brand-strong-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          step.isHumanGate ? "text-brand-accent" : "text-brand-tertiary"
                        }`}
                      >
                        {step.num}
                      </span>
                      <Icon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          step.isHumanGate ? "text-brand-accent" : "text-brand-secondary"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-xs font-bold font-serif mb-1 ${
                        step.isHumanGate ? "text-brand-accent-light" : "text-brand-text"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-brand-secondary leading-relaxed">
                      {step.desc}
                    </p>

                    {step.isHumanGate && (
                      <div className="mt-2.5 sm:mt-3 pt-2 border-t border-brand-accent/30 text-[9px] font-mono text-brand-accent uppercase font-bold">
                        ★ Human Gate
                      </div>
                    )}
                  </div>

                  {/* Flow Connector for large screens */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-brand-border">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-tertiary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Workflow Explanation Banner */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs text-brand-secondary">
            <div className="flex items-start sm:items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1 sm:mt-0 shrink-0" />
              <span className="leading-relaxed">
                Agents handle data aggregation, drafting, and reconciliation. No critical action leaves the sandbox without explicit operator confirmation.
              </span>
            </div>
            <button
              onClick={onRequestDemo}
              className="text-xs text-brand-accent hover:underline font-mono whitespace-nowrap self-start sm:self-auto"
            >
              Agentic Integrations →
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
