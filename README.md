# Uli SDK Landing Page (`ulisdk-landing`)

Official web portal and interactive technical documentation hub for **Uli (Unified Link Interface) SDK** by **Open Vision Technology, LLC**.

**Uli SDK** is a modular, runtime-adaptive software library suite that connects physical robotic assets (drones, autonomous ground vehicles, robot arms, process tools), operator control units, data viewers, and modern Agentic AI ecosystems. By providing production-ready libraries for **self-configuring infrastructure**, **unified discovery**, **access governance**, **redundant safety**, and **lifecycle reliability**, Uli SDK eliminates complex middleware plumbing so engineering teams can focus on core robotics and AI logic.

---

## 💻 Running the Landing Page (Terminal Commands)

### Prerequisites
- **Node.js** (v18+ recommended) and **npm**

### 1. Navigate to the Project Directory
```bash
cd /home/ovt/develop/node_dev/ulisdk-landing
```

### 2. Install Dependencies (First-Time Setup)
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Then open your browser (e.g. Chrome) and navigate to:
- **Local URL:** `http://localhost:5173/`

*(Optional)* To expose the dev server on your local network:
```bash
npm run dev -- --host
```

### 4. Lint & Build for Production
```bash
# Run ESLint checks
npm run lint

# Build production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌟 Landing Page Structure & Key Highlights

1. **Hero — Operational & Fleet Benefits (`src/App.jsx`, `src/HeroVectorArt.jsx`)**
   - Highlights the real-world operational advantages of connecting Uli SDK-powered assets on a dynamic infrastructure, accompanied by custom animated SVG vector art:
     - **One Controller, Any Asset:** Operate drones, ground vehicles, robot arms, or process tools from a single universal controller.
     - **Cross-Domain Intelligence Sharing:** Share live telemetry, video/audio streams, and Cursor-on-Target (`When, Where, What`) events with embedded images and 3D models.
     - **Seamless Human ↔ AI Handover:** Transfer exclusive control between field operators, remote stations, and autonomous AI agents with authority-based preemption.
     - **Plug-and-Play Fleet Expansion:** Power on new assets to join active missions at runtime with zero static IP configuration.
     - **AI-Taskable Multi-Vendor Fleets:** Self-describing capabilities, readiness, and health status ground AI reasoning and mission execution.
     - **Coordinated Fleet-Wide Safety & Trust:** Tiered data clearance (`Classified`, `Controlled`, `Unclassified`) and redundant multi-path emergency (`E-Stop`) protection.

2. **Why Uli SDK & Nine Foundational Capabilities (`src/BenefitsSection.jsx`)**
   - Summarizes the four executive/engineering pillars (*Faster Time-to-Market*, *Lower Project & Field Risk*, *Turnkey Physical AI*, *Zero Vendor Lock-In / DoD MOSA*) and the nine architectural capabilities of Uli SDK.

3. **Architecture, Workflows & Supported Platforms (`src/ArchitectureSection.jsx`)**
   - Interactive diagram viewer for:
     - **System Architecture** (`public/introduction/Architecture.svg`)
     - **3-Tier Infrastructure** (`public/introduction/Infrastructure.svg`)
     - **Service Building Blocks** (`public/introduction/Services.svg`)
     - **Exclusive Agent Control Workflow** (`public/introduction/AgentWorkFlow.svg`)
     - **Shared Data Topic Workflow** (`public/introduction/DataTopicWorkFlow.svg`)
   - Developer tooling overview (C++/Python/Dart-FFI code generation, Bazel cross-compilation, Google Antigravity IDE & Claude CLI support) and supported hardware matrix (**JetPack 7.2**, **JetPack 6.2**, and **Ubuntu 22.04 – 24.04** across NVIDIA Jetson Orin/AGX/DGX and `x86_64`).

4. **Technical Documentation & Specifications Hub (`src/DocsSection.jsx`, `src/DocsVectorArt.jsx`)**
   - Interactive card grid with custom vector art and a full-screen Markdown reader for all **7 technical documents** in `public/`:
     - **Introduction to Uli SDK** (`public/introduction.md`)
     - **User's Guide & Workflows** (`public/users_guide.md`)
     - **Security, Safety & Reliability** (`public/security_safety_reliability.md`)
     - **Core Services Reference** (`public/core_services.md`)
     - **Core Messages Reference** (`public/core_messages.md`)
     - **Core Client Services Reference** (`public/core_clients_services.md`)
     - **Core Client Messages Reference** (`public/core_clients_messages.md`)

5. **Partner & SDK Source Access Request (`src/ContactSection.jsx`)**
   - Integrated contact and vetted GitHub SDK access application form.

---

## 🏛 Federal, Defense & Commercial Inquiries

**Open Vision Technology, LLC**
- **Address:** 8 Thompson Pond Road, Stoneham, MA 02180, U.S.A.
- **Tel:** 339-293-2151
- **CAGE Code:** `18NH2` | **UEI:** `U6GJVDKFSYG1`
- **Compliance:** DoD MOSA (Modular Open Systems Approach)
- **Contact:** `genshianglin@gmail.com` | `gen@openvisiontech.com`
