"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onRequestDemo: () => void;
}

const NAV_LINKS = [
  { name: "Solutions", href: "#solutions" },
  { name: "Platform", href: "#platform" },
  { name: "Security", href: "#security" },
  { name: "Industries", href: "#industries" },
  { name: "AI & Automation", href: "#agentic" },
  { name: "About", href: "#why-us" },
];

export function Navbar({ onRequestDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-3 shadow-lg shadow-black/30"
            : "bg-brand-bg/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none z-50"
            aria-label="EireneOps Home"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-strong-border flex items-center justify-center text-brand-accent group-hover:border-brand-accent/50 transition-colors">
              <span className="font-serif font-bold text-base">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-wider text-base sm:text-xl text-brand-text group-hover:text-brand-accent-light transition-colors">
                EIRENEOPS
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-brand-tertiary uppercase -mt-1">
                EST. 2026 · NYPZIM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-secondary hover:text-brand-text transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={() =>
                alert(
                  "Client authentication portal is restricted to authorized estate principals. Please use your hardware token or request access."
                )
              }
              className="text-xs font-medium text-brand-secondary hover:text-brand-text transition-colors px-2 py-1"
            >
              Client Login
            </button>
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-brand-accent text-brand-bg rounded-lg hover:bg-brand-accent-light transition-all shadow-sm active:scale-[0.98]"
            >
              Request Briefing
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex lg:hidden items-center gap-2.5 z-50">
            <button
              onClick={onRequestDemo}
              className="text-xs font-medium px-3 py-1.5 bg-brand-accent text-brand-bg rounded-md"
            >
              Briefing
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-brand-text bg-brand-surface border border-brand-border rounded-lg active:scale-95 transition-transform"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-accent" /> : <Menu className="w-5 h-5 text-brand-text" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[57px] z-40 bg-brand-bg/98 backdrop-blur-2xl flex flex-col justify-between p-6 border-t border-brand-border overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col gap-2 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-serif text-brand-text py-3 border-b border-brand-border/40 hover:text-brand-accent active:text-brand-accent transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-brand-tertiary" />
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-brand-border flex flex-col gap-3 pb-8">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full py-3.5 bg-brand-accent text-brand-bg font-semibold text-sm rounded-lg text-center active:scale-[0.98] transition-transform shadow-md"
              >
                Request an Enterprise Briefing
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  alert(
                    "Client authentication portal is restricted to authorized estate principals."
                  );
                }}
                className="w-full py-3 bg-brand-surface border border-brand-border text-brand-secondary text-xs rounded-lg text-center active:bg-brand-surface/80"
              >
                Client Login (Hardware Token / Auth)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
