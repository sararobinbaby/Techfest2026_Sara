# TechFest 2026 Portal — React SPA

Experiment 3 (23CSB40B): the TechFest 2026 portal rebuilt as a React Single Page
Application with React Router, the Context API, hooks, and a live API call.

## Run it

```bash
npm install
npm run dev
```

Open the address printed in the terminal (usually http://localhost:5173).

## What's inside

- `src/data/events.js` — the event array (`{ id, name, category, fee, seats }`)
- `src/context/ThemeContext.jsx` — light/dark theme via the Context API
- `src/components/` — `Navbar`, `EventCard` (owns its own seat count),
  `EventList` (maps events → cards)
- `src/pages/` — `Home` (fetches announcements via `useEffect`, with
  loading/error states), `Events` (live search + category filter),
  `Registration` (controlled form with regex validation), `Gallery`,
  `Contact`, `NotFound` (404 fallback)
- `src/App.jsx` — routes, wrapped in the theme class
- `src/main.jsx` — mounts `BrowserRouter` → `ThemeProvider` → `App`

## Testing checklist (for your screenshots)

1. Home loads, briefly shows "Loading...", then shows 3 announcement titles.
2. Set Chrome DevTools → Network → Offline, reload Home → red error message.
3. Click every Navbar link — no reload/white flash.
4. Events: type "web" → only Web Dev Workshop remains.
5. Events: pick "Technical" → Coding Contest + Robotics Challenge remain.
6. Click Register repeatedly on one card until it reads SOLD OUT.
7. Registration: submit empty → 3 validation errors appear.
8. Registration: fill correctly → "Thank you" message replaces the form.
9. Toggle theme on Home, navigate to other pages → dark mode persists.
10. Visit `/doesnotexist` → 404 page with a link back home.

Build was verified locally with `npm run build` — no errors.
