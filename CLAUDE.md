# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The landing site for Arlo AI at **www.arlo-ai.app** (the apex `arlo-ai.app` 301s there). It is only a website —
no application code. Static HTML/CSS/JS with **no build step and no dependencies**; a push
to `main` publishes the repo root to GitHub Pages via `.github/workflows/deploy.yml`.

Do not introduce a framework, bundler, or package manager here. The absence of a build step
is deliberate — it is what keeps this site trivially in sync with the three project sites,
which are built the same way. The workflow uploads the repo root as-is; there is nothing to
compile, and no build step should be added to it.

```
index.html   the whole page; English copy lives here, marked up with data-i18n keys
i18n.js      zh-Hant + ja overrides, and the language switcher
main.js      mobile nav toggle (copied verbatim from arlo-lite's site)
styles.css   design system shared with all three project sites
404.html
blog/        index.html lists posts; each post is blog/<slug>/index.html (see "Blog")
CNAME        www.arlo-ai.app
.nojekyll    without it, Pages' Jekyll silently drops _-prefixed paths
```

## Commands

There is no build, lint, or test suite — CI only publishes. To preview:

```bash
python3 -m http.server 8000
```

Opening `index.html` straight off disk also works and **must keep working** — that is why
`i18n.js` is a plain `<script>` with an inline object rather than a `fetch()` of a JSON
file. Don't introduce `fetch`, ES modules, or `type="module"` scripts.

## The Arlo AI project family

This site is the front door to three sibling repos. Each has its own `website/` folder,
its own subdomain, and its own GA4 property. They are checked out beside this repo.

| Project | Repo | Site source | Domain |
|---|---|---|---|
| Arlo Rust | `kaija/arlo` (dir: `arlo-rust`) | `website/` | `rust.arlo-ai.app` |
| Arlo Lite | `kaija/arlo-lite-ios` (dir: `arlo-lite`) | `website/` | `lite.arlo-ai.app` |
| AG-UI Rust | `kaija/ag-ui-rust` | `website/` | `ag-ui-rust.arlo-ai.app` |

Note the repo names do not match the directory names, and the arlo-lite site links to a
non-existent `kaija/arlo-lite` — this repo deliberately links to `kaija/arlo-lite-ios`.

**How the projects relate** (this is what the "How it fits together" section encodes, and
it was confirmed with the maintainer — do not redraw it from guesswork):

- **Arlo Rust** is a private, local-first agent runtime, exposed as a TUI, a one-shot CLI,
  or an embeddable library. Runs on macOS, Windows, and Linux.
- **AG-UI Rust** implements the AG-UI protocol and is the standard interface through which
  a web/desktop/mobile frontend drives Arlo Rust.
- **Arlo Lite** is **standalone**. It is an iOS app that connects directly to the user's own
  LLM provider. It is *not* an Arlo Rust client and there is no edge between them.

So there are two independent paths, not one stack:
`frontends ↔ AG-UI Rust ↔ Arlo Rust ↔ provider`, and separately `Arlo Lite → provider`.

## Design system

`styles.css` was copied from `arlo-rust/website/styles.css` with the project-specific
sections removed. The `:root` block, reset, `.container`, `.section-header`, `.nav*`,
`.btn*`, `.hero*`, `.feature-card`, `.pill`, `.footer*`, and the breakpoints are
**byte-identical across all four sites** — Inter, accent `#5856D6`, same radii and shadows.

Treat those shared rules as a contract: if one changes here, it should change in the three
sibling repos too, and vice versa. Hub-only additions (`.project-card`, `.stack-*`,
`.lang-switch`, and the blog's `.blog-*` / `.post-*`) live after the shared blocks.

Each project has its own glyph inside the same `#5856D6` rounded square (Arlo Rust `>`,
Arlo Lite peak-with-bar, AG-UI waveform); the hub's "A" monogram is the parent mark. Project
card icons are lifted from each project's own `index.html` so the marks stay consistent.

## Editing copy and translations

English is hardcoded in `index.html` so crawlers and no-JS visitors get a complete English
page; `i18n.js` holds *only* the zh-Hant and ja overrides. **Adding or changing a string
means editing both files.** A key present in the markup but missing from a locale falls back
to English rather than blanking.

- `data-i18n="key"` swaps `innerHTML` (values may contain markup, e.g. the `<br/>` in the
  hero headline — dictionary values are authored, never user input).
- `data-i18n-attr="attr:key"` swaps an attribute (`content`, `aria-label`, …).
- English is restored from a DOM snapshot taken at load, so switching back to EN is exact.
- Locale selection is `?lang=` → `localStorage.arloLang` → `en`. There is intentionally
  **no `navigator.language` sniffing** — a silent switch on first load is surprising and the
  switcher is visible in the nav.

Proper nouns and acronyms in pills (Rust, iOS, MCP, SSE, AG-UI) stay untranslated; prose
pills like "BYO key" carry a `data-i18n` key.

## Blog

Hand-written HTML, no generator. Every post exists in all three locales as separate static
pages — long-form copy is far too big for `i18n.js`, and each translation should be crawlable:

```
blog/index.html                  post list; uses i18n.js (blog.* keys) like the hub
blog/<slug>/index.html           English (canonical, x-default)
blog/<slug>/zh-Hant/index.html
blog/<slug>/ja/index.html
```

- Adding a post means three pages, plus a card in `blog/index.html` with its `blog.<post>.*`
  keys in both locales of `i18n.js` (the card's `href` is swapped per locale too). Start by
  copying an existing post; its translations share an identical element skeleton.
- Post pages **don't load `i18n.js`**. Nav and footer labels are hardcoded per locale, and
  the `.lang-switch` holds links to the sibling translations rather than buttons. Clicking one
  also writes `localStorage.arloLang`, so the hub and blog index follow the reader's choice.
- Each post declares `<html lang>`, a self-referencing `canonical`, and `hreflang` alternates
  for all three locales plus `x-default` → English.
- All links and assets are relative (`../../styles.css`, `../../../` from a translation), so
  pages work under `http.server`, off disk, and on Pages alike.
- Long-form typography is `.post-body` in `styles.css`. `.blog` / `.post` name CJK fonts
  explicitly because Inter has no CJK glyphs; `:lang(ja)` swaps in Japanese faces.
- The only script beyond `main.js` is inline: the TOC scroll-spy and the language-choice
  persistence. Keep it inline and identical across a post's translations.

## Deploy

Push to `main` — `.github/workflows/deploy.yml` uploads the repo root and deploys it.
Repo Settings → Pages → Source must be **GitHub Actions** (not "Deploy from a branch"), or
the workflow fails at `configure-pages`. `.git` and `.github` are excluded from the
artifact; everything else ships, including `CNAME`.

The Pages custom domain is `www.arlo-ai.app`, and GitHub redirects the apex to it. Absolute
URLs in the markup (`canonical`, `og:url`, `hreflang`) must use `https://www.arlo-ai.app/`,
not the apex, or they point search engines at a redirect.

DNS for the apex and the `rust` subdomain is managed in Route 53 outside this repo.
