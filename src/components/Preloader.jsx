import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Respect reduced motion by completing immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            onComplete?.();
          }, 600);
          return 100;
        }
        // Accelerating progress curve
        const step = Math.max(2, Math.floor((100 - prev) * 0.18));
        return Math.min(100, prev + step);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`preloader-overlay ${fading ? 'fade-out' : ''}`}
      aria-label="Loading website"
      role="status"
    >
      <div className="preloader-content">
        <div className="preloader-mark">
          <img src="/tevraa-symbol.png" alt="Tevraa" className="preloader-logo-img" />
          <div className="preloader-ring" />
        </div>
        <div className="preloader-brand">{siteConfig.company.name}</div>
        <div className="preloader-tagline">{siteConfig.company.tagline}</div>

        <div className="preloader-bar-wrap">
          <div
            className="preloader-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="preloader-meta">
          <span>INITIALIZING SYSTEM</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
