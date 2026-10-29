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
} from 'lucide-react';

interface TechDetail {
  name: string;
  category: string;
  level: string;
  highlight: string;
  useCase: string;
  color: string;
}

const detailedTechList: TechDetail[] = [
  // CMS
  {
    name: 'WordPress & WooCommerce',
    category: 'CMS',
    level: '99% Senior Mastery',
    highlight: 'Custom Plugins, Gutenberg Blocks & High-Conversion E-Commerce',
    useCase: 'Enterprise publishing, multisite networks, and scalable merchant platforms.',
    color: '#21759b',
  },
  {
    name: 'Headless WordPress',
    category: 'CMS',
    level: '98% Senior Mastery',
    highlight: 'Decoupled WP REST API & WPGraphQL with Next.js App Router',
    useCase: 'Sub-second page speeds with familiar content editor workflows.',
    color: '#0073aa',
  },
  {
    name: 'Strapi & Sanity CMS',
    category: 'CMS',
    level: '95% Expert',
    highlight: 'Structured Content Modeling, Realtime Drafts & Webhooks',
    useCase: 'Omnichannel content delivery across web, mobile apps, and smart displays.',
    color: '#4945ff',
  },

  // CRM
  {
    name: 'Salesforce CRM',
    category: 'CRM',
    level: '96% Certified Specialist',
    highlight: 'Custom Apex Triggers, Lightning Web Components & REST Sync',
    useCase: 'Complex enterprise sales operations, bi-directional lead pipelines.',
    color: '#00a1e0',
  },
  {
    name: 'HubSpot Ecosystem',
    category: 'CRM',
    level: '97% Certified Partner',
    highlight: 'Custom Properties, Automated Workflows & CMS Hub Portals',
    useCase: 'Full-funnel inbound marketing, lead scoring, and automated sales outreach.',
    color: '#ff7a59',
  },
  {
    name: 'Zoho CRM & Creator',
    category: 'CRM',
    level: '94% Expert',
    highlight: 'Deluge Scripting, Custom Blueprints & Multi-App Integrations',
    useCase: 'Cost-effective end-to-end ERP/CRM custom process automation.',
    color: '#d32f2f',
  },

  // Frontend
  {
    name: 'Next.js 15 & 16',
    category: 'Frontend',
    level: '99% Architect Level',
    highlight: 'App Router, Server Actions, Partial Prerendering & Edge Runtime',
    useCase: 'SEO-critical platforms, high-velocity consumer applications.',
    color: '#0f172a',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    level: '99% Senior Mastery',
    highlight: 'Concurrent Rendering, Custom Hooks, Zustand & Context Architecture',
    useCase: 'Dynamic interactive SPAs, SaaS dashboards, and WebGL widgets.',
    color: '#0ea5e9',
  },
  {
    name: 'Angular (v17+)',
    category: 'Frontend',
    level: '96% Senior Mastery',
    highlight: 'Signals Reactivity, Standalone Components, Strict TypeScript & RxJS',
    useCase: 'Mission-critical enterprise software, banking portals, and telemetry suites.',
    color: '#dd0031',
  },

  // Stacks
  {
    name: 'MERN Stack',
    category: 'Stacks',
    level: '98% Full-Stack Mastery',
    highlight: 'MongoDB + Express.js + React.js + Node.js End-to-End',
    useCase: 'Rapidly scaling startups, dynamic content feeds, and social web apps.',
    color: '#8b5cf6',
  },
  {
    name: 'MEAN Stack',
    category: 'Stacks',
    level: '97% Full-Stack Mastery',
    highlight: 'MongoDB + Express.js + Angular + Node.js Enterprise Stacks',
    useCase: 'Corporate workflow systems with rigorous type-safe component contracts.',
    color: '#ec4899',
  },

  // Backend
  {
    name: 'Laravel (PHP 8.3+)',
    category: 'Backend',
    level: '98% Senior Mastery',
    highlight: 'Eloquent ORM, Horizon Queues, Livewire & Inertia.js API Gateways',
    useCase: 'Robust business logic, subscription engines, and automated reports.',
    color: '#ff2d20',
  },
  {
    name: 'Node.js & NestJS',
    category: 'Backend',
    level: '99% Senior Mastery',
    highlight: 'Asynchronous Event Loop, Fastify, Microservices & WebSockets',
    useCase: 'Real-time collaborative tools, streaming endpoints, and high-throughput APIs.',
    color: '#22c55e',
  },
  {
    name: 'Python (FastAPI & Django)',
    category: 'Backend',
    level: '97% Senior Mastery',
    highlight: 'Async Pydantic Validation, Django ORM, Celery & AI/LLM Pipelines',
    useCase: 'Machine learning model serving, scientific data processing, backend automation.',
    color: '#3776ab',
  },

  // Databases & SEO
  {
    name: 'PostgreSQL & MongoDB',
    category: 'Database',
    level: '98% Data Architects',
    highlight: 'ACID Relational Schemas, JSONB Indexes, Sharding & Repl-Sets',
    useCase: 'Zero-downtime persistence, analytical aggregates, and document storage.',
    color: '#0284c7',
  },
  {
    name: 'Technical SEO Engine',
    category: 'SEO',
    level: '99% Search Experts',
    highlight: 'Lighthouse 100s, JSON-LD Schema, Server-Side Rendering & Core Web Vitals',
    useCase: 'First-page Google rankings, organic buyer acquisition at zero ad cost.',
    color: '#10b981',
  },
];

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArchPattern, setSelectedArchPattern] = useState<'headless' | 'crm-pipeline' | 'fullstack'>('headless');

  const filteredTech =
    selectedCategory === 'All'
      ? detailedTechList
      : detailedTechList.filter((item) => item.category === selectedCategory);

  const categories = ['All', 'CMS', 'CRM', 'Frontend', 'Stacks', 'Backend', 'Database', 'SEO'];

  return (
    <section id="tech-stack" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Modern Technology Matrix</span>
          </div>
          <h2 className="section-title">
            Engineered With <span className="text-gradient">Industry-Standard</span> Frameworks
          </h2>
          <p className="section-subtitle">
            We don’t believe in one-size-fits-all. We select and master the exact technology stack that delivers the highest speed, lowest latency, and easiest long-term maintainability for your project.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '32px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background:
                    selectedCategory === cat
                      ? '#0f172a'
                      : 'rgba(255, 255, 255, 0.85)',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  border:
                    selectedCategory === cat
                      ? '1px solid #0f172a'
                      : '1px solid rgba(226, 232, 240, 0.85)',
                  boxShadow:
                    selectedCategory === cat
                      ? '0 6px 16px rgba(15, 23, 42, 0.2)'
                      : '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                {cat === 'All' ? '⚡ Complete Tech Stack' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Professional Architecture Blueprint & Matrix Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            marginBottom: '40px',
          }}
          className="tech-matrix-layout"
        >
          {/* Left Column: Interactive Enterprise Blueprint Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.85) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={20} color="#2563eb" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>
                    Production Architecture Blueprints
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                  }}
                >
                  99.99% Uptime
                </span>
              </div>

              {/* Architecture Selector Tabs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '6px',
                  background: 'rgba(241, 245, 249, 0.8)',
                  padding: '4px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                }}
              >
                {[
                  { id: 'headless', label: 'Headless WP' },
                  { id: 'crm-pipeline', label: 'CRM Sync Hub' },
                  { id: 'fullstack', label: 'MERN / MEAN' },
                ].map((pattern) => (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedArchPattern(pattern.id as any)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      background:
                        selectedArchPattern === pattern.id ? '#ffffff' : 'transparent',
                      color: selectedArchPattern === pattern.id ? '#2563eb' : '#64748b',
                      boxShadow:
                        selectedArchPattern === pattern.id
                          ? '0 2px 8px rgba(15, 23, 42, 0.08)'
                          : 'none',
                    }}
                  >
                    {pattern.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Architecture Diagram Details */}
              {selectedArchPattern === 'headless' && (
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Headless WordPress + Next.js App Router
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Decoupled architecture combining familiar WordPress content authoring with the blazing speed and security of Next.js static prerendering and edge caching.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Globe size={18} color="#2563eb" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        Frontend: Next.js 15 (Edge SSR + Incremental Static Regeneration)
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Layers size={18} color="#06b6d4" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        API Layer: WPGraphQL & Instant Invalidation Webhooks
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Database size={18} color="#7c3aed" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        CMS: Hardened WordPress Custom Post Types & Gutenberg Fields
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedArchPattern === 'crm-pipeline' && (
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Salesforce, HubSpot & Zoho Two-Way Automation
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Zero-leakage lead ingestion pipeline that validates web inquiries, enriches customer records, and synchronizes real-time status across ERP and CRM endpoints.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Globe size={18} color="#f97316" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        HubSpot Workflows & Automated Lead Nurturing Triggers
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Layers size={18} color="#00a1e0" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        Salesforce Apex REST Controllers & Custom Object Mapping
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Database size={18} color="#22c55e" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        Node.js & Redis Queue for Guaranteed 100% Delivery Sync
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedArchPattern === 'fullstack' && (
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Enterprise Full-Stack (MERN & MEAN Stacks)
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Scalable multi-tenant architecture featuring real-time WebSockets, microservices in Node.js / Laravel / Python, and strict TypeScript contracts.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Globe size={18} color="#8b5cf6" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        Frontend: React.js or Angular v17+ with Signals State
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Layers size={18} color="#ef4444" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        Backend: Laravel 11 Microservices or Node.js NestJS WebSockets
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                      <Database size={18} color="#0284c7" />
                      <div style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                        Persistence: MongoDB Sharded Cluster + PostgreSQL ACID
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Performance telemetry pill */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(226, 232, 240, 0.9)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#2563eb" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  Sub-50ms TTFB
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={16} color="#10b981" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  Zero-Vulnerability QA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Technology Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px',
            }}
          >
            {filteredTech.slice(0, 6).map((tech) => (
              <div
                key={tech.name}
                className="glass-panel"
                style={{
                  padding: '24px',
                  borderRadius: '18px',
                  borderLeft: `4px solid ${tech.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: tech.color,
                        background: `${tech.color}15`,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tech.category}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <CheckCircle size={12} />
                      {tech.level}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '6px',
                    }}
                  >
                    {tech.name}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#475569',
                      marginBottom: '10px',
                      lineHeight: 1.45,
                    }}
                  >
                    {tech.highlight}
                  </p>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                    }}
                  >
                    {tech.useCase}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View full matrix bar */}
        <div
          className="glass-panel"
          style={{
            padding: '20px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.8) 100%)',
          }}
        >
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
              Need a bespoke tech stack combination or custom legacy migration?
            </div>
            <div style={{ fontSize: '0.86rem', color: '#64748b' }}>
              We architect custom hybrid solutions (e.g. Next.js + WordPress REST + Laravel Microservices + HubSpot Webhooks).
            </div>
          </div>

          <a href="#contact" className="btn-secondary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
            <span>Consult An Enterprise Architect</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .tech-matrix-layout {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
