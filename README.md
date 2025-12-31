# Day Counter

A minimalist, contemplative visualization of the year. Each day is represented by a single dot—past days in white, future days in dark gray, and today gently pulsing in warm amber.

## Overview

Day Counter is a production-ready Next.js application that serves as a foundation for a future mobile app and subscription product. It presents a year's worth of days as a grid of dots, creating a quiet, intentional space to reflect on time's passage.

## Features

- **Year Grid**: Visual representation of all 365/366 days in the current year
- **Leap Year Support**: Automatically handles leap years
- **Today Indicator**: Today's dot pulses with a subtle amber glow
- **Minimalist Design**: Ultra-clean interface with pure black background
- **Responsive Layout**: Adapts seamlessly to all screen sizes
- **Architectural Framing**: Subtle vertical guide lines frame the content

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **React 18**
- **CSS** (no external styling libraries)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
day-counter/
├── app/
│   ├── components/
│   │   ├── Footer.tsx      # Footer with year and days remaining
│   │   └── YearGrid.tsx    # Main dots grid component
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Main page component
├── lib/
│   └── dates.ts             # Date calculation utilities
└── package.json
```

## Design Philosophy

Day Counter embraces minimalism and intentionality. Every element serves a purpose:

- **No clutter**: Only essential information is displayed
- **Subtle interactions**: Today's dot gently pulses to mark the present moment
- **Contemplative**: The design encourages reflection without distraction
- **Architectural**: Vertical guide lines create structure without decoration

## Color Palette

- **Background**: Pure black (`#000000`)
- **Past days**: White (`#ffffff`)
- **Future days**: Dark gray (`#333333`)
- **Today**: Warm amber (`#cfa15d`)

## License

Private project.

---

Made with intention.

