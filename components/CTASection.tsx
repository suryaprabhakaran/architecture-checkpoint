import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section
      style={{
        padding: "96px 24px",
        background:
          "linear-gradient(135deg, #0C1525 0%, #0A1428 50%, #070D1A 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glows */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "100%",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            color: "#60A5FA",
            padding: "6px 16px",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            marginBottom: 28,
          }}
        >
          <Calendar size={12} />
          Free Consultation
        </div>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#F8FAFC",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Ready to Architect
          <br />
          <span className="gradient-text">Your Transformation?</span>
        </h2>

        <p
          style={{
            color: "#64748B",
            fontSize: 18,
            lineHeight: 1.7,
            marginBottom: 48,
            maxWidth: 520,
            margin: "0 auto 48px",
          }}
        >
          Start with a no-obligation architecture checkpoint. We will assess
          your current state and give you a clear view of where you are, where
          you need to be, and how to get there.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Book a Free Checkpoint
            <ArrowRight size={16} />
          </Link>
          <Link href="/services" className="btn-outline">
            Explore Services
          </Link>
        </div>

        {/* Social proof */}
        <div
          style={{
            marginTop: 56,
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            "No obligation",
            "Vendor-neutral advice",
            "Rapid turnaround",
          ].map((point) => (
            <div
              key={point}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#475569",
                fontSize: 13,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#3B82F6",
                  flexShrink: 0,
                }}
              />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
