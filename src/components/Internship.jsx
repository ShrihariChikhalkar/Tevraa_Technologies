import React, { useState } from 'react';
import {
  GraduationCap, Code2, Smartphone, Layers, Cloud,
  CheckCircle2, ArrowRight, Award, Users, Laptop, Clock, Briefcase, FileCheck
} from 'lucide-react';

const internshipTracks = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    category: 'WEB ENGINEERING TRACK',
    icon: Code2,
    duration: '12 - 16 Weeks',
    commitment: 'Part-Time or Full-Time',
    mode: 'Remote or Hybrid',
    summary:
      'Immerse yourself in real-world web application engineering. You will collaborate on live agency codebases using React, Next.js, Node.js, and TypeScript, mastering modern component architecture and REST/GraphQL APIs.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    curriculum: [
      {
        step: '01',
        title: 'Modern Architecture & Tooling',
        detail: 'Deep dive into Git branching models, TypeScript strict typing, state management, and modern component design patterns.'
      },
      {
        step: '02',
        title: 'API Design & Backend Integration',
        detail: 'Build robust REST and GraphQL endpoints, relational database schemas with Prisma/PostgreSQL, and secure JWT authentication.'
      },
      {
        step: '03',
        title: 'Live Client Sprint Contribution',
        detail: 'Join daily engineering standups, resolve real GitHub issues, review pull requests, and optimize Core Web Vitals performance.'
      },
      {
        step: '04',
        title: 'Capstone Deployment & Code Review',
        detail: 'Ship an end-to-end production web application to AWS/Vercel with automated CI/CD and participate in a final architecture review.'
      }
    ],
    outcomes: {
      mentorship: 'Daily Senior Code Reviews',
      qualification: 'Verified GitHub Commits & Live URLs'
    }
  },
  {
    id: 'mobile',
    title: 'Mobile App Engineering',
    category: 'MOBILE DEVELOPMENT TRACK',
    icon: Smartphone,
    duration: '12 - 16 Weeks',
    commitment: 'Part-Time or Full-Time',
    mode: 'Remote or Hybrid',
    summary:
      'Build fluid, responsive cross-platform mobile apps for iOS and Android. Master native animations, offline-first data synchronization, biometric authentication, and app store deployment pipelines.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Expo', 'SQLite', 'Mobile UX'],
    curriculum: [
      {
        step: '01',
        title: 'Cross-Platform Fundamentals',
        detail: 'Master React Native/Flutter navigation patterns, responsive layouts, gestures, and state management.'
      },
      {
        step: '02',
        title: 'Device APIs & Offline Storage',
        detail: 'Implement local offline caching with SQLite, push notification listeners, biometric login, and camera APIs.'
      },
      {
        step: '03',
        title: 'Performance Profiling & Animations',
        detail: 'Profile frame rates to maintain 60/120 FPS animations, reduce bundle sizes, and handle network flakiness gracefully.'
      },
      {
        step: '04',
        title: 'App Store & Play Store Release',
        detail: 'Configure test tracks via TestFlight and Google Play Console, manage signing certificates, and release a live build.'
      }
    ],
    outcomes: {
      mentorship: 'Weekly Mobile Architecture 1-on-1s',
      qualification: 'Live Published Mobile Project'
    }
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    category: 'PRODUCT DESIGN TRACK',
    icon: Layers,
    duration: '10 - 14 Weeks',
    commitment: 'Flexible / Hybrid',
    mode: 'Remote or Hybrid',
    summary:
      'Learn how high-performing digital agencies craft world-class visual identities and user experiences. Create design systems, user personas, interactive prototypes, and developer-ready handoff documentation.',
    technologies: ['Figma', 'Design Systems', 'Wireframing', 'User Research', 'Prototyping'],
    curriculum: [
      {
        step: '01',
        title: 'User Research & Information Architecture',
        detail: 'Conduct stakeholder interviews, analyze user problem statements, and build wireframes and user flow diagrams.'
      },
      {
        step: '02',
        title: 'Design Systems & Atomic Components',
        detail: 'Build scalable typography scales, color palettes, auto-layout components, and comprehensive Figma design libraries.'
      },
      {
        step: '03',
        title: 'Interactive Prototyping & Motion',
        detail: 'Craft high-fidelity clickable prototypes with micro-interactions, responsive variants, and usability testing rounds.'
      },
      {
        step: '04',
        title: 'Developer Handoff & Portfolio Showcase',
        detail: 'Prepare pixel-perfect design specs, export token variables, and document a complete Behance/case-study portfolio piece.'
      }
    ],
    outcomes: {
      mentorship: 'Creative Director Critique Sessions',
      qualification: '2 Production-Grade Case Studies'
    }
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps Engineering',
    category: 'INFRASTRUCTURE TRACK',
    icon: Cloud,
    duration: '12 - 16 Weeks',
    commitment: 'Part-Time or Full-Time',
    mode: 'Remote',
    summary:
      'Gain hands-on experience provisioning and automating modern cloud infrastructure. Work with Docker containerization, CI/CD automated test pipelines, serverless functions, and monitoring tools.',
    technologies: ['Docker', 'AWS / Azure', 'GitHub Actions', 'Linux', 'Terraform', 'PostgreSQL'],
    curriculum: [
      {
        step: '01',
        title: 'Linux Systems & Containerization',
        detail: 'Containerize multi-container applications with Docker and Docker Compose, optimizing image layers and build times.'
      },
      {
        step: '02',
        title: 'CI/CD Pipelines & Automation',
        detail: 'Build automated linting, unit testing, and deployment pipelines using GitHub Actions for continuous delivery.'
      },
      {
        step: '03',
        title: 'Cloud Infrastructure as Code',
        detail: 'Provision VPCs, compute instances, managed databases, and object storage on AWS/Azure using Terraform.'
      },
      {
        step: '04',
        title: 'Observability & Security Auditing',
        detail: 'Set up real-time telemetry, structured logging, alert triggers, and perform security vulnerability scans.'
      }
    ],
    outcomes: {
      mentorship: 'Senior SRE / Cloud Architect Guidance',
      qualification: 'Production Cloud Blueprint & Certification Prep'
    }
  }
];

const programPerks = [
  {
    icon: Laptop,
    title: 'Real Production Codebases',
    desc: 'No sandbox toy projects or dummy exercises. You will contribute to live client deliverables and agency products used by real people.'
  },
  {
    icon: Users,
    title: '1-on-1 Senior Mentorship',
    desc: 'You are paired directly with a senior engineer or designer who conducts daily code reviews and provides regular career advice.'
  },
  {
    icon: Briefcase,
    title: 'PPO & Full-Time Pathway',
    desc: 'We recruit our full-time junior developers and designers directly from our top internship cohorts. Exceptional interns receive direct job offers.'
  },
  {
    icon: Award,
    title: 'Certificate & Recommendation',
    desc: 'Receive an official verified certificate of completion, a personalized letter of recommendation, and verifiable public GitHub contributions.'
  }
];

export default function Internship({ onApply }) {
  const [selectedTrack, setSelectedTrack] = useState(internshipTracks[0]);
  const [activeStep, setActiveStep] = useState(0);

  const handleApplyClick = (trackTitle) => {
    if (onApply) {
      onApply(`Internship Application — ${trackTitle}`);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="internship-section section-padding" id="internship">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-split">
          <div>
            <div className="section-tag-wrap">
              <span className="section-tag">/ 03 — TALENT & INTERNSHIP INCUBATOR</span>
            </div>
            <h2 className="section-title">
              We Provide Internships.<br />
              <span className="title-muted">Build Real Products.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            We believe the best engineers and designers learn by doing. Our internship
            programs give students, graduates, and aspiring developers hands-on experience
            on real production codebases alongside senior mentors.
          </p>
        </div>

        {/* 4 Pillars of the Internship Program */}
        <div className="internship-perks-grid">
          {programPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className="internship-perk-card">
                <div className="perk-icon-wrap">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-desc">{perk.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Track Explorer */}
        <div className="internship-workbench">
          {/* Track Tabs */}
          <div className="internship-tabs-row" role="tablist" aria-label="Internship Tracks">
            {internshipTracks.map((track) => {
              const Icon = track.icon;
              const isSelected = selectedTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`internship-tab-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => {
                    setSelectedTrack(track);
                    setActiveStep(0);
                  }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{track.title}</span>
                </button>
              );
            })}
          </div>

          {/* Track Detail Grid */}
          <div className="internship-display-grid">
            {/* Left Column: Track Info & Apply */}
            <div className="internship-specs-card">
              <div className="internship-specs-badge">
                <span className="pulse-dot" />
                <span>{selectedTrack.category}</span>
              </div>

              <h3 className="internship-specs-title">{selectedTrack.title}</h3>
              <p className="internship-specs-summary">{selectedTrack.summary}</p>

              {/* Technologies Tag Cloud */}
              <div className="internship-tags-wrap">
                <span className="track-meta-label">TECH TOOLKIT:</span>
                <div className="track-tags-list">
                  {selectedTrack.technologies.map((tech) => (
                    <span key={tech} className="track-tag-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Meta Specs Box */}
              <div className="internship-meta-box">
                <div className="meta-spec-item">
                  <span className="spec-label">PROGRAM DURATION</span>
                  <span className="spec-val">{selectedTrack.duration}</span>
                </div>
                <div className="meta-spec-item">
                  <span className="spec-label">WORK MODE</span>
                  <span className="spec-val">{selectedTrack.mode}</span>
                </div>
                <div className="meta-spec-item">
                  <span className="spec-label">MENTORSHIP FORMAT</span>
                  <span className="spec-val">{selectedTrack.outcomes.mentorship}</span>
                </div>
                <div className="meta-spec-item">
                  <span className="spec-label">KEY DELIVERABLE</span>
                  <span className="spec-val">{selectedTrack.outcomes.qualification}</span>
                </div>
              </div>

              <div className="internship-cta-action">
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={() => handleApplyClick(selectedTrack.title)}
                >
                  <span>Apply for {selectedTrack.title}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Curriculum Roadmap */}
            <div className="internship-curriculum-card">
              <div className="curriculum-header">
                <div className="curriculum-title-wrap">
                  <span className="curriculum-title">4-STAGE LEARNING ROADMAP</span>
                  <span className="curriculum-sub">Click a stage to inspect milestones</span>
                </div>
                <span className="curriculum-status">ENROLLMENT OPEN</span>
              </div>

              <div className="curriculum-steps-list">
                {selectedTrack.curriculum.map((item, index) => {
                  const isActive = activeStep === index;
                  return (
                    <div
                      key={item.step}
                      className={`curriculum-step-item ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveStep(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveStep(index);
                        }
                      }}
                    >
                      <div className="step-num-col">
                        <span className="step-num">{item.step}</span>
                        {index < selectedTrack.curriculum.length - 1 && (
                          <span className="step-connector" />
                        )}
                      </div>

                      <div className="step-body-col">
                        <div className="step-title-row">
                          <h4 className="step-name">{item.title}</h4>
                          {isActive && <span className="step-active-pill">SELECTED STAGE</span>}
                        </div>
                        <p className="step-detail">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="curriculum-footer-note">
                <CheckCircle2 size={14} className="curriculum-note-icon" />
                <span>
                  All interns receive ongoing 1-on-1 support, real PR code reviews, and direct feedback from lead architects.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Who Should Apply Quick Banner */}
        <div className="internship-eligibility-banner">
          <div className="eligibility-content">
            <span className="eligibility-tag">WHO SHOULD APPLY?</span>
            <h4 className="eligibility-title">
              Open to ambitious college students, recent graduates, and self-taught developers.
            </h4>
            <p className="eligibility-desc">
              We look for curiosity, strong work ethic, and eagerness to build real-world digital solutions.
              No corporate red tape — if you love creating software and design, you will thrive here.
            </p>
          </div>
          <div className="eligibility-actions">
            <button
              type="button"
              className="btn btn-outline btn-md"
              onClick={() => handleApplyClick('General Internship')}
            >
              <span>Submit Your Application</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

