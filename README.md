# Game Design

Design-only playground for the game UI: plain HTML pages + **Bootstrap 5 SCSS**, served
and live-reloaded by **[Vite+](https://viteplus.dev)**.

There is **no build step and no `dist/`**. You design here with real Bootstrap markup and
SCSS; later the markup/styles get hand-ported into the framework project.

---

## 📁 Structure

```
game-design/
├── src/                       ← served as the site root
│   ├── main.ts                ← entry: imports SCSS + bootstrap JS + DOM logic
│   ├── pages/
│   │   └── index.html
│   └── assets/
│       ├── images/
│       └── scss/
│           ├── _index.scss    # bootstrap + icons + shared styles
│           └── styles.scss    # entry point
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting started

```bash
npm install
vp dev             # or: npm run dev
```

Then open **http://localhost:5173/pages/index.html** (it opens automatically).

Everything is live: edit a page, a SCSS partial, or `main.ts` and the browser updates
instantly — no watcher-per-tool, no recompiling CSS by hand.

---

## ✏️ Where to work

| I want to change…     | Edit…                                           |
| --------------------- | ----------------------------------------------- |
| Page markup           | `src/pages/*.html` (live reload)                |
| Styles / theme colors | `src/assets/scss/_color.scss`, `_index.scss`, … |
| App behaviour         | `src/main.ts`                                   |
| Images                | `src/assets/images/`                            |

The SCSS entry is imported by `main.ts` (`import './assets/scss/styles.scss'`), so CSS is
injected automatically — there is no `<link rel="stylesheet">` to maintain and no
`assets/css/` folder anymore.

`main.ts` also imports Bootstrap's JS (`import * as bootstrap from 'bootstrap'`) and
exposes it as `window.bootstrap`, so `data-bs-*` components (offcanvas, tabs, carousel)
work straight from the markup.

---

## 🔗 URLs

`src/` is the site root (same as the previous `browser-sync --server ./src` setup):

| File                   | URL                 |
| ---------------------- | ------------------- |
| `src/pages/index.html` | `/pages/index.html` |
| `src/assets/images/…`  | `/assets/images/…`  |

---

## 🔧 Vite+ commands

| Command       | What it does                                      |
| ------------- | ------------------------------------------------- |
| `vp dev`      | Dev server + live reload (opens index page)       |
| `npm run dev` | Same, via the package script                      |
| `vp check`    | Format + lint (built into Vite+, no extra config) |

---

## 📌 Notes

- **No `sass`, `esbuild`, `browser-sync`, or `concurrently` tasks.** Vite+ compiles the
  SCSS, bundles the JS, and live-reloads on its own. The `sass` npm package is still
  installed as Vite+'s SCSS compiler engine — there is just no separate watcher script.
- Bootstrap 5 is loaded with legacy `@import` from `node_modules`, so its Sass
  deprecation warnings are silenced in `vite.config.ts` (`css.preprocessorOptions.scss`).
- **Bootstrap Icons come from `node_modules`.** `main.ts` imports
  `bootstrap-icons/font/bootstrap-icons.css`, and Vite resolves/copies the `.woff2`
  itself — no copied `assets/fonts/` folder and no `$bootstrap-icons-font-dir`. The
  icon font updates automatically when you upgrade the package.

---

## 📄 License

MIT (or whatever you prefer).
