import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const highlightsData = [
    { title: "Dynamic and Self-Configuring Infrastructure", desc: "A runtime-adaptive backbone for the seamless integration and orchestration of assets across multi-dimensional operating domains." },
    { title: "Unified Discovery Services", desc: "Standardized interfaces for the real-time discovery of robotic assets, their functional capability context, and deep telemetry semantics." },
    { title: "Knowledge Graph Synthesis", desc: "Automated ingestion of discovered Asset, Capability, and Telemetry contexts into a structured Knowledge Graph to support advanced AI reasoning." },
    { title: "Comprehensive Asset State Management", desc: "Granular control over operational states including Initializing, Operational, Emergency, Pause, Shutdown, and Render Useless." },
    { title: "Safety-Critical Lifecycle Coordination", desc: "Automated management of functional module lifecycles synchronized with asset operational states." },
    { title: "Proactive Health Monitoring", desc: "Real-time application status tracking and health reporting to enforce asset safety by triggering coordinated emergency transitions." },
    { title: "Redundant Emergency Propagation", desc: "Multi-path E-Stop propagation architecture to mitigate single-point failures." },
    { title: "Versatile Operating Modes", desc: "Built-in support for Standard, Reduced, Training, and Maintenance modes." },
    { title: "Zero-Trust Security Model", desc: "Robust certificate-based client authentication and authorization for all system interactions." },
    { title: "Tiered Access Governance", desc: "Granular authorization for functional capabilities (Operator/Maintainer) and telemetry data (Classified/Controlled/Unclassified)." },
    { title: "Native A2UI Integration", desc: "High-performance Dart-FFI bindings for direct integration with Flutter, enabling AI-driven 3D drawings and media displays." },
    { title: "Python Bindings", desc: "Straightforward integration of ROS, simulations, and machine learning modules, bridging the gap between high-level AI research and physical deployment." },
    { title: "Code Generation Tools", desc: "that produce C++ code for record structures, messages, services, applications, and Python bindings." },
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
