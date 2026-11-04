import React, { useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Check, Layers, Code, Sparkles, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const categories = ['All', 'Web & SaaS', 'Mobile Apps', 'Enterprise Systems'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 04 — SELECTED CASE STUDIES</span>
            </div>
            <h2 className="section-title">
              Engineered for<br />
              <span className="title-muted">Impact.</span>
            </h2>
          </div>
          <div className="section-head-right">
            <span className="illustrative-notice">
              * ALL PROJECTS SHOWN ARE ILLUSTRATIVE SAMPLE CASE STUDIES MARKED AS PLACEHOLDERS.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-row" role="tablist" aria-label="Project Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="project-card interactive-target"
              onClick={() => setActiveModalProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalProject(project);
                }
              }}
              aria-label={`View case study: ${project.title}`}
            >
              <div className="project-card-header">
                <span className="project-category-tag">{project.category}</span>
                <span className="project-sample-badge">ILLUSTRATIVE SPEC</span>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-tagline">{project.tagline}</p>
              <p className="project-card-desc">{project.description}</p>

              {/* Metrics preview */}
              <div className="project-metrics-row">
                {project.impactMetrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="project-metric-pill">
                    <span className="m-val">{m.value}</span>
                    <span className="m-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech preview */}
              <div className="project-tech-strip">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-badge tech-badge-count">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="project-card-cta">
                <span>Inspect Technical Case Study</span>
                <ArrowUpRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div
            className="modal-card case-study-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-header-meta">
                <span className="modal-tag">ILLUSTRATIVE CASE STUDY</span>
                <span className="modal-id">REF: {activeModalProject.id.toUpperCase()}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="sample-alert-banner">
                <Shield size={16} />
                <span>
                  <strong>Illustrative Demonstration:</strong> This case study represents
                  a sample architecture blueprint and delivery model for reference.
                </span>
              </div>

              <div className="modal-title-row">
                <span className="project-category-tag">{activeModalProject.category}</span>
                <h3 id="case-study-title" className="modal-title">
                  {activeModalProject.title}
                </h3>
                <p className="modal-tagline">{activeModalProject.tagline}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">THE ENGINEERING CHALLENGE</h4>
                <p className="modal-text">{activeModalProject.challenge}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">THE ARCHITECTURAL SOLUTION</h4>
                <p className="modal-text">{activeModalProject.solution}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">ILLUSTRATIVE BENCHMARK METRICS</h4>
                <div className="modal-metrics-grid">
                  {activeModalProject.impactMetrics.map((item, i) => (
                    <div key={i} className="modal-metric-card">
                      <div className="metric-big-val">{item.value}</div>
                      <div className="metric-caption">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">TECHNOLOGIES DEPLOYED</h4>
                <div className="modal-tags-wrap">
                  {activeModalProject.technologies.map((tech) => (
                    <span key={tech} className="pill-tag pill-tag-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </button>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setActiveModalProject(null)}
              >
                <span>Discuss Similar Architecture</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
