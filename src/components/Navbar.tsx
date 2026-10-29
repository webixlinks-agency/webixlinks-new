'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        transition: 'all 0.3s ease',
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
              ? 'rgba(255, 255, 255, 0.92)'
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            borderRadius: '9999px',
            padding: '10px 24px',
            boxShadow: scrolled
              ? '0 12px 32px -8px rgba(15, 23, 42, 0.08)'
              : '0 4px 16px rgba(15, 23, 42, 0.04)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              color: '#0f172a',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 6px 16px rgba(37, 99, 235, 0.35)',
              }}
            >
              <Sparkles size={20} />
            </div>
            <span>
              Aura<span className="text-gradient">Stack</span>
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#0ea5e9',
                background: 'rgba(14, 165, 233, 0.1)',
                padding: '2px 8px',
                borderRadius: '9999px',
                border: '1px solid rgba(14, 165, 233, 0.2)',
              }}
            >
              STUDIOS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px',
            }}
            className="desktop-nav-items"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#2563eb' : '#475569',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#475569';
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Header Action Button */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '12px',
            }}
            className="desktop-nav-action"
          >
            <Link
              href="/estimator"
              className="btn-primary"
              style={{
                padding: '9px 20px',
                fontSize: '0.86rem',
              }}
            >
              <span>Instant Quote</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
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
              color: '#0f172a',
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '12px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '24px',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
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
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#2563eb' : '#1e293b',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}
            >
              Instant Quote Calculator
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 940px) {
          .desktop-nav-items {
            display: flex !important;
          }
          .desktop-nav-action {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
