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
      background: accent ? `${accent}18` : "rgba(0,0,0,0.05)",
      border: `1px solid ${accent ? `${accent}35` : "rgba(255,255,255,0.1)"}`,
      color: accent ?? "#94A3B8",
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
        background: "rgba(7,13,26,0.6)",
        border: "1px solid rgba(0,0,0,0.07)",
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
          {box("Business Unit", "#3B82F6")}
          {arrow()}
          {box("Application", "#8B5CF6")}
          {arrow()}
          {box("Service", "#06B6D4")}
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
            color: "#CBD5E1",
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
            {box("Swagger", "#10B981")}
            {box("AsyncAPI", "#F59E0B")}
            {box("Doxygen", "#3B82F6")}
            {box("Python CLI", "#8B5CF6")}
          </>,
          { gap: 8 }
        )}
      </div>

      {/* result */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "rgba(0,0,0,0.06)",
          }}
        />
        {box("Always-current documentation at source", "#10B981", {
          fontSize: 10,
          padding: "4px 10px",
        })}
        <div
          style={{
            flex: 1,
            height: 1,
            background: "rgba(0,0,0,0.06)",
          }}
        />
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
        background: "rgba(7,13,26,0.6)",
        border: "1px solid rgba(0,0,0,0.07)",
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
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(37,99,235,0.16)",
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
                "repeating-linear-gradient(to bottom, #F59E0B 0px, #F59E0B 6px, transparent 6px, transparent 12px)",
            }}
          />
          <span
            style={{
              fontSize: 9,
              color: "#F59E0B",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transform: "rotate(0deg)",
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
                "repeating-linear-gradient(to bottom, #F59E0B 0px, #F59E0B 6px, transparent 6px, transparent 12px)",
            }}
          />
        </div>

        <div
          style={{
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 9,
            padding: "10px 14px",
          }}
        >
          <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, marginBottom: 4 }}>
            ACQUIRED
          </div>
          <div style={{ fontSize: 12, color: "#C4B5FD", fontWeight: 700 }}>
            Incumbent Tool
          </div>
        </div>
      </div>

      {/* Converging arrow */}
      <div style={{ textAlign: "center", color: "#CBD5E1", fontSize: 12 }}>↓ Independent evaluations merged ↓</div>

      {/* Assessment dimensions */}
      <div>
        <div
          style={{
            fontSize: 10,
            color: "#CBD5E1",
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
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.06)" }} />
        {box("Board-ready Recommendation", "#10B981", { fontSize: 10, padding: "4px 10px" })}
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.06)" }} />
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
