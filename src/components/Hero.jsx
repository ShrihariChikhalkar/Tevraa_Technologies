import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, Layers, Cpu, Sparkles, Terminal } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for interactive network mesh with Tevraa brand palette
    const particleCount = Math.min(55, Math.floor((width * height) / 20000));
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const particleColors = [
      'rgba(0, 163, 255, ',   // Tevraa Electric Cyan
      'rgba(13, 104, 245, ',  // Tevraa Royal Blue
      'rgba(110, 56, 247, ',  // Tevraa Violet
      'rgba(240, 246, 255, '  // Crisp White
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.45 + 0.25,
        colorPrefix: particleColors[i % particleColors.length]
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const heroEl = canvas.closest('.hero-section');
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
      heroEl.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse influence
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.baseAlpha})`;
        ctx.fill();

        // Connect adjacent nodes with Tevraa Cyan glow
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 110;
          if (dist2 < maxDist) {
            const alpha = (1 - dist2 / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 163, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse with Tevraa Violet glow
        if (dist < mouse.radius) {
          const mouseAlpha = (1 - dist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(110, 56, 247, ${mouseAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section" id="home" aria-label="Hero Section">
      {/* Interactive Network Mesh Canvas */}
      <canvas ref={canvasRef} className="hero-neural-canvas" aria-hidden="true" />

      {/* Grid Pattern and Ambient Overlay */}
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-radial-vignette" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* Left Column: Hero Content */}
          <div className="hero-content-col">
            <div className="hero-eyebrow">
              <span className="live-status-pill">
                <span className="pulse-dot" />
                <span>SYSTEM ACTIVE • 2026 ROADMAP READY</span>
              </span>
              <span className="eyebrow-divider">/</span>
              <span className="eyebrow-text">{siteConfig.company.eyebrow}</span>
            </div>

            <h1 className="hero-headline">
              <span className="headline-row">WE ENGINEER</span>
              <span className="headline-row">
                THE <span className="headline-outline">FUTURE</span>
                <span className="accent-period">.</span>
              </span>
            </h1>

            <p className="hero-subheading">{siteConfig.company.heroSubheading}</p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#internship" className="btn btn-ghost btn-lg">
                <span>Internship Program</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Strategic Pillars Meta Strip */}
            <div className="hero-pillars-strip" aria-label="Core Engineering Pillars">
              <div className="pillar-item">
                <span className="pillar-num">01</span>
                <span className="pillar-label">STRATEGY</span>
              </div>
              <span className="pillar-sep">•</span>
              <div className="pillar-item">
                <span className="pillar-num">02</span>
                <span className="pillar-label">DESIGN</span>
              </div>
              <span className="pillar-sep">•</span>
              <div className="pillar-item">
                <span className="pillar-num">03</span>
                <span className="pillar-label">ENGINEERING</span>
              </div>
              <span className="pillar-sep">•</span>
              <div className="pillar-item">
                <span className="pillar-num">04</span>
                <span className="pillar-label">INTERNSHIP</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D-Inspired Futuristic Orbit & Architecture Core */}
          <div className="hero-art-col" aria-hidden="true">
            <div className="orbit-stage">
              {/* Outer Orbit Rings */}
              <div className="orbit-ring ring-1" />
              <div className="orbit-ring ring-2" />
              <div className="orbit-ring ring-3" />

              {/* Central Core */}
              <div className="orbit-core">
                <div className="core-sonar-ring" />
                <div className="core-inner-glow" />
                <img src="/tevraa-symbol.png" alt="Tevraa Technologies" className="hero-orbit-logo-img" />
                <div className="core-title">
                  <span>TEVRAA</span>
                  <strong>TECHNOLOGIES</strong>
                </div>
              </div>

              {/* Floating Interface Cards */}
              <div className="floating-badge badge-top-right">
                <span className="badge-signal" />
                <span className="badge-tag">WEB & MOBILE</span>
                <span className="badge-val">V.4.2</span>
              </div>

              <div className="floating-badge badge-bottom-left">
                <span className="badge-signal" />
                <span className="badge-tag">DISTRIBUTED CLOUD</span>
                <span className="badge-val">99.98% SLA</span>
              </div>

              <div className="floating-badge badge-middle-left">
                <Terminal size={12} className="badge-icon" />
                <span className="badge-tag">INTERNSHIPS ACTIVE</span>
              </div>

              {/* Geometric Corner Accents */}
              <span className="geo-cross cross-top-left">+</span>
              <span className="geo-cross cross-bottom-right">+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-line" />
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}
