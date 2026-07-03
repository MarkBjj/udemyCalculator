# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

React Investment Calculator — a starting-project exercise from Maximilian Schwarzmüller's
"React - The Complete Guide" Udemy course (section on React essentials practice). It's
intentionally incomplete: the student builds the UI on top of a finished calculation utility.

## Stack

- React 19 + Vite 7 (`@vitejs/plugin-react`)
- Plain CSS (`src/index.css`, class/id-based, no CSS modules or Tailwind)
- ESLint 8 (flat-config not used — legacy `.eslintrc.cjs`)
- No test runner, no TypeScript (despite `@types/react` deps, which only support editor
  intellisense for `.jsx` files)

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint over `.js`/`.jsx`, zero warnings allowed
- `npm run preview` — preview the production build

## Structure

- `src/index.jsx` — entry point, mounts `<App />`
- `src/App.jsx` — currently a stub (`<h1>React Investment Calculator</h1>`); this is where
  the student assembles the form + results table components (not yet created)
- `src/util/investment.js` — finished, do not rewrite the math:
  - `calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration })`
    returns per-year `{ year, interest, valueEndOfYear, annualInvestment }` array
  - `formatter` — `Intl.NumberFormat` USD currency formatter, no decimals
- `src/index.css` — pre-built styles targeting ids/classes: `#header`, `#user-input`,
  `.input-group`, `#result` (a `<table>`), `.center`. New components should reuse these
  selectors rather than inventing new class names, to match the intended design.
- `src/assets/investment-calculator-logo.png` / `public/investment-calculator-logo.png` —
  logo, duplicated intentionally (one for import in JSX, one as the static favicon
  referenced in `index.html`)

## Known gotchas

- `package.json` pinned `vite` to `^8.1.3`, which is incompatible with
  `@vitejs/plugin-react`'s peer range (`^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0`) and breaks
  `npm install` with an ERESOLVE error. It's now pinned to `^7.0.0` — don't bump past a
  major that `@vitejs/plugin-react` doesn't yet support without checking its peer deps.
- `.eslintrc.cjs` was missing from the original course export (course zip omitted it); it's
  been added back matching the standard Vite React template config. Without it, `npm run
  lint` fails immediately with "ESLint couldn't find a configuration file".