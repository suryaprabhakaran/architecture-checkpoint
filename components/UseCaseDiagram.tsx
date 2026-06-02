import type { CSSProperties } from "react";

export type DiagramType = "portal-routing" | "split-assessment";

// ── shared primitives ────────────────────────────────────────────────────────

const box = (
  label: string,
  accent?: string,
  extra?: CSSProperties
): React.ReactNode => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 11px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: 600,
      background: accent ? `${accent}12` : "rgba(0,0,0,0.04)",
      border: `1px solid ${accent ? `${accent}30` : "rgba(0,0,0,0.1)"}`,
      color: accent ?? "#64748B",
      whiteSpace: "nowrap" as const,
      ...extra,
    }}
  >
    {label}
  </span>
);

const arrow = (dir: "right" | "down" = "right") => (
  <span
    style={{
      color: "#CBD5E1",
      fontSize: dir === "right" ? 14 : 12,
      lineHeight: 1,
      flexShrink: 0,
      margin: dir === "right" ? "0 4px" : "2px auto",
      display: "block",
      textAlign: "center",
    }}
  >
    {dir === "right" ? "→" : "↓"}
  </span>
);

const row = (children: React.ReactNode, extra?: CSSProperties) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      ...extra,
    }}
  >
    {children}
  </div>
);

// ── diagram: portal routing ──────────────────────────────────────────────────

function PortalRoutingDiagram() {
  return (
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 12,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Tier 1: hierarchy */}
      {row(
        <>
          {box("Business Unit", "#2563EB")}
          {arrow()}
          {box("Application", "#7C3AED")}
          {arrow()}
          {box("Service", "#0891B2")}
        </>
      )}

      {/* connector */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
        <div style={{ width: 190, flexShrink: 0 }} />
        {arrow("down")}
        <div style={{ flex: 1 }} />
      </div>

      {/* Tier 2: routing by type */}
      <div>
        <div
          style={{
            fontSize: 10,
            color: "#94A3B8",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Routes to documentation by service type
        </div>
        {row(
          <>
            {box("Swagger", "#059669")}
            {box("AsyncAPI", "#D97706")}
            {box("Doxygen", "#2563EB")}
            {box("Python CLI", "#7C3AED")}
          </>,
          { gap: 8 }
        )}
      </div>

      {/* result */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
        {box("Always-current documentation at source", "#059669", {
          fontSize: 10,
          padding: "4px 10px",
        })}
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
      </div>
    </div>
  );
}

// ── diagram: Chinese-wall assessment ────────────────────────────────────────

function SplitAssessmentDiagram() {
  const dimensions = [
    "Technical",
    "Security",
    "Strategic",
    "Agile",
    "Culture",
  ];

  return (
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 12,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Two companies */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, alignItems: "center" }}>
        <div
          style={{
            background: "rgba(37,99,235,0.06)",
            border: "1px solid rgba(37,99,235,0.18)",
            borderRadius: 9,
            padding: "10px 14px",
          }}
        >
          <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, marginBottom: 4 }}>
            ACQUIRER
          </div>
          <div style={{ fontSize: 12, color: "#1D4ED8", fontWeight: 700 }}>
            Homegrown Platform
          </div>
        </div>

        {/* Chinese wall */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div
            style={{
              width: 2,
              height: 48,
              background:
                "repeating-linear-gradient(to bottom, #D97706 0px, #D97706 6px, transparent 6px, transparent 12px)",
            }}
          />
          <span
            style={{
              fontSize: 9,
              color: "#D97706",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Chinese Wall
          </span>
          <div
            style={{
              width: 2,
              height: 48,
              background:
                "repeating-linear-gradient(to bottom, #D97706 0px, #D97706 6px, transparent 6px, transparent 12px)",
            }}
          />
        </div>

        <div
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.18)",
            borderRadius: 9,
            padding: "10px 14px",
          }}
        >
          <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, marginBottom: 4 }}>
            ACQUIRED
          </div>
          <div style={{ fontSize: 12, color: "#6D28D9", fontWeight: 700 }}>
            Incumbent Tool
          </div>
        </div>
      </div>

      {/* Converging arrow */}
      <div style={{ textAlign: "center", color: "#94A3B8", fontSize: 12 }}>
        ↓ Independent evaluations merged ↓
      </div>

      {/* Assessment dimensions */}
      <div>
        <div
          style={{
            fontSize: 10,
            color: "#94A3B8",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Assessment dimensions
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {dimensions.map((d) => box(d))}
        </div>
      </div>

      {/* Output */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
        {box("Board-ready Recommendation", "#059669", { fontSize: 10, padding: "4px 10px" })}
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
      </div>
    </div>
  );
}

// ── export ───────────────────────────────────────────────────────────────────

export default function UseCaseDiagram({ type }: { type: DiagramType }) {
  if (type === "portal-routing") return <PortalRoutingDiagram />;
  if (type === "split-assessment") return <SplitAssessmentDiagram />;
  return null;
}
