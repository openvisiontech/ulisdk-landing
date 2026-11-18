import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  ShieldCheck,
  Boxes,
  Network,
  BrainCircuit,
  UserCheck,
  Share2,
  Globe,
  Radio,
  AlertTriangle,
  Layers,
  Code2
} from 'lucide-react';

const coreBenefits = [
  {
    badge: 'Faster Time-to-Market',
    title: 'Eliminate Middleware Plumbing',
    desc: 'Stop building complex, non-differentiating infrastructure from scratch. Uli SDK provides production-ready libraries for discovery, routing, access governance, and safety so your team focuses 100% on core robotics and AI logic.',
    metrics: ['Zero-config runtime networking', 'Auto-generated C++, Python & Dart code'],
    icon: <Clock className="w-6 h-6 text-secondary" />
  },
  {
    badge: 'Lower Project & Field Risk',
    title: 'Mission-Grade Safety, Security & Reliability',
    desc: 'Built-in certificate-based Zero-Trust security, multi-path redundant E-Stop propagation, and a two-tiered lifecycle state machine protect high-value physical assets in dynamic environments.',
    metrics: ['Separate Data vs. Control tokens', 'Redundant fault & E-Stop paths'],
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />
  },
  {
    badge: 'Turnkey Physical AI',
    title: 'Bridge Robotics with Agentic AI & A2UI',
    desc: 'Assets automatically export rich Markdown context to synthesize a live Knowledge Layer for AI tool grounding, reasoning, and state estimation—while driving real-time Flutter A2UI operator interfaces.',
    metrics: ['Self-describing AI agent tools', 'Native Dart-FFI Flutter widgets'],
    icon: <BrainCircuit className="w-6 h-6 text-secondary" />
  },
  {
    badge: 'Zero Vendor Lock-In',
    title: 'Multi-Domain MOSA Interoperability',
    desc: 'Adheres to the DoD Modular Open Systems Approach (MOSA). Seamlessly connect drones, ground vehicles, robot arms, process tools, controllers, and AI agents with swappable services.',
    metrics: ['DoD MOSA-compliant interfaces', 'Delivered with source for licensed users'],
    icon: <Boxes className="w-6 h-6 text-secondary" />
  }
];

const nineCapabilities = [
  {
    num: '01',
    title: 'Dynamic, Self-Configuring Infrastructure',
    benefit: 'Zero static IP setup',
    desc: 'Connects robotic assets at runtime through automatic DHCP-like ID allocation and self-learning message routing over Cap’n Proto local sockets, UDP unicast, and multicast.',
    icon: <Network className="w-5 h-5 text-secondary" />,
    docLink: 'users_guide.md'
  },
  {
    num: '02',
    title: 'Unified Discovery & AI Knowledge Layer',
    benefit: 'Automated AI context grounding',
    desc: 'Discovers assets, capabilities, telemetries, health status, and semantic Markdown context at runtime to build a live Knowledge Graph for LLM reasoning and execution.',
    icon: <BrainCircuit className="w-5 h-5 text-secondary" />,
    docLink: 'introduction.md'
  },
  {
    num: '03',
    title: 'Exclusive Asset Control & Handover',
    benefit: 'Conflict-free mission execution',
    desc: 'Enforces single-client exclusive control (Operator, Maintainer, Administrator) over subsystems and agents, with authority-based preemption and seamless control handover.',
    icon: <UserCheck className="w-5 h-5 text-secondary" />,
    docLink: 'security_safety_reliability.md'
  },
  {
    num: '04',
    title: 'Shared Data & Telemetry Access',
    benefit: 'Tiered multi-client visibility',
    desc: 'Enables concurrent, non-exclusive publish-subscribe access to real-time sensor and telemetry streams filtered across Classified, Controlled, and Unclassified privilege tiers.',
    icon: <Share2 className="w-5 h-5 text-secondary" />,
    docLink: 'security_safety_reliability.md'
  },
  {
    num: '05',
    title: 'Shared Digital Resource Access',
    benefit: 'Unified stream & MCP discovery',
    desc: 'Dynamically exposes and shares asset-hosted audio/video streams, web endpoints, and Model Context Protocol (MCP) servers with operators and multimodal AI agents.',
    icon: <Globe className="w-5 h-5 text-secondary" />,
    docLink: 'core_services.md'
  },
  {
    num: '06',
    title: 'CoT-Style Event Broadcasting',
    benefit: 'Rich situational awareness',
    desc: 'Broadcasts system-wide events structured around Cursor-on-Target (When, Where, What) with embedded images and 3D/AI models for immediate visual and spatial context.',
    icon: <Radio className="w-5 h-5 text-secondary" />,
    docLink: 'introduction.md'
  },
  {
    num: '07',
    title: 'Redundant Safety Management',
    benefit: 'No single point of failure',
    desc: 'Combines continuous health monitoring with multi-path emergency (E-Stop) propagation to immediately transition all safety-critical modules into a coordinated safe state.',
    icon: <AlertTriangle className="w-5 h-5 text-secondary" />,
    docLink: 'security_safety_reliability.md'
  },
  {
    num: '08',
    title: 'Highly Modular & MOSA Compliant',
    benefit: 'Rapid capability reconfiguration',
    desc: 'Encapsulates every capability into formal state-machine services with standardized interfaces, mandatory Service Register, and Status Reporter observability.',
    icon: <Layers className="w-5 h-5 text-secondary" />,
    docLink: 'core_services.md'
  },
  {
    num: '09',
    title: 'Turnkey ROS & AI Agent Integration',
    benefit: 'Out-of-the-box ecosystem bridge',
    desc: 'Automatically generates Python and Dart-FFI bindings for seamless integration with ROS / ROS 2, NVIDIA Isaac ROS, Physical AI, ReAct/MCP agents, simulations, and Flutter A2UI.',
    icon: <Code2 className="w-5 h-5 text-secondary" />,
    docLink: 'introduction.md'
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-bg-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Part 1: Executive & Engineering Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Zap size={14} /> Why Uli SDK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Built to Accelerate Robotics &amp; Physical AI
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Uli SDK replaces months of custom networking, serialization, security, and state-machine engineering with a unified, field-proven software backbone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {coreBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-lg hover:shadow-xl hover:border-secondary/40 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/5 text-primary font-mono text-xs font-semibold">
                    {benefit.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {benefit.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                {benefit.metrics.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-secondary bg-secondary/5 border border-secondary/15 px-3 py-1 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Part 2: 9 Foundational Capabilities */}
        <div id="capabilities" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-3">
                Architectural Pillars
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                Foundational Capabilities
              </h3>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nineCapabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.07 }}
                className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-secondary/40 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-secondary/10 text-secondary">
                        {cap.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider">
                        {cap.benefit}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-400 font-bold">
                      {cap.num}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

