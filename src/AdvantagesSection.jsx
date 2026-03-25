import React from 'react';
import { motion } from 'framer-motion';
import { Waypoints, Settings, Search, ShieldCheck, HeartPulse, Activity, Award, CircleDollarSign } from 'lucide-react';

const advantagesData = [
    {
        title: "Autonomous Agent Interoperability",
        desc: "Enables AI agents to reason across diverse hardware fleets through unified discovery and dynamic tool configuration.",
        icon: <Waypoints className="text-secondary w-6 h-6" />
    },
    {
        title: "Semantic Knowledge Retrieval",
        desc: "Provides a Context Layer that allows AI agents to perform semantic retrieval from the Knowledge Graph to ground decision-making.",
        icon: <Settings className="text-secondary w-6 h-6" />
    },
    {
        title: "Enhanced Situational Awareness",
        desc: "Powers the AI cognitive 'reasoning and acting' cycle by feeding agents with the complete discovered context.",
        icon: <Search className="text-secondary w-6 h-6" />
    },
    {
        title: "High-Level State Estimation",
        desc: "Allows agents to reason over live telemetry semantics to maintain an accurate world model of physical status and operational health.",
        icon: <ShieldCheck className="text-secondary w-6 h-6" />
    },
    {
        title: "Accelerated A2UI Development",
        desc: "The native Dart-FFI framework enables AI agents to drive real-time user interfaces directly from live telemetry.",
        icon: <HeartPulse className="text-secondary w-6 h-6" />
    },
    {
        title: "MOSA-Compliant Flexibility",
        desc: "Adopts the Modular Open Systems Approach to ensure long-term interoperability and the elimination of vendor lock-in.",
        icon: <Activity className="text-secondary w-6 h-6" />
    },
    {
        title: "High Quality",
        desc: "Quality assurance is embedded throughout the development lifecycle, with continuous review and validation to ensure objectives are met.",
        icon: <Award className="text-secondary w-6 h-6" />
    },
    {
        title: "Cost Effectiveness",
        desc: "The SDK is delivered as open-source for licensed customers, offering full transparency and eliminating vendor lock-in to provide a low total cost of ownership.",
        icon: <CircleDollarSign className="text-secondary w-6 h-6" />
    }
];

const AdvantagesSection = () => {
    return (
        <section id="advantages" className="py-24 bg-primary relative overflow-hidden">
            {/* Animated Background Pulse */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold mb-6">
                        <Award size={14} /> WHY ULI SDK
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Advantages of Uli SDK
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Uli SDK is engineered to deliver a decisive edge in adaptability, interoperability, and operational integrity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantagesData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg border border-white/5">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
