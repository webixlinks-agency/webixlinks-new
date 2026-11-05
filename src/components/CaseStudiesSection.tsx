'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Award,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import TiltCard from '@/components/3d/TiltCard';

interface CaseStudy {
  id: string;
  number: string;
  client: string;
  industry: string;
  title: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  summary: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'headless-wp-next',
    number: '01',
    client: 'Velox Luxury Retail',
    industry: 'E-Commerce / Luxury Goods',
    title: 'Headless WordPress + Next.js 16 Edge Architecture for Luxury Brand',
    stack: ['Headless WordPress', 'Next.js 16', 'WPGraphQL', 'WooCommerce', 'Tailwind CSS'],
    metrics: [
      { value: '0.28s', label: 'LCP PageSpeed' },
      { value: '+74%', label: 'Mobile Conversion' },
      { value: '$6.2M', label: 'E-Commerce ARR' },
    ],
    summary:
      'Replaced a bloated monolithic WordPress theme with an edge-rendered Next.js App Router frontend via WPGraphQL. Marketing maintains full Gutenberg editing freedom while pages load in under 300ms worldwide.',
  },
  {
    id: 'crm-automation-hubspot',
    number: '02',
    client: 'Nexus Global Logistics',
    industry: 'Enterprise B2B / Supply Chain',
    title: 'Salesforce & HubSpot Dual-Sync Pipeline with Real-Time Webhook Hub',
    stack: ['Salesforce', 'HubSpot API v3', 'Node.js', 'Redis', 'Webhooks'],
    metrics: [
      { value: '35,000+', label: 'Daily Leads Routed' },
      { value: '42 hrs', label: 'Saved Weekly in Ops' },
      { value: '0.00%', label: 'Lead Drop-Off Rate' },
    ],
    summary:
      'Engineered an enterprise CRM automation engine that ingests incoming web requests into Salesforce custom objects and HubSpot marketing drip funnels with instant lead scoring and zero data leakage.',
  },
  {
    id: 'mern-fintech-portal',
    number: '03',
    client: 'Strata Financial Group',
    industry: 'FinTech / Asset Management',
    title: 'MERN Stack Investor Portal with Sub-Millisecond WebSocket Telemetry',
    stack: ['React 19', 'Node.js Fastify', 'Express', 'MongoDB Atlas', 'Docker'],
    metrics: [
      { value: '320K', label: 'Active Monthly Investors' },
      { value: '99.99%', label: 'SLA Availability' },
      { value: '18ms', label: 'WebSocket Latency' },
    ],
    summary:
      'Designed and deployed an institutional-grade MERN portal featuring live market data streams, multi-factor JWT authentication, and SOC2 bank-grade security protocols.',
  },
  {
    id: 'laravel-angular-enterprise',
    number: '04',
    client: 'Apex Health Systems',
    industry: 'Healthcare / Enterprise',
    title: 'Angular v18 MEAN Stack + Laravel Octane High-Throughput Microservices',
    stack: ['Angular v18', 'Laravel Octane', 'Python FastAPI', 'PostgreSQL', 'Docker'],
    metrics: [
      { value: '1.8M', label: 'Patient Records' },
      { value: '4.8x', label: 'Query Speedup' },
      { value: '100%', label: 'HIPAA Compliant' },
    ],
    summary:
      'Constructed a high-concurrency patient analytics platform combining an Angular reactive signal frontend with a Laravel Octane backend and Python asynchronous workers.',
  },
];

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const active = caseStudies[selectedCase];

  return (
    <section
      id="case-studies"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag section-tag-emerald">
            <Award size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">
            Engineered outcomes that{' '}
            <span className="text-gradient-emerald">transform businesses</span>.
          </h2>
          <p className="section-subtitle">
            Every digital platform we build is engineered for tangible revenue growth, speed superiority, and automated operational efficiency.
          </p>
        </div>

        {/* Selected Work 3D Browser Showcase (Inspired by Orisa & Obliq) */}
        <TiltCard maxTilt={6} perspective={1400} style={{ marginBottom: '40px' }}>
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.94)',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.1)',
            }}
          >
            {/* Top Browser Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid rgba(15, 23, 42, 0.07)',
                background: '#f8fafc',
              }}
            >
              {/* Dots & Case Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  case-study://{active.id}
                </span>
              </div>

              {/* Selector Pills */}
              <div style={{ display: 'flex', gap: '6px' }}>
                {caseStudies.map((study, idx) => (
                  <button
                    key={study.id}
                    onClick={() => setSelectedCase(idx)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: selectedCase === idx ? 700 : 500,
                      color: selectedCase === idx ? '#059669' : '#64748b',
                      background: selectedCase === idx ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                      border: selectedCase === idx ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                    }}
                  >
                    {study.number} {study.client.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Body Content */}
            <div style={{ padding: '36px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '36px',
                  alignItems: 'center',
                }}
                className="case-study-grid"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="pill-number">{active.number}</span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#059669' }}>
                      {active.industry}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 550, color: '#090d16', lineHeight: 1.25, marginBottom: '16px' }}>
                    {active.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '24px' }}>
                    {active.summary}
                  </p>

                  {/* Tech Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {active.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: '#f1f5f9',
                          color: '#334155',
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href="/estimator" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.86rem' }}>
                    <span>Request Similar Architecture</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Verified Metrics Cards */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    background: '#f8fafc',
                    padding: '24px',
                    borderRadius: '20px',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <div style={{ fontSize: '0.74rem', fontWeight: 600, color: '#090d16', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Audited Project Performance
                  </div>

                  {active.metrics.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#ffffff',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        border: '1px solid rgba(15, 23, 42, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.6rem', fontWeight: 600, color: '#090d16', letterSpacing: '-0.02em', lineHeight: 1 }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
                          {m.label}
                        </div>
                      </div>
                      <CheckCircle2 size={20} color="#10b981" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Client Testimonial Card */}
        <div
          className="glass-panel"
          style={{
            padding: '30px 36px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.94)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 600, marginBottom: '6px' }}>“</div>
            <p style={{ fontSize: '1.02rem', fontStyle: 'italic', color: '#1e293b', lineHeight: 1.6, marginBottom: '14px' }}>
              AuraStack Studios migrated our entire enterprise WordPress infrastructure to Headless Next.js in 6 weeks without losing a single ranking. Our Core Web Vitals score hit 100/100, and checkout conversion improved by 74%.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.85rem' }}>
                JP
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#090d16' }}>James Parker</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>VP of Engineering, Velox Luxury Retail</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>★★★★★ (5.0/5.0)</div>
            <div style={{ fontSize: '0.76rem', color: '#059669', fontWeight: 500 }}>✓ Verified Clutch Enterprise Review</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
