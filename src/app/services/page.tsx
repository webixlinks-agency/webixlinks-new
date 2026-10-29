import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Services & Capabilities | AuraStack Studios',
  description:
    'Explore our comprehensive digital engineering capabilities: WordPress & Headless CMS, CRM Solutions (Salesforce, HubSpot, Zoho), MERN & MEAN Stacks, Laravel, Node.js, Python, and Technical SEO.',
};

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Services Page Dedicated Header */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '50px',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Full-Spectrum Digital Capabilities</span>
          </div>
          <h1 className="section-title">
            Enterprise Engineering & <span className="text-gradient">Growth Services</span>
          </h1>
          <p className="section-subtitle">
            From custom WordPress & Headless CMS to CRM pipeline automation, React/Next.js/Angular frontends, robust Laravel & Python backends, and data-driven SEO. We architect for scale, speed, and business ROI.
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
              <span>Calculate Project Cost</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Book Architecture Call</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Rich Services Section */}
      <ServicesSection />

      {/* Service Guarantees Grid */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(240, 249, 255, 0.7) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
                Every Service Engagement Includes:
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  title: '100% Code Ownership',
                  desc: 'All GitHub repositories, intellectual property, and documentation transfer to you with zero lock-in.',
                },
                {
                  title: '95+ Lighthouse Benchmark',
                  desc: 'Every web application and CMS platform is audited to meet strict Core Web Vitals performance.',
                },
                {
                  title: 'Dedicated Lead Architect',
                  desc: 'Direct communication with your senior full-stack engineer and bi-weekly sprint demos.',
                },
                {
                  title: '30-Day Post-Launch Warranty',
                  desc: 'Full bug coverage, telemetry monitoring, and performance tuning after your production deployment.',
                },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
