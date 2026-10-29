'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        padding: '70px 0 36px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#0f172a',
                marginBottom: '14px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Sparkles size={18} />
              </div>
              <span>
                Aura<span className="text-gradient">Stack</span>
              </span>
            </Link>

            <p
              style={{
                fontSize: '0.88rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Next-generation digital engineering agency specializing in WordPress & Headless CMS, CRM pipeline automation (Salesforce, HubSpot, Zoho), MERN/MEAN stacks, enterprise Laravel/Node/Python backends, and Technical SEO.
            </p>

            {/* Live Operational Status */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#059669',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                }}
              />
              All Systems Operational • Engineering Sprints Open
            </div>
          </div>

          {/* Dedicated Pages Navigation */}
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                marginBottom: '16px',
              }}
            >
              Explore Pages
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Home Landing Page', href: '/' },
                { name: 'All Services & Disciplines', href: '/services' },
                { name: 'Full Technology Matrix', href: '/tech-stack' },
                { name: 'Project Cost Estimator', href: '/estimator' },
                { name: 'Verified Case Studies', href: '/case-studies' },
                { name: 'Engineering Process', href: '/process' },
                { name: 'Request Consultation', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '0.86rem', color: '#64748b', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CMS & CRM Column */}
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                marginBottom: '16px',
              }}
            >
              CMS & CRM Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Custom WordPress Themes',
                'Headless WordPress + Next.js',
                'WooCommerce E-Commerce',
                'Strapi & Sanity Modeling',
                'Salesforce Apex & Lightning',
                'HubSpot CMS & Automation',
                'Zoho CRM & Creator Deluge',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    style={{ fontSize: '0.86rem', color: '#64748b', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Web & Backend Stacks */}
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                marginBottom: '16px',
              }}
            >
              Web & Backend Stacks
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'React.js & Next.js 15 Apps',
                'Angular v17+ (MEAN Stack)',
                'MERN Stack Architecture',
                'Laravel (PHP 8.3+) APIs',
                'Node.js & NestJS Services',
                'Python FastAPI / Django',
                'Technical SEO 95+ Score',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/tech-stack"
                    style={{ fontSize: '0.86rem', color: '#64748b', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
            © 2026 AuraStack Studios Inc. All rights reserved. High-Velocity Multi-Page Engineering.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Shield size={14} color="#10b981" />
              SOC2 & GDPR Compliant Workflows
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
