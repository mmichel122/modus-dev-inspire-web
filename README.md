# Modus Design Inspire

A modern, high-performance corporate website built with Next.js 14, featuring a polished design system with smooth animations and responsive layouts.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)

## ✨ Features

- **Modern Design System** — Unified button styles, card components, and animated nav links
- **Responsive Layout** — Mobile-first design with smooth breakpoint transitions
- **Smooth Animations** — Framer Motion powered scroll animations and micro-interactions
- **Contact Form** — Interactive contact section with loading states
- **Portfolio Showcase** — Masonry grid with hover effects and tech stack badges
- **Dark/Light Sections** — Dynamic section theming with gradient accents

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Playfair Display, DM Sans (Google Fonts)
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/modusCorp_webSite.git
cd modusCorp_webSite

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Render

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **New > Web Service**
4. Connect your GitHub repository
5. Render will auto-detect `render.yaml` and configure the deployment

Or manually configure:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Environment:** Node

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Design system & utilities
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Home page
├── components/
│   ├── Nav.tsx          # Navigation with mobile menu
│   ├── Hero.tsx         # Hero section
│   ├── Portfolio.tsx    # Project showcase grid
│   ├── Philosophy.tsx   # Services/approach section
│   ├── ServiceTiers.tsx # Pricing tiers
│   ├── ReadyToBegin.tsx # CTA cards
│   ├── ContactForm.tsx  # Contact form
│   └── Footer.tsx       # Site footer
├── lib/
│   └── portfolio.ts     # Portfolio data
└── public/
    └── images/          # Static assets
```

## 🎨 Design System

### Button Classes

| Class | Description |
|-------|-------------|
| `.btn-primary` | Gradient CTA with glow effect |
| `.btn-secondary` | Outlined button variant |
| `.btn-ghost` | Text link with animated underline |
| `.btn-sm` | Smaller button size modifier |

### Card Classes

| Class | Description |
|-------|-------------|
| `.card` | Light themed card with hover lift |
| `.card-dark` | Dark themed card with blur backdrop |

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ by [Modus Design Inspire](https://modusdevinspire.com)
