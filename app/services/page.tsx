import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Layers,
  Cloud,
  Brain,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services — Architecture Checkpoint",
  description:
    "Enterprise architecture, solution architecture, cloud architecture, and AI modernisation services for complex transformation programmes.",
};

interface ServiceDetail {
  id: string;
  icon: ReactNode;
  accentColor: string;
  iconBg: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string[];
  deliverables: string[];
  outcomes: string[];
}

const SERVICES: ServiceDetail[] = [
  {
    id: "enterprise-architecture",
    icon: <Building2 size={28} />,
    accentColor: "#3B82F6",
    iconBg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    tag: "Foundation",
    title: "Enterprise Architecture",
    subtitle: "Align Strategy with Technology at Scale",
    description: [
      "Enterprise Architecture is the discipline of designing and governing the structure of your organisation's technology, information, and capability landscape in alignment with business strategy.",
      "We work with your leadership and technical teams to create EA frameworks that are practical, not just theoretical — frameworks that guide real decisions, accelerate delivery, and reduce architectural debt.",
    ],
    deliverables: [
      "EA Framework Design (TOGAF / ArchiMate)",
      "Current-State & Target-State Architecture Views",
      "Business Capability & Value Stream Maps",
      "Technology Landscape Assessment",
      "Architecture Governance Operating Model",
      "Architecture Decision Record (ADR) Framework",
      "Multi-Year Architecture Roadmap",
    ],
    outcomes: [
      "Strategic alignment between business goals and IT investment",
      "Reduced duplication and technical debt across the portfolio",
      "Clear, enforceable standards that guide delivery teams",
      "Faster decision-making through documented patterns and principles",
    ],
  },
  {
    id: "solution-architecture",
    icon: <Layers size={28} />,
    accentColor: "#8B5CF6",
    iconBg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    tag: "Design",
    title: "Solution Architecture",
    subtitle: "Design Fit-for-Purpose Solutions That Last",
    description: [
      "Solution Architecture bridges the gap between business requirements and technical delivery. It ensures that what gets built is both technically sound and strategically coherent within your enterprise landscape.",
      "Our solution architects bring deep expertise in modern integration patterns, microservices, data architecture, and cloud-native design — translating complex requirements into clear, buildable designs.",
    ],
    deliverables: [
      "Solution Architecture Documents (SADs)",
      "Component & Sequence Diagrams",
      "API & Integration Architecture",
      "Data Flow & Domain Design",
      "Non-Functional Requirements Analysis",
      "Architecture Decision Records",
      "Technical Risk Register",
    ],
    outcomes: [
      "Technically coherent solutions that fit your enterprise landscape",
      "Reduced integration complexity and future rework",
      "Clear handoffs between architecture and delivery teams",
      "Architectures that scale without fundamental redesign",
    ],
  },
  {
    id: "cloud-architecture",
    icon: <Cloud size={28} />,
    accentColor: "#06B6D4",
    iconBg: "linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)",
    tag: "Cloud",
    title: "Cloud Architecture",
    subtitle: "Build Resilient, Scalable Cloud Foundations",
    description: [
      "Cloud transformation is one of the most complex undertakings an enterprise can embark on. Done well, it unlocks agility, resilience, and innovation. Done poorly, it creates expensive technical debt at cloud scale.",
      "We bring vendor-neutral cloud expertise across AWS, Microsoft Azure, and Google Cloud Platform — designing landing zones, migration strategies, and cloud-native architectures tailored to your workloads and operating model.",
    ],
    deliverables: [
      "Cloud Strategy & Platform Selection",
      "Cloud Landing Zone Design",
      "Migration Assessment & Wave Planning",
      "Cloud-Native Architecture Patterns",
      "Multi-Cloud & Hybrid Architecture",
      "FinOps & Cost Optimisation Strategy",
      "Cloud Security & Compliance Architecture",
    ],
    outcomes: [
      "Cloud architectures built for resilience, not just migration",
      "Optimised costs through right-sizing and architectural governance",
      "Secure, compliant cloud environments from day one",
      "Platform independence and reduced vendor lock-in risk",
    ],
  },
  {
    id: "ai-modernisation",
    icon: <Brain size={28} />,
    accentColor: "#F59E0B",
    iconBg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    tag: "AI",
    title: "AI & Modernisation",
    subtitle: "Architect the Intelligent Enterprise",
    description: [
      "AI adoption requires more than buying models — it requires the right data foundations, integration patterns, governance frameworks, and cultural architecture to make AI safe, scalable, and business-aligned.",
      "We help enterprises design the architectural building blocks that enable responsible, high-impact AI adoption — from data platform modernisation to LLM integration patterns and MLOps architectures.",
    ],
    deliverables: [
      "AI Readiness & Maturity Assessment",
      "Data Platform & LakeHouse Architecture",
      "MLOps Pipeline Design",
      "LLM & Generative AI Integration Architecture",
      "Responsible AI Governance Framework",
      "Legacy Modernisation Roadmap",
      "AI Centre of Excellence Blueprint",
    ],
    outcomes: [
      "Structured path to AI adoption with reduced risk",
      "Data foundations that support both analytics and AI workloads",
      "Governance frameworks that keep AI safe and auditable",
      "Architectural patterns that scale as AI capabilities mature",
    ],
  },
];

export default function ServicesPage() {
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
              margin: "0 auto 40px",
            }}
          >
            From enterprise strategy to hands-on AI adoption — we cover the
            full spectrum of architecture disciplines your transformation
            demands.
          </p>

          {/* Jump nav */}
          <div
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="jump-nav-link"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#94A3B8",
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  ["--hover-color" as string]: s.accentColor,
                  ["--hover-border" as string]: `${s.accentColor}40`,
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            padding: "80px 24px",
            background: index % 2 === 0 ? "#070D1A" : "#0C1525",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "flex-start",
            }}
          >
            {/* Left: main content */}
            <div>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: service.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginBottom: 24,
                  boxShadow: `0 12px 32px ${service.accentColor}30`,
                }}
              >
                {service.icon}
              </div>

              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: service.accentColor,
                  display: "block",
                  marginBottom: 10,
                }}
              >
                {service.tag}
              </span>

              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#F8FAFC",
                  lineHeight: 1.15,
                  marginBottom: 8,
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  color: service.accentColor,
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 28,
                }}
              >
                {service.subtitle}
              </p>

              {service.description.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "#64748B",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  {para}
                </p>
              ))}

              <Link
                href="/contact"
                className="service-cta-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: service.accentColor,
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: 16,
                }}
              >
                Discuss this service <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: deliverables + outcomes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Deliverables */}
              <div
                className="card"
                style={{ padding: 28 }}
              >
                <h3
                  style={{
                    color: "#F8FAFC",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                    marginBottom: 20,
                  }}
                >
                  Typical Deliverables
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 12,
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color={service.accentColor}
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <span style={{ color: "#94A3B8", fontSize: 14 }}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div
                style={{
                  background: `${service.accentColor}0A`,
                  border: `1px solid ${service.accentColor}20`,
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <h3
                  style={{
                    color: "#F8FAFC",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                    marginBottom: 20,
                  }}
                >
                  Business Outcomes
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {service.outcomes.map((o) => (
                    <li
                      key={o}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: service.accentColor,
                          flexShrink: 0,
                          marginTop: 7,
                        }}
                      />
                      <span style={{ color: "#CBD5E1", fontSize: 14, lineHeight: 1.6 }}>
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </main>
  );
}
