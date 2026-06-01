import { Search, Compass, Map, Shield, RefreshCw } from "lucide-react";
import type { ReactNode } from "react";

interface Phase {
  number: string;
  icon: ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

const PHASES: Phase[] = [
  {
    number: "01",
    icon: <Search size={20} />,
    iconColor: "#3B82F6",
    title: "Discover",
    description:
      "Assess your current-state architecture, technology landscape, and strategic constraints. We map capabilities, identify gaps, and understand your transformation intent.",
  },
  {
    number: "02",
    icon: <Compass size={20} />,
    iconColor: "#8B5CF6",
    title: "Design",
    description:
      "Define the target architecture and solution patterns that best serve your goals. We apply proven frameworks while staying pragmatic about what your organisation can absorb.",
  },
  {
    number: "03",
    icon: <Map size={20} />,
    iconColor: "#06B6D4",
    title: "Roadmap",
    description:
      "Sequence transformation initiatives into a realistic, phased roadmap. We balance quick wins with long-term structural change, aligning with your budget and delivery cadence.",
  },
  {
    number: "04",
    icon: <Shield size={20} />,
    iconColor: "#F59E0B",
    title: "Govern",
    description:
      "Establish architecture guardrails, standards, and decision frameworks. We embed governance into your delivery process so architectural integrity is maintained as you scale.",
  },
  {
    number: "05",
    icon: <RefreshCw size={20} />,
    iconColor: "#10B981",
    title: "Evolve",
    description:
      "Architecture is never done. We provide continuous review, checkpoint assessments, and pattern updates to ensure your architecture evolves alongside your business and technology landscape.",
  },
];

export default function MethodologySection() {
  return (
    <section
      id="methodology"
      style={{
        padding: "96px 24px",
        background: "#EFF4FB",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label">Our Methodology</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0F172A",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            The{" "}
            <span className="gradient-text">Checkpoint Framework</span>
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 17,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A five-phase approach that takes you from architecture assessment
            to continuous evolution — structured, repeatable, and built for
            enterprise complexity.
          </p>
        </div>

        {/* Phases */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {PHASES.map((phase, index) => (
            <div
              key={phase.number}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 32,
                alignItems: "flex-start",
              }}
            >
              {/* Left: number + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `${phase.iconColor}18`,
                    border: `1px solid ${phase.iconColor}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: phase.iconColor,
                    flexShrink: 0,
                  }}
                >
                  {phase.icon}
                </div>
                {index < PHASES.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 40,
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.08), transparent)",
                      marginTop: 8,
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingBottom: index < PHASES.length - 1 ? 8 : 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      color: "#CBD5E1",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {phase.number}
                  </span>
                  <h3
                    style={{
                      color: "#0F172A",
                      fontWeight: 700,
                      fontSize: 20,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {phase.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: 15,
                    lineHeight: 1.7,
                    maxWidth: 640,
                  }}
                >
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
