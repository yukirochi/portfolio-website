# Justine Abanilla — Portfolio

A personal portfolio showcasing my work and interests in data engineering and machine learning. It brings together my profile, GitHub activity, tools, certifications, experience, and selected projects in a responsive single-page site.

## Features

- Responsive section navigation with smooth scrolling and a compact mobile menu
- Light and dark themes; the selected theme is saved in the browser, and first-time visitors follow their system preference
- Interactive Vanta.js NET background that reacts to theme changes
- Scroll-triggered section reveals that respect reduced-motion preferences
- Profile links, resume preview and download
- GitHub contribution chart for [@yukirochi](https://github.com/yukirochi)
- Certificates with links to view the original documents
- Experience timeline and selected GitHub projects
- Responsive layouts and light/dark styling

## Built with

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Lucide React, Simple Icons, and Iconify logos
- Vanta.js NET and Three.js for the animated background

## Getting started

### Requirements

- Node.js 20.19 or later, or 22.12 or later
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Other commands

```bash
npm run build    # Type-check and create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Keep the detected Vite settings, then deploy. The included `vercel.json` configures `npm ci`, `npm run build`, and the `dist` output directory.
4. Future pushes to the connected branch will trigger new deployments.

## Project structure

```text
src/
  assets/       Profile image, resume, and employer logos
  components/   Portfolio sections, navigation, and background effects
  types/        Type declarations for Vanta.js
  App.tsx       Page layout and theme state
  index.css     Global styles, theme colors, and animations
public/
  certifications/  Certificate PDFs and preview images
```

## Notes

- The contribution chart is provided by [GitHub Chart API](https://github.com/2016rshah/githubchart-api).
- The animated background uses [Vanta.js](https://www.vantajs.com/) NET. It is not initialized when reduced motion is enabled.
- The selected theme is stored in local storage in the current browser.
