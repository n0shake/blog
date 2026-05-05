# Clocker FAQ Consolidation — Design

## Context

The Clocker FAQ at `/clocker/faq` is currently an index of 7 links, each pointing to a separate page (`/clocker/add-faq`, `/clocker/favourite-faq`, etc.). Each sub-page has its own copy and assets. To find an answer, the user has to leave the index, read the page, then go back.

This design consolidates all 7 FAQs onto a single page where the questions are listed at the top and the answers live below. Tapping a question jumps to its answer.

## Goals

- One page surface for all Clocker FAQs.
- Tapping a question instantly jumps to its answer (native `#anchor` behavior).
- Existing inbound links (search results, support emails, app menus) keep working via 301 redirects.
- No regressions in copy, images, or styling.

## Non-goals

- No accordion / expand-collapse interaction.
- No smooth scroll, scroll-spy, or scroll progress indicator.
- No search / filter / category grouping.
- No copy rewrites — existing answer text is reused verbatim.

## Page structure (`src/pages/clocker/faq.js`)

In order, top to bottom:

1. **Heading** — `<h1 id="top">FAQ</h1>` plus a one-line subtitle: "Tap a question to jump to the answer." The `id="top"` on the heading is the anchor target for "↑ Back to top" links.
2. **Question chips** — a vertical list of 7 styled anchor links. Each is a full-width chip styled like the existing `RoundedDiv` (rounded corners, surface background, bold text, hover state via `var(--color-hover)`). Each chip is `<a href="#slug">…</a>`. The **chip text** is the question phrasing from the current FAQ index (e.g., "How can I add new timezones or locations?") — not the heading from the existing answer page.
3. **`<hr/>` divider.**
4. **7 answer sections** — each `<section id="<slug>">` containing an `<h2>`, the answer body (text, lists, blockquotes, `<img className="educational">` screenshots/GIFs from existing pages), and a final `<a href="#top">↑ Back to top</a>` link.
5. **"Still looking for help?" contact block** — kept as-is from the current FAQ index, with the `ObfuscatedEmail` + `RoundedDiv` "Contact Us" button.

The page uses the existing `Layout` component with `navigation="/clocker"` (the header back-link now points to the Clocker landing page directly, since there are no longer any intermediate FAQ sub-pages).

## Anchor slugs

Slugs match the stem of each existing filename, so anyone familiar with the old URLs can guess the new anchor.

The **answer `<h2>` text** stays as the heading currently used on each per-FAQ page:

| Anchor | Chip text (question form) | Answer `<h2>` text | Source page (deleted) |
|---|---|---|---|
| `#add` | How can I add new timezones or locations? | Adding New Timezones | `add-faq.js` |
| `#favourite` | How do I enable timezones to appear in my menubar? | Favourites | `favourite-faq.js` |
| `#customize-label` | How do I customize the label for a timezone / location? | Customizing Labels | `customize-label-faq.js` |
| `#menubar` | Why does Clocker not show up in my menubar while certain apps are in the foreground? | Can't see Clocker at all? | `menubar-faq.js` |
| `#startup` | How do I start Clocker whenever my Mac boots or is restarted? | Starting Clocker at Login | `startup-faq.js` |
| `#customize-format` | How do I customize the time format for my selected locations? | Customizing Time Format | `customize-format-faq.js` |
| `#reset` | How do I reset Clocker? | Reset Clocker? | `reset-faq.js` |

Order on the page matches the order in the table — same order as the current FAQ index.

## Redirects

Appended to `static/_redirects` (Netlify-native; precedent already exists in this file):

```
/clocker/add-faq               /clocker/faq#add               301
/clocker/favourite-faq         /clocker/faq#favourite         301
/clocker/customize-label-faq   /clocker/faq#customize-label   301
/clocker/menubar-faq           /clocker/faq#menubar           301
/clocker/startup-faq           /clocker/faq#startup           301
/clocker/customize-format-faq  /clocker/faq#customize-format  301
/clocker/reset-faq             /clocker/faq#reset             301
```

The 7 source files under `src/pages/clocker/` are **deleted**, so Gatsby no longer generates those URLs. Without the `!` force flag, Netlify only applies a redirect when no matching file exists — deleting the source files is what activates the redirects. This avoids leaving forced redirects pointing at live pages.

## Files affected

**Modified:**
- `src/pages/clocker/faq.js` — replaced with the consolidated page.
- `static/_redirects` — 7 new redirect lines appended.

**Deleted:**
- `src/pages/clocker/add-faq.js`
- `src/pages/clocker/favourite-faq.js`
- `src/pages/clocker/customize-label-faq.js`
- `src/pages/clocker/menubar-faq.js`
- `src/pages/clocker/startup-faq.js`
- `src/pages/clocker/customize-format-faq.js`
- `src/pages/clocker/reset-faq.js`

**Image assets** — no changes. The same 8 files in `content/assets/` (`add.gif`, `fav.gif`, `customize-label.gif`, `customize-label-1.png`, `startup1.png`, `startup2.png`, `customize1.png`, `customize2.png`) are imported into the new `faq.js`.

## Implementation notes

- Question chips and "back to top" links are **plain `<a href="#…">`** anchors — no JS, no scroll handlers. Native browser handling gives the instant jump behavior the user requested.
- All styled-components helpers (`RoundedDiv`, etc.) keep using existing CSS variables (`--color-surface`, `--color-heading-black`, `--color-hover`).
- `<SEO title="Clocker FAQ" />` once at the top of the page. The 301 redirects preserve link equity from the old URLs; deleting the per-FAQ pages removes any duplicate-content risk.
- Answer markup is copied verbatim from each existing page — same paragraphs, lists, `<blockquote>` tip on the customize-format and customize-label sections, and same `<img className="educational">` for all screenshots/GIFs.

## Testing

- `yarn start`, open `/clocker/faq`, tap each question chip → confirm browser scrolls to the matching `<h2>`.
- Tap each "↑ Back to top" link → confirm browser returns to the chip list.
- Visit each old URL during local dev — these will 404, since `_redirects` is processed by Netlify, not the Gatsby dev server. That's expected.
- After deploy, verify each old URL in a browser: `https://<domain>/clocker/add-faq` should 301 to `/clocker/faq#add` (and similar for the other 6).
- Visual check: chip styling, hover state, spacing between chips, divider, and the contact block at the bottom.
