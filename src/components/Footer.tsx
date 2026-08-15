import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 text-xs text-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent font-serif font-bold text-xs">
                E
              </div>
              <span className="font-serif font-bold tracking-wider text-base text-brand-text">
                EIRENEOPS
              </span>
            </div>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Intelligent operational systems engineered for executives, law firms, and high-trust organizations.
            </p>
            <div className="font-mono text-[10px] text-brand-tertiary">
              EST. 2026 · NYPZIM HOLDINGS LLC
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-brand-text mb-3">
              Platform & Architecture
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#platform" className="hover:text-brand-accent transition-colors">
                  Executive Command Surface
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-accent transition-colors">
                  Four Disciplines
                </a>
              </li>
              <li>
                <a href="#agentic" className="hover:text-brand-accent transition-colors">
                  Agentic Engineering
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-brand-accent transition-colors">
                  Zero Trust Security Layer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-brand-text mb-3">
              Solutions & Sectors
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#industries" className="hover:text-brand-accent transition-colors">
                  Law Firms & Counsel
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-brand-accent transition-colors">
                  Executives & Family Offices
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-brand-accent transition-colors">
                  Growth Enterprises
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-brand-accent transition-colors">
                  Remote & Virtual Teams
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-brand-text mb-3">
              Governance & Security
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5 text-brand-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                <span>Deterministic AI Policy</span>
              </li>
              <li>
                <span className="text-brand-tertiary">Air-Gapped Sovereign Options</span>
              </li>
              <li>
                <span className="text-brand-tertiary">Cryptographic Audit Logging</span>
              </li>
              <li>
                <span className="text-brand-tertiary">Role-Based Access Matrices</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-tertiary">
          <div>
            © 2026 Nypzim Holdings LLC. All rights reserved. EireneOps is a proprietary technology platform.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-brand-secondary cursor-pointer" onClick={() => alert("Confidentiality and non-disclosure standards are strictly enforced across all client estates.")}>
              Privacy & Data Policy
            </span>
            <span>·</span>
            <span className="hover:text-brand-secondary cursor-pointer" onClick={() => alert("Terms of engagement governed under bilateral enterprise agreements.")}>
              Terms of Engagement
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
