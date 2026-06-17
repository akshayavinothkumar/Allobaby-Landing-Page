# AlloBaby Landing Page

Production-ready marketing website for the **AlloBaby** AI-powered maternal healthcare mobile application.

## Overview

AlloBaby is an AI-driven maternal and child care platform supporting expectant mothers through pregnancy monitoring, fetal health tracking, doctor consultations, and personalized wellness guidance. This landing page communicates the full product value to mothers, families, and healthcare professionals.

## Tech Stack

- **React.js** — UI framework
- **Tailwind CSS v4** — Utility-first styling
- **React Router DOM** — Client-side routing
- **Lucide React** — Icon library
- **Framer Motion** — Scroll and entrance animations
- **Vite** — Build tool and dev server

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Challenge.jsx
│   ├── About.jsx
│   ├── Features.jsx
│   ├── HowItWorks.jsx
│   ├── Screenshots.jsx
│   ├── Benefits.jsx
│   ├── AISection.jsx
│   ├── WhyChoose.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── DownloadCTA.jsx
│   ├── Footer.jsx
│   └── ScreenshotImage.jsx
├── pages/
│   └── Home.jsx
├── data/
│   └── screenshots.js
├── utils/
│   └── animations.js
├── App.jsx
├── main.jsx
└── index.css

public/
├── screenshots/          ← Replace placeholder images here
│   ├── dashboard-placeholder.svg
│   ├── monitoring-placeholder.svg
│   └── ...
└── favicon.svg
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads when you save changes.

### Production Build

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Sections

| # | Section | Component |
|---|---------|-----------|
| 1 | Hero | `Hero.jsx` |
| 2 | The Challenge | `Challenge.jsx` |
| 3 | About AlloBaby | `About.jsx` |
| 4 | Core Features (12) | `Features.jsx` |
| 5 | How It Works (8 steps) | `HowItWorks.jsx` |
| 6 | App Screenshots | `Screenshots.jsx` |
| 7 | Benefits | `Benefits.jsx` |
| 8 | AI Advantage | `AISection.jsx` |
| 9 | Why Choose AlloBaby | `WhyChoose.jsx` |
| 10 | Testimonials | `Testimonials.jsx` |
| 11 | FAQ (12 questions) | `FAQ.jsx` |
| 12 | Download CTA | `DownloadCTA.jsx` |
| 13 | Footer | `Footer.jsx` |

## Screenshot Replacement

See **[SCREENSHOT_REPLACEMENT_GUIDE.md](./SCREENSHOT_REPLACEMENT_GUIDE.md)** for step-by-step instructions on replacing placeholder screenshots with real AlloBaby app images — no React code changes required.

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder via Netlify dashboard or CLI
netlify deploy --prod --dir=dist
```

### Static Hosting (AWS S3, GitHub Pages, etc.)

1. Run `npm run build`
2. Upload the contents of `dist/` to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA fallback)

### Environment Notes

- Update the Google Play link in `DownloadCTA.jsx` with your actual store URL
- Replace contact placeholders in `Footer.jsx` with real information
- Add a real `og-image.png` to `public/` for social sharing previews

## SEO

SEO metadata is configured in `index.html`:

- Meta title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Semantic HTML headings (h1–h4) in components
- Structured content with ARIA labels

## Brand Colors

| Token | Hex |
|-------|-----|
| Primary | `#FF6B9A` |
| Secondary | `#FFB6C1` |
| Accent | `#FFB6C1` |
| Background | `#FFFFFF` |
| Section BG | `#FFF7FA` |
| Text | `#1F2937` |
| Success | `#FFB6C1` |

## License

Proprietary — AlloBaby / SaveMom maternal care ecosystem.
