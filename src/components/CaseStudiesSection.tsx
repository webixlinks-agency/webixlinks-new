'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Award,
  ArrowRight,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  summary: string;
  tagColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'headless-wp-next',
    client: 'Velox Luxury Retail',
    industry: 'E-Commerce / Luxury Goods',
    title: 'Headless WordPress + Next.js Migration for Global Luxury Merchant',
    stack: ['WordPress', 'Next.js 15', 'WPGraphQL', 'WooCommerce', 'Tailwind/CSS'],
    metrics: [
      { value: '0.58s', label: 'Average LCP Speed' },
      { value: '+72%', label: 'Mobile Conversion Rate' },
      { value: '$4.8M', label: 'Annual Online Revenue' },
    ],
    summary:
      'Replaced a bloated legacy monolithic WordPress theme with a high-velocity headless architecture using Next.js App Router and WPGraphQL. Preserved familiar WP editor workflow while slashing load times by 78%.',
    tagColor: '#2563eb',
  },
  {
    id: 'crm-automation-hubspot',
    client: 'Nexus Global Logistics',
    industry: 'Enterprise B2B / Supply Chain',
    title: 'Salesforce & HubSpot Dual-Sync Pipeline With Custom Webhook Hub',
    stack: ['Salesforce', 'HubSpot', 'Node.js', 'Redis', 'REST Webhooks'],
    metrics: [
      { value: '25,000+', label: 'Daily Leads Automated' },
      { value: '38 hrs', label: 'Saved Weekly In Ops' },
      { value: '100%', label: 'Data Accuracy In CRM' },
    ],
    summary:
      'Engineered an enterprise CRM automation pipeline connecting web inquiries directly into Salesforce custom objects and HubSpot marketing nurture workflows with zero lead leakage.',
    tagColor: '#f97316',
  },
  {
    id: 'mern-fintech-portal',
    client: 'Strata Financial Group',
    industry: 'FinTech / Asset Management',
    title: 'MERN Stack Investor Portal With Real-Time Portfolio Analytics',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Docker'],
    metrics: [
      { value: '280k', label: 'Monthly Active Investors' },
      { value: '99.99%', label: 'Platform Availability' },
      { value: '50ms', label: 'WebSocket Latency' },
    ],
    summary:
      'Designed and deployed a compliant full-stack MERN portal featuring real-time market telemetry, multi-factor JWT authentication, and bank-grade data encryption.',
    tagColor: '#8b5cf6',
  },
  {
    id: 'laravel-angular-enterprise',
    client: 'Apex Health Systems',
    industry: 'Healthcare / Enterprise',
    title: 'Angular v17 MEAN Stack + Laravel Microservices Architecture',
    stack: ['Angular', 'Laravel 11', 'Python', 'PostgreSQL', 'Docker'],
    metrics: [
      { value: '1.2M', label: 'Patient Records Managed' },
      { value: '4.2x', label: 'Query Execution Speedup' },
      { value: 'HIPAA', label: 'Full Security Compliance' },
    ],
    summary:
      'Integrated an Angular frontend with Signals for real-time reactivity, backed by Laravel queue workers and Python data pipelines for complex insurance claim adjudication.',
    tagColor: '#ef4444',
  },
  {
    id: 'seo-programmatic-growth',
    client: 'ClearScale SaaS',
    industry: 'B2B Software',
    title: 'Technical SEO Engine & Programmatic Architecture Overhaul',
    stack: ['Next.js', 'Python', 'Schema.org', 'Google Search Console', 'Technical SEO'],
    metrics: [
      { value: '+420%', label: 'Organic Search Growth' },
      { value: '#1', label: 'Rankings for 180+ Terms' },
      { value: '100/100', label: 'Lighthouse SEO Score' },
    ],
    summary:
      'Implemented programmatic directory landing pages, rich JSON-LD knowledge graph schema, and sub-second Core Web Vitals to capture high-intent search traffic without ad spend.',
    tagColor: '#10b981',
  },
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentStudy = caseStudies[activeTab];

  return (
    <section id="case-studies" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Award size={14} />
            <span>Proven Enterprise Outcomes</span>
          </div>
          <h2 className="section-title">
            Case Studies In <span className="text-gradient">Measurable Growth</span>
          </h2>
          <p className="section-subtitle">
            We judge our engineering by commercial outcomes. Explore how our custom CMS, CRM, full-stack, and SEO solutions drove millions in verified revenue for our partners.
          </p>

          {/* Client Selector Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {caseStudies.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background:
                    activeTab === idx
                      ? '#0f172a'
                      : 'rgba(255, 255, 255, 0.85)',
                  color: activeTab === idx ? '#ffffff' : '#475569',
                  border:
                    activeTab === idx
                      ? '1px solid #0f172a'
                      : '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow:
                    activeTab === idx
                      ? '0 6px 18px rgba(15, 23, 42, 0.18)'
                      : '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div
          className="glass-panel"
          style={{
            padding: '44px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.8) 100%)',
            border: `2px solid ${currentStudy.tagColor}30`,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '36px',
              alignItems: 'center',
            }}
            className="case-study-grid"
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: currentStudy.tagColor,
                    background: `${currentStudy.tagColor}15`,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                  }}
                >
                  {currentStudy.industry}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                  {currentStudy.client}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  marginBottom: '18px',
                }}
              >
                {currentStudy.title}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  marginBottom: '26px',
                }}
              >
                {currentStudy.summary}
              </p>

              {/* Technologies Used */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#64748b',
                    marginBottom: '10px',
                  }}
                >
                  Architecture & Technologies Deployed:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentStudy.stack.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#1e293b',
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '5px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                <span>Build Similar Architecture</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right: Key Performance Metrics */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              {currentStudy.metrics.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px 28px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '20px',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b', marginBottom: '4px' }}>
                      {metric.label}
                    </div>
                    <div
                      style={{
                        fontSize: '2.2rem',
                        fontWeight: 800,
                        color: currentStudy.tagColor,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {metric.value}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${currentStudy.tagColor}15`,
                      color: currentStudy.tagColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUp size={22} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .case-study-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }
      `}</style>
    </section>
  );
}
