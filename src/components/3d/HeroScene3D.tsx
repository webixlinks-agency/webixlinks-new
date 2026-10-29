'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Globe,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity,
  Terminal,
} from 'lucide-react';

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardStageRef = useRef<HTMLDivElement>(null);
  const floatingLayer1Ref = useRef<HTMLDivElement>(null);
  const floatingLayer2Ref = useRef<HTMLDivElement>(null);
  const floatingLayer3Ref = useRef<HTMLDivElement>(null);
  const floatingLayer4Ref = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'next-wp' | 'crm' | 'mern' | 'laravel'>('next-wp');
  const [copied, setCopied] = useState(false);

  // GSAP 3D Parallax & Continuous Harmonic Float
  useEffect(() => {
    const container = containerRef.current;
    const cardStage = cardStageRef.current;
    if (!container || !cardStage) return;

    // 1. Continuous Floating Animations via GSAP
    const floatTween1 = gsap.to(floatingLayer1Ref.current, {
      y: -14,
      rotationZ: 1.2,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    const floatTween2 = gsap.to(floatingLayer2Ref.current, {
      y: 12,
      rotationZ: -1.5,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.4,
    });

    const floatTween3 = gsap.to(floatingLayer3Ref.current, {
      y: -10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.8,
    });

    const floatTween4 = gsap.to(floatingLayer4Ref.current, {
      y: 10,
      duration: 4.0,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.2,
    });

    // 2. Mouse-Driven 3D Perspective Tilt with Smooth Damping
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Stage tilt
      gsap.to(cardStage, {
        rotationY: x * 22,
        rotationX: -y * 20,
        transformPerspective: 1200,
        ease: 'power2.out',
        duration: 0.6,
      });

      // Layer parallax offsets for depth
      gsap.to(floatingLayer1Ref.current, {
        x: x * 35,
        y: y * 30,
        ease: 'power2.out',
        duration: 0.7,
      });

      gsap.to(floatingLayer2Ref.current, {
        x: -x * 30,
        y: -y * 25,
        ease: 'power2.out',
        duration: 0.7,
      });

      gsap.to(floatingLayer3Ref.current, {
        x: x * 25,
        y: -y * 20,
        ease: 'power2.out',
        duration: 0.7,
      });

      gsap.to(floatingLayer4Ref.current, {
        x: -x * 20,
        y: y * 25,
        ease: 'power2.out',
        duration: 0.7,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardStage, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power3.out',
        duration: 1.2,
      });
      gsap.to([floatingLayer1Ref.current, floatingLayer2Ref.current, floatingLayer3Ref.current, floatingLayer4Ref.current], {
        x: 0,
        y: 0,
        ease: 'power3.out',
        duration: 1.2,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      floatTween1.kill();
      floatTween2.kill();
      floatTween3.kill();
      floatTween4.kill();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const tabContent = {
    'next-wp': {
      title: 'Headless WordPress + Next.js App Router',
      category: 'CMS & Frontend',
      status: 'Active • 99+ Core Web Vitals',
      codeSnippet: `// Next.js Server Action + WPGraphQL\nexport async function getCaseStudies() {\n  const res = await fetch(WP_GRAPHQL_ENDPOINT, {\n    headers: { 'Cache-Control': 's-maxage=3600' },\n    body: JSON.stringify({ query: WP_PAGE_QUERY })\n  });\n  return res.json(); // Rendered in 0.42s\n}`,
      metric1: { label: 'Page Load (LCP)', val: '0.48s' },
      metric2: { label: 'Cache Hit Rate', val: '99.4%' },
      metric3: { label: 'Lighthouse Score', val: '100/100' },
      accentColor: '#2563eb',
    },
    'crm': {
      title: 'Salesforce & HubSpot Bi-Directional Sync',
      category: 'CRM Automation',
      status: 'Live Sync • 25,000+ Leads Processed',
      codeSnippet: `// CRM Event Bus & Webhook Dispatcher\nexport async function syncLeadToSalesforce(lead) {\n  await hubspot.contacts.createOrUpdate(lead);\n  await salesforce.sobject('Lead').upsert({\n    Email: lead.email,\n    PipelineStage: 'Marketing_Qualified_3D'\n  });\n}`,
      metric1: { label: 'Sync Latency', val: '32ms' },
      metric2: { label: 'Zero Lead Leakage', val: '100%' },
      metric3: { label: 'Ops Hours Saved', val: '35h/wk' },
      accentColor: '#f97316',
    },
    'mern': {
      title: 'MERN & MEAN Stack Enterprise Portal',
      category: 'Full-Stack Architecture',
      status: 'Clustered • Microservices Active',
      codeSnippet: `// Real-Time WebSocket Telemetry Gateway\nio.on('connection', (socket) => {\n  socket.join('tenant:' + user.organizationId);\n  socket.emit('telemetry:stream', {\n    database: 'MongoDB Sharded Cluster',\n    throughput: '42,000 req/sec'\n  });\n});`,
      metric1: { label: 'Active Sessions', val: '120k+' },
      metric2: { label: 'Socket Latency', val: '18ms' },
      metric3: { label: 'Uptime SLA', val: '99.99%' },
      accentColor: '#8b5cf6',
    },
    'laravel': {
      title: 'Laravel 11 + Python Async API Gateway',
      category: 'Enterprise Backend',
      status: 'Deployed • Queued Workers Running',
      codeSnippet: `// Laravel Horizon + Python FastAPI\nRoute::post('/api/v2/analyze', function (Request $req) {\n  DispatchAIJob::dispatch($req->payload)\n    ->onQueue('high-throughput-workers');\n  return response()->json(['status' => 'queued']);\n});`,
      metric1: { label: 'Queue Jobs/Min', val: '85,000' },
      metric2: { label: 'P99 Latency', val: '45ms' },
      metric3: { label: 'Fault Tolerance', val: 'Zero Downtime' },
      accentColor: '#ef4444',
    },
  };

  const current = tabContent[activeTab];

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '520px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
      }}
    >
      {/* 3D Stage Card Container (Rotates with Mouse) */}
      <div
        ref={cardStageRef}
        style={{
          width: '100%',
          maxWidth: '560px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* ======================================================== */}
        {/* MAIN BASE TERMINAL: High-Tech Enterprise Workstation */}
        {/* ======================================================== */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            boxShadow:
              '0 30px 60px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
            overflow: 'hidden',
            transform: 'translateZ(0px)',
          }}
        >
          {/* Terminal Window Header Bar */}
          <div
            style={{
              padding: '14px 20px',
              background: 'linear-gradient(to right, #f8fafc, #ffffff)',
              borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* macOS Window Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: '#ff5f56',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: '#ffbd2e',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: '#27c93f',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  marginLeft: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#64748b',
                  fontFamily: 'var(--font-mono, monospace)',
                }}
              >
                aurastack-engine.ts
              </span>
            </div>

            {/* Live Status Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '3px 10px',
                borderRadius: '9999px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 6px #10b981',
                }}
              />
              Live Pipeline
            </div>
          </div>

          {/* Interactive Discipline Selector Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '4px',
              padding: '8px 14px',
              background: '#f1f5f9',
              borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
            }}
          >
            {[
              { id: 'next-wp', label: 'WordPress / Next' },
              { id: 'crm', label: 'CRM Automation' },
              { id: 'mern', label: 'MERN / MEAN' },
              { id: 'laravel', label: 'Laravel / Python' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '7px 4px',
                  borderRadius: '8px',
                  fontSize: '0.74rem',
                  fontWeight: activeTab === tab.id ? 700 : 600,
                  textAlign: 'center',
                  background: activeTab === tab.id ? '#ffffff' : 'transparent',
                  color: activeTab === tab.id ? '#0f172a' : '#64748b',
                  boxShadow:
                    activeTab === tab.id
                      ? '0 2px 6px rgba(15, 23, 42, 0.06)'
                      : 'none',
                  transition: 'all 0.15s ease',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Terminal Code Body */}
          <div style={{ padding: '20px 24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Sparkles size={16} color={current.accentColor} />
                  {current.title}
                </h4>
                <div style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
                  {current.status}
                </div>
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: current.accentColor,
                  background: `${current.accentColor}12`,
                  padding: '3px 10px',
                  borderRadius: '6px',
                }}
              >
                {current.category}
              </span>
            </div>

            {/* Code Block with Syntax Highlights */}
            <div
              style={{
                background: '#0f172a',
                borderRadius: '12px',
                padding: '14px 16px',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.74rem',
                color: '#e2e8f0',
                lineHeight: 1.6,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15) inset',
                marginBottom: '18px',
                overflowX: 'auto',
              }}
            >
              <pre style={{ margin: 0 }}>
                <code>{current.codeSnippet}</code>
              </pre>
            </div>

            {/* Live Metric Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}
            >
              {[current.metric1, current.metric2, current.metric3].map((m, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: i === 2 ? '#10b981' : current.accentColor,
                    }}
                  >
                    {m.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING 3D GLASS LAYER 1: Top-Left (Next.js & Frontend) */}
        {/* ======================================================== */}
        <div
          ref={floatingLayer1Ref}
          style={{
            position: 'absolute',
            top: '-24px',
            left: '-28px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '18px',
            padding: '12px 18px',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            boxShadow: '0 16px 36px -8px rgba(37, 99, 235, 0.16)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transform: 'translateZ(45px)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
            }}
          >
            <Globe size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
              Next.js 15 & React
            </div>
            <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              SSR & App Router
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING 3D GLASS LAYER 2: Top-Right (CRM Sync Engine)  */}
        {/* ======================================================== */}
        <div
          ref={floatingLayer2Ref}
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-24px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '18px',
            padding: '12px 18px',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            boxShadow: '0 16px 36px -8px rgba(249, 115, 22, 0.16)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transform: 'translateZ(65px)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f97316, #ec4899)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
            }}
          >
            <Cpu size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
              Salesforce & HubSpot
            </div>
            <div style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>
              Automated Lead Webhooks
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING 3D GLASS LAYER 3: Bottom-Right (Backend SLA)    */}
        {/* ======================================================== */}
        <div
          ref={floatingLayer3Ref}
          style={{
            position: 'absolute',
            bottom: '-24px',
            right: '-20px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '18px',
            padding: '12px 18px',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            boxShadow: '0 16px 36px -8px rgba(124, 58, 237, 0.16)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transform: 'translateZ(55px)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
            }}
          >
            <Database size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
              Laravel & Node & Python
            </div>
            <div style={{ fontSize: '0.72rem', color: '#7c3aed', fontWeight: 700 }}>
              High-Concurrency Microservices
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING 3D GLASS LAYER 4: Bottom-Left (SEO Score Pill) */}
        {/* ======================================================== */}
        <div
          ref={floatingLayer4Ref}
          style={{
            position: 'absolute',
            bottom: '-18px',
            left: '-20px',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            padding: '10px 18px',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            boxShadow: '0 12px 30px -6px rgba(16, 185, 129, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transform: 'translateZ(75px)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Zap size={14} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a' }}>
            100% Core Web Vitals SLA
          </span>
        </div>
      </div>
    </div>
  );
}
