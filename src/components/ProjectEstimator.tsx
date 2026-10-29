'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Sparkles,
  ArrowRight,
  Clock,
  Check,
} from 'lucide-react';

export default function ProjectEstimator() {
  const [service, setService] = useState('fullstack');
  const [frontend, setFrontend] = useState('nextjs');
  const [backend, setBackend] = useState('node');
  const [scale, setScale] = useState('growth');
  const [timeline, setTimeline] = useState('standard');

  // Dynamic pricing algorithm based on selected architecture
  const calculateEstimate = () => {
    let baseMin = 4500;
    let baseMax = 7500;
    let weeks = 4;

    // Service pricing factor
    if (service === 'wp-cms') {
      baseMin = 3800;
      baseMax = 6800;
      weeks = 3;
    } else if (service === 'crm') {
      baseMin = 4200;
      baseMax = 7200;
      weeks = 3;
    } else if (service === 'fullstack') {
      baseMin = 5800;
      baseMax = 11500;
      weeks = 5;
    } else if (service === 'backend') {
      baseMin = 4800;
      baseMax = 8900;
      weeks = 4;
    } else if (service === 'seo') {
      baseMin = 2400;
      baseMax = 4500;
      weeks = 2;
    }

    // Scale multiplier
    if (scale === 'mvp') {
      baseMin *= 0.8;
      baseMax *= 0.85;
      weeks = Math.max(2, Math.round(weeks * 0.75));
    } else if (scale === 'growth') {
      baseMin *= 1.25;
      baseMax *= 1.35;
      weeks = Math.round(weeks * 1.2);
    } else if (scale === 'enterprise') {
      baseMin *= 2.1;
      baseMax *= 2.4;
      weeks = Math.round(weeks * 1.8);
    }

    // Timeline urgency multiplier
    if (timeline === 'accelerated') {
      baseMin *= 1.2;
      baseMax *= 1.25;
      weeks = Math.max(2, Math.round(weeks * 0.65));
    }

    return {
      min: Math.round(baseMin / 100) * 100,
      max: Math.round(baseMax / 100) * 100,
      duration: weeks,
    };
  };

  const estimate = calculateEstimate();

  const handleApplyToForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <Calculator size={14} />
            <span>Interactive Scope & Cost Calculator</span>
          </div>
          <h2 className="section-title">
            Calculate Your <span className="text-gradient">Project Investment</span> In Real-Time
          </h2>
          <p className="section-subtitle">
            No waiting days for an opaque quote. Customize your desired services, technology stack, and scale below to receive an instant, transparent engineering scope and timeline estimate.
          </p>
        </div>

        {/* Estimator Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '36px',
            alignItems: 'start',
          }}
          className="estimator-grid"
        >
          {/* Left Column: Interactive Selectors */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
            }}
          >
            {/* Step 1: Core Service */}
            <div style={{ marginBottom: '32px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                1. Select Primary Service Discipline
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '10px',
                }}
              >
                {[
                  { id: 'wp-cms', label: 'WordPress & Headless CMS' },
                  { id: 'crm', label: 'CRM Automation (Salesforce/HubSpot)' },
                  { id: 'fullstack', label: 'Full-Stack (MERN / MEAN)' },
                  { id: 'backend', label: 'Backend APIs (Laravel / Node / Python)' },
                  { id: 'seo', label: 'Technical SEO & PageSpeed 95+' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      textAlign: 'left',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      background:
                        service === item.id
                          ? 'rgba(37, 99, 235, 0.08)'
                          : 'rgba(255, 255, 255, 0.7)',
                      color: service === item.id ? '#2563eb' : '#334155',
                      border:
                        service === item.id
                          ? '2px solid #2563eb'
                          : '1px solid rgba(226, 232, 240, 0.9)',
                      boxShadow: service === item.id ? '0 4px 12px rgba(37, 99, 235, 0.12)' : 'none',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frontend & Stacks */}
            <div style={{ marginBottom: '32px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                2. Preferred Frontend / Application Framework
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '10px',
                }}
              >
                {[
                  { id: 'nextjs', label: 'Next.js 15 (App Router)' },
                  { id: 'react', label: 'React.js SPA' },
                  { id: 'angular', label: 'Angular v17+ (MEAN)' },
                  { id: 'wordpress-theme', label: 'Custom WP / Elementor' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrontend(item.id)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      background:
                        frontend === item.id
                          ? 'rgba(37, 99, 235, 0.08)'
                          : 'rgba(255, 255, 255, 0.7)',
                      color: frontend === item.id ? '#2563eb' : '#475569',
                      border:
                        frontend === item.id
                          ? '2px solid #2563eb'
                          : '1px solid rgba(226, 232, 240, 0.9)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Backend Stack */}
            <div style={{ marginBottom: '32px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                3. Backend & API Infrastructure
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '10px',
                }}
              >
                {[
                  { id: 'node', label: 'Node.js / Express' },
                  { id: 'laravel', label: 'Laravel (PHP 8.3)' },
                  { id: 'python', label: 'Python (FastAPI/Django)' },
                  { id: 'serverless', label: 'Serverless / Cloud' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBackend(item.id)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      background:
                        backend === item.id
                          ? 'rgba(37, 99, 235, 0.08)'
                          : 'rgba(255, 255, 255, 0.7)',
                      color: backend === item.id ? '#2563eb' : '#475569',
                      border:
                        backend === item.id
                          ? '2px solid #2563eb'
                          : '1px solid rgba(226, 232, 240, 0.9)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Scale & Urgency */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  Scale
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'mvp', label: 'Startup MVP' },
                    { id: 'growth', label: 'Growth Scale' },
                    { id: 'enterprise', label: 'Enterprise Platform' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScale(item.id)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        background:
                          scale === item.id ? '#0f172a' : 'rgba(255, 255, 255, 0.7)',
                        color: scale === item.id ? '#ffffff' : '#475569',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  Delivery Speed
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'standard', label: 'Standard Cadence' },
                    { id: 'accelerated', label: '⚡ Rapid Sprint (+20% priority)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTimeline(item.id)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        background:
                          timeline === item.id ? '#0f172a' : 'rgba(255, 255, 255, 0.7)',
                        color: timeline === item.id ? '#ffffff' : '#475569',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Output Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.8) 100%)',
              border: '2px solid rgba(37, 99, 235, 0.25)',
              boxShadow: '0 20px 50px -10px rgba(37, 99, 235, 0.12)',
              position: 'sticky',
              top: '100px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#2563eb',
                background: 'rgba(37, 99, 235, 0.1)',
                padding: '4px 12px',
                borderRadius: '9999px',
                marginBottom: '16px',
              }}
            >
              <Sparkles size={14} />
              <span>Instant AI-Calibrated Scope</span>
            </div>

            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '8px',
              }}
            >
              Estimated Investment
            </h3>

            {/* Price Display */}
            <div
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.1,
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px',
              }}
            >
              <span className="text-gradient">
                ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>USD</span>
            </div>

            {/* Timeline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#334155',
                marginBottom: '24px',
              }}
            >
              <Clock size={18} color="#2563eb" />
              <span>Target Delivery: ~{estimate.duration} Weeks</span>
            </div>

            {/* Included Value Additions */}
            <div
              style={{
                padding: '20px 0',
                borderTop: '1px solid rgba(226, 232, 240, 0.9)',
                borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '12px',
                }}
              >
                Included With Every Engagement:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '100% Intellectual Property & Source Code Ownership',
                  'Core Web Vitals & 90+ PageSpeed Benchmark',
                  'Dedicated Lead Architect & Weekly Sprint Demos',
                  '30-Day Post-Launch Hypercare & SLA Support',
                  'Zero Hidden Costs or Surprises Policy',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: '#1e293b',
                      fontWeight: 500,
                    }}
                  >
                    <Check size={14} color="#10b981" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Action */}
            <button
              onClick={handleApplyToForm}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '0.95rem',
              }}
            >
              <span>Lock This Scope & Book Strategy Call</span>
              <ArrowRight size={18} />
            </button>

            <div
              style={{
                fontSize: '0.75rem',
                textAlign: 'center',
                color: '#64748b',
                marginTop: '12px',
              }}
            >
              No obligation • Includes Free Architecture Consultation
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .estimator-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
