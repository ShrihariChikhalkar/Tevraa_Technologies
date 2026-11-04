import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Shield, Terminal } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Internships', href: '#internship' },
    { label: 'Projects', href: '#projects' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Tech Stack', href: '#tech-stack' }
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a
          href="#home"
          className="brand"
          onClick={handleLinkClick}
          aria-label={`${siteConfig.company.name} Home`}
        >
          <span className="brand-mark">
            <img src="/tevraa-symbol.png" alt="Tevraa Logo" className="brand-logo-img" />
          </span>
          <div className="brand-text">
            <span className="brand-title">{siteConfig.company.name}</span>
            <small className="brand-sub">{siteConfig.company.tagline}</small>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Actions */}
        <div className="header-actions">
          <a href="#contact" className="btn btn-sm btn-outline nav-cta">
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={() => setMobileOpen(false)} />
        <div className="mobile-drawer-body">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-badge">NAVIGATION SYSTEM</span>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
            <ul>
              {navLinks.map((item, idx) => (
                <li key={item.href}>
                  <a href={item.href} onClick={handleLinkClick} className="mobile-nav-link">
                    <span className="mobile-link-num">0{idx + 1}</span>
                    <span className="mobile-link-text">{item.label}</span>
                    <ArrowUpRight size={18} className="mobile-link-arrow" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="mobile-nav-link mobile-nav-highlight"
                >
                  <span className="mobile-link-num">08</span>
                  <span className="mobile-link-text">Start a Project</span>
                  <ArrowUpRight size={18} className="mobile-link-arrow" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-footer-status">
              <span className="live-dot" />
              <span>{siteConfig.company.operatingStatus}</span>
            </div>
            <a href={`mailto:${siteConfig.company.email}`} className="mobile-email-link">
              {siteConfig.company.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
