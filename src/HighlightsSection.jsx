import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const highlightsData = [
    { title: "Agentic AI Interoperability", desc: "enabling autonomous agents to reason across diverse hardware fleets." },
    { title: "A2UI (Agent-to-UI) Framework", desc: "native Dart-FFI integration, enabling AI agents to drive real-time, high fidelity user interfaces directly from telemetry streams." },
    { title: "Dynamic and Self-Configuring", desc: "infrastructure for integrating robotic assets." },
    { title: "Modular Open System Approach (MOSA)", desc: "provides interoperability and flexibility of the system architecture." },
    { title: "Enhance LLM’s situation awareness", desc: "from the connected ecosystem to power its cognitive reasoning and acting cycle." },
    { title: "Certificate-based client", desc: "authentication and authorization." },
    { title: "Exclusive control authorization", desc: "of agents, categorized into Operator, Maintainer, and Administrator." },
    { title: "Data access authorization", desc: "categorizes into classified, controlled, and unclassified tiers." },
    { title: "Lifecycle management", desc: "of the safety-critical applications, including startup, runtime, and shutdown phases." },
    { title: "Service health reporting and monitoring", desc: "to track application status." },
    { title: "Emergency stop (e-stop) propagation", desc: "to allow applications to manage critical situations." },
    { title: "Support for various operating modes", desc: "including Standard, Reduced, Training, Maintenance, and user-defined modes." },
    { title: "Code generation tools", desc: "that produce C++ code for record structures, messages, services, applications, and Python bindings." },
    { title: "Cross-build support", desc: "for x86_64, NVIDIA Jetson Nano, Xavier, and Orin, as well as multiple Ubuntu versions (18.04 - 24.04, Jetpack 4.6, 5.1, 6.2)." }
];

const HighlightsSection = () => {
    return (
        <section id="highlights" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold mb-6">
                        <Star size={14} /> KEY HIGHLIGHTS
                    </div>
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Uli SDK Highlights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Engineered to deliver a decisive edge in adaptability, interoperability, and operational integrity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {highlightsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-secondary/30 transition duration-300"
                        >
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 className="text-secondary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
