import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProjectEstimator from '@/components/ProjectEstimator';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, HelpCircle, Shield, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instant Project Cost & Scope Estimator | AuraStack Studios',
  description:
    'Calculate your custom web development, WordPress CMS, CRM setup, or full-stack project investment in real-time with our interactive calculator.',
};

export default function EstimatorPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Estimator Hero */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '30px',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag section-tag-emerald">
            <Sparkles size={14} />
            <span>100% Transparent Pricing</span>
          </div>
          <h1 className="section-title">
            Interactive <span className="text-gradient-emerald">Project Cost &amp; Scope</span> Calculator
          </h1>
          <p className="section-subtitle">
            Configure your primary discipline, frontend, backend, scale, and delivery urgency to generate an instant calibrated investment range and sprint roadmap.
          </p>
        </div>
      </section>

      {/* Embedded Estimator */}
      <ProjectEstimator />

      {/* Estimator FAQ & Cost Drivers */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 550, color: '#0f172a' }}>
              Frequently Asked Questions About Our Pricing
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Clear answers on how we structure our contracts, milestones, and deliverable guarantees.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                q: 'Are these estimates binding or fixed-fee?',
                a: 'Once we complete our 30-minute discovery session and confirm your technical requirements, we provide a 100% guaranteed fixed-price proposal. You never pay a penny over the agreed sprint scope.',
              },
              {
                q: 'How are milestone payments structured?',
                a: 'Standard enterprise engagements are split into predictable milestone deliverables: 30% upon architecture blueprint sign-off, 40% at functional staging demo, and 30% upon production deployment.',
              },
              {
                q: 'What if we already have an existing backend or CRM?',
                a: 'We routinely integrate with existing legacy systems. Whether hooking a Next.js frontend into an existing Laravel/WordPress database or connecting Salesforce into custom React portals, we tailor to your stack.',
              },
              {
                q: 'Do you offer monthly retainer or ongoing maintenance?',
                a: 'Yes. Beyond our complimentary 30-day post-launch warranty, we provide dedicated hypercare retainers for ongoing feature sprints, security patch updates, and continuous SEO monitoring.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  borderRadius: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <HelpCircle size={18} color="#e11d48" />
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>
                    {faq.q}
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
