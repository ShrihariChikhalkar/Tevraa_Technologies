import React, { useState } from 'react';
import { Terminal, Layers, Cpu, Database, Cloud } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & Web' },
  { id: 'mobile', label: 'Mobile Engineering' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'cloudAndDevOps', label: 'Cloud & Infrastructure' }
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all');

  // Flatten or filter technologies based on activeTab
  const getTechList = () => {
    if (activeTab === 'all') {
      return [
        ...siteConfig.techStack.frontend,
        ...siteConfig.techStack.mobile,
        ...siteConfig.techStack.backend,
        ...siteConfig.techStack.cloudAndDevOps
      ];
    }
    return siteConfig.techStack[activeTab] || [];
  };

  const techList = getTechList();

  return (
    <section className="tech-section section-padding" id="tech-stack">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 08 — PROVEN TOOLKIT</span>
            </div>
            <h2 className="section-title">
              Engineered on<br />
              <span className="title-muted">Modern Standards.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            We only deploy hardened, enterprise-tested technologies with strong global
            ecosystems, battle-tested security records, and top-tier community momentum.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="tech-filter-tabs" role="tablist" aria-label="Technology Stack Categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`tech-tab-btn ${activeTab === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-cards-grid">
          {techList.map((tech, idx) => (
            <div key={`${tech.name}-${idx}`} className="tech-grid-card">
              <div className="tech-card-header">
                <span className="tech-dot" />
                <span className="tech-status">STABLE / PRODUCTION</span>
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-desc">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
