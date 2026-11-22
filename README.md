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
