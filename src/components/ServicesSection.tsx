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
  Server,
  Zap,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import TiltCard from '@/components/3d/TiltCard';

interface ServiceItem {
  id: string;
  number: string;
  category: 'all' | 'cms' | 'crm' | 'frontend' | 'backend' | 'seo';
  title: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  metricBadge: string;
  description: string;
  deliverables: string[];
  techTags: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'wp-cms',
    number: '01',
    category: 'cms',
    title: 'WordPress & Headless CMS Engineering',
    subtitle: 'Blisteringly Fast Content Engines',
    icon: Globe,
    accentColor: '#10b981',
    metricBadge: '<0.3s PageSpeed LCP',
    description:
      'We elevate WordPress from traditional blogging to enterprise headless performance. Custom Gutenberg blocks, high-converting WooCommerce systems, and decoupled Next.js/React frontends powered by WPGraphQL.',
    deliverables: [
      'Headless WordPress + Next.js 16 Edge Rendering',
      'Custom Gutenberg Block Suites & Full-Site Editing',
      'High-Scale WooCommerce & Custom Checkout Funnels',
      'Headless CMS: Strapi, Sanity, Contentful & Ghost',
      'Database Caching & High-Concurrency Hardening',
    ],
    techTags: ['WordPress', 'Headless WP', 'Next.js', 'WooCommerce', 'WPGraphQL', 'PHP', 'Sanity'],
  },
  {
    id: 'crm-specialist',
    number: '02',
    category: 'crm',
    title: 'CRM Specialist & Automation Services',
    subtitle: 'Salesforce, HubSpot & Zoho Integrations',
    icon: Cpu,
    accentColor: '#059669',
    metricBadge: 'Zero Lead Drop-off',
    description:
      'Transform fragmented data into automated revenue engines. Our CRM architects configure custom objects, bi-directional web application syncs, lead routing, and marketing automation for Salesforce, HubSpot, and Zoho.',
    deliverables: [
      'Salesforce Custom Objects, Lightning & Apex REST APIs',
      'HubSpot CMS Hub, Operations Hub & Custom Pipelines',
      'Zoho CRM, Zoho Creator & Deluge Scripting Automation',
      'Bi-Directional Web Application & Webhook Lead Sync',
      'Automated Lead Scoring, Drip Campaigns & Slack Alerts',
    ],
    techTags: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Zapier', 'Webhooks', 'REST APIs', 'Apex'],
  },
  {
    id: 'frontend-modern',
    number: '03',
    category: 'frontend',
    title: 'Modern Frontend & 3D Web Apps',
    subtitle: 'React.js, Next.js 16 & Angular v18+',
    icon: Code2,
    accentColor: '#06b6d4',
    metricBadge: 'Fluid 60FPS Micro-Interactions',
    description:
      'Building memorable, high-converting user interfaces with cutting-edge engineering. We leverage Next.js App Router for server-rendered speed, Angular signals for complex enterprise portals, and GSAP for micro-interactions.',
    deliverables: [
      'Next.js 16 (Turbopack, Server Actions, Edge SSR/SSG)',
      'Enterprise React.js Single-Page Applications',
      'Angular v18+ (Signals, Standalone Components, RxJS)',
      'Fluid GSAP & CSS 3D Interactive UI Micro-Interactions',
      'Strict WCAG 2.1 AA Accessibility & Cross-Browser Speed',
    ],
    techTags: ['Next.js 16', 'React.js', 'Angular', 'GSAP', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'fullstack-stacks',
    number: '04',
    category: 'frontend',
    title: 'MERN & MEAN Stack Development',
    subtitle: 'End-to-End Scalable Architectures',
    icon: Layers,
    accentColor: '#6366f1',
    metricBadge: '100% Type-Safe Full-Stack',
    description:
      'Turnkey web applications built from ground zero. Whether your enterprise relies on React for rapid agility or Angular for strict type safety, our team builds robust MongoDB, Express, and Node foundations.',
    deliverables: [
      'MERN Stack (MongoDB, Express, React, Node.js)',
      'MEAN Stack (MongoDB, Express, Angular, Node.js)',
      'Real-Time WebSockets & Event-Driven Architecture',
      'JWT, OAuth2, RBAC Multi-Tenancy Authentication',
      'Containerized Docker & Kubernetes Deployment Pipelines',
    ],
    techTags: ['MongoDB', 'Express', 'React', 'Angular', 'Node.js', 'TypeScript', 'Docker'],
  },
  {
    id: 'backend-enterprise',
    number: '05',
    category: 'backend',
    title: 'Enterprise Backends: Laravel, Node & Python',
    subtitle: 'High-Concurrency Distributed Systems',
    icon: Server,
    accentColor: '#059669',
    metricBadge: '40K+ Req/Sec Throughput',
    description:
      'Bulletproof server architectures engineered for extreme throughput. We construct distributed APIs using Laravel Octane, Node.js microservices, and Python FastAPI/Django with asynchronous task queues and Redis.',
    deliverables: [
      'Laravel (Octane, Horizon, Eloquent ORM, Livewire)',
      'Node.js (Fastify, NestJS, Express, Microservices)',
      'Python (FastAPI, Django, Celery, AI/ML Pipelines)',
      'High-Performance PostgreSQL & Redis Distributed Caches',
      'GraphQL & RESTful API Gateways with Zero-Downtime CI/CD',
    ],
    techTags: ['Laravel', 'Node.js', 'Python FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'technical-seo',
    number: '06',
    category: 'seo',
    title: 'Technical SEO & Core Web Vitals',
    subtitle: 'Search Dominance & Lighthouse 100/100',
    icon: TrendingUp,
    accentColor: '#10b981',
    metricBadge: '100/100 Lighthouse Guarantee',
    description:
      'Code-level search optimization that algorithms reward. We engineer programmatic SEO architectures, complete JSON-LD schema networks, automated sitemaps, and guarantee sub-second mobile rendering.',
    deliverables: [
      'Core Web Vitals Optimization (LCP < 0.3s, FID < 2ms, CLS 0)',
      'Schema.org Graph Generation (Organization, Article, FAQ)',
      'Server-Side Rendering & Edge Dynamic Pre-Rendering',
      'Crawl Budget Management & XML Sitemap Automation',
      'Internationalization & Multi-Regional Hreflang SEO',
    ],
    techTags: ['Lighthouse 100', 'Schema.org', 'JSON-LD', 'Core Web Vitals', 'SSR', 'Edge SEO'],
  },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cms' | 'crm' | 'frontend' | 'backend' | 'seo'>('all');

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <section
      id="services"
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
            <Sparkles size={14} />
            <span>Full-Spectrum Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering services built for{' '}
            <span className="text-gradient-emerald">market leaders</span>.
          </h2>
          <p className="section-subtitle">
            From modern headless CMS and automated CRM pipelines to full-stack architectures and technical SEO, we execute with obsessive precision.
          </p>
        </div>

        {/* Filter Category Tabs (Averi.ai style pill selector) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '48px',
          }}
        >
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'cms', label: 'WordPress & CMS' },
            { id: 'crm', label: 'CRM Specialist' },
            { id: 'frontend', label: 'Frontend & 3D' },
            { id: 'backend', label: 'Enterprise Backend' },
            { id: 'seo', label: 'Technical SEO' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#ffffff' : '#334155',
                  background: isActive ? '#090d16' : '#ffffff',
                  border: isActive ? '1px solid #090d16' : '1px solid rgba(15, 23, 42, 0.08)',
                  boxShadow: isActive ? '0 4px 14px rgba(9, 13, 22, 0.25)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Bento Grid with 3D Tilt Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '24px',
          }}
          className="services-grid"
        >
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <TiltCard
                key={service.id}
                maxTilt={10}
                perspective={1200}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  className="glass-panel"
                  style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    borderRadius: '24px',
                    background: 'rgba(255, 255, 255, 0.94)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                  }}
                >
                  <div>
                    {/* Top Header: Number Pill & Metric Badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                      }}
                    >
                      <span className="pill-number">{service.number}</span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#059669',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <Zap size={11} color="#10b981" />
                        <span>{service.metricBadge}</span>
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'rgba(16, 185, 129, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#059669',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#090d16', lineHeight: 1.25 }}>
                          {service.title}
                        </h3>
                        <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>
                          {service.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#090d16', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                        Key Deliverables
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                            <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Tech Stack Pills & Action Link */}
                  <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(15, 23, 42, 0.06)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {service.techTags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 9px',
                            borderRadius: '6px',
                            background: '#f1f5f9',
                            color: '#334155',
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/estimator"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        color: '#059669',
                      }}
                    >
                      <span>Request Engineering Scope</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
