# OnlyPngs Landing Page

A modern landing page for OnlyPngs - an AI-powered NFT trading agent platform.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **GSAP** - Animation library for image trail effects

## Project Structure

```
OnlyPngs_frontend/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   └── image-trail-effect.tsx  # Image trail animation component
│   ├── navigation.tsx      # Navigation bar
│   ├── hero.tsx            # Hero section with image trail
│   ├── product-section.tsx # Product features section
│   ├── built-on-section.tsx # Technology stack section
│   ├── data-platforms-section.tsx # Data sources section
│   ├── security-section.tsx # Security model section
│   ├── cta-section.tsx     # Final call-to-action
│   └── footer.tsx          # Footer component
├── lib/
│   └── utils.ts            # Utility functions
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Hero Section** - Interactive image trail effect with NFT images
- **Product Features** - Showcase of key product capabilities
- **Technology Stack** - Built on best-in-class Web3 foundation
- **Data Sources** - Real-time NFT price monitoring
- **Security Model** - Non-custodial security explanation
- **Responsive Design** - Mobile-first approach

## Components

### Image Trail Effect
The hero section uses a custom image trail effect component that displays NFT images following the cursor movement. The component is located at `components/ui/image-trail-effect.tsx`.

## License

Apache-2.0

