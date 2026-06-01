import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — Architecture Checkpoint",
  description:
    "Architecture Checkpoint is a specialist architecture consulting practice focused on enterprise transformation, cloud modernisation, and AI adoption.",
};

const VALUES = [
  {
    icon: <Target size={20} />,
    color: "#3B82F6",
    title: "Outcome-Driven",
    description:
      "We measure our success by the business outcomes our architectures enable, not the documents we produce. Every recommendation ties back to a measurable impact.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    color: "#8B5CF6",
    title: "Architectural Integrity",
    description:
      "We hold the line on quality. That means making the hard calls, documenting the decisions, and ensuring governance mechanisms that stand up over time.",
  },
  {
    icon: <Users size={20} />,
    color: "#06B6D4",
    title: "Collaborative by Design",
    description:
      "Architecture done in isolation fails. We embed with your teams, transfer knowledge, and build internal capability alongside delivering the architecture.",
  },
  {
    icon: <Award size={20} />,
    color: "#F59E0B",
    title: "Pragmatic Excellence",
    description:
      "We pursue architectural excellence that is achievable — not perfection on paper. We understand the constraints of real transformation programmes.",
  },
];

const INDUSTRIES = [
  "Financial Services",
  "Insurance",
  "Healthcare",
  "Public Sector",
  "Retail & Commerce",
  "Manufacturing",
  "Technology",
  "Energy & Utilities",
];

const CAPABILITIES = [
  { label: "TOGAF", level: 95 },
  { label: "AWS Architecture", level: 90 },
  { label: "Microsoft Azure", level: 88 },
  { label: "Google Cloud Platform", level: 82 },
  { label: "Microservices & APIs", level: 92 },
  { label: "AI & MLOps", level: 85 },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
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
              "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
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
          <span className="section-label">About Us</span>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0F172A",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Specialists in{" "}
            <span className="gradient-text">Architecture-Led Transformation</span>
          </h1>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            Architecture Checkpoint is a specialist consulting practice helping
            enterprises design, govern, and evolve the architectures that power
            their most ambitious transformation programmes.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section
        style={{
          padding: "80px 24px",
          background: "#EFF4FB",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-label">Our Mission</span>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0F172A",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Making Architecture a Competitive Advantage
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Too many organisations treat architecture as an afterthought — a
              diagram produced after the fact, or a governance team that says
              no. We believe architecture, done right, is a strategic enabler.
            </p>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              Architecture Checkpoint was founded to bring that mindset to
              every transformation programme we touch — coupling deep technical
              expertise with business pragmatism to produce architectures that
              actually get built and actually work.
            </p>
            <Link href="/contact" className="btn-primary">
              Work with us <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                value: "50+",
                label: "Transformation programmes",
                color: "#3B82F6",
              },
              {
                value: "15+",
                label: "Years combined expertise",
                color: "#8B5CF6",
              },
              {
                value: "100%",
                label: "Vendor-neutral approach",
                color: "#F59E0B",
              },
            ].map((stat) => (
              <div
                key={stat.value}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 14,
                  padding: "20px 24px",
                }}
              >
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: stat.color,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.4 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Our Values</span>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0F172A",
                lineHeight: 1.2,
              }}
            >
              How We Approach Our Work
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {VALUES.map((v) => (
              <div key={v.title} className="card" style={{ padding: 28 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: `${v.color}18`,
                    border: `1px solid ${v.color}28`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: v.color,
                    marginBottom: 18,
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: 17,
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.7 }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        style={{
          padding: "80px 24px",
          background: "#EFF4FB",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="section-label">Industries</span>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Trusted Across Complex Sectors
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 16,
              marginBottom: 48,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            We have delivered architecture programmes across some of the most
            regulated and complex industries in the world.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                style={{
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  color: "#94A3B8",
                  padding: "10px 20px",
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise depth */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="section-label">Expertise</span>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Deep Technical Competence
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 16,
              marginBottom: 48,
            }}
          >
            Our architects bring hands-on depth across the platforms and
            disciplines that matter most to enterprise transformation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{ color: "#94A3B8", fontSize: 14, fontWeight: 500 }}
                  >
                    {cap.label}
                  </span>
                  <span style={{ color: "#94A3B8", fontSize: 13 }}>
                    {cap.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    borderRadius: 100,
                    background: "rgba(0,0,0,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${cap.level}%`,
                      borderRadius: 100,
                      background:
                        "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
