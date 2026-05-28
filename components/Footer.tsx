"use client";

import Link from "next/link";
import { CheckSquare, Mail, Globe2, X, ArrowRight } from "lucide-react";

const SERVICES = [
  "Enterprise Architecture",
  "Solution Architecture",
  "Cloud Architecture",
  "AI & Modernization",
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Methodology", href: "/#methodology" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050B16",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 24px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CheckSquare size={18} color="white" strokeWidth={2.5} />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div
                  style={{
                    color: "#F8FAFC",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Architecture
                </div>
                <div
                  style={{
                    color: "#60A5FA",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Checkpoint
                </div>
              </div>
            </Link>
            <p
              style={{
                color: "#64748B",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 260,
              }}
            >
              Engineering enterprise-grade architectures for digital
              transformation, cloud modernization, and AI adoption.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: <Globe2 size={16} />, href: "#" },
                { icon: <X size={16} />, href: "#" },
                { icon: <Mail size={16} />, href: "mailto:hello@architecturecheckpoint.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748B",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.15)";
                    e.currentTarget.style.color = "#60A5FA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#64748B";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4
              style={{
                color: "#F8FAFC",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 20,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none" }}>
              {SERVICES.map((s) => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <Link
                    href="/services"
                    style={{
                      color: "#64748B",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#94A3B8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#64748B")
                    }
                  >
                    <ArrowRight size={12} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4
              style={{
                color: "#F8FAFC",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 20,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none" }}>
              {COMPANY.map((link) => (
                <li key={link.href} style={{ marginBottom: 12 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#64748B",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#94A3B8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#64748B")
                    }
                  >
                    <ArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                color: "#F8FAFC",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 20,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Get in Touch
            </h4>
            <p style={{ color: "#64748B", fontSize: 14, marginBottom: 16 }}>
              Ready to architect your transformation?
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                color: "#60A5FA",
                padding: "10px 18px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(59,130,246,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(59,130,246,0.1)")
              }
            >
              Book a Free Checkpoint
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 28,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#334155", fontSize: 13 }}>
            © {new Date().getFullYear()} Architecture Checkpoint. All rights
            reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  color: "#334155",
                  fontSize: 13,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#64748B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#334155")
                }
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
