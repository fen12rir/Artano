import React from "react";
import { Building2, Shield, Landmark, Scale, Briefcase } from "lucide-react";

export function TrustStrip() {
  const sectors = [
    { label: "Executive Estates", icon: Briefcase, detail: "Principals & Family Offices" },
    { label: "Legal Practices", icon: Scale, detail: "Partnerships & Litigation Counsel" },
    { label: "Corporate Enterprises", icon: Building2, detail: "Multi-Entity Operations" },
    { label: "Institutional Governance", icon: Landmark, detail: "Regulated & Public Domains" },
    { label: "Controlled Environments", icon: Shield, detail: "Strict NDA & Security Mandates" },
  ];

  return (
    <section className="border-y border-brand-border bg-brand-elevated/60 backdrop-blur-sm py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-brand-accent shrink-0">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            Engineered For High-Stakes Operations
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 w-full md:w-auto">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.label}
                  className="flex items-center gap-2.5 group"
                >
                  <Icon className="w-4 h-4 text-brand-secondary group-hover:text-brand-accent transition-colors shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-brand-text group-hover:text-brand-accent-light transition-colors whitespace-nowrap">
                      {sector.label}
                    </span>
                    <span className="text-[10px] text-brand-tertiary hidden sm:inline-block">
                      {sector.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
