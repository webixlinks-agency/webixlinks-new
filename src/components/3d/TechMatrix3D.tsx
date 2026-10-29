'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface TechItem {
  name: string;
  category: string;
  color: string;
}

const techItems: TechItem[] = [
  { name: 'WordPress', category: 'CMS', color: '#21759b' },
  { name: 'Headless WP', category: 'CMS', color: '#0073aa' },
  { name: 'Salesforce', category: 'CRM', color: '#00a1e0' },
  { name: 'HubSpot', category: 'CRM', color: '#ff7a59' },
  { name: 'Zoho CRM', category: 'CRM', color: '#d32f2f' },
  { name: 'React.js', category: 'Frontend', color: '#0ea5e9' },
  { name: 'Next.js', category: 'Frontend', color: '#000000' },
  { name: 'Angular', category: 'Frontend', color: '#dd0031' },
  { name: 'MERN Stack', category: 'FullStack', color: '#8b5cf6' },
  { name: 'MEAN Stack', category: 'FullStack', color: '#ec4899' },
  { name: 'Node.js', category: 'Backend', color: '#22c55e' },
  { name: 'Laravel', category: 'Backend', color: '#ff2d20' },
  { name: 'Python', category: 'Backend', color: '#3776ab' },
  { name: 'FastAPI', category: 'Backend', color: '#059669' },
  { name: 'Technical SEO', category: 'Growth', color: '#f59e0b' },
  { name: 'GraphQL', category: 'API', color: '#e535ab' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'MongoDB', category: 'Database', color: '#47a248' },
];

export default function TechMatrix3D({
  activeCategory = 'All',
}: {
  activeCategory?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTech, setActiveTech] = useState<string>('Next.js');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x3b82f6, 2.5);
    dirLight.position.set(4, 5, 5);
    scene.add(dirLight);

    const group = new THREE.Group();
    scene.add(group);

    // Create 3D Holographic Sphere Grid Wireframe
    const sphereGeo = new THREE.SphereGeometry(2.3, 24, 24);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireSphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(wireSphere);

    // Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Create floating tech nodes distributed on Fibonacci sphere
    const nodeCount = techItems.length;
    const nodes: THREE.Mesh[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    techItems.forEach((tech, i) => {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const r = 2.45;

      const nodeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
      const nodeColor = new THREE.Color(tech.color);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColor,
        roughness: 0.1,
        metalness: 0.7,
      });

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x * r, y * r, z * r);
      nodeMesh.lookAt(0, 0, 0);
      nodeMesh.userData = { name: tech.name, category: tech.category };
      group.add(nodeMesh);
      nodes.push(nodeMesh);
    });

    // Interaction
    let targetRotY = 0;
    let targetRotX = 0;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouse.x;
        const deltaY = e.clientY - prevMouse.y;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    let animationId: number;
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      if (!isDragging) {
        targetRotY += 0.004;
      }

      group.rotation.y += (targetRotY - group.rotation.y) * 0.1;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.1;

      core.rotation.y = -elapsed * 0.5;
      core.rotation.x = elapsed * 0.3;

      // Pulse nodes
      nodes.forEach((node, idx) => {
        const scale = 1 + Math.sin(elapsed * 2 + idx) * 0.12;
        node.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.6) 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        overflow: 'hidden',
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
      }}
    >
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', cursor: 'grab' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '18px',
          left: '20px',
          padding: '6px 14px',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#2563eb',
          border: '1px solid rgba(37, 99, 235, 0.15)',
        }}
      >
        3D Interactive Tech Constellation
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '20px',
          fontSize: '0.75rem',
          color: '#64748b',
          fontWeight: 600,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '6px 12px',
          borderRadius: '9999px',
          border: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        Click & Drag to Spin Matrix
      </div>
    </div>
  );
}
