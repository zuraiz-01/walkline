# walkline

![Walkline Logo](./src/assets/walkline-logo-black.jpeg)

## GitHub Pages (Live)

- Push to `main` and GitHub Actions deploys to Pages via `.github/workflows/deploy.yml`.
- If your API is hosted elsewhere, set a repo variable `VITE_API_BASE_URL` (example: `https://your-api.example.com`).

## Backend Hosting

- GitHub Pages backend host nahi karta; backend ko Render/Railway/Fly jaisi service pe deploy karein.
- Render recommended: root me `render.yaml` add hai. Render pe New → Blueprint se repo connect karo, phir env vars set karo: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT` (optional).
- Backend URL milne ke baad GitHub repo variable `VITE_API_BASE_URL` ko us URL pe set karo (example: `https://walkline-api.onrender.com`).
