// ─────────────────────────────────────────────────────────────────────────────
// USE CASES DATA FILE
// ─────────────────────────────────────────────────────────────────────────────
// To add a new use case, copy one of the blocks below and fill in the fields.
//
// TEMPLATE:
// {
//   id:          "uc-N",            ← increment the number each time
//   industry:    "Financial Services",
//   serviceType: "Enterprise Architecture",  ← one of the four service types
//   title:       "Short title describing what you did",
//   challenge:   "What was the organisation facing? Pain, complexity, constraint.",
//   approach:    "What architectural approach did you take? Key decisions, patterns, frameworks.",
//   outcome:     "What was the measurable result? Cost savings, speed, risk reduction.",
//   tags:        ["AWS", "TOGAF", "Microservices"],  ← 2-4 relevant tags
// },
//
// VALID INDUSTRIES:   Financial Services · Insurance · Healthcare · Public Sector
//                     Retail & Commerce · Manufacturing · Technology · Energy & Utilities
//
// VALID serviceType:  "Enterprise Architecture" · "Solution Architecture"
//                     "Cloud Architecture"      · "AI & Modernisation"
// ─────────────────────────────────────────────────────────────────────────────

export interface UseCase {
  id: string;
  industry: string;
  serviceType: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
}

// Industry → colour mapping (add new industries here if needed)
export const INDUSTRY_COLORS: Record<string, string> = {
  "Financial Services": "#3B82F6",
  "Insurance":          "#6366F1",
  "Healthcare":         "#10B981",
  "Public Sector":      "#8B5CF6",
  "Retail & Commerce":  "#F59E0B",
  "Manufacturing":      "#F97316",
  "Technology":         "#06B6D4",
  "Medical":            "#10B981",
  "Media & Entertainment": "#EC4899",
  "Energy & Utilities": "#84CC16",
};

// Service type → colour mapping
export const SERVICE_COLORS: Record<string, string> = {
  "Enterprise Architecture": "#3B82F6",
  "Solution Architecture":   "#8B5CF6",
  "Cloud Architecture":      "#06B6D4",
  "AI & Modernisation":      "#F59E0B",
};

// ─── ADD YOUR USE CASES BELOW ────────────────────────────────────────────────

export const USE_CASES: UseCase[] = [
  {
    id: "uc-1",
    industry: "Medical",
    serviceType: "Solution Architecture",
    title: "Unified Developer Documentation Portal with Polyglot Documentation Routing Across a Multi-Business-Unit Medical Technology Portfolio",
    challenge:
      "A medical technology organisation operating across multiple autonomous business units faced a critical documentation fragmentation problem. Each business unit owned a heterogeneous mix of services — C++ embedded systems, REST microservices, MQTT-based event-driven components, and bespoke CLI tooling — each governed by different documentation standards and toolchains. There was no unified discovery layer, no taxonomy spanning organisational boundaries, and no mechanism to guarantee documentation currency. Developers spent significant time chasing teams for the latest specs, creating audit risk and slowing cross-team integration work.",
    approach:
      "Designed a documentation architecture built on a three-tier hierarchy — business unit → application → service — surfaced through a zero-dependency static portal. The core architectural decision was a documentation routing strategy: rather than centralising or copying documentation, each service entry resolves to its authoritative source in real time based on service type. REST APIs route to Swagger UI, event-driven MQTT services to AsyncAPI specifications, C++ components to Doxygen-generated references, and CLI tools to structured pages produced by purpose-built Python introspection scripts. This live-link model eliminates the synchronisation problem entirely. The portal itself is hosted on GitHub Pages, removing all infrastructure and operational overhead from the documentation lifecycle.",
    outcome:
      "Delivered a single, always-current entry point across the entire service portfolio — spanning multiple business units, four documentation standards, and several technology stacks. Documentation drift was eliminated by design: because every link resolves to a generated report at source, the portal requires no manual maintenance. The architecture reduced developer time-to-documentation from hours to seconds, improved cross-team discoverability, and provided a compliant, auditable view of all services for governance and integration teams.",
    tags: ["Developer Portal", "Swagger", "AsyncAPI", "Doxygen", "GitHub Pages", "Python", "Documentation Architecture"],
  },
  {
    id: "uc-2",
    industry: "Media & Entertainment",
    serviceType: "Enterprise Architecture",
    title: "Strategic Platform Assessment for Streaming Technology Consolidation in a Post-Acquisition Media Merger",
    challenge:
      "Following a strategic acquisition, a media company faced a high-stakes technology consolidation decision: standardise on their established homegrown streaming management platform, or migrate to the incumbent tool used by the acquired organisation. Both platforms carried significant commercial investment, institutional knowledge, and deeply embedded team culture. With each side advocating for their own tool and conflicting interests at the executive level, the organisation needed a rigorous, politically neutral assessment — one that could withstand scrutiny from both parties and provide a defensible basis for a board-level decision.",
    approach:
      "Designed and executed a structured strategic assessment using a strict Chinese wall methodology — each platform was evaluated in complete isolation, with no proprietary operational details shared between the two organisations during the process. A multi-dimensional assessment framework was applied consistently across both tools, covering: technical architecture and streaming scalability, development experience and toolchain maturity, security posture and compliance readiness, strategic market positioning and long-term vendor trajectory, agile delivery capability, and organisational and team culture fit. Each dimension was scored against a common rubric, with evidence gathered independently from each side before being consolidated into a unified comparative report.",
    outcome:
      "Delivered a board-ready strategic assessment report providing clear, evidence-based recommendations for post-acquisition platform consolidation. The structured framework gave leadership a defensible, conflict-free basis for the technology decision — grounded in objective analysis rather than organisational politics. The assessment surfaced the homegrown platform's measurable strengths in streaming-specific optimisation, institutional depth, and strategic flexibility, while transparently quantifying the trade-offs of each path. Both parties accepted the findings as credible, enabling the consolidation programme to move forward with organisational alignment.",
    tags: ["M&A", "Strategic Assessment", "Platform Evaluation", "Streaming Technology", "Chinese Wall", "Technology Consolidation"],
  },
  {
    id: "uc-3",
    industry: "Retail & Commerce",
    serviceType: "Cloud Architecture",
    title: "Add your use case title here",
    challenge:
      "Describe the architecture challenge the organisation was facing — the pain, the complexity, the constraints.",
    approach:
      "Explain the architectural approach taken: frameworks used, key decisions made, patterns applied.",
    outcome:
      "Quantify the result — cost savings, speed improvements, risk reduction, capability unlocked.",
    tags: ["AWS", "Cloud Migration", "FinOps"],
  },
  {
    id: "uc-4",
    industry: "Public Sector",
    serviceType: "Solution Architecture",
    title: "Add your use case title here",
    challenge:
      "Describe the architecture challenge the organisation was facing — the pain, the complexity, the constraints.",
    approach:
      "Explain the architectural approach taken: frameworks used, key decisions made, patterns applied.",
    outcome:
      "Quantify the result — cost savings, speed improvements, risk reduction, capability unlocked.",
    tags: ["Microservices", "API Design", "Integration"],
  },
];
