# YOUR COMPANY — Premium Digital Engineering & Software Studio

A bespoke, production-ready React + Vite company website built with a strict black-and-white / grayscale editorial identity for an international digital agency specializing in custom software, full-stack web platforms, mobile apps, cloud systems, and hands-on engineering internship programs.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Centralized Configuration (`src/config/siteConfig.js`)

All company profiles, contact details, services, sample projects, industries, differentiators, and tech stacks are centralized in `src/config/siteConfig.js` for instant updates without touching component code:

- **Company Profile**: Name, legal name, tagline, description, address, email, phone, social links.
- **Contact Integration**: 
  - `recipientEmail`: Email destination for enquiries.
  - `apiEndpoint`: Optional REST API or webhook endpoint URL (e.g. `/api/contact` or AWS API Gateway / HubSpot / Slack webhook). When empty, the site automatically falls back to an accessible, pre-filled `mailto:` client flow.
- **Benchmark Statistics**: Live telemetry counters (Production SLA, Deployments, Median Latency, Velocity).
- **Services (01–09)**: Title, badge, outcome-driven business summary, deliverable checklist, and tech tags.
- **Illustrative Case Studies**: Category, challenge, architecture solution, tech stack, and impact metrics.
- **Industry Solutions**: 8 specialized sectors with domain descriptions and representative use cases.
- **Differentiators**: Clear articulation of how software engineering, AI, and business understanding converge.
- **4-Stage Delivery Process**: 01 Discover, 02 Strategize, 03 Build, 04 Launch & Scale.
- **Technology Stack**: Filterable categories across Frontend, AI & ML, Backend & Cloud, and Data & Storage.

---

## 🌟 Key Features & Architecture

1. **Strict Editorial Grayscale Aesthetic**:
   - Deep background (`#080808`), crisp white typography, micro-borders, and generous whitespace.
   - Zero generic gradients or colorful templates.
   - Built with Google Fonts **Manrope** (editorial sans-serif) and **DM Mono** (precision monospace).

2. **Advanced Motion & Animation System**:
   - **System Preloader**: Animated brand monogram and progress indicator with smooth fade exit.
   - **Desktop Interactive Cursor**: Subtle trailing ring and dot with magnetic hover states (auto-disabled on touch or when reduced motion is preferred).
   - **Interactive Network Mesh Canvas**: Custom 60fps canvas particle mesh with mouse collision and node connection lines.
   - **3D-Style Orbit Rings & Engineering Core**: Floating interface badges and sonar ripple animations.
   - **Infinite Capability Ticker**: Smooth continuous scrolling with pause-on-hover.
   - **Talent & Internship Incubator Workbench**: Interactive multi-track curriculum inspector (Web, Mobile, UI/UX, Cloud & DevOps).

3. **Interactive Modals & Case Studies**:
   - **Service Inspection Modal**: Deep dive into deliverables, commercial ROI, and "Enquire About This Service" direct pre-fill.
   - **Case Study Modal**: Full architectural breakdown (Challenge, Solution, Tech, and Benchmarks), all clearly marked with illustrative sample disclaimers.
   - **Industry Accordion**: Dynamic sector use cases.

4. **Production-Ready Contact Protocol**:
   - Full field validation (Name, Work Email, Organization, Service, Budget, Project Scope).
   - Direct REST API integration hook with automated payload dispatch and error recovery.
   - Graceful fallback to pre-filled `mailto:` transmission when no API endpoint is specified.

5. **Accessibility & SEO**:
   - Complete OpenGraph, Twitter Card, and Google Search meta tags in `index.html`.
   - Full keyboard accessibility (focus visible indicators, Esc key modal dismissal, ARIA expanded states).
   - Comprehensive `@media (prefers-reduced-motion: reduce)` support.
   - Zero horizontal overflow across mobile (320px), tablet (768px), and 4K desktop (1440px+).

---

## 📂 Project Structure

```
├── index.html                   # Master HTML with SEO metadata, typography, and favicon SVG
├── package.json                 # Dependencies & Vite scripts
├── vite.config.js               # Vite configuration
└── src/
    ├── main.jsx                 # Application entry point and scroll observer
    ├── styles.css               # Design system & master stylesheet
    ├── config/
    │   └── siteConfig.js        # Centralized configuration file
    └── components/
        ├── Preloader.jsx        # Animated system boot & brand reveal
        ├── CustomCursor.jsx     # Desktop smooth mouse follower
        ├── Navbar.jsx           # Sticky nav & animated mobile drawer
        ├── Hero.jsx             # Hero with neural canvas & orbiting rings
        ├── About.jsx            # Manifesto & benchmark stats banner
        ├── Services.jsx         # Outcome-focused service cards & detail modal
        ├── CapabilityTicker.jsx # Infinite marquee banner
        ├── Internship.jsx       # Dedicated talent & internship program workbench
        ├── Projects.jsx         # Filterable case study gallery & modal
        ├── Industries.jsx       # Interactive industry specialization grid
        ├── WhyChooseUs.jsx      # Core differentiators & zero-lock-in pledge
        ├── Process.jsx          # 4-stage engineering delivery methodology
        ├── TechStack.jsx        # Categorized technology stack
        ├── Contact.jsx          # Validated enquiry form & API/mailto handler
        └── Footer.jsx           # Brand bio, sitemap, socials & back-to-top
```
