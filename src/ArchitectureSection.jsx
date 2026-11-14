import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Wrench,
  Layout,
  Network,
  Layers,
  UserCheck,
  Share2,
  CheckCircle2
} from 'lucide-react';

const diagramViews = [
  {
    id: 'architecture',
    label: 'System Architecture',
    icon: <Layout size={15} />,
    image: '/introduction/Architecture.svg',
    title: 'End-to-End Agentic & Robotics Ecosystem',
    summary:
      'Bridges physical robotic assets with operator control units, data viewers, and modern Agentic AI through unified discovery, a live Knowledge Graph, and native Flutter A2UI.',
    highlights: [
      'Unified discovery exports Markdown context for asset identity, capabilities, telemetries, and health',
      'Powers AI reasoning, tool execution, and real-time fleet state estimation',
      'Native Dart-FFI bindings connect C++ core directly to Flutter A2UI widgets'
    ]
  },
  {
    id: 'infrastructure',
    label: '3-Tier Infrastructure',
    icon: <Network size={15} />,
    image: '/introduction/Infrastructure.svg',
    title: 'Subsystem → Node → Component Hierarchy',
    summary:
      'Organizes computing resources into Subsystems (complete assets/stations), Nodes (computing devices), and Components (applications), addressed as (Subsystem ID, Node ID, Comp ID).',
    highlights: [
      'DHCP-like dynamic ID allocation via Id Allocator and Subsystem Manager',
      'High-performance Cap’n Proto serialization over local sockets, UDP unicast, and multicast',
      'Zero-config routing via Node Manager with logical network partitions for traffic isolation'
    ]
  },
  {
    id: 'services',
    label: 'Service Building Blocks',
    icon: <Layers size={15} />,
    image: '/introduction/Services.svg',
    title: 'Standardized, Self-Describing Services',
    summary:
      'Each Service is formally defined by its input/output messages, internal events, governing state machine, and configurable parameters—packaged into modular Components.',
    highlights: [
      'Every component implements Service Register for automatic runtime discovery',
      'Every component implements Status Reporter for standardized health & state observability',
      'Elevates Agents, Data Topics, Digital Resources, and CoT Events as primary asset interfaces'
    ]
  },
  {
    id: 'agent-workflow',
    label: 'Exclusive Agent Control',
    icon: <UserCheck size={15} />,
    image: '/introduction/AgentWorkFlow.svg',
    title: 'Authenticated Exclusive Control & Handover',
    summary:
      'Agents represent commandable asset capabilities. Only one authorized client (Operator, Maintainer, or Administrator) controls a subsystem and its agents at any time.',
    highlights: [
      'Certificate-authenticated control sessions with authority-based preemption (1–255)',
      'Seamless control handover between human operators and autonomous AI agents',
      'Self-describing parameter schemas and status templates ground LLM tool execution'
    ]
  },
  {
    id: 'data-workflow',
    label: 'Shared Data Topics',
    icon: <Share2 size={15} />,
    image: '/introduction/DataTopicWorkFlow.svg',
    title: 'Tiered Publish-Subscribe Telemetry',
    summary:
      'Data Topics disseminate real-time telemetry and sensor streams using a non-exclusive publish-subscribe model filtered by client clearance level.',
    highlights: [
      'Concurrent multi-client subscriptions across Classified, Controlled, and Unclassified tiers',
      'Dynamic discovery of topic schemas, telemetry semantics, and stream URLs',
      'Complemented by Resource Discovery (Audio/Video, Web, MCP) and CoT Event Broadcasting'
    ]
  }
];

const platformSpecs = [
  { os: 'JetPack 7.2', target: 'NVIDIA Jetson Orin Nano/NX, DGX', host: 'Ubuntu 24.04' },
  { os: 'JetPack 6.2', target: 'NVIDIA Jetson Orin Nano/NX, AGX', host: 'Ubuntu 22.04' },
  { os: 'Ubuntu 22.04 – 24.04', target: 'x86_64 Systems', host: 'Ubuntu 22.04 – 24.04' }
];

const ArchitectureSection = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const currentView = diagramViews.find((d) => d.id === activeTab) || diagramViews[0];

  return (
    <section id="architecture" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Layout size={14} /> Architecture &amp; Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Self-Configuring Architecture &amp; Unified Workflows
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Explore how Uli SDK organizes computing resources, discovers capabilities at runtime, and governs exclusive control and shared telemetry.
          </p>
        </motion.div>

        {/* Interactive Diagram Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {diagramViews.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer border ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-secondary/40 hover:text-primary'
                }`}
              >
                <span className={isActive ? 'text-secondary' : 'text-gray-400'}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Diagram Showcase */}
        <motion.div
          key={currentView.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid lg:grid-cols-12 gap-8 items-center bg-bg-light/70 border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 shadow-sm"
        >
          {/* Left: SVG Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-md flex items-center justify-center min-h-[300px]">
            <img
              src={currentView.image}
              alt={currentView.title}
              className="w-full h-auto max-h-[460px] object-contain"
            />
          </div>

          {/* Right: Explanation (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono font-bold uppercase">
              {currentView.label}
            </div>
            <h3 className="text-2xl font-bold text-primary leading-snug">
              {currentView.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {currentView.summary}
            </p>
            <ul className="space-y-3 pt-2">
              {currentView.highlights.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Row: Tooling & Supported Platforms */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Developer Tooling */}
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-secondary font-bold mb-2">
                <Wrench size={14} /> Developer Experience
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Comprehensive Build &amp; Code Generation Tooling
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Accelerate development from initial service definition to multi-device fleet deployment.
              </p>

              <ul className="space-y-5">
                <li className="flex gap-3.5 items-start">
                  <div className="mt-0.5 p-2.5 bg-secondary/10 rounded-xl text-secondary shrink-0">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Automated Code Generation</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Generates concise C++ code for records, Cap’n Proto messages, state-machine services, and component applications, alongside Python and Dart-FFI bindings.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3.5 items-start">
                  <div className="mt-0.5 p-2.5 bg-secondary/10 rounded-xl text-secondary shrink-0">
                    <Wrench size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Cross-Platform Bazel Build System</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Uses Google’s Bazel for fast, reproducible builds and seamless cross-compilation across <code className="font-mono text-primary">x86_64</code> and <code className="font-mono text-primary">ARM64</code> architectures, paired with staging and deployment scripts.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3.5 items-start">
                  <div className="mt-0.5 p-2.5 bg-secondary/10 rounded-xl text-secondary shrink-0">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">AI-Assisted Development</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Built-in project skills and context allow <strong>Google Antigravity IDE</strong> and <strong>Claude CLI</strong> to assist with service generation and application development.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Supported Platforms Table */}
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-secondary font-bold mb-2">
                <Cpu size={14} /> Hardware &amp; OS Matrix
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Supported Target &amp; Host Platforms
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Develop on standard <code className="font-mono text-primary">x86_64</code> workstations and cross-compile effortlessly to the full family of NVIDIA Jetson edge AI modules.
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white text-xs font-mono uppercase">
                      <th className="py-3 px-4">OS / JetPack</th>
                      <th className="py-3 px-4">Target Device</th>
                      <th className="py-3 px-4 hidden sm:table-cell">Dev Host (x86_64)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-xs">
                    {platformSpecs.map((row, i) => (
                      <tr key={i} className="hover:bg-secondary/5 transition">
                        <td className="py-3 px-4 font-mono font-bold text-primary whitespace-nowrap">
                          {row.os}
                        </td>
                        <td className="py-3 px-4 text-gray-700 font-medium">
                          {row.target}
                        </td>
                        <td className="py-3 px-4 text-gray-500 font-mono hidden sm:table-cell whitespace-nowrap">
                          {row.host}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap gap-2">
              {['ROS / ROS 2', 'NVIDIA Isaac ROS', 'AeroStack2', 'Physical AI', 'MCP Servers', 'Flutter A2UI'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-mono text-primary font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
