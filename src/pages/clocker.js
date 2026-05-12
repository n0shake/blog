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

import "./clocker.css"

const APP_STORE_URL =
  "https://apps.apple.com/us/app/clocker/id1056643111?mt=12"


const Laurel = ({side}) => (
  side === "left" ? (
    <svg className="ec-laurel" width="28" height="64" viewBox="0 0 24 56" fill="none" aria-hidden="true">
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
    <svg className="ec-laurel" width="28" height="64" viewBox="0 0 24 56" fill="none" aria-hidden="true">
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
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
      />
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
            <svg className="nav-cta-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
            <img className="mas-badge-img mas-badge-img--light" src={macAppStoreBadge} alt="Download on the Mac App Store" width="156" height="40" />
            <img className="mas-badge-img mas-badge-img--dark" src={macAppStoreBadgeWhite} alt="Download on the Mac App Store" width="156" height="40" />
          </a>
        </div>

        <img
          className="hero-headline-img"
          src={clockerHeadline}
          alt="Clocker showing world times in the macOS menubar"
          width="2320"
          height="1492"
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
                <img src={themesStack} alt="Clocker shown in light and dark themes" width="1128" height="1512" />
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
          <img src={feature2} alt="Clocker's calendar/month view" width="1388" height="1040" />
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
            <p>"I'm attending Dhamma talks and meditation sessions on Zoom — hosted in Singapore, Australia, and other parts of the world. Clocker tells me what times they're happening in mine."</p>
            <div className="quote-by">
              <div className="quote-avatar"></div>
              <div>
                <b>plaintiger</b><br/>
                <span className="role">★★★★ · Mac App Store</span>
              </div>
            </div>
          </div>
          <div className="quote">
            <p>"I play an international game and my alliance is mostly Chinese, so everything is in UTC time. I kept missing events — until I found Clocker."</p>
            <div className="quote-by">
              <div className="quote-avatar" style={{ background: "linear-gradient(135deg, #FFB547, #FF6B6B)" }}></div>
              <div>
                <b>Jason Odra</b><br/>
                <span className="role">★★★★★ · Mac App Store</span>
              </div>
            </div>
          </div>
          <div className="quote">
            <p>"Having family all over the world, Clocker is extremely useful for keeping track of when they're awake and asleep. The day/night visual in the menubar is a great addition."</p>
            <div className="quote-by">
              <div className="quote-avatar" style={{ background: "linear-gradient(135deg, #1F8A5B, #4ADE80)" }}></div>
              <div>
                <b>Gital</b><br/>
                <span className="role">★★★★ · Mac App Store</span>
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
            <img className="mas-badge-img mas-badge-img--light" src={macAppStoreBadge} alt="Download on the Mac App Store" width="156" height="40" />
            <img className="mas-badge-img mas-badge-img--dark" src={macAppStoreBadgeWhite} alt="Download on the Mac App Store" width="156" height="40" />
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
