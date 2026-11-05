'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Calculator, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

// Dynamic import with SSR disabled for smooth client-side 3D GSAP rendering
const HeroScene3D = dynamic(() => import('./3d/HeroScene3D'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '24px',
        border: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      <div style={{ color: '#059669', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="pulse-dot" style={{ width: '8px', height: '8px' }} />
        <span>Initializing Interactive Engine...</span>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '70px',
          }}
          className="hero-grid"
        >
          {/* Left Column: High-Impact Typography & Narrative */}
          <div style={{ maxWidth: '600px' }}>
            {/* Live Agency Status Pill */}
            <div
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                marginBottom: '20px',
              }}
            >
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#090d16', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Next-Gen Digital Engineering Studio
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#059669',
                  background: 'rgba(16, 185, 129, 0.12)',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}
              >
                ● Available for Q1/Q2
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: '#090d16',
                marginBottom: '20px',
              }}
            >
              Building digital{' '}
              <span className="text-gradient-emerald">ecosystems</span> that scale with authority.
            </h1>

            {/* Subtitle with explicit service capabilities */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.14rem)',
                color: '#334155',
                lineHeight: 1.65,
                marginBottom: '28px',
              }}
            >
              Specialized digital engineering for high-growth enterprises. We build high-scale{' '}
              <strong style={{ color: '#090d16' }}>Headless WordPress &amp; CMS</strong>, configure custom{' '}
              <strong style={{ color: '#090d16' }}>CRM pipelines (Salesforce, HubSpot, Zoho)</strong>, develop{' '}
              <strong style={{ color: '#090d16' }}>full-stack MERN &amp; MEAN apps</strong>, architect enterprise backends in{' '}
              <strong style={{ color: '#090d16' }}>Laravel, Node.js &amp; Python</strong>, and guarantee{' '}
              <strong style={{ color: '#059669' }}>100/100 Technical SEO</strong>.
            </p>

            {/* CTA Group */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              <Link href="/estimator" className="btn-primary">
                <span>Calculate Project Scope</span>
                <ArrowRight size={16} />
              </Link>

              <Link href="/services" className="btn-secondary">
                <Sparkles size={16} color="#059669" />
                <span>Explore Capabilities</span>
              </Link>
            </div>

            {/* Social Proof Row with Overlapping Avatars (Inspired by Image 4 Optibiz) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(15, 23, 42, 0.08)',
              }}
            >
              <div style={{ display: 'flex' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#059669', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
                  W
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0284c7', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-10px' }}>
                  A
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-10px' }}>
                  S
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f59e0b', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-10px' }}>
                  +
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#f59e0b', fontSize: '0.86rem', fontWeight: 800 }}>★★★★★ 4.9/5</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#090d16' }}>Top Rated Agency</span>
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                  Trusted by 85+ global brands &amp; fast-growing startups
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive 3D Workstation Console */}
          <div style={{ position: 'relative' }}>
            <HeroScene3D />
          </div>
        </div>

        {/* 4-Pillar Metric Strip (Directly inspired by Images 1, 3, 4, 5) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            borderRadius: '24px',
            padding: '28px 36px',
            boxShadow: '0 12px 30px -8px rgba(15, 23, 42, 0.06)',
          }}
          className="metrics-strip"
        >
          {/* Metric 1 */}
          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
              150<span style={{ color: '#10b981' }}>+</span>
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
              Enterprise Builds
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              WordPress, CRMs &amp; Full-Stack apps
            </div>
          </div>

          {/* Metric 2 */}
          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
              99.8<span style={{ color: '#10b981' }}>%</span>
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
              Client Satisfaction
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              On-time delivery with SLA guarantees
            </div>
          </div>

          {/* Metric 3 */}
          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
              &lt;0.3<span style={{ color: '#10b981' }}>s</span>
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
              Core Web Vitals LCP
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Sub-second edge response worldwide
            </div>
          </div>

          {/* Metric 4 */}
          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
              $45M<span style={{ color: '#10b981' }}>+</span>
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
              Client Revenue Powered
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Processed through our digital pipelines
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .metrics-strip {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 20px !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .metrics-strip {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
