import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, Award, TrendingUp, Star, ShieldCheck, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Case Studies & Proven Results | AuraStack Studios',
  description:
    'Discover real-world engineering results: Headless WordPress + Next.js speedups, Salesforce & HubSpot CRM automation pipelines, and full-stack MERN/MEAN deployments.',
};

export default function CaseStudiesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Case Studies Hero */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '40px',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag section-tag-emerald">
            <Award size={14} />
            <span>Proven Engineering Outcomes</span>
          </div>
          <h1 className="section-title">
            Case Studies In <span className="text-gradient-emerald">Measurable Growth</span>
          </h1>
          <p className="section-subtitle">
            We measure our code by business metrics: revenue generated, load times slashed, and operational bottlenecks automated. Explore how we transform systems for our global partners.
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
              <span>Calculate Your Scope</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Schedule Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Case Studies Showcase */}
      <CaseStudiesSection />

      {/* Client Testimonials Wall */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 550, color: '#0f172a' }}>
              What Our Engineering Partners Say
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Direct feedback from CTOs, Founders, and VP of Marketings we have built for.
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
                quote:
                  'AuraStack rebuilt our e-commerce platform using Headless WordPress and Next.js. Our mobile conversion rate jumped by 72% in 60 days, and our Google PageSpeed score went from 44 to 98.',
                author: 'Elena Vance',
                role: 'VP of Digital, Velox Luxury Goods',
                stars: 5,
              },
              {
                quote:
                  'The CRM integration between our customer portal, HubSpot, and Salesforce was flawless. They eliminated dozens of hours of manual lead routing every week with zero data loss.',
                author: 'Marcus Brody',
                role: 'Chief Revenue Officer, Nexus Logistics',
                stars: 5,
              },
              {
                quote:
                  'Their full-stack MERN portal and Laravel microservices handle our heavy investor traffic effortlessly. Transparent weekly sprints, zero surprises, and rock-solid code.',
                author: 'Sophia Chen',
                role: 'Head of Engineering, Strata Financial',
                stars: 5,
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.65, marginBottom: '20px', fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
