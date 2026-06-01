"use client";

import { useState } from "react";
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

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 96px" }}>
      {/* Tab strip */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "6px",
          background: "rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 14,
          width: "fit-content",
          margin: "0 auto 48px",
        }}
      >
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              padding: "10px 20px",
              borderRadius: 9,
              border: "none",
              background:
                active === i ? `${s.accentColor}20` : "transparent",
              color: active === i ? s.accentColor : "#94A3B8",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.18s",
              outline: active === i ? `1px solid ${s.accentColor}40` : "none",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div
        key={service.id}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 48,
          alignItems: "flex-start",
          animation: "fadeIn 0.2s ease",
        }}
      >
        {/* Left: description */}
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
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0F172A",
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
              marginBottom: 24,
            }}
          >
            {service.subtitle}
          </p>

          {service.description.map((para, i) => (
            <p
              key={i}
              style={{
                color: "#94A3B8",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 14,
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
              marginTop: 12,
            }}
          >
            Discuss this service <ArrowRight size={14} />
          </Link>
        </div>

        {/* Right: deliverables + outcomes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Deliverables */}
          <div className="card" style={{ padding: 28 }}>
            <h3
              style={{
                color: "#0F172A",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
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
                    marginBottom: 11,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    color={service.accentColor}
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  <span style={{ color: "#94A3B8", fontSize: 14 }}>{d}</span>
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
                color: "#0F172A",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
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
                  <span
                    style={{
                      color: "#94A3B8",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
