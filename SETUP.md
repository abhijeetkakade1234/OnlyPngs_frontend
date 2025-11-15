# Setup Instructions

## Prerequisites

Make sure you have Node.js 18+ installed on your system.

## Installation Steps

1. Navigate to the project directory:
```bash
cd OnlyPngs_frontend
```

2. Install all dependencies:
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- GSAP (for animations)
- clsx and tailwind-merge (for utility functions)

## Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js 14 App Router pages and layouts
- `/components` - React components
  - `/components/ui` - UI components (shadcn/ui style)
  - Other component files for sections
- `/lib` - Utility functions

## shadcn/ui Setup

The project is configured for shadcn/ui. To add more components:

```bash
npx shadcn@latest add [component-name]
```

Components will be automatically added to `/components/ui`.

## Image Trail Effect

The hero section uses a custom `image-trail-effect` component that:
- Displays NFT images following cursor movement
- Uses GSAP for smooth animations
- Currently uses placeholder images from the provided repository

To update the NFT images, edit the `NFT_IMAGES` array in `/components/hero.tsx`.

