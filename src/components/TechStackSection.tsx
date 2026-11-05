'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle,
  Cpu,
  Layers,
  Database,
  Globe,
  ArrowRight,
  Shield,
  Zap,
  Server,
  Code2,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

interface TechDetail {
  name: string;
  category: 'CMS' | 'CRM' | 'Frontend' | 'Backend' | 'Database' | 'SEO';
  level: string;
  highlight: string;
  useCase: string;
  badge: string;
}

const detailedTechList: TechDetail[] = [
  // CMS
  {
    name: 'WordPress & WooCommerce',
    category: 'CMS',
    level: '99% Senior Mastery',
    highlight: 'Custom Plugins, Gutenberg Blocks & High-Conversion E-Commerce',
    useCase: 'Enterprise publishing, multisite networks, and scalable merchant platforms.',
    badge: 'Enterprise Core',
  },
  {
    name: 'Headless WordPress',
    category: 'CMS',
    level: '98% Senior Mastery',
    highlight: 'Decoupled WP REST API & WPGraphQL with Next.js App Router',
    useCase: 'Sub-second page speeds with familiar content editor workflows.',
    badge: 'Flagship Architecture',
  },
  {
    name: 'Strapi & Sanity CMS',
    category: 'CMS',
    level: '95% Expert',
    highlight: 'Structured Content Modeling, Realtime Drafts & Webhooks',
    useCase: 'Omnichannel content delivery across web, mobile apps, and smart displays.',
    badge: 'Modern Headless',
  },

  // CRM
  {
    name: 'Salesforce CRM',
    category: 'CRM',
    level: '96% Certified Specialist',
    highlight: 'Custom Apex Triggers, Lightning Web Components & REST Sync',
    useCase: 'Complex enterprise sales operations, bi-directional lead pipelines.',
    badge: 'Enterprise CRM',
  },
  {
    name: 'HubSpot Ecosystem',
    category: 'CRM',
    level: '97% Certified Partner',
    highlight: 'Custom Properties, Automated Workflows & CMS Hub Portals',
    useCase: 'Full-funnel inbound marketing, lead scoring, and automated sales outreach.',
    badge: 'Inbound Growth',
  },
  {
    name: 'Zoho CRM & Creator',
    category: 'CRM',
    level: '94% Expert',
    highlight: 'Deluge Scripting, Custom Blueprints & Multi-App Integrations',
    useCase: 'Cost-effective end-to-end ERP/CRM custom process automation.',
    badge: 'Custom Workflows',
  },

  // Frontend
  {
    name: 'Next.js 16 (App Router)',
    category: 'Frontend',
    level: '99% Architect Level',
    highlight: 'Turbopack, Server Actions, Partial Prerendering & Edge Runtime',
    useCase: 'SEO-critical platforms, high-velocity consumer applications.',
    badge: 'Production Edge',
  },
  {
    name: 'React.js 19',
    category: 'Frontend',
    level: '99% Senior Mastery',
    highlight: 'Concurrent Rendering, Custom Hooks & Component Design Systems',
    useCase: 'Complex dynamic SaaS applications, interactive portals, and SPAs.',
    badge: 'Component Core',
  },
  {
    name: 'Angular (v18+)',
    category: 'Frontend',
    level: '96% Expert',
    highlight: 'Signals, Standalone Components, RxJS & Enterprise Typing',
    useCase: 'Rigid enterprise banking, health systems, and high-scale internal portals.',
    badge: 'Enterprise Grade',
  },

  // Backend
  {
    name: 'Laravel (Octane / Swoole)',
    category: 'Backend',
    level: '98% Senior Mastery',
    highlight: 'High-Throughput APIs, Horizon Queue Workers & Eloquent ORM',
    useCase: 'Rapid enterprise SaaS backends, financial integrations, and subscription billing.',
    badge: 'Extreme Throughput',
  },
  {
    name: 'Node.js & Fastify',
    category: 'Backend',
    level: '99% Senior Mastery',
    highlight: 'Asynchronous Event Loop, Microservices & WebSocket Clusters',
    useCase: 'Real-time collaborative tools, streaming APIs, and GraphQL gateways.',
    badge: 'Real-Time Edge',
  },
  {
    name: 'Python (FastAPI & Django)',
    category: 'Backend',
    level: '97% Senior Mastery',
    highlight: 'Async REST Endpoints, Celery Distributed Tasks & AI/ML Integrations',
    useCase: 'Data-intensive platforms, machine learning pipelines, and secure enterprise APIs.',
    badge: 'AI & Data Ready',
  },

  // Database
  {
    name: 'PostgreSQL & Redis',
    category: 'Database',
    level: '98% Expert',
    highlight: 'Complex Relational Schema, ACID Compliance & In-Memory Caching',
    useCase: 'High-concurrency transactional databases with sub-millisecond cache hits.',
    badge: 'Core Persistence',
  },
  {
    name: 'MongoDB (MERN/MEAN)',
    category: 'Database',
    level: '96% Senior Mastery',
    highlight: 'Document Aggregations, Flexible Schemas & Atlas Sharding',
    useCase: 'High-velocity document storage, mobile sync, and unstructured analytics.',
    badge: 'Document Scale',
  },

  // SEO
  {
    name: 'Technical SEO & Core Web Vitals',
    category: 'SEO',
    level: '100% Certified',
    highlight: '100/100 Lighthouse Performance, JSON-LD Schema & Indexing Automation',
    useCase: 'Organic search domination, international hreflang tags, and crawl budget control.',
    badge: '100/100 Guarantee',
  },
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [blueprintTab, setBlueprintTab] = useState<'headless' | 'crm' | 'fullstack'>('headless');

  const categories = ['All', 'CMS', 'CRM', 'Frontend', 'Backend', 'Database', 'SEO'];

  const filteredTech =
    activeCategory === 'All'
      ? detailedTechList
      : detailedTechList.filter((item) => item.category === activeCategory);

  return (
    <section
      id="tech-stack"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag section-tag-emerald">
            <Cpu size={14} />
            <span>Architecture &amp; Stacks</span>
          </div>
          <h2 className="section-title">
            Engineered with modern, battle-tested{' '}
            <span className="text-gradient-emerald">technologies</span>.
          </h2>
          <p className="section-subtitle">
            We avoid fragile templates and rigid vendor lock-in. Every stack we deploy is curated for speed, maintainability, and enterprise durability.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram (Inspired by Image 2 Code Craft) */}
        <div
          className="glass-panel"
          style={{
            padding: '28px',
            borderRadius: '24px',
            marginBottom: '48px',
            background: 'rgba(255, 255, 255, 0.94)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span className="pill-number">SYSTEM BLUEPRINT</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 550, color: '#090d16', marginTop: '6px' }}>
                Enterprise Data &amp; Application Topology
              </h3>
            </div>

            {/* Architecture Selector Tabs */}
            <div style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '4px', borderRadius: '9999px' }}>
              <button
                onClick={() => setBlueprintTab('headless')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: blueprintTab === 'headless' ? 600 : 450,
                  color: blueprintTab === 'headless' ? '#ffffff' : '#475569',
                  background: blueprintTab === 'headless' ? '#090d16' : 'transparent',
                }}
              >
                Headless WordPress / CMS
              </button>
              <button
                onClick={() => setBlueprintTab('crm')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: blueprintTab === 'crm' ? 600 : 450,
                  color: blueprintTab === 'crm' ? '#ffffff' : '#475569',
                  background: blueprintTab === 'crm' ? '#090d16' : 'transparent',
                }}
              >
                CRM Automation Hub
              </button>
              <button
                onClick={() => setBlueprintTab('fullstack')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: blueprintTab === 'fullstack' ? 600 : 450,
                  color: blueprintTab === 'fullstack' ? '#ffffff' : '#475569',
                  background: blueprintTab === 'fullstack' ? '#090d16' : 'transparent',
                }}
              >
                Full-Stack Microservices
              </button>
            </div>
          </div>

          {/* Visual Architecture Steps */}
          {blueprintTab === 'headless' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="blueprint-grid">
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#059669', textTransform: 'uppercase' }}>01 Content Source</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>WordPress &amp; Headless CMS</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Custom Gutenberg blocks, ACF Pro, GraphQL API endpoints.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase' }}>02 Edge Webhooks</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Instant On-Demand ISR</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Edge revalidation in &lt;200ms when editors hit publish.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase' }}>03 Presentation</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Next.js 16 Edge Rendering</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Server components, fluid GSAP micro-interactions, zero layout shifts.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#8b5cf6', textTransform: 'uppercase' }}>04 Global CDN &amp; SEO</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>100/100 Core Web Vitals</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Cloudflare edge caching, JSON-LD Schema, sub-second LCP globally.</div>
              </div>
            </div>
          )}

          {blueprintTab === 'crm' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="blueprint-grid">
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase' }}>01 Lead Intake</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Web Applications</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Next.js / React forms with instant client-side validation &amp; honeypots.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#059669', textTransform: 'uppercase' }}>02 Smart Routing</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Automated Scoring</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Enrichment via ZoomInfo/Clearbit APIs and automatic ICP tiering.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase' }}>03 CRM Sync</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Salesforce / HubSpot / Zoho</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Bi-directional object mapping, pipeline creation, and ownership alerts.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase' }}>04 Sales Velocity</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Zero Drop-Off SLA</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Slack notifications, instant calendar dispatch, +340% velocity.</div>
              </div>
            </div>
          )}

          {blueprintTab === 'fullstack' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="blueprint-grid">
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase' }}>01 Frontend Client</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>React 19 / Angular 18</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Type-safe state machines, reactive signals, 60fps micro-animations.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#059669', textTransform: 'uppercase' }}>02 API Gateways</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Node / Laravel / Python</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>40K+ req/s with Octane, Fastify &amp; FastAPI async concurrency.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase' }}>03 Data Tier</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>PostgreSQL &amp; Redis</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ACID relational models with sub-millisecond memory caching.</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase' }}>04 DevOps Delivery</span>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#090d16', margin: '4px 0' }}>Docker &amp; AWS/GCP</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Zero-downtime rolling updates, automated testing, 99.99% uptime.</div>
              </div>
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '36px' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? '#059669' : '#475569',
                  background: isActive ? 'rgba(16, 185, 129, 0.12)' : '#ffffff',
                  border: isActive ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(15, 23, 42, 0.08)',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '18px',
          }}
          className="tech-grid"
        >
          {filteredTech.map((item, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      color: '#059669',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>
                    {item.level}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#090d16', marginBottom: '6px' }}>
                  {item.name}
                </h4>

                <p style={{ fontSize: '0.84rem', fontWeight: 500, color: '#059669', marginBottom: '8px' }}>
                  {item.highlight}
                </p>

                <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.55 }}>
                  {item.useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .blueprint-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .blueprint-grid {
            grid-template-columns: 1fr !important;
          }
          .tech-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
