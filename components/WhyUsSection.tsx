"use client";

import { ShieldCheck, Globe2, ArrowUpRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface Differentiator {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: <Globe2 size={22} />,
    iconBg: "#3B82F6",
    title: "Vendor-Neutral Expertise",
    description:
      "No platform allegiances, no hidden incentives. We evaluate and recommend based on what genuinely serves your needs — across AWS, Azure, GCP, and all major enterprise platforms.",
  },
  {
    icon: <ShieldCheck size={22} />,
    iconBg: "#8B5CF6",
    title: "Enterprise Track Record",
    description:
      "Battle-tested in complex, multi-year transformation programmes across regulated industries including financial services, healthcare, and the public sector.",
  },
  {
    icon: <ArrowUpRight size={22} />,
    iconBg: "#06B6D4",
    title: "Strategy to Implementation",
    description:
      "We bridge the gap between board-level ambition and hands-on technical reality. Our architects work at every layer — from roadmaps to detailed design to review and governance.",
  },
  {
    icon: <Sparkles size={22} />,
    iconBg: "#F59E0B",
    title: "AI-Forward Thinking",
    description:
      "Every architecture we design is built to evolve with AI. We embed AI-readiness into your foundations today so you are not re-architecting when the next wave of capability arrives.",
  },
];

export default function WhyUsSection() {
  return (
    <section style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Why Architecture Checkpoint</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Built for the{" "}
            <span className="gradient-text">Enterprise Reality</span>
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: 17,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We bring the depth, neutrality, and practical experience that
            enterprise transformation demands.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="card"
              style={{ padding: 32 }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${d.iconBg}18`,
                  border: `1px solid ${d.iconBg}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: d.iconBg,
                  marginBottom: 20,
                }}
              >
                {d.icon}
              </div>
              <h3
                style={{
                  color: "#F8FAFC",
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.75,
                }}
              >
                {d.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          style={{
            marginTop: 64,
            background: "rgba(59,130,246,0.05)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 16,
            padding: "40px 48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#CBD5E1",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontStyle: "italic",
              lineHeight: 1.7,
              maxWidth: 720,
              margin: "0 auto 16px",
            }}
          >
            &ldquo;Architecture is not about the technology. It is about the
            decisions that shape how technology serves your business — and the
            discipline to make those decisions well.&rdquo;
          </p>
          <p style={{ color: "#3B82F6", fontWeight: 600, fontSize: 14 }}>
            — Architecture Checkpoint
          </p>
        </div>
      </div>
    </section>
  );
}
