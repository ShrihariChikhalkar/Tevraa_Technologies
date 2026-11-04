import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Industries() {
  const [expandedIndustry, setExpandedIndustry] = useState(null);

  const toggleIndustry = (id) => {
    setExpandedIndustry((prev) => (prev === id ? null : id));
  };

  return (
    <section className="industries-section section-padding" id="industries">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 05 — SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="section-title">
              Technology for<br />
              <span className="title-muted">Every Sector.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            We adapt deep domain logic, regulatory constraints, and compliance
            requirements to the industry—never forcing one-size-fits-all templates.
          </p>
        </div>

        {/* Industries List Table */}
        <div className="industry-accordion-list">
          {siteConfig.industries.map((ind) => {
            const isExpanded = expandedIndustry === ind.id;
            return (
              <div
                key={ind.id}
                className={`industry-row-item ${isExpanded ? 'is-expanded' : ''}`}
              >
                <div
                  className="industry-row-summary interactive-target"
                  onClick={() => toggleIndustry(ind.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleIndustry(ind.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <span className="industry-row-num">{ind.number}</span>
                  <div className="industry-row-main">
                    <h3 className="industry-row-title">{ind.title}</h3>
                    <p className="industry-row-brief">{ind.description}</p>
                  </div>
                  <div className="industry-row-icon">
                    <ChevronDown
                      size={20}
                      className={`industry-chevron ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>

                {/* Expanded Panel */}
                {isExpanded && (
                  <div className="industry-row-details">
                    <div className="industry-detail-content">
                      <div className="industry-detail-block">
                        <span className="detail-label">SPECIALIZED DOMAIN SOLUTIONS:</span>
                        <p className="detail-text">{ind.description}</p>
                      </div>
                      <div className="industry-detail-block">
                        <span className="detail-label">REPRESENTATIVE USE CASES:</span>
                        <div className="detail-use-case">
                          <CheckCircle2 size={16} />
                          <span>{ind.useCase}</span>
                        </div>
                      </div>
                      <div className="industry-detail-cta">
                        <a href="#contact" className="btn btn-outline btn-sm">
                          <span>Build for {ind.title}</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
