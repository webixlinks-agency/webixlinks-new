'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Zap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  TrendingUp,
  Server,
  Layers,
} from 'lucide-react';
import Link from 'next/link';

interface PromptPreset {
  id: string;
  icon: any;
  label: string;
  question: string;
  recommendation: {
    title: string;
    stack: string[];
    timeline: string;
    roi: string;
    summary: string;
  };
}

const presets: PromptPreset[] = [
  {
    id: 'wp-next',
    icon: Globe,
    label: 'Headless WP Migration',
    question: 'How do we migrate our existing WordPress site to Headless Next.js?',
    recommendation: {
      title: 'Decoupled Headless WordPress + Next.js 16',
      stack: ['WordPress REST/WPGraphQL', 'Next.js 16 (App Router)', 'Cloudflare Edge ISR'],
      timeline: '4 – 6 Weeks',
      roi: 'LCP under 0.3s, +45% organic SEO rankings, zero Gutenberg editor workflow disruption.',
      summary:
        'We decouple your frontend into edge-rendered Next.js Server Components while your editors keep their familiar WordPress dashboard. Content publishes trigger instant On-Demand ISR revalidation in <200ms.',
    },
  },
  {
    id: 'crm-sync',
    icon: Cpu,
    label: 'Salesforce & HubSpot Sync',
    question: 'How can we connect web leads bidirectionally with our CRM?',
    recommendation: {
      title: 'Event-Driven CRM Ingestion & Scoring Hub',
      stack: ['Salesforce Lightning REST', 'HubSpot API v3', 'Node.js Webhook Hub', 'Redis'],
      timeline: '3 – 5 Weeks',
      roi: 'Zero lead leakage, instant lead scoring, and automated deal pipeline routing.',
      summary:
        'We engineer a centralized webhook service that validates form leads, triggers Clearbit enrichment, injects contacts into Salesforce/HubSpot, and notifies sales reps in Slack with scheduled discovery links.',
    },
  },
  {
    id: 'fullstack-saas',
    icon: Server,
    label: 'React + Laravel / Node API',
    question: 'What architecture is best for our high-throughput SaaS application?',
    recommendation: {
      title: 'MERN / MEAN or Next.js + Laravel Octane',
      stack: ['React 19 / Angular 18', 'Laravel Octane or Fastify', 'PostgreSQL', 'Redis'],
      timeline: '6 – 10 Weeks',
      roi: '40,000+ requests/second throughput with sub-20ms database response.',
      summary:
        'A clean separation of concerns: Next.js or Angular client consuming a stateless, horizontally scalable API built with Laravel Octane or Node.js Fastify, backed by ACID PostgreSQL and Redis pub/sub.',
    },
  },
  {
    id: 'seo-audit',
    icon: TrendingUp,
    label: '100/100 Core Web Vitals',
    question: 'How can our current web application achieve a 100/100 Lighthouse score?',
    recommendation: {
      title: 'Full Technical SEO & Speed Calibration',
      stack: ['Lighthouse 100 Engine', 'JSON-LD Schema', 'Edge Image CDN', 'Zero-CLS Layout'],
      timeline: '2 – 3 Weeks',
      roi: 'Guaranteed 100/100 Lighthouse Performance, Accessibility, Best Practices, and SEO.',
      summary:
        'We optimize font loading, eliminate render-blocking assets, implement automated Schema.org entity graphs, and configure edge caching to pass all Google Core Web Vitals with flying colors.',
    },
  },
];

export default function InteractiveAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<PromptPreset | null>(presets[0]);
  const [chatLog, setChatLog] = useState<{ role: 'user' | 'assistant'; text: string; data?: any }[]>([
    {
      role: 'assistant',
      text: 'Hello! I am AuraStack’s Technical Architecture Assistant. Select an architecture challenge below or ask a custom question to review our recommended engineering scope.',
    },
  ]);

  const handleSelectPreset = (preset: PromptPreset) => {
    setActivePreset(preset);
    setChatLog((prev) => [
      ...prev,
      { role: 'user', text: preset.question },
      {
        role: 'assistant',
        text: `Here is our calibrated engineering recommendation for ${preset.label}:`,
        data: preset.recommendation,
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Pill (ChatSpark inspired) */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99,
        }}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              background: '#090d16',
              color: '#ffffff',
              borderRadius: '9999px',
              boxShadow: '0 12px 30px -4px rgba(9, 13, 22, 0.4), 0 0 20px rgba(16, 185, 129, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="hover:scale-105"
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <Sparkles size={14} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.1 }}>
                Interactive Scope Advisor
              </div>
              <div style={{ fontSize: '0.68rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
                <span>Simulate Architecture</span>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Interactive Modal / Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: 'clamp(320px, 92vw, 440px)',
            maxHeight: '85vh',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 30px rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(15, 23, 42, 0.1)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: '#090d16',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>AuraStack Scope Advisor</div>
                <div style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
                  <span>Real-Time Architecture Engine</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Architecture Presets */}
          <div
            style={{
              padding: '12px 16px',
              background: '#f8fafc',
              borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
              1-Click Architecture Prompts
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {presets.map((preset) => {
                const Icon = preset.icon;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      background: '#ffffff',
                      color: '#334155',
                      border: '1px solid rgba(15, 23, 42, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <Icon size={12} color="#059669" />
                    <span>{preset.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              padding: '16px',
              overflowY: 'auto',
              flex: 1,
              maxHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '92%',
                }}
              >
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '16px',
                    fontSize: '0.84rem',
                    lineHeight: 1.5,
                    background: msg.role === 'user' ? '#090d16' : '#f8fafc',
                    color: msg.role === 'user' ? '#ffffff' : '#1e293b',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(15, 23, 42, 0.06)',
                  }}
                >
                  {msg.text}

                  {/* Render Structured Recommendation Card if present */}
                  {msg.data && (
                    <div
                      style={{
                        marginTop: '10px',
                        padding: '12px',
                        background: '#ffffff',
                        borderRadius: '12px',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      <div style={{ fontWeight: 800, color: '#090d16', fontSize: '0.88rem', marginBottom: '4px' }}>
                        {msg.data.title}
                      </div>

                      <div style={{ fontSize: '0.78rem', color: '#475569', marginBottom: '8px' }}>
                        {msg.data.summary}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                        {msg.data.stack.map((item: string, i: number) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.68rem',
                              fontFamily: 'var(--font-mono)',
                              background: '#f1f5f9',
                              color: '#059669',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontWeight: 600,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#334155', fontWeight: 700, paddingTop: '6px', borderTop: '1px solid #f1f5f9' }}>
                        <span>⏱ Timeline: {msg.data.timeline}</span>
                        <span style={{ color: '#059669' }}>✓ Verified Architecture</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Call-to-Action */}
          <div
            style={{
              padding: '14px 16px',
              borderTop: '1px solid rgba(15, 23, 42, 0.06)',
              background: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
              Want to lock this scope in?
            </div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{
                padding: '8px 16px',
                fontSize: '0.78rem',
              }}
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
