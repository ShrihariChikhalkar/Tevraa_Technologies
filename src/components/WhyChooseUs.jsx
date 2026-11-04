import React from 'react';
import { ArrowUpRight, Shield, Zap, Target, Cpu, Layers, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconList = [Layers, Cpu, Target, Zap, Shield, HeartHandshake];

export default function WhyChooseUs() {
  return (
    <section className="why-section section-padding" id="why-us">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 06 — THE COMPETITIVE ADVANTAGE</span>
            </div>
            <h2 className="section-title">
              Why Partner<br />
              <span className="title-muted">With Us.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            We are built for organizations and founders who cannot afford failed software
            launches or shallow prototypes. We guarantee production quality, transparent delivery,
            and permanent IP ownership.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="why-grid">
          {siteConfig.differentiators.map((diff, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div key={diff.number} className="why-card">
                <div className="why-card-top">
                  <span className="why-card-num">{diff.number}</span>
                  <div className="why-icon-box">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                </div>

                <h3 className="why-card-title">{diff.title}</h3>
                <p className="why-card-desc">{diff.description}</p>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="commitment-banner">
          <div className="commitment-text">
            <strong>OUR ZERO-LOCK-IN PLEDGE:</strong> You own 100% of your source code,
            trained model weights, infrastructure scripts, and architecture blueprints.
            Complete freedom, zero proprietary handcuffs.
          </div>
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Initiate Discovery</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
