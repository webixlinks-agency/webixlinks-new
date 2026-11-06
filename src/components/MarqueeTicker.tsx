'use client';

import React from 'react';

interface MarqueeTickerProps {
  speed?: number;
  reverse?: boolean;
}

export default function MarqueeTicker({ speed = 25, reverse = false }: MarqueeTickerProps) {
  const items = [
    'HEADLESS WORDPRESS',
    'SALESFORCE CRM SPECIALIST',
    'NEXT.JS 16 APP ROUTER',
    'HUBSPOT PIPELINE AUTOMATION',
    'MERN & MEAN FULL-STACK',
    'LARAVEL OCTANE BACKENDS',
    'PYTHON FASTAPI MICROSERVICES',
    '100/100 LIGHTHOUSE SEO',
    'ZOHO CREATOR & DELUGE',
    'WOOCOMMERCE ENTERPRISE',
    'SUB-SECOND CORE WEB VITALS',
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        display: 'flex',
        padding: '18px 0',
        background: '#090d16',
        color: '#ffffff',
        position: 'relative',
        zIndex: 5,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div
        className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          animationDuration: `${speed}s`,
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#f8fafc',
            }}
          >
            <span>{item}</span>
            <span style={{ color: '#e11d48', fontSize: '1rem' }}>✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeScrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marqueeScroll linear infinite;
        }
        .marquee-track-reverse {
          display: flex;
          white-space: nowrap;
          animation: marqueeScrollReverse linear infinite;
        }
        .marquee-track:hover,
        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

