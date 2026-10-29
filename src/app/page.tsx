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
import { ArrowRight, Sparkles, Layers, Cpu, Award, Compass, Calculator } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Main Hero with GSAP 3D Interactive Workstation */}
      <HeroSection />

      {/* Services Section + Subpage Link */}
      <ServicesSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/services"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Layers size={16} color="#2563eb" />
          <span>View Detailed Services Hub & Deliverables</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Tech Stack Matrix + Subpage Link */}
      <TechStackSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/tech-stack"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Cpu size={16} color="#2563eb" />
          <span>Explore Complete Technology Matrix & Architecture Guide</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Interactive Project Cost Estimator + Subpage Link */}
      <ProjectEstimator />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/estimator"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Calculator size={16} color="#2563eb" />
          <span>Open Full-Screen Cost Estimator & Pricing FAQ</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Case Studies + Subpage Link */}
      <CaseStudiesSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/case-studies"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Award size={16} color="#2563eb" />
          <span>View All Client Case Studies & Verified Results</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Process Section + Subpage Link */}
      <ProcessSection />
      <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '70px' }}>
        <Link
          href="/process"
          className="btn-secondary"
          style={{ padding: '12px 28px', fontSize: '0.92rem' }}
        >
          <Compass size={16} color="#2563eb" />
          <span>Read Our 4-Phase Engineering Framework</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Consultation & RFP Submission */}
      <ContactSection />

      <Footer />
    </main>
  );
}
