'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tech Stack', href: '/tech-stack' },
    { name: 'Estimator', href: '/estimator' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '12px 0' : '18px 0',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.94)'
              : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            borderRadius: '9999px',
            padding: '10px 24px',
            boxShadow: scrolled
              ? '0 12px 36px -8px rgba(15, 23, 42, 0.08), 0 0 16px rgba(16, 185, 129, 0.06)'
              : '0 4px 20px rgba(15, 23, 42, 0.04)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Brand Logo & Tag */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.025em',
              color: '#090d16',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
              }}
            >
              <Sparkles size={18} />
            </div>
            <span>
              Aura<strong style={{ color: '#059669' }}>Stack</strong>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#059669' : '#334155',
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/contact"
              className="btn-primary desktop-cta"
              style={{
                padding: '10px 22px',
                fontSize: '0.86rem',
                display: 'none',
              }}
            >
              <span>Start Project</span>
              <ArrowUpRight size={15} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(241, 245, 249, 0.8)',
                color: '#090d16',
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '12px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              borderRadius: '20px',
              padding: '16px',
              boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '10px 16px',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#059669' : '#090d16',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ marginTop: '10px', textAlign: 'center', width: '100%', justifyContent: 'center' }}
            >
              <span>Start Project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
