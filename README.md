# Portfolio: Danish Munawar

My personal site. One page in five numbered "sheets": Identity, Work, Logos, About, Contact.

## The idea

I designed logos for ten years before I became a developer. So the site looks like a
logo **construction sheet**: cyan guide lines (cap height and baseline) under my name,
construction circles, crop marks around screenshots, a printer's registration mark.
The two colours are **process cyan and magenta**: the colours of guides and selections
in Adobe Illustrator.

## Files

| File | What it does |
|---|---|
| `lib/content.js` | **All the text.** Change words here, not in the components. |
| `app/globals.css` | All the styles, with comments. Colours and fonts are at the top. |
| `components/Hero.js` | My name on the guide lines + construction circles |
| `components/ProjectSheet.js` | One project as a "spec sheet" |
| `components/Work.js`, `Logos.js`, `About.js`, `Contact.js` | One file per section |
| `public/work/` | Project screenshots |
| `public/logos/` | Logo images (listed in `lib/content.js`) |

## Add a logo

1. Put the image in `public/logos/`, e.g. `bakery.png`.
2. In `lib/content.js`, add `{ file: "bakery.png", caption: "Bakery, Helsinki" }` to `logos`.

## Fonts

Gloock (headings), IBM Plex Sans (text), IBM Plex Mono (labels). Loaded with `next/font`.

## Run it

```bash
npm install
npm run dev     # open http://localhost:3000
```
