import React from 'react';

/**
 * 1. One Controller, Any Asset
 * Visualizes a single universal controller operating a Drone, UGV Rover, and Robot Arm.
 */
export const OneControllerArt = () => (
  <svg viewBox="0 0 320 150" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oc-bg" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#222831" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="oc-line" x1="160" y1="120" x2="160" y2="35" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F29462" />
        <stop offset="100%" stopColor="#00ADB5" />
      </linearGradient>
    </defs>

    <rect width="320" height="150" rx="14" fill="url(#oc-bg)" />

    {/* Subtle Background Grid */}
    <path d="M0 38H320M0 75H320M0 112H320M64 0V150M128 0V150M192 0V150M256 0V150" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

    {/* Command Arcs from Controller to 3 Assets */}
    <path d="M145 110 C115 88, 78 72, 60 48" stroke="url(#oc-line)" strokeWidth="2" strokeDasharray="4 3" />
    <path d="M160 104 L160 48" stroke="#00ADB5" strokeWidth="2.5" />
    <path d="M175 110 C205 88, 242 72, 260 48" stroke="url(#oc-line)" strokeWidth="2" strokeDasharray="4 3" />

    {/* Animated Signal Pulses */}
    <circle r="3.5" fill="#F29462">
      <animateMotion dur="2.2s" repeatCount="indefinite" path="M145 110 C115 88, 78 72, 60 48" />
    </circle>
    <circle r="3.5" fill="#00ADB5">
      <animateMotion dur="1.8s" repeatCount="indefinite" path="M160 104 L160 48" />
    </circle>
    <circle r="3.5" fill="#F29462">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M175 110 C205 88, 242 72, 260 48" />
    </circle>

    {/* Left Asset: Drone (Air) */}
    <g transform="translate(32, 14)">
      <rect x="0" y="0" width="56" height="36" rx="9" fill="#182029" stroke="#00ADB5" strokeOpacity="0.6" strokeWidth="1.5" />
      {/* Drone Icon */}
      <line x1="16" y1="12" x2="40" y2="24" stroke="#00ADB5" strokeWidth="1.8" />
      <line x1="40" y1="12" x2="16" y2="24" stroke="#00ADB5" strokeWidth="1.8" />
      <circle cx="28" cy="18" r="4" fill="#F29462" />
      <circle cx="15" cy="11" r="4" stroke="#94a3b8" strokeWidth="1.3" />
      <circle cx="41" cy="11" r="4" stroke="#94a3b8" strokeWidth="1.3" />
      <circle cx="15" cy="25" r="4" stroke="#94a3b8" strokeWidth="1.3" />
      <circle cx="41" cy="25" r="4" stroke="#94a3b8" strokeWidth="1.3" />
      <text x="28" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="bold">UAV / AIR</text>
    </g>

    {/* Center Asset: UGV Rover (Ground) */}
    <g transform="translate(132, 10)">
      <rect x="0" y="0" width="56" height="38" rx="9" fill="#182029" stroke="#00ADB5" strokeWidth="2" />
      {/* Rover Icon */}
      <rect x="15" y="14" width="26" height="10" rx="3" fill="#00ADB5" />
      <rect x="22" y="9" width="12" height="5" rx="1.5" fill="#F29462" />
      <circle cx="19" cy="26" r="4" fill="#e2e8f0" stroke="#182029" strokeWidth="1.5" />
      <circle cx="28" cy="26" r="4" fill="#e2e8f0" stroke="#182029" strokeWidth="1.5" />
      <circle cx="37" cy="26" r="4" fill="#e2e8f0" stroke="#182029" strokeWidth="1.5" />
      <text x="28" y="49" textAnchor="middle" fill="#00ADB5" fontSize="8" fontFamily="monospace" fontWeight="bold">UGV / GROUND</text>
    </g>

    {/* Right Asset: Robot Arm (Industrial) */}
    <g transform="translate(232, 14)">
      <rect x="0" y="0" width="56" height="36" rx="9" fill="#182029" stroke="#00ADB5" strokeOpacity="0.6" strokeWidth="1.5" />
      {/* Robotic Arm Icon */}
      <rect x="16" y="26" width="24" height="3" rx="1.5" fill="#94a3b8" />
      <path d="M24 26 L21 16 L33 11" stroke="#00ADB5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="16" r="2.5" fill="#F29462" />
      <path d="M33 11 L38 9 M33 11 L37 15" stroke="#F29462" strokeWidth="1.8" strokeLinecap="round" />
      <text x="28" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="bold">MANIPULATOR</text>
    </g>

    {/* Bottom Center: Universal Operator Controller */}
    <g transform="translate(106, 98)">
      <rect x="0" y="0" width="108" height="40" rx="10" fill="#0f172a" stroke="#F29462" strokeWidth="2" />
      {/* Left & Right Joysticks */}
      <circle cx="20" cy="20" r="8" fill="#1e293b" stroke="#00ADB5" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3" fill="#F29462" />
      <circle cx="88" cy="20" r="8" fill="#1e293b" stroke="#00ADB5" strokeWidth="1.5" />
      <circle cx="88" cy="20" r="3" fill="#F29462" />
      {/* Controller Screen */}
      <rect x="34" y="8" width="40" height="24" rx="4" fill="#00ADB5" fillOpacity="0.18" stroke="#00ADB5" strokeWidth="1.2" />
      <text x="54" y="19" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace" fontWeight="bold">1 → ALL</text>
      <text x="54" y="28" textAnchor="middle" fill="#00ADB5" fontSize="6.5" fontFamily="monospace">CONTROLLER</text>
    </g>
  </svg>
);

/**
 * 2. Cross-Domain Intelligence Sharing
 * Visualizes CoT (When, Where, What), video/3D model sharing, and common operational picture.
 */
export const SharedIntelligenceArt = () => (
  <svg viewBox="0 0 320 150" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="si-bg" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.5" />
      </linearGradient>
    </defs>

    <rect width="320" height="150" rx="14" fill="url(#si-bg)" />

    {/* Tactical Radar / Situational Rings */}
    <circle cx="160" cy="78" r="56" stroke="#00ADB5" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="160" cy="78" r="36" stroke="#00ADB5" strokeOpacity="0.3" strokeWidth="1.2" />
    <circle cx="160" cy="78" r="16" fill="#F29462" fillOpacity="0.15" stroke="#F29462" strokeWidth="1.5" />

    {/* Expanding Pulse Wave */}
    <circle cx="160" cy="78" r="16" stroke="#F29462" strokeWidth="1.5">
      <animate attributeName="r" values="16;54" dur="2.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0" dur="2.6s" repeatCount="indefinite" />
    </circle>

    {/* Connecting Intelligence Links */}
    <line x1="68" y1="36" x2="146" y2="70" stroke="#00ADB5" strokeWidth="1.8" strokeDasharray="4 2" />
    <line x1="252" y1="36" x2="174" y2="70" stroke="#00ADB5" strokeWidth="1.8" strokeDasharray="4 2" />
    <line x1="72" y1="118" x2="146" y2="86" stroke="#F29462" strokeWidth="1.8" strokeDasharray="4 2" />
    <line x1="248" y1="118" x2="174" y2="86" stroke="#00ADB5" strokeWidth="1.8" strokeDasharray="4 2" />

    {/* Center CoT Target Reticle */}
    <path d="M160 66V90M148 78H172" stroke="#F29462" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="160" cy="78" r="4" fill="#F29462" />

    {/* Top Pill: CoT WHEN • WHERE • WHAT */}
    <rect x="95" y="10" width="130" height="18" rx="9" fill="#0f172a" stroke="#F29462" strokeWidth="1.2" />
    <text x="160" y="22" textAnchor="middle" fill="#F29462" fontSize="8" fontFamily="monospace" fontWeight="bold">
      CoT: WHEN • WHERE • WHAT
    </text>

    {/* Top-Left Node: Air Sensor Stream */}
    <g transform="translate(16, 22)">
      <rect width="62" height="28" rx="7" fill="#182029" stroke="#00ADB5" strokeWidth="1.4" />
      <text x="31" y="13" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AIR RECON</text>
      <text x="31" y="22" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">VIDEO + POS</text>
    </g>

    {/* Top-Right Node: 3D & Image Payload */}
    <g transform="translate(242, 22)">
      <rect width="62" height="28" rx="7" fill="#182029" stroke="#00ADB5" strokeWidth="1.4" />
      <text x="31" y="13" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">3D &amp; MEDIA</text>
      <text x="31" y="22" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">EMBEDDED</text>
    </g>

    {/* Bottom-Left Node: Ground Fleet */}
    <g transform="translate(16, 104)">
      <rect width="66" height="28" rx="7" fill="#182029" stroke="#F29462" strokeWidth="1.4" />
      <text x="33" y="13" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">GROUND UGV</text>
      <text x="33" y="22" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">TELEMETRY</text>
    </g>

    {/* Bottom-Right Node: AI & Command Viewers */}
    <g transform="translate(238, 104)">
      <rect width="66" height="28" rx="7" fill="#182029" stroke="#00ADB5" strokeWidth="1.4" />
      <text x="33" y="13" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AI &amp; C2 UI</text>
      <text x="33" y="22" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">LIVE FUSION</text>
    </g>
  </svg>
);

/**
 * 3. Seamless Control Handover
 * Visualizes authority-based handover between Human Operator, AI Agent, and Field Commander.
 */
export const ControlHandoverArt = () => (
  <svg viewBox="0 0 320 150" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ch-bg" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F29462" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#00ADB5" stopOpacity="0.12" />
      </linearGradient>
    </defs>

    <rect width="320" height="150" rx="14" fill="url(#ch-bg)" />

    {/* Handover Arc Between Operator and AI Agent */}
    <path
      id="handover-arc"
      d="M68 52 C110 14, 210 14, 252 52"
      stroke="#00ADB5"
      strokeWidth="2.5"
      strokeDasharray="5 3"
    />

    {/* Animated Control Token */}
    <circle r="5" fill="#F29462" stroke="#ffffff" strokeWidth="1.5">
      <animateMotion dur="2.4s" repeatCount="indefinite" path="M68 52 C110 14, 210 14, 252 52" />
    </circle>

    {/* Handover Label Badge */}
    <rect x="108" y="14" width="104" height="20" rx="10" fill="#0f172a" stroke="#00ADB5" strokeWidth="1.4" />
    <text x="160" y="27" textAnchor="middle" fill="#00ADB5" fontSize="8" fontFamily="monospace" fontWeight="bold">
      HANDOVER / PREEMPT
    </text>

    {/* Left Node: Human Operator */}
    <g transform="translate(22, 46)">
      <rect width="76" height="44" rx="10" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="8" fill="#00ADB5" fillOpacity="0.25" stroke="#00ADB5" strokeWidth="1.5" />
      <circle cx="22" cy="19" r="3" fill="#ffffff" />
      <path d="M16 27 C16 24, 28 24, 28 27" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <text x="52" y="20" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">HUMAN</text>
      <text x="52" y="31" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">OPERATOR</text>
    </g>

    {/* Right Node: Autonomous AI Agent */}
    <g transform="translate(222, 46)">
      <rect width="76" height="44" rx="10" fill="#182029" stroke="#F29462" strokeWidth="1.8" />
      <rect x="12" y="12" width="18" height="18" rx="4" fill="#F29462" fillOpacity="0.2" stroke="#F29462" strokeWidth="1.5" />
      <circle cx="21" cy="21" r="3.5" fill="#F29462" />
      <text x="52" y="20" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">AI AGENT</text>
      <text x="52" y="31" textAnchor="middle" fill="#F29462" fontSize="7" fontFamily="monospace">AUTONOMY</text>
    </g>

    {/* Converging Exclusive Control Lines to Asset */}
    <path d="M76 90 L132 116" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="1.8" strokeDasharray="3 3" />
    <path d="M244 90 L188 116" stroke="#F29462" strokeWidth="2.2" />

    {/* Bottom Target Robotic Asset */}
    <g transform="translate(106, 104)">
      <rect width="108" height="34" rx="9" fill="#0f172a" stroke="#00ADB5" strokeWidth="1.8" />
      <circle cx="20" cy="17" r="5" fill="#10b981" />
      <text x="61" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">EXCLUSIVE LOCK</text>
      <text x="61" y="26" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace">CONFLICT-FREE</text>
    </g>
  </svg>
);

/**
 * 4. Plug-and-Play Fleet Expansion
 * Visualizes a new asset dynamically joining an active mesh network with zero IP configuration.
 */
export const PlugAndPlayArt = () => (
  <svg viewBox="0 0 320 150" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pp-bg" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
      </linearGradient>
    </defs>

    <rect width="320" height="150" rx="14" fill="url(#pp-bg)" />

    {/* Existing Active Fleet Mesh Triangle (Left/Center) */}
    <line x1="65" y1="42" x2="145" y2="36" stroke="#00ADB5" strokeWidth="2" />
    <line x1="65" y1="42" x2="105" y2="108" stroke="#00ADB5" strokeWidth="2" />
    <line x1="145" y1="36" x2="105" y2="108" stroke="#00ADB5" strokeWidth="2" />

    {/* Auto-Discovery Dynamic Link to New Asset (Right) */}
    <line x1="145" y1="36" x2="246" y2="75" stroke="#F29462" strokeWidth="2.2" strokeDasharray="5 3" />
    <line x1="105" y1="108" x2="246" y2="75" stroke="#F29462" strokeWidth="2.2" strokeDasharray="5 3" />

    {/* Mesh Node 1 */}
    <g transform="translate(35, 24)">
      <rect width="60" height="34" rx="8" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <text x="30" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">ASSET #01</text>
      <text x="30" y="26" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace">ONLINE</text>
    </g>

    {/* Mesh Node 2 */}
    <g transform="translate(115, 18)">
      <rect width="60" height="34" rx="8" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <text x="30" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">ASSET #02</text>
      <text x="30" y="26" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace">ONLINE</text>
    </g>

    {/* Mesh Node 3 */}
    <g transform="translate(75, 92)">
      <rect width="60" height="34" rx="8" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <text x="30" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">C2 NODE</text>
      <text x="30" y="26" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace">ROUTING</text>
    </g>

    {/* New Asset Joining Dynamically with Broadcast Ripples */}
    <circle cx="252" cy="75" r="24" stroke="#F29462" strokeWidth="1.5">
      <animate attributeName="r" values="22;44" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.9;0" dur="2.2s" repeatCount="indefinite" />
    </circle>

    <g transform="translate(206, 50)">
      <rect width="92" height="50" rx="10" fill="#0f172a" stroke="#F29462" strokeWidth="2" />
      <rect x="10" y="8" width="72" height="14" rx="4" fill="#F29462" fillOpacity="0.2" />
      <text x="46" y="18" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">+ NEW ASSET</text>
      <text x="46" y="33" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">AUTO-ID &amp; ROUTE</text>
      <text x="46" y="43" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">ZERO IP CONFIG</text>
    </g>
  </svg>
);

/**
 * 5. AI-Taskable Multi-Vendor Fleets
 * Visualizes heterogeneous assets exporting live capability & health context into an AI Brain.
 */
export const AiTaskableArt = () => (
  <svg viewBox="0 0 320 150" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ai-bg" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.5" />
      </linearGradient>
    </defs>

    <rect width="320" height="150" rx="14" fill="url(#ai-bg)" />

    {/* Knowledge Graph Lines from Bottom Assets to Top AI Core */}
    <path d="M58 104 L140 50" stroke="#00ADB5" strokeWidth="1.8" strokeDasharray="3 3" />
    <path d="M160 104 L160 54" stroke="#00ADB5" strokeWidth="2.2" />
    <path d="M262 104 L180 50" stroke="#00ADB5" strokeWidth="1.8" strokeDasharray="3 3" />

    {/* Rising Context Pulses */}
    <circle r="3" fill="#00ADB5">
      <animateMotion dur="2s" repeatCount="indefinite" path="M58 104 L140 50" />
    </circle>
    <circle r="3" fill="#F29462">
      <animateMotion dur="1.7s" repeatCount="indefinite" path="M160 54 L160 104" />
    </circle>
    <circle r="3" fill="#00ADB5">
      <animateMotion dur="2.1s" repeatCount="indefinite" path="M262 104 L180 50" />
    </circle>

    {/* Top Center: AI Cognitive & Knowledge Graph Core */}
    <g transform="translate(88, 12)">
      <rect width="144" height="42" rx="11" fill="#0f172a" stroke="#00ADB5" strokeWidth="2" />
      {/* Neural / Graph Nodes */}
      <circle cx="24" cy="21" r="4" fill="#F29462" />
      <circle cx="36" cy="13" r="3" fill="#00ADB5" />
      <circle cx="36" cy="29" r="3" fill="#00ADB5" />
      <line x1="24" y1="21" x2="36" y2="13" stroke="#00ADB5" strokeWidth="1.2" />
      <line x1="24" y1="21" x2="36" y2="29" stroke="#00ADB5" strokeWidth="1.2" />
      <text x="88" y="19" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontFamily="monospace" fontWeight="bold">AI KNOWLEDGE GRAPH</text>
      <text x="88" y="31" textAnchor="middle" fill="#F29462" fontSize="7" fontFamily="monospace">REASON • PLAN • ACT</text>
    </g>

    {/* Bottom Self-Describing Asset Skill Cards */}
    <g transform="translate(18, 98)">
      <rect width="82" height="38" rx="8" fill="#182029" stroke="#00ADB5" strokeOpacity="0.7" strokeWidth="1.4" />
      <text x="41" y="15" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">VENDOR A UAV</text>
      <text x="41" y="27" textAnchor="middle" fill="#cbd5e1" fontSize="6.8" fontFamily="monospace">Skill: Patrol</text>
    </g>

    <g transform="translate(119, 98)">
      <rect width="82" height="38" rx="8" fill="#182029" stroke="#F29462" strokeWidth="1.6" />
      <text x="41" y="15" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">VENDOR B UGV</text>
      <text x="41" y="27" textAnchor="middle" fill="#cbd5e1" fontSize="6.8" fontFamily="monospace">Skill: Carry</text>
    </g>

    <g transform="translate(220, 98)">
      <rect width="82" height="38" rx="8" fill="#182029" stroke="#00ADB5" strokeOpacity="0.7" strokeWidth="1.4" />
      <text x="41" y="15" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">VENDOR C ARM</text>
      <text x="41" y="27" textAnchor="middle" fill="#cbd5e1" fontSize="6.8" fontFamily="monospace">Skill: Grasp</text>
    </g>
  </svg>
);

/**
 * 6. Coordinated Fleet-Wide Safety & Trust
 * Visualizes Zero-Trust tiered clearance + multi-path redundant E-Stop protection.
 */
export const FleetSafetyArt = () => (
  <svg viewBox="0 0 320 150" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fs-bg" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F29462" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#00ADB5" stopOpacity="0.15" />
      </linearGradient>
    </defs>

    <rect width="320" height="150" rx="14" fill="url(#fs-bg)" />

    {/* Dual Redundant Safety Paths (Path A & Path B) */}
    <path d="M84 55 C115 35, 205 35, 236 55" stroke="#00ADB5" strokeWidth="2" />
    <path d="M84 95 C115 115, 205 115, 236 95" stroke="#F29462" strokeWidth="2" strokeDasharray="4 3" />

    <text x="160" y="34" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace" fontWeight="bold">
      PATH A: HEALTH &amp; STATE MONITOR
    </text>
    <text x="160" y="124" textAnchor="middle" fill="#F29462" fontSize="7" fontFamily="monospace" fontWeight="bold">
      PATH B: REDUNDANT E-STOP BUS
    </text>

    {/* Center Shield Emblem */}
    <g transform="translate(132, 43)">
      <path
        d="M28 4 L52 14 V32 C52 47 41 58 28 63 C15 58 4 47 4 32 V14 L28 4Z"
        fill="#0f172a"
        stroke="#00ADB5"
        strokeWidth="2"
      />
      <path
        d="M28 12 L44 19 V31 C44 41 37 49 28 53 C19 49 12 41 12 31 V19 L28 12Z"
        fill="#00ADB5"
        fillOpacity="0.2"
      />
      <path d="M22 32 L26 36 L35 26" stroke="#F29462" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Left: Zero-Trust Clearance Tiers */}
    <g transform="translate(16, 44)">
      <rect width="74" height="62" rx="9" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
      <text x="37" y="15" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ZERO-TRUST</text>
      <rect x="9" y="21" width="56" height="10" rx="3" fill="#ef4444" fillOpacity="0.25" />
      <text x="37" y="28.5" textAnchor="middle" fill="#fca5a5" fontSize="6" fontFamily="monospace">CLASSIFIED</text>
      <rect x="9" y="34" width="56" height="10" rx="3" fill="#f59e0b" fillOpacity="0.25" />
      <text x="37" y="41.5" textAnchor="middle" fill="#fcd34d" fontSize="6" fontFamily="monospace">CONTROLLED</text>
      <rect x="9" y="47" width="56" height="10" rx="3" fill="#10b981" fillOpacity="0.25" />
      <text x="37" y="54.5" textAnchor="middle" fill="#6ee7b7" fontSize="6" fontFamily="monospace">UNCLASSIFIED</text>
    </g>

    {/* Right: Coordinated Safe State */}
    <g transform="translate(230, 44)">
      <rect width="74" height="62" rx="9" fill="#182029" stroke="#F29462" strokeWidth="1.5" />
      <text x="37" y="16" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">FLEET E-STOP</text>
      <circle cx="37" cy="35" r="10" fill="#F29462" fillOpacity="0.2" stroke="#F29462" strokeWidth="1.5" />
      <rect x="33" y="31" width="8" height="8" rx="1.5" fill="#F29462" />
      <text x="37" y="55" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">SAFE STATE</text>
    </g>
  </svg>
);

