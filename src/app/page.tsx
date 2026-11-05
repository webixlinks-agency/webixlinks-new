import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectEstimator from '@/components/ProjectEstimator';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InteractiveAdvisor from '@/components/InteractiveAdvisor';
import MarqueeTicker from '@/components/MarqueeTicker';
import { ArrowRight, Sparkles, Layers, Cpu, Award, Compass, Calculator } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Main Hero with Spatial 3D Interactive Console & Top Marquee */}
      <HeroSection />

      {/* Services Bento Grid with 3D Tilt Cards */}
      <ServicesSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/services"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Layers size={16} color="#059669" />
          <span>View Detailed Services Hub &amp; Deliverables</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Tech Stack Matrix & System Blueprint */}
      <TechStackSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/tech-stack"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Cpu size={16} color="#059669" />
          <span>Explore Complete Technology Matrix &amp; Architecture Guide</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Interactive Project Cost Estimator with 3D Output */}
      <ProjectEstimator />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/estimator"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Calculator size={16} color="#059669" />
          <span>Open Full-Screen Cost Estimator &amp; Pricing FAQ</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Reverse 3D Marquee Divider */}
      <MarqueeTicker speed={32} reverse={true} />

      {/* Case Studies & Audited Results */}
      <CaseStudiesSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/case-studies"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Award size={16} color="#059669" />
          <span>View All Client Case Studies &amp; Verified Results</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* 4-Phase Agile Process Section */}
      <ProcessSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/process"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Compass size={16} color="#059669" />
          <span>Read Our 4-Phase Engineering Framework</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Consultation & RFP Submission */}
      <ContactSection />

      {/* ChatSpark-inspired Floating Interactive Scope Advisor */}
      <InteractiveAdvisor />

      <Footer />
    </main>
  );
}
