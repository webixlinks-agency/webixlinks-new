'use client';

import React, { useState } from 'react';
import {
  Layers,
  Database,
  Globe,
  TrendingUp,
  Cpu,
  Code2,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'all' | 'cms' | 'crm' | 'frontend' | 'backend' | 'seo';
  title: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  description: string;
  deliverables: string[];
  techTags: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'wp-cms',
    category: 'cms',
    title: 'WordPress & CMS Engineering',
    subtitle: 'High-Performance Content Ecosystems',
    icon: Globe,
    accentColor: '#2563eb',
    description:
      'From custom enterprise WordPress themes and high-scale WooCommerce architectures to modern Headless WordPress paired with Next.js, we build blisteringly fast, ultra-secure CMS platforms that marketing teams love.',
    deliverables: [
      'Custom Theme & Plugin Development',
      'Headless WordPress + Next.js / React Frontend',
      'High-Conversion WooCommerce E-Commerce',
      'Headless CMS: Strapi, Sanity, Contentful & Ghost',
      'Core Web Vitals 95+ Speed & Security Hardening',
    ],
    techTags: ['WordPress', 'Headless WP', 'WooCommerce', 'PHP', 'Strapi', 'Sanity', 'GraphQL'],
  },
  {
    id: 'crm-specialist',
    category: 'crm',
    title: 'CRM Specialist Services',
    subtitle: 'Salesforce, HubSpot & Zoho Automation',
    icon: Cpu,
    accentColor: '#f97316',
    description:
      'We turn fragmented sales data into automated revenue engines. Our certified CRM engineers design, configure, and deeply integrate Salesforce, HubSpot, and Zoho into your web applications, ERPs, and marketing stacks.',
    deliverables: [
      'HubSpot Setup, Custom Pipelines & CMS Hub',
      'Salesforce Custom Objects, Lightning & Apex APIs',
      'Zoho CRM, Zoho Creator & Deluge Scripting',
      'Two-Way Website & Lead Sync via Webhooks & REST',
      'Automated Lead Routing, Scoring & Drip Funnels',
    ],
    techTags: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Zapier', 'Webhooks', 'REST APIs'],
  },
  {
    id: 'fullstack-stacks',
    category: 'frontend',
    title: 'MERN & MEAN Stack Development',
    subtitle: 'End-to-End Modern Web Applications',
    icon: Layers,
    accentColor: '#8b5cf6',
    description:
      'Battle-tested full-stack architecture built for scale. Whether your enterprise standardizes on Angular for rigid typing or React for dynamic agility, our engineers architect robust MongoDB, Express, and Node foundations.',
    deliverables: [
      'MERN Stack (MongoDB, Express, React, Node.js)',
      'MEAN Stack (MongoDB, Express, Angular, Node.js)',
      'Real-Time WebSockets & Event-Driven Architecture',
      'Secure Auth (JWT, OAuth2, RBAC Multi-Tenancy)',
      'Microservices & Containerized Docker Deployments',
    ],
    techTags: ['React.js', 'Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Docker'],
  },
  {
    id: 'frontend-modern',
    category: 'frontend',
    title: 'Modern Frontend & 3D Web Apps',
    subtitle: 'React.js, Next.js & Angular v17+',
    icon: Code2,
    accentColor: '#0ea5e9',
    description:
      'Crafting mesmerizing user interfaces that wow clients and drive conversions. We leverage Next.js App Router for server-rendered speed, Angular signals for high-performance dashboards, and WebGL Three.js for interactive 3D.',
    deliverables: [
      'Next.js (App Router, Server Actions, SSR/SSG)',
      'React.js Enterprise Single-Page Applications',
      'Angular v17+ (Signals, Standalone Components, RxJS)',
      'Interactive 3D WebGL (Three.js, Shaders, Canvas)',
      'Rigorous Accessibility (WCAG 2.1 AA) & Responsive Design',
    ],
    techTags: ['Next.js', 'React.js', 'Angular', 'Three.js', 'TypeScript', 'Tailwind/CSS'],
  },
  {
    id: 'backend-cloud',
    category: 'backend',
    title: 'Enterprise Backend & API Architecture',
    subtitle: 'Laravel, Node.js & Python Services',
    icon: Database,
    accentColor: '#ef4444',
    description:
      'Rock-solid backend engineering that handles millions of requests without breaking a sweat. We develop high-concurrency microservices, data pipelines, and REST/GraphQL APIs across Laravel, Node.js, and Python.',
    deliverables: [
      'Laravel (PHP 8.3+, Livewire, Eloquent, Queues)',
      'Node.js (NestJS, Express, Fastify, Microservices)',
      'Python (FastAPI, Django, Async Data Pipelines)',
      'Database Modeling (PostgreSQL, MySQL, Redis, MongoDB)',
      'Cloud Deployment & Serverless Infrastructure (AWS, GCP)',
    ],
    techTags: ['Laravel', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'NestJS'],
  },
  {
    id: 'seo-growth',
    category: 'seo',
    title: 'Technical SEO & Search Dominance',
    subtitle: 'Data-Driven Search Engine Optimization',
    icon: TrendingUp,
    accentColor: '#10b981',
    description:
      'Beautiful code is useless if your customers cannot find it. We combine deep technical web engineering with high-impact SEO to achieve top search rankings, instant indexation, and dominant organic revenue growth.',
    deliverables: [
      'Deep Technical SEO & Site Architecture Audits',
      'Core Web Vitals Optimization (Sub-second LCP)',
      'Semantic Schema.org & Rich Snippets Implementation',
      'Programmatic SEO Engines for Scalable Keyword Capture',
      'International & Multi-Regional Hreflang SEO',
    ],
    techTags: ['Technical SEO', 'Core Web Vitals', 'Schema.org', 'PageSpeed', 'GSC', 'Sitemaps'],
  },
];

export default function ServicesSection() {
  const [filter, setFilter] = useState<'all' | 'cms' | 'crm' | 'frontend' | 'backend' | 'seo'>('all');

  const filteredServices =
    filter === 'all'
      ? servicesData
      : servicesData.filter((item) => item.category === filter);

  return (
    <section id="services" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Comprehensive Agency Capabilities</span>
          </div>
          <h2 className="section-title">
            Specialized Engineering For <span className="text-gradient">Every Layer</span> Of Your Stack
          </h2>
          <p className="section-subtitle">
            Whether you need custom WordPress and Headless CMS, CRM pipeline automation, full-stack React/Angular apps, or rock-solid Laravel/Python backends, our dedicated specialists deliver enterprise-grade execution.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {[
              { label: 'All Services', value: 'all' },
              { label: 'WordPress & CMS', value: 'cms' },
              { label: 'CRM Specialists', value: 'crm' },
              { label: 'Frontend & Stacks (MERN/MEAN)', value: 'frontend' },
              { label: 'Backend (Laravel/Node/Python)', value: 'backend' },
              { label: 'Technical SEO', value: 'seo' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background:
                    filter === tab.value
                      ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
                      : 'rgba(255, 255, 255, 0.85)',
                  color: filter === tab.value ? '#ffffff' : '#475569',
                  border:
                    filter === tab.value
                      ? '1px solid transparent'
                      : '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow:
                    filter === tab.value
                      ? '0 8px 20px -4px rgba(37, 99, 235, 0.35)'
                      : '0 1px 3px rgba(15, 23, 42, 0.05)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '28px',
          }}
          className="services-grid"
        >
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-panel"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                }}
              >
                {/* Subtle top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: service.accentColor,
                  }}
                />

                <div>
                  {/* Card Header with Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: `${service.accentColor}15`,
                        color: service.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: service.accentColor,
                        background: `${service.accentColor}12`,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '6px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {service.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: service.accentColor,
                      marginBottom: '16px',
                    }}
                  >
                    {service.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#64748b',
                        marginBottom: '12px',
                      }}
                    >
                      Key Deliverables & Specs:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.88rem',
                            color: '#334155',
                            lineHeight: 1.45,
                          }}
                        >
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              background: '#10b98120',
                              color: '#10b981',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech tags and CTA */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '24px',
                    }}
                  >
                    {service.techTags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          background: 'rgba(241, 245, 249, 0.9)',
                          color: '#475569',
                          border: '1px solid rgba(226, 232, 240, 0.8)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#estimator"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 18px',
                      background: 'rgba(248, 250, 252, 0.8)',
                      borderRadius: '12px',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      color: '#0f172a',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.borderColor = service.accentColor;
                      e.currentTarget.style.color = service.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(248, 250, 252, 0.8)';
                      e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                      e.currentTarget.style.color = '#0f172a';
                    }}
                  >
                    <span>Configure {service.title.split(' ')[0]} Scope</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
