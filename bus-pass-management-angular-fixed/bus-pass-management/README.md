# TransitFlow — Bus Pass Management Frontend

A polished Angular standalone frontend for a Bus Pass Management system.

## Run in VS Code

1. Open this folder in VS Code.
2. Make sure Node.js is installed.
3. Open the terminal in the project folder.
4. Run:

```bash
npm install
npm start
```

5. Open `http://localhost:4200`.

## Backend connection

The frontend expects a Spring Boot REST API on `http://localhost:8080` through the Angular dev proxy.

Expected endpoints:

- `GET /api/passengers`
- `GET /api/routes`
- `GET /api/pass-types`
- `GET /api/bus-passes`
- `GET /api/routes/above-average`
- `POST /api/bus-passes/issue`

If your existing Spring Boot controller uses different URLs, change only `src/app/core/api.service.ts`.

## Demo fallback

`src/environments/environment.ts` contains:

```ts
demoFallback: true
```

This means the UI still displays realistic demo data when the backend is unavailable. Set it to `false` when you want API failures to be shown instead of falling back.

## Database requirement mapping

- JOIN result → **Bus passes** page (`GET /api/bus-passes`)
- Above-average subquery → **Routes** page (`GET /api/routes/above-average`)
- Procedure → **Issue a bus pass** page (`POST /api/bus-passes/issue`)
- Function → expiry preview / returned expiry date
- Trigger → status badge returned by the backend

## Main screens

- Dashboard
- Passengers
- Routes
- Bus passes
- Issue bus pass

The UI is responsive and designed to work on desktop and mobile screens.
