# Dark Mode — Design Spec

## Overview

Add a system-preference-based dark mode to the blog using pure CSS. The site will automatically follow the user's OS `prefers-color-scheme` setting. No toggle UI, no JavaScript required.

## Approach

**Pure CSS custom property overrides** — a single `@media (prefers-color-scheme: dark)` block in `style.css` redefines all color variables. Hardcoded colors in styled-components are replaced with CSS variable references.

## Color Palette

| Variable | Light | Dark |
|---|---|---|
| `--color-background` | `#fcfcfc` | `#000000` |
| `--color-text` | `#4b4b4b` | `#e0e0e0` |
| `--color-heading` | `#4b4b4b` | `#e0e0e0` |
| `--color-heading-black` | `black` | `#ffffff` |
| `--color-primary` | `#005b99` | `#6db3f2` |
| `--color-text-light` | `#4f5969` | `#888888` |
| `--color-accent` | `#d1dce5` | `#2a2a2a` |
| `--color-hover` | `#ede4e0` | `#1a1a1a` |
| `--color-blockquote` | `#fefaf1` | `#161616` |
| `--color-surface` (new) | `#f5f7f9` | `#1a1a1a` |

Style: true black / OLED-friendly. Surface elements use `#1a1a1a` for subtle elevation.

## Changes Required

### 1. `src/style.css`

- Add `--color-surface: #f5f7f9` to the existing `:root` block (new variable for nav buttons, card backgrounds).
- Add a `@media (prefers-color-scheme: dark)` block after `:root` that redefines all color variables with dark values.
- Add dark-mode Prism.js overrides inside the same media query to restyle code blocks (background, token colors).

### 2. Styled-components — replace hardcoded colors with CSS variables

- **`src/components/navbar.js`** — `#f5f7f9` → `var(--color-surface)`
- **`src/components/clocker-navbar.js`** — `#f5f7f9` → `var(--color-surface)`
- **`src/components/clocker-cards.js`** — `#f5f7f9` → `var(--color-surface)`
- **`src/components/clocker.js`** — `#f5f7f9` → `var(--color-surface)` (if present)
- **`src/templates/blog-post.js`** — `#a7a7a7` → `var(--color-text-light)`

### 3. Any other hardcoded `black` or `white` references in styled-components

Audit all styled-components for hardcoded color values and replace with appropriate CSS variables where they would look wrong in dark mode.

## Out of Scope

- Manual toggle UI (can be added later)
- `localStorage` preference persistence
- Image inversion or special image handling
- Separate dark Prism.js CSS file (inline in media query instead)

## Testing

- Toggle OS dark mode and verify the site switches automatically
- Check all pages: home, blog post, Clocker pages
- Verify code blocks are readable in both modes
- Verify links, blockquotes, nav buttons, and cards all use correct dark colors
- No flash of wrong theme on page load (guaranteed by CSS-only approach)
