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
    title: "Self-Updating Developer Documentation Portal Across a Multi-Technology Service Portfolio",
    challenge:
      "Developers across multiple business units had no single place to discover and access up-to-date service documentation. Docs were fragmented across teams and tools — REST APIs, C++ services, MQTT brokers, and CLI tools each lived in different places, making it nearly impossible to find the latest specs without chasing individual teams.",
    approach:
      "Designed a lightweight static portal (index.html) organised by business unit → application → service. Each service deep-links directly to its native documentation tool based on type: Swagger for REST APIs, AsyncAPI for MQTT services, Doxygen for C++ services, and auto-generated pages via custom Python scripts for CLI tools. The entire portal is hosted on GitHub Pages — no server, no deployment pipeline, no maintenance overhead.",
    outcome:
      "Developers across the portfolio now have a single entry point to always-current documentation. Because each service links directly to its generated report, the latest docs are surfaced automatically — no manual updates, no stale content, and zero deployment effort for the team.",
    tags: ["Developer Portal", "Swagger", "AsyncAPI", "Doxygen", "GitHub Pages", "Python"],
  },
  {
    id: "uc-2",
    industry: "Healthcare",
    serviceType: "AI & Modernisation",
    title: "Add your use case title here",
    challenge:
      "Describe the architecture challenge the organisation was facing — the pain, the complexity, the constraints.",
    approach:
      "Explain the architectural approach taken: frameworks used, key decisions made, patterns applied.",
    outcome:
      "Quantify the result — cost savings, speed improvements, risk reduction, capability unlocked.",
    tags: ["Data Platform", "MLOps", "AI Governance"],
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
