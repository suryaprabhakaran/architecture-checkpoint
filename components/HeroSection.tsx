import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const BADGES = [
  { icon: <Shield size={12} />, label: "TOGAF Aligned" },
  { icon: <Zap size={12} />, label: "Cloud Native" },
  { icon: <Sparkles size={12} />, label: "AI-Ready" },
];

export default function HeroSection() {
  return (
    <section
      className="grid-bg"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 160,
        paddingBottom: 120,
      }}
    >
      {/* Blue radial glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Gold accent glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Label badge */}
        <div style={{ marginBottom: 28 }}>
          <span className="section-label">
            <Sparkles size={12} />
            Enterprise Architecture Excellence
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#F8FAFC",
            marginBottom: 8,
          }}
        >
          Engineering the Architecture
        </h1>
        <h1
          className="gradient-text"
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 32,
            display: "block",
          }}
        >
          of Tomorrow&apos;s Enterprise
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#94A3B8",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.7,
            maxWidth: 680,
            margin: "0 auto 48px",
          }}
        >
          We partner with organisations navigating complex transformation
          journeys — designing enterprise architectures, cloud strategies, and
          AI-ready blueprints that scale with your ambition.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <Link href="/contact" className="btn-primary">
            Start Your Checkpoint
            <ArrowRight size={16} />
          </Link>
          <Link href="/services" className="btn-outline">
            Explore Services
          </Link>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                padding: "8px 16px",
                borderRadius: 100,
                color: "#64748B",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <span style={{ color: "#3B82F6" }}>{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
