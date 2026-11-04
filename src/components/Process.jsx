import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Process() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="process-section section-padding" id="process">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 07 — DELIVERY METHODOLOGY</span>
            </div>
            <h2 className="section-title">
              From First Thought<br />
              <span className="title-muted">To What’s Next.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            A battle-tested four-phase engineering framework designed to eliminate
            ambiguity, compress delivery timelines, and de-risk deployment.
          </p>
        </div>

        {/* 4 Stages Layout */}
        <div className="process-timeline-grid">
          {siteConfig.process.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.step}
                className={`process-card interactive-target ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setActiveStage(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setActiveStage(idx);
                }}
              >
                <div className="process-card-header">
                  <span className="process-step-num">{stage.step}</span>
                  <span className="process-phase-badge">PHASE {stage.step}</span>
                </div>

                <h3 className="process-card-title">{stage.title}</h3>
                <span className="process-card-sub">{stage.subtitle}</span>

                <p className="process-card-desc">{stage.description}</p>

                <div className="process-milestones">
                  <span className="milestones-title">KEY MILESTONES:</span>
                  <ul className="milestones-list">
                    {stage.milestones.map((m, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="m-icon" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="process-status-row">
                  <span className="status-indicator">
                    {isSelected ? '● CURRENTLY INSPECTED' : 'CLICK TO FOCUS'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
