"use client";

import Link from "next/link";
import { Building2, Layers, Cloud, Brain, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  iconBg: string;
  iconGlow: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    icon: <Building2 size={24} />,
    iconBg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    iconGlow: "rgba(59,130,246,0.2)",
    tag: "Foundation",
    title: "Enterprise Architecture",
    subtitle: "Align Strategy with Technology",
    description:
      "Build the architectural blueprint that connects your business strategy with technology execution. We design EA frameworks, governance models, and multi-year roadmaps grounded in TOGAF and ArchiMate.",
    features: [
      "EA Framework Design",
      "Capability & Value Stream Mapping",
      "Architecture Governance",
      "TOGAF / ArchiMate Modelling",
    ],
  },
  {
    icon: <Layers size={24} />,
    iconBg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    iconGlow: "rgba(139,92,246,0.2)",
    tag: "Design",
    title: "Solution Architecture",
    subtitle: "Design End-to-End Solutions",
    description:
      "Translate business requirements into fit-for-purpose technical designs. We architect microservices, APIs, event-driven systems, and integration patterns that slot seamlessly into your enterprise landscape.",
    features: [
      "Microservices & API Architecture",
      "Integration & Event-Driven Design",
      "Data Architecture & Pipelines",
      "Architecture Decision Records",
    ],
  },
  {
    icon: <Cloud size={24} />,
    iconBg: "linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)",
    iconGlow: "rgba(6,182,212,0.2)",
    tag: "Cloud",
    title: "Cloud Architecture",
    subtitle: "Build Cloud-Native at Scale",
    description:
      "Design cloud-native architectures and migration blueprints that maximise resilience, scalability, and cost efficiency. We are vendor-neutral practitioners across AWS, Azure, and GCP.",
    features: [
      "Multi-Cloud Strategy",
      "Cloud-Native Design Patterns",
      "Migration & Lift-and-Shift Planning",
      "FinOps & Cost Optimisation",
    ],
  },
  {
    icon: <Brain size={24} />,
    iconBg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    iconGlow: "rgba(245,158,11,0.2)",
    tag: "AI",
    title: "AI & Modernisation",
    subtitle: "Architect Your Intelligent Enterprise",
    description:
      "Embed AI responsibly into your enterprise architecture. From data platform design to MLOps and LLM integration, we architect your path to an intelligent, future-ready organisation.",
    features: [
      "AI Readiness Assessment",
      "Data Platform & LakeHouse Design",
      "MLOps & LLM Integration",
      "Responsible AI Governance",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Our Services</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Four Pillars of{" "}
            <span className="gradient-text">Architecture Excellence</span>
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: 17,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From enterprise strategy to hands-on cloud design — we cover the
            full spectrum of architecture disciplines.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card"
              style={{ padding: 32, display: "flex", flexDirection: "column" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: service.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginBottom: 20,
                  boxShadow: `0 8px 24px ${service.iconGlow}`,
                }}
              >
                {service.icon}
              </div>

              {/* Tag */}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#475569",
                  marginBottom: 8,
                }}
              >
                {service.tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  color: "#F8FAFC",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                {service.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  color: "#60A5FA",
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 16,
                }}
              >
                {service.subtitle}
              </p>

              {/* Description */}
              <p
                style={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Features list */}
              <ul style={{ listStyle: "none", marginBottom: 24 }}>
                {service.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#94A3B8",
                      fontSize: 13,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#3B82F6",
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#60A5FA",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
