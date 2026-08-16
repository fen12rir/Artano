"use client";

import React from "react";
import { FileSearch, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface AIAssistantProps {
  onRequestDemo: () => void;
}

export function AIAssistant({ onRequestDemo }: AIAssistantProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative">
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
            AI Assistant Discipline
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4 leading-snug sm:leading-tight">
            AI assists people. People remain in control.
          </h2>
          <p className="text-brand-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            EireneOps rejects black-box hallucinations and unverified autonomous actions. Our intelligence layer acts as a tireless research and execution co-pilot that surfaces citations, identifies variance, and prepares actions for your direct approval.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Serious Professional Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-brand-elevated border border-brand-border rounded-xl p-5 sm:p-7 lg:p-8 space-y-5 sm:space-y-6">
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-brand-text">
                Engineered for Legal, Advisory, & Executive Rigor
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                {[
                  {
                    title: "Document Synthesis & Citation Mapping",
                    desc: "Parses hundreds of pages of filings, contracts, or transcripts. Every claim in the generated briefing is linked to the exact source page and paragraph.",
                  },
                  {
                    title: "Executive Tone-Matched Drafting",
                    desc: "Pre-composes responses, memorandums, and instructions based on the principal's specific voice parameters, ready for one-tap review.",
                  },
                  {
                    title: "Variance & Risk Identification",
                    desc: "Automatically compares incoming documents against institutional templates and surfaces non-standard clauses, liability exposure, and ambiguous obligations.",
                  },
                  {
                    title: "Action Item Extraction & Routing",
                    desc: "Identifies deliverables, dates, and accountabilities across multi-party email chains and converts them into structured operational tickets.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-surface border border-brand-accent/40 flex items-center justify-center text-brand-accent mt-0.5 shrink-0 text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-brand-text">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-brand-secondary mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-mono text-brand-accent">
                  ZERO UNCONTROLLED ACTIONS
                </span>
                <button
                  onClick={onRequestDemo}
                  className="text-xs font-medium text-brand-text hover:text-brand-accent flex items-center gap-1.5 transition-colors"
                >
                  Request Technical Deep Dive <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Realistic Document Query & Structured Response Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-brand-elevated border border-brand-strong-border rounded-xl p-5 sm:p-7 lg:p-8 shadow-xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-brand-border mb-4 sm:mb-5">
                <div className="flex items-center gap-2 min-w-0">
                  <FileSearch className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs text-brand-text uppercase tracking-wider truncate">
                    Query Session // Matter #883
                  </span>
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] bg-brand-surface px-2 py-0.5 rounded border border-brand-border text-brand-success shrink-0">
                  AUDITED
                </span>
              </div>

              {/* Inquiry Prompt */}
              <div className="p-3.5 sm:p-4 bg-brand-bg rounded-lg border border-brand-border mb-3 sm:mb-4">
                <div className="text-[10px] font-mono text-brand-tertiary mb-1.5 uppercase">
                  Executive Inquiry
                </div>
                <p className="text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                  “Extract all non-solicitation restrictions and termination penalties from the 2024 Partner Separation Agreement and verify if the non-compete clause conforms to the latest state statute.”
                </p>
              </div>

              {/* Structured Response */}
              <div className="p-3.5 sm:p-5 bg-brand-surface/80 rounded-lg border border-brand-accent/40 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono text-brand-accent flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" /> SYNTHESIS BRIEFING
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-brand-tertiary">Verified 1.2s</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-brand-bg rounded border border-brand-border">
                    <div className="font-semibold text-brand-text mb-0.5 text-xs">
                      1. Non-Solicitation Duration & Scope
                    </div>
                    <p className="text-brand-secondary text-[11px] leading-relaxed">
                      Restricted to 24 months across existing enterprise clients. Direct outreach to accounts handled in prior 12 months constitutes material breach.
                    </p>
                    <div className="text-[9px] sm:text-[10px] font-mono text-brand-accent mt-1">
                      [Citation: Exhibit B, §4.2, Page 19]
                    </div>
                  </div>

                  <div className="p-2.5 bg-brand-bg rounded border border-brand-border">
                    <div className="font-semibold text-brand-text mb-0.5 flex flex-wrap items-center justify-between gap-1 text-xs">
                      <span>2. Statutory Conformance Warning</span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-brand-danger bg-brand-danger/10 px-1.5 py-0.5 rounded shrink-0">
                        VARIANCE DETECTED
                      </span>
                    </div>
                    <p className="text-brand-secondary text-[11px] leading-relaxed">
                      Section 8.1 includes a blanket geographic non-compete which may be unenforceable under revised 2024 statutory thresholds.
                    </p>
                    <div className="text-[9px] sm:text-[10px] font-mono text-brand-accent mt-1">
                      [Citation: Statutory Reference Code §16600 & Agreement §8.1]
                    </div>
                  </div>
                </div>

                {/* Human Approval Bar */}
                <div className="pt-3 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <span className="text-[10px] sm:text-[11px] text-brand-tertiary">
                    Human verification required before dispatch.
                  </span>
                  <button className="px-3 py-1.5 bg-brand-accent text-brand-bg text-xs font-medium rounded hover:bg-brand-accent-light transition-colors self-start sm:self-auto">
                    Confirm & File
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
