import React from 'react';

/**
 * 1. Introduction to Uli SDK — Ecosystem & Architecture Blueprint
 */
export const IntroDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-intro-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-intro-bg)" />
    <path d="M0 35H320M0 70H320M0 105H320M80 0V140M160 0V140M240 0V140" stroke="#ffffff" strokeOpacity="0.04" />

    {/* Connecting Backbone */}
    <line x1="74" y1="70" x2="246" y2="70" stroke="#00ADB5" strokeWidth="2.5" />
    <line x1="160" y1="36" x2="160" y2="104" stroke="#F29462" strokeWidth="2" strokeDasharray="4 3" />

    <circle r="3.5" fill="#F29462">
      <animateMotion dur="2.2s" repeatCount="indefinite" path="M74 70 L246 70" />
    </circle>

    {/* Left: Physical Assets */}
    <g transform="translate(18, 48)">
      <rect width="68" height="44" rx="8" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
      <text x="34" y="19" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">PHYSICAL</text>
      <text x="34" y="31" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace">ASSETS</text>
    </g>

    {/* Top: Discovery & Knowledge Graph */}
    <g transform="translate(110, 10)">
      <rect width="100" height="28" rx="7" fill="#182029" stroke="#F29462" strokeWidth="1.5" />
      <text x="50" y="17" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">KNOWLEDGE LAYER</text>
    </g>

    {/* Center Hub: Uli SDK Core */}
    <g transform="translate(114, 50)">
      <rect width="92" height="40" rx="10" fill="#0f172a" stroke="#00ADB5" strokeWidth="2" />
      <text x="46" y="19" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">ULI SDK</text>
      <text x="46" y="31" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace">9 PILLARS</text>
    </g>

    {/* Bottom: Security, Safety & Reliability */}
    <g transform="translate(110, 102)">
      <rect width="100" height="28" rx="7" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
      <text x="50" y="17" textAnchor="middle" fill="#cbd5e1" fontSize="7.5" fontFamily="monospace" fontWeight="bold">INFRASTRUCTURE</text>
    </g>

    {/* Right: Agentic AI & A2UI */}
    <g transform="translate(234, 48)">
      <rect width="68" height="44" rx="8" fill="#182029" stroke="#F29462" strokeWidth="1.5" />
      <text x="34" y="19" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">AGENTIC AI</text>
      <text x="34" y="31" textAnchor="middle" fill="#F29462" fontSize="7" fontFamily="monospace">&amp; A2UI</text>
    </g>
  </svg>
);

/**
 * 2. User's Guide & Workflows — Sequence Diagram & Operational Flows
 */
export const UsersGuideDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-ug-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-ug-bg)" />

    {/* Sequence Lifelines */}
    <line x1="64" y1="36" x2="64" y2="128" stroke="#00ADB5" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="160" y1="36" x2="160" y2="128" stroke="#00ADB5" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="256" y1="36" x2="256" y2="128" stroke="#F29462" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Lifeline Headers */}
    <rect x="28" y="12" width="72" height="24" rx="6" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
    <text x="64" y="27" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace" fontWeight="bold">CLIENT</text>

    <rect x="124" y="12" width="72" height="24" rx="6" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
    <text x="160" y="27" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">SUBSYSTEM</text>

    <rect x="220" y="12" width="72" height="24" rx="6" fill="#182029" stroke="#F29462" strokeWidth="1.5" />
    <text x="256" y="27" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AGENT / TOPIC</text>

    {/* Sequence Arrows */}
    <line x1="64" y1="54" x2="156" y2="54" stroke="#00ADB5" strokeWidth="1.8" />
    <polygon points="154,51 160,54 154,57" fill="#00ADB5" />
    <text x="112" y="49" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">1. Request Access / ID</text>

    <line x1="160" y1="76" x2="252" y2="76" stroke="#F29462" strokeWidth="1.8" />
    <polygon points="250,73 256,76 250,79" fill="#F29462" />
    <text x="208" y="71" textAnchor="middle" fill="#F29462" fontSize="6.5" fontFamily="monospace">2. Discover &amp; Bind</text>

    <line x1="256" y1="98" x2="68" y2="98" stroke="#10b981" strokeWidth="1.8" />
    <polygon points="70,95 64,98 70,101" fill="#10b981" />
    <text x="160" y="93" textAnchor="middle" fill="#6ee7b7" fontSize="6.5" fontFamily="monospace">3. Execute &amp; Stream Telemetry</text>

    <circle r="3" fill="#00ADB5">
      <animateMotion dur="2s" repeatCount="indefinite" path="M64 54 L160 54" />
    </circle>
  </svg>
);

/**
 * 3. Security, Safety & Reliability — Zero-Trust, Redundant E-Stop & Lifecycle
 */
export const SsrDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-ssr-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-ssr-bg)" />

    {/* 3 Pillars Connected */}
    <line x1="92" y1="70" x2="228" y2="70" stroke="#00ADB5" strokeWidth="2" strokeDasharray="4 3" />

    {/* Pillar 1: Security */}
    <g transform="translate(18, 28)">
      <rect width="82" height="84" rx="10" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <circle cx="41" cy="26" r="11" fill="#00ADB5" fillOpacity="0.18" stroke="#00ADB5" strokeWidth="1.5" />
      <rect x="36" y="24" width="10" height="8" rx="1.5" fill="#00ADB5" />
      <path d="M38 24V21C38 19.3 44 19.3 44 21V24" stroke="#00ADB5" strokeWidth="1.4" />
      <text x="41" y="52" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">SECURITY</text>
      <text x="41" y="64" textAnchor="middle" fill="#00ADB5" fontSize="6.5" fontFamily="monospace">CERT AUTH</text>
      <text x="41" y="74" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontFamily="monospace">UUID TOKENS</text>
    </g>

    {/* Pillar 2: Safety */}
    <g transform="translate(119, 22)">
      <rect width="82" height="96" rx="10" fill="#0f172a" stroke="#F29462" strokeWidth="2" />
      <circle cx="41" cy="30" r="13" fill="#F29462" fillOpacity="0.2" stroke="#F29462" strokeWidth="1.6" />
      <path d="M41 23V31M41 35H41.02" stroke="#F29462" strokeWidth="2.4" strokeLinecap="round" />
      <text x="41" y="58" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SAFETY</text>
      <text x="41" y="71" textAnchor="middle" fill="#F29462" fontSize="6.5" fontFamily="monospace">REDUNDANT</text>
      <text x="41" y="81" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">MULTI-PATH E-STOP</text>
    </g>

    {/* Pillar 3: Reliability */}
    <g transform="translate(220, 28)">
      <rect width="82" height="84" rx="10" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <circle cx="41" cy="26" r="11" fill="#10b981" fillOpacity="0.18" stroke="#10b981" strokeWidth="1.5" />
      <path d="M33 26H37L39 20L43 32L45 26H49" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="41" y="52" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">RELIABILITY</text>
      <text x="41" y="64" textAnchor="middle" fill="#10b981" fontSize="6.5" fontFamily="monospace">2-TIER STATE</text>
      <text x="41" y="74" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontFamily="monospace">LIFECYCLE</text>
    </g>
  </svg>
);

/**
 * 4. Core Services Reference — Formal State Machine & 26 Core Services
 */
export const CoreServicesDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-cs-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-cs-bg)" />

    {/* State Transition Curves */}
    <path d="M88 64 C112 36, 136 36, 156 64" stroke="#00ADB5" strokeWidth="1.8" />
    <path d="M192 64 C216 36, 236 36, 256 64" stroke="#F29462" strokeWidth="1.8" />
    <path d="M256 82 C210 118, 130 118, 88 82" stroke="#00ADB5" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4 3" />

    <circle r="3.5" fill="#F29462">
      <animateMotion dur="2.4s" repeatCount="indefinite" path="M88 64 C112 36, 136 36, 156 64" />
    </circle>

    {/* State 1: CONNECT */}
    <g transform="translate(22, 52)">
      <rect width="72" height="36" rx="18" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <text x="36" y="21" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="bold">CONNECT</text>
    </g>

    {/* State 2: STAND_BY */}
    <g transform="translate(124, 52)">
      <rect width="72" height="36" rx="18" fill="#182029" stroke="#00ADB5" strokeWidth="1.8" />
      <text x="36" y="21" textAnchor="middle" fill="#00ADB5" fontSize="8" fontFamily="monospace" fontWeight="bold">STAND_BY</text>
    </g>

    {/* State 3: READY */}
    <g transform="translate(226, 52)">
      <rect width="72" height="36" rx="18" fill="#0f172a" stroke="#F29462" strokeWidth="2" />
      <text x="36" y="21" textAnchor="middle" fill="#F29462" fontSize="8.5" fontFamily="monospace" fontWeight="bold">READY</text>
    </g>

    {/* Top Badge */}
    <rect x="96" y="12" width="128" height="20" rx="10" fill="#0f172a" stroke="#00ADB5" strokeOpacity="0.5" strokeWidth="1.2" />
    <text x="160" y="25" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
      26 CORE STATE MACHINES
    </text>

    {/* Bottom Label */}
    <text x="160" y="126" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">
      STATES • ACTIONS • EVENTS • TRANSITIONS
    </text>
  </svg>
);

/**
 * 5. Core Messages Reference — Cap'n Proto Zero-Copy Protocol Frames
 */
export const CoreMessagesDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-cm-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-cm-bg)" />

    {/* Packet Frame 1 */}
    <g transform="translate(24, 22)">
      <rect width="272" height="28" rx="6" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
      <rect x="4" y="4" width="84" height="20" rx="4" fill="#00ADB5" fillOpacity="0.2" />
      <text x="46" y="17" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">H:0x01 L:0x101</text>
      <text x="148" y="17" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">Query Link</text>
      <text x="238" y="17" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">UNICAST</text>
    </g>

    {/* Packet Frame 2 */}
    <g transform="translate(24, 56)">
      <rect width="272" height="28" rx="6" fill="#0f172a" stroke="#F29462" strokeWidth="1.6" />
      <rect x="4" y="4" width="84" height="20" rx="4" fill="#F29462" fillOpacity="0.2" />
      <text x="46" y="17" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">H:0x01 L:0x108</text>
      <text x="152" y="17" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">Subsystem Ready</text>
      <text x="238" y="17" textAnchor="middle" fill="#F29462" fontSize="7" fontFamily="monospace">MULTICAST</text>
    </g>

    {/* Packet Frame 3 */}
    <g transform="translate(24, 90)">
      <rect width="272" height="28" rx="6" fill="#182029" stroke="#00ADB5" strokeWidth="1.5" />
      <rect x="4" y="4" width="84" height="20" rx="4" fill="#00ADB5" fillOpacity="0.2" />
      <text x="46" y="17" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">H:0x01 L:0x114</text>
      <text x="152" y="17" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">Query Comp Health</text>
      <text x="238" y="17" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">CAP&apos;N PROTO</text>
    </g>
  </svg>
);

/**
 * 6. Core Client Services Reference — 18 Client-Side Discovery, Control & Data Store Services
 */
export const ClientServicesDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-ccs-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-ccs-bg)" />

    {/* Connecting Lines from Dashboard/DataStore Hub to Client Services */}
    <line x1="114" y1="45" x2="196" y2="30" stroke="#00ADB5" strokeWidth="1.6" />
    <line x1="114" y1="70" x2="196" y2="70" stroke="#F29462" strokeWidth="1.8" />
    <line x1="114" y1="95" x2="196" y2="110" stroke="#00ADB5" strokeWidth="1.6" />

    {/* Left: Client Dashboard & Data Store */}
    <g transform="translate(20, 36)">
      <rect width="96" height="68" rx="10" fill="#0f172a" stroke="#00ADB5" strokeWidth="2" />
      <text x="48" y="24" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontFamily="monospace" fontWeight="bold">DASHBOARD &amp;</text>
      <text x="48" y="36" textAnchor="middle" fill="#00ADB5" fontSize="8.5" fontFamily="monospace" fontWeight="bold">DATA STORE</text>
      <rect x="14" y="45" width="68" height="14" rx="4" fill="#00ADB5" fillOpacity="0.15" />
      <text x="48" y="55" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">18 CLIENT SERVICES</text>
    </g>

    {/* Right Stack: Discovery Client, Control Client, Topic Client */}
    <g transform="translate(196, 14)">
      <rect width="104" height="30" rx="7" fill="#182029" stroke="#00ADB5" strokeWidth="1.4" />
      <text x="52" y="19" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DISCOVERY CLIENT</text>
    </g>

    <g transform="translate(196, 55)">
      <rect width="104" height="30" rx="7" fill="#182029" stroke="#F29462" strokeWidth="1.6" />
      <text x="52" y="19" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AGENT &amp; CONTROL</text>
    </g>

    <g transform="translate(196, 96)">
      <rect width="104" height="30" rx="7" fill="#182029" stroke="#00ADB5" strokeWidth="1.4" />
      <text x="52" y="19" textAnchor="middle" fill="#cbd5e1" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DATA TOPIC CLIENT</text>
    </g>
  </svg>
);

/**
 * 7. Core Client Messages Reference — Client Access, Control, State & Topic Queries/Reports
 */
export const ClientMessagesDocArt = () => (
  <svg viewBox="0 0 320 140" className="w-full h-36 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-ccm-bg" x1="0" y1="0" x2="320" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#00ADB5" stopOpacity="0.14" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="12" fill="url(#doc-ccm-bg)" />

    {/* Query / Report Exchange Arrows */}
    <path d="M110 52 L210 52" stroke="#00ADB5" strokeWidth="2" />
    <polygon points="206,48 214,52 206,56" fill="#00ADB5" />
    <text x="160" y="44" textAnchor="middle" fill="#00ADB5" fontSize="7" fontFamily="monospace" fontWeight="bold">
      QUERY ACCESS / CONTROL / STATE
    </text>

    <path d="M210 92 L110 92" stroke="#F29462" strokeWidth="2" />
    <polygon points="114,88 106,92 114,96" fill="#F29462" />
    <text x="160" y="84" textAnchor="middle" fill="#F29462" fontSize="7" fontFamily="monospace" fontWeight="bold">
      REPORT ACCESS / CONTROL / STATE
    </text>

    {/* Left: Client App */}
    <g transform="translate(18, 42)">
      <rect width="86" height="60" rx="9" fill="#182029" stroke="#00ADB5" strokeWidth="1.6" />
      <text x="43" y="25" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">CLIENT</text>
      <text x="43" y="37" textAnchor="middle" fill="#00ADB5" fontSize="7.5" fontFamily="monospace">COMPONENT</text>
      <text x="43" y="50" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontFamily="monospace">0x601 – 0x607</text>
    </g>

    {/* Right: Data Store Service */}
    <g transform="translate(216, 42)">
      <rect width="86" height="60" rx="9" fill="#0f172a" stroke="#F29462" strokeWidth="1.8" />
      <text x="43" y="25" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">DATA STORE</text>
      <text x="43" y="37" textAnchor="middle" fill="#F29462" fontSize="7.5" fontFamily="monospace">SERVICE</text>
      <text x="43" y="50" textAnchor="middle" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace">RECORDS</text>
    </g>
  </svg>
);

