<div align="center">

# 🧑‍💻 Muhammad Rehan — Personal Portfolio

### *C & Security Developer · Web Engineer · Cybersecurity Enthusiast*

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Visit_Now-7C3AED?style=for-the-badge&logoColor=white)](https://rehan789567.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-rehan789567-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rehan789567)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad_Rehan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/muhammad-rehan-600640393/)
[![Email](https://img.shields.io/badge/Email-muhammadrehan82008@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muhammadrehan82008@gmail.com)

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections Breakdown](#-sections-breakdown)
- [Skills Showcase](#-skills-showcase)
- [Projects Included](#-projects-included)
- [Design System](#-design-system)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Contact](#-contact)

---

## 🧠 Overview

This is the **personal developer portfolio** of **Muhammad Rehan** — a self-taught developer from **Multan, Pakistan**, passionate about low-level C programming, cybersecurity, and crafting polished web experiences.

The portfolio is built as a **single-page application (SPA)** using pure HTML, Tailwind CSS (CDN), and Vanilla JavaScript — no frameworks, no build tools required. It features a custom **Claymorphism** design system with a dark, deep-space aesthetic.

> *"I don't just write code; I design experiences that are soft to the eye but robust at the core."*

---

## 🌐 Live Demo

| Platform | Link |
|----------|------|
| 🔗 Portfolio | [rehan789567.github.io](https://rehan789567.github.io) |
| 🗂️ Projects Hub | [rehan789567.github.io/projects-web](https://rehan789567.github.io/projects-web/) |
| 💼 GitHub Profile | [github.com/rehan789567](https://github.com/rehan789567) |

---

## ✨ Features

### 🎨 Visual & UI
- **Claymorphism Design** — custom 3D clay cards with depth shadows and inner highlights
- **Glassmorphism** navbar with `backdrop-blur` and frosted glass effect
- **Animated Background Blobs** — floating, blurring accent orbs for atmospheric depth
- **Morphing Hero Image** — organic `border-radius` animation for fluid shape transitions
- **Scroll Reveal Animations** — `IntersectionObserver`-based fade-in for all sections
- **Responsive Layout** — fully mobile-first, adapts across all screen sizes

### ⚡ Interactions
- **Custom Cursor** — dot + trailing blob cursor with hover state expansion
- **Typewriter Effect** — animated character-by-character hero text typing
- **Floating Labels** — skill tags (⚡ C Developer, 🔐 Cybersecurity, 🌐 Web Dev) animate around the hero image
- **Timeline Animation** — scroll-triggered journey timeline with sliding entries
- **Mobile Hamburger Menu** — toggle menu with icon swap (`menu` ↔ `x`)

### 📬 Contact
- **Formspree-powered Contact Form** — async `fetch` submission, no backend required
- Real-time submit button state (Sending → Sent ✓ → Reset)
- Error handling with fallback UI feedback

---

## 🛠️ Tech Stack

| Technology | Purpose | Badge |
|------------|---------|-------|
| **HTML5** | Structure & Semantics | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Tailwind CSS v3** (CDN) | Utility-first styling + custom config | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **Vanilla JavaScript** | Animations, DOM manipulation, form logic | ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Lucide Icons** (v0.453.0) | SVG icon library for UI elements | ![Lucide](https://img.shields.io/badge/Lucide-Icons-F97316?style=flat-square) |
| **Google Fonts** | Syne · DM Sans · JetBrains Mono | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) |
| **Formspree** | Contact form backend service | ![Formspree](https://img.shields.io/badge/Formspree-Contact_Form-FF6B6B?style=flat-square) |
| **Unsplash API** | Random project thumbnail images | ![Unsplash](https://img.shields.io/badge/Unsplash-Images-000000?style=flat-square&logo=unsplash&logoColor=white) |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main single-page application (SPA)
│   ├── <head>
│   │   ├── Meta tags & SEO description
│   │   ├── Google Fonts (Syne, DM Sans, JetBrains Mono)
│   │   ├── Tailwind CSS CDN + Custom Config
│   │   └── Embedded CSS (cursor, blob, timeline styles)
│   │
│   └── <body>
│       ├── #cursorDot / #cursorBlob    → Custom cursor elements
│       ├── .bg-blob (×3)               → Animated background orbs
│       ├── <nav>                        → Fixed floating glassmorphism navbar
│       ├── <header>                     → Hero section (typewriter + image)
│       ├── #about                       → About Me + Journey Timeline
│       ├── #skills  (#skillsGrid)       → Skills injected via JS
│       ├── #projects (#projectsGrid)    → Projects injected via JS
│       ├── #contact                     → Contact form (Formspree)
│       ├── <footer>                     → 4-column footer with socials
│       └── <script>                     → All JavaScript (inline)
│
└── README.md           # This file
```

---

## 📐 Sections Breakdown

### 1. 🔭 Hero Section
- Animated typewriter text: **"C & Security Developer."**
- Morphing profile image with `border-radius` keyframe animation
- Floating tags: ⚡ C Developer · 🔐 Cybersecurity · 🌐 Web Dev
- Social icon buttons: GitHub, LinkedIn, Email
- CTA button: **"Explore My Work"**

### 2. 🧬 About Section
- Personal bio and developer philosophy
- Animated **Journey Timeline** with 4 milestones:
  - Started C Programming (2022)
  - Built first Web Projects (2023)
  - Exploring Cybersecurity (2024)
  - Building the Future (Ongoing)
- Timeline entries slide in on scroll via `IntersectionObserver`

### 3. 🧰 Skills Section
- 5 skill cards dynamically injected from JavaScript `skillsData[]`
- Each card shows: icon, name, description, animated progress bar
- Colors follow the Claymorphism palette

### 4. 🗂️ Projects Section
- 6 project cards dynamically injected from `projectsData[]`
- Each card shows: thumbnail, tech tags, title, description, GitHub link
- Hover effects: image zoom + card elevation

### 5. 📬 Contact Section
- Full-width contact form with name, email, message fields
- Async Formspree submission with button state feedback
- Contact info sidebar: email + availability status

### 6. 🦶 Footer
- 4-column layout: Brand · Navigation · Social Presence · Quick Contact
- Scroll-to-top floating button
- Availability badge (Available for Hire)

---

## 📊 Skills Showcase

| Skill | Level | Color |
|-------|-------|-------|
| ![C](https://img.shields.io/badge/C_Programming-90%25-C9B8FF?style=flat-square&logo=c&logoColor=white) | ████████░░ 90% | Lavender |
| ![Cybersecurity](https://img.shields.io/badge/Cybersecurity-85%25-FFAB91?style=flat-square&logo=hackthebox&logoColor=white) | ████████░░ 85% | Coral |
| ![Web Dev](https://img.shields.io/badge/Web_Development-80%25-A7F3D0?style=flat-square&logo=html5&logoColor=black) | ████████░░ 80% | Mint |
| ![Linux](https://img.shields.io/badge/Linux-88%25-FEF08A?style=flat-square&logo=linux&logoColor=black) | ████████░░ 88% | Yellow |
| ![Data Logic](https://img.shields.io/badge/Data_Logic-82%25-BAE6FD?style=flat-square&logo=databricks&logoColor=black) | ████████░░ 82% | Blue |

---

## 🗂️ Projects Included

| # | Project | Tags | Description |
|---|---------|------|-------------|
| 1 | **Portfolio Website** | HTML · CSS · JS · React · Tailwind | My personal internet corner — Claymorphism with personality |
| 2 | **ATM Machine Interface** | HTML · CSS · JS · C · Logic | C-based logic engine with a modern browser UI |
| 3 | **Neo Calculator** | HTML · CSS · JS · Glassmorphism | Glassmorphic calculator with advanced math functions |
| 4 | **Vault App** | HTML · CSS · JS · Encryption | Secure digital vault for storing sensitive information |
| 5 | **Number Guessing Game** | HTML · CSS · JS · Gaming | Interactive browser-based game with dynamic feedback |
| 6 | **Projects Web** | HTML · CSS · JS · Hub | Central hub hosting all public projects |

> All projects are available at: **[github.com/rehan789567](https://github.com/rehan789567)**

---

## 🎨 Design System

### Color Palette (Clay Theme)

| Variable | Hex | Usage |
|----------|-----|-------|
| `clay-bg` | `#0D0D1A` | Page background |
| `clay-lavender` | `#C9B8FF` | Primary accent, skills |
| `clay-coral` | `#FFAB91` | CTA buttons, tags |
| `clay-mint` | `#A7F3D0` | Success states, web dev |
| `clay-yellow` | `#FEF08A` | Labels, warnings |
| `clay-blue` | `#BAE6FD` | Data / logic elements |
| `clay-white` | `#F1F0FF` | Primary text |
| `clay-muted` | `#9D9DBF` | Secondary text |
| `clay-accent` | `#7C3AED` | Hover states, blobs |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Syne** | 700, 800 | Headings, logo |
| **DM Sans** | 400, 500, 700 | Body text, UI |
| **JetBrains Mono** | 400, 500 | Code snippets |

### CSS Components

```css
.clay-card       /* 3D raised card with bottom shadow */
.clay-pill       /* Rounded pill with inset highlight */
.glass-clay      /* Frosted glass with purple glow */
.scroll-reveal   /* Hidden → visible on scroll */
.reveal-active   /* Activated by IntersectionObserver */
.timeline-item   /* Slide-in timeline entry */
```

---

## 🚀 Getting Started

This portfolio requires **zero build tools**. Just open the file.

### Option 1 — Open Locally

```bash
# Clone the repository
git clone https://github.com/rehan789567/rehan789567.github.io.git

# Navigate into the folder
cd rehan789567.github.io

# Open in your browser
open index.html
# or double-click index.html in File Explorer
```

### Option 2 — GitHub Pages (Already Live)

The portfolio is automatically deployed via **GitHub Pages**. Push to `main` and it goes live.

### Option 3 — Live Server (VS Code)

```bash
# Install Live Server extension in VS Code
# Right-click index.html → "Open with Live Server"
```

---

## 🛠️ Customization Guide

### Update Personal Info

Find and replace these values in `index.html`:

```html
<!-- Name -->
Muhammad Rehan

<!-- Email -->
muhammadrehan82008@gmail.com

<!-- GitHub -->
https://github.com/rehan789567

<!-- LinkedIn -->
https://linkedin.com/in/muhammad-rehan-600640393/

<!-- Formspree Form ID (contact form action) -->
https://formspree.io/f/YOUR_FORM_ID
```

### Add/Edit a Skill

In the `<script>` section, edit the `skillsData` array:

```js
const skillsData = [
  {
    name: 'Your Skill',
    level: '75%',
    icon: 'lucide-icon-name',    // see lucide.dev for icon names
    color: 'bg-clay-lavender',   // use clay palette classes
    desc: 'Short description of the skill.'
  },
  // ...
];
```

### Add/Edit a Project

Edit the `projectsData` array:

```js
const projectsData = [
  {
    title: 'Project Name',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/YOUR_REPO',
    color: 'bg-clay-coral',     // card button color
    image: 'seed-word',         // used for picsum.photos random image
    desc: 'Brief project description.'
  },
  // ...
];
```

### Update Timeline Entries

Find the `#about` section in the HTML and update the `.timeline-item` blocks:

```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="flex flex-col gap-1">
    <span class="text-xs text-clay-muted uppercase font-bold tracking-widest">YEAR</span>
    <h4 class="text-lg font-bold">Milestone Title</h4>
    <p class="text-clay-muted">Description of what happened.</p>
  </div>
</div>
```

---

## 📞 Contact

> Available for **freelance projects**, **collaborations**, and **remote work**.

| Platform | Handle |
|----------|--------|
| 📧 Email | [muhammadrehan82008@gmail.com](mailto:muhammadrehan82008@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/muhammad-rehan-600640393](https://linkedin.com/in/muhammad-rehan-600640393/) |
| 🐙 GitHub | [github.com/rehan789567](https://github.com/rehan789567) |
| 📍 Location | Multan, Pakistan (Remote Available) |

---

<div align="center">

**Built with ❤️ by Muhammad Rehan · Multan, Pakistan**

![Visitors](https://img.shields.io/badge/Always-Evolving-7C3AED?style=for-the-badge)
[![Stars](https://img.shields.io/github/stars/rehan789567?style=for-the-badge&logo=github&color=FFAB91)](https://github.com/rehan789567)

*© 2024 Muhammad Rehan. All rights reserved.*

</div>
