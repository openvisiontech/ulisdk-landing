import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Wrench, Layout } from 'lucide-react';

const ArchitectureSection = () => {
    return (
        <section id="architecture" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Architecture Image & Development Specs */}
                    <div className="flex-1 w-full space-y-6">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50" />
                            <div className="relative rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl flex justify-center items-center overflow-hidden">
                                <img
                                    src="/Architecture.svg"
                                    alt="Uli SDK Architecture"
                                    className="w-full h-auto rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>

                        {/* Sidebar-style Specs */}
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl">
                            <h3 className="text-[10px] font-mono text-secondary mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Cpu size={14} /> Development
                            </h3>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-3">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-200 pb-2 gap-1 sm:gap-4">
                                    <span className="text-gray-500 font-mono text-[10px] whitespace-nowrap">Devices - X86_64</span>
                                    <span className="text-primary font-mono text-[10px] font-bold text-left sm:text-right">Nvidia Jetson Nano, Xavier NX, Orin Nano, NX, AGX</span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-200 pb-2 gap-1 sm:gap-4">
                                    <span className="text-gray-500 font-mono text-[10px] whitespace-nowrap">Operating Systems</span>
                                    <span className="text-primary font-mono text-[10px] font-bold text-left sm:text-right">Ubuntu 18.04 - 24.04, Nvidia Jetpack 4.6, 5.1, 6.2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content & Tools Card */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold mb-6"
                        >
                            <Layout size={14} /> ARCHITECTURE & TOOLS
                        </motion.div>

                        <h2 className="text-4xl font-bold text-primary mb-6">
                            Uli SDK Architecture <br />
                            <span className="text-secondary">Self-Configuring Infrastructure</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            A high-level view of the Uli SDK ecosystem, bridging physical assets with Agentic AI.
                            Its dynamic, self-configuring infrastructure allows functional modules to be discovered, integrated, and utilized at runtime.
                        </p>

                        {/* Tools Card */}
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-lg">
                            <h3 className="text-lg font-bold text-primary mb-3">Comprehensive Tooling</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Uli SDK provides a suite of tools to facilitate code generation, building, and application deployment.
                            </p>
                            <ul className="space-y-5">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 p-2 bg-secondary/10 rounded-lg text-secondary">
                                        <Terminal size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-primary">Code Generation</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                            Utilities produce concise C++ code, plus automatic Python bindings and Dart-FFI for seamless integration with Python and Flutter frameworks. Uli SDK can serve as the back end for Flutter-UI.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 p-2 bg-secondary/10 rounded-lg text-secondary">
                                        <Wrench size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-primary">Build & Deploy</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                            Utilizes Google’s Bazel tool for highly efficient cross-building across x86 and ARM 64-bit systems, alongside shell scripts for simplified staging and deployment.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 p-2 bg-secondary/10 rounded-lg text-secondary">
                                        <Cpu size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-primary">AI Copilots</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                            Leverage help from Google Antigravity IDE and Claude CLI that have a comprehensive understanding of Uli SDK source codes to speed up development.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
