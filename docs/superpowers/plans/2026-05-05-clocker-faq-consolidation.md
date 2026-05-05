# Clocker FAQ Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 7-page Clocker FAQ surface with a single consolidated page where questions list at the top and answers live below; old URLs 301-redirect to anchors on the new page.

**Architecture:** Single Gatsby page (`src/pages/clocker/faq.js`) with a vertical list of styled anchor links pointing to `<section id="…">` blocks below an `<hr/>`. Each answer ends with a `↑ Back to top` link targeting `id="top"` on the heading. The 7 old per-FAQ source files are deleted; Netlify `_redirects` 301s their URLs to `/clocker/faq#anchor`.

**Tech Stack:** Gatsby 5, React 18, styled-components. Deployed on Netlify. Pure HTML anchor links — no JS scroll handlers.

**Spec:** `docs/superpowers/specs/2026-05-05-clocker-faq-consolidation-design.md`

**House style notes (from `.prettierrc` and existing `clocker/faq.js`):**
- No semicolons, single quotes preferred (but imports in this directory currently use double quotes — match the existing file's style).
- 2-space indent.
- The existing FAQ files use whitespace inside tags (e.g., `<h1> faq </h1>`). Match this for visual consistency.
- The menubar copy contains the typo "Third' party" — preserve verbatim per spec.

---

## File structure

**Modified:**
- `src/pages/clocker/faq.js` — replaced wholesale with the consolidated implementation.
- `static/_redirects` — 7 lines appended.

**Deleted:**
- `src/pages/clocker/add-faq.js`
- `src/pages/clocker/favourite-faq.js`
- `src/pages/clocker/customize-label-faq.js`
- `src/pages/clocker/menubar-faq.js`
- `src/pages/clocker/startup-faq.js`
- `src/pages/clocker/customize-format-faq.js`
- `src/pages/clocker/reset-faq.js`

**Untouched:**
- All 8 image assets in `content/assets/` (`add.gif`, `fav.gif`, `customize-label.gif`, `customize-label-1.png`, `startup1.png`, `startup2.png`, `customize1.png`, `customize2.png`) — re-imported into the new `faq.js`.

---

## Task 1: Build consolidated FAQ page

**Files:**
- Modify: `src/pages/clocker/faq.js` (full replacement)

- [ ] **Step 1: Replace the contents of `src/pages/clocker/faq.js`**

Use the Write tool to overwrite the file with this exact content:

```jsx
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ObfuscatedEmail from "../../components/obfuscated-email"
import styled from 'styled-components'

import addGIF from '../../../content/assets/add.gif'
import favGIF from '../../../content/assets/fav.gif'
import customizeLabel1 from '../../../content/assets/customize-label.gif'
import customizeLabel2 from '../../../content/assets/customize-label-1.png'
import startup1 from '../../../content/assets/startup1.png'
import startup2 from '../../../content/assets/startup2.png'
import customizeFormat1 from '../../../content/assets/customize1.png'
import customizeFormat2 from '../../../content/assets/customize2.png'

const RoundedDiv = styled.div`
 background-color: var(--color-surface);
 border: none;
 color: var(--color-heading-black);
 padding: 10px;
 margin-right: 10px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 font-weight: bold;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
 	background-color: var(--color-hover);
 }
`

const QuestionList = styled.ul`
 list-style: none;
 padding: 0;
 margin: 0 0 24px 0;
 display: flex;
 flex-direction: column;
 gap: 8px;
`

const QuestionLink = styled.a`
 background-color: var(--color-surface);
 color: var(--color-heading-black);
 padding: 14px 18px;
 border-radius: 10px;
 font-weight: 600;
 font-size: 15px;
 text-decoration: none;
 display: block;
 transition: 0.2s;
 &:hover {
 	background-color: var(--color-hover);
 }
`

const AnswerSection = styled.section`
 margin-top: 32px;
`

const BackToTop = styled.a`
 display: inline-block;
 margin-top: 12px;
 color: var(--color-heading-black);
 text-decoration: none;
 font-size: 14px;
 opacity: 0.7;
 &:hover {
 	opacity: 1;
 }
`

const Faq = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
		<SEO title="Clocker FAQ" />
			<div>
				<h1 id="top"> faq </h1>
				<p> Tap a question to jump to the answer. </p>

				<QuestionList>
					<li><QuestionLink href="#add"> How can I add new timezones or locations? </QuestionLink></li>
					<li><QuestionLink href="#favourite"> How do I enable timezones to appear in my menubar? </QuestionLink></li>
					<li><QuestionLink href="#customize-label"> How do I customize the label for a timezone / location? </QuestionLink></li>
					<li><QuestionLink href="#menubar"> Why does Clocker not show up in my menubar while certain apps are in the foreground? </QuestionLink></li>
					<li><QuestionLink href="#startup"> How do I start Clocker whenever my Mac boots or is restarted? </QuestionLink></li>
					<li><QuestionLink href="#customize-format"> How do I customize the time format for my selected locations? </QuestionLink></li>
					<li><QuestionLink href="#reset"> How do I reset Clocker? </QuestionLink></li>
				</QuestionList>

				<hr />

				<AnswerSection id="add">
					<h2> Adding New Timezones </h2>
					<p> For adding new time zones or cities, you should navigate to Preferences by opening the Clocker window and clicking on the gear icon (or through the Command + , keyboard shortcut).
					This is where you can add, delete and edit your time zones. </p>
					<br/>
					<img className="educational" src={addGIF} alt="Clocker - How to add a timezone?" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="favourite">
					<h2> Favourites </h2>
					<p>In order to put time zones in your top menubar, you need to favourite them. Here's how you do that:
					<ol>
						<li>Tap on the Clocker icon on the top of your screen</li>
						<li>Click on the gear icon (or use the Command + , keyboard shortcut)</li>
						<li>Click the <b>Favourite</b> checkbox alongside the cities you want to see in the top menu bar </li>
					</ol>
					</p>
					<br/>
					<img className="educational" src={favGIF} alt="Clocker - Favouriting a timezone" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="customize-label">
					<h2> Customizing Labels </h2>
					<p> Clocker allows you to edit the names of the timezones or locations you've added. This allow you to map a colleague, friend or a partner to a location reducing the need to mentally calculate who's actually in London. </p>
					<br/>
					<p> You can utilize the contextual menu present on left of each row to edit the label:</p>
					<img className="educational" src={customizeLabel1} alt="Clocker - Customize Label Demo" />
					<blockquote> Tip: Use emojis as a label to enhance glanceability.</blockquote>
					<img className="educational" src={customizeLabel2} alt="Clocker - Customize Label with Emojis" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="menubar">
					<h2> Can't see Clocker at all? </h2>
					<p>
					If you're unable to see Clocker in your menubar, the most likely reason is because there's little space on the menu bar for Clocker to show along with Chrome
					or other third-party app menus items (File, Edit, View etc) and your other menubar items (Bluetooth, Wi-Fi, Spotlight etc).
					</p>
					<p>
					Third' party app menus take precedence over menu bar items (like Clocker) causing macOS to hide Clocker that would otherwise occupy that space.
					To get rid of the blank issue, here's what we suggest:
					<ul>
					 <li> Limit the number of Clocker menubar time zones to 2 to 3. Only select the timezones you really want. Use the Clocker panel for the rest of the time zones. </li>
					 <li> Remove unused menubar apps from your menubar to make space for Clocker </li>
					 <li> Increase your screen resolution </li>
					</ul>
					</p>
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="startup">
					<h2> Starting Clocker at Login </h2>
					<p> If you'd like Clocker to start every-time you boot your Mac, you need to make sure the app is correctly placed inside the <b>/Applications</b> folder. </p>
					<p> After which, you should navigate to Clocker Preferences by clicking the menubar icon and tapping on the gear button in the lower-left corner of the Clocker Window. Preferences can also be accessed using the keyboard shortcut: <b>Command + ,</b> </p>
					<p> Inside Preferences, make sure the <b>Start Clocker At Login</b> option is checked. </p>
					<br/>
					<img className="educational" src={startup1} alt="Clocker - How to start app at login?" />
					<p> Alternatively, you can add <b>Clocker</b> to the Login Items inside System Preferences. Here's how you do that:</p>
					<p> Open <b>System Preferences</b> —> <b>Users and Groups</b> —> <b>Current User</b>. Click on Login Items tab and add Clocker by clicking on + icon.</p>
					<img className="educational" src={startup2} alt="Clocker - How to start app at login?" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="customize-format">
					<h2> Customizing Time Format </h2>
					<p> You can set the time-format for your locations through Clocker Preferences. You should navigate to Clocker Preferences by clicking the menubar icon and tapping on the gear button
					in the lower-left corner of the Clocker Window. Preferences can also be accessed using the keyboard shortcut: <b>Command + ,</b> </p>
					<p> Here, you need to go to the <b>Appearance</b> tab where you can select the time format of your choice.</p>
					<br/>
					<img className="educational" src={customizeFormat1} alt="Clocker - Customize Time Format" />
					<blockquote> Do remember that the time format selected in the Appearance tab is applied to all locations and timezones.</blockquote>
					<p> Clocker also allows you to override the timezone format at the individual location level. </p>
					<p> To do so, you need to open the Clocker window and tap the three dots button which appears on the left side of each timezone. This is where you can customize and choose a different timezone format.</p>
					<img className="educational" src={customizeFormat2} alt="Clocker - Customize Time Format" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="reset">
					<h2> Reset Clocker? </h2>
					<p>
					Occasionally, Clocker may enter a glitchy state. In such instances, your best course of action would be to reset it.
					Resetting entails re-adding your timezones and adjusting toggle settings according to your preferences.
					Here how you can reset Clocker:
					</p>
					<p>
					<ul>
					 <li> Make sure Clocker is closed (force quit through Activity Monitor if necessary) </li>
					 <li> Open up the Terminal app and type in the command: <i>defaults delete com.abhishek.Clocker</i> </li>
					 <li> Hit the return key </li>
					 <li> Restart Clocker </li>
					</ul>
					</p>
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<hr />

				<section className="contact">
					<h3> Still looking for help? </h3>
					<ObfuscatedEmail subject="Help Request via Clocker FAQ"><RoundedDiv> Contact Us </RoundedDiv></ObfuscatedEmail>
				</section>
			</div>
		</Layout>
	)
}

export default Faq
```

**Notes on the code above:**
- `id="top"` on the `<h1>` is the target of every `↑ Back to top` link.
- `QuestionLink` is `styled.a` — using `<a href="#…">` (not Gatsby's `Link`) so the browser handles the same-page anchor jump natively and instantly.
- The `<p><BackToTop /></p>` wrapping is intentional — the existing FAQ pages all use `<p>` blocks, so this keeps spacing consistent with the surrounding paragraphs.
- Answer body markup is copied verbatim from each existing FAQ source file. Quirks preserved: the `<ul>` nested inside `<p>` in the menubar/reset sections (legacy markup), the leading/trailing whitespace inside tags, and the typo "Third' party app menus" in the menubar section.
- All 8 image imports map 1:1 to the existing `content/assets/*` files.

- [ ] **Step 2: Run the dev server**

Run: `yarn start`
Expected: server starts on `http://localhost:8000` with no compile errors. If a compile error mentions a missing import, double-check that all 8 image imports point at existing files in `content/assets/`.

- [ ] **Step 3: Visually verify each chip jumps to the right answer**

In the browser at `http://localhost:8000/clocker/faq`:
1. Tap **"How can I add new timezones or locations?"** → URL becomes `…/clocker/faq#add`, viewport scrolls to the **"Adding New Timezones"** heading.
2. Tap **"How do I enable timezones to appear in my menubar?"** → `#favourite`, scrolls to **"Favourites"**.
3. Tap **"How do I customize the label for a timezone / location?"** → `#customize-label`, scrolls to **"Customizing Labels"**.
4. Tap **"Why does Clocker not show up in my menubar while certain apps are in the foreground?"** → `#menubar`, scrolls to **"Can't see Clocker at all?"**.
5. Tap **"How do I start Clocker whenever my Mac boots or is restarted?"** → `#startup`, scrolls to **"Starting Clocker at Login"**.
6. Tap **"How do I customize the time format for my selected locations?"** → `#customize-format`, scrolls to **"Customizing Time Format"**.
7. Tap **"How do I reset Clocker?"** → `#reset`, scrolls to **"Reset Clocker?"**.

Note: Anchor jumps in the browser are instant (no animation). If a section is short and near the bottom, the browser may not be able to scroll the heading all the way to the top of the viewport — that's expected and acceptable.

- [ ] **Step 4: Visually verify each "↑ Back to top" link works**

In each of the 7 answer sections, tap **"↑ Back to top"** → URL becomes `…/clocker/faq#top`, viewport scrolls back to the **"faq"** heading at the top of the page.

- [ ] **Step 5: Visually verify all 8 images render**

Scroll through each answer section and confirm:
- `#add` shows `add.gif`
- `#favourite` shows `fav.gif`
- `#customize-label` shows `customize-label.gif` and `customize-label-1.png`
- `#menubar` shows no image (this section has none)
- `#startup` shows `startup1.png` and `startup2.png`
- `#customize-format` shows `customize1.png` and `customize2.png`
- `#reset` shows no image (this section has none)

Each image should use the `educational` className and respect the existing CSS.

- [ ] **Step 6: Verify the contact block at the bottom**

Below the last answer's "Back to top" link, confirm:
- An `<hr/>` divider.
- The text **"Still looking for help?"**.
- A **"Contact Us"** button (styled with `RoundedDiv`) that opens a `mailto:` link via `ObfuscatedEmail` when clicked.

- [ ] **Step 7: Commit**

```bash
git add src/pages/clocker/faq.js
git commit -m "feat: consolidate Clocker FAQ into single page with anchors

Replace the 7-link FAQ index with a single page containing all questions
as a vertical list of styled anchor links and all answers below. Each
answer has a back-to-top link. Existing answer content reused verbatim."
```

---

## Task 2: Add Netlify redirects for old per-FAQ URLs

**Files:**
- Modify: `static/_redirects` (append 7 lines)

- [ ] **Step 1: Append redirect entries**

Use the Edit tool to append to `static/_redirects`. The current file contains:
```
/159-2/  /clocker
/2020/02/02/cracking-the-facebook-developer-interview-2-2/amp/ /cracking-fb-2
```

After editing, the file should contain (existing lines preserved, 7 new lines added):

```
/159-2/  /clocker
/2020/02/02/cracking-the-facebook-developer-interview-2-2/amp/ /cracking-fb-2
/clocker/add-faq               /clocker/faq#add               301
/clocker/favourite-faq         /clocker/faq#favourite         301
/clocker/customize-label-faq   /clocker/faq#customize-label   301
/clocker/menubar-faq           /clocker/faq#menubar           301
/clocker/startup-faq           /clocker/faq#startup           301
/clocker/customize-format-faq  /clocker/faq#customize-format  301
/clocker/reset-faq             /clocker/faq#reset             301
```

- [ ] **Step 2: Confirm file contents**

Read the file back and confirm it has all 9 lines (2 original + 7 new) in the order shown above.

- [ ] **Step 3: Commit**

```bash
git add static/_redirects
git commit -m "feat: add 301 redirects from old per-FAQ URLs to consolidated page

Each of the 7 old /clocker/*-faq URLs now redirects to the matching
anchor on /clocker/faq. Preserves inbound links from search results,
support emails, and any in-app menu references."
```

**Note on testing:** Netlify processes `_redirects` on the edge — the Gatsby dev server doesn't honor it. These redirects can only be verified after deploy, in Task 4.

---

## Task 3: Delete old per-FAQ source files

**Files:**
- Delete: `src/pages/clocker/add-faq.js`
- Delete: `src/pages/clocker/favourite-faq.js`
- Delete: `src/pages/clocker/customize-label-faq.js`
- Delete: `src/pages/clocker/menubar-faq.js`
- Delete: `src/pages/clocker/startup-faq.js`
- Delete: `src/pages/clocker/customize-format-faq.js`
- Delete: `src/pages/clocker/reset-faq.js`

**Why deletion is required:** Netlify's `_redirects` file applies a rule only when no matching file exists at the requested path (without the `!` force flag). If these source files remain, Gatsby will still build the per-FAQ pages and Netlify will serve them instead of redirecting. Removing the source files is what activates the redirects from Task 2.

- [ ] **Step 1: Sanity-check that nothing else in the codebase imports these files**

Run: `rg -n "add-faq|favourite-faq|customize-label-faq|menubar-faq|startup-faq|customize-format-faq|reset-faq" src/`
Expected: no matches (the new `faq.js` from Task 1 references anchor IDs like `#add`, not file paths). If any matches surface, investigate before deleting — they may need updating.

- [ ] **Step 2: Delete the 7 files**

Run:
```bash
rm src/pages/clocker/add-faq.js \
   src/pages/clocker/favourite-faq.js \
   src/pages/clocker/customize-label-faq.js \
   src/pages/clocker/menubar-faq.js \
   src/pages/clocker/startup-faq.js \
   src/pages/clocker/customize-format-faq.js \
   src/pages/clocker/reset-faq.js
```

- [ ] **Step 3: Verify the dev server still builds**

Run: `yarn clean && yarn start`
Expected: Gatsby builds without errors. Open `http://localhost:8000/clocker/faq` and confirm the consolidated page still renders correctly.

- [ ] **Step 4: Confirm old URLs 404 in dev (expected)**

In the browser, visit `http://localhost:8000/clocker/add-faq`.
Expected: Gatsby's 404 page. This is correct — `_redirects` is a Netlify feature, so the old URLs won't redirect locally. Production verification happens in Task 4.

- [ ] **Step 5: Commit**

```bash
git add -A src/pages/clocker/
git commit -m "chore: remove per-FAQ source files now consolidated on /clocker/faq

Deleting these files lets the Netlify _redirects rules added in the
previous commit kick in (Netlify only redirects when no file exists
at the requested path)."
```

---

## Task 4: Post-deploy verification

This task runs **after** the changes are deployed to Netlify. It cannot run locally.

- [ ] **Step 1: Confirm deploy succeeded**

After the commits from Tasks 1–3 are pushed to the production branch, watch the Netlify deploy log and confirm it finished without errors. Open the live `/clocker/faq` URL and confirm it renders the consolidated page.

- [ ] **Step 2: Verify each old URL 301s to the right anchor**

For each old URL, visit it in a browser (or use `curl -I -L`) and confirm a 301 redirect to the matching anchor:

| Visit | Should redirect to |
|---|---|
| `https://<domain>/clocker/add-faq` | `https://<domain>/clocker/faq#add` |
| `https://<domain>/clocker/favourite-faq` | `https://<domain>/clocker/faq#favourite` |
| `https://<domain>/clocker/customize-label-faq` | `https://<domain>/clocker/faq#customize-label` |
| `https://<domain>/clocker/menubar-faq` | `https://<domain>/clocker/faq#menubar` |
| `https://<domain>/clocker/startup-faq` | `https://<domain>/clocker/faq#startup` |
| `https://<domain>/clocker/customize-format-faq` | `https://<domain>/clocker/faq#customize-format` |
| `https://<domain>/clocker/reset-faq` | `https://<domain>/clocker/faq#reset` |

For each: confirm the browser lands on the correct answer section after the redirect.

If any redirect doesn't fire (e.g., serves a 404 instead), the most likely cause is that the per-FAQ source file is still present in the repo or `_redirects` is missing the entry — re-check Tasks 2 and 3.

---

## Self-review

**Spec coverage:**
- Single page surface for all 7 FAQs → Task 1 ✓
- Question chips at top, answers below `<hr/>`, ↑ Back to top per answer → Task 1 ✓
- Anchor IDs match the slug table in the spec → Task 1 (chip `href`s and `<section id>`s) ✓
- `id="top"` on the heading for back-to-top → Task 1 ✓
- 8 image assets imported and rendered → Task 1 (Steps 1, 5) ✓
- Contact block preserved → Task 1 (Step 6) ✓
- Old URLs 301-redirect via `static/_redirects` → Task 2 ✓
- 7 source files deleted → Task 3 ✓
- Post-deploy verification of the redirects → Task 4 ✓

**Placeholder scan:** No "TBD"/"TODO". Every step has either complete code, an exact command, or a concrete visual check. ✓

**Type/name consistency:** Anchor slugs (`add`, `favourite`, `customize-label`, `menubar`, `startup`, `customize-format`, `reset`) appear identically in: chip `href`s (Task 1 Step 1), `<section id>`s (Task 1 Step 1), test list (Task 1 Step 3), `_redirects` lines (Task 2 Step 1), and the post-deploy table (Task 4 Step 2). Heading text matches between the spec table and the JSX. ✓
