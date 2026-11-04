import React from 'react';

const tickerItems = [
  'FULL-STACK WEB APPLICATIONS',
  'CUSTOM SAAS ARCHITECTURE',
  'HANDS-ON INTERNSHIP PROGRAM',
  'IOS & ANDROID MOBILE ENGINEERING',
  'UI/UX & PRODUCT DESIGN SYSTEMS',
  'WORKFLOW AUTOMATION & API BRIDGES',
  'CLOUD DEPLOYMENTS & DEVOPS',
  'PRODUCTION ENGINEERING MENTORSHIP',
  'STRATEGIC TECHNOLOGY CONSULTING'
];

export default function CapabilityTicker() {
  return (
    <div className="ticker-wrapper" aria-label="Capabilities ticker" role="region">
      <div className="ticker-track">
        {tickerItems.map((item, idx) => (
          <span key={`a-${idx}`} className="ticker-item">
            <span className="ticker-text">{item}</span>
            <span className="ticker-star" aria-hidden="true">✳</span>
          </span>
        ))}
        {tickerItems.map((item, idx) => (
          <span key={`b-${idx}`} className="ticker-item" aria-hidden="true">
            <span className="ticker-text">{item}</span>
            <span className="ticker-star" aria-hidden="true">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
