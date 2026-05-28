const STATS = [
  {
    value: "50+",
    label: "Enterprise Transformations Delivered",
    description: "Across regulated industries and complex environments",
  },
  {
    value: "200+",
    label: "Architecture Decisions Governed",
    description: "Documented and enforced through governance frameworks",
  },
  {
    value: "15+",
    label: "Years of Combined Expertise",
    description: "Deep experience in EA, SA, and cloud transformation",
  },
  {
    value: "3",
    label: "Cloud Platforms Mastered",
    description: "AWS, Microsoft Azure, and Google Cloud Platform",
  },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: "#0C1525",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.value}
            style={{ textAlign: "center", padding: "0 16px" }}
          >
            <div
              className="gradient-text"
              style={{
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 10,
                display: "block",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "#CBD5E1",
                fontWeight: 600,
                fontSize: 15,
                marginBottom: 6,
              }}
            >
              {stat.label}
            </div>
            <div style={{ color: "#475569", fontSize: 13, lineHeight: 1.5 }}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
