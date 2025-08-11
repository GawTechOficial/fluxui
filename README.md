# Flux UI

> 🚧 **Work in Progress** - This is a temporary README

A modern design system and UI components based on TailwindCSS, organized in a monorepo.

## 📦 Project Structure

This monorepo contains:

- **`packages/tokens`** - Design tokens and system colors
- **`packages/tailwindcss`** - Custom TailwindCSS plugin
- **`playgrounds/`** - Test environments for TailwindCSS v3 and v4

## 🚀 Quick Start

### Prerequisites

- Node.js >= 22
- npm

### Installation

```bash
# Complete initial setup
npm run setup

# Or just install dependencies
npm run init
```

### Development

```bash
# Complete build
npm run build

# Development with TailwindCSS v3
npm run dev:tw3

# Development with TailwindCSS v4
npm run dev:tw4

# Tests
npm run test
```

## 🎨 Design Tokens

The system uses OKLCH-based design tokens for modern and accessible colors:

- **Primary**: `oklch(65% 0.18 262)` - Main system color
- **Success**: `oklch(70% 0.15 145)` - Success states
- **Warning**: `oklch(80% 0.15 85)` - Warning states
- **Danger**: `oklch(60% 0.18 25)` - Error states

## 📜 License

MIT © GawTech

---

_This README will be expanded as the project evolves._
