"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Shield, ArrowRight, Loader2 } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    role: "Executive / Principal",
    useCase: "Executive Operations",
    requirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.workEmail.trim()) {
      errs.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Please enter a valid work email address";
    }
    if (!formData.organization.trim()) {
      errs.organization = "Organization name is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      workEmail: "",
      organization: "",
      role: "Executive / Principal",
      useCase: "Executive Operations",
      requirements: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-brand-elevated border border-brand-strong-border rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-brand-secondary hover:text-brand-text p-1.5 rounded-lg border border-transparent hover:border-brand-border hover:bg-brand-surface transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-accent">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-text mb-3">
              Request Received
            </h3>
            <p className="text-brand-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
              Our enterprise engagement team will contact you within 24 business hours to arrange a confidential briefing and platform demonstration.
            </p>
            <div className="p-4 bg-brand-surface/60 border border-brand-border rounded-lg text-left text-xs font-mono text-brand-secondary mb-6 space-y-1">
              <div><span className="text-brand-tertiary">Organization:</span> {formData.organization}</div>
              <div><span className="text-brand-tertiary">Designation:</span> {formData.workEmail}</div>
              <div><span className="text-brand-tertiary">System Profile:</span> {formData.useCase}</div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-brand-accent text-brand-bg font-medium text-sm rounded-lg hover:bg-brand-accent-light transition-colors"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-surface border border-brand-border rounded text-[11px] font-mono uppercase tracking-wider text-brand-accent mb-3">
                <Shield className="w-3.5 h-3.5" /> Confidential Briefing
              </div>
              <h2
                id="modal-title"
                className="font-serif text-2xl sm:text-3xl text-brand-text font-bold tracking-tight"
              >
                Request an Enterprise Briefing
              </h2>
              <p className="text-brand-secondary text-xs sm:text-sm mt-1.5 leading-relaxed">
                Experience the EireneOps operational platform configured to your governance, legal, and executive requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-medium text-brand-secondary mb-1.5"
                  >
                    Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-3.5 py-2 text-sm bg-brand-bg border rounded-lg text-brand-text placeholder:text-brand-tertiary focus:outline-none focus:border-brand-accent transition-colors ${
                      errors.fullName
                        ? "border-brand-danger"
                        : "border-brand-border"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-brand-danger mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-xs font-medium text-brand-secondary mb-1.5"
                  >
                    Work Email <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    placeholder="name@organization.com"
                    className={`w-full px-3.5 py-2 text-sm bg-brand-bg border rounded-lg text-brand-text placeholder:text-brand-tertiary focus:outline-none focus:border-brand-accent transition-colors ${
                      errors.workEmail
                        ? "border-brand-danger"
                        : "border-brand-border"
                    }`}
                  />
                  {errors.workEmail && (
                    <p className="text-[11px] text-brand-danger mt-1">
                      {errors.workEmail}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-xs font-medium text-brand-secondary mb-1.5"
                  >
                    Organization / Firm <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    placeholder="e.g. Sterling Legal Group"
                    className={`w-full px-3.5 py-2 text-sm bg-brand-bg border rounded-lg text-brand-text placeholder:text-brand-tertiary focus:outline-none focus:border-brand-accent transition-colors ${
                      errors.organization
                        ? "border-brand-danger"
                        : "border-brand-border"
                    }`}
                  />
                  {errors.organization && (
                    <p className="text-[11px] text-brand-danger mt-1">
                      {errors.organization}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs font-medium text-brand-secondary mb-1.5"
                  >
                    Role / Position
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm bg-brand-bg border border-brand-border rounded-lg text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                  >
                    <option value="Executive / Principal">Executive / Principal</option>
                    <option value="Managing Partner / Lawyer">Managing Partner / Lawyer</option>
                    <option value="COO / Head of Operations">COO / Head of Operations</option>
                    <option value="Chief Information / Security Officer">CISO / Security Lead</option>
                    <option value="Executive Assistant Lead">Executive Assistant Lead</option>
                    <option value="Other">Other Enterprise Role</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="useCase"
                  className="block text-xs font-medium text-brand-secondary mb-1.5"
                >
                  Primary Objective
                </label>
                <select
                  id="useCase"
                  value={formData.useCase}
                  onChange={(e) =>
                    setFormData({ ...formData, useCase: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-brand-bg border border-brand-border rounded-lg text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                >
                  <option value="Executive Operations">Executive Operations Suite</option>
                  <option value="Legal & Professional Intelligence">Legal & Professional Intelligence</option>
                  <option value="Agentic Engineering & Automation">Agentic Workflow Engineering</option>
                  <option value="Custom Enterprise Solution">Custom Enterprise Platform</option>
                  <option value="High-Security / Regulated Operations">High-Security / Regulated Work</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-xs font-medium text-brand-secondary mb-1.5"
                >
                  Specific Operational Context (Optional)
                </label>
                <textarea
                  id="requirements"
                  rows={2}
                  value={formData.requirements}
                  onChange={(e) =>
                    setFormData({ ...formData, requirements: e.target.value })
                  }
                  placeholder="Outline any specific governance requirements, integrations, or operational volume."
                  className="w-full px-3.5 py-2 text-sm bg-brand-bg border border-brand-border rounded-lg text-brand-text placeholder:text-brand-tertiary focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <p className="text-[11px] text-brand-tertiary">
                  Protected under bilateral NDA protocols.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-brand-bg font-medium text-sm rounded-lg hover:bg-brand-accent-light transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Briefing
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
