import type { Metadata } from "next";
import ServicesTabs from "@/components/ServicesTabs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services — Architecture Checkpoint",
  description:
    "Enterprise architecture, solution architecture, cloud architecture, and AI modernisation services for complex transformation programmes.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section
        className="grid-bg"
        style={{
          paddingTop: 140,
          paddingBottom: 64,
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
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <span className="section-label">Services</span>
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
            Four Pillars of{" "}
            <span className="gradient-text">Architecture Excellence</span>
          </h1>
          <p
            style={{
              color: "#64748B",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            From enterprise strategy to hands-on AI adoption — we cover the
            full spectrum of architecture disciplines your transformation
            demands.
          </p>
        </div>
      </section>

      {/* Tabbed service details */}
      <section
        style={{
          background: "#0C1525",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 56,
        }}
      >
        <ServicesTabs />
      </section>

      <CTASection />
    </main>
  );
}
