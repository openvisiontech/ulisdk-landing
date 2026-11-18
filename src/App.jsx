import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ChevronRight,
  FileText
} from 'lucide-react';
import {
  OneControllerArt,
  SharedIntelligenceArt,
  ControlHandoverArt,
  PlugAndPlayArt,
  AiTaskableArt,
  FleetSafetyArt
} from './HeroVectorArt';
import BenefitsSection from './BenefitsSection';
import ArchitectureSection from './ArchitectureSection';
import DocsSection from './DocsSection';
import ContactSection from './ContactSection';

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 sm:px-8 py-5 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
    <a href="#hero" className="flex items-center gap-3">
      <img
        src="/favicon.PNG"
        alt="Uli Logo"
        className="w-10 h-10 object-contain rounded-full"
      />
      <div>
        <span className="text-xl font-bold tracking-tight text-primary block leading-none">
          Uli SDK
        </span>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
          Unified Link Interface
        </span>
      </div>
    </a>

    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 absolute left-1/2 -translate-x-1/2">
      <a href="#benefits" className="hover:text-secondary transition">
        Why Uli SDK
      </a>
      <a href="#capabilities" className="hover:text-secondary transition">
        Capabilities
      </a>
      <a href="#architecture" className="hover:text-secondary transition">
        Architecture
      </a>
      <a href="#docs" className="hover:text-secondary transition">
        Tech Docs
      </a>
      <a href="#contact" className="hover:text-secondary transition">
        Contact
      </a>
    </div>
  </nav>
);

const operationalBenefits = [
  {
    tag: 'Universal Command',
    title: 'One Controller, Any Asset',
    desc: 'A single operator unit dynamically discovers, configures, and commands any authorized drone, ground vehicle, robot arm, or process tool—no bespoke per-robot controller needed.',
    art: <OneControllerArt />
  },
  {
    tag: 'Multi-Domain Fusion',
    title: 'Cross-Domain Intelligence Sharing',
    desc: 'Air, ground, and industrial assets share live telemetry, video/audio streams, and Cursor-on-Target (When, Where, What) events with embedded images and 3D models.',
    art: <SharedIntelligenceArt />
  },
  {
    tag: 'Dynamic Authority',
    title: 'Seamless Human ↔ AI Handover',
    desc: 'Transfer exclusive mission control smoothly between field operators, remote stations, and autonomous AI agents—with instant authority-based preemption when priorities shift.',
    art: <ControlHandoverArt />
  },
  {
    tag: 'Zero-Config Mesh',
    title: 'Plug-and-Play Fleet Expansion',
    desc: 'Power on a new unmanned vehicle, tool, or AI node and it joins active operations automatically at runtime without static IP setup or network reconfiguration.',
    art: <PlugAndPlayArt />
  },
  {
    tag: 'Autonomous Teaming',
    title: 'AI-Taskable Multi-Vendor Fleets',
    desc: 'Every connected asset automatically describes its capabilities, readiness, and health status so AI agents can reason across the fleet, plan missions, and execute tasks.',
    art: <AiTaskableArt />
  },
  {
    tag: 'Operational Integrity',
    title: 'Coordinated Fleet-Wide Safety & Trust',
    desc: 'Tiered clearance keeps classified and controlled data segregated while redundant multi-path emergency (E-Stop) and health monitoring transition assets into a safe state.',
    art: <FleetSafetyArt />
  }
];

const Hero = ({ onOpenDoc }) => {
  return (
    <section id="hero" className="relative pt-16 pb-24 overflow-hidden bg-primary">
      {/* Radial Background Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Headline & Mission Narrative */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono font-semibold mb-6 tracking-wider uppercase"
          >
            <Zap size={14} /> Unified Link Interface (Uli) SDK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            One Dynamic Network.
            <br />
            <span className="text-secondary">Every Asset Connected, Commandable &amp; Intelligent.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            When physical assets are built with Uli SDK, drones, ground vehicles, robot arms, process tools, operator controllers, and AI agents unite on a self-configuring infrastructure—enabling <strong className="text-white">one controller to operate any asset</strong>, <strong className="text-white">seamless human-to-AI control handover</strong>, and <strong className="text-white">real-time intelligence sharing across domains</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="px-7 py-3.5 bg-accent text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
            >
              Request SDK Access <ChevronRight size={18} />
            </a>
            <button
              onClick={() => onOpenDoc('introduction.md')}
              className="px-7 py-3.5 bg-secondary text-white rounded-xl font-bold hover:opacity-90 transition cursor-pointer flex items-center gap-2 shadow-lg"
            >
              <FileText size={18} /> Read Introduction &amp; Docs
            </button>
            <a
              href="#architecture"
              className="px-7 py-3.5 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition flex items-center gap-2"
            >
              Explore Architecture
            </a>
          </motion.div>
        </div>

        {/* 6 Operational Benefit Cards with Custom Vector Art */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {operationalBenefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.06 }}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/60 hover:bg-white/[0.08] p-5 transition duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Vector Art Graphic Banner */}
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-slate-950/60 group-hover:border-secondary/40 transition">
                  {item.art}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-secondary">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-Domain Connected Assets Visual from introduction.md */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl bg-white p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-gray-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                Unified Multi-Domain Ecosystem
              </span>
              <span className="text-xs text-gray-500">
                Drones • Ground Vehicles • Robot Arms • Process Tools • Controllers • AI Agents • Data Viewers
              </span>
            </div>
            <img
              src="/introduction/ConnectedAssets.svg"
              alt="Multi-domain asset connectivity across Uli SDK"
              className="w-full h-auto max-h-[420px] object-contain mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenDoc }) => (
  <footer className="py-12 bg-primary border-t border-white/10 text-gray-400 text-sm">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          src="/favicon.PNG"
          alt="Uli Logo"
          className="w-7 h-7 object-contain rounded-full"
        />
        <p>© {new Date().getFullYear()} Open Vision Technology, LLC. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-6 text-xs">
        <button
          onClick={() => onOpenDoc('introduction.md')}
          className="hover:text-secondary transition cursor-pointer"
        >
          Introduction
        </button>
        <button
          onClick={() => onOpenDoc('users_guide.md')}
          className="hover:text-secondary transition cursor-pointer"
        >
          User&apos;s Guide
        </button>
        <button
          onClick={() => onOpenDoc('security_safety_reliability.md')}
          className="hover:text-secondary transition cursor-pointer"
        >
          Security &amp; Safety
        </button>
        <a href="#docs" className="hover:text-secondary transition">
          All 7 Tech Docs
        </a>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [activeDocFile, setActiveDocFile] = useState(null);

  return (
    <div className="min-h-screen bg-bg-light font-sans selection:bg-secondary/30 text-primary">
      <Navbar />
      <Hero onOpenDoc={setActiveDocFile} />
      <BenefitsSection />
      <ArchitectureSection />
      <DocsSection
        activeDocFile={activeDocFile}
        onOpenDoc={setActiveDocFile}
        onCloseDoc={() => setActiveDocFile(null)}
      />
      <ContactSection />
      <Footer onOpenDoc={setActiveDocFile} />
    </div>
  );
};

export default App;
