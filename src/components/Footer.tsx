'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
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
                color: '#090d16',
                marginBottom: '14px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                }}
              >
                <Sparkles size={18} />
              </div>
              <span>
                Aura<strong style={{ color: '#059669' }}>Stack</strong>
              </span>
            </Link>

            <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
              Premier digital engineering studio specializing in Headless WordPress, CRM automation (Salesforce, HubSpot, Zoho), full-stack MERN/MEAN architectures, enterprise backends, and 100/100 Technical SEO.
            </p>

            {/* Live Operational Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '9999px',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#059669',
              }}
            >
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
              <span>All Systems Operational (Edge 14ms)</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#090d16', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Engineering
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#475569' }}>
              <li>
                <Link href="/services#wp-cms" style={{ transition: 'color 0.15s ease' }} className="hover:text-emerald-600">
                  Headless WordPress &amp; CMS
                </Link>
              </li>
              <li>
                <Link href="/services#crm-specialist" style={{ transition: 'color 0.15s ease' }} className="hover:text-emerald-600">
                  CRM Specialists (Salesforce/HubSpot)
                </Link>
              </li>
              <li>
                <Link href="/services#frontend-modern" style={{ transition: 'color 0.15s ease' }} className="hover:text-emerald-600">
                  React 19 &amp; Next.js 16 Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services#fullstack-stacks" style={{ transition: 'color 0.15s ease' }} className="hover:text-emerald-600">
                  MERN &amp; MEAN Full-Stack Portals
                </Link>
              </li>
              <li>
                <Link href="/services#backend-enterprise" style={{ transition: 'color 0.15s ease' }} className="hover:text-emerald-600">
                  Laravel, Node.js &amp; Python APIs
                </Link>
              </li>
              <li>
                <Link href="/services#technical-seo" style={{ transition: 'color 0.15s ease' }} className="hover:text-emerald-600">
                  Technical SEO &amp; Lighthouse 100
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Architecture & Stacks */}
          <div>
            <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#090d16', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Technologies
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#475569' }}>
              <li>
                <Link href="/tech-stack">Next.js 16 &amp; React.js</Link>
              </li>
              <li>
                <Link href="/tech-stack">Angular v18+ &amp; RxJS</Link>
              </li>
              <li>
                <Link href="/tech-stack">Salesforce Lightning &amp; Apex</Link>
              </li>
              <li>
                <Link href="/tech-stack">HubSpot API v3 &amp; HubDB</Link>
              </li>
              <li>
                <Link href="/tech-stack">Laravel Octane &amp; Swoole</Link>
              </li>
              <li>
                <Link href="/tech-stack">Python FastAPI &amp; Celery</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Trust */}
          <div>
            <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#090d16', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#475569' }}>
              <li>
                <Link href="/estimator">Cost &amp; Timeline Estimator</Link>
              </li>
              <li>
                <Link href="/case-studies">Verified Case Studies</Link>
              </li>
              <li>
                <Link href="/process">4-Phase Agile Process</Link>
              </li>
              <li>
                <Link href="/contact">Book Architecture Discovery</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            borderTop: '1px solid rgba(15, 23, 42, 0.06)',
            fontSize: '0.8rem',
            color: '#64748b',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>© 2026 AuraStack Studios. Engineered for performance &amp; scale.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>SOC2 Type II Compliant</span>
            <span>WCAG 2.1 AA Accessible</span>
            <span>99.99% Uptime Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
