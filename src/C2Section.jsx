import React from 'react';
import { Radio, Server, Database, Cpu, ShieldCheck } from 'lucide-react';

const C2Section = () => {
    const layers = [
        {
            layer: "Layer 1: Transport Layer",
            subtitle: "Tactical UDP & Cap'n Proto",
            icon: <Radio className="w-8 h-8 text-blue-400" />,
            role: "Zero-Copy Data Transport",
            desc: "Optimized for DDIL and constrained tactical networks using ultra-fast Cap'n Proto serialization for zero-copy messaging and peer-to-peer telemetry.",
            engineeringDetail: "Sub-millisecond serialization overhead for continuous real-time messaging and telemetry."
        },
        {
            layer: "Layer 2: Infrastructure Layer",
            subtitle: "Self-Configuring Runtime Middleware",
            icon: <Server className="w-8 h-8 text-cyan-400" />,
            role: "Dynamic Discovery Engine",
            desc: "Connects Agentic AI directly to ROS/ROS2 and traditional C++ robotics software. Features self-configuring discovery of Asset Context, Capability Context (Agent Skills), and Telemetry semantics.",
            engineeringDetail: "Runtime-adaptive node configuration without hard-coded static configurations."
        },
        {
            layer: "Layer 3: Data Fabric Layer",
            subtitle: "Knowledge Graph Synthesis",
            icon: <Database className="w-8 h-8 text-purple-400" />,
            role: "Semantic Context Layer",
            desc: "Automates the ingestion of discovered asset identity, functional skills, and data topics into a live Knowledge Graph, providing the semantic foundation required for Army R2I compliance.",
            engineeringDetail: "Transforms raw ROS topics into searchable Markdown/graph metadata for LLM ingestion."
        },
        {
            layer: "Layer 4: Application Layer",
            subtitle: "Agentic AI & A2UI Dashboards",
            icon: <Cpu className="w-8 h-8 text-green-400" />,
            role: "Semantic Reasoning & Flutter UI",
            desc: "Powers local LLMs to perform semantic retrieval, live state estimation, and command execution, while driving real-time 2D/3D Flutter dashboards via native Dart-FFI.",
            engineeringDetail: "Native Dart-FFI interface bridging bare-metal C++ telemetry to Flutter UI."
        }
    ];

    return (
        <section id="ngc2-architecture" className="py-20 bg-slate-950 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                        <ShieldCheck className="w-4 h-4" /> Next-Gen C2 (NGC2) Architecture
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Bridging AI Agents to Physical Hardware across the C2 Stack
                    </h2>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        How the Uli SDK's engineering core connects low-level UDP socket transport to high-level Knowledge Graph data fabrics and autonomous agents.
                    </p>
                </div>

                {/* 4-Layer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {layers.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-3 bg-slate-800/80 rounded-lg w-fit mb-4 border border-slate-700">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                                    {item.role}
                                </span>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {item.layer}
                                </h3>
                                <p className="text-xs text-slate-400 mb-4 font-medium">
                                    {item.subtitle}
                                </p>
                                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800 mt-auto">
                                <span className="text-xs font-semibold text-cyan-400/80 block mb-1">
                                    Core Engineering Feature:
                                </span>
                                <p className="text-xs text-slate-400 italic">
                                    "{item.engineeringDetail}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default C2Section;