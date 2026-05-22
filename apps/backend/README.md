# Backend for PNUAI PotG

This backend is a minimal Express + TypeScript server that provides API endpoints for the frontend placeholder UI.

## Available APIs

- `GET /api/health`
- `GET /api/summary`
- `GET /api/announcements`
- `GET /api/libraries`
- `GET /api/programs`
- `GET /api/volunteers`
- `GET /api/agenda`
- `GET /api/search?q=...&type=...`
- `POST /api/auth/login`
- `POST /api/auth/register`

## Run locally

1. `cd apps/backend`
2. `npm install`
3. `npm run dev`

The server starts on `http://localhost:4000`.
