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
  diagramType?: "portal-routing" | "split-assessment";
  imageUrl?: string;   // PNG diagram — overrides diagramType when set
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
      "A medical technology organisation had no unified discovery layer across its portfolio of C++, REST, MQTT, and CLI services — documentation was fragmented, team-siloed, and perpetually out of date.",
    approach:
      "Architected a three-tier static portal (business unit → application → service) with a live-link documentation routing strategy: each service resolves to its authoritative tool at source — Swagger, AsyncAPI, Doxygen, or Python-generated CLI docs — eliminating synchronisation entirely.",
    outcome:
      "Single entry point across four documentation standards and multiple business units. Documentation drift eliminated by design. Zero maintenance overhead — hosted on GitHub Pages.",
    tags: ["Developer Portal", "Swagger", "AsyncAPI", "Doxygen", "GitHub Pages", "Python"],
    diagramType: "portal-routing",
  },
  {
    id: "uc-2",
    industry: "Media & Entertainment",
    serviceType: "Enterprise Architecture",
    title: "Strategic Platform Assessment for Streaming Technology Consolidation in a Post-Acquisition Media Merger",
    challenge:
      "A media company acquiring a competitor needed to consolidate two streaming management platforms — but each side had vested interests in their own tool, making objective assessment politically explosive.",
    approach:
      "Applied a Chinese wall methodology — independent evaluation of each platform with no cross-sharing of proprietary details — across five dimensions: technical architecture, security, strategic positioning, agile maturity, and team culture.",
    outcome:
      "Board-ready report accepted as credible by both parties. Homegrown platform's measurable advantages surfaced objectively. Consolidation programme launched with full organisational alignment.",
    tags: ["M&A", "Strategic Assessment", "Platform Evaluation", "Streaming", "Chinese Wall"],
    diagramType: "split-assessment",
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
