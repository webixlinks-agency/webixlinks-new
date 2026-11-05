'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import {
  Globe,
  Database,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity,
  Terminal,
  RefreshCw,
  Lock,
  Play,
  TrendingUp,
  Server,
  Code2,
} from 'lucide-react';

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardStageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const floatPill1Ref = useRef<HTMLDivElement>(null);
  const floatPill2Ref = useRef<HTMLDivElement>(null);
  const floatPill3Ref = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'headless-wp' | 'crm-flow' | 'fullstack-api' | 'seo-radar'>('headless-wp');
  
  // Interactive Simulator States
  const [wpSyncing, setWpSyncing] = useState(false);
  const [wpSyncSuccess, setWpSyncSuccess] = useState(false);
  const [crmStep, setCrmStep] = useState<number>(3);
  const [crmRunning, setCrmRunning] = useState(false);
  const [selectedBackend, setSelectedBackend] = useState<'node' | 'laravel' | 'python'>('node');
  const [benchmarkRunning, setBenchmarkRunning] = useState(false);
  const [benchmarkScore, setBenchmarkScore] = useState(48200);

  // Trigger WP Sync Simulation
  const handleTriggerWpSync = () => {
    if (wpSyncing) return;
    setWpSyncing(true);
    setWpSyncSuccess(false);
    setTimeout(() => {
      setWpSyncing(false);
      setWpSyncSuccess(true);
      setTimeout(() => setWpSyncSuccess(false), 3500);
    }, 850);
  };

  // Trigger CRM Flow Simulation
  const handleTriggerCrmFlow = () => {
    if (crmRunning) return;
    setCrmRunning(true);
    setCrmStep(0);
    setTimeout(() => setCrmStep(1), 500);
    setTimeout(() => setCrmStep(2), 1100);
    setTimeout(() => setCrmStep(3), 1700);
    setTimeout(() => setCrmRunning(false), 2200);
  };

  // Trigger Backend Benchmark Simulation
  const handleRunBenchmark = () => {
    if (benchmarkRunning) return;
    setBenchmarkRunning(true);
    let count = 0;
    const interval = setInterval(() => {
      setBenchmarkScore(prev => prev + Math.floor(Math.random() * 800 - 350));
      count++;
      if (count > 6) {
        clearInterval(interval);
        setBenchmarkRunning(false);
      }
    }, 120);
  };

  // Three.js Ambient 3D Spatial Wireframe Sphere in Background (Inspired by Orisa & Obliq)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Outer Spatial Icosahedron Wireframe
    const geometry = new THREE.IcosahedronGeometry(2.3, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner Glowing Core Node
    const innerGeo = new THREE.OctahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Floating Points Cloud
    const particlesCount = 75;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 6;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x10b981,
      transparent: true,
      opacity: 0.45,
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleMesh);

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const delta = (now - lastTime) * 0.001;
      lastTime = now;

      sphere.rotation.x += delta * 0.15;
      sphere.rotation.y += delta * 0.22;
      innerMesh.rotation.x -= delta * 0.2;
      innerMesh.rotation.y -= delta * 0.25;
      particleMesh.rotation.y += delta * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  // GSAP 3D Interactive Perspective Tilt & Harmonic Floating Physics
  useEffect(() => {
    const container = containerRef.current;
    const cardStage = cardStageRef.current;
    if (!container || !cardStage) return;

    // Harmonic floating tweens for auxiliary cards
    const float1 = gsap.to(floatPill1Ref.current, {
      y: -12,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    const float2 = gsap.to(floatPill2Ref.current, {
      y: 14,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    });

    const float3 = gsap.to(floatPill3Ref.current, {
      y: -10,
      duration: 4.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.0,
    });

    // Mouse movement 3D perspective handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(cardStage, {
        rotationY: x * 18,
        rotationX: -y * 16,
        transformPerspective: 1200,
        ease: 'power2.out',
        duration: 0.6,
      });

      gsap.to(floatPill1Ref.current, {
        x: x * 28,
        y: y * 24,
        duration: 0.7,
        ease: 'power2.out',
      });

      gsap.to(floatPill2Ref.current, {
        x: -x * 26,
        y: -y * 22,
        duration: 0.7,
        ease: 'power2.out',
      });

      gsap.to(floatPill3Ref.current, {
        x: x * 20,
        y: -y * 20,
        duration: 0.7,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardStage, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power3.out',
        duration: 0.9,
      });
      gsap.to([floatPill1Ref.current, floatPill2Ref.current, floatPill3Ref.current], {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      float1.kill();
      float2.kill();
      float3.kill();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        perspective: '1200px',
        padding: '20px 0',
      }}
    >
      {/* Three.js Ambient 3D Spatial Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          width: 'calc(100% + 40px)',
          height: 'calc(100% + 40px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 3D Interactive Stage */}
      <div
        ref={cardStageRef}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
          position: 'relative',
          width: '100%',
          zIndex: 2,
        }}
      >
        {/* Main Workstation Browser Glass Console */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '24px',
            border: '1px solid rgba(15, 23, 42, 0.09)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.14), 0 0 40px rgba(16, 185, 129, 0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Top Browser Chrome Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              borderBottom: '1px solid rgba(15, 23, 42, 0.07)',
              background: 'rgba(248, 250, 252, 0.95)',
            }}
          >
            {/* Traffic Light Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            </div>

            {/* URL Pill Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '9999px',
                background: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.06)',
                fontSize: '0.78rem',
                color: '#475569',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Lock size={12} color="#10b981" />
              <span>preview.webixlinks.agency/live-engine</span>
            </div>

            {/* Live Edge Latency Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.74rem',
                fontWeight: 500,
                color: '#059669',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '3px 10px',
                borderRadius: '9999px',
              }}
            >
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
              <span>Edge 14ms</span>
            </div>
          </div>

          {/* Interactive Mode Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
              background: 'rgba(241, 245, 249, 0.65)',
              padding: '6px',
              gap: '6px',
            }}
          >
            <button
              onClick={() => setActiveTab('headless-wp')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 10px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: activeTab === 'headless-wp' ? 600 : 450,
                color: activeTab === 'headless-wp' ? '#090d16' : '#64748b',
                background: activeTab === 'headless-wp' ? '#ffffff' : 'transparent',
                boxShadow: activeTab === 'headless-wp' ? '0 2px 8px rgba(15, 23, 42, 0.06)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Globe size={14} color={activeTab === 'headless-wp' ? '#10b981' : '#64748b'} />
              <span>Headless WP</span>
            </button>

            <button
              onClick={() => setActiveTab('crm-flow')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 10px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: activeTab === 'crm-flow' ? 600 : 450,
                color: activeTab === 'crm-flow' ? '#090d16' : '#64748b',
                background: activeTab === 'crm-flow' ? '#ffffff' : 'transparent',
                boxShadow: activeTab === 'crm-flow' ? '0 2px 8px rgba(15, 23, 42, 0.06)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Cpu size={14} color={activeTab === 'crm-flow' ? '#f59e0b' : '#64748b'} />
              <span>CRM Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('fullstack-api')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 10px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: activeTab === 'fullstack-api' ? 600 : 450,
                color: activeTab === 'fullstack-api' ? '#090d16' : '#64748b',
                background: activeTab === 'fullstack-api' ? '#ffffff' : 'transparent',
                boxShadow: activeTab === 'fullstack-api' ? '0 2px 8px rgba(15, 23, 42, 0.06)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Server size={14} color={activeTab === 'fullstack-api' ? '#06b6d4' : '#64748b'} />
              <span>Full-Stack API</span>
            </button>

            <button
              onClick={() => setActiveTab('seo-radar')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 10px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: activeTab === 'seo-radar' ? 600 : 450,
                color: activeTab === 'seo-radar' ? '#090d16' : '#64748b',
                background: activeTab === 'seo-radar' ? '#ffffff' : 'transparent',
                boxShadow: activeTab === 'seo-radar' ? '0 2px 8px rgba(15, 23, 42, 0.06)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Activity size={14} color={activeTab === 'seo-radar' ? '#10b981' : '#64748b'} />
              <span>100/100 SEO</span>
            </button>
          </div>

          {/* Interactive Screen Content Area */}
          <div style={{ padding: '20px', minHeight: '340px' }}>
            {/* TAB 1: Headless WordPress + Next.js 16 Sync */}
            {activeTab === 'headless-wp' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 550, color: '#090d16' }}>
                      Headless WordPress ↔ Next.js 16 Edge Sync
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Gutenberg content edits instantly revalidated at Vercel/Cloudflare Edge via ISR.
                    </p>
                  </div>
                  <button
                    onClick={handleTriggerWpSync}
                    className="btn-primary"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <RefreshCw size={13} className={wpSyncing ? 'animate-spin' : ''} />
                    <span>{wpSyncing ? 'Syncing...' : 'Simulate Publish'}</span>
                  </button>
                </div>

                {/* 2-Column Visual Architecture Demo */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '14px',
                    background: '#f8fafc',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                  }}
                >
                  {/* Left: CMS Layer */}
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      padding: '12px',
                      border: '1px solid rgba(15, 23, 42, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 500, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        WordPress Admin / WPGraphQL
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                        Connected
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#334155', lineHeight: 1.5 }}>
                      <div style={{ color: '#059669', fontWeight: 500 }}>mutation PublishPost &#123;</div>
                      <div style={{ paddingLeft: '12px' }}>post(id: &quot;enterprise-rev&quot;) &#123;</div>
                      <div style={{ paddingLeft: '24px', color: '#64748b' }}>status: &quot;publish&quot;</div>
                      <div style={{ paddingLeft: '24px', color: '#64748b' }}>blocks: GutenbergTree</div>
                      <div style={{ paddingLeft: '24px', color: '#64748b' }}>isrSecret: &quot;v16_ok&quot;</div>
                      <div style={{ paddingLeft: '12px' }}>&#125;</div>
                      <div style={{ color: '#059669', fontWeight: 500 }}>&#125;</div>
                    </div>
                  </div>

                  {/* Right: Edge Next.js Frontend */}
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      padding: '12px',
                      border: wpSyncSuccess ? '1px solid #10b981' : '1px solid rgba(15, 23, 42, 0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 500, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Next.js 16 Edge Render
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: wpSyncSuccess ? '#10b981' : '#2563eb',
                          background: wpSyncSuccess ? 'rgba(16,185,129,0.15)' : 'rgba(37,99,235,0.1)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontWeight: 500,
                        }}
                      >
                        {wpSyncSuccess ? '✓ ISR Updated: 142ms' : 'Static Cache: Fresh'}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#1e293b' }}>
                      <div style={{ fontWeight: 550, marginBottom: '4px', color: '#090d16' }}>
                        AuraStack Studios Launches Scalable Engine
                      </div>
                      <p style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '8px' }}>
                        Server Components hydrated. TTFB 18ms. Zero client hydration delays.
                      </p>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '4px', background: '#f1f5f9', color: '#475569', fontWeight: 500 }}>
                          Lighthouse 100
                        </span>
                        <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '4px', background: '#ecfdf5', color: '#059669', fontWeight: 500 }}>
                          CDN Cached
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Pill Strip */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '14px', fontSize: '0.75rem', color: '#64748b' }}>
                    <span>⚡ TTFB: <strong style={{ color: '#090d16' }}>18ms</strong></span>
                    <span>📦 Page Weight: <strong style={{ color: '#090d16' }}>32 kB</strong></span>
                    <span>🛡️ Security: <strong style={{ color: '#10b981' }}>Cloudflare WAF</strong></span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 500 }}>
                    ● 100% Core Web Vitals Pass
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: Enterprise CRM Flow Simulator */}
            {activeTab === 'crm-flow' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 550, color: '#090d16' }}>
                      Enterprise CRM &amp; Automated Revenue Flow
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Bidirectional data sync across Salesforce, HubSpot, Zoho CRM &amp; Custom Webhook Events.
                    </p>
                  </div>
                  <button
                    onClick={handleTriggerCrmFlow}
                    className="btn-primary"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Play size={13} />
                    <span>{crmRunning ? 'Simulating...' : 'Simulate Inbound Deal'}</span>
                  </button>
                </div>

                {/* 4-Step Interactive Automation Pipeline */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                    background: '#f8fafc',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <div
                    style={{
                      background: crmStep >= 0 ? '#ffffff' : 'rgba(255,255,255,0.5)',
                      padding: '12px',
                      borderRadius: '12px',
                      border: crmStep >= 0 ? '1px solid #10b981' : '1px solid rgba(15,23,42,0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase', marginBottom: '4px' }}>
                      01 Inbound RFP
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#090d16', marginBottom: '4px' }}>
                      Form Capture
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                      $85K Project Lead entered via web app
                    </div>
                  </div>

                  <div
                    style={{
                      background: crmStep >= 1 ? '#ffffff' : 'rgba(255,255,255,0.5)',
                      padding: '12px',
                      borderRadius: '12px',
                      border: crmStep >= 1 ? '1px solid #f59e0b' : '1px solid rgba(15,23,42,0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase', marginBottom: '4px' }}>
                      02 Enrichment
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#090d16', marginBottom: '4px' }}>
                      Lead Scoring
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                      AI Qualified Score: 94/100 (Tier 1 Enterprise)
                    </div>
                  </div>

                  <div
                    style={{
                      background: crmStep >= 2 ? '#ffffff' : 'rgba(255,255,255,0.5)',
                      padding: '12px',
                      borderRadius: '12px',
                      border: crmStep >= 2 ? '1px solid #0ea5e9' : '1px solid rgba(15,23,42,0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#0ea5e9', textTransform: 'uppercase', marginBottom: '4px' }}>
                      03 CRM Ingestion
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#090d16', marginBottom: '4px' }}>
                      Salesforce &amp; HubSpot
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                      Deal Object created. Owner assigned instantly.
                    </div>
                  </div>

                  <div
                    style={{
                      background: crmStep >= 3 ? '#ffffff' : 'rgba(255,255,255,0.5)',
                      padding: '12px',
                      borderRadius: '12px',
                      border: crmStep >= 3 ? '1px solid #10b981' : '1px solid rgba(15,23,42,0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase', marginBottom: '4px' }}>
                      04 Action Fired
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#090d16', marginBottom: '4px' }}>
                      Slack + Calendar
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                      Director notified + Calendar invite dispatched.
                    </div>
                  </div>
                </div>

                {/* Integration Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '6px', fontWeight: 500 }}>
                      Salesforce Lightning
                    </span>
                    <span style={{ fontSize: '0.72rem', background: '#fff7ed', color: '#c2410c', padding: '3px 8px', borderRadius: '6px', fontWeight: 500 }}>
                      HubSpot API v3
                    </span>
                    <span style={{ fontSize: '0.72rem', background: '#ecfdf5', color: '#047857', padding: '3px 8px', borderRadius: '6px', fontWeight: 500 }}>
                      Zoho Deluge Scripts
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 500 }}>
                    ✓ 0.00% Lead Drop-off Rate
                  </span>
                </div>
              </div>
            )}

            {/* TAB 3: Full-Stack Microservices & Backend Runner */}
            {activeTab === 'fullstack-api' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 550, color: '#090d16' }}>
                      Full-Stack &amp; Enterprise Backend Benchmark
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      React/Angular frontends backed by Node.js, Laravel Octane &amp; Python FastAPI.
                    </p>
                  </div>
                  <button
                    onClick={handleRunBenchmark}
                    className="btn-primary"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Zap size={13} />
                    <span>{benchmarkRunning ? 'Benchmarking...' : 'Run Load Benchmark'}</span>
                  </button>
                </div>

                {/* Framework Selector Tabs */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <button
                    onClick={() => setSelectedBackend('node')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: selectedBackend === 'node' ? 600 : 450,
                      background: selectedBackend === 'node' ? '#090d16' : '#ffffff',
                      color: selectedBackend === 'node' ? '#ffffff' : '#475569',
                      border: '1px solid rgba(15,23,42,0.08)',
                    }}
                  >
                    Node.js (Fastify / Express)
                  </button>
                  <button
                    onClick={() => setSelectedBackend('laravel')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: selectedBackend === 'laravel' ? 600 : 450,
                      background: selectedBackend === 'laravel' ? '#090d16' : '#ffffff',
                      color: selectedBackend === 'laravel' ? '#ffffff' : '#475569',
                      border: '1px solid rgba(15,23,42,0.08)',
                    }}
                  >
                    Laravel (Octane / Swoole)
                  </button>
                  <button
                    onClick={() => setSelectedBackend('python')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: selectedBackend === 'python' ? 600 : 450,
                      background: selectedBackend === 'python' ? '#090d16' : '#ffffff',
                      color: selectedBackend === 'python' ? '#ffffff' : '#475569',
                      border: '1px solid rgba(15,23,42,0.08)',
                    }}
                  >
                    Python (FastAPI / Django)
                  </button>
                </div>

                {/* Live Benchmark Stats */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    background: '#f8fafc',
                    padding: '14px',
                    borderRadius: '14px',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>Throughput</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#090d16' }}>
                      {benchmarkScore.toLocaleString()} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#64748b' }}>req/s</span>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 500 }}>↑ 4.2x Industry Avg</div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>p99 Latency</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#059669' }}>
                      {selectedBackend === 'node' ? '11ms' : selectedBackend === 'laravel' ? '15ms' : '13ms'}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 500 }}>Sub-second guarantees</div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>Database I/O</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#090d16' }}>
                      PostgreSQL + Redis
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#0284c7', fontWeight: 500 }}>Pool: 120 concurrent</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: 100/100 Core Web Vitals & SEO Health Radar */}
            {activeTab === 'seo-radar' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 550, color: '#090d16' }}>
                      Google Lighthouse 100/100 &amp; Technical SEO Radar
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Flawless accessibility, strict schema markups &amp; sub-second mobile rendering.
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(16,185,129,0.12)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      color: '#059669',
                      fontSize: '0.76rem',
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>Lighthouse Verified</span>
                  </div>
                </div>

                {/* 4 Score Dials */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                    background: '#f8fafc',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ textAlign: 'center', background: '#ffffff', padding: '12px', borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #10b981', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#059669', fontSize: '1rem' }}>
                      100
                    </div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 500, color: '#090d16' }}>Performance</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>LCP: 0.28s</div>
                  </div>

                  <div style={{ textAlign: 'center', background: '#ffffff', padding: '12px', borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #10b981', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#059669', fontSize: '1rem' }}>
                      100
                    </div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 500, color: '#090d16' }}>Accessibility</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>WCAG 2.1 AA</div>
                  </div>

                  <div style={{ textAlign: 'center', background: '#ffffff', padding: '12px', borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #10b981', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#059669', fontSize: '1rem' }}>
                      100
                    </div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 500, color: '#090d16' }}>Best Practices</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>HTTPS &amp; CSP</div>
                  </div>

                  <div style={{ textAlign: 'center', background: '#ffffff', padding: '12px', borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #10b981', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#059669', fontSize: '1rem' }}>
                      100
                    </div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 500, color: '#090d16' }}>SEO Audit</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>JSON-LD Schema</div>
                  </div>
                </div>

                {/* Audit Checkpoints */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.72rem', color: '#334155' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>Schema.org Organization, FAQ &amp; Product graphs</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>Cumulative Layout Shift (CLS): 0.00</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Auxiliary Card 1: Social Proof & Client Reviews */}
        <div
          ref={floatPill1Ref}
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-18px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            borderRadius: '16px',
            padding: '10px 16px',
            boxShadow: '0 16px 32px -8px rgba(15, 23, 42, 0.12), 0 0 15px rgba(16, 185, 129, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#10b981', color: '#fff', fontSize: '0.7rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
              W
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284c7', color: '#fff', fontSize: '0.7rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-8px' }}>
              A
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', fontSize: '0.7rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-8px' }}>
              S
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600 }}>★ 4.9/5</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 500, color: '#090d16' }}>(120+ Reviews)</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748b' }}>Clutch &amp; Enterprise Verified</div>
          </div>
        </div>

        {/* Floating Auxiliary Card 2: Live Speed Dial */}
        <div
          ref={floatPill2Ref}
          style={{
            position: 'absolute',
            bottom: '-22px',
            left: '-16px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '16px',
            padding: '10px 16px',
            boxShadow: '0 16px 32px -8px rgba(15, 23, 42, 0.12), 0 0 20px rgba(16, 185, 129, 0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669',
            }}
          >
            <TrendingUp size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#090d16' }}>
              +340% Pipeline Speed
            </div>
            <div style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 500 }}>
              Average client conversion gain
            </div>
          </div>
        </div>

        {/* Floating Auxiliary Card 3: SLA Guarantee */}
        <div
          ref={floatPill3Ref}
          style={{
            position: 'absolute',
            bottom: '-24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            borderRadius: '16px',
            padding: '8px 14px',
            boxShadow: '0 12px 24px -6px rgba(15, 23, 42, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.74rem',
            fontWeight: 500,
            color: '#334155',
            zIndex: 10,
          }}
        >
          <ShieldCheck size={16} color="#10b981" />
          <span>99.99% Uptime Guarantee</span>
        </div>
      </div>
    </div>
  );
}
