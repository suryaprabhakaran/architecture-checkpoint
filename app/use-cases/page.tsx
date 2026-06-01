import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Layers, Cloud, Brain } from "lucide-react";
import CTASection from "@/components/CTASection";
import UseCaseDiagram from "@/components/UseCaseDiagram";
import {
  USE_CASES,
  INDUSTRY_COLORS,
  SERVICE_COLORS,
} from "@/data/use-cases";

export const metadata: Metadata = {
  title: "Use Cases — Architecture Checkpoint",
  description:
    "Real-world architecture challenges we have solved — from enterprise modernisation to AI adoption and cloud transformation.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Enterprise Architecture": <Building2 size={14} />,
  "Solution Architecture":   <Layers size={14} />,
  "Cloud Architecture":      <Cloud size={14} />,
  "AI & Modernisation":      <Brain size={14} />,
};

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
          <span className="section-label">Use Cases</span>
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
            Real Architecture,{" "}
            <span className="gradient-text">Real Results</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: 18, lineHeight: 1.7 }}>
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
          background: "#EFF4FB",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
              gap: 28,
            }}
          >
            {USE_CASES.map((uc) => {
              const industryColor =
                INDUSTRY_COLORS[uc.industry] ?? "#3B82F6";
              const serviceColor =
                SERVICE_COLORS[uc.serviceType] ?? "#3B82F6";
              const serviceIcon = SERVICE_ICONS[uc.serviceType];

              return (
                <div
                  key={uc.id}
                  className="card"
                  style={{
                    padding: 36,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
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
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: `${industryColor}15`,
                        border: `1px solid ${industryColor}30`,
                        color: industryColor,
                        padding: "5px 12px",
                        borderRadius: 100,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {uc.industry}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: serviceColor,
                        fontSize: 12,
                        fontWeight: 500,
                        opacity: 0.8,
                      }}
                    >
                      {serviceIcon}
                      {uc.serviceType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      color: "#0F172A",
                      fontWeight: 700,
                      fontSize: 19,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {uc.title}
                  </h3>

                  {/* Diagram — PNG if available, CSS fallback otherwise */}
                  {uc.imageUrl ? (
                    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${uc.imageUrl}`}
                        alt={`Architecture diagram — ${uc.title}`}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  ) : uc.diagramType ? (
                    <UseCaseDiagram type={uc.diagramType} />
                  ) : null}

                  {/* Three labelled sections */}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 14 }}
                  >
                    {[
                      { label: "Challenge", color: "#EF4444", text: uc.challenge },
                      { label: "Approach",  color: "#3B82F6", text: uc.approach },
                      { label: "Outcome",   color: "#10B981", text: uc.outcome },
                    ].map((s) => (
                      <div key={s.label}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 5,
                          }}
                        >
                          <span
                            style={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              background: s.color,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              color: s.color,
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase" as const,
                            }}
                          >
                            {s.label}
                          </span>
                        </div>
                        <p
                          style={{
                            color: "#94A3B8",
                            fontSize: 14,
                            lineHeight: 1.7,
                            paddingLeft: 15,
                          }}
                        >
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                      marginTop: 4,
                    }}
                  >
                    {uc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "rgba(0,0,0,0.04)",
                          border: "1px solid rgba(0,0,0,0.08)",
                          color: "#94A3B8",
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
              );
            })}

            {/* "Coming soon" placeholder */}
            <div
              style={{
                border: "2px dashed rgba(0,0,0,0.07)",
                borderRadius: 16,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                minHeight: 280,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(37,99,235,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3B82F6",
                  fontSize: 22,
                  fontWeight: 300,
                }}
              >
                +
              </div>
              <div>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  More use cases coming soon
                </p>
                <p style={{ color: "#CBD5E1", fontSize: 13 }}>
                  Each engagement adds to our library of patterns
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div
            style={{
              marginTop: 56,
              background: "rgba(37,99,235,0.05)",
              border: "1px solid rgba(37,99,235,0.08)",
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
                  color: "#94A3B8",
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                Working on a similar challenge?
              </p>
              <p style={{ color: "#94A3B8", fontSize: 14 }}>
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
