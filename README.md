# Random Name Selector

A single-page web application for randomly picking a name from a user-defined list, with a secondary Dice Roller tool for generating a random number within configurable bounds.

## Features

- **Name Selector** — maintain a list of names (minimum 2), pick one at random, and review a running history of past selections.
- **Dice Roller** — set a lower and upper bound (0–99) and roll for a random integer within that range.
- **System theme** — automatically follows the OS light/dark preference via the `prefers-color-scheme` media query; no manual toggle needed.

## Tech stack

| Layer | Technology |
|-------|------------|
| Build tool | [Vite](https://vite.dev/) |
| UI library | [React 19](https://react.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Linting | ESLint (flat config) + `typescript-eslint` + `eslint-plugin-react-hooks` |

## Architecture

```
src/
├── components/
│   ├── NameSelector.tsx   # Name list management and random selection
│   └── DiceRoller.tsx     # Bounded random-number generator
├── App.tsx                # Root layout and tab navigation
├── main.tsx               # React DOM entry point
└── index.css              # Tailwind directives + shared component classes
```

The app is a client-side SPA with no router. `App.tsx` manages a simple `'names' | 'dice'` tab state and renders the active feature component. Dark/light theming is handled entirely by Tailwind's `darkMode: 'media'` strategy — no JavaScript or class toggling required.

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check and produce a production build in dist/
npm run preview    # serve the production build locally
npm run lint       # run ESLint across the source tree
```
