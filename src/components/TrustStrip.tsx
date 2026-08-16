"use client";

import React from "react";
import { Building2, Shield, Landmark, Scale, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function TrustStrip() {
  const sectors = [
    { label: "Executive Estates", icon: Briefcase, detail: "Principals & Family Offices" },
    { label: "Legal Practices", icon: Scale, detail: "Partnerships & Litigation Counsel" },
    { label: "Corporate Enterprises", icon: Building2, detail: "Multi-Entity Operations" },
    { label: "Institutional Governance", icon: Landmark, detail: "Regulated & Public Domains" },
    { label: "Controlled Environments", icon: Shield, detail: "Strict NDA Mandates" },
  ];

  return (
    <section className="border-y border-brand-border bg-brand-elevated/60 backdrop-blur-sm py-5 sm:py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase text-brand-accent shrink-0">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0" />
            Engineered For High-Stakes Operations
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-8 w-full lg:w-auto">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-center gap-2 sm:gap-2.5 group"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-secondary group-hover:text-brand-accent transition-colors shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] sm:text-xs font-medium text-brand-text group-hover:text-brand-accent-light transition-colors truncate">
                      {sector.label}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-brand-tertiary hidden sm:inline-block truncate">
                      {sector.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
