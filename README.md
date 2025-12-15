# hoggedarock

## Agent Rules
- Use `pnpm` for installing dependencies, running scripts, and any task that touches the package manager. (Example: `pnpm install`, `pnpm dev`.)

## Next.js Setup
- Framework: Next.js 16 with React 19.
- Entry: `pages/index.js` contains the single-page hog-the-rock experience plus hotline details.
- Global styling lives in `styles/globals.css` and is imported via `pages/_app.js`.
- Scripts: `pnpm dev` (local dev server), `pnpm build`, `pnpm start`, and `pnpm lint` are all defined in `package.json`.
