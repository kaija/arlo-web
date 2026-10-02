# Arlo AI site map

Every site under `arlo-ai.app`, and the repo/folder each one is published from. The hub
(`www`) is this repo; the others are sibling repos that publish themselves. Paths below are
URL paths; locale folders are shown in the same tree as the page they translate.

```
www.arlo-ai.app                    ← this repo (kaija/arlo-web), GitHub Pages via Actions
├── /                              hub landing page; en + zh-Hant + ja via i18n.js (?lang=)
│   ├── #projects                  cards → the project sites below
│   ├── #stack                     "How it fits together" diagram
│   └── #principles
├── /blog/                         post list (en + zh-Hant + ja via i18n.js)
│   └── /blog/system-design-before-code/
│       ├── (en)                   canonical, x-default
│       ├── zh-Hant/
│       └── ja/
└── /404.html

rust.arlo-ai.app                   kaija/arlo            website/   GitHub Pages
├── /                              Arlo — Rust-native agentic AI framework
├── /agent-loop.html               The Agent Loop
├── /zh/   index.html, agent-loop.html
├── /ja/   index.html, agent-loop.html
├── /ko/   index.html, agent-loop.html
└── /404.html

lite.arlo-ai.app                   kaija/arlo-lite-ios   website/   GitHub Pages
├── /                              Arlo Lite — LLM client for iOS (standalone)
├── /privacy.html
├── /zh/  /ja/  /ko/               index.html
├── /privacy-zh.html  /privacy-ja.html  /privacy-ko.html
└── /404.html

ag-ui-rust.arlo-ai.app             kaija/ag-ui-rust      website/   GitHub Pages
└── /                              AG-UI protocol for Rust (single page)

ai-analyzer.arlo-ai.app            kaija/arlo-ai-analyzer   site/ + scripts/build-site.sh   GitHub Pages
├── /                              Arlo AI Analyzer (macOS; no analytics)
├── /privacy.html                  rendered from PRIVACY.md at build time
├── /models.json                   price catalog the app fetches; refreshed on each deploy
├── /assets/                       01-dashboard … 05-settings screenshots
└── /404.html

extension.arlo-ai.app              kaija/arlo-extension  site/   GitHub Pages
├── /                              Arlo for Chrome — side-panel assistant
├── /privacy.html
├── /zh/   index.html, privacy.html
└── /404.html
    (canonical tags still point at kaija.github.io/arlo-extension/)

sovai-forge.arlo-ai.app            kaija/sovai-forge     docs/   GitHub Pages
├── /                              SovAI Forge (root is zh-Hant)
├── /en/
└── /ja/

blog.arlo-ai.app                   kaija/arlo-blog   NOT GitHub Pages — S3 + CloudFront (Terraform, OIDC deploy)
├── /                              redirects to /en/
├── /{en,zh-Hant,ja}/              index.html + feed.xml
├── /{en,zh-Hant,ja}/about.html
├── /{en,zh-Hant,ja}/posts/monitoring-drift.html
├── /{en,zh-Hant,ja}/posts/unknown-known-monitoring-gap.html
├── /sitemap.xml  /robots.txt  /404.html
└── /ds/                           vendored design system
```

## Cross-links

- Hub → `rust`, `lite`, `ag-ui-rust`, `ai-analyzer` (project cards) and `blog/`.
- Hub blog index → its own post, plus the two `arlo-blog` posts on `blog.arlo-ai.app`.
- `extension` and `sovai-forge` are **not linked from the hub** yet.
- Relationship (from CLAUDE.md): `frontends ↔ ag-ui-rust ↔ rust ↔ provider`; `lite`, `ai-analyzer` are standalone.

## Notes

- Sitemaps only cover their own host, so `sitemap.xml` here lists `www` pages only. Each
  sibling site would need its own; only `blog.arlo-ai.app` generates one today.
- Not in the repo and not mapped: DNS (Route 53), and `arlo-chat`, `arlo-fin`, `arlo-harness`,
  `arlo-mesh`, `arlo-design` — none has a Pages workflow or CNAME.
- Verified from the checkouts' workflows and CNAME files, not from live HTTP; the
  `extension` custom domain is set in repo Pages settings (no CNAME file), and was read from
  `gh api repos/kaija/arlo-extension/pages`.
