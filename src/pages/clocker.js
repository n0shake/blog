import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"

import clockerHeadline from "../../content/assets/clocker-headline.png"
import clockerIcon from "../../content/assets/icon.png"
import feature2 from "../../content/assets/clocker-feature-2.png"
import feature3 from "../../content/assets/clocker-feature-3.png"
import scrollerVideo from "../../content/assets/scroller.mp4"
import customLabelsVideo from "../../content/assets/custom-labels.mp4"
import themesStack from "../../content/assets/stack-preview.png"
import macAppStoreBadge from "../../Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg"
import macAppStoreBadgeWhite from "../../Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg"

const APP_STORE_URL =
  "https://apps.apple.com/us/app/clocker/id1056643111?mt=12"

const PAGE_CSS = `
.clocker-landing-v2{
  --accent: #2D7BFF;
  --accent-soft: rgba(45,123,255,0.10);
  --bg: #F5F4F1;
  --bg-2: #EDEBE6;
  --panel: #FFFFFF;
  --line: rgba(20,22,26,0.08);
  --line-2: rgba(20,22,26,0.14);
  --fg: #14161A;
  --fg-dim: #5A5E66;
  --fg-mute: #8A8E96;
  --light-bg: #FFFFFF;
  --light-bg-2: #F5F4F1;
  --light-fg: #14161A;
  --light-fg-dim: #5A5E66;
  --light-fg-mute: #8A8E96;
  --light-line: rgba(20,22,26,0.10);
  --font-display: 'Barlow', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-body: 'Barlow', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-serif: 'Instrument Serif', Georgia, serif;

  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  font-size: 16px;
  line-height: 1.5;
}
.clocker-landing-v2 *,
.clocker-landing-v2 *::before,
.clocker-landing-v2 *::after{ box-sizing: border-box; }
.clocker-landing-v2 ::selection{ background: var(--accent); color:#fff; }

.clocker-landing-v2 img{
  display:block; width:100%; height:auto; margin:0;
}

.clocker-landing-v2 a{ color: inherit; }
.clocker-landing-v2 p{
  line-height: 1.5;
  margin: 0 0 12px;
  padding: 0;
}
.clocker-landing-v2 ul, .clocker-landing-v2 ol{ margin: 0; padding: 0; }
.clocker-landing-v2 li{ margin: 0; padding: 0; }

.clocker-landing-v2 .shell{ width:100%; max-width: 1240px; margin: 0 auto; padding: 0 32px; }

/* nav */
.clocker-landing-v2 .nav{
  position: sticky; top: 0; z-index: 50;
  background: rgba(245,244,241,0.85);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border-bottom: 1px solid var(--line);
}
.clocker-landing-v2 .nav-inner{ display:flex; align-items:center; justify-content:space-between; height: 56px; }
.clocker-landing-v2 .brand{ display:flex; align-items:center; gap:9px; font-weight:600; letter-spacing: -0.01em; color: var(--fg); text-decoration: none; }
.clocker-landing-v2 .brand-mark{
  width:22px; height:22px; border-radius: 7px;
  background: linear-gradient(160deg, var(--accent), #6BB7FF);
  display:grid; place-items:center; position: relative;
  box-shadow: 0 0 0 1px rgba(45,123,255,0.30), 0 6px 18px rgba(45,123,255,0.30);
  flex-shrink: 0;
}
.clocker-landing-v2 .brand-mark::before{ content:""; width:11px; height:11px; border-radius:50%; border: 1.5px solid #fff; }
.clocker-landing-v2 .brand-mark::after{
  content:""; position:absolute; left:50%; top:50%;
  width:1.2px; height:5px; background:#fff;
  transform-origin: bottom center;
  transform: translate(-50%, -100%) rotate(45deg);
  border-radius:1px;
}
.clocker-landing-v2 .brand-mark-img{
  width: 22px;
  height: 22px;
  background: transparent;
  box-shadow: none;
  object-fit: contain;
  padding: 0;
}
.clocker-landing-v2 .brand-mark-img::before,
.clocker-landing-v2 .brand-mark-img::after{ content: none; display: none; }
.clocker-landing-v2 .nav-links{ display:flex; align-items:center; gap: 22px; font-size: 13.5px; color: var(--fg-dim); }
.clocker-landing-v2 .nav-links a{ color: var(--fg-dim); text-decoration:none; }
.clocker-landing-v2 .nav-links a:hover{ color: var(--fg); }
.clocker-landing-v2 .nav-links a.nav-cta{
  display:inline-flex; align-items:center; gap:8px;
  height: 34px; padding: 0 14px;
  background: #14161A; color: #fff;
  border-radius: 10px; font-weight: 600; font-size: 13px;
  text-decoration: none;
  transition: background .12s ease, color .12s ease, opacity .12s ease;
}
.clocker-landing-v2 .nav-links a.nav-cta:hover{ background:#000; color: #fff; }
.clocker-landing-v2 .nav-links a.nav-cta .nav-cta-chevron{
  width: 12px; height: 12px; flex-shrink: 0;
}

/* hero */
.clocker-landing-v2 .hero{ position: relative; padding: 96px 0 48px; overflow: hidden; }
.clocker-landing-v2 .hero-grid{
  position:absolute; inset:0; pointer-events:none;
  background-image:
    linear-gradient(to right, rgba(20,22,26,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(20,22,26,0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%);
  opacity: .7;
}
.clocker-landing-v2 .hero-glow{
  position:absolute; left:50%; top:-200px; transform: translateX(-50%);
  width: 900px; height: 700px;
  background: radial-gradient(closest-side, rgba(45,123,255,0.18), transparent 70%);
  filter: blur(20px); pointer-events:none;
}
.clocker-landing-v2 .hero-inner.linear{ position: relative; text-align: center; }
.clocker-landing-v2 .hero-inner.linear h1{
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(48px, 7.6vw, 112px);
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin: 0 auto 36px;
  max-width: 16ch;
  text-wrap: balance;
  color: var(--fg);
}
.clocker-landing-v2 .linear-foot{
  display:flex; align-items: center; justify-content: center;
  gap: 32px; flex-wrap: wrap;
}
.clocker-landing-v2 .linear-sub{
  color: var(--fg-mute);
  font-size: 15px; line-height: 1.5;
  max-width: 520px; margin: 0 auto;
}
.clocker-landing-v2 .hero-headline-img{
  display: block;
  width: min(1100px, 100%);
  height: auto;
  margin: 64px auto 0;
  border-radius: 20px;
}

/* editors choice badge — stacked award lockup */
.clocker-landing-v2 .ec-badge{
  display: inline-flex; flex-direction: column; align-items: center;
  gap: 6px;
  margin: 0 auto 32px;
  padding: 0;
  background: transparent;
  border: 0;
  color: var(--fg-dim);
  line-height: 1.05;
  text-decoration: none;
  transition: opacity .12s ease;
}
.clocker-landing-v2 a.ec-badge:hover{ opacity: 0.8; }
.clocker-landing-v2 .ec-eyebrow{
  font-family: var(--font-display);
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--fg-mute);
}
.clocker-landing-v2 .ec-mid{
  display: inline-flex; align-items: center; gap: 8px;
}
.clocker-landing-v2 .ec-laurel{
  width: 28px; height: 64px; color: var(--fg-mute); flex-shrink: 0;
}
.clocker-landing-v2 .ec-title{
  display: flex; flex-direction: column; align-items: center;
  font-family: var(--font-display);
  font-size: 22px; font-weight: 500;
  color: var(--fg);
  letter-spacing: -0.01em;
  line-height: 1.05;
}
.clocker-landing-v2 .ec-title span{ display: block; }
.clocker-landing-v2 .ec-foot{
  font-family: var(--font-display);
  font-size: 16px; font-weight: 500;
  color: var(--fg-dim);
  letter-spacing: 0;
}

/* CTA buttons */
.clocker-landing-v2 .cta-row{ display:flex; gap: 10px; align-items:center; margin-top: 28px; flex-wrap: wrap; }
.clocker-landing-v2 .btn{
  display:inline-flex; align-items:center; gap:8px;
  height: 44px; padding: 0 20px; border-radius: 12px;
  font-weight: 600; font-size: 14px; text-decoration:none;
  border: 1px solid transparent;
  transition: transform .12s ease, background .12s ease, filter .12s ease;
}
.clocker-landing-v2 .btn:active{ transform: translateY(1px); }
.clocker-landing-v2 .btn-primary{
  background: linear-gradient(180deg, #4D8FFF, var(--accent));
  color: #fff;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.25),
    0 1px 0 rgba(0,0,0,0.4),
    0 12px 30px rgba(45,123,255,0.35);
}
.clocker-landing-v2 .btn-primary:hover{ filter: brightness(1.05); }
.clocker-landing-v2 .btn-ghost{
  background: rgba(20,22,26,0.04);
  color: var(--fg);
  border-color: var(--line-2);
}
.clocker-landing-v2 .btn-ghost:hover{ background: rgba(20,22,26,0.07); }
.clocker-landing-v2 .btn .meta{ color: rgba(255,255,255,0.7); font-weight: 500; font-size: 12.5px; }
.clocker-landing-v2 .btn-ghost .meta{ color: var(--fg-mute); }

/* Mac App Store badge */
.clocker-landing-v2 .mas-badge{
  display:inline-flex; align-items:center;
  transition: opacity .12s ease, transform .12s ease;
}
.clocker-landing-v2 .mas-badge:hover{ opacity: 0.85; }
.clocker-landing-v2 .mas-badge:active{ transform: translateY(1px); }
.clocker-landing-v2 .mas-badge .mas-badge-img{ height: 100%; width: auto; }
.clocker-landing-v2 .mas-badge .mas-badge-img--light{ display: block; }
.clocker-landing-v2 .mas-badge--lg{ height: 52px; }
.clocker-landing-v2 .mas-badge--nav{ height: 30px; }
.clocker-landing-v2 .mas-meta{
  margin-left: 12px; color: var(--fg-mute);
  font-family: var(--font-mono); font-size: 11.5px;
  letter-spacing: 0.02em;
}

/* hero stage */
.clocker-landing-v2 .stage{
  position: relative;
  margin: 64px auto 0;
  width: min(1100px, 100%);
  border-radius: 20px;
  background: #0E1116;
  border: 1px solid var(--line-2);
  overflow: hidden;
  box-shadow: 0 40px 120px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04);
  aspect-ratio: 16/10;
}
.clocker-landing-v2 .stage::before{
  content:""; position:absolute; inset:0;
  background:
    radial-gradient(120% 80% at 20% 0%, #1A2A4A 0%, transparent 50%),
    radial-gradient(120% 80% at 100% 100%, #0E1A30 0%, transparent 60%),
    linear-gradient(180deg, #0E1116, #14171D);
}
.clocker-landing-v2 .stage-chrome{
  position:absolute; left:0; right:0; top:0; height:32px; z-index: 3;
  background: rgba(20,22,28,0.7);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display:flex; align-items:center; justify-content:space-between;
  padding: 0 14px;
  color: rgba(255,255,255,0.92);
  font-size: 12.5px;
}
.clocker-landing-v2 .mb-left{ display:flex; align-items:center; gap: 16px; }
.clocker-landing-v2 .mb-apple{
  width:13px; height:13px; background: rgba(255,255,255,0.85);
  clip-path: path('M11.5 4.5c-.6-.7-1.6-1.1-2.4-1.1-.1.9.3 1.8.8 2.5.6.6 1.5 1.1 2.4 1 .1-.9-.2-1.7-.8-2.4ZM12.6 7c-1.3-.1-2.4.7-3 .7-.6 0-1.5-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 7.9.7.9 1.5 2 2.6 2 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-1.9.8-1.1 1.1-2.1 1.1-2.2 0 0-2.2-.8-2.2-3.3 0-2 1.7-3 1.7-3.1-.9-1.4-2.4-1.5-3-1.5Z');
}
.clocker-landing-v2 .mb-name{ font-weight: 600; }
.clocker-landing-v2 .mb-menu{ color: rgba(255,255,255,0.78); }
.clocker-landing-v2 .mb-right{ display:flex; align-items:center; gap: 14px; font-variant-numeric: tabular-nums; white-space: nowrap; }
.clocker-landing-v2 .mb-tz{ display:inline-flex; flex-direction: column; align-items:center; line-height:1.05; }
.clocker-landing-v2 .mb-tz .city{ color: rgba(255,255,255,0.55); font-size: 9.5px; font-weight: 500; letter-spacing: 0.02em; }
.clocker-landing-v2 .mb-tz .time{ font-weight: 600; font-size: 12px; letter-spacing: 0; }
.clocker-landing-v2 .mb-tz.active .time{ color: #6BB7FF; }
.clocker-landing-v2 .mb-icon{ width: 14px; height: 14px; opacity: .7; }

.clocker-landing-v2 .stage-video{
  position:absolute; left:0; right:0; top:32px; bottom:0; z-index: 2;
  background:
    radial-gradient(circle at 30% 20%, rgba(45,123,255,0.18), transparent 40%),
    radial-gradient(circle at 70% 80%, rgba(106,167,255,0.12), transparent 50%);
  overflow: hidden;
}
.clocker-landing-v2 .stage-video::before{
  content:""; position:absolute; inset:0; pointer-events:none; opacity: 0.4;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%);
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%);
}
.clocker-landing-v2 .stage-slot{
  position:absolute;
  top: 8%; right: 4%;
  width: 38%;
}
.clocker-landing-v2 .stage-slot .slot-frame{
  width: 100%; aspect-ratio: 360/520;
  border-radius: 14px;
  overflow: hidden;
  background: #0F1116;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 30px 80px rgba(0,0,0,0.55);
}
.clocker-landing-v2 .stage-slot .slot-frame img{
  width: 100%; height: 100%; object-fit: cover; object-position: top center;
}
.clocker-landing-v2 .stage-arrow-pop{
  position:absolute; right: 8%; top: 0;
  width: 12px; height: 12px;
  background: #1C1E24;
  border-left: 1px solid rgba(255,255,255,0.10);
  border-top: 1px solid rgba(255,255,255,0.10);
  transform: translateY(-6px) rotate(45deg);
  z-index: 4;
}
.clocker-landing-v2 .stage-caption{
  position:absolute; left: 36px; bottom: 32px; z-index: 4;
  color: rgba(255,255,255,0.6); font-family: var(--font-mono);
  font-size: 11.5px; letter-spacing: 0.04em;
  display:flex; flex-direction: column; gap: 4px;
  max-width: 50%;
}
.clocker-landing-v2 .stage-caption b{ color: #fff; font-weight: 500; letter-spacing: 0; font-family: var(--font-display); font-size: 13.5px; }

/* trust */
.clocker-landing-v2 .trust{
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 24px 0;
  margin-top: 64px;
}
.clocker-landing-v2 .trust-row{ display:flex; align-items:center; justify-content:space-between; gap: 32px; flex-wrap:wrap; }
.clocker-landing-v2 .trust-item{ display:flex; align-items:center; gap: 10px; color: var(--fg-dim); font-size: 13px; }
.clocker-landing-v2 a.trust-link{ text-decoration: none; transition: opacity .12s ease; }
.clocker-landing-v2 a.trust-link:hover{ opacity: 0.75; }
.clocker-landing-v2 .trust-item b{ color: var(--fg); font-weight: 600; }
.clocker-landing-v2 .stars{ color: #FFB547; letter-spacing: 1px; font-size: 12px; }
.clocker-landing-v2 .laurel{ color: var(--fg-dim); font-size: 18px; line-height: 1; font-family: var(--font-serif); transform: translateY(1px); }
.clocker-landing-v2 .laurel.flip{ transform: translateY(1px) scaleX(-1); }

/* sections */
.clocker-landing-v2 section{ padding: 120px 0; position: relative; }
.clocker-landing-v2 .section-light{ background: var(--light-bg); color: var(--light-fg); }
.clocker-landing-v2 .section-light .eyebrow{ color: #1F5BD9; }
.clocker-landing-v2 .section-light h2,
.clocker-landing-v2 .section-light h3{ color: var(--light-fg); }
.clocker-landing-v2 .section-light .lede,
.clocker-landing-v2 .section-light p { color: var(--light-fg-dim); }

.clocker-landing-v2 .eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  font-family: var(--font-mono);
  font-size: 11px; font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.08em; text-transform: uppercase;
}
.clocker-landing-v2 .eyebrow::before{ content:""; width: 14px; height: 1px; background: currentColor; }

.clocker-landing-v2 h2{
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(32px, 4vw, 52px);
  letter-spacing: -0.025em;
  line-height: 1.04;
  margin: 14px 0 12px;
  text-wrap: balance;
  max-width: 820px;
  color: var(--fg);
}
.clocker-landing-v2 h2 em{
  font-style: italic; font-family: var(--font-serif); font-weight: 400;
  color: color-mix(in oklab, currentColor 70%, var(--accent));
}
.clocker-landing-v2 .lede{
  font-size: 17px; color: var(--fg-dim);
  line-height: 1.55; max-width: 580px;
  text-wrap: pretty;
}

/* feature gallery */
.clocker-landing-v2 .gallery{
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: auto;
  gap: 16px;
}
.clocker-landing-v2 .tile{
  border-radius: 18px;
  background: #fff;
  border: 1px solid var(--light-line);
  overflow: hidden;
  position: relative;
  display: flex; flex-direction: column;
  box-shadow: 0 1px 0 rgba(20,22,30,0.04), 0 16px 40px rgba(20,22,30,0.04);
  transition: transform .2s ease, box-shadow .2s ease;
}
.clocker-landing-v2 .tile:hover{ transform: translateY(-3px); box-shadow: 0 1px 0 rgba(20,22,30,0.04), 0 30px 60px rgba(20,22,30,0.08); }
.clocker-landing-v2 .tile-body{ padding: 24px 24px 18px; }
.clocker-landing-v2 .tile-eyebrow{
  font-family: var(--font-mono); font-size: 10.5px; font-weight: 500;
  color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase;
}
.clocker-landing-v2 .tile h3{
  font-family: var(--font-display); font-weight: 600;
  font-size: 22px; letter-spacing: -0.015em; line-height: 1.15;
  margin: 8px 0 8px;
  color: var(--light-fg);
}
.clocker-landing-v2 .tile p{ font-size: 13.5px; color: var(--light-fg-dim); line-height: 1.55; margin: 0; max-width: 380px; }
.clocker-landing-v2 .tile-art{
  flex: 1; min-height: 0; padding: 0 24px 24px;
  display: flex; align-items: flex-end; justify-content: center;
  position: relative;
}
.clocker-landing-v2 .tile-art .slot-frame{
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--light-line);
  box-shadow: 0 10px 30px rgba(20,22,30,0.08);
  overflow: hidden;
  background: var(--light-bg-2);
}
.clocker-landing-v2 .tile-art .slot-frame img,
.clocker-landing-v2 .tile-art .slot-frame video{
  width: 100%; height: 100%; object-fit: cover; display: block;
}

/* tile sizes */
.clocker-landing-v2 .tile.t-wide{ grid-column: span 4; }
.clocker-landing-v2 .tile.t-narrow{ grid-column: span 2; }
.clocker-landing-v2 .tile.t-half{ grid-column: span 3; }
.clocker-landing-v2 .tile.t-third{ grid-column: span 2; }
.clocker-landing-v2 .tile.t-tall{ grid-row: span 2; }
.clocker-landing-v2 .tile.t-dark{
  background: #14161A; border-color: rgba(255,255,255,0.08); color: #fff;
}
.clocker-landing-v2 .tile.t-dark h3{ color: #fff; }
.clocker-landing-v2 .tile.t-dark p{ color: rgba(255,255,255,0.6); }
.clocker-landing-v2 .tile.t-dark .slot-frame{ border-color: rgba(255,255,255,0.08); box-shadow: 0 20px 60px rgba(0,0,0,0.5); background: #0F1116; }

/* CSS-only mocks for tiles without real screenshots */
.clocker-landing-v2 .mock-prefs{
  width: 100%;
  background: linear-gradient(180deg, #FFFFFF, #F7F6F3);
  border-radius: 10px;
  border: 1px solid rgba(20,22,26,0.06);
  padding: 14px;
  display: flex; flex-direction: column; gap: 10px;
  font-family: var(--font-mono); font-size: 10.5px;
  color: var(--light-fg-dim);
  box-shadow: 0 8px 24px rgba(20,22,30,0.06);
}
.clocker-landing-v2 .mock-prefs .row{
  display:flex; align-items:center; justify-content:space-between;
  padding: 8px 10px; border-radius: 6px;
  background: rgba(20,22,26,0.03);
  border: 1px solid rgba(20,22,26,0.05);
}
.clocker-landing-v2 .mock-prefs .row .label{ color: var(--light-fg); }
.clocker-landing-v2 .mock-prefs .row .val{ color: var(--accent); }
.clocker-landing-v2 .mock-prefs .toggle{
  width: 26px; height: 14px; border-radius: 999px;
  background: var(--accent); position: relative;
  border: 0; padding: 0; margin: 0;
  cursor: pointer;
  transition: background .15s ease;
  -webkit-appearance: none; appearance: none;
}
.clocker-landing-v2 .mock-prefs .toggle:focus-visible{
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.clocker-landing-v2 .mock-prefs .toggle::after{
  content:""; position: absolute; right: 2px; top: 2px;
  width: 10px; height: 10px; border-radius: 50%; background: #fff;
}
.clocker-landing-v2 .mock-prefs .toggle.off{ background: rgba(20,22,26,0.12); }
.clocker-landing-v2 .mock-prefs .toggle.off::after{ left: 2px; right: auto; }

.clocker-landing-v2 .mock-event{
  width: 100%; aspect-ratio: 16/10;
  background: #fff;
  border-radius: 10px;
  border: 1px solid var(--light-line);
  box-shadow: 0 10px 30px rgba(20,22,30,0.08);
  padding: 16px;
  display: flex; flex-direction: column; gap: 10px;
  font-size: 12px;
  color: var(--light-fg);
}
.clocker-landing-v2 .mock-event .when{
  font-family: var(--font-mono); font-size: 10.5px; color: var(--accent);
  letter-spacing: 0.06em; text-transform: uppercase;
}
.clocker-landing-v2 .mock-event .title{ font-weight: 600; font-size: 14px; }
.clocker-landing-v2 .mock-event .who{ color: var(--light-fg-dim); font-size: 11.5px; }
.clocker-landing-v2 .mock-event .join{
  margin-top: auto;
  align-self: flex-start;
  display:inline-flex; align-items:center; gap:6px;
  background: var(--accent); color: #fff;
  font-weight: 600; font-size: 11px;
  padding: 6px 10px; border-radius: 6px;
}

/* feature split (time scroller / calendar big sections) */
.clocker-landing-v2 .split{
  display:grid; grid-template-columns: 1fr 1.05fr; gap: 64px;
  align-items: center;
}
.clocker-landing-v2 .split.reverse > :first-child{ order: 2; }
.clocker-landing-v2 .split-text h3{
  font-family: var(--font-display);
  font-size: 36px; font-weight: 600; letter-spacing: -0.025em; line-height: 1.05;
  margin: 14px 0 14px;
  text-wrap: balance;
  color: var(--fg);
}
.clocker-landing-v2 .section-light .split-text h3{ color: var(--light-fg); }
.clocker-landing-v2 .split-text p{ font-size: 16px; line-height: 1.6; max-width: 480px; color: var(--fg-dim); }
.clocker-landing-v2 .section-light .split-text p{ color: var(--light-fg-dim); }

.clocker-landing-v2 .feat-list{ list-style:none; padding:0; margin: 26px 0 0; display:flex; flex-direction:column; gap: 10px; }
.clocker-landing-v2 .feat-list li{ display:flex; gap: 10px; align-items:center; font-size: 14px; color: var(--fg); margin: 0; }
.clocker-landing-v2 .section-light .feat-list li{ color: var(--light-fg); }
.clocker-landing-v2 .feat-list .check{
  width: 18px; height: 18px; border-radius: 6px; flex-shrink:0;
  background: var(--accent-soft);
  color: var(--accent);
  display:grid; place-items:center;
  font-size: 11px; font-weight: 700;
}

.clocker-landing-v2 .frame{ border-radius: 18px; overflow: hidden; background: var(--bg-2); border: 1px solid var(--line); position: relative; }
.clocker-landing-v2 .frame-light{ background:#fff; border-color: var(--light-line); box-shadow: 0 30px 80px rgba(20,22,30,0.08); }
.clocker-landing-v2 .frame img{ width: 100%; height: 100%; object-fit: cover; display: block; }
.clocker-landing-v2 .frame video{ width: 100%; height: 100%; object-fit: cover; display: block; }

/* shortcuts strip */
.clocker-landing-v2 .shortcut-strip{
  display:flex; flex-wrap: wrap; gap: 10px;
  margin: 32px 0 0;
}
.clocker-landing-v2 .shortcut{
  display:inline-flex; align-items:center; gap: 10px;
  padding: 10px 14px; border-radius: 11px;
  background: var(--light-bg-2);
  border: 1px solid var(--light-line);
  font-size: 13px;
  color: var(--light-fg-dim);
}
.clocker-landing-v2 .shortcut b{ color: var(--light-fg); font-weight: 600; }
.clocker-landing-v2 .shortcut .keys{ display:inline-flex; gap: 3px; }
.clocker-landing-v2 .kbd{
  height: 22px; min-width: 22px; padding: 0 7px;
  display:inline-grid; place-items:center;
  background: #fff;
  border: 1px solid var(--light-line);
  border-bottom-width: 2px;
  border-radius: 6px;
  font-family: var(--font-mono); font-size: 11px;
  color: var(--light-fg);
  font-weight: 500;
}
.clocker-landing-v2 .tile.t-dark .kbd{
  background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.12);
}
.clocker-landing-v2 .tile.t-dark .shortcut{
  background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7);
}
.clocker-landing-v2 .tile.t-dark .shortcut b{ color: #fff; }

/* quotes */
.clocker-landing-v2 .quote-row{
  display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  margin-top: 56px;
}
.clocker-landing-v2 .quote{
  padding: 26px;
  border-radius: 16px;
  background: #FFFFFF;
  border: 1px solid var(--line);
  box-shadow: 0 16px 40px rgba(20,22,30,0.04);
}
.clocker-landing-v2 .quote p{
  font-family: var(--font-display);
  font-size: 18px; line-height: 1.4; letter-spacing: -0.015em;
  margin: 0 0 16px;
  color: var(--fg);
  text-wrap: pretty;
}
.clocker-landing-v2 .quote-by{ display:flex; align-items:center; gap: 10px; font-size: 12.5px; color: var(--fg-dim); }
.clocker-landing-v2 .quote-avatar{
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #2D7BFF, #6BB7FF);
  flex-shrink: 0;
}
.clocker-landing-v2 .quote-by b{ color: var(--fg); font-weight: 600; }
.clocker-landing-v2 .quote-by .role{ color: var(--fg-mute); }

/* final CTA */
.clocker-landing-v2 .cta-final{
  padding: 140px 0;
  text-align:center; position: relative; overflow: hidden;
}
.clocker-landing-v2 .cta-final::before{
  content:""; position:absolute; left:50%; top:50%;
  transform: translate(-50%,-50%);
  width: 800px; height: 460px;
  background: radial-gradient(closest-side, rgba(45,123,255,0.18), transparent);
  filter: blur(40px); pointer-events:none;
}
.clocker-landing-v2 .cta-final .cta-row{ justify-content:center; }
.clocker-landing-v2 .cta-final h2{ margin: 14px auto 14px; }

/* footer */
.clocker-landing-v2 footer{
  background: #14161A;
  color: rgba(255,255,255,0.5);
  padding: 56px 0 40px;
  font-size: 13px;
  border-top: 0;
}
.clocker-landing-v2 footer .brand{ color: #fff; }
.clocker-landing-v2 .foot-grid{
  display:grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}
.clocker-landing-v2 .foot-col h6{
  margin: 0 0 14px; font-size: 11px; font-weight: 600;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase; letter-spacing: 0.08em;
  font-family: var(--font-mono);
}
.clocker-landing-v2 .foot-col a{ display:block; color: rgba(255,255,255,0.55); text-decoration:none; padding: 4px 0; font-size: 13.5px; }
.clocker-landing-v2 .foot-col a:hover{ color: #fff; }
.clocker-landing-v2 .foot-bottom{
  display:flex; justify-content:space-between; align-items:center;
  margin-top: 40px; padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.45);
  font-family: var(--font-mono); font-size: 11.5px;
  flex-wrap: wrap; gap: 12px;
}

/* responsive */
@media (max-width: 980px){
  .clocker-landing-v2 .gallery{ grid-template-columns: repeat(2, 1fr); }
  .clocker-landing-v2 .tile.t-wide,
  .clocker-landing-v2 .tile.t-narrow,
  .clocker-landing-v2 .tile.t-half,
  .clocker-landing-v2 .tile.t-third{ grid-column: span 2; }
  .clocker-landing-v2 .tile.t-tall{ grid-row: auto; }
  .clocker-landing-v2 .split{ grid-template-columns: 1fr; gap: 32px; }
  .clocker-landing-v2 .split.reverse > :first-child{ order: 0; }
  .clocker-landing-v2 .quote-row{ grid-template-columns: 1fr; }
  .clocker-landing-v2 .foot-grid{ grid-template-columns: 1fr 1fr; gap: 28px; }
  .clocker-landing-v2 .stage-slot{ position: static; width: 86%; margin: 24px auto; }
  .clocker-landing-v2 .mb-right .mb-tz:nth-child(n+3){ display:none; }
  .clocker-landing-v2 .stage-caption{ left: 24px; bottom: 24px; max-width: 60%; }
}
@media (max-width: 600px){
  .clocker-landing-v2 section{ padding: 80px 0; }
  .clocker-landing-v2 .nav-links a:not(.nav-cta){ display:none; }
  .clocker-landing-v2 .gallery{ grid-template-columns: 1fr; }
  .clocker-landing-v2 .tile.t-wide,
  .clocker-landing-v2 .tile.t-narrow,
  .clocker-landing-v2 .tile.t-half,
  .clocker-landing-v2 .tile.t-third{ grid-column: auto; }
  .clocker-landing-v2 .shell{ padding: 0 20px; }
}

/* Mac App Store badge — light/dark swap */
.clocker-landing-v2 .mas-badge .mas-badge-img--dark{ display: none; }

/* DARK MODE */
@media (prefers-color-scheme: dark) {
  .clocker-landing-v2{
    --bg: #0A0B0E;
    --bg-2: #101218;
    --panel: #16181D;
    --line: rgba(255,255,255,0.08);
    --line-2: rgba(255,255,255,0.14);
    --fg: #ECEDEF;
    --fg-dim: #9095A0;
    --fg-mute: #62666F;
    --light-bg: #16181D;
    --light-bg-2: #101218;
    --light-fg: #ECEDEF;
    --light-fg-dim: #9095A0;
    --light-fg-mute: #62666F;
    --light-line: rgba(255,255,255,0.08);
    background: var(--bg);
    color: var(--fg);
  }

  /* nav */
  .clocker-landing-v2 .nav{
    background: rgba(10,11,14,0.78);
    border-bottom-color: rgba(255,255,255,0.06);
  }
  .clocker-landing-v2 .nav-links a{ color: var(--fg-dim); }
  .clocker-landing-v2 .nav-links a:hover{ color: var(--fg); }
  .clocker-landing-v2 .nav-links a.nav-cta{
    background: #ECEDEF; color: #14161A;
  }
  .clocker-landing-v2 .nav-links a.nav-cta:hover{ background: #fff; color: #14161A; }

  /* hero */
  .clocker-landing-v2 .hero-grid{
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
    opacity: .55;
  }
  .clocker-landing-v2 .hero-glow{
    background: radial-gradient(closest-side, rgba(45,123,255,0.30), transparent 70%);
  }

  /* editors choice badge — keep transparent, palette already cascades */

  /* tiles flip from white card to dark card */
  .clocker-landing-v2 .tile{
    background: #16181D;
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 1px 0 rgba(255,255,255,0.02), 0 16px 40px rgba(0,0,0,0.35);
  }
  .clocker-landing-v2 .tile:hover{
    box-shadow: 0 1px 0 rgba(255,255,255,0.02), 0 30px 60px rgba(0,0,0,0.5);
  }
  .clocker-landing-v2 .tile h3{ color: var(--fg); }
  .clocker-landing-v2 .tile p{ color: var(--fg-dim); }
  .clocker-landing-v2 .tile-art .slot-frame{
    background: #0F1116;
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }

  /* dark tiles in light mode were inverted; in dark mode they're already dark — match a deeper black */
  .clocker-landing-v2 .tile.t-dark{
    background: #0F1116;
    border-color: rgba(255,255,255,0.06);
  }

  /* light section flips to a slightly elevated dark surface for separation */
  .clocker-landing-v2 .section-light{
    background: #0E1014;
    color: var(--fg);
  }
  .clocker-landing-v2 .section-light .eyebrow{ color: var(--accent); }
  .clocker-landing-v2 .section-light h2,
  .clocker-landing-v2 .section-light h3{ color: var(--fg); }
  .clocker-landing-v2 .section-light .lede,
  .clocker-landing-v2 .section-light p{ color: var(--fg-dim); }
  .clocker-landing-v2 .section-light .feat-list li{ color: var(--fg); }

  /* prefs mock flips back to dark to blend with dark tile */
  .clocker-landing-v2 .mock-prefs{
    background: linear-gradient(180deg, #1A1C22, #0F1116);
    border-color: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.7);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
  .clocker-landing-v2 .mock-prefs .row{
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.06);
  }
  .clocker-landing-v2 .mock-prefs .row .label{ color: rgba(255,255,255,0.85); }
  .clocker-landing-v2 .mock-prefs .toggle.off{ background: rgba(255,255,255,0.15); }

  /* event mock card flips to dark */
  .clocker-landing-v2 .mock-event{
    background: #0F1116;
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    color: var(--fg);
  }
  .clocker-landing-v2 .mock-event .who{ color: var(--fg-dim); }

  /* shortcuts + kbd */
  .clocker-landing-v2 .shortcut{
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.08);
    color: var(--fg-dim);
  }
  .clocker-landing-v2 .shortcut b{ color: var(--fg); }
  .clocker-landing-v2 .kbd{
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.10);
    color: var(--fg);
  }

  /* frames */
  .clocker-landing-v2 .frame{
    background: #16181D;
    border-color: rgba(255,255,255,0.08);
  }
  .clocker-landing-v2 .frame-light{
    background: #16181D;
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 30px 80px rgba(0,0,0,0.4);
  }

  /* quotes */
  .clocker-landing-v2 .quote{
    background: #16181D;
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 16px 40px rgba(0,0,0,0.3);
  }
  .clocker-landing-v2 .quote p{ color: var(--fg); }

  /* CTA glow */
  .clocker-landing-v2 .cta-final::before{
    background: radial-gradient(closest-side, rgba(45,123,255,0.30), transparent);
  }

  /* footer stays dark, nudge slight separation from page bg */
  .clocker-landing-v2 footer{
    background: #050608;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  /* App Store badge swap to white lockup */
  .clocker-landing-v2 .mas-badge .mas-badge-img--light{ display: none; }
  .clocker-landing-v2 .mas-badge .mas-badge-img--dark{ display: block; }
}
`

const Laurel = ({side}) => (
  side === "left" ? (
    <svg className="ec-laurel" viewBox="0 0 24 56" fill="none" aria-hidden="true">
      <path d="M22 2 C 14 8, 8 18, 6 28 C 4 38, 8 48, 18 54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none">
        <path d="M16 8 C 12 9, 10 12, 11 15"/>
        <path d="M11 14 C 7 15, 5 18, 6 22"/>
        <path d="M7 22 C 3 23, 2 27, 4 31"/>
        <path d="M5 30 C 2 32, 2 36, 5 39"/>
        <path d="M6 39 C 4 42, 5 46, 9 48"/>
        <path d="M10 48 C 9 51, 12 54, 16 53"/>
      </g>
    </svg>
  ) : (
    <svg className="ec-laurel" viewBox="0 0 24 56" fill="none" aria-hidden="true">
      <path d="M2 2 C 10 8, 16 18, 18 28 C 20 38, 16 48, 6 54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none">
        <path d="M8 8 C 12 9, 14 12, 13 15"/>
        <path d="M13 14 C 17 15, 19 18, 18 22"/>
        <path d="M17 22 C 21 23, 22 27, 20 31"/>
        <path d="M19 30 C 22 32, 22 36, 19 39"/>
        <path d="M18 39 C 20 42, 19 46, 15 48"/>
        <path d="M14 48 C 15 51, 12 54, 8 53"/>
      </g>
    </svg>
  )
)

const Clocker = ({ data }) => {
  const ratingNode = data?.clockerAppStoreRating
  const ratingValue = ratingNode?.averageRating ?? 4.9
  const ratingCount = ratingNode?.ratingCount ?? 28
  const ratingDisplay = Number.isInteger(ratingValue)
    ? ratingValue.toFixed(1)
    : ratingValue.toString()

  const [prefs, setPrefs] = React.useState({
    showSeconds: false,
    dayOfWeek: true,
    launchAtLogin: true,
    iCloudSync: true,
  })
  const togglePref = key =>
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }))

  return (
  <div className="clocker-landing-v2">
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
      />
      <style>{PAGE_CSS}</style>
    </Helmet>
    <SEO title="Clocker" />

    {/* NAV */}
    <nav className="nav">
      <div className="shell nav-inner">
        <Link to="/clocker" className="brand">
          <img className="brand-mark brand-mark-img" src={clockerIcon} alt="" width="22" height="22" />
          <span>Clocker</span>
        </Link>
        <div className="nav-links">
          <Link to="/privacy-policy-for-clocker">Privacy Policy</Link>
          <Link to="/clocker/faq">FAQ</Link>
          <a
            href={APP_STORE_URL}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Clocker on the Mac App Store"
          >
            Download
            <svg className="nav-cta-chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4.5 2.5l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>

    {/* HERO */}
    <header className="hero">
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="shell hero-inner linear">
        <a
          className="ec-badge"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Editors' Choice on the Mac App Store"
        >
          <span className="ec-eyebrow">Awards</span>
          <span className="ec-mid">
            <Laurel side="left" />
            <span className="ec-title">
              <span>Editors&rsquo;</span>
              <span>Choice</span>
            </span>
            <Laurel side="right" />
          </span>
          <span className="ec-foot">Apps</span>
        </a>

        <h1>The menubar app for distributed teams.</h1>

        <div className="linear-foot">
          <p className="linear-sub">
            World times, upcoming meetings, and a calendar, all one glance away.
          </p>
        </div>

        <div className="cta-row" style={{ justifyContent: "center", marginTop: 36 }}>
          <a
            href={APP_STORE_URL}
            className="mas-badge mas-badge--lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Clocker on the Mac App Store"
          >
            <img className="mas-badge-img mas-badge-img--light" src={macAppStoreBadge} alt="Download on the Mac App Store" />
            <img className="mas-badge-img mas-badge-img--dark" src={macAppStoreBadgeWhite} alt="Download on the Mac App Store" />
          </a>
        </div>

        <img
          className="hero-headline-img"
          src={clockerHeadline}
          alt="Clocker showing world times in the macOS menubar"
        />
      </div>
    </header>

    {/* TRUST */}
    <div className="trust">
      <div className="shell trust-row">
        <a
          className="trust-item trust-link"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ratingDisplay} stars on the Mac App Store`}
        >
          <b>{ratingDisplay}</b>
          <span className="stars">★★★★★</span>
        </a>
        <a
          className="trust-item trust-link"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Editor's Choice on the Mac App Store"
        >
          <span className="laurel">❝</span>
          <b>Editor's Choice</b>
          <span className="laurel flip">❞</span>
        </a>
        <div className="trust-item">Universal binary · <b>&nbsp;macOS 14+</b></div>
      </div>
    </div>

    {/* FEATURE GALLERY */}
    <section id="features" className="section-light">
      <div className="shell">
        <span className="eyebrow">Features</span>
        <h2>
          Everything you need.<br/>
          <em>Nothing you don't.</em>
        </h2>
        <p className="lede">
          A focused menubar app. Native AppKit. Just the world's clocks, exactly where you already look.
        </p>

        <div className="gallery">
          {/* 1. World times */}
          <div className="tile t-wide t-dark">
            <div className="tile-body">
              <span className="tile-eyebrow">World times</span>
              <h3>Every clock you care about, ticking together.</h3>
              <p>
                Add as many cities as you want. Custom labels. Drag to reorder.
                Built for distributed teams who'd rather not do mental math.
              </p>
            </div>
            <div className="tile-art">
              <div className="slot-frame" style={{ aspectRatio: "1522 / 1006" }}>
                <video
                  src={customLabelsVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Clocker panel with custom timezone labels"
                />
              </div>
            </div>
          </div>

          {/* 2. Themes */}
          <div className="tile t-narrow t-dark">
            <div className="tile-body">
              <span className="tile-eyebrow">Themes</span>
              <h3>Four themes, including the classics.</h3>
              <p>Light, Dark, Solarized Light and Dark for the terminal nerds.</p>
            </div>
            <div className="tile-art">
              <div className="slot-frame" style={{ aspectRatio: "1128 / 1512" }}>
                <img src={themesStack} alt="Clocker shown in light and dark themes" />
              </div>
            </div>
          </div>

          {/* 5. Shortcuts */}
          <div className="tile t-half">
            <div className="tile-body">
              <span className="tile-eyebrow">Shortcuts</span>
              <h3>Snappy by design.</h3>
              <p>Open in 80ms with ⌘L. Every action is one keystroke away.</p>
            </div>
            <div className="tile-art" style={{ padding: "0 24px 28px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, width: "100%" }}>
                <span className="shortcut" style={{ padding: "8px 12px" }}>
                  <span className="keys"><span className="kbd">⌘</span><span className="kbd">L</span></span><b>Open</b>
                </span>
                <span className="shortcut" style={{ padding: "8px 12px" }}>
                  <span className="keys"><span className="kbd">⌘</span><span className="kbd">,</span></span><b>Settings</b>
                </span>
                <span className="shortcut" style={{ padding: "8px 12px" }}>
                  <span className="keys"><span className="kbd">⌥</span><span className="kbd">⌘</span><span className="kbd">C</span></span><b>Calendar</b>
                </span>
                <span className="shortcut" style={{ padding: "8px 12px" }}>
                  <span className="keys"><span className="kbd">⌘</span><span className="kbd">F</span></span><b>Find city</b>
                </span>
                <span className="shortcut" style={{ padding: "8px 12px" }}>
                  <span className="keys"><span className="kbd">⌘</span><span className="kbd">N</span></span><b>New event</b>
                </span>
              </div>
            </div>
          </div>

          {/* 6. Customize */}
          <div className="tile t-half">
            <div className="tile-body">
              <span className="tile-eyebrow">Customize</span>
              <h3>Your way, every detail.</h3>
              <p>12 or 24-hour. With or without seconds. Compact or regular menubar mode. Customize all the little details.</p>
            </div>
            <div className="tile-art">
              <div className="mock-prefs">
                <div className="row"><span className="label">Time format</span><span className="val">24-hour</span></div>
                <div className="row">
                  <span className="label">Show seconds</span>
                  <button
                    type="button"
                    className={`toggle${prefs.showSeconds ? "" : " off"}`}
                    role="switch"
                    aria-checked={prefs.showSeconds}
                    aria-label="Show seconds"
                    onClick={() => togglePref("showSeconds")}
                  />
                </div>
                <div className="row">
                  <span className="label">Day of week</span>
                  <button
                    type="button"
                    className={`toggle${prefs.dayOfWeek ? "" : " off"}`}
                    role="switch"
                    aria-checked={prefs.dayOfWeek}
                    aria-label="Day of week"
                    onClick={() => togglePref("dayOfWeek")}
                  />
                </div>
                <div className="row"><span className="label">Menubar Mode</span><span className="val">Compact</span></div>
                <div className="row"><span className="label">Theme</span><span className="val">Dark</span></div>
                <div className="row">
                  <span className="label">Launch at login</span>
                  <button
                    type="button"
                    className={`toggle${prefs.launchAtLogin ? "" : " off"}`}
                    role="switch"
                    aria-checked={prefs.launchAtLogin}
                    aria-label="Launch at login"
                    onClick={() => togglePref("launchAtLogin")}
                  />
                </div>
                <div className="row">
                  <span className="label">iCloud Sync</span>
                  <button
                    type="button"
                    className={`toggle${prefs.iCloudSync ? "" : " off"}`}
                    role="switch"
                    aria-checked={prefs.iCloudSync}
                    aria-label="iCloud Sync"
                    onClick={() => togglePref("iCloudSync")}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* TIME SCROLLER (BIG) */}
    <section id="scroller">
      <div className="shell split">
        <div className="split-text">
          <span className="eyebrow">Time scroller</span>
          <h3>Slide into the future.<br/>Or the past.</h3>
          <p>
            Drag the scrubber and every clock moves with you. Find the only hour that
            works for SF, London, and Tokyo without opening a spreadsheet or your phone.
          </p>
          <ul className="feat-list">
            <li><span className="check">✓</span> Up to 7 days, in 15-minute steps</li>
            <li><span className="check">✓</span> Snap back with a single click</li>
            <li><span className="check">✓</span> Day/night shading on every clock</li>
          </ul>
        </div>

        <div className="frame" style={{ aspectRatio: "692 / 856" }}>
          <video
            src={scrollerVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Clocker time scroller in motion"
          />
        </div>
      </div>
    </section>

    {/* CALENDAR (BIG) */}
    <section id="calendar" className="section-light">
      <div className="shell split reverse">
        <div className="split-text">
          <span className="eyebrow">Calendar</span>
          <h3>The calendar lives in your menubar now.</h3>
          <p>
            See today's meetings without opening anything. Click an event to join,
            jump 12 hours forward to schedule with Tokyo, or hit ⌥⌘C to peek at the month.
          </p>
          <ul className="feat-list">
            <li><span className="check">✓</span> Reads from Apple Calendar with no extra setup</li>
            <li><span className="check">✓</span> One-click Zoom, Meet, Teams join</li>
            <li><span className="check">✓</span> Quick-create events in any timezone</li>
            <li><span className="check">✓</span> Color-coded by calendar source</li>
          </ul>

          <div className="shortcut-strip">
            <span className="shortcut">
              <span className="keys"><span className="kbd">⌥</span><span className="kbd">⌘</span><span className="kbd">C</span></span>
              <b>Open calendar</b>
            </span>
            <span className="shortcut">
              <span className="keys"><span className="kbd">⌘</span><span className="kbd">N</span></span>
              <b>New event</b>
            </span>
            <span className="shortcut">
              <span className="keys"><span className="kbd">↩︎</span></span>
              <b>Join meeting</b>
            </span>
          </div>
        </div>

        <div className="frame frame-light" style={{ aspectRatio: "4/3" }}>
          <img src={feature2} alt="Clocker's calendar/month view" />
        </div>
      </div>
    </section>

    {/* QUOTES */}
    <section style={{ paddingTop: 80 }}>
      <div className="shell">
        <span className="eyebrow">Loved by</span>
        <h2>
          Distributed teams, indie hackers, and a lot of <em>night-owl engineers</em>.
        </h2>

        <div className="quote-row">
          <div className="quote">
            <p>"The only menubar app I never quit. It's been ticking on my Mac for four years and I forget it's there, until I need it."</p>
            <div className="quote-by">
              <div className="quote-avatar"></div>
              <div>
                <b>Riley Chen</b><br/>
                <span className="role">Staff engineer · remote-first SaaS</span>
              </div>
            </div>
          </div>
          <div className="quote">
            <p>"Time scroller is the one feature I now expect from every clock app. Clocker did it first and best."</p>
            <div className="quote-by">
              <div className="quote-avatar" style={{ background: "linear-gradient(135deg, #FFB547, #FF6B6B)" }}></div>
              <div>
                <b>Mira Sato</b><br/>
                <span className="role">Engineering lead · Tokyo</span>
              </div>
            </div>
          </div>
          <div className="quote">
            <p>"Respects my keyboard-first workflow and stays out of the way. There aren't many menubar apps left that nail both."</p>
            <div className="quote-by">
              <div className="quote-avatar" style={{ background: "linear-gradient(135deg, #1F8A5B, #4ADE80)" }}></div>
              <div>
                <b>Jonas Weber</b><br/>
                <span className="role">Indie maker · Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="cta-final">
      <div className="shell" style={{ position: "relative" }}>
        <span className="eyebrow" style={{ display: "inline-flex" }}>Get Clocker</span>
        <h2 style={{ textAlign: "center" }}>
          Stop doing time-zone<br/>math in your head.
        </h2>
        <div className="cta-row" style={{ marginTop: 32 }}>
          <a
            href={APP_STORE_URL}
            className="mas-badge mas-badge--lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Clocker on the Mac App Store"
          >
            <img className="mas-badge-img mas-badge-img--light" src={macAppStoreBadge} alt="Download on the Mac App Store" />
            <img className="mas-badge-img mas-badge-img--dark" src={macAppStoreBadgeWhite} alt="Download on the Mac App Store" />
          </a>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer>
      <div className="shell">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="brand" style={{ marginBottom: 14 }}>
              <img className="brand-mark brand-mark-img" src={clockerIcon} alt="" width="22" height="22" />
              <span>Clocker</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 280, fontSize: 13, lineHeight: 1.55, margin: 0 }}>
              The menubar app for distributed teams. Built with care by a tiny team
              who hates time-zone math.
            </p>
          </div>
          <div className="foot-col">
            <h6>Product</h6>
            <a href="#features">Features</a>
            <a href="#calendar">Calendar</a>
            <a href="#scroller">Time Scroller</a>
          </div>
          <div className="foot-col">
            <h6>Resources</h6>
            <Link to="/clocker/faq">Support</Link>
          </div>
          <div className="foot-col">
            <h6>Company</h6>
            <Link to="/privacy-policy-for-clocker">Privacy</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Clocker · v26.10</span>
          <span>Made on a Mac, in 2 timezones.</span>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Clocker

export const pageQuery = graphql`
  query ClockerPage {
    clockerAppStoreRating {
      averageRating
      ratingCount
    }
  }
`
