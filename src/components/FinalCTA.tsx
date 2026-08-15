"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Loader2 } from "lucide-react";

interface FinalCTAProps {
  onRequestDemo: () => void;
}

export function FinalCTA({ onRequestDemo }: FinalCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid work email address.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-brand-elevated/60 border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-brand-elevated border border-brand-strong-border rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border rounded-full text-xs font-mono text-brand-accent mb-4">
              <Lock className="w-3.5 h-3.5" /> Confidential Inquiry
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight mb-4">
              Build the system your organization actually needs.
            </h2>
            <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
              Schedule a confidential technical briefing or discuss bespoke platform development with our enterprise engineering team.
            </p>
          </div>

          {/* Action Area */}
          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 bg-brand-surface border border-brand-accent/40 rounded-xl text-center">
                <CheckCircle2 className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-brand-text">
                  Inquiry Dispatched
                </p>
                <p className="text-xs text-brand-secondary mt-1">
                  Our engagement principal will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your enterprise work email..."
                    className={`w-full px-4 py-3 bg-brand-bg border rounded-lg text-sm text-brand-text placeholder:text-brand-tertiary focus:outline-none focus:border-brand-accent transition-colors ${
                      error ? "border-brand-danger" : "border-brand-border"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-brand-bg font-medium text-sm rounded-lg hover:bg-brand-accent-light transition-all shrink-0 active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Talk to EireneOps
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-brand-danger text-center">{error}</p>
                )}
                <div className="flex items-center justify-center gap-4 text-xs text-brand-tertiary pt-2">
                  <span>Prefer a comprehensive discussion?</span>
                  <button
                    type="button"
                    onClick={onRequestDemo}
                    className="text-brand-accent hover:underline font-medium"
                  >
                    Open Briefing Form →
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-10 pt-6 border-t border-brand-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-brand-tertiary">
            <span>MUTUAL NDA READY</span>
            <span>·</span>
            <span>ZERO DATA RESELLING</span>
            <span>·</span>
            <span>AIR-GAPPED READY</span>
          </div>

        </div>

      </div>
    </section>
  );
}
