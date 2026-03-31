# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and portfolio site built with **Gatsby 5** (React 18, styled-components). Content is authored in Markdown with frontmatter. Deployed on **Netlify**.

## Commands

```bash
yarn start        # Dev server at localhost:8000 (gatsby develop)
yarn build        # Production build
yarn serve        # Serve production build locally
yarn clean        # Clear .cache and public directories
yarn format       # Prettier formatting
```

## Architecture

- **Content**: Markdown files in `content/blog/` with frontmatter (`title`, `date`, `description`, `category`, `show`). Categories include `blog` and `book-review`.
- **Page generation**: `gatsby-node.js` creates pages from Markdown at build time using `createPages` API. Also fetches book cover images from Open Library API for book reviews (by ISBN).
- **Routing**: File-based via `src/pages/`. Blog posts use the template at `src/templates/blog-post.js`.
- **Styling**: Mix of styled-components and global CSS (`src/style.css`, `src/normalize.css`). Code blocks use Prism.js theming.
- **Site metadata & data**: All sourced via GraphQL. `gatsby-config.js` defines plugins and site metadata.

## Environment Variables

- `GATSBY_TAG_ID` — Google Tag Manager ID
- `GATSBY_GA_IDENTIFIER` — Google Analytics tracking ID

## Code Style

Prettier config (`.prettierrc`): no semicolons, avoid arrow parens, 2-space indent, single quotes, trailing commas (all), 60-char print width.
