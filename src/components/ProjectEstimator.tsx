'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Sparkles,
  ArrowRight,
  Clock,
  Check,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import TiltCard from '@/components/3d/TiltCard';

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
    <section id="estimator" style={{ paddingTop: '80px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag section-tag-emerald">
            <Calculator size={14} />
            <span>Real-Time Scope Calculator</span>
          </div>
          <h2 className="section-title">
            Transparent pricing &amp; <span className="text-gradient-emerald">timeline estimation</span>.
          </h2>
          <p className="section-subtitle">
            Configure your technical scope, frameworks, and deployment tier to generate an instant calibrated engineering estimate.
          </p>
        </div>

        {/* 2-Column Estimator Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '32px',
            alignItems: 'start',
          }}
          className="estimator-layout"
        >
          {/* Left Column: Interactive Selectors */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.94)',
            }}
          >
            {/* Step 1: Core Service */}
            <div style={{ marginBottom: '28px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#090d16',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                1. Select Primary Discipline
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '8px',
                }}
              >
                {[
                  { id: 'wp-cms', label: 'WordPress & Headless CMS' },
                  { id: 'crm', label: 'CRM Automation (Salesforce/HubSpot)' },
                  { id: 'fullstack', label: 'Full-Stack (MERN / MEAN)' },
                  { id: 'backend', label: 'Backend APIs (Laravel/Node/Python)' },
                  { id: 'seo', label: 'Technical SEO & Lighthouse 100' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      textAlign: 'left',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      transition: 'all 0.15s ease',
                      background:
                        service === item.id
                          ? 'rgba(225, 29, 72, 0.08)'
                          : '#ffffff',
                      color: service === item.id ? '#e11d48' : '#334155',
                      border:
                        service === item.id
                          ? '2px solid #e11d48'
                          : '1px solid rgba(15, 23, 42, 0.08)',
                      boxShadow: service === item.id ? '0 4px 14px rgba(225, 29, 72, 0.18)' : 'none',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frontend & Frameworks */}
            <div style={{ marginBottom: '28px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#090d16',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                2. Frontend Client Stack
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                {[
                  { id: 'nextjs', label: 'Next.js 16 (App Router)' },
                  { id: 'react', label: 'React.js 19 SPA' },
                  { id: 'angular', label: 'Angular v18+ (Signals)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrontend(item.id)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      background: frontend === item.id ? '#090d16' : '#ffffff',
                      color: frontend === item.id ? '#ffffff' : '#475569',
                      border: '1px solid rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Backend Stack */}
            <div style={{ marginBottom: '28px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#090d16',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                3. Backend Architecture
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                {[
                  { id: 'node', label: 'Node.js (Fastify / Express)' },
                  { id: 'laravel', label: 'Laravel (Octane / Swoole)' },
                  { id: 'python', label: 'Python (FastAPI / Django)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBackend(item.id)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      background: backend === item.id ? '#090d16' : '#ffffff',
                      color: backend === item.id ? '#ffffff' : '#475569',
                      border: '1px solid rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Scale & Cadence */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#090d16', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Project Scale
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        background: scale === item.id ? '#e11d48' : '#ffffff',
                        color: scale === item.id ? '#ffffff' : '#475569',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#090d16', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Sprint Speed
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        background: timeline === item.id ? '#e11d48' : '#ffffff',
                        color: timeline === item.id ? '#ffffff' : '#475569',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Calibrated Output Card with 3D Tilt */}
          <TiltCard maxTilt={8} perspective={1200} style={{ position: 'sticky', top: '110px' }}>
            <div
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '24px',
                background: '#ffffff',
                border: '2px solid rgba(225, 29, 72, 0.35)',
                boxShadow: '0 25px 50px -10px rgba(225, 29, 72, 0.18)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.76rem',
                  fontWeight: 500,
                  color: '#e11d48',
                  background: 'rgba(225, 29, 72, 0.08)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  marginBottom: '16px',
                }}
              >
                <Sparkles size={14} />
                <span>Calibrated Engineering Estimate</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 550, color: '#090d16', marginBottom: '8px' }}>
                Project Investment
              </h3>

              {/* Price Range */}
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                  fontWeight: 600,
                  color: '#090d16',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '6px',
                }}
              >
                <span className="text-gradient-red">
                  ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>USD</span>
              </div>

              {/* Duration */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: '#334155',
                  marginBottom: '20px',
                }}
              >
                <Clock size={16} color="#e11d48" />
                <span>Estimated Delivery: {estimate.duration} Weeks</span>
              </div>

              {/* What is included */}
              <div style={{ marginBottom: '24px', paddingTop: '16px', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 600, color: '#090d16', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Included with every delivery
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#e11d48" />
                    <span>100/100 Core Web Vitals audit &amp; guarantee</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#e11d48" />
                    <span>Full source code ownership &amp; Git repository</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#e11d48" />
                    <span>30-day post-launch warranty &amp; direct Slack channel</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleApplyToForm}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                <span>Lock in This Scope &amp; Book RFP</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </TiltCard>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .estimator-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
