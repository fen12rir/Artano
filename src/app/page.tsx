"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { PlatformPreview } from "@/components/PlatformPreview";
import { AIAssistant } from "@/components/AIAssistant";
import { SecurityFlow } from "@/components/SecurityFlow";
import { AudienceGrid } from "@/components/AudienceGrid";
import { StandardCustom } from "@/components/StandardCustom";
import { AgenticWorkflow } from "@/components/AgenticWorkflow";
import { FutureCapabilities } from "@/components/FutureCapabilities";
import { WhyEireneOps } from "@/components/WhyEireneOps";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-brand-bg flex flex-col">
      {/* 1. Navigation */}
      <Navbar onRequestDemo={handleOpenDemo} />

      {/* 2. Hero Section */}
      <Hero onRequestDemo={handleOpenDemo} />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. What EireneOps Does (4 Core Disciplines) */}
      <Services onRequestDemo={handleOpenDemo} />

      {/* 5. Platform / Product Experience (Interactive Enterprise Command Surface) */}
      <PlatformPreview />

      {/* 6. AI Assistant ("AI assists people. People remain in control.") */}
      <AIAssistant onRequestDemo={handleOpenDemo} />

      {/* 7. Security & Trust (Stage Flow Diagram + Principles) */}
      <SecurityFlow />

      {/* 8. Who We Serve (Law Firms, Executives, Businesses, Remote Teams, Regulated Orgs) */}
      <AudienceGrid onRequestDemo={handleOpenDemo} />

      {/* 9. Standard vs Custom (Two Strategic Paths) */}
      <StandardCustom onRequestDemo={handleOpenDemo} />

      {/* 10. Agentic Engineering (7-Step Human-in-the-Loop Pipeline) */}
      <AgenticWorkflow onRequestDemo={handleOpenDemo} />

      {/* 11. Domain Capabilities & Future Projects */}
      <FutureCapabilities onRequestDemo={handleOpenDemo} />

      {/* 12. Why EireneOps (Strategic Differentiators) */}
      <WhyEireneOps />

      {/* 13. Final Call to Action */}
      <FinalCTA onRequestDemo={handleOpenDemo} />

      {/* 14. Footer */}
      <Footer />

      {/* Floating Scroll to Top Action */}
      <ScrollToTop />

      {/* Accessible Enterprise Demo Request Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
