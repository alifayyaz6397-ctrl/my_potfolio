# Ali Fayyaz — Portfolio (React + Vite)

## Setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit any file under `src/` and it hot-reloads.

## Build for deployment

```bash
npm run build
```

Outputs a static site to `dist/` — deploy that folder anywhere (Vercel, Netlify,
GitHub Pages, etc).

## Structure

```
src/
  data/content.js     ← all portfolio content lives here (name, projects, skills, links)
  components/          ← one component per section
  index.css            ← design tokens (colors, fonts) + all styles
  App.jsx               ← assembles the page
```

To update your info — a new project, a changed role, a different email — edit
`src/data/content.js` only. Nothing else needs to change.

## Design

Dark "systems console" theme: monospace-forward typography (JetBrains Mono +
Inter), amber terminal accent, and structural details borrowed from developer
tools you actually use — the sidebar nav reads like a directory listing, work
items are framed like `git show --stat`, skills render as a JSON block. The
hero terminal window types out a short boot sequence on load (skipped
instantly if the browser has reduced-motion enabled).
