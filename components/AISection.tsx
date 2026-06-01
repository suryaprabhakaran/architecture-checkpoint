import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const CAPABILITIES = [
  "AI Readiness & Maturity Assessment",
  "Data Platform & LakeHouse Architecture",
  "MLOps Pipeline Design",
  "LLM & Generative AI Integration",
  "Responsible AI Governance Frameworks",
  "AI-Native Architecture Patterns",
];

export default function AISection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "96px 24px",
        background:
          "linear-gradient(135deg, #EFF4FB 0%, #F8FAFC 50%, #EFF4FB 100%)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(217,119,6,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 64,
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left: text */}
        <div>
          <span className="section-label">
            <Sparkles size={12} />
            AI & Modernisation
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#0F172A",
              marginBottom: 20,
            }}
          >
            Architecture for{" "}
            <span className="gradient-text">the Age of AI</span>
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            AI is not just a feature — it is a new architectural paradigm. We
            help enterprises design the data foundations, platform layers, and
            governance structures that make AI adoption safe, scalable, and
            business-aligned.
          </p>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Whether you are starting your AI journey or scaling a mature
            programme, our architects bring the patterns, guardrails, and
            experience to get it right.
          </p>

          <Link href="/contact" className="btn-primary">
            Assess Your AI Readiness
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right: capabilities card */}
        <div
          style={{
            background: "rgba(17,29,51,0.8)",
            border: "1px solid rgba(245,158,11,0.15)",
            borderRadius: 20,
            padding: 36,
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(245,158,11,0.3)",
              }}
            >
              <Sparkles size={20} color="white" />
            </div>
            <div>
              <div
                style={{ color: "#0F172A", fontWeight: 700, fontSize: 16 }}
              >
                AI Architecture Capabilities
              </div>
              <div style={{ color: "#94A3B8", fontSize: 13 }}>
                End-to-end AI adoption support
              </div>
            </div>
          </div>

          <ul style={{ listStyle: "none" }}>
            {CAPABILITIES.map((cap) => (
              <li
                key={cap}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  paddingBottom: 16,
                  marginBottom: 16,
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <CheckCircle2
                  size={16}
                  color="#F59E0B"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.5 }}>
                  {cap}
                </span>
              </li>
            ))}
          </ul>

          {/* Bottom stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginTop: 8,
              paddingTop: 8,
            }}
          >
            {[
              { value: "30+", label: "AI Assessments" },
              { value: "100%", label: "Governance-First" },
            ].map((s) => (
              <div
                key={s.value}
                style={{
                  background: "rgba(217,119,6,0.06)",
                  border: "1px solid rgba(245,158,11,0.12)",
                  borderRadius: 10,
                  padding: "14px 16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#F59E0B",
                    fontWeight: 800,
                    fontSize: 24,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: "#94A3B8", fontSize: 12, marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
