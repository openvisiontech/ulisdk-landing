import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Search, Zap, ChevronRight, Mail, FileText, X, Download, Network, Shield, AlertTriangle, Activity } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ArchitectureSection from './ArchitectureSection';
import HighlightsSection from './HighlightsSection';
import AdvantagesSection from './AdvantagesSection';
import ContactSection from './ContactSection';

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <img src="/favicon.PNG" alt="Uli Logo" className="w-10 h-10 object-contain rounded-full" />
      <span className="text-xl font-bold tracking-tight text-primary">Uli SDK</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <a href="#hero" className="hover:text-secondary transition">^</a>
      <a href="#solutions" className="hover:text-secondary transition">Features</a>
      <a href="#architecture" className="hover:text-secondary transition">Architecture</a>
      <a href="#highlights" className="hover:text-secondary transition">Highlights</a>
      <a href="#advantages" className="hover:text-secondary transition">Advantages</a>
    </div>
    <a
      href="https://www.ulikaya.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-accent hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
    >
      Uli Kaya Robot
    </a>
  </nav>
);

const Hero = () => {
  const [showCoverPage, setShowCoverPage] = React.useState(false);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (showCoverPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showCoverPage]);

  return (
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-primary">
      {/* Animated Background Pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-6"
        >
          <Zap size={14} /> AGENT SKILLS
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          The Robotic Nervous System <br /><span className="text-secondary">for Agentic AI</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Uli (Unified Link Interface) SDK is a high-performance middleware designed to bridge the gap between traditional infrastructures and modern Agentic AI ecosystems. By leveraging the discovery services, Uli SDK enables physical assets to expose their functional capabilities and telemetry as discoverable "context" and "tools" for Language Models.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#architecture"
            className="px-8 py-4 bg-accent text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
          >
            See Architecture <ChevronRight size={18} />
          </a>
          <button
            onClick={() => setShowCoverPage(true)}
            className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition cursor-pointer">
            <Download size={18} /> Download Technical Documents
          </button>
        </div>
      </div>

      {showCoverPage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setShowCoverPage(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-primary">
                <Download size={24} className="text-secondary" />
                <h3 className="text-xl font-bold">Download Documents</h3>
              </div>
              <button
                onClick={() => setShowCoverPage(false)}
                className="text-gray-500 hover:text-primary transition p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <a
                href="/cover_page.pdf"
                download
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-secondary/50 hover:bg-secondary/5 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition">
                    <FileText size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-primary">Cover Page</h4>
                    <p className="text-xs text-gray-500">Uli SDK Overview</p>
                  </div>
                </div>
                <Download size={18} className="text-gray-400 group-hover:text-secondary transition" />
              </a>

              <a
                href="/introduction.pdf"
                download
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-secondary/50 hover:bg-secondary/5 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition">
                    <FileText size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-primary">Introduction</h4>
                    <p className="text-xs text-gray-500">Technical Details</p>
                  </div>
                </div>
                <Download size={18} className="text-gray-400 group-hover:text-secondary transition" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Features = () => (
  <section id="solutions" className="py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Agile and Adaptable", desc: "Leveraging its DoD MOSA-compliant design with unified interfaces and dynamic modules, Uli SDK enables the seamless interoperability and rapid reconfiguration of capabilities, resulting in a highly agile system built for change.", icon: <Zap className="text-secondary" /> },
        { title: "Agent skills-based Middleware", desc: "Uli SDK serves as an implementation of Agent Skills for robotics. It acts as the bridge between an AI's cognitive processes and a robotic system's capabilities, enhancing situational awareness by feeding AI agents with the context of the robotic systems for reasoning and providing executable functional capabilities to act upon AI agents' decisions.", icon: <Bot className="text-secondary" /> },
        { title: "A2UI (Agent-to-UI) Framework", desc: "Uli SDK features native Dart-FFI integration, creating a powerful A2UI framework. This enables AI agents to drive real-time, high-fidelity user interfaces directly from telemetry streams.", icon: <Cpu className="text-secondary" /> },
        { title: "Security", desc: "Uli SDK's security model uses certificate-based authentication and requires clients to make separate requests to gain explicit permissions for both data access (telemetry) and control access (functional capabilities).", icon: <Shield className="text-secondary" /> },
        { title: "Safety", desc: "Uli SDK's safety approach combines proactive detection with decisive handling through a redundant triggering system, which automatically responds to application errors and manual e-stop commands by transitioning the entire system into a coordinated emergency state.", icon: <AlertTriangle className="text-secondary" /> },
        { title: "Reliability", desc: "Uli SDK achieves reliability through a two-tiered state machine system that orchestrates both overall application and individual module behavior, combined with distinct operating modes that fine-tune functions for specific operational needs.", icon: <Activity className="text-secondary" /> },
        { title: "Integration", desc: "Uli SDK automatically generates Python bindings and Dart-FFI for applications, facilitating seamless integration with the Physical AI, ROS, Simulations, AI Agents, and a diverse array of Python and Dart-Flutter frameworks.", icon: <Network className="text-secondary" /> }
      ].map((f, i) => (
        <div key={i} className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-gray-100 hover:border-secondary/30 transition duration-300">
          <div className="mb-4 text-3xl">{f.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-2">{f.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-primary border-t border-white/5 text-center text-gray-400 text-sm">
    <p>© {new Date().getFullYear()} Open Vision Technology, LLC. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="min-h-screen bg-bg-light font-sans selection:bg-secondary/30 text-primary">
    <Navbar />
    <Hero />
    <Features />
    <ArchitectureSection />
    <HighlightsSection />
    <AdvantagesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
