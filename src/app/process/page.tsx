import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, Compass, ShieldCheck, CheckCircle2, Terminal, RefreshCw, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Process & Agile Framework | AuraStack Studios',
  description:
    'Learn how our systematic 4-phase agile engineering methodology delivers predictable, high-speed, zero-downtime web applications and CMS solutions.',
};

export default function ProcessPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Process Hero */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '40px',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Methodical Delivery Workflow</span>
          </div>
          <h1 className="section-title">
            Our 4-Phase <span className="text-gradient">Agile Engineering</span> Framework
          </h1>
          <p className="section-subtitle">
            Great software requires disciplined execution. We operate with radical transparency, continuous testing, bi-weekly staging releases, and ironclad delivery commitments.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '14px',
              marginTop: '32px',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/estimator" className="btn-primary">
              <span>Calculate Timeline & Scope</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Discuss Your Workflow</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Process Section */}
      <ProcessSection />

      {/* Standards & Transparency Grid */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a' }}>
              How We Maintain Engineering Excellence
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Every line of code passes through strict peer reviews and automated linting.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: Terminal,
                title: 'Strict TypeScript & Linting',
                desc: 'Type safety is enforced end-to-end between frontend contracts, CMS APIs, and database models to eliminate runtime crashes.',
                color: '#2563eb',
              },
              {
                icon: RefreshCw,
                title: 'Bi-Weekly Staging Demos',
                desc: 'No waiting months to see progress. You receive working staging preview URLs every two weeks with live progress reviews.',
                color: '#06b6d4',
              },
              {
                icon: ShieldCheck,
                title: 'OWASP Security Scans',
                desc: 'Penetration testing, dependency vulnerability audits, and strict sanitization on all WordPress plugins and custom API routes.',
                color: '#7c3aed',
              },
              {
                icon: Cpu,
                title: 'Automated CI/CD Pipelines',
                desc: 'Zero-downtime deployment workflows with automated rollbacks, preview environments, and instant CDN invalidation.',
                color: '#10b981',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '30px',
                    borderRadius: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${item.color}15`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
