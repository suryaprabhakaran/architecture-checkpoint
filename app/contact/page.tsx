"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const ENQUIRY_TYPES = [
  "Enterprise Architecture",
  "Solution Architecture",
  "Cloud Architecture",
  "AI & Modernisation",
  "Architecture Review",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

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
            width: "60%",
            height: "80%",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <span className="section-label">Contact</span>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0F172A",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Let&apos;s Start Your{" "}
            <span className="gradient-text">Architecture Checkpoint</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: 17, lineHeight: 1.7 }}>
            Tell us about your transformation challenge. We&apos;ll come back
            to you within one business day with an initial view and next steps.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        style={{
          padding: "64px 24px 96px",
          background: "#EFF4FB",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 56,
            alignItems: "flex-start",
          }}
        >
          {/* Contact form */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 20,
              padding: 40,
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <CheckCircle2 size={28} color="#10B981" />
                </div>
                <h3
                  style={{
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 12,
                  }}
                >
                  Message Sent
                </h3>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: 15,
                    lineHeight: 1.7,
                    maxWidth: 320,
                    margin: "0 auto",
                  }}
                >
                  Thank you for reaching out. We will review your enquiry and
                  respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 8,
                  }}
                >
                  Book a Free Checkpoint
                </h2>
                <p style={{ color: "#94A3B8", fontSize: 14, marginBottom: 32 }}>
                  No obligation. We&apos;ll assess your situation and give you
                  clear, practical guidance.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Alex"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Chen"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Work Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="alex@enterprise.com"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Organisation *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enterprise Ltd"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Area of Interest</label>
                  <select style={inputStyle} defaultValue="">
                    <option value="" disabled>
                      Select a service area
                    </option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Tell us about your challenge *</label>
                  <textarea
                    required
                    placeholder="Describe your architecture challenge or transformation programme..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: loading ? "#1D4ED8" : "#3B82F6",
                    color: "white",
                    padding: "14px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "background 0.2s",
                    opacity: loading ? 0.8 : 1,
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight size={16} />}
                </button>

                <p
                  style={{
                    color: "#CBD5E1",
                    fontSize: 12,
                    textAlign: "center",
                    marginTop: 16,
                  }}
                >
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h2
                style={{
                  color: "#0F172A",
                  fontWeight: 700,
                  fontSize: 24,
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Get in touch directly
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7 }}>
                Whether you have a specific project in mind or want an informal
                chat about your architecture challenges, we are here to help.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "hello@architecturecheckpoint.com",
                  color: "#3B82F6",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: "Global — remote-first practice",
                  color: "#8B5CF6",
                },
                {
                  icon: <Clock size={18} />,
                  label: "Response Time",
                  value: "Within 1 business day",
                  color: "#10B981",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 14,
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#94A3B8",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase" as const,
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ color: "#94A3B8", fontSize: 14 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div
              style={{
                background: "rgba(37,99,235,0.06)",
                border: "1px solid rgba(59,130,246,0.12)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3
                style={{
                  color: "#0F172A",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 16,
                }}
              >
                What happens next
              </h3>
              {[
                "We review your enquiry within 1 business day",
                "We schedule a 30-minute discovery call",
                "We provide an initial architecture perspective",
                "We propose a tailored engagement approach",
              ].map((step, i) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "rgba(37,99,235,0.12)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      fontSize: 11,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: "#94A3B8", fontSize: 13, lineHeight: 1.6 }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#94A3B8",
  fontSize: 13,
  fontWeight: 500,
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#EFF4FB",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 10,
  padding: "12px 14px",
  color: "#0F172A",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};
