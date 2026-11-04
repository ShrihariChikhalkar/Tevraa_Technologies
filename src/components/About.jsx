import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, LineChart, Code2, GraduationCap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section section-padding" id="about" ref={sectionRef}>
      {/* Benchmark Stats Strip */}
      <div className="container">
        <div className="stats-banner-card">
          <div className="stats-badge-row">
            <span className="stats-badge">
              <span className="stats-dot" />
              <span>PERFORMANCE TELEMETRY & BENCHMARKS</span>
            </span>
            <span className="stats-disclaimer">
              * ILLUSTRATIVE BENCHMARKS — EASILY CONFIGURABLE IN SITE CONFIG
            </span>
          </div>

          <div className="stats-grid">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main About Manifesto */}
      <div className="container about-container">
        <div className="section-header-row">
          <div className="section-tag-wrap">
            <span className="section-tag">/ 01 — PHILOSOPHY & MANIFESTO</span>
          </div>
          <span className="section-meta-id">ID: ABOUT-2026</span>
        </div>

        <div className="about-layout-grid">
          <div className="about-headline-col">
            <h2 className="section-title">
              Technology Meets<br />
              <span className="title-muted">Imagination.</span>
            </h2>
            <div className="about-badge-list">
              <span className="pill-tag">Software Engineering</span>
              <span className="pill-tag">Digital Product Design</span>
              <span className="pill-tag">Talent & Internships</span>
            </div>
          </div>

          <div className="about-narrative-col">
            <p className="lead-paragraph">
              Most technology agencies stop at superficial templates; we build robust, scalable digital ecosystems.
              We bridge the chasm between visionary design, rigorous computer science, and measurable business growth.
            </p>

            <p className="narrative-body">
              Whether you are an enterprise modernizing mission-critical legacy architecture or an
              ambitious team launching a high-growth digital platform, we engineer software that is
              performant, secure, and built to scale. Simultaneously, our engineering incubator provides
              aspiring developers and designers with real-world production internships and senior mentorship.
            </p>

            {/* Differentiator Triad */}
            <div className="triad-cards">
              <div className="triad-card">
                <div className="triad-icon-wrap">
                  <Code2 size={20} strokeWidth={1.5} />
                </div>
                <h3 className="triad-title">Engineering Rigor</h3>
                <p className="triad-desc">
                  Zero throwaway code. Clean architecture, automated CI/CD pipelines, and high-concurrency systems.
                </p>
              </div>

              <div className="triad-card">
                <div className="triad-icon-wrap">
                  <Layers size={20} strokeWidth={1.5} />
                </div>
                <h3 className="triad-title">Product Design</h3>
                <p className="triad-desc">
                  Human-centered UI/UX design, accessible component libraries, and fluid micro-interactions that convert.
                </p>
              </div>

              <div className="triad-card">
                <div className="triad-icon-wrap">
                  <GraduationCap size={20} strokeWidth={1.5} />
                </div>
                <h3 className="triad-title">Talent & Internships</h3>
                <p className="triad-desc">
                  We mentor rising developers through structured internships on real production codebases with senior pairing.
                </p>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="link-underlined">
                <span>Partner with our engineering team</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
