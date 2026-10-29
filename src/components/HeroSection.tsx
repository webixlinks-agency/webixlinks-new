'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

// Dynamic import with SSR disabled
const HeroScene3D = dynamic(() => import('./3d/HeroScene3D'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '24px',
      }}
    >
      <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>
        Loading 3D Workstation...
      </div>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & Copy */}
          <div style={{ maxWidth: '640px' }}>
            {/* Agency Status Pill */}
            <div
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                }}
              />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>
                Next-Gen 3D Engineering Agency
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  background: 'rgba(37, 99, 235, 0.08)',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}
              >
                Accepting New Clients
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: '#0f172a',
                marginBottom: '22px',
              }}
            >
              Architecting <span className="text-gradient">3D Web Apps</span>, Headless CMS & Enterprise CRM.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                color: '#475569',
                lineHeight: 1.68,
                marginBottom: '36px',
              }}
            >
              We craft high-performance web systems tailored for high-growth businesses. From custom{' '}
              <strong>WordPress & Headless CMS</strong> to <strong>Salesforce/HubSpot CRM</strong>,{' '}
              <strong>MERN/MEAN Full-Stack</strong>, modern <strong>React/Next.js/Angular</strong>, enterprise{' '}
              <strong>Laravel, Node.js & Python</strong> backends, and data-driven <strong>SEO</strong>.
            </p>

            {/* Call To Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
                marginBottom: '44px',
              }}
            >
              <Link href="/estimator" className="btn-primary" id="hero-estimator-cta">
                <Calculator size={18} />
                <span>Estimate Project Cost</span>
              </Link>

              <Link href="/services" className="btn-secondary" id="hero-services-cta">
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Proof Points */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                  99+ PageSpeed Score
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                  100% Code Ownership
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                  Enterprise SLA & Security
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive GSAP 3D Architecture Workstation */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroScene3D />
          </div>
        </div>

        {/* Live Agency Metrics Grid */}
        <div
          className="glass-panel"
          style={{
            marginTop: '56px',
            padding: '28px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#2563eb', letterSpacing: '-0.02em' }}>
              250+
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Production Apps & Portals
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '-0.02em' }}>
              $140M+
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Client Revenue Generated
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#06b6d4', letterSpacing: '-0.02em' }}>
              3.8x
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Average SEO Traffic Growth
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#10b981', letterSpacing: '-0.02em' }}>
              99.8%
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              On-Time & On-Budget Delivery
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
