# TinyTorch CLI Frontend

A modular React dashboard application with a terminal-style UI.

## Project Structure

```
cli-frontend/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components (Card, etc.)
│   │   ├── TerminalHeader/ # Dashboard header with ASCII art
│   │   ├── SlideOutMenu/   # Navigation menu
│   │   ├── LeaderboardCard/# Leaderboard display component
│   │   ├── PerformanceChartCard/ # Performance line chart
│   │   ├── SkillsRadarCard/     # Skills radar chart
│   │   ├── ActivityChartCard/   # Activity bar chart
│   │   └── TerminalFooter/      # Terminal-style footer
│   ├── hooks/              # Custom React hooks
│   │   ├── useClock.ts     # Clock hook for time updates
│   │   └── useBlink.ts     # Blink animation hook
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── data/               # Mock data
│   │   └── mockData.ts
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── index.html
```

## Features

- **Modular Architecture**: Components are split into focused, reusable modules
- **Type Safety**: Full TypeScript support with proper type definitions
- **Custom Hooks**: Reusable hooks for clock and blink animations
- **Terminal Aesthetic**: Terminal-style UI with green-on-black theme
- **Interactive Charts**: Performance, skills, and activity visualizations
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Component Overview

- **TerminalDashboard (App.tsx)**: Main container component that orchestrates all sub-components
- **TerminalHeader**: Displays ASCII art banner and current time
- **SlideOutMenu**: Hamburger menu with navigation links
- **LeaderboardCard**: Shows top contributors ranking
- **PerformanceChartCard**: Line chart for monthly performance metrics
- **SkillsRadarCard**: Radar chart for skills assessment
- **ActivityChartCard**: Bar chart for weekly contribution activity
- **TerminalFooter**: Terminal prompt footer with blinking cursor

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React (icons)
