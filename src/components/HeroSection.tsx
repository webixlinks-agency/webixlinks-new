'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Calculator, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import MarqueeTicker from '@/components/MarqueeTicker';

// Dynamic import with SSR disabled for smooth client-side 3D GSAP & WebGL rendering
const HeroScene3D = dynamic(() => import('./3d/HeroScene3D'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '460px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '24px',
        border: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      <div style={{ color: '#059669', fontSize: '0.88rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="pulse-dot" style={{ width: '8px', height: '8px' }} />
        <span>Initializing Spatial 3D Engine...</span>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          paddingTop: '135px',
          paddingBottom: '50px',
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
              marginBottom: '60px',
            }}
            className="hero-grid"
          >
            {/* Left Column: Editorial Display Typography (Inspired by Orisa & Obliq) */}
            <div style={{ maxWidth: '620px' }}>
              {/* Top Spatial Status Pill */}
              <div
                className="glass-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 18px',
                  marginBottom: '20px',
                }}
              >
                <span className="pulse-dot" />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#090d16', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Next-Gen 3D Architecture Studio
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
                  ● Q1/Q2 Sprints Open
                </span>
              </div>

              {/* Bold Editorial Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: '-0.04em',
                  color: '#090d16',
                  marginBottom: '22px',
                }}
              >
                Crafting <span className="text-gradient-emerald">extraordinary</span> digital ecosystems that scale.
              </h1>

              {/* Explicit service capability description */}
              <p
                style={{
                  fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
                  color: '#334155',
                  lineHeight: 1.68,
                  marginBottom: '28px',
                }}
              >
                Elite engineering for market leaders. We architect high-scale{' '}
                <strong style={{ color: '#090d16' }}>Headless WordPress &amp; CMS</strong> platforms, automate complex{' '}
                <strong style={{ color: '#090d16' }}>CRM pipelines (Salesforce, HubSpot, Zoho)</strong>, develop fluid{' '}
                <strong style={{ color: '#090d16' }}>React, Next.js &amp; Angular frontends</strong>, engineer robust backends in{' '}
                <strong style={{ color: '#090d16' }}>Laravel, Node.js &amp; Python</strong>, and deliver ironclad{' '}
                <strong style={{ color: '#059669' }}>100/100 Core Web Vitals SEO</strong>.
              </p>

              {/* CTA Button Group */}
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

              {/* Social Proof & Trust Badges */}
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
                    Trusted by 85+ global brands &amp; fast-growing tech enterprises
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Spatial 3D Interactive Console */}
            <div style={{ position: 'relative' }}>
              <HeroScene3D />
            </div>
          </div>

          {/* 4-Pillar Metric Strip (Directly from References 1, 3, 4, 5) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              borderRadius: '24px',
              padding: '28px 36px',
              boxShadow: '0 12px 30px -8px rgba(15, 23, 42, 0.06)',
            }}
            className="metrics-strip"
          >
            <div>
              <div style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 900, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
                150<span style={{ color: '#10b981' }}>+</span>
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
                Enterprise Builds
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                WordPress, CRMs &amp; Full-Stack apps
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 900, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
                99.8<span style={{ color: '#10b981' }}>%</span>
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
                Client Satisfaction
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                On-time delivery with SLA guarantees
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 900, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
                &lt;0.3<span style={{ color: '#10b981' }}>s</span>
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#090d16', marginTop: '6px' }}>
                Core Web Vitals LCP
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Sub-second edge response worldwide
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 900, color: '#090d16', letterSpacing: '-0.03em', lineHeight: 1 }}>
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
      </section>

      {/* Infinite 3D Marquee Ticker Tape (Directly from Orisa & Obliq) */}
      <MarqueeTicker speed={28} />

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
    </>
  );
}
