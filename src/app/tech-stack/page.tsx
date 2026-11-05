import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TechStackSection from '@/components/TechStackSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Cpu, Database, Globe, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Matrix & Architecture | AuraStack Studios',
  description:
    'Inspect our full production technology matrix: React, Next.js, Angular, MEAN & MERN stacks, WordPress & Headless CMS, Salesforce, HubSpot, Laravel, Node.js, and Python.',
};

export default function TechStackPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Tech Stack Dedicated Page Hero */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '50px',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag section-tag-emerald">
            <Sparkles size={14} />
            <span>Modern Production Frameworks</span>
          </div>
          <h1 className="section-title">
            Enterprise <span className="text-gradient-emerald">Technology Matrix</span>
          </h1>
          <p className="section-subtitle">
            We don’t compromise on architectural integrity. Explore our mastered frameworks, libraries, cloud databases, and CRM automation engines engineered for maximum speed and longevity.
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
              <span>Estimate Stack Budget</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Request Custom Stack Audit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Tech Stack Section & Blueprints */}
      <TechStackSection />

      {/* Stack Comparison Guide Section */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 550, color: '#0f172a' }}>
              How We Choose Your Ideal Architecture
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '640px', margin: '8px auto 0' }}>
              Comparing our primary frontend, CMS, and backend frameworks based on your business stage.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Comparison Card 1: Next.js vs Angular */}
            <div
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                borderTop: '4px solid #2563eb',
              }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
                Next.js vs Angular v17+
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                <strong>Next.js (React):</strong> Ideal for high-conversion web apps, SEO-driven content platforms, and e-commerce requiring edge prerendering and fast LCP.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                <strong>Angular (MEAN Stack):</strong> Ideal for large corporate dashboards, banking portals, and internal tools that benefit from strict dependency injection and signals.
              </p>
            </div>

            {/* Comparison Card 2: Headless WP vs Monolithic WP */}
            <div
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                borderTop: '4px solid #06b6d4',
              }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
                Headless WP vs Monolithic WP
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                <strong>Headless WordPress:</strong> Separates WP content editing from a Next.js frontend for sub-second speeds, top security, and complete design freedom.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                <strong>Monolithic Custom Themes:</strong> Perfect for clients who want full in-dashboard visual block editing, lower hosting overhead, and native WooCommerce checkout.
              </p>
            </div>

            {/* Comparison Card 3: Laravel vs Node.js vs Python */}
            <div
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                borderTop: '4px solid #ef4444',
              }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
                Laravel vs Node.js vs Python
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                <strong>Laravel (PHP 8.3):</strong> Unmatched developer velocity for complex business rules, queued jobs, subscriptions, and relational database integrity.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                <strong>Node.js:</strong> Best for real-time WebSockets, streaming endpoints, and high-concurrency microservices.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                <strong>Python (FastAPI):</strong> Supreme for AI/LLM integrations, machine learning model serving, and data workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
