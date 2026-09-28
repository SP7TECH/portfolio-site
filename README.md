# Portfolio

Engineering Experiences!

**Live:** https://sp7tech.vercel.app/

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS
- ESLint + Prettier
- Deployed on [Vercel](https://vercel.com/)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local dev server           |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run format`  | Format `src/` with Prettier          |

## Project structure

```
├── index.html
├── public/          # Favicons and static assets
└── src/
    ├── App.jsx      # Page markup (hero, capabilities, systems, experience, contact)
    ├── App.css      # Global styles
    └── components/  # Header and other section components
```

## Deployment

The site deploys to Vercel from the `main` branch. Vercel runs `npm run build` and serves the `dist/` folder.
