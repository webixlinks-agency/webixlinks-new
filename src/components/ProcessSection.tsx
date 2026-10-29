'use client';

import React from 'react';
import {
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  Sparkles,
} from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Architecture Blueprint',
      icon: Compass,
      color: '#2563eb',
      description:
        'We dissect your business goals, target audience, and system integrations. We produce a technical blueprint covering database schemas, API contracts, and optimal framework selection (Next.js vs Angular, WordPress vs Headless, Laravel vs Node/Python).',
      deliverable: 'Architecture Spec & Clickable Milestone Roadmap',
    },
    {
      step: '02',
      title: '3D Prototyping & Agile Sprints',
      icon: Code2,
      color: '#7c3aed',
      description:
        'Bi-weekly agile sprints with interactive staging environments. You test functional code early and often. We build 3D components, responsive frontend views, and resilient backend microservices with real-time feedback loops.',
      deliverable: 'Live Staging Demos & Code Checkpoints',
    },
    {
      step: '03',
      title: 'Security, QA & Core Web Vitals Audit',
      icon: ShieldCheck,
      color: '#06b6d4',
      description:
        'Rigorous automated and human QA. We test cross-browser compatibility, run OWASP security penetration checks, and optimize Core Web Vitals to guarantee sub-second page loads and 95+ PageSpeed scores.',
      deliverable: 'Lighthouse 95+ Benchmark & QA Sign-Off',
    },
    {
      step: '04',
      title: 'CI/CD Deployment & 30-Day Hypercare',
      icon: Rocket,
      color: '#10b981',
      description:
        'Zero-downtime deployment through automated CI/CD pipelines to AWS, Vercel, or your private cloud. We monitor telemetry, configure Google Search Console SEO indexing, and provide 30 days of complimentary hypercare support.',
      deliverable: 'Full IP Ownership & 24/7 Post-Launch Warranty',
    },
  ];

  return (
    <section id="process" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Battle-Tested Delivery Workflow</span>
          </div>
          <h2 className="section-title">
            From Conceptual Blueprint To <span className="text-gradient">Production Launch</span>
          </h2>
          <p className="section-subtitle">
            Our systematic 4-phase agile engineering framework guarantees predictable delivery, clean code, and zero unexpected surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="glass-panel"
                style={{
                  padding: '32px 28px',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Step Number in Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '18px',
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(15, 23, 42, 0.04)',
                    pointerEvents: 'none',
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>

                <div>
                  {/* Step Header */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${item.color}15`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: item.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '6px',
                    }}
                  >
                    Phase {item.step}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '14px',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(241, 245, 249, 0.8)',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: '#1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ color: item.color, fontWeight: 700 }}>Milestone:</span>
                  <span>{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
