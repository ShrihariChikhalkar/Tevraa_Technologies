import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2, AlertCircle, RefreshCw, Clock, Share2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // { mode: 'api' | 'mailto', success: boolean, message: string }

  // Update selected service if passed from Service modal
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@company.com).';
    }
    if (!formData.service) errs.service = 'Please select a core service area.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a brief description (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    const isInternship = formData.service?.toLowerCase().includes('internship');
    const subject = isInternship
      ? `[Internship Application] ${formData.service} — ${formData.name}`
      : `[Project Enquiry] ${formData.service} — ${formData.name} (${formData.company || 'Direct'})`;

    try {
      const endpoint = siteConfig.contact.formEndpoint || 'https://formsubmit.co/ajax/prathamatigre@gmail.com';

      const payload = {
        'Client Name': formData.name,
        'Client Email': formData.email,
        'Organization / College': formData.company || 'Not specified',
        'Service / Track': formData.service,
        'Budget / Status': formData.budget || 'Not specified',
        'Project Brief / Notes': formData.message,
        'Submission Timestamp': new Date().toLocaleString(),
        '_subject': subject,
        '_template': 'table',
        '_captcha': 'false',
        '_replyto': formData.email
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitResult({
          success: true,
          clientName: formData.name,
          clientEmail: formData.email,
          message:
            'Thank you! Your project enquiry has been submitted directly to our engineering leadership. Our team will review your requirements and reach out to you within 24 hours.'
        });
        setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Server status ${response.status}`);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitResult({
        success: false,
        message:
          'Unable to deliver message automatically due to a network connection issue. Please check your connection or contact our team directly at info@tevraatechnologies.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    setErrors({});
    setSubmitResult(null);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 09 — INITIATE COLLABORATION</span>
            </div>
            <h2 className="section-title">
              Have a Challenge?<br />
              <span className="title-muted">Let’s Talk.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            Direct access to senior engineers and architects from day one.
            We respond to every serious enterprise inquiry within 24 hours.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info (Enlarged & Highlighted) */}
          <div className="contact-info-col">
            {/* Primary & Direct Emails Card */}
            <div className="contact-meta-card contact-meta-card-large">
              <div className="contact-badge-header">
                <span className="pulse-dot" />
                <span className="meta-card-label">OFFICIAL DIRECT COMMUNICATIONS</span>
              </div>
              
              <div className="contact-email-group">
                <div className="contact-email-row">
                  <span className="email-type-pill">GENERAL & INQUIRIES</span>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="contact-direct-link-hero"
                  >
                    <span>{siteConfig.company.email}</span>
                    <ArrowUpRight size={22} className="link-arrow-icon" />
                  </a>
                </div>

                {siteConfig.company.secondaryEmail && (
                  <div className="contact-email-row">
                    <span className="email-type-pill email-type-pill-alt">DIRECT & LEADERSHIP</span>
                    <a
                      href={`mailto:${siteConfig.company.secondaryEmail}`}
                      className="contact-direct-link-hero secondary-link"
                    >
                      <span>{siteConfig.company.secondaryEmail}</span>
                      <ArrowUpRight size={20} className="link-arrow-icon" />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="contact-status-strip">
                <Clock size={14} className="status-clock-icon" />
                <span>Mon – Sat: 9:30 AM to 7:00 PM IST • Pune Headquarters</span>
              </div>
            </div>

            {/* Phone & Office Location Grid */}
            <div className="contact-highlights-grid">
              {/* Phone Card */}
              <div className="contact-highlight-card">
                <div className="highlight-icon-box">
                  <Phone size={22} strokeWidth={1.75} />
                </div>
                <div className="highlight-body">
                  <span className="highlight-label">CALL & WHATSAPP</span>
                  <a
                    href={`tel:${siteConfig.company.phone.replace(/[^0-9+]/g, '')}`}
                    className="highlight-value-link"
                  >
                    {siteConfig.company.phone}
                  </a>
                  <p className="highlight-sub">Direct line for client discovery & projects</p>
                </div>
              </div>

              {/* Office Location Card */}
              <div className="contact-highlight-card">
                <div className="highlight-icon-box">
                  <MapPin size={22} strokeWidth={1.75} />
                </div>
                <div className="highlight-body">
                  <span className="highlight-label">PUNE HEADQUARTERS</span>
                  <div className="highlight-address">
                    {siteConfig.company.address}
                  </div>
                  <p className="highlight-sub">Maharashtra, India (Global Remote Delivery)</p>
                </div>
              </div>
            </div>

            {/* Official Social Channels Card (Including X / Twitter) */}
            <div className="contact-socials-card">
              <div className="socials-card-header">
                <Share2 size={16} />
                <span>VERIFIED SOCIAL & COMMUNITY CHANNELS</span>
              </div>
              <div className="contact-social-pills-wrap">
                {siteConfig.company.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-card-header">
                <span className="form-card-tag">PROJECT ENQUIRY PROTOCOL</span>
                <span className="form-required-note">* REQUIRED FIELDS</span>
              </div>

              {submitResult ? (
                <div className="submission-result-panel">
                  <div className={`result-icon-box ${submitResult.success ? 'result-icon-success' : 'result-icon-error'}`}>
                    {submitResult.success ? <CheckCircle2 size={36} /> : <AlertCircle size={36} />}
                  </div>
                  <h3 className="result-title">
                    {submitResult.success ? 'Enquiry Received Successfully' : 'Submission Notice'}
                  </h3>
                  <p className="result-text">{submitResult.message}</p>
                  {submitResult.success && submitResult.clientEmail && (
                    <p className="result-disclaimer">
                      A confirmation has been logged for <strong>{submitResult.clientName || 'your team'}</strong>. Our engineers will follow up directly at <code>{submitResult.clientEmail}</code>.
                    </p>
                  )}
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={handleReset}
                  >
                    <RefreshCw size={14} />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-fields-grid">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name-input">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className={errors.name ? 'has-error' : ''}
                      />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email-input">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className={errors.email ? 'has-error' : ''}
                      />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>

                    {/* Company */}
                    <div className="form-group">
                      <label htmlFor="company-input">Organization / Company</label>
                      <input
                        id="company-input"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Industries Inc."
                      />
                    </div>

                    {/* Service Required */}
                    <div className="form-group">
                      <label htmlFor="service-select">
                        Service Area <span className="req">*</span>
                      </label>
                      <select
                        id="service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={errors.service ? 'has-error' : ''}
                      >
                        <option value="">Select a capability area or internship...</option>
                        {siteConfig.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Internship Application — General">
                          Internship Application — General
                        </option>
                        <option value="Custom Multi-Disciplinary System">
                          Custom Multi-Disciplinary System
                        </option>
                        <option value="General Architecture Advisory">
                          General Architecture Advisory
                        </option>
                      </select>
                      {errors.service && <span className="field-error">{errors.service}</span>}
                    </div>

                    {/* Project Budget / Applicant Status */}
                    <div className="form-group full-width">
                      <label htmlFor="budget-select">
                        {formData.service?.toLowerCase().includes('internship')
                          ? 'Applicant Status / Budget'
                          : 'Estimated Project Budget'}
                      </label>
                      <select
                        id="budget-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select option (Optional)...</option>
                        {siteConfig.contact.budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Description / Internship Overview */}
                    <div className="form-group full-width">
                      <label htmlFor="message-input">
                        {formData.service?.toLowerCase().includes('internship')
                          ? 'Background, Skills & Portfolio / GitHub'
                          : 'Project Overview & Architecture Goals'}{' '}
                        <span className="req">*</span>
                      </label>
                      <textarea
                        id="message-input"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          formData.service?.toLowerCase().includes('internship')
                            ? 'Share your background, tech stack (React, Node, etc.), GitHub/portfolio link, and why you want to intern with us...'
                            : 'Tell us about the challenge, expected timelines, existing systems, or desired outcomes...'
                        }
                        className={errors.message ? 'has-error' : ''}
                      />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>
                  </div>

                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-block submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Transmitting Securely...</span>
                          <RefreshCw size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>
                            {formData.service?.toLowerCase().includes('internship')
                              ? 'Submit Internship Application'
                              : 'Submit Project Enquiry'}
                          </span>
                          <ArrowUpRight size={18} />
                        </>
                      )}
                    </button>
                    <small className="form-legal-note">
                      Submissions are encrypted via SSL and delivered directly to engineering leadership. We respect strict non-disclosure agreements (NDA).
                    </small>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
