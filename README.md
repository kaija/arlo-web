# arlo-web

The Arlo AI landing site — [arlo-ai.app](https://arlo-ai.app).

A static front door for the three Arlo AI open-source projects:

| Project | Site | Repo |
|---|---|---|
| Arlo Rust | [rust.arlo-ai.app](https://rust.arlo-ai.app) | [kaija/arlo](https://github.com/kaija/arlo) |
| Arlo Lite | [lite.arlo-ai.app](https://lite.arlo-ai.app) | [kaija/arlo-lite-ios](https://github.com/kaija/arlo-lite-ios) |
| AG-UI Rust | [ag-ui-rust.arlo-ai.app](https://ag-ui-rust.arlo-ai.app) | [kaija/ag-ui-rust](https://github.com/kaija/ag-ui-rust) |

## Preview

No build step. Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

## Layout

```
index.html    the page — English copy lives here, marked up with data-i18n keys
i18n.js       zh-Hant / ja overrides + the language switcher
main.js       mobile nav toggle
styles.css    design system shared with the three project sites
404.html
CNAME         arlo-ai.app
```

`styles.css` is the same design system as the project sites (Inter, accent `#5856D6`,
identical `:root` block). Keep them in sync — if a shared component changes here, it
should change there too.

## Translations

English is hardcoded in `index.html`; `i18n.js` holds only the zh-Hant and ja overrides,
keyed by the `data-i18n` attributes in the markup. Adding a string means adding it in both
places. Locale selection is `?lang=` → `localStorage` → English.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` publishes the repo root to GitHub Pages.

Requires Settings → Pages → Source set to **GitHub Actions**.
