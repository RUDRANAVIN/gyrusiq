# Gyrusiq Local Site

This folder contains the live site currently served by the React wrapper.

Current structure:

- `index.html`
- `blog.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `assets/vendor/runtime/*`
- `assets/vendor/images/*`
- `assets/vendor/assets/*`
- `assets/vendor/google-fonts/*`
- `assets/vendor/third-party-assets/*`

Notes:

- The live pages still use the local runtime bundles in `assets/vendor/runtime`.
- The wrapper app in `src/main.jsx` iframe-loads these HTML files.
- Do not rename or edit runtime bundle internals if you want behavior to remain unchanged.

Run locally:

1. Open PowerShell in the project root
2. Run `npm run dev`
3. Open the local Vite URL
