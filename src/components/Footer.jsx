import React from 'react';
import { ArrowUp, ArrowUpRight, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Banner */}
        <div className="footer-cta-card">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">READY TO ACCELERATE YOUR ROADMAP?</span>
            <h3 className="footer-cta-title">
              Let’s engineer something exceptional together.
            </h3>
          </div>
          <a href="#contact" className="btn btn-primary btn-lg">
            <span>Start a Conversation</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" className="brand footer-brand" aria-label="Back to top">
              <span className="brand-mark">
                <img src="/tevraa-symbol.png" alt="Tevraa" className="brand-logo-img" />
              </span>
              <div className="brand-text">
                <span className="brand-title">{siteConfig.company.name}</span>
                <small className="brand-sub">{siteConfig.company.tagline}</small>
              </div>
            </a>
            <p className="footer-bio">{siteConfig.company.description}</p>
            <div className="footer-status-pill">
              <span className="live-dot" />
              <span>{siteConfig.company.operatingStatus}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-links-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About & Manifesto</a></li>
              <li><a href="#services">Capabilities</a></li>
              <li><a href="#internship">Internships & Careers</a></li>
              <li><a href="#projects">Case Studies</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#tech-stack">Tech Stack</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="footer-links-col">
            <span className="footer-col-title">CAPABILITIES</span>
            <ul className="footer-links-list">
              {siteConfig.services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-links-col">
            <span className="footer-col-title">COMMUNICATIONS</span>
            <div className="footer-contact-block">
              <a href={`mailto:${siteConfig.company.email}`} className="footer-email">
                {siteConfig.company.email}
              </a>
              {siteConfig.company.secondaryEmail && (
                <a href={`mailto:${siteConfig.company.secondaryEmail}`} className="footer-email footer-sub-email">
                  {siteConfig.company.secondaryEmail}
                </a>
              )}
              <a href={`tel:${siteConfig.company.phone.replace(/[^0-9+]/g, '')}`} className="footer-phone">
                {siteConfig.company.phone}
              </a>
              <p className="footer-addr">{siteConfig.company.address}</p>
            </div>

            <span className="footer-col-title sub-title">NETWORK</span>
            <ul className="footer-social-list">
              {siteConfig.company.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © {new Date().getFullYear()} {siteConfig.company.name}. ALL RIGHTS RESERVED.
            <span className="footer-note-tag"> [EDITABLE TEMPLATE SPECIFICATION]</span>
          </span>

          <a href="#home" onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top of page">
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
