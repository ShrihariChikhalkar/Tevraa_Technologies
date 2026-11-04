import React, { useState } from 'react';
import {
  Code2, Smartphone, Workflow, Database, ShieldCheck,
  Layers, ArrowUpRight, X, Check, CheckCircle2,
  Palette, Cloud, ShoppingBag, GraduationCap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Map icon component by service id
const iconMap = {
  'web-dev': Code2,
  'custom-software': Layers,
  'mobile-apps': Smartphone,
  'ui-ux-design': Palette,
  'cloud-devops': Cloud,
  'automation-api': Workflow,
  'ecommerce': ShoppingBag,
  'consulting': ShieldCheck,
  'internship-program': GraduationCap
};

export default function Services({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null);

  const openServiceModal = (service) => {
    setActiveModal(service);
  };

  const closeServiceModal = () => {
    setActiveModal(null);
  };

  const handleEnquire = (serviceTitle) => {
    closeServiceModal();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 02 — CAPABILITIES & SOLUTIONS</span>
            </div>
            <h2 className="section-title">
              End-to-End Digital<br />
              <span className="title-muted">Capabilities.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            We engineer high-stakes digital products from inception to massive scale.
            Clear business outcomes, zero technical debt, and continuous delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.id] || Code2;
            return (
              <article
                key={service.id}
                className="service-card interactive-target"
                onClick={() => openServiceModal(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openServiceModal(service);
                  }
                }}
                aria-label={`View details for ${service.title}`}
              >
                <div className="service-card-top">
                  <span className="service-card-num">{service.number} / 09</span>
                  <div className="service-icon-box">
                    <Icon size={22} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="service-card-badge">{service.badge}</div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-summary">{service.summary}</p>

                <div className="service-card-outcome">
                  <strong>Outcome:</strong> {service.outcome}
                </div>

                <div className="service-tag-cloud">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="service-tag service-tag-more">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="service-card-bottom">
                  <span className="service-learn-more">
                    Inspect Architecture & Deliverables
                  </span>
                  <div className="service-action-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      {activeModal && (
        <div
          className="modal-overlay"
          onClick={closeServiceModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="modal-card service-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-header-meta">
                <span className="modal-tag">CAPABILITY SPECIFICATION</span>
                <span className="modal-id">SERVICE-{activeModal.number}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeServiceModal}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-title-row">
                <span className="modal-badge">{activeModal.badge}</span>
                <h3 id="service-modal-title" className="modal-title">
                  {activeModal.title}
                </h3>
                <p className="modal-summary">{activeModal.summary}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">COMMERCIAL OUTCOME & VALUE</h4>
                <div className="modal-outcome-box">
                  <CheckCircle2 size={18} className="outcome-icon" />
                  <p>{activeModal.outcome}</p>
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">WHAT WE DELIVER</h4>
                <ul className="modal-deliverables-list">
                  {activeModal.deliverables.map((item, i) => (
                    <li key={i}>
                      <span className="bullet-point">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">CORE TECHNOLOGIES</h4>
                <div className="modal-tags-wrap">
                  {activeModal.tags.map((tag) => (
                    <span key={tag} className="pill-tag pill-tag-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={closeServiceModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleEnquire(activeModal.title)}
              >
                <span>Enquire About This Service</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
