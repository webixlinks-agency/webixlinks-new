'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  PhoneCall,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$5,000 - $15,000',
    timeline: 'Within 4-8 weeks',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'WordPress & Headless CMS',
    'Next.js / React Web App',
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    'WordPress & Headless CMS',
    'CRM Setup & Automation (Salesforce/HubSpot)',
    'Next.js / React Web App',
    'Angular Enterprise (MEAN Stack)',
    'MERN Stack Full-Stack Portal',
    'Laravel / PHP Microservices',
    'Node.js / Python Backend API',
    'Technical SEO & Core Web Vitals',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#059669', '#10b981', '#06b6d4', '#4f46e5'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 600);
  };

  return (
    <section id="contact" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Start Your Project</span>
          </div>
          <h2 className="section-title">
            Let’s Build Something <span className="text-gradient">Extraordinary</span> Together
          </h2>
          <p className="section-subtitle">
            Tell us about your project goals. We’ll schedule a 30-minute discovery consultation with a senior software architect, provide a comprehensive technical proposal, and outline a clear path to production.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '36px',
            alignItems: 'start',
          }}
          className="contact-layout"
        >
          {/* Left Column: Direct Consultation Info */}
          <div>
            <div
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '24px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#10b981',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
                Lead Architects On Duty • Average Response: &lt; 2 Hours
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '12px',
                }}
              >
                What Happens Next?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'rgba(37, 99, 235, 0.1)',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    1
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                      Prompt NDA & Architecture Review
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                      We sign mutual NDAs if requested and conduct a preliminary technical review.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'rgba(37, 99, 235, 0.1)',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    2
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                      30-Minute Video Discovery Call
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                      Meet directly with our Principal Engineer, not junior sales reps.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'rgba(37, 99, 235, 0.1)',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    3
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                      Firm Fixed Scope & Sprint Roadmap
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                      Receive a transparent breakdown of budget, tech stack, and weekly deliverables.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Info */}
              <div
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(241, 245, 249, 0.7)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Mail size={18} color="#2563eb" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>
                    hello@aurastack.agency
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PhoneCall size={18} color="#2563eb" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>
                    +1 (800) 492-AURA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFP Form */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.92)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '10px',
                  }}
                >
                  Consultation Request Received!
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#475569',
                    maxWidth: '480px',
                    margin: '0 auto 24px',
                    lineHeight: 1.6,
                  }}
                >
                  Thank you, <strong>{formData.name || 'there'}</strong>. Our engineering leads are reviewing your project details. We will reach out within 2 hours with availability for our discovery call.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ padding: '10px 24px', fontSize: '0.88rem' }}
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '6px',
                  }}
                >
                  Project Discovery & Consultation Form
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#64748b',
                    marginBottom: '24px',
                  }}
                >
                  Fill out the details below to receive our technical proposal & timeframes.
                </p>

                {/* Name & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '18px',
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#334155',
                        marginBottom: '6px',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#334155',
                        marginBottom: '6px',
                      }}
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                </div>

                {/* Company & Timeline Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '20px',
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#334155',
                        marginBottom: '6px',
                      }}
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Health or Startup"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#334155',
                        marginBottom: '6px',
                      }}
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        fontFamily: 'inherit',
                      }}
                    >
                      <option value="$3,500 - $7,500">$3,500 – $7,500 USD (Starter/MVP)</option>
                      <option value="$7,500 - $18,000">$7,500 – $18,000 USD (Growth Platform)</option>
                      <option value="$18,000 - $45,000">$18,000 – $45,000 USD (Enterprise Scale)</option>
                      <option value="$45,000+">$45,000+ USD (Custom Architecture)</option>
                    </select>
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '8px',
                    }}
                  >
                    Services You Require (Select All That Apply):
                  </label>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '8px',
                    }}
                  >
                    {serviceOptions.map((srv) => {
                      const isChecked = selectedServices.includes(srv);
                      return (
                        <div
                          key={srv}
                          onClick={() => toggleService(srv)}
                          style={{
                            padding: '8px 12px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.15s ease',
                            background: isChecked ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                            color: isChecked ? '#2563eb' : '#475569',
                            border: isChecked
                              ? '1.5px solid #2563eb'
                              : '1px solid rgba(226, 232, 240, 0.9)',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            style={{ pointerEvents: 'none' }}
                          />
                          <span>{srv}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '6px',
                    }}
                  >
                    Project Details & Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you're looking to build, your current bottlenecks, or desired launch date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      background: '#ffffff',
                      fontSize: '0.9rem',
                      color: '#0f172a',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.95rem',
                  }}
                >
                  {loading ? (
                    <span>Submitting Discovery Request...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Request Technical Consultation & Proposal</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .contact-layout {
            grid-template-columns: 0.85fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
