# EireneOps Website — Implementation Plan

## Brief

Design and build a complete, production-quality website mockup for **EireneOps** — a technology company serving executives, law firms, businesses, and organizations through intelligent operational systems, AI-assisted workflows, and custom platform engineering.

The deliverable must look **human-designed, premium, credible, and modern** — suitable for a live stakeholder demo and PPT presentation.

---

## Design System

### Visual Identity

| Token | Value |
|---|---|
| Brand name | EireneOps |
| Parent | Nypzim Holdings LLC |
| Est. | 2026 |

### Color Palette

A neutral, sophisticated, enterprise-grade palette. No purple AI gradients. No neon accents.

| Role | Color | Notes |
|---|---|---|
| Background (primary) | `#0C0D0F` (near-black) | Deep, warm-neutral dark |
| Background (elevated) | `#141518` | Cards, panels |
| Background (raised) | `#1C1E22` | Bordered containers |
| Surface (subtle) | `#23252A` | Hover states, dividers |
| Text (primary) | `#F0EDE8` | Warm off-white — not pure white |
| Text (secondary) | `#9B9892` | Subdued, readable |
| Text (tertiary) | `#5C5A57` | Labels, captions |
| Accent | `#C8A96E` | Warm gold — trust, premium |
| Accent (light) | `#E2C98A` | Hover variant of gold |
| Accent (dark) | `#8A6F3E` | Pressed / muted |
| Border | `rgba(255,255,255,0.07)` | Subtle glass-like edges |
| Border (strong) | `rgba(255,255,255,0.12)` | Active/focused |
| Danger | `#C65C5C` | Errors, alerts |
| Success | `#6BA08A` | Confirmations |

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Heading | `Playfair Display` | 700–900 | Major section titles, hero |
| Sub-heading | `Inter` | 600 | Section labels, card titles |
| Body | `Inter` | 400 | Body copy, descriptions |
| Label | `Inter` | 500 | Tags, nav, CTAs, badges |
| Mono | `JetBrains Mono` | 400 | Code, agent workflow, data |

Scale: fluid `clamp()` sizing — `h1`: 4rem→6rem, `h2`: 2.4rem→3.6rem, `h3`: 1.6rem→2rem, `body`: 1rem

### Spacing / Layout

- Max content width: `1200px`
- Section padding: `clamp(5rem, 10vw, 10rem)` vertical
- Grid: 12-column with `1.5rem` gap on desktop → single column stack on mobile
- Border radius: Cards `12px`, Buttons `8px`, Tags `4px`

### Motion

- Transitions: `200–400ms ease` on interactive elements
- Scroll reveals: `IntersectionObserver` — `opacity` + `translateY(20px)` → visible
- No continuous/looping animations except the workflow diagram
- No particle effects, no parallax backgrounds

---

## Page Architecture

### Sections (in order)

1. **Navigation** — sticky, minimal, dark
2. **Hero** — strong headline, dual CTA, platform visual
3. **Trust Strip** — single line of client-type signals
4. **What EireneOps Does** — 4 service pillars
5. **Platform Preview** — realistic dashboard mockup
6. **AI Assistant** — professional tool, not chatbot
7. **Security & Trust** — flow diagram + principles
8. **Who We Serve** — audience grid
9. **Standard vs Custom** — two paths
10. **Agentic Engineering** — workflow visualization
11. **Future Capabilities** — project domains
12. **Why EireneOps** — differentiation
13. **Final CTA** — "Talk to EireneOps"
14. **Footer** — minimal, structured

---

## Technology Stack

**Single-file HTML + CSS + JS** — chosen because:
- Zero build tooling required for the demo
- Instant load for stakeholder presentation
- Everything visible and editable in one file
- Google Fonts loaded via CDN
- No framework dependencies that could break

Structure:
- `index.html` — all markup, CSS in `<style>`, JS in `<script>`
- Will be split into separate CSS/JS files if the user wants to build further

---

## Component Details

### Navigation
- Logo left: `EIRENEOPS` in Playfair Display
- Links: Platform · Solutions · Industries · Security · AI & Automation · About
- Right: `Contact` button (gold accent) + subtle `Login` text link
- Mobile: hamburger → full-screen slide-in menu
- Behavior: transparent on hero → dark solid on scroll

### Hero
- Left: headline + subheadline + dual CTA
- Right: isometric-style platform UI preview (CSS/SVG — no heavy images)
- Headline direction: *"Operational intelligence for the people who keep organizations moving."*
- Primary CTA: `Request a Demo`
- Secondary CTA: `Explore the Platform`

### Dashboard Preview
Realistic enterprise dashboard UI built in pure CSS:
- Left sidebar: nav icons + labels
- Top bar: search, notifications, user avatar
- Main area: KPI cards, a task list, an AI assistant panel, a document list
- Color: dark surface consistent with brand

### AI Assistant Section
- Split layout: description left, mock conversation right
- Conversation shows: document summary query → structured AI response
- Emphasis: *"AI assists. You decide."*

### Security Flow
- Horizontal/vertical pipe diagram: User → Auth Layer → Permission Check → AI Processing → Human Review → Audit Log
- Each node: icon + label + subtle description
- No neon, no hacking clichés — use clean geometric connectors

### Agentic Workflow
- Numbered step flow with arrows
- Steps: Request → Analysis → Information Retrieval → Task Execution → Approval Gate → Completion → Activity Log
- Each step has a one-line description
- Approval gate visually highlighted (human checkpoint)

### Standard vs Custom
- Side-by-side panels (not a pricing table)
- Standard: structured, fast, proven foundation
- Custom: bespoke, specialized, expandable
- No price tags — emphasis on outcomes

---

## Responsive Plan

| Breakpoint | Layout |
|---|---|
| `>1200px` | Full desktop — 2-column sections, side-by-side |
| `768–1200px` | Tablet — reduced font sizes, some sections stacked |
| `<768px` | Mobile — single column, hamburger nav, simplified dashboard preview |

---

## Verification Plan

### Self-review checklist
- [ ] No horizontal scroll on any viewport
- [ ] Navigation works at all breakpoints
- [ ] Mobile hamburger menu opens/closes
- [ ] All section anchors work from nav
- [ ] Dashboard preview is readable on mobile
- [ ] Fonts load correctly (Google Fonts CDN)
- [ ] Gold accent used consistently
- [ ] No purple/blue gradient AI clichés
- [ ] Security flow diagram renders clearly
- [ ] Agentic workflow diagram is legible
- [ ] All CTAs are clearly styled
- [ ] Scroll-reveal animations don't break layout

