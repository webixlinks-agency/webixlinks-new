'use client';

import React from 'react';
import {
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Topology Blueprint',
      icon: Compass,
      description:
        'We deconstruct your business goals, target user personas, and legacy systems. We produce a comprehensive architecture specification covering database schemas, API contracts, and optimal framework choices (Next.js vs Angular, WordPress vs Headless, Laravel vs Node/Python).',
      deliverable: 'Complete Architecture Spec & Milestone Roadmap',
    },
    {
      step: '02',
      title: 'Sprint Prototyping & Live Staging',
      icon: Code2,
      description:
        'Rapid bi-weekly agile sprints with interactive staging environments. You test functional code early and often. We build interactive frontend views, resilient backend microservices, and CRM webhooks with continuous feedback loops.',
      deliverable: 'Live Staging Demos & Verified Checkpoints',
    },
    {
      step: '03',
      title: 'Hardening, QA & Lighthouse 100 Audit',
      icon: ShieldCheck,
      description:
        'Rigorous automated and human verification. We run cross-browser accessibility checks, perform OWASP security penetration reviews, and calibrate Core Web Vitals to guarantee sub-second page loads and 100/100 Lighthouse audits.',
      deliverable: '100/100 Lighthouse Benchmark & QA Sign-Off',
    },
    {
      step: '04',
      title: 'Zero-Downtime Launch & Hypercare',
      icon: Rocket,
      description:
        'Automated CI/CD deployment to AWS, Vercel, or your private cloud with zero downtime. We monitor real-time telemetry, configure Google Search Console SEO indexing, and provide 30 days of high-priority post-launch hypercare support.',
      deliverable: 'Full Source Code IP & 30-Day Engineering Warranty',
    },
  ];

  return (
    <section id="process" style={{ paddingTop: '80px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag section-tag-emerald">
            <Sparkles size={14} />
            <span>Methodical Delivery Workflow</span>
          </div>
          <h2 className="section-title">
            From technical blueprint to{' '}
            <span className="text-gradient-emerald">production supremacy</span>.
          </h2>
          <p className="section-subtitle">
            Our 4-phase agile engineering framework guarantees predictable delivery cadence, high code craftsmanship, and zero deployment surprises.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '32px',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span className="pill-number">{item.step}</span>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#059669',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#090d16', marginBottom: '12px', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(15, 23, 42, 0.06)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    Milestone Deliverable
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#090d16' }}>
                    {item.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
