# tesserae-site

The Tesserae website, https://tesserae.nept47.dev (GitHub Pages, Jekyll).

## Languages (nept47/Tesserae#448)

- English at `/`, the others in folders: `/fr/`, `/es/`, `/de/`, `/nl/`, `/it/`, `/el/` (order in `_config.yml`, `languages`).
- Home page and Delete account are translated. Privacy, Terms and Refunds are English only, with a note in the visitor's language.
- Strings: `_data/i18n/<lang>.yml` (same keys in every file). The home page is `_layouts/home.html`; `index.html` and `<lang>/index.html` only set `lang`.
- Delete account: `delete-account.md` and `<lang>/delete-account.md`. A page's translations share its `ref`, which gives the switcher and `hreflang` links.
- `/join/` stays one page (the app's invite links can't change) and translates itself from the JSON in it.
- The language: `?lang=xx` from the switcher, remembered in the browser; else the browser's language. Only `/` redirects.

## Content Security Policy

Inline scripts are allowed by hash. After changing `_includes/lang.js`, the script in `_layouts/home.html` or the one in `join/index.html`, build (`jekyll build`) and put the new `sha256-…` of each `<script>` body in the page's CSP meta tag.

## Search and sharing (nept47/Tesserae#458)

- `sitemap.xml` is made by `jekyll-sitemap` (a GitHub Pages plugin); `/join/` is left out (`_config.yml`) and has `noindex`. `robots.txt` points to the sitemap.
- Pages have addresses without `.html` (`permalink` in `_config.yml`), the same ones the canonical links and the sitemap give.
- `_includes/seo.html` adds the canonical link, favicons and Open Graph / Twitter tags to every page; `_includes/app-ld.html` adds the app's structured data (JSON-LD) to the home page. JSON-LD is data, not a script, so it needs no CSP hash.
- Share images: `assets/og/og-<lang>.jpg` (1200 × 630), one per language, made from the home page's hero and phones. After changing the hero text or the phones, make them again.
- Favicons: `favicon.svg`, `favicon.ico` (48, 32, 16 px) and `apple-touch-icon.png` (180 px). The CSP allows images from the site itself (`img-src 'self'`) for them.
