import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Layers, Cloud, Brain } from "lucide-react";
import type { ReactNode } from "react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Use Cases — Architecture Checkpoint",
  description:
    "Real-world architecture challenges we have solved — from enterprise modernisation to AI adoption and cloud transformation.",
};

interface UseCase {
  id: string;
  industry: string;
  industryColor: string;
  serviceType: string;
  serviceIcon: ReactNode;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
}

const USE_CASES: UseCase[] = [
  {
    id: "uc-1",
    industry: "Financial Services",
    industryColor: "#3B82F6",
    serviceType: "Enterprise Architecture",
    serviceIcon: <Building2 size={16} />,
    title: "Add your use case title here",
    challenge:
      "Describe the architecture challenge the organisation was facing — the pain, the complexity, the constraints.",
    approach:
      "Explain the architectural approach taken: frameworks used, key decisions made, patterns applied.",
    outcome:
      "Quantify the result — cost savings, speed improvements, risk reduction, capability unlocked.",
    tags: ["TOGAF", "EA Governance", "Roadmap"],
  },
  {
    id: "uc-2",
    industry: "Healthcare",
    industryColor: "#10B981",
    serviceType: "AI & Modernisation",
    serviceIcon: <Brain size={16} />,
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
    industryColor: "#F59E0B",
    serviceType: "Cloud Architecture",
    serviceIcon: <Cloud size={16} />,
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
    industryColor: "#8B5CF6",
    serviceType: "Solution Architecture",
    serviceIcon: <Layers size={16} />,
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

export default function UseCasesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="grid-bg"
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "80%",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <span className="section-label">Use Cases</span>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Real Architecture,{" "}
            <span className="gradient-text">Real Results</span>
          </h1>
          <p
            style={{
              color: "#64748B",
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            A collection of architecture challenges we have helped organisations
            solve — from enterprise modernisation and cloud transformation to
            AI adoption and governance.
          </p>
        </div>
      </section>

      {/* Use cases grid */}
      <section
        style={{
          padding: "80px 24px 96px",
          background: "#0C1525",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))",
              gap: 28,
            }}
          >
            {USE_CASES.map((uc) => (
              <div
                key={uc.id}
                className="card"
                style={{ padding: 36, display: "flex", flexDirection: "column", gap: 20 }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {/* Industry badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: `${uc.industryColor}15`,
                      border: `1px solid ${uc.industryColor}30`,
                      color: uc.industryColor,
                      padding: "5px 12px",
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {uc.industry}
                  </span>

                  {/* Service type */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#475569",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {uc.serviceIcon}
                    {uc.serviceType}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#F8FAFC",
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {uc.title}
                </h3>

                {/* Three sections */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Challenge", color: "#EF4444", text: uc.challenge },
                    { label: "Approach", color: "#3B82F6", text: uc.approach },
                    { label: "Outcome", color: "#10B981", text: uc.outcome },
                  ].map((section) => (
                    <div key={section.label}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: section.color,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: section.color,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase" as const,
                          }}
                        >
                          {section.label}
                        </span>
                      </div>
                      <p
                        style={{
                          color: "#64748B",
                          fontSize: 14,
                          lineHeight: 1.7,
                          paddingLeft: 16,
                        }}
                      >
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#475569",
                        padding: "4px 10px",
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Add more placeholder */}
            <div
              style={{
                border: "2px dashed rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                minHeight: 300,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3B82F6",
                  fontSize: 24,
                  fontWeight: 300,
                }}
              >
                +
              </div>
              <div>
                <p
                  style={{
                    color: "#475569",
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  More use cases coming soon
                </p>
                <p style={{ color: "#334155", fontSize: 13 }}>
                  Each engagement adds to our growing library of patterns
                </p>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div
            style={{
              marginTop: 56,
              background: "rgba(59,130,246,0.04)",
              border: "1px solid rgba(59,130,246,0.1)",
              borderRadius: 14,
              padding: "24px 32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  color: "#CBD5E1",
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                Working on a similar challenge?
              </p>
              <p style={{ color: "#475569", fontSize: 14 }}>
                Every use case above started with a 30-minute discovery call.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#3B82F6",
                color: "white",
                padding: "11px 22px",
                borderRadius: 9,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Book a Free Checkpoint <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
