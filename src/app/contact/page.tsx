import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Sparkles, Mail, PhoneCall, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Project Discovery | AuraStack Studios',
  description:
    'Schedule a technical consultation with our principal software architects. Discuss WordPress, CRM automation, full-stack web applications, or custom API solutions.',
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Contact Hero */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '30px',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Direct Lead Architect Access</span>
          </div>
          <h1 className="section-title">
            Start Your <span className="text-gradient">Project Consultation</span>
          </h1>
          <p className="section-subtitle">
            Skip the generic sales presentations. Meet directly with our principal engineers to evaluate your technical scope, review architecture blueprints, and obtain a firm fixed-price roadmap.
          </p>
        </div>
      </section>

      {/* Embedded Interactive Contact Form */}
      <ContactSection />

      {/* Office Hubs & Global Presence */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a' }}>
              Global Engineering Presence
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Operating seamlessly across North American, European, and Asia-Pacific time zones.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                city: 'San Francisco, CA',
                region: 'North America Hub',
                address: '500 Howard Street, Suite 400',
                email: 'sf@aurastack.agency',
              },
              {
                city: 'London, UK',
                region: 'European Operations',
                address: '100 Bishopsgate, Level 18',
                email: 'london@aurastack.agency',
              },
              {
                city: 'Singapore',
                region: 'Asia-Pacific Center',
                address: 'Marina Bay Financial Centre, Tower 1',
                email: 'apac@aurastack.agency',
              },
              {
                city: 'Distributed Team',
                region: 'Global 24/7 Coverage',
                address: 'Senior Engineers Worldwide',
                email: 'hello@aurastack.agency',
              },
            ].map((hub, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  borderRadius: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <MapPin size={18} color="#2563eb" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
                    {hub.city}
                  </h4>
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563eb', marginBottom: '8px', textTransform: 'uppercase' }}>
                  {hub.region}
                </div>
                <p style={{ fontSize: '0.86rem', color: '#64748b', marginBottom: '12px' }}>
                  {hub.address}
                </p>
                <a
                  href={`mailto:${hub.email}`}
                  style={{ fontSize: '0.84rem', color: '#0f172a', fontWeight: 600, textDecoration: 'underline' }}
                >
                  {hub.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
