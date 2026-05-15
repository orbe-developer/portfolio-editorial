# Portfolio Website — Build Prompt

## Objective

Build a professional portfolio website for **Orbehin Sarmiento Barzaga**, a Senior Backend Engineer with 10 years of experience. The goal of this site is to support his active job search in London's tech and fintech scene — functioning as a living, detailed complement to his CV. It should communicate competence, depth, and personality to both technical hiring managers and non-technical recruiters.

The site lives at `/Users/osb/Documents/GitHub/Portafolio/` and will be deployed via GitHub Pages. Build it as a single `index.html` file with embedded CSS and JS — no frameworks, no build tools, no dependencies. It must work by simply opening the file in a browser.

---

## Design Direction

**Sophisticated and editorial — think high-end creative agency, not corporate template.**

- Inspired by: leerob.io, paco.me, cassie.codes — developer portfolios that feel handcrafted and intentional
- Asymmetric layouts, not rigid grids
- Large, confident typography used as a design element
- Restrained palette: charcoal (`#3a3a3a`), off-white (`#f5f3ef`), navy blue (`#2c3e6b`), with one warm accent
- Mix of serif (for name and section headers) and sans-serif (for body text) — use Google Fonts: **Playfair Display** (serif) + **Inter** (sans-serif)
- No skill progress bars, no gradient backgrounds, no AI-looking card grids
- Subtle scroll-triggered fade-ins — nothing flashy
- One large professional photo used deliberately, not scattered everywhere
- Mobile responsive

**Avoid:** generic Bootstrap layouts, centered-everything symmetry, "hire me" buttons in Comic Sans blue, floating skill badges with percentages.

---

## Photo

File: `1E2A6019-Edit - Copy.jpg`

Use this as the single hero image. It is a 3/4 seated pose, navy sweater, charcoal background — professional but not stiff. Place it large and dominant in the hero section, bleeding slightly off one edge for editorial effect. Do not use a circular crop.

---

## Content & Sections

### 1. Hero

- Name: **Orbehin Sarmiento Barzaga**
- Title: **Senior Backend Engineer**
- Tagline: *10 years building systems that handle things that matter — from border security to industrial automation, global fitness platforms, and enterprise ERP.*
- Location: London, UK
- Links: LinkedIn (https://www.linkedin.com/in/orbehin-sarmiento-barzaga-48762886/) | Email (orbehin@gmail.com)
- Layout: image on the left (large, ~50% viewport width), name + tagline anchored to the right. Not centered.

---

### 2. About

Short narrative paragraph — personal, not generic. Use this text verbatim:

> I am a backend engineer who has spent a decade building systems that handle things that matter: a large-scale, mission-critical border security system deployed across multiple Latin American countries, real-time industrial control systems for oil & gas plants, high-throughput data pipelines for a global fitness platform serving users across 20+ countries, and enterprise ERP integrations for retail, manufacturing, and distribution clients across North America. My primary languages are Python and Java. I care about writing software that is correct, maintainable, and useful to the people who depend on it.

---

### 3. Experience

Display as a vertical timeline — company name large, role and dates smaller, brief description below. Each entry should feel like a chapter, not a table row.

| Period | Role | Company | Context |
|--------|------|---------|---------|
| Mar 2024 – Present | Senior Software Developer | Bright Village Inc. | ERP consulting firm serving retail, manufacturing, and distribution clients — Python, Django, Odoo, PostgreSQL. Built data integration connectors, a Django-based B2B vendor portal, and migrated 100+ custom modules. Presented in bi-weekly sprint demos to client stakeholders. |
| Sep 2022 – Apr 2023 | Database & Software Engineer | Orangetheory Fitness | Global fitness franchise — Java, Spring Boot, AWS (S3, RDS, DynamoDB). Built ETL pipelines using RESTful APIs and optimised a distributed relational database supporting a global mobile application across 20+ countries. |
| Mar 2021 – Aug 2022 | SCADA & IIoT Developer | Streamline Control Solutions | Industrial automation — Python, Ignition platform. Contributed to a system that won the **2022 Firebrand Award** at the Ignition Community Conference in California. |
| Sep 2013 – Dec 2019 | Software Engineer | DATYS | Border security — Java, J2EE, Oracle. Core developer on FRONTPAS, a large-scale mission-critical system deployed across multiple Latin American countries. Reduced response times by 60% through service optimisation. |

---

### 4. Technical Stack

Display as a clean, grouped list — not a skill bar in sight.

**Python ecosystem:** Django, Django REST Framework, FastAPI, Celery, Redis, pandas
**Java ecosystem:** Spring Boot, J2EE, JAX-RS, JAX-WS, Hibernate/JPA, JUnit
**Databases:** PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, DynamoDB
**Cloud & DevOps:** AWS (S3, RDS, DynamoDB, EC2, Lambda), Docker, GitHub Actions, CI/CD
**Distributed systems:** JMS, Kafka, async processing, event-driven architecture

---

### 5. Key Achievement

Give this its own visual weight — a standalone callout section.

> **Firebrand Award 2022**
> Ignition Community Conference — Folsom, California
> Awarded for innovative SCADA system design and implementation excellence.

Style it like a pull quote in a magazine — large, offset, slightly italic, with a thin rule on the left.

---

### 6. Education & Certifications

**Education:**
- Bachelor of Computer Engineering — Polytechnic University José Antonio Echeverría (CUJAE), Havana, Cuba. 2007–2013.

**Certifications:**
- Professional Certificate in Full Stack Software Development — University of Texas at Austin, McCombs School of Business. April 2024 – January 2025. GPA: 4.33 (A+). MERN Stack, AWS deployment.
- Building Modern Java Applications on AWS — Coursera (Amazon). August 2023.

---

### 7. Personal Project

**Microservices Sales System**
Built a sales platform using microservices architecture with Java, Spring Boot, Spring Cloud, Kafka, Resilience4j, and a full observability stack (Zipkin, Prometheus, Grafana). Deployed with Docker using MySQL and PostgreSQL.

Display this as a project card with a subtle border — understated, not flashy.

**TODO (future):** Add a "View on GitHub" button and/or demo link to this card once the repository is made public. Do not add placeholder links — only add when real URLs are available.

---

### 8. Contact

Simple, direct:

> Available for Senior Backend Engineer roles in London (remote or hybrid).
> Open to fintech, scale-ups, and product companies.

- Email: orbehin@gmail.com
- LinkedIn: linkedin.com/in/orbehin-sarmiento-barzaga-48762886
- Right to work in the UK without sponsorship.

---

## Technical Requirements

- Single `index.html` file, self-contained
- Google Fonts loaded via `<link>` tag
- No JavaScript frameworks — vanilla JS only, for scroll animations
- Smooth scroll between sections
- Mobile responsive (hamburger menu or collapsible nav on small screens)
- Sections linked via anchor navigation in a minimal top nav
- Fast load — no unnecessary assets

---

## Tone

Professional but not cold. Specific but not boastful. The copy should sound like a person wrote it, not a CV generator. Avoid phrases like "passionate about", "results-driven", "leveraging synergies."
